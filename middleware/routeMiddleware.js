export default function ({ isClient, route }) {
  console.log('routeMiddleware', `IsClient: ${isClient}`, `route: ${route.path}`);
}
