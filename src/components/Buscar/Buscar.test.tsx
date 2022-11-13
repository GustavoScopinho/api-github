import { render, screen } from "@testing-library/react";
import { BuscarUsuario } from "./BuscarUsuario";

describe('testa se o título está na tela', () => {
    test('deve achar o título na tela pelo texto', () => {
        render(<BuscarUsuario />);

        const titulo = screen.getByText(/GitStats/);

        expect(titulo).toBeInTheDocument();
    })
    test('deve achar o título na tela pela tag', () => {
        render(<BuscarUsuario />);

        const titulo = screen.getByRole('heading', { level: 1 });

        expect(titulo).toBeInTheDocument();
    })
})

describe('testa se a descrição está na tela', () => {
    test('deve achar a descrição na tela pelo texto', () => {
        render(<BuscarUsuario />);

        const titulo = screen.getByText(/Digite seu nome de usuário e veja informações sobre seu perfil e seus repositórios!/);

        expect(titulo).toBeInTheDocument();
    })
    test('deve achar a descrição na tela pela tag', () => {
        render(<BuscarUsuario />);

        const titulo = screen.getByRole('heading', { level: 2 });

        expect(titulo).toBeInTheDocument();
    })
})

test('deve achar o botão na tela', () => {
    render(<BuscarUsuario />);

    const botao = screen.getByRole('button');

    expect(botao).toBeInTheDocument();
})

test('deve achar o input pelo texto de placeholder na tela', () => {
    render(<BuscarUsuario />);

    const input = screen.getByPlaceholderText('username');
    expect(input).toBeInTheDocument();
})