import { bannerStyles as stls } from './bannerStyles'
import { Container, Row, Column, Link, Image } from 'postonents'

const Banner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Link href={'https://moscow.mba/?utm_campaign=emails&utm_term=newyears'}>
          <Column style={stls.column}></Column>
        </Link>
      </Row>
    </Container>
  )
}

export default Banner
