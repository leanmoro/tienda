import React from 'react';
import Swal from 'sweetalert2'
import '../styles/CheckStyles.css';
import { ListaCheckPedido } from '../components/ListaCheckPedido';

export const CheckPedido = () => {

   //* Array de pedidos que solo se uso para maquetar
   //TODO: Eliminarlo luego
   const arrayPedidos = [
      {
         id: 1,  
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 2,                  
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 3,
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 4,
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 5,
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 6,
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      },
      {
         id: 7,
         marca: 'Pantene',
         producto: 'Shampoo anticaspa',
         precioUnitario: 550,
         cantidad: 10,
         total: 5500
      }
   ];

   //TODO: Buscar como redirigir luego del click en el button de SweetAlert.
   function handleClick() {
      Swal.fire({
         title: '¡Atencion!',
         text: '¿ Esta seguro que desea continuar ?',
         icon: 'info',
         confirmButtonText: 'Si',
         confirmButtonColor: '#00afe1',
         cancelButtonText: 'Cancelar',
         showCancelButton: true,
         allowEnterKey: true,
         allowEscapeKey: false,
         allowOutsideClick: false,
         stopKeydownPropagation: true
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire({
               icon: 'success',
               title: 'Gracias por confiar en Glavic!',
               text: 'Estas a un paso de finalizar tu pedido. Te pedimos que valides tus datos en el siguiente formulario para confirmar tu pedido.',
               confirmButtonText: 'Ok',
               confirmButtonColor: '#00afe1',
            });
         } else if (result.isDenied) {
            Swal.fire({
               icon: 'error',
               title: 'Ups!',
               text: 'Algo no salio como esperabamos, vuelva a intentar la operacion',
               timer: 1500
            });
         }
      })
   };

   return (
      <>
         <div className="row">
            <div className="col-12 pre-requisitos">
               <h5>Te presentamos a continuacion el detalle de tu pedido con numero #12321.</h5> 
               <h6>Y le pedimos que tenga en cuenta las siguientes consideraciones antes continuar con su pedido.</h6>
               <ul className="lista-requisitos">
                  <li>El pedido debe ser superior a los $5,000</li>
                  <li>Despues de este paso, si continua, <strong>NO</strong> podra modificar el pedido.</li>
                  <li>En caso de querer agregar un producto luego de este paso, debera realizar un nuevo pedido.</li>
               </ul>
            </div>
            <div className="col-12 checklist">
               <p className="texto-tabla">Si desea agregar o eliminar algun producto, regrese al paso anterior.</p>
               <div className="col-12 col-sm-5 table-responsive tabla-productos">
                  <table className="table table-hover">
                     <thead>
                        <tr>
                           <th scope="col">Marca</th>
                           <th scope="col">Producto</th>
                           <th scope="col">Precio Unitario</th>
                           <th scope="col">Cantidad</th>
                           <th scope="col">Total</th>
                        </tr>
                     </thead>
                     {arrayPedidos.map(i => (
                        <ListaCheckPedido key={i.id}
                        marca={i.marca}
                        producto={i.producto}
                        precioUnitario={i.precioUnitario}
                        cantidad={i.cantidad}
                        total={i.total}/>
                     ))}
                  </table>
               </div>
            </div>
            <div className="col-12 col-sm-5 accion-btn">
               <button className="btn btn-primary" onClick={handleClick}>Continuar</button>
               <br />
               <button className="btn btn-secondary">Modificar Pedido</button>
            </div>
         </div>
      </>
   )
};