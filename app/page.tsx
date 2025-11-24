export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">My Cover Art Site</h1>
        <p className="text-gray-600 mb-8">Coming soon...</p>
        <a
          href="/studio"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Go to Studio →
        </a>
      </div>
    </div>
  );
}
