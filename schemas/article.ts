import { defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'summary', type: 'text', title: 'Summary' },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }],
    },
  ],
})
