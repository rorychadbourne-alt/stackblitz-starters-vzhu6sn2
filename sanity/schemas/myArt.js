export default {
  name: 'myArt',
  title: 'My Art',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Artwork Title',
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
      name: 'image',
      title: 'Artwork Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'createdDate',
      title: 'Created Date',
      type: 'date'
    },
    {
      name: 'story',
      title: 'Story Behind the Art',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The story and inspiration behind this piece'
    },
    {
      name: 'medium',
      title: 'Medium',
      type: 'string',
      description: 'e.g., Digital, Oil, Watercolor, Mixed Media'
    },
    {
      name: 'relatedAlbums',
      title: 'Related Albums',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'album'}]}],
      description: 'Albums that inspired or relate to this artwork'
    },
    {
      name: 'relatedBooks',
      title: 'Related Books',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'book'}]}],
      description: 'Books that inspired or relate to this artwork'
    },
    {
      name: 'relatedArtists',
      title: 'Related Artists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artist'}]}],
      description: 'Artists who influenced this piece'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
}