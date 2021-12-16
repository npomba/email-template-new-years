import { PostonentsProvider } from 'postonents'
import {
  HeaderLogo,
  Hello,
  EmailWrapper,
  HeaderLinks,
  LeaderboardsMonth,
  LeaderboardsSixMonths,
  Banner,
  Winner,
  Promocode,
  Prize,
  FooterContacts,
  FooterLinks,
  Footer
} from '../components'

const Home = () => {
  return (
    <PostonentsProvider theme={{ typo: { fontFamily: 'Stem, sans-serif' } }}>
      <EmailWrapper>
        <HeaderLogo />
        <HeaderLinks />
        <Banner />
        <Hello />
        <Promocode />
        <FooterContacts />
        <FooterLinks />
        <Footer />
      </EmailWrapper>
    </PostonentsProvider>
  )
}

export default Home
