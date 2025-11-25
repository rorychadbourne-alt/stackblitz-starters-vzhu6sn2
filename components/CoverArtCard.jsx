import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity.client'

export default function CoverArtCard({ item }) {
  const { title, slug, coverArt, artist, type } = item
  
  // Determine the link path based on type
  const linkPath = type === 'album' ? `/album/${slug.current}` : `/book/${slug.current}`
  
  return (
    <Link href={linkPath} className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {coverArt && (
          <Image
            src={urlFor(coverArt).width(600).height(600).url()}
            alt={`${title} cover`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>
      
      <div className="mt-3">
        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>
        {artist && (
          <p className="text-sm text-gray-600 mt-1">
            {artist.name}
          </p>
        )}
        <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">
          {type}
        </p>
      </div>
    </Link>
  )
}