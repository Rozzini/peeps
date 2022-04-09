import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    appId="g7IWqFqURm0WprAjxgWgfZW2aCa8stp9S12TMlkP"
    serverUrl="https://bxfzylxzfyqz.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp
