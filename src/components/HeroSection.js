import React from 'react';

import HeroImg from '../Assets/deivid.svg';


import Ptext from '../components/Ptext';



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
                    <Ptext/>
                </div>

            </div>



        </div>
    );
}