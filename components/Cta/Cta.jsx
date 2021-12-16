import { ctaStyles as stls } from './ctaStyles'
import { Container, Row, Column, Image, Link } from 'postonents'

const Cta = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <Link href={'https://moscow.mba?utm_campaign=emails&utm_term=newyears'} style={stls.btn}>
              <span style={stls.link}>Выбрать программу</span>
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Cta
