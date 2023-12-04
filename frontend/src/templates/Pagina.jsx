
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Menu />
            <div>
                {
                    // filhos da página
                }
                {props.children} 
            </div>
        </>
    )
}
