import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity.client'

export default function CoverArtCard({ item }) {
  const { title, slug, coverArt, artist, type } = item
  
  // Determine the link path based on type
  const linkPath = type === 'album' ? `/album/${slug.current}` : `/book/${slug.current}`
  
  // Different aspect ratios: albums are square, books are portrait
  const isBook = type === 'book'
  const aspectClass = isBook ? 'aspect-[2/3]' : 'aspect-square'
  
  return (
    <Link href={linkPath} className="group block">
      {/* The artwork container with frame effect on hover */}
      <div className="relative">
        {/* The frame border - appears on hover */}
        <div className="absolute -inset-4 bg-white border-2 border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg" />
        
        {/* The artwork */}
        <div className={`relative ${aspectClass} overflow-hidden bg-gray-100`}>
          {coverArt && (
            <Image
              src={urlFor(coverArt).width(800).height(isBook ? 1200 : 800).url()}
              alt={`${title} by ${artist?.name}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}
          
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
        </div>
        
        {/* Gallery label - appears on hover in the frame */}
        <div className="absolute -bottom-3 left-0 right-0 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white px-3 py-2 border-t border-gray-200">
            {/* Title with inline label */}
            <div className="flex items-baseline gap-2">
              <span className="text-[9px] text-gray-400 uppercase tracking-widest font-medium">
                {type}
              </span>
              <h3 className="text-sm font-medium text-gray-900 leading-tight">
                {title}
              </h3>
            </div>
            
            {/* Artist with inline label and medium */}
            {artist && (
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[9px] text-gray-400 uppercase tracking-widest font-medium">
                  Artist
                </span>
                <p className="text-xs text-gray-600">
                  {artist.name}
                  {artist.medium && (
                    <span className="text-gray-500">, {artist.medium}</span>
                  )}
                </p>
              </div>
            )}
            
            {/* View details indicator */}
            <p className="text-[10px] text-gray-500 mt-2 text-right">
              View Details →
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}