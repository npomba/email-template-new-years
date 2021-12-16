import { HelloStyles as stls } from './helloStyles'
import { Container, Row, Column, Link } from 'postonents'

const Hello = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Здравствуйте!</p>
            <p style={stls.p} align='center'>
              Участвуйте в главной распродаже года! <br /> Успейте забрать
              скидку до <span style={stls.highlight}>30 ноября</span>
            </p>
            <p style={stls.pDiscount} align='center'>
              -10%
            </p>
            <p style={stls.pNotice} align='center'>
              * от итоговой цены на сайте
            </p>
            <Link href={'https://moscow.mba/?utm_campaign=emails&utm_term=newyears'} style={stls.btn}>
              <span style={stls.link}>Получить скидку</span>
            </Link>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Hello
