import { client } from './sanity.client'

// Fetch all albums with their artist info including medium
export async function getAllAlbums() {
  return client.fetch(
    `*[_type == "album"] | order(releaseDate desc) {
      _id,
      title,
      slug,
      coverArt,
      releaseDate,
      artist->{
        _id,
        name,
        slug,
        medium
      }
    }`
  )
}

// Fetch all books with their author info including medium
export async function getAllBooks() {
  return client.fetch(
    `*[_type == "book"] | order(publishDate desc) {
      _id,
      title,
      slug,
      coverArt,
      publishDate,
      author->{
        _id,
        name,
        slug,
        medium
      }
    }`
  )
}

// Fetch all cover art (albums + books combined)
export async function getAllCoverArt() {
  const albums = await getAllAlbums()
  const books = await getAllBooks()
  
  // Combine and add a type field so we know what each item is
  const combined = [
    ...albums.map(item => ({ ...item, type: 'album' })),
    ...books.map(item => ({ ...item, type: 'book', artist: item.author }))
  ]
  
  // Sort by date (most recent first)
  return combined.sort((a, b) => {
    const dateA = new Date(a.releaseDate || a.publishDate || 0)
    const dateB = new Date(b.releaseDate || b.publishDate || 0)
    return dateB - dateA
  })
}

// Fetch single album by slug
export async function getAlbumBySlug(slug) {
  return client.fetch(
    `*[_type == "album" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      coverArt,
      releaseDate,
      story,
      tracks,
      artist->{
        _id,
        name,
        slug,
        image,
        medium
      },
      relatedAlbums[]->{
        _id,
        title,
        slug,
        coverArt
      },
      relatedBooks[]->{
        _id,
        title,
        slug,
        coverArt
      }
    }`,
    { slug }
  )
}

// Fetch single book by slug
export async function getBookBySlug(slug) {
  return client.fetch(
    `*[_type == "book" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      coverArt,
      publishDate,
      story,
      genre,
      author->{
        _id,
        name,
        slug,
        image,
        medium
      },
      relatedBooks[]->{
        _id,
        title,
        slug,
        coverArt
      },
      relatedAlbums[]->{
        _id,
        title,
        slug,
        coverArt
      }
    }`,
    { slug }
  )
}

// Fetch artist by slug with their work
export async function getArtistBySlug(slug) {
  return client.fetch(
    `*[_type == "artist" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      image,
      bio,
      website,
      medium,
      "albums": *[_type == "album" && references(^._id)] {
        _id,
        title,
        slug,
        coverArt,
        releaseDate
      },
      "books": *[_type == "book" && references(^._id)] {
        _id,
        title,
        slug,
        coverArt,
        publishDate
      },
      relatedArtists[]->{
        _id,
        name,
        slug,
        image,
        medium
      }
    }`,
    { slug }
  )
}