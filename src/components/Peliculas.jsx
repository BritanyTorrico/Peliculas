import React from "react";
import { useState } from "react";
import axios from "../api/axios";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

import styled from "styled-components";
import { ModalDatos } from "./ModalDatos";
export const Peliculas = () => {
  //   const [peliculasList, setPeliculasList] = useState([]);
  const [peli, setPeli] = useState([{}]);
  const [titulo, setTitulo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  const obtenerPeliculasPorTitulo = async () => {
    try {
      await axios.get(`/?apikey=a84d4f74&t=${titulo}`).then((resp) => {
        setPeli(resp.data);
        if (resp.data.Response === "True") {
          setMostrar(true);
        } else {
          setMostrar(false);
        }
      });
    } catch (error) {
      console.log("no se pudo obtener las peliculas");
    }
  };
  //   useEffect(() => {
  //     obtenerPeliculas();
  //   }, []);
  const handleInputChange = (event) => {
    setTitulo(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //   const obtenerPeliculas = async () => {
  //     try {
  //       await axios
  //         .get("/?apikey=a84d4f74&s=hola")
  //         .then((resp) => setPeliculasList(resp.data.Search));
  //     } catch (error) {
  //       console.log("no se pudo obtener las peliculas");
  //     }
  //   };
  return (
    <>
      <h1>Sitio de Peliculas</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={titulo}
          value={titulo}
          id="titulo"
          placeholder="ingrese un titulo"
          onChange={handleInputChange}
        />
        <Button
          variant="success"
          onClick={() => obtenerPeliculasPorTitulo()}
          type="submit"
        >
          Buscar
        </Button>
      </form>
      <ContenedorPeliculas>
        {mostrar ? (
          <>
            <h3>Lista de Peliculas</h3>
            <ListGroup>
              <ListGroup.Item>
                <b>PELICULA:</b> <TituloPelicula>{peli.Title} </TituloPelicula>
                <ModalDatos
                  title="Información de la pelicula:"
                  pelicula={peli}
                  valor="Ver mas"
                />
              </ListGroup.Item>
            </ListGroup>
          </>
        ) : (
          <p>No existe concidencias ingrese un titulo en el buscador</p>
        )}
      </ContenedorPeliculas>
    </>
  );
};
const ContenedorPeliculas = styled.div`
  margin: 40px;
`;

const TituloPelicula = styled.label`
  margin: 40px;
  align-items: left;
`;
