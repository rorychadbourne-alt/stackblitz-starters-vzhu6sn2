import { getAllCoverArt } from '../lib/sanity.queries'
import CoverArtCard from '../components/CoverArtCard.jsx'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const coverArt = await getAllCoverArt()

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Cover Art Archive
          </h1>
          <p className="mt-2 text-gray-600">
            Celebrating the artists behind the artwork
          </p>
        </div>
      </header>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {coverArt.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No cover art yet. Add some albums or books in your{' '}
              <a href="/studio" className="text-blue-600 hover:text-blue-800 underline">
                Sanity Studio
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {coverArt.map((item) => (
              <CoverArtCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-gray-500 text-center">
            Giving credit to the artists who create the art we love
          </p>
        </div>
      </footer>
    </main>
  )
}