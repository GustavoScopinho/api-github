import { MenuContainer } from "./Menu.styled";
import { BsGithub, BsCodeSquare } from "react-icons/bs";
import { Link } from "react-router-dom"

export const Menu = () => {
    return (
        <>
            <MenuContainer>
                <div>
                    <Link to={`/`}>
                        <BsGithub />
                        <p>GitStats</p>
                    </Link>
                </div>
                <div>
                    <a target='_blank' href="https://github.com/GustavoScopinho/api-github">
                        <BsCodeSquare />
                        <p>GitHub</p>
                    </a>
                </div>
            </MenuContainer>
        </>
    )
}
