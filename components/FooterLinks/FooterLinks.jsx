import { footerLinksStyles as stls } from './footerLinksStyles'
import { Row, Column, Footer, Link, Text } from 'postonents'

const FooterLinks = () => {
  return (
    <Footer alignment='center' style={stls.container}>
      <Row alignment='center' style={stls.fullwidth}>
        <Column alignment='center' style={stls.fullwidth}>
          <div style={stls.content}>
            <div style={stls.group1}>
              <Text style={stls.label}>По всем вопросам пишите на</Text>
              <br />
              <a style={stls.link} href='mailto:info@moscow.mba'>
                info@moscow.mba
              </a>
            </div>
            <div style={stls.group2}>
              <Text style={stls.label}>Или звоните по телефонам</Text>
              <br />
              <a style={stls.number1} href='tel:+78005002747'>
                +7 (800) 500-27-47
              </a>
              <a style={stls.number2} href='tel:+74951490020'>
                +7 (495) 149-00-20
              </a>
            </div>
          </div>
        </Column>
      </Row>
    </Footer>
  )
}

export default FooterLinks
