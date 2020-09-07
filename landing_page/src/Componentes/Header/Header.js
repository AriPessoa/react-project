import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <AppBar position="static" className="color-Header">
                <Toolbar className="toolbar">
                    <div className="group-button">
                        <Button className="button" href="#Livros">Livros</Button>
                        <Button className="button">Autores</Button>
                        <Button className="button">Sobre</Button>
                    </div>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;