import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../api/axios";
import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import { ModalDatos } from "./ModalDatos";
export const Peliculas = () => {
  const [peliculasList, setPeliculasList] = useState([]);

  const [titulo, setTitulo] = useState("");
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {}, []);
  const handleInputChange = (event) => {
    setTitulo(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const obtenerPeliculas = async () => {
    try {
      await axios.get(`/?apikey=a84d4f74&s=${titulo}`).then((resp) => {
        if (resp.data.Response === "True") {
          setPeliculasList(resp.data.Search);
          setMostrar(true);
        } else {
          setPeliculasList([]);
          setMostrar(false);
        }
      });
    } catch (error) {
      console.log("no se pudo obtener las peliculas");
    }
  };
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
          onClick={() => obtenerPeliculas()}
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
            {peliculasList.map((item, index) => (
              <ListGroup.Item key={index}>
                <b>PELICULA:</b> <TituloPelicula>{item.Title} </TituloPelicula>
                <ModalDatos
                  title="Información de la pelicula:"
                  pelicula={item}
                  valor="Ver mas"
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </>
      ) : (
        <p>No existe concidencias ingrese un nuevo titulo en el buscador</p>
      )}
      </ContenedorPeliculas>
   
    </>
  );
};
const ContenedorPeliculas = styled.div`
  margin: 0 40px;
  
`;

const TituloPelicula = styled.label`
  margin: 20px;
  align-items: left;
`;
