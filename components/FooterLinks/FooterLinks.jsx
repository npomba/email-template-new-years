import { footerLinksStyles as stls } from './footerLinksStyles'
import { Row, Column, Footer, Link, Text, FullWidth } from 'postonents'

const FooterLinks = () => {
  return (
    <Footer alignment='center' style={stls.container}>
      <FullWidth style={stls.fullwidth} alignment='center'>
        <div style={stls.content} alignment='center'>
          <div style={stls.group1}>
            <span style={stls.label}>По всем вопросам пишите на</span>
            <br />
            <a style={stls.link} href='mailto:info@moscow.mba'>
              info@moscow.mba
            </a>
          </div>
          <div style={stls.group2}>
            <span style={stls.label}>Или звоните по телефонам</span>
            <br />
            <a style={stls.number1} href='tel:+78005002747'>
              +7 (800) 500-27-47
            </a>
            <a style={stls.number2} href='tel:+74951490020'>
              +7 (495) 149-00-20
            </a>
          </div>
        </div>
      </FullWidth>
    </Footer>
  )
}

export default FooterLinks
