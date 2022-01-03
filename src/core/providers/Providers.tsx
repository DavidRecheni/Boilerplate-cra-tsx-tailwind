import { FunctionComponent } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import UtilsProvider from './UtilsProvider';

const queryClient = new QueryClient();

const Providers: FunctionComponent = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <UtilsProvider>
      {children}
    </UtilsProvider>
  </QueryClientProvider>
);

export default Providers;
