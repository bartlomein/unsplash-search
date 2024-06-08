# Unsplash Search

This is a component to handle fetching, displaying, and filter images from the Unsplash API.

A user can type a query into the search bar and after pressing enter on their keyboard or pressing the search button, images will display. A user can further narrow down their search query by filtering on colors of the image as well as relevancy vs latest images.

A pagination component will be available on the bottom to navigate to more pages.

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env.local` file inside the project root and inside of that file insert your Unsplash API key like so: `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=XXXXXXX`

## Running

Run `npm run dev` inside project root

## Testing

Run `npm run test` inside the project root

### Libraries / Frameworks used

1. React
2. NextJS
3. React-query
4. Shadcn/ui
