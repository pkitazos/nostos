import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "collaborators" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "collaborators" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_collaborators_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_collaborators_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "collaborators_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "collaborators" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"logo_id" integer,
  	"url" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "collaborators_id" integer;
  DO $$ BEGIN
   ALTER TABLE "collaborators" ADD CONSTRAINT "collaborators_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "collaborators_logo_idx" ON "collaborators" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "collaborators_updated_at_idx" ON "collaborators" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "collaborators_created_at_idx" ON "collaborators" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_collaborators_fk" FOREIGN KEY ("collaborators_id") REFERENCES "public"."collaborators"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_collaborators_id_idx" ON "payload_locked_documents_rels" USING btree ("collaborators_id");`)
}
