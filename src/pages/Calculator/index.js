import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import calculator from '../../assets/calculadora.jpg';

import './styles.css'


export default function Calculator() {
    const [cat_op, setCatOp] = useState();
    const [cat_adj, setCatAdj] = useState();
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const sendValues = async (e) => {
        e.preventDefault();

        const data = {
            cat_op,
            cat_adj
        }

        const response = await api.post('', data);
        setResult(response.data.hip) || setError(response.data.mensagem);
    }

    return (
        <div className ="calculator-container">

            <h1>Calculadora Pitagórica</h1>

            <p id="text-part1">
                Seu Pitágoras, você deve estar se perguntando: meu Zeus, o que Hades é uma calculadora??
                Acho que o senhor deve - ou deveria - conhecer o Ábaco, que o pessoal da Mesopotâmia criou há uns
                2000 anos atrás, ela é considerada a primeira máquina de calcular da história. A humanidade foi aperfeiçoando
                essa ferramenta até chegarmos em algo similar a essa imagem.
            </p>

            <img className="calculadora" src={calculator}/>           
            
            <p id="text-part2">
                Esta máquina que tenho em mãos é chamada de computador, que foi criado graças a sucessivos avanços da
                Matemática ao longo dos milênios. Depois eu posso te contar mais detalhes sobre a criação do computador,
                pois essa é uma história bem longa e divertida.

                Logo abaixo temos a exibição de um retângulo apenas com as bordas desenhadas. É dentro desse retângulo
                que o resultado do cálculo será exibido ou uma mensagem de erro. Em seguida temos dois retângulos com 
                os nomes dos catetos. É nesse lugar que deve inserir os números para o cálculo.
                O botão com a palavra "Calcular" serve para executar o algoritmo que você criou. Assim que você clicar
                no botão, os valores serão exibidos ao lado dos nomes, substituindo os zeros. Como essa calculadora é simples,
                recomendo que use apenas números que pertencem ao conjunto dos números naturais.
            </p>

            
            <form onSubmit={sendValues}>
                <input
                    placeholder="Cateto oposto"
                    type="text"
                    value={cat_op}
                    onChange={e => setCatOp(parseFloat(e.target.value, 10))}
                />

                <input
                    placeholder="Cateto adjacente"
                    type="text"
                    value={cat_adj}
                    onChange={e => setCatAdj(parseFloat(e.target.value, 10))}
                /> 

                <button type="submit">Calcular</button>
            </form>
            
            <div className="result">
                { result 
                    ? <h4 id="hip">{`Hipotenusa: ${result.toFixed(2)}`}</h4>
                    : <h4 id="error">{`${error}`}</h4>
                }
            </div>

            <Link className="back-link" to="/">
                <FiArrowLeft size={16} color="#5386E4"/>
                Voltar para Home
            </Link>

        </div>
    );

}