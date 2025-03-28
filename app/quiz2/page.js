'use client'
import { useState } from "react";



function quiz2() {

    const [ p1, alteraP1 ] = useState(0)    
    const [ p2, alteraP2 ] = useState(0) 
    const [ p3, alteraP3 ] = useState(0) 
    const [ p4, alteraP4 ] = useState("") 
    const [ total, alteraTotal ] = useState(0) 

    const [ mostraP1, alteraMostraP1] = useState(true)
    const [ mostraP2, alteraMostraP2] = useState(false)
    
    const [ selecionado, alteraSelecionado] = useState(["","","",""])

    function calculaPontos(){


        let totalAtualizado = 0

        if( p4 =="Tropa de Elite"){
            totalAtualizado = p1+p2+p3+1
            alteraTotal(p1+p2+p3+1)
        }else{
            totalAtualizado = p1+p2+p3+1
            alteraTotal(p1+p2+p3)
        }

        // Pega do banco (convertendo em banco)


        localStorage.setItem("total", totalAtualizado)



    }
   
    function verificaFilme (e){
        if( e.targe.value == "Tropa de Elite"){
            alteraP4(1)
        }else{
            alteraP4(0)
        }
    }


    return (  
        <div>
            <h1> Quiz Roddz</h1>
            <p> Assinale a opção correta!</p>

            <hr/>

            {
                mostraP1== true &&
                <div>
                        <h2>Qual a cor mais utilizada pelo personagem Scorpion?</h2> 
                        <label> <input name="P1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true); alteraMostraP1(false)}}/> Preto </label>
                        <br/>
                        <label> <input name="P1" type="radio" onChange={ ()=> {alteraP1(0); alteraMostraP2(true);alteraMostraP1(false)}} /> Azul </label>
                        <br/>
                        <label> <input name="P1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true);alteraMostraP1(false)}} /> Amarelo </label>
                        <br/>
                        <label> <input name="P1" type="radio" onChange={()=> {alteraP1(0); alteraMostraP2(true);alteraMostraP1(false)}}/> Transparente </label>
                </div>

            }

            <hr/>
            {
                mostraP2== true &&
                <div>
                    <h2>Qual o melhor personagem do Mortal Kombat?</h2> 
                    <label> <input name="P2" type="radio" onChange={()=> {alteraP1(0); alteraMostraP1(true); alteraMostraP2(false)}} /> Scorpion </label>
                    <br/>
                    <label> <input name="P2" type="radio" onChange= {()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}} /> Liu Kang </label>
                    <br/>
                    <label> <input name="P2" type="radio" onChange={()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}}/> Shang Tsung </label> 
                    <br/>
                    <label> <input name="P2" type="radio" onChange= {()=> {alteraP2(0); alteraMostraP1(true); alteraMostraP2(false)}}/> Shao Khan </label>
           
                </div>

            }
            <hr/>

            

 
             <button onClick={ ()=> calculaPontos }>Enviar respostas</button>      
             
               <p>Total de pontos: {total} </p>



        </div>
    );
}

export default quiz2;

                





            




