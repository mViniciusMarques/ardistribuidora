import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Distribuidora A R </h1>
        <p>A.R se posiciona como uma das principais empresas do ramo na cidade de Juiz de Fora.<br />
        <a href="https://html5up.net">Onde nos encontrar</a>.</p>
    </header>
)

export default Header
