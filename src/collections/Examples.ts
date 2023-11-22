import { CollectionConfig } from 'payload/types'

const Examples: CollectionConfig = {
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

export  default Examples