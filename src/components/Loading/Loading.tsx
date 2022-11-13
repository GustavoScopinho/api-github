import { LoadingContainer } from "./Loading.styled";
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export const Loading = () => {
    const container: any = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../json/loading.json')
        })
        lottie.setSpeed(2);
    }, [])

    return (
        <LoadingContainer>
            <div className="container" ref={container}></div>
            <h1>Carregando...</h1>
        </LoadingContainer>
    )
}
