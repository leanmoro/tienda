import React from 'react';

export const ListaCheckPedido = (props) => {

   const { marca, producto, precioUnitario, cantidad, total } = props;

   return (
      <>
         <tbody>
            <tr>
               <th scope="row">{marca}</th>
               <th scope="row">{producto}</th>
               <th scope="row">$ {precioUnitario}</th>
               <th scope="row">{cantidad}</th>
               <th scope="row">$ {total}</th>
            </tr>
         </tbody>
      </>
   )
};
