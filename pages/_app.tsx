import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { TabletContextProvider } from "../context/isTablet-Context.js"
import { MobileContextProvider } from "../context/isMobile-Context.js"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TabletContextProvider>
      <MobileContextProvider>
        <Component {...pageProps} />
      </MobileContextProvider>
    </TabletContextProvider>
  );
}

export default MyApp
