import { CollectionConfig } from 'payload/types'

 const Navbar: CollectionConfig = {
  slug: 'navbar',
  access: {
    read: () => true,
  },
  fields: [
  
    {
      name: 'idnm', // required
     type: 'text', // required
   
    },
      {
        name:'navheading',
        type: 'text', // required
       
      },
     
    
  ],
}
export default Navbar