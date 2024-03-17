import { useState } from 'react';
import './Form.scss';
import { TiDeleteOutline } from "react-icons/ti";

const NewProduct = () =>{

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState();
    const [cor, setCor] = useState('');
    const [estoque, setEstoque] = useState();

    const url = "http://localhost:8080/produtos"

    async function criarProduto(){
        try{
            const resposta = await fetch(url,{
                method:"POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    nome: nome,
                    preco: preco,
                    cor: cor,
                    estoque: estoque
                })
            })

            if(resposta.ok){
                console.log("Produto adicionado com sucesso!");
            } else{
                console.log("Não foi possível adicionar o produto!");
            }
            

        } catch (err){
            console.log(`Erro: ${err}`)
        }
        
    }
 

    return(
        <div className="form_container">
            <form className="form_box">
            <span><h2>Adicionar um novo produto:</h2><a href='/produtos'><i className='icon_close'><TiDeleteOutline /></i></a></span>
                <span>
                    <label htmlFor="nome">
                        Nome do produto:
                    </label>
                    <input type="text" id="nome" onChange={(e) => setNome(e.target.value)}></input>
                </span>
                <span>
                    <label htmlFor="cor">
                        Cor do produto:   
                    </label>
                    <input type="text" id="cor" onChange={(e) => setCor(e.target.value)}></input>
                </span>
                <span>
                    <label htmlFor="estoque">
                        Número no estoque:
                    </label>
                    <input type="number" id="estoque" onChange={(e) => setEstoque(e.target.valueAsNumber)}></input>
                </span>
                <span>
                    <label htmlFor="preco">
                        Preco do produto:   
                    </label>
                    <input type="number" id="preco" onChange={(e) => setPreco(e.target.valueAsNumber)}></input>
                </span>
                <button type='submit' onClick={criarProduto}>Adicionar Produto</button>
            </form>
        </div>
    )
}

export default NewProduct