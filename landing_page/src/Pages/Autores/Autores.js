import React, { Component } from 'react';
import './Autores.css';
import Typography from '@material-ui/core/Typography';
import Tabela from '../../Componentes/Tabela/Tabela';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

class Autores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            autores: [
                { id: 1, nome: 'Nome' },
                { id: 2, nome: 'Nome' }
            ]
        }
    }
    render() {
        const tabela = [
            { titulo: 'Autores', dado: 'nome' }
        ]
        return (
            <>
                <div className="bodyAutores">
                    <Typography variant="h4" align="center" className="AutoresText">
                        Autores
                    </Typography>
                    <Grid container spacing={2} className="grid-autores GridSize">
                        <Grid item xs={6}>
                            <h1 className="AutoresText">aaaaaa</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="cardTabela">
                                <CardContent>
                                    <Tabela campos={tabela} dados={this.state.autores} />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </>
        )
    }
}

export default Autores;