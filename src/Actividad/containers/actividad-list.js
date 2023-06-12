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
import config from "../../config";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
let urlbase = "http://localhost:63223/api/";

const rows = [
  {
    IdActividad: 1,
    NombreActividad: "Conocimiento del Negocio y Estructuras Organizacionales",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 2,
    NombreActividad:
      "Conocimiento de la Cultura ILU / Valores organizacionales y Código de Ética",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 3,
    NombreActividad:
      "Procesos de la Gerencia Financiera y procesos de Costos y Presupuestos.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 4,
    NombreActividad:
      "Conocimiento y adecuado manejo de las diferentes plataformas electrónicas que existen en la compañía.\n1. SAP\n2. Webdoc\n3. Execution\n4. Acciones de mejora \n5. APP ILU\n6. SAS",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 5,
    NombreActividad: "Modelo de Costos en SAS",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 6,
    NombreActividad:
      " Políticas presupuestaría y premisaspara la elaboración de presupuestos.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE APRENDIZAJE",
  },
  {
    IdActividad: 7,
    NombreActividad:
      "Definición de políticas y seguimient de presupuesto de Operación de la siguiente Zafra 2022-2023",
    Peso: null,
    NombreObjetivo: "DESARROLLO DE COMPETENCIAS",
  },
  {
    IdActividad: 8,
    NombreActividad:
      "Seguimiento a la ejecución presupuestaria de las unidades de la Compañía.",
    Peso: null,
    NombreObjetivo: "DESARROLLO DE COMPETENCIAS",
  },
  {
    IdActividad: 9,
    NombreActividad:
      "Ejecución acumulada a la fecha y proyección de cierre de Presupuesto del periodo 2021-2022",
    Peso: null,
    NombreObjetivo: "DESARROLLO DE COMPETENCIAS",
  },
  {
    IdActividad: 10,
    NombreActividad:
      "Implementación de modelos de costos y su seguimiento para determinar los costos de la empresa y de cada unidad.",
    Peso: null,
    NombreObjetivo: "DESARROLLO DE COMPETENCIAS",
  },
  {
    IdActividad: 11,
    NombreActividad: "Margen Operativo (Ponderación)",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 12,
    NombreActividad: "Costo Total (US$ t d azúcar) (Ponderación)",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 13,
    NombreActividad:
      "Solvencia Financiera (rentabilidad + eficiencia ) (Ponderación)",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 14,
    NombreActividad: "Cumplimiento de las Acciones de Mejora.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 15,
    NombreActividad: "índice de variación de la proyección GNF del periodo.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 16,
    NombreActividad:
      "Cumplimiento del Plan de formación establecido en la plataforma ILU-Cornestone.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 17,
    NombreActividad:
      'Cumplimiento Planes de Clima Laboral en toda la organización por medio de asegurar la ejecución del programa "Minuto de Confianza".',
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 18,
    NombreActividad:
      "Cumplimiento de Proyectos de Innovación Costos y Presupuestos.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 19,
    NombreActividad:
      "Evacuación de observaciones de auditoria con relación a Costos y Presupuestos.",
    Peso: null,
    NombreObjetivo: "OBJETIVOS DE DESEMPEÑO",
  },
  {
    IdActividad: 27,
    NombreActividad: "Cumple con su deber y responde a lo acordado.",
    Peso: 15,
    NombreObjetivo: "RESPONSABILIDAD",
  },
  {
    IdActividad: 28,
    NombreActividad:
      "Es más que laborioso y va más allá de sus tareas para trascender.",
    Peso: 10,
    NombreObjetivo: "COMPROMISO",
  },
  {
    IdActividad: 29,
    NombreActividad:
      "Demuestra la unión de voluntades y el conocimiento compartido genera mejores soluciones.                                                                                                                             ",
    Peso: 10,
    NombreObjetivo: "TRABAJO EN EQUIPO",
  },
  {
    IdActividad: 30,
    NombreActividad:
      "Demuestra transparencia, rectitud y congruencia en su actuar en cualquier situación.",
    Peso: 20,
    NombreObjetivo: "INTEGRIDAD",
  },
  {
    IdActividad: 31,
    NombreActividad:
      "Promueve la mejora continua y el aprendizaje constante como empresa y como personas.",
    Peso: 10,
    NombreObjetivo: "SUPERACIÓN",
  },
  {
    IdActividad: 32,
    NombreActividad:
      "Demuestra creencia en la dignidad de la persona y en su capacidad de desarrollo.",
    Peso: 15,
    NombreObjetivo: "RESPETO",
  },
  {
    IdActividad: 33,
    NombreActividad:
      "Demuestra influencia de acción positiva y genera resultados, sobre sus colaboradores (cuando aplica), compañeros y clientes.",
    Peso: 20,
    NombreObjetivo: "LIDERAZGO/INFLUENCIA",
  },
];
//const [items, setItems] = useState([]);

class ActividadList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      open: false,
    };
  }
  /*async componentDidMount() {
    try {
      const result = await axios.get("https://api.example.com/data");
      const { data } = result;
      setItems(data);
      setItems()
      await axios.get(urlbase + "actividad/listar").then(async (result) => {
        this.setState({ items: result.data });
        console.log(result.data);
        console.log("Datos de la api");
      });
    } catch (e) {
      console.log(e);
      alert(
        "En este momento no se puede realizar tu solicitud, intentalo más tarde o llama a tu administrador"
      );
    } finally {
    }
  }*/

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
    const { items } = this.state;
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

export default withRouter(ActividadList);
