import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import schemas from './schemas/schemas'

export default defineConfig({
  name: 'default',
  title: 'Cozy Crochet',

  projectId: '5xkh5444',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
