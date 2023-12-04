import { Button, Container, Spinner, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ESTADO from "../../recursos/estado";
import { buscarUsuarios, removerUsuario } from "../../redux/usuarioReducer";
export default function TabelaUsuarios(props) {
    const { estado, mensagem, usuarios } = useSelector((state) => state.usuario);
    const dispatch = useDispatch();
    
    function editarUsuario(usuario) {
        props.setUsuarioParaEdicao(usuario);
        props.setModoEdicao(true);
        props.exibirFormulario(true);

    }
    useEffect(() => {
        dispatch(buscarUsuarios());
    }, [dispatch]);

    function apagarMensagens() {
        setTimeout(() => {
            toast.dismiss();
        }, 2000)
        return null;
    }
    return (
        <Container>
            {estado === ESTADO.ERRO ?
                toast.error(({ closeToast }) =>
                    <div>
                        <p>{mensagem}</p>

                    </div>
                    , { toastId: estado })
                :
                null
            }
            {
                estado === ESTADO.PENDENTE ?
                    toast(({ closeToast }) =>
                        <div>
                            <Spinner animation="border" role="status"></Spinner>
                            <p>Processando a requisição...</p>
                        </div>
                        , { toastId: estado })
                    :
                    null
            }

            {
            
            estado === ESTADO.OCIOSO ?
            apagarMensagens()
            :
            null
            }
            <Button type="button" onClick={() => {
                props.exibirFormulario(true);
            }}>Novo Usuario</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nickname</th>
                        <th>urlAvatar</th>
                        <th>dataIngresso</th>
                        <th>mensagens</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map((usuario) => {
                            return (<tr key={usuario.id}>
                                <td>{usuario.nickname}</td>
                                <td>{produto.urlAvatar}</td>
                                <td>{produto.dataIngresso}</td>
                                <td>{produto.mensagens}</td>
                                <td>
                                    <Button variant="danger" onClick={() => {
                                        removerUsuario
                                    }}>
                                       Apagar
                                    </Button> 
                                    <Button onClick={() => {
                                    }
                                    } variant="warning">   
                                       Alterar                               
                                    </Button>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
}