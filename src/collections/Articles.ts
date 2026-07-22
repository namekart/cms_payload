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
  hooks: {
    beforeChange: [
      ({ data, originalDoc }) => {
        if (data._status === 'published' && !originalDoc?.publishedAt) {
          data.publishedAt = new Date().toISOString()
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
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
