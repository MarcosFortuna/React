import './nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar os links para componentes separados e podendo repetir o icone personalisado igual ao header*/ }
            <Link to="/">
                <i className="fa fa-home"> Inicío</i>
            </Link>
            <Link to="/user">
                <i className="fa fa-users"> Usuários</i>
            </Link>

        </nav>
    </aside>