export default {
  name: 'album',
  title: 'Album',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'coverArt',
      title: 'Cover Art',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'artist',
      title: 'Artist',
      type: 'reference',
      to: [{type: 'artist'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    },
    {
      name: 'story',
      title: 'Album Story',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The story behind this album'
    },
    {
      name: 'tracks',
      title: 'Track List',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'relatedAlbums',
      title: 'Related Albums',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'album'}]}]
    },
    {
      name: 'relatedBooks',
      title: 'Related Books',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'book'}]}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      artist: 'artist.name',
      media: 'coverArt'
    },
    prepare(selection) {
      const {artist} = selection
      return {...selection, subtitle: artist && `by ${artist}`}
    }
  }
}