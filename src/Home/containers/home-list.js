import React, { Component } from "react";
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
    IdPuesto: 1,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 1,
    NombreArea: "Compensaciones y Beneficios",
    FechaEvaluacion: "2023-06-07T00:00:00",
    FechaVencimiento: "2023-06-07T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 84,
    EscalaTecnica: 2,
    PuntuacionTotalWill: 66,
    EscalaConductual: 1,
    ResultadoFinal: 108,
    Cuadrante: 12,
    Matriz: "Acompañamiento",
  },
  {
    IdColaborador: 2,
    NombreColaborador: "Carlos Estuardo Barahona Castellanos",
    DPIColaborador: 5709282199102,
    FechaIngreso: "2022-10-08T00:00:00",
    FechaAlta: "2022-10-08T00:00:00",
    IdPuesto: 2,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 2,
    NombreArea: "Tecnología de la Información",
    FechaEvaluacion: "2023-06-07T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 100,
    EscalaTecnica: 3,
    PuntuacionTotalWill: 100,
    EscalaConductual: 3,
    ResultadoFinal: 150,
    Cuadrante: 33,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 3,
    NombreColaborador: "Luis Roberto Aragon Jimenez",
    DPIColaborador: 7106447219959,
    FechaIngreso: "2022-10-15T00:00:00",
    FechaAlta: "2022-10-15T00:00:00",
    IdPuesto: 3,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 3,
    NombreArea: "Aseguramiento de la Calidad",
    FechaEvaluacion: "2023-06-07T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: false,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 13,
    EscalaTecnica: 0,
    PuntuacionTotalWill: 25,
    EscalaConductual: 0,
    ResultadoFinal: 31,
    Cuadrante: 0,
    Matriz: "Desvincular",
  },
  {
    IdColaborador: 10,
    NombreColaborador: "Guilder Rocael Fuentes Miranda",
    DPIColaborador: 4532650294288,
    FechaIngreso: "2022-12-03T00:00:00",
    FechaAlta: "2022-12-03T00:00:00",
    IdPuesto: 10,
    NombrePuesto: "Coordinador",
    IdArea: 2,
    NombreArea: "Tecnología de la Información",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 90,
    EscalaTecnica: 3,
    PuntuacionTotalWill: 84,
    EscalaConductual: 2,
    ResultadoFinal: 129,
    Cuadrante: 23,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 11,
    NombreColaborador: "Carlos Armando Vásquez Juan",
    DPIColaborador: 7861597019298,
    FechaIngreso: "2022-12-10T00:00:00",
    FechaAlta: "2022-12-10T00:00:00",
    IdPuesto: 11,
    NombrePuesto: "Coordinador",
    IdArea: 3,
    NombreArea: "Aseguramiento de la Calidad",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 89,
    EscalaTecnica: 2,
    PuntuacionTotalWill: 89,
    EscalaConductual: 2,
    ResultadoFinal: 133,
    Cuadrante: 22,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 12,
    NombreColaborador: "Fredy Rufino Ochoa Victorio",
    DPIColaborador: 1772380581179,
    FechaIngreso: "2022-12-17T00:00:00",
    FechaAlta: "2022-12-17T00:00:00",
    IdPuesto: 12,
    NombrePuesto: "Coordinador",
    IdArea: 4,
    NombreArea: "Gestión de Talento",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 73,
    EscalaTecnica: 2,
    PuntuacionTotalWill: 89,
    EscalaConductual: 2,
    ResultadoFinal: 125,
    Cuadrante: 22,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 13,
    NombreColaborador: "Carlos Enrique Sazo",
    DPIColaborador: 8665498713056,
    FechaIngreso: "2022-12-24T00:00:00",
    FechaAlta: "2022-12-24T00:00:00",
    IdPuesto: 1,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 1,
    NombreArea: "Compensaciones y Beneficios",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 82,
    EscalaTecnica: 2,
    PuntuacionTotalWill: 89,
    EscalaConductual: 2,
    ResultadoFinal: 130,
    Cuadrante: 22,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 14,
    NombreColaborador: "Jonathan René Villavicencio Soto",
    DPIColaborador: 8420368538085,
    FechaIngreso: "2022-12-31T00:00:00",
    FechaAlta: "2022-12-31T00:00:00",
    IdPuesto: 2,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 2,
    NombreArea: "Tecnología de la Información",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 90,
    EscalaTecnica: 3,
    PuntuacionTotalWill: 89,
    EscalaConductual: 2,
    ResultadoFinal: 134,
    Cuadrante: 23,
    Matriz: "OnBoarding",
  },
  {
    IdColaborador: 15,
    NombreColaborador: "Marco Tulio Alegría López",
    DPIColaborador: 4567393199407,
    FechaIngreso: "2023-01-07T00:00:00",
    FechaAlta: "2023-01-07T00:00:00",
    IdPuesto: 3,
    NombrePuesto: "Gestor de Proyectos",
    IdArea: 3,
    NombreArea: "Aseguramiento de la Calidad",
    FechaEvaluacion: "2023-06-08T00:00:00",
    FechaVencimiento: "2023-02-01T00:00:00",
    Realizado: true,
    NumeroEvaluacion: 1,
    PuntuacionTotalSkill: 86,
    EscalaTecnica: 2,
    PuntuacionTotalWill: 89,
    EscalaConductual: 2,
    ResultadoFinal: 132,
    Cuadrante: 22,
    Matriz: "OnBoarding",
  },
];

class ProductList extends Component {
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
      <Layout title="Plan OnBoarding">
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
                  <TableCell>Código Emp</TableCell>
                  <TableCell>Nombre Colaborador</TableCell>
                  <TableCell>Fecha Ingreso</TableCell>
                  <TableCell>Fecha Alta</TableCell>
                  <TableCell>Puesto</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Fecha Evaluación</TableCell>
                  <TableCell>Fecha Vencimiento</TableCell>
                  <TableCell>Num Evaluación</TableCell>
                  <TableCell>Puntuación Skill</TableCell>
                  <TableCell>Puntuación Will</TableCell>
                  <TableCell>Escala Conductual</TableCell>
                  <TableCell>Escala Técnica</TableCell>
                  <TableCell>Resultado Final</TableCell>
                  <TableCell>Cuadrante</TableCell>
                  <TableCell>Matriz</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.IdColaborador}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.NombreColaborador}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.FechaIngreso}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.FechaAlta}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.NombrePuesto}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.NombreArea}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.FechaEvaluacion}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.FechaVencimiento}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.NumeroEvaluacion}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.PuntuacionTotalSkill}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.PuntuacionTotalWill}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.EscalaConductual}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.EscalaTecnica}
                      </Typography>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.ResultadoFinal}
                      </Typography>
                    </TableCell>

                    <TableCell component="th" scope="row">
                      <Typography variant="body2" color="textSecondary">
                        {row.Cuadrante}
                      </Typography>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{
                        background:
                          row.Matriz == "Desvincular"
                            ? "red"
                            : row.Matriz == "OnBoarding"
                            ? "green"
                            : "yellow",
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        {row.Matriz}
                      </Typography>
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

export default withRouter(ProductList);
