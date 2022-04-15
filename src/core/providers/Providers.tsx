import { QueryClient, QueryClientProvider } from 'react-query'
import UtilsProvider from './UtilsProvider'

const queryClient = new QueryClient()

const Providers: React.FC<{children?: React.ReactNode;}> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <UtilsProvider>
      {children}
    </UtilsProvider>
  </QueryClientProvider>
)

export default Providers
