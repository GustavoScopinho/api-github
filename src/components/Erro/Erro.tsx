import { ErroContainer } from "./Erro.styled";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Link } from "react-router-dom";

export const Erro = () => {
    const container: any = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../json/error.json')
        })
    }, [])

    return (
        <ErroContainer>
            <div className="container" ref={container}></div>
            <h1>Oops, erro!</h1>
            <h2>404 - Página não encontrada</h2>
            <Link to={`/`}>
            <button>Voltar ao início</button>
            </Link>
        </ErroContainer>
    )
}
