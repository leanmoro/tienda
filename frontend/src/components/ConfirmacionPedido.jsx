import React from 'react';
import {Link} from 'react-router-dom';

export const ConfirmacionPedido = () => {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="contenedor-success">
              <div className="col-12 mensaje-success">
                <h3 className="titulo-compra-exitosa">
                  ¡Gracias por confiar en Glavic!
                </h3>
                <h5 className="numero-pedido">
                  Registramos tu pedido bajo el N° #121212
                </h5>
              </div>
              <div className="col-12 informacion-post-compra">
                <p>Recibiras un copia de tu pedido al mail que nos proporcionaste</p>
                <p className="mail-cliente">
                  <strong>
                    johndoe@example.com
                  </strong>
                </p>
                <p>¡Estate atento! Pronto nos comunicaremos a tu celular para coordinar el pago y el envio de tu pedido</p>
                <p className="celular-cliente">
                  <strong>
                    Tu celular es: 1112223333
                  </strong>
                </p>
              </div>
              <div className="col-12 dudas-compra">
                <p>
                  Tenes una duda con tu compra? No te preocupes, comunicate con nosotros via mail a <strong>soporte@glavic.com.ar</strong>, haciendo referencia al numero de tu pedido
                  y nos comunicaremos a la brevedad para ayudarte.
                </p>
              </div>
              <div className="col-12 agradecimiento-compra">
                <h5>Equipo Glavic.</h5>
              </div>
              <div className="col-12 volver-compra">
                <Link to="/">
                  <button className="btn btn-success">Hacer una nueva compra</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}