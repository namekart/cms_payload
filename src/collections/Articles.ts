import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'reportDate', '_status', 'updatedAt'],
  },
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Domain Sales', value: 'domain-sales' },
        { label: 'Funding', value: 'funding' },
      ],
    },
    {
      name: 'reportDate',
      type: 'date',
      required: true,
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'contentMd',
      type: 'textarea',
      admin: {
        description: 'Markdown body, rendered at read time on the blog.',
      },
    },
    {
      name: 'metrics',
      type: 'json',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
