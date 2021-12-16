import { PromocodeStyles as stls } from './promocodeStyles'
import { Container, Row, Column, Link } from 'postonents'

const Promocode = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>—45%</p>
            <p style={stls.p}>
              Действует до <span style={stls.highlight}>5 января</span> на все{' '}
              <span style={stls.highlight}>online-программы</span> по промокоду
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Promocode
