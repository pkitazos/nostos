import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "testimonials" ALTER COLUMN "quote" SET NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "logo_id" SET NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "testimonials" ALTER COLUMN "quote" DROP NOT NULL;
  ALTER TABLE "testimonials" ALTER COLUMN "logo_id" DROP NOT NULL;`)
}
