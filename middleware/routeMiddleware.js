export default function ({ isClient, route }) {
  console.log('routeMiddleware', `IsClient: ${isClient}`, `route: ${route.path}`);

  return new Promise((resolve, reject) => {
    console.log('routerMiddleware Promise')
    setTimeout(() => {
      console.log('routerMiddleware Promise complete')
      resolve();
    }, 5000)
  })
}
