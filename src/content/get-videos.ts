import { payload } from "@/lib/db"


export async function getVideos() {
    return await payload.find({collection: 'media'}).then(res=>res.docs)
}
