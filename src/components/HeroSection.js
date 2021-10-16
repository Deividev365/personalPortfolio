import React from 'react';

import HeroImg from '../Assets/deivid.jpg';

import Ptext from '../components/Ptext';
import Button from '../components/Button';

import '../styles/HeroSection.css'

export default function HeroSection() {
    return(
        <div>
            <div className="container">

                <h1 className="hero-heading">
                    <span>Olá! Meu nome é, </span>
                    <span>Deivid Almeida.</span>
                </h1>

                <div className="hero-img">
                    <img src={HeroImg} alt="hero-img" />
                </div>

                <div className="hero-info">

                    <Ptext>
                    Teste Teste Teste
                    Teste Teste TesteTeste
                    Teste TesteTeste Teste
                    TesteTeste Teste Teste
                    </Ptext>

                <Button>Aqui é o Botão</Button>

                </div>
            </div>
        </div>
    );
}