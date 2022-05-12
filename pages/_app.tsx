import '../styles/globals.css';
// import '../styles/prose.css';
import '../styles/leerobProse.css';
import { ThemeProvider } from 'next-themes';

import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
