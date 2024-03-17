import { useState } from 'react';
import './Form.scss';
import { TiDeleteOutline } from "react-icons/ti";

const DeleteProduct = () =>{

    const [idd, setIdd] = useState('');
   

    const url = "http://localhost:8080/produtos"

    async function removerProduto(){
        try{
            const resposta = await fetch(url,{
                method:"DELETE",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    id: idd
                })
            })

            if(resposta.ok){
                console.log("Produto removido com sucesso!");
            } else{
                console.log("Não foi possível remover o produto!");
            }
            

        } catch (err){
            console.log(`Erro: ${err}`)
        }
        
    }
 

    return(
        <div className="form_container">
            <form className="form_box">
            <span><h2>Remover um produto:</h2><a href='/produtos'><i className='icon_close'><TiDeleteOutline /></i></a></span>
                <span>
                    <label htmlFor="nome">
                        Id do produto:
                    </label>
                    <input type="text" id="idd" onChange={(e) => setIdd(e.target.value)}></input>
                </span>
                <button type='submit' onClick={removerProduto}>Remover Produto</button>
            </form>
        </div>
    )
}

export default DeleteProduct