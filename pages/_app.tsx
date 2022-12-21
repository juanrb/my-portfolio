import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}
