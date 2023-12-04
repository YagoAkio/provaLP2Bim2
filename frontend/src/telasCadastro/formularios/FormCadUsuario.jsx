import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col, FloatingLabel, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { buscarCategorias } from "../../redux/categoriaReducer";
import ESTADO from "../../recursos/estado";
import { toast } from "react-toastify";
import { adicionarUsuario, atualizarUsuario, buscarUsuarios } from "../../redux/usuarioReducer";

export default function FormCadUsuario(props) {
    const usuarioVazio = {
        id:'0', //se for string deixa só ''
        nickname:'', 
        urlAvatar:'', 
        dataIngresso:'', 
        mensagens:''
    }
    const estadoInicialUsuario = props.usuarioParaEdicao;
    const [usuario, setUsuario] = useState(estadoInicialUsuario);
    const [formValidado, setFormValidado] = useState(false);

    const { estado, mensagem, usuarios } = useSelector((state) => state.usuario);

    const dispatch = useDispatch();

  /*  useEffect(() => {
        dispatch(buscarUsuarios());
    }, [dispatch]);

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setCategoria({ ...categoria, [componente.name]: componente.value });
    }*/

    function manipularMudancas(e) {
        const componente = e.currentTarget;
        setUsuario({ ...usuario, [componente.name]: componente.value });
    }

    function manipularSubmissao(e) {
        const form = e.currentTarget;
        if (form.checkValidity()) {
            if (!props.modoEdicao) {
                dispatch(adicionarUsuario(usuario));
            }
            else {
                dispatch(atualizarUsuario(usuario));
                props.setModoEdicao(false);
                props.setUsuarioParaEdicao(categoriaVazia);
            }
            setUsuario(usuarioVazio); // ou sair da tela de formulário 
            setFormValidado(false);
        }
        else {
            setFormValidado(true);
        }

        e.stopPropagation();
        e.preventDefault();
    }

    if (estado === ESTADO.ERRO) {
        toast.error(({ closeToast }) =>
            <div>
                <p>{mensagem}</p>

            </div>
            , { toastId: estado });
    }
    else if (estado === ESTADO.PENDENTE) {
        toast(({ closeToast }) =>
            <div>
                <Spinner animation="border" role="status"></Spinner>
                <p>Processando a requisição...</p>
            </div>
            , { toastId: estado });
    }
    else {
        toast.dismiss();
        return (
            
            <Container>
                <h2>Cadastro de usuario</h2>
                <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="id:"
                                    className="mb-3"
                                >

                                    <Form.Control
                                        type="text"
                                        placeholder="0"
                                        id="id"
                                        name="id"
                                        value={usuario.id}
                                        onChange={manipularMudancas}
                                        disabled />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe o id do user</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="dataIngresso:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Informe dataIngresso"
                                        id="dataIngresso"
                                        name="dataIngresso"
                                        value={usuario.dataIngresso}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe dataIngresso</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                     <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="dataIngresso:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Informe dataIngresso"
                                        id="dataIngresso"
                                        name="dataIngresso"
                                        value={usuario.dataIngresso}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe dataIngresso</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="urlAvatar:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Informe urlAvatar"
                                        id="urlAvatar"
                                        name="urlAvatar"
                                        value={usuario.urlAvatar}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe urlAvatar</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group>
                                <FloatingLabel
                                    label="mensagens:"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        type="text"
                                        placeholder="Informe mensagens"
                                        id="mensagens"
                                        name="mensagens"
                                        value={usuario.mensagens}
                                        onChange={manipularMudancas}
                                        required />
                                </FloatingLabel>
                                <Form.Control.Feedback type="invalid">Informe mensagens</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} offset={5} className="d-flex justify-content-end">
                            <Button type="submit" variant={"primary"}>{props.modoEdicao ? "Alterar" : "Cadastrar"}</Button>
                        </Col>
                        <Col md={6} offset={5}>
                            <Button type="button" variant={"secondary"} onClick={() => {
                                props.exibirFormulario(false)
                            }
                            }>Voltar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}