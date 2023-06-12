import React, { Component, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Layout from "../../Layout/layout";
import FloatingButton from "../../Helpers/components/fab-add-button";
import FormDialog from "../components/modal-create-provider";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    IdColaborador: 1,
    NombreColaborador: "María Regina Nájera Rodríguez",
    DPIColaborador: 4558628966618,
    FechaIngreso: "2022-10-01T00:00:00",
    FechaAlta: "2022-10-01T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 2,
    NombreColaborador: "Carlos Estuardo Barahona Castellanos",
    DPIColaborador: 5709282199102,
    FechaIngreso: "2022-10-08T00:00:00",
    FechaAlta: "2022-10-08T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 3,
    NombreColaborador: "Luis Roberto Aragon Jimenez",
    DPIColaborador: 7106447219959,
    FechaIngreso: "2022-10-15T00:00:00",
    FechaAlta: "2022-10-15T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 4,
    NombreColaborador: "Lucas Ambrosio Shirdi Sadhu",
    DPIColaborador: 2651151151691,
    FechaIngreso: "2022-10-22T00:00:00",
    FechaAlta: "2022-10-22T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 5,
    NombreColaborador: "Jennifer Vanessa Santos Carrillo",
    DPIColaborador: 9355069810464,
    FechaIngreso: "2022-10-29T00:00:00",
    FechaAlta: "2022-10-29T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 6,
    NombreColaborador: "Keilyn Licely Lopez Gomez",
    DPIColaborador: 3383223905850,
    FechaIngreso: "2022-11-05T00:00:00",
    FechaAlta: "2022-11-05T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 7,
    NombreColaborador: "Josseline Paiz Carrera",
    DPIColaborador: 7757063464882,
    FechaIngreso: "2022-11-12T00:00:00",
    FechaAlta: "2022-11-12T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 8,
    NombreColaborador: "Admin Anghelo Hernandez",
    DPIColaborador: 1375185324511,
    FechaIngreso: "2022-11-19T00:00:00",
    FechaAlta: "2022-11-19T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 9,
    NombreColaborador: "Fredy Rufino Ochoa Victorio",
    DPIColaborador: 3041675782657,
    FechaIngreso: "2022-11-26T00:00:00",
    FechaAlta: "2022-11-26T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 10,
    NombreColaborador: "Guilder Rocael Fuentes Miranda",
    DPIColaborador: 4532650294288,
    FechaIngreso: "2022-12-03T00:00:00",
    FechaAlta: "2022-12-03T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 11,
    NombreColaborador: "Carlos Armando Vásquez Juan",
    DPIColaborador: 7861597019298,
    FechaIngreso: "2022-12-10T00:00:00",
    FechaAlta: "2022-12-10T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 12,
    NombreColaborador: "Fredy Rufino Ochoa Victorio",
    DPIColaborador: 1772380581179,
    FechaIngreso: "2022-12-17T00:00:00",
    FechaAlta: "2022-12-17T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 13,
    NombreColaborador: "Carlos Enrique Sazo",
    DPIColaborador: 8665498713056,
    FechaIngreso: "2022-12-24T00:00:00",
    FechaAlta: "2022-12-24T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 14,
    NombreColaborador: "Jonathan René Villavicencio Soto",
    DPIColaborador: 8420368538085,
    FechaIngreso: "2022-12-31T00:00:00",
    FechaAlta: "2022-12-31T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 15,
    NombreColaborador: "Marco Tulio Alegría López",
    DPIColaborador: 4567393199407,
    FechaIngreso: "2023-01-07T00:00:00",
    FechaAlta: "2023-01-07T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 16,
    NombreColaborador: "Roberto Alfredo Serrano Henriquez",
    DPIColaborador: 9106747375698,
    FechaIngreso: "2023-01-14T00:00:00",
    FechaAlta: "2023-01-14T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 17,
    NombreColaborador: "Jose Andres Melendez Barrios",
    DPIColaborador: 9537752161773,
    FechaIngreso: "2023-01-21T00:00:00",
    FechaAlta: "2023-01-21T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 18,
    NombreColaborador: "Edras Daniel Asetún García",
    DPIColaborador: 5893522703420,
    FechaIngreso: "2023-01-28T00:00:00",
    FechaAlta: "2023-01-28T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 19,
    NombreColaborador: "Ana Gabriela Leiva Aguilar",
    DPIColaborador: 8125956611131,
    FechaIngreso: "2023-02-04T00:00:00",
    FechaAlta: "2023-02-04T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 20,
    NombreColaborador: "Miguel David Ordoñez Padilla",
    DPIColaborador: 7569996342130,
    FechaIngreso: "2023-02-11T00:00:00",
    FechaAlta: "2023-02-11T00:00:00",
    NombrePuesto: "Gestor de Servicio",
  },
  {
    IdColaborador: 21,
    NombreColaborador: "Ligia Karina Bonilla Chaves",
    DPIColaborador: 3373059144802,
    FechaIngreso: "2023-02-18T00:00:00",
    FechaAlta: "2023-02-18T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 22,
    NombreColaborador: "Jenner Augusto de Leon Sapon",
    DPIColaborador: 7705668666719,
    FechaIngreso: "2023-02-25T00:00:00",
    FechaAlta: "2023-02-25T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 23,
    NombreColaborador: "Erika Sofia Caballero Madrid",
    DPIColaborador: 8688108079871,
    FechaIngreso: "2023-03-04T00:00:00",
    FechaAlta: "2023-03-04T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 24,
    NombreColaborador: "Vivian Alejandra Reyes Ovalle",
    DPIColaborador: 8653699753208,
    FechaIngreso: "2023-03-11T00:00:00",
    FechaAlta: "2023-03-11T00:00:00",
    NombrePuesto: "Coordinador",
  },
  {
    IdColaborador: 25,
    NombreColaborador: "Nelson Ivann Molina Barrios",
    DPIColaborador: 3089592180812,
    FechaIngreso: "2023-03-18T00:00:00",
    FechaAlta: "2023-03-18T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 26,
    NombreColaborador: "Irwing Ivan Soto Méndez",
    DPIColaborador: 8455075254557,
    FechaIngreso: "2023-03-25T00:00:00",
    FechaAlta: "2023-03-25T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
  {
    IdColaborador: 27,
    NombreColaborador: "Sergio Iván Vivar",
    DPIColaborador: 2612407160084,
    FechaIngreso: "2023-04-01T00:00:00",
    FechaAlta: "2023-04-01T00:00:00",
    NombrePuesto: "Gestor de Proyectos",
  },
];

//const [items, setItems] = useState([]);

class ColaboradorList extends Component {
  state = {
    open: false,
  };
  onClickAdd = () => {
    this.setState({ open: true });
  };

  handleCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Layout title="Colaborador">
        <React.Fragment>
          <FloatingButton onClick={this.onClickAdd} />
          <FormDialog
            ref={(element) => (this.formDialog = element)}
            open={this.state.open}
            handleCloseModal={this.handleCloseModal}
          />
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Nombre</TableCell>
                  <TableCell>DPI</TableCell>
                  <TableCell>Fecha Ingreso</TableCell>
                  <TableCell>Fecha Alta</TableCell>
                  <TableCell>Puesto</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Typography gutterBottom variant="subtitle1">
                        {row.IdColaborador}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        {row.NombreColaborador}
                      </Typography>
                    </TableCell>
                    <TableCell
                      gutterBottom
                      variant="subtitle1"
                      color="textPrimary"
                    >
                      {row.DPIColaborador}
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        {row.FechaIngreso}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subittle1"
                        color="textPrimary"
                      >
                        {row.FechaAlta}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subittle1"
                        color="textPrimary"
                      >
                        {row.NombrePuesto}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      </Layout>
    );
  }
}

export default withRouter(ColaboradorList);
