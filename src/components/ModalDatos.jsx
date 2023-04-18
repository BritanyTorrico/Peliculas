import React , { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import axios from "../api/axios";
export const ModalDatos = ({title, valor,pelicula }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [peli, setPeli] = useState([{}]);

  const obtenerPeliculasPorTitulo = async () => {
    try {
      await axios.get(`/?apikey=a84d4f74&t=${pelicula.Title}`).then((resp) => {
        console.log(resp.data);
        setPeli(resp.data);

      });
    } catch (error) {
      console.log("no se pudo obtener las peliculas");
    }
  };
  const handleChange  = async() =>{
    setShow(true);
    await obtenerPeliculasPorTitulo();

  };
  return (
    <>
 
      <Button variant="danger" onClick={handleChange}>
        {valor}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
         <p><Label>Titulo:</Label>{peli.Title}</p>
         <p><Label>Year:</Label>{peli.Year}</p>
         <p><Label>Rated:</Label>{peli.Rated}</p>
         <p><Label>Released:</Label>{peli.Released}</p>
         <p><Label>Runtime:</Label>{peli.Runtime}</p>
         <p><Label>Director:</Label>{peli.Director}</p>
         <p><Label>Writer:</Label>{peli.Writer}</p>
         <p><Label>Genre:</Label>{peli.Genre}</p>
         <p><Label>Actors:</Label>{peli.Actors}</p>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const Label = styled.label`
  margin: 0 0px;
  align-items: left;
  font-weight: bold;
`;
