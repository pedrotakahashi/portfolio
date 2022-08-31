import React, { useEffect, useState } from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { db } from "../../Firebase/fireBase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Content = () => {
  const [users, setUsers] = useState([{}]);
  const usersCollectionsRef = collection(db, "comentario")
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newComment, setNewComment] = useState("")


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionsRef);
      const mapping = data.docs.map((doc) => ({
        ...doc.data(), id: doc.id
      }));
      setUsers(mapping);
    };
    getUsers()
  }, [])

  const handleSubmit = async () => {
    await addDoc(usersCollectionsRef, { nome: newName, email: newEmail, comentarios: newComment })
    alert("Seu comentario foi enviado!")
    window.location.reload();
  }

  return (
    <Container className="content-contact">
      <Row lg={3} className="mx-auto">
        <Col></Col>
        <Col>
          <Form className="form">
            <Form.Group className="mb-3" >
              <Form.Label>Coloque um nome Legal</Form.Label>
              <Form.Control type="text" placeholder="Garurumon" onChange={(event => {
                setNewName(event.target.value);
              })} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Insira um Email Legal</Form.Label>
              <Form.Control type="email" placeholder="email@email" onChange={(event => {
                setNewEmail(event.target.value);
              })} />
              <Form.Text className="text-muted">
                Juro Solenemente não enviar seu nome para ninguem
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="textarea"
                placeholder="converse comigo :D"
                style={{ height: '100px' }}
                onChange={(event => {
                  setNewComment(event.target.value);
                })}
              />
            </Form.Group>
            <div className="box-button">
              <Button variant="primary" className="btn-submit" onClick={handleSubmit}>
                Enviar
              </Button>

            </div>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container >
  )
}
export default Content;
