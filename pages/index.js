import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  EmailWrapper,
  Banner,
  Winner,
  Promocode,
  Cta,
  FooterLinks
} from '../components'

const Home = () => {
  return (
    <PostonentsProvider
      theme={{
        typo: {
          fontFamily:
            'Styrene A Web, StyreneAWeb, Styrene, Arial, Tahoma, Stem, sans-serif'
        }
      }}>
      <EmailWrapper>
        <div style={{ backgroundColor: '#fff' }}>
          <HeaderLogo />
          <Banner />
          <Winner />
          <Promocode />
          <Cta />
          <FooterLinks />
        </div>
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export default Home
