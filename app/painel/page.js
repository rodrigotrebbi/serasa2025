'use client'
import { useState } from "react";
import "./painel.css"



function Painel () {
    
    const [ nomeUser, alteranomeUser] = useState ("")
    const [ senhaUser, alterasenhaUser] = useState ("")
    
    const [ mostraErro, alteraMostraErro] = useState (false)

    function validarLogin(){
        
        
        if (nomeUser=="Rodrigo" && senhaUser=="1577" ){
            console.log ("Login efetuado com sucesso.")
            
        }else{
            console.log ("Usuário ou senha incorreto")
        }
    }
    
    return ( 
        <div>
            <h1> Painel admnistrativo</h1>

            <label>
                Digite o usuário:
                <input onChange={ (e) => alteranomeUser (e.target.value) }/>
            </label>

            <br/>

            <label>
                Digite a senha:
                <input onChange={ (e) => alterasenhaUser (e.target.value) }/>
            </label>

            <br/>

            <button onClick={ ()=> validarLogin ()} >Entrar</button>

            {/* Operador TERNÁRIO */}

            {
                mostraErro == true ?
                    <div className="erro">
                        <p> Usuário ou senha incorretos </p>
                    </div>
                :
                    <div></div>
                    
            }
            


        </div>
     );
}

export default Painel ;
