import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import  Examples  from './collections/Examples'
import Users from './collections/Users'
import Websitehome from './collections/Websitehome'
import Upload from './collections/Upload'
import Navbar from './collections/Navbar'
// import { Websitehome } from './collections/Websitehome'
// import Upload from './collections/upload'

export default buildConfig({
  serverURL:process.env.PAYLOAD_PUBLIC_EXTERNAL_SEVER_URL,
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),

  cors:process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split('') : [],
  csrf:process.env.WHITELIST_ORIGINS ? process.env.WHITELIST_ORIGINS.split('') : [],

  
  collections: [Users,Examples,Navbar,Websitehome,Upload],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
