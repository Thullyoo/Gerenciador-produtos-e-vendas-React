import "./Header.scss";

const Header = () =>{
    return(
        <div className="header_container">
            <div className="header_text">
                Seja bem vindo <span>Admin</span>
            </div>
            <div className="header_options">
                <ul>
                    <li>
                    <a href="/produtos">
                        Produtos
                    </a>
                    </li>
                    <li>
                    <a href="/vendas">
                        Vendas
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;