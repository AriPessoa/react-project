import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './Formulario.css';
import Button from '@material-ui/core/Button';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
        }

        this.state = this.stateInicial;
    }

    escutadorDeInput = event =>{
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }
    render() {
        // const classes = useStyles();

        return (
            <>
                <div>
                    <Card className={"card"}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="nome"
                                        nome="nome"
                                        label="Nome"
                                        variant="outlined"
                                        required={true}
                                        fullWidth={true}
                                        onChange={this.escutadorDeInput}>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="livro"
                                        nome="livro"
                                        label="Livro"
                                        variant="outlined"
                                        required={true}
                                        fullWidth={true}
                                        onChange={this.escutadorDeInput}>
                                    </TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="preco"
                                        nome="preco"
                                        label="Preço"
                                        variant="outlined"
                                        type="number"
                                        required={true}
                                        fullWidth={true}
                                        onChange={this.escutadorDeInput}>
                                    </TextField>
                                </Grid>
                                <Grid item alignItems="flex-end">
                                    <Button >aaaa</Button>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </div>
            </>
        )
    }
}

export default Formulario;