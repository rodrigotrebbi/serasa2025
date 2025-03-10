'use client'
import { useState } from "react";


function Quiz() {

    const [ p1, alteraP1 ] = useState(0)    
    const [ p2, alteraP2 ] = useState(0) 
    const [ p3, alteraP3 ] = useState(0)   
    const [ total, alteraTotal ] = useState(0) 
   
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

            <h2>Quanto é dois +2?</h2>
            
            <li>
                <input name="P3" type=" li" />  <p >2</p> 
                <input name="P3" type="li" /> <p>o</p>   
                <input name="P3" type="li" onChange={()=> alteraP3(1)}/> <p>aaaa</p>   
                <input name="P3" type="li" /> <p> sim </p>  
            </li>

            <hr/>

            <h2> Qual é o melhor anime do mundo?</h2>

            <input name="P3" type=" li" /> <p >Naruto</p> 


             <hr/>

             <button onClick={ ()=> alteraTotal (p1+p2+p3)}>Enviar respostas</button>      
             
               <p>Total de pontos: {total} </p>



        </div>
    );name="P1"
}

export default Quiz;

