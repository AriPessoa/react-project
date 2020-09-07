import React, { Component, Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import './Livros.css';
import Tabela from '../../Componentes/Tabela/Tabela';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class Livros extends Component {
    constructor(props) {
        super(props);

        this.state = {
            livros: [
                { id: 1, livro: "Livro 1" },
                { id: 2, livro: "Livro 2" }
            ]
        };
    }


    render() {
        const tabela = [
            { titulo: "Livros", dado: "livro" }
        ]

        return (
            <Fragment>
                <div className="bodyLivros">
                    <Typography variant="h4" className="typography-livros">
                        Livros
                    </Typography>
                    <Grid container spacing={2} className="grid-livros GridSize">
                        <Grid item xs={6}>
                            <Card className="cardTabelaLivros">
                                <CardContent>
                                    <Tabela campos={tabela} dados={this.state.livros} />
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>  
                            <h1>aaaaaa</h1>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

export default Livros;
