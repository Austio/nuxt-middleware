export default function ({ isClient, route }) {
  console.log('pageMiddleware', `IsClient: ${isClient}`, `route: ${route.path}`);
}
