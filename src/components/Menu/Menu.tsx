
import { MenuContainer } from "./Menu.styled";
import { BsGithub, BsFileEarmarkCodeFill } from "react-icons/bs";

export const Menu = () => {
    return (
        <>
            <MenuContainer>
                <div>
                    <a href="#">
                        <BsGithub />
                        <p>GitStats</p>
                    </a>
                </div>
                <div>
                    <a href="#">
                        <BsFileEarmarkCodeFill />
                        <p>GitHub</p>
                    </a>
                </div>
            </MenuContainer>
        </>
    )
}
