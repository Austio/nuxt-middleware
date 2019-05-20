export default function ({ isClient, route }) {
  console.log('routeMiddleware', `IsClient: ${isClient}`, `route: ${route.path}`);

  return new Promise((resolve, reject) => {
    console.log('routerMiddleware Promise')
    setTimeout(() => {
      console.log('routerMiddleware Promise complete')
      if (process.client) {
        reject("I AM REJECTING")
      } else {
        resolve();
      }
    }, 5000)
  })
}
