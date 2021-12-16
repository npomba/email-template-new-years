import { headerLogoStyles as stls } from './headerLogoStyles'
import { Header } from 'postonents'

const HeaderLogo = () => {
  return (
    <Header
      logo='https://res.cloudinary.com/npomba/image/upload/v1639648981/email-template-new-years/logo_m0nc48.png'
      logoHeight={89}
      style={stls.container}></Header>
  )
}

export default HeaderLogo
