export default {
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Book Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author/Artist',
      type: 'reference',
      to: [{ type: 'artist' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    },
    {
      name: 'story',
      title: 'Book Story',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The story behind this book',
    },
    {
      name: 'genre',
      title: 'Genre',
      type: 'string',
    },
    {
      name: 'relatedBooks',
      title: 'Related Books',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'book' }] }],
    },
    {
      name: 'relatedAlbums',
      title: 'Related Albums',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'album' }] }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverArt',
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
