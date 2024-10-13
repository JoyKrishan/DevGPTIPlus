import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

      <QueryClientProvider client={queryClient}>
          <TamaguiProvider config={tamaguiConfig}>
            <RootLayoutNav />
          </TamaguiProvider>
      </QueryClientProvider>