import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Tabela = props => {

    const { campos, dados } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                  {
                      campos.map(campo =>(
                          <TableCell>
                              {campo.titulo}
                          </TableCell>
                      ))
                  }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dados.map(dados =>(
                        <TableRow key={dados.id}>
                            {
                            campos.map(campo => (
                                <TableCell>{dados[campo.dado]}</TableCell>
                            ))
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Tabela;