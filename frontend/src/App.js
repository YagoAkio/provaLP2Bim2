import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";//componente
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TelaCadastroUsuario from "./telasCadastro/TelaCadastroUsuario";
import TelaMensagem from "./telasCadastro/TelaMensagem";
import Menu from "./templates/Menu";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {
            }
            {/* <Route path="/usuario" element={<TelaCadastroUsuario />} /> */}
            <Route path="/mensagem" element={<TelaMensagem />} />
            <Route path="/" element={<Menu />} />
            {
            }
          </Routes>
        </BrowserRouter>
      </Provider>
      <ToastContainer/>
    </div>
  );
}

export default App;