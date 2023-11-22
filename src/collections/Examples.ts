import { CollectionConfig } from 'payload/types'

export const Examples: CollectionConfig = {
  slug: 'example-collection',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'pageTitle', // required
      type: 'text', // required
      required: true,
    },
    
  ],
}