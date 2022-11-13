import { MenuContainer } from "./Menu.styled";
import { BsGithub, BsCodeSquare } from "react-icons/bs";
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <>
            <MenuContainer>
                <div>
                    <Link title="Página inicial" to={`/`}>
                        <BsGithub />
                        <p>GitStats</p>
                    </Link>
                </div>
                <div>
                    <a target="_blank" rel="noreferrer" title="Repositório do projeto" href="https://github.com/GustavoScopinho/api-github">
                        <BsCodeSquare />
                        <p>GitHub</p>
                    </a>
                </div>
            </MenuContainer>
        </>
    )
}
