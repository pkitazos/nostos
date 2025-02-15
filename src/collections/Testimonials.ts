import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'client_name',
  },
  fields: [
    {
      name: 'client_name',
      label: 'Client Name',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'v1', value: 'v1' },
        { label: 'v2', value: 'v2' },
      ],
    },
  ],
}
