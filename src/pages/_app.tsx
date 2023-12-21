import type { AppProps } from 'next/app';
import { Provider } from 'urql';
import { client } from '../graphql';
import AllFonts from '../components/FontsComponent';
import '../styles/index.css';
import { UIInspector } from '@/utils/UIInspector';
import { GoogleTagManager } from '@next/third-parties/google';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <AllFonts />
      <GoogleTagManager gtmId="GTM-P38LDJR4" />
      <UIInspector enabled={false} />
      <Component {...pageProps} />
    </Provider>
  );
}
