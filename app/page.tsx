import { getAllCoverArt } from '../lib/sanity.queries'
import GalleryGrid from '../components/GalleryGrid.jsx'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  const coverArt = await getAllCoverArt()

  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-light text-gray-900 tracking-tight">
            Cover Art Archive
          </h1>
          <p className="mt-3 text-gray-600 text-lg font-light">
            Celebrating the artists behind the artwork
          </p>
        </div>
      </header>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {coverArt.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-gray-500 text-lg font-light">
              No cover art yet. Add some albums or books in your{' '}
              <a href="/studio" className="text-gray-900 hover:text-gray-600 underline underline-offset-4">
                Sanity Studio
              </a>
              .
            </p>
          </div>
        ) : (
          <GalleryGrid coverArt={coverArt} />
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <p className="text-sm text-gray-500 text-center font-light tracking-wide">
            Giving credit to the artists who create the art we love
          </p>
        </div>
      </footer>
    </main>
  )
}