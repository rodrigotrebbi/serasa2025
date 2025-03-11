'use client'
import { useState } from "react";
import "./quiz.css"


function Quiz() {

    const [ p1, alteraP1 ] = useState(0)    
    const [ p2, alteraP2 ] = useState(0) 
    const [ p3, alteraP3 ] = useState(0) 
    const [ p4, alteraP4 ] = useState("") 
    const [ total, alteraTotal ] = useState(0) 

    const [ selecionado, alteraSelecionado] = useState(["","","",""])

    function calculaPontos(){

        if( p4 =="Tropa de Elite"){
            alteraTotal(p1+p2+p3+1)
        }else{
            alteraTotal(p1+p2+p3)
        }
    }
   
    return (  
        <div>
            <h1> Quiz Roddz</h1>
            <p> Assinale a opção correta!</p>

            <hr/>

            <h2>Qual a cor mais utilizada pelo personagem Scorpion?</h2> 
            <label> <input name="P1" type="radio" onChange={()=> alteraP1(0)}/> Preto </label>
            <br/>
            <label> <input name="P1" type="radio" /> Azul </label>
            <br/>
            <label> <input name="P1" type="radio" onChange={()=> alteraP1(1)}/> Amarelo </label>
            <br/>
            <label> <input name="P1" type="radio" /> Transparente </label>
            
            <hr/>


            <h2>Qual o melhor personagem do Mortal Kombat?</h2> 
            <label> <input name="P2" type="radio" /> Scorpion </label>
            <br/>
            <label> <input name="P2" type="radio" /> Liu Kang </label>
            <br/>
            <label> <input name="P2" type="radio" onChange={()=> alteraP2(1)}/> Shang Tsung </label> 
            <br/>
            <label> <input name="P2" type="radio" onChange={()=> alteraP2(0)}/> Shao Khan </label>

            <hr/>

            <h2> Qual é a fruta vermelha?</h2>
            <p className = {selecionado [0]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["selecionado","","",""]) }}>Melancia </p>
            <p className = {selecionado [1]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["","selecionado","",""]) }}>Abacate </p>
            <p className = {selecionado [2]} onClick={ ()=> {alteraP3(1); alteraSelecionado (["","","selecionado",""]) }}>Maçã </p>
            <p className = {selecionado [3]} onClick={ ()=> {alteraP3(0); alteraSelecionado (["","","","selecionado"]) }}>Kiwi </p>


            <hr/>

            <h2> Qual o melhor filme</h2>

            <input onChange = { (e) => alteraP4 (e.target.value)}/>

            <hr/>
 
             <button onClick={ ()=> calculaPontos (p1+p2+p3)}>Enviar respostas</button>      
             
               <p>Total de pontos: {total} </p>



        </div>
    );name="P1"
}

export default Quiz;

