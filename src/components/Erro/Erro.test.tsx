import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Erro } from "./Erro";

describe('testa se o título do erro está na tela', () => {
    test('deve achar o título do erro na tela pelo texto', () => {
        render(
        <MemoryRouter>
            <Erro />
        </MemoryRouter>
        );
    
        const titulo = screen.getByText(/Oops, erro!/);
        
        expect(titulo).toBeInTheDocument();
    })
    test('deve achar o título do erro na tela pela tag', () => {
        render(
        <MemoryRouter>
            <Erro />
        </MemoryRouter>
        
        );
    
        const titulo = screen.getByRole('heading', { level: 1 });

        expect(titulo).toBeInTheDocument();
    })
})

describe('testa se a descrição do erro está na tela', () => {
    test('deve achar a descrição do erro na tela pelo texto', () => {
        render(
        <MemoryRouter>
            <Erro />
        </MemoryRouter>
        );
    
        const titulo = screen.getByText(/404 - Página não encontrada/);
        
        expect(titulo).toBeInTheDocument();
    })
    test('deve achar a descrição do erro na tela pela tag', () => {
        render(
        <MemoryRouter>
            <Erro />
        </MemoryRouter>
        );
    
        const titulo = screen.getByRole('heading', { level: 2 });

        expect(titulo).toBeInTheDocument();
    })
})

test('deve achar o botão na tela', () => {
    render(
        <MemoryRouter>
            <Erro />
        </MemoryRouter>
    );

    const botao = screen.getByRole('button');

    expect(botao).toBeInTheDocument();
})