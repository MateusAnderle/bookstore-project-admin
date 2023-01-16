import { globalStyles } from "../styles/global"
import { Roboto } from '@next/font/google'
import Header from "@/components/Header";
import { MainContainer } from "@/styles/pages/centralizeBody";

globalStyles();

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </main>
  )
}
