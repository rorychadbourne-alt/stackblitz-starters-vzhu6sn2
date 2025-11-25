import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ljjezxmh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
```

---

## Step 5: Create `components` folder structure

In StackBlitz, create this folder structure:
```
app/
  page.tsx  (the homepage file I created)
components/
  CoverArtCard.jsx
lib/
  sanity.queries.js
  sanity.client.js (already exists)