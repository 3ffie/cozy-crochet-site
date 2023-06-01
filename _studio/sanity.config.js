import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'

import schemas from './schemas/schemas.js'
import aboutMe from './structure/aboutMe.js'
import frontpage from './structure/frontpage.js'

//defineConfig was created with the studio so i choose to keep it
export default defineConfig({
  title: 'Cozy Crochet',

  projectId: '5xkh5444',
  dataset: 'production',

  plugins: [
    deskTool({
      title: 'Front Page',
      name: 'frontpage',
      structure: frontpage
    }), 
    
    deskTool({
      title: 'About Me',
      name: 'aboutMe',
      structure: aboutMe
    }), 

    visionTool()],

  schema: {
    types: schemas,
  },
})
