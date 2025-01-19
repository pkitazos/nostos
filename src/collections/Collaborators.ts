import type { CollectionConfig } from 'payload'

export const Collaborators: CollectionConfig = {
    slug: 'collaborators',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        }, 
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: false
        },   
        {
            name: 'url',
            type: 'text',
            required: true,
        }, 
       
    ],
}
