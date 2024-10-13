final GraphQLService graphQLService = GraphQLService(client);

// In your widget creation logic or route navigation:
Navigator.push(
  context,
  MaterialPageRoute(
    builder: (context) => ExchangeRateDetail('USD', graphQLService),
  ),
);