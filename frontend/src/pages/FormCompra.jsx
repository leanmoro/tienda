import React from 'react';
import '../styles/FormCompra.css';

export const FormCompra = () => {
   return (
      <>
         <div className="row">
            <div className="col-12 titulo-anuncio">
               <h5>Revise sus datos a continuacion: </h5>
            </div>
            <div className="col-12 contenedor-form">
               <form>
                  <div className="form-group">
                     <label htmlFor="text" className="etiqueta">Nombre: </label>
                        <input type="text" 
                           name="nombre" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="Nombre"
                           readOnly
                        />
                  </div>
                  <br />
                  <div className="form-group">
                     <label htmlFor="text" className="etiqueta">Apellido: </label>
                        <input type="text" 
                           name="apellido" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="Apellido"
                           readOnly
                        />
                  </div>
                  <br />
                  <div className="form-group">
                     <label htmlFor="text" className="etiqueta">Email: </label>
                        <input type="text" 
                           name="email" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="email"
                           required
                        />
                  </div>
                  <br />
                  <div className="form-group">
                     <label htmlFor="text" className="etiqueta">Direccion: </label>
                        <input type="text" 
                           name="direccion" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="direccion"
                           required
                        />
                  </div>
                  <br />
                  <div className="form-group">
                     <label htmlFor="text" className="etiqueta">Telefono: </label>
                        <input type="text" 
                           name="telefono" 
                           className="form-control" 
                           aria-describedby="emailHelp" 
                           placeholder="telefono"
                           required
                        />
                  </div>
                  <br />
                  <div className="titulo-textarea">
                        <p className="label-textarea">Otras aclaraciones:</p>
                        <textarea name="aclaraciones" 
                           cols="60" 
                           rows="3"
                           placeholder="Si desea aclararnos algo para su envio, escribalo a continuacion"
                           >
                        </textarea>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-block btn-success col-12">
                     ¡ Confirmar y Enviar !
                  </button>
               </form>
            </div>
         </div>
      </>
   )
};