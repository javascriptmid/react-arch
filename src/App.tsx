import { QueryClient, QueryClientProvider } from "react-query";
import Watch from "./features/watch/Watch";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Watch />
    </QueryClientProvider>
  );
}
