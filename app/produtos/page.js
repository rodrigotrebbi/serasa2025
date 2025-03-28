import Menu from "./components/menu";
import Produto from "./components/Produto";


function produtos() {
    
    
    
    return ( 
        <div>

           <Menu/>


            <h1>Produtos</h1>
            <p> Bem-vindo a página de produtos😜</p>

            <hr/>

            <Produto nome="Maçã" preco="5,20" desconto="19" indisponivel />
            <Produto nome="Uva" preco="10,00" comprar={true}/>
            <Produto nome="Pera"preco="8,10"/>
            <Produto nome="Pneu"preco="680,20" comprar={true}/>
            <Produto nome="Xbox"preco= "2420,20" comprar={true}/>


            

        </div>
     );
}

export default produtos;