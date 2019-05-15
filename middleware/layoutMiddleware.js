export default function ({ isClient, route }) {
  console.log('layoutMiddleware', `IsClient: ${isClient}`, `route: ${route.path}`);
}
