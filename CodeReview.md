- remove console.log() statements from code before shipping
- abstract out server domain and other constants to a constant file
- remove unused code
- home.js: 3 types of styling are used:
  - inline
  - JS object
  - CSS
  be consistent with the styling format being used
- infoCard.js: const setColor isn't being used anywhere
- HomeCoinList.js: 
  - nice use of state.status!
  - upcomingIcosList, closedIcosList, activeIcosList could've been the same re-usable 'list' component
    (same in coinlist.js)
- main.js: abstract out 'list' components
- allocate.js: if allocate API fails, do more than simply console.logging the error. Display the error to the user in a proper format.
  - Ideally make this API async