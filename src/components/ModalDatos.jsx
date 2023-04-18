import React , { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
export const ModalDatos = ({title, mensaje, valor,pelicula }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        {valor}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
         <p><Label>Titulo:</Label>{pelicula.Title}</p>
         <p><Label>Year:</Label>{pelicula.Year}</p>
         <p><Label>Rated:</Label>{pelicula.Rated}</p>
         <p><Label>Released:</Label>{pelicula.Released}</p>
         <p><Label>Runtime:</Label>{pelicula.Runtime}</p>
         <p><Label>Director:</Label>{pelicula.Director}</p>
         <p><Label>Writer:</Label>{pelicula.Writer}</p>
         <p><Label>Genre:</Label>{pelicula.Genre}</p>
         <p><Label>Actors:</Label>{pelicula.Actors}</p>
        
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
  margin: 0 20px;
  align-items: left;
  font-weight: bold;
`;
