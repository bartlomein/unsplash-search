# Unsplash Search

This is a component to handle fetching, displaying, and filtering images from the Unsplash API.

A user can type a query into the search bar and after pressing enter on their keyboard or pressing the search button, images will display. A user can further narrow down their search query by filtering on colors of the image as well as relevancy vs latest images.

A pagination component will be available on the bottom to navigate to more pages.

## Installation

1. Clone the repository
2. Run `npm install`
3. Create a `.env.local` file inside the project root and inside of that file insert your Unsplash API key like so: `UNSPLASH_ACCESS_KEY=XXXXXXX`

## Running

Run `npm run dev` inside project root

## Testing

Run `npm run test` inside the project root

### Versions

This application has 2 versions:

1. First was made with client side rendering. Was made that way for quicker reactivity. To see it, checkout to commit `0e6a636846476e7b92f18cf8a6a8d932651874ce`. Note for installation: once checked out to this version, you will need to change the name of `UNSPLASH_ACCESS_KEY` to `PUBLIC_NEXT_UNSPLASH_ACCESS_KEY` inside of your `.env.local` file.

2. Refactored later to SSR. After thinking for a little bit, decided to refactor to SSR to obfuscate the API key, be able to go straight to a query based on query parameters, cashing, etc.

### Libraries / Frameworks used

1. React
2. NextJS
3. React-query
4. Shadcn/ui
