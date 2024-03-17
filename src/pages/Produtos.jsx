import { useEffect, useState } from "react";
import NewProduct from "../components/forms/NewProduct";
import EditProduct from "../components/forms/EditProduct"
import Header from "../components/header/Header";
import './Produtos.scss';
import DeleteProduct from "../components/forms/DeleteProduct";

const Produtos = () => {

    const [visibleNewProduct, setVisibleNewProduct] = useState(false);
    const [visibleEditProduct, setVisibleEditProduct] = useState(false);
    const [visibleDeleteProduct, setVisibleDeleteProduct] = useState(false);

    const [produtos, setProdutos] = useState([]);

    const url = "http://localhost:8080/produtos";

    useEffect(() =>{
        
        fetch(url)
        .then((res) => res.json())
        .then((data) => setProdutos(data))
        .catch((err) => console.log(err))

    }, [])

    return(
        <>
            <header><Header></Header></header>
            <main>
                <div className="main_container">
                    <div className="produtos_options">
                        <ul>
                            <button onClick={() => setVisibleNewProduct(true)}>Adicionar Produto</button>
                            {visibleNewProduct &&(
                                <NewProduct/>
                            )}
                            <button onClick={() => setVisibleEditProduct(true)}>Editar Produto</button>
                            {visibleEditProduct &&(
                                <EditProduct/>
                            )}
                            <button onClick={() => setVisibleDeleteProduct(true)}>Excluir Produto</button>
                            {visibleDeleteProduct &&(
                                <DeleteProduct/>
                            )}
                        </ul>
                    </div>
                    <div className="produtos_itens">
                       <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Cor</th>
                                    <th>Preço</th>
                                    <th>Estoque</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {produtos.length > 0 && (
                                    produtos.map((produto) => {
                                        return(
                                            <tr key={produto.nome} >
                                            <td>{produto.nome.toUpperCase()}</td>
                                            <td>{produto.cor.toUpperCase()}</td>
                                            <td>R$ {(produto.preco / 100)}</td>
                                            <td>{produto.estoque}</td>
                                            <td>{produto.id}</td>
                                            </tr>
                                        )
                                       
                                    })
                                )}
                             
                                    <tr key={"tfoot"}>
                                        <td colSpan={"5"}>
                                            Número de registros = {produtos.length}
                                        </td>
                                    </tr>
                                
                            </tbody>
                       </table>              
                    </div>
                </div>
            </main>
        </>
    )
}

export default Produtos;