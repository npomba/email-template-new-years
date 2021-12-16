import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  EmailWrapper,
  Banner,
  Winner,
  Promocode,
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
        <HeaderLogo />
        <Banner />
        <Winner />
        <Promocode />
        <FooterLinks />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export default Home
