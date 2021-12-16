import { winnerStyles as stls } from './winnerStyles'
import { Container, Row, Column, Image } from 'postonents'
import { toNumberWithSpaces } from '../../helpers'

const Winner = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <p style={stls.p}>
            В канун Нового года мы все строим планы на будущее, даем себе новые{' '}
            обещания. <br />А еще это{' '}
            <span style={stls.strong}>время акций и скидок</span>
          </p>
          <p style={stls.p}>
            Не тратьте деньги на ненужные вещи — купите понравившуюся{' '}
            программу обучения<span style={stls.strong}>с выгодой</span> и
            сделайте шаг навстречу переменам. <br />Вложения в себя всегда
            окупаются!
          </p>
          <p style={stls.pLarge}>
            Выберите программу обучения, которая изменит Вашу жизнь!
          </p>
        </Column>
      </Row>
    </Container>
  )
}

export default Winner
