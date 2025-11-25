'use client'

export default function FilterBar({ activeFilter, setActiveFilter, activeSort, setActiveSort }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'album', label: 'Albums' },
    { id: 'book', label: 'Books' },
  ]

  const sorts = [
    { id: 'date', label: 'By Date' },
    { id: 'title', label: 'A-Z' },
  ]

  return (
    <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
      {/* Filter Pills */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium mr-2">
          Filter
        </span>
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium transition-all
              ${activeFilter === filter.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Sort Pills */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 uppercase tracking-wider font-medium mr-2">
          Sort
        </span>
        {sorts.map((sort) => (
          <button
            key={sort.id}
            onClick={() => setActiveSort(sort.id)}
            className={`
              px-4 py-1.5 rounded-full text-sm font-medium transition-all
              ${activeSort === sort.id
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }
            `}
          >
            {sort.label}
          </button>
        ))}
      </div>
    </div>
  )
}