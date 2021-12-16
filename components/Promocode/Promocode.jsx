import { PromocodeStyles as stls } from './promocodeStyles'
import { Container, Row, Column, Link } from 'postonents'

const Promocode = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>По промокоду:</p>
            <p style={stls.p} align='center'>
              BLACKFRIDAY
            </p>
            <Link href={'https://ipo.msk.ru'} style={stls.btn}>
              <span style={stls.link}>Получить скидку</span>
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Promocode
