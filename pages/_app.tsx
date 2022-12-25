import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const queryclient = new QueryClient()
  return (
    <QueryClientProvider client={queryclient}>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
