# Drone Challenge

## Project setup

```sh
# install dependencies
yarn/pnpm/npm install

# Run the api and the frontend
yarn/pnpm/npm run start-dev

# Run the tests
yarn/pnpm/npm test
```

## Highlights

-   Used tanstack query to fetch data and cache it
-   Used nuqs to manage the query params since in a real-world scenario specially apps with maps or coordinates, query params should be used to easily manage and share the state
-   I removed the mutiple captures (x) from the same coordinates before sending it to the backend to make the app more efficient (@ remove-duplicate.ts util)
-   You can use arrow keys to navigate the drone and Enter to capture the billboard on the current position

## Notes

-   The API call was delayed by 250ms to simulate a real-time API call

## Things that can be improved/things that need to be done to productionise the app

-   The UI/UX of the app could be improved
-   The app could be made more responsive
-   Images should be cached and put into a CDN
-   API resposes should be cached since billboards positions don't change that often
