import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import './Inicio.css';
import Carrossel from '../../Componentes/Carrossel/Carrossel';

class Inicio extends Component {
    render() {
        return (
            <div className="bodyInicio">
                <Typography variant="h4" className="typography">Candy Soft</Typography>
                <Typography variant="h4" className="typography">Blá Blá</Typography>

                {/* <div className="divCard">
                    <Grid container spacing={2} alignItems="center" className="GridSize">
                        <Grid item xs={3}>
                            <Card className="Card">
                                <CardMedia
                                    className="cardMedia"
                                />
                                <CardContent>
                                    <h2>Livro 1</h2>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className="Card">
                                <CardMedia
                                    className="cardMediaRosa"
                                />
                                <CardContent>
                                    <h2>Livro 1</h2>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={3}>
                            <Card className="Card">
                                <CardMedia
                                    className="cardMedia"
                                />
                                <CardContent>
                                    <h2>Livro 1</h2>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div> */}

                <Carrossel/>
                <br /><br />

            </div>
        )
    }
}

export default Inicio;