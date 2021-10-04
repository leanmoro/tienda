import React from 'react';
import { BoxInicio } from '../components/BoxInicio';
import '../styles/LandingStyles.css';

export const LandingPage = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row contenedor-principal">
            <div className="col-12 contenedor-bienvenida">
              <h1>Bienvenidos a Glavic - Ventas Mayoristas y Minoristas</h1>
            </div>
            <BoxInicio />
            <div className="col-12 contenedor-botones">
              <button className="btn btn-warning boton-instagram" type="button">
                Instagram
              </button>
              <button  className="btn btn-success boton-whatsapp" type="button">
                WhatsApp
              </button>
              <button className="btn btn-primary boton-informacion" type="button">
                Informacion
              </button>
            </div>
          </div>
        </div>
      </>
    );
};