import React from 'react';

export const BoxInicio = () => {

    return (
      <>
        <div className="col-12 contenedor-informacion">
          <div className="row">
            <div className="col-12 col-lg-6 contenedor-clienten">
              <p className="titulo-no-cliente">
                ¿ No sos cliente y queres hacer un pedido ?
              </p>
              <button className="btn btn-success boton-pedido" type="button">
                Hacer Pedido
              </button>
            </div>
            <div className="col-12 col-lg-6 contenedor-clienteh">
              <p className="titulo-habitual">
                Sos cliente habitual y queres hacer un pedido ? 
                Te pedimos que te registres o inicies sesion para brindarte la mejor experiencia de compra.
              </p>
              <button className="btn btn-success boton-inicia" 
                type="button"
                >
                  Inicia Sesion
              </button>
              <br/>
              <button className="btn btn-success boton-registrate" 
                type="button">
                  Registrate
              </button>
            </div>
            <div className="col-12 texto-bienvenida">
              <h4>Que tu pelo refleje quien sos!</h4>
            </div>
          </div>
        </div>
      </>
    );
};