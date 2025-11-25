export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'medium',
      title: 'Medium/Discipline',
      type: 'string',
      description: 'e.g., Sculptor, Photographer, Illustrator, Designer',
      placeholder: 'Photographer'
    },
    {
      name: 'image',
      title: 'Artist Photo',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url'
    },
    {
      name: 'relatedArtists',
      title: 'Related Artists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artist'}]}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'medium',
      media: 'image'
    }
  }
}