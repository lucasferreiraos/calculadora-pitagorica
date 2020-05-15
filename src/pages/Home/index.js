import React from "react";
import { Link } from 'react-router-dom';
import GifPlayer from 'react-gif-player';
import gif from '../../assets/time-machine-car.gif';

import './styles.css';


export default function Home() {
    return(
        <div className="home-container">
            <h1>SEU PITÁGORAS, POR FAVOR, ME OUÇA!!!</h1>
            <p>
                Me chamo Lucas e eu venho do futuro, mais precisamente do ano 2020 d.C. no Século XXI e 
                preciso te dizer que não desista de tudo agora! De onde eu vim, quase tudo foi possível 
                ser construído diretamente e indiretamente através da matemática e, principalmente, 
                pelo seu cálculo que permite descobrir a medida de um lado de um triângulo-retângulo a 
                partir de dois lados conhecidos. Lá no futuro, nós chamamos a sua descoberta 
                de Teorema de Pitágoras.
            </p>

            <GifPlayer className="gif" gif={gif} still={gif} alt="Veículo apropriado para uma viagem tão longa..."/>
            
            <section className="footer">
                <p>
                    E, para te mostar a criatividade que os humanos desenvolveram ao longo dos anos, 
                    criei uma calculadora especialmente para realizar os cálculos do seu teorema. 
                    Clique no botão abaixo para conferir!
                </p>
                <button className="go-calculator">
                    <Link className="text-go-calculator" to="/calculator">Ir para a calculadora</Link>
                </button>
            </section>
            
        </div>
    );
}