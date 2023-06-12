import React, { Component, useState } from "react";
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

import API from "../../Utils/api";
import axios from "axios";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  {
    IdActividad: 1,
    NombreActividad: "Conocimiento del Negocio y Estructuras Organizacionales",
    DescripcionActividad: "Alguna Descripción",
    Peso: 0,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
];
//const [items, setItems] = useState([]);

class AreaList extends Component {
  state = {
    open: false,
  };
  onClickAdd = () => {
    this.setState({ open: true });
  };

  /*cargarData = async () => {
    try {
      const result = await axios.get("https://api.example.com/data");
      const { data } = result;
      setItems(data);
      /*setItems()
      await API.fetchGetRequest("/Actividad").then(async (result) => {
        const { data } = result;
        setItems(data);
      });*/
  /*} catch (e) {
      alert(
        "En este momento no se puede realizar tu solicitud, intentalo más tarde o llama a tu administrador"
      );
    } finally {
    }
  };*/
  handleCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Layout title="Actividad">
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
                  <TableCell>Descripción</TableCell>
                  <TableCell>Peso</TableCell>
                  <TableCell>Nombre Objetivo</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Typography gutterBottom variant="subtitle1">
                        {row.IdActividad}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="textPrimary"
                      >
                        {row.NombreActividad}
                      </Typography>
                    </TableCell>
                    <TableCell
                      gutterBottom
                      variant="subtitle1"
                      color="textPrimary"
                    >
                      {row.DescripcionActividad}
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="error"
                      >
                        {row.Peso}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        gutterBottom
                        variant="subittle1"
                        color="textPrimary"
                      >
                        {row.NombreObjetivo}
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

export default withRouter(AreaList);
