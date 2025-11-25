'use client'

import { useState, useMemo } from 'react'
import CoverArtCard from './CoverArtCard.jsx'
import FilterBar from './FilterBar.jsx'

export default function GalleryGrid({ coverArt }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeSort, setActiveSort] = useState('date')

  // Filter and sort logic
  const filteredAndSorted = useMemo(() => {
    // First, filter
    let filtered = coverArt
    if (activeFilter !== 'all') {
      filtered = coverArt.filter(item => item.type === activeFilter)
    }

    // Then, sort
    let sorted = [...filtered]
    if (activeSort === 'title') {
      sorted.sort((a, b) => a.title.localeCompare(b.title))
    } else if (activeSort === 'date') {
      sorted.sort((a, b) => {
        const dateA = new Date(a.releaseDate || a.publishDate || 0)
        const dateB = new Date(b.releaseDate || b.publishDate || 0)
        return dateB - dateA
      })
    }

    return sorted
  }, [coverArt, activeFilter, activeSort])

  return (
    <>
      {/* Filter Bar */}
      <FilterBar
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
      />

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-16 pt-16">
        {filteredAndSorted.map((item) => (
          <CoverArtCard key={item._id} item={item} />
        ))}
      </div>
    </>
  )
}