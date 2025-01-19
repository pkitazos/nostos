import { payload } from "@/lib/db"


export async function getCollaborators() {
    return await payload.find({collection: 'collaborators'}).then(res=>res.docs)
}
