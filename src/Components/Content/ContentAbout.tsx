import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import profilePicture from '../../Assets/images/mypic.jpeg'
import maverick from '../../Assets/images/maverick.gif'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Content = () => {
  const character = 'https://www.tibia.com/community/?name=Maverick+Destroyer';

  return (
    <Container className="content-contact">
      <Row className="mx-auto">
        <Col></Col>
        <Col>
          <Card className="card-about-me">
            <Card.Img variant="top" src={profilePicture} />
            <Card.Body>
              <Card.Title>It's Me</Card.Title>
              <Card.Text>
                Meu nome é Pedro Takahashi <br />
                Sou desenvolvedor front end, com foco no uso em React. <br />
                Fora daqui sou um aspirante a Bárbaro e Bardo <br />
                Jogador assíduo de tibia, com um Elite Knight Lv 240 em Luminera
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="card-tibia">
            <Card.Img variant="top" src={maverick} />
            <Card.Body>
              <Card.Title>Maverick Destroyer</Card.Title>
              <Card.Text>
                Elite Knight - 242<br />
                Luminera <br />

              </Card.Text>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  )
}
export default Content;
