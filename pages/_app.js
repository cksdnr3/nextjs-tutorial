import 'semantic-ui-css/semantic.min.css'
import Footer from '../src/components/Footer'
import Top from '../src/components/Top'

function MyApp({ Component, pageProps }) {
  return (
    <div style={{width: '1000px', margin: '0 auto'}}>
      <div style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
        <Top />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
    )
}

export default MyApp
