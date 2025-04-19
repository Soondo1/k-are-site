import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import article from './schemas/article'

export default defineConfig({
  projectId: 'your_project_id', // replace if needed
  dataset: 'production',
  plugins: [deskTool()],
  basePath: '/studio',
  schema: {
    types: [article],
  },
})
