import { useState } from 'react';
import './Form.scss';
import { TiDeleteOutline } from "react-icons/ti";

const EditProduct = () =>{

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState();
    const [cor, setCor] = useState('');
    const [estoque, setEstoque] = useState();
    const [idd, setIdd] = useState('');

    const url = "http://localhost:8080/produtos"

    async function editarProduto(){
        try{
            const resposta = await fetch(url,{
                method:"PUT",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    id: idd,
                    nome: nome,
                    preco: preco,
                    cor: cor,
                    estoque: estoque
                })
            })

            if(resposta.ok){
                console.log("Produto editado com sucesso!");
            } else{
                console.log("Não foi possível editar o produto!");
            }
            

        } catch (err){
            console.log(`Erro: ${err}`)
        }
        
    }
 

    return(
        <div className="form_container">
            <form className="form_box">
            <span><h2>Editar um produto:</h2><a href='/produtos'><i className='icon_close'><TiDeleteOutline /></i></a></span>
            <span>
                    <label htmlFor="nome">
                        Id do produto:
                    </label>
                    <input type="text" id="idd" onChange={(e) => setIdd(e.target.value)}></input>
                </span>
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
                <button type='submit' onClick={editarProduto}>Editar Produto</button>
            </form>
        </div>
    )
}

export default EditProduct