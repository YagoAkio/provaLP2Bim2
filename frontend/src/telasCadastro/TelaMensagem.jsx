import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadUsuario from "./formularios/FormCadUsuario";
import TabelaUsuarios from "./tabelas/TabelaUsuarios";
import { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';


export default function TelaMensagem(props) {
    // const [exibirFormulario, setExibirFormulario] = useState(false);
    // const [usuarioParaEdicao, setUsuarioParaEdicao] = useState({
    //     codigo: '0',
    //     descricao: ''
    // });
    // const [modoEdicao, setModoEdicao] = useState(false);

    const Chat = () => {
        const [messages, setMessages] = useState([]);
        const [newMessage, setNewMessage] = useState('');
      
        const handleSendMessage = () => {
          if (newMessage.trim() !== '') {
            setMessages([...messages, newMessage]);
            setNewMessage('');
          }
        };};

    return (
        <Container>
          <Row>
            <Col>
              <h1>Chat</h1>
              <ListGroup>
                {messages.map((message, index) => (
                  <ListGroup.Item key={index}>{message}</ListGroup.Item>
                ))}
              </ListGroup>
              <Form>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Digite sua mensagem..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSendMessage}>
                  Enviar
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    
}