import React from "react"
import { Card, Button, Container, Row, Col } from "react-bootstrap"
import { GrGithub } from "react-icons/gr";
import { BiCodeAlt } from "react-icons/bi";
import { RiGameLine } from "react-icons/ri";
import { DiJavascript1 } from "react-icons/di";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


const Content = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Card className="card-content">
            <Card.Body className="card-body">
              <Card.Title className="card-title">Pedro Takahashi - Front End Developer</Card.Title>
              <Card.Text>
                Olá, eu sou Pedro Takahashi e este é meu portifolio no github, é so clicar e conhecer
              </Card.Text>
              <Button variant="#563d7c" href="https://github.com/pedrotakahashi/" target="blank"><GrGithub className="icon-github" /></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="central-card">
            <Card.Body>
              <Card.Title className="card-title">Desenvolvimento FrontEnd</Card.Title>
              <Card.Text>
                Eu ainda nao tenho um texto aqui mas vou pensar em algo
              </Card.Text>
              <BiCodeAlt className="icon-card" />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="central-card middle-card">
            <Card.Body>
              <Card.Title className="card-title">Código e Diversão</Card.Title>
              <Card.Text>
                Criando projetos com temas de jogos, melhorando o aprendizado no dominio da linguagem
              </Card.Text>
              <RiGameLine className="icon-card" />
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="central-card">
            <Card.Body>
              <Card.Title className="card-title">Bibliotecas em JS</Card.Title>
              <Card.Text>
                Criando projetos com foco em JavaScript, utilizando React.JS
              </Card.Text>
              <DiJavascript1 className="icon-card" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
export default Content;
