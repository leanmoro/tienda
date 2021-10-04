import React from 'react';
import { ListaProductos } from '../components/ListaProductos';
import '../styles/Pedido.css'

export const Pedido = () => {
   return (
      <>
         <div className="row">
            <div className="col-12 contenedor-title">
               <h3>Carga tu pedido!</h3>
               <p>Podes filtrar por marca, tipo o nombre de producto</p>
            </div>
            <div className="col-2 contenedor-datalist">
               <label for="exampleDataList" class="form-label">Datalist example</label>
               <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
               <datalist id="datalistOptions">
                  <option value="San Francisco"/>
                  <option value="New York"/>
                  <option value="Seattle"/>
                  <option value="Los Angeles"/>
                  <option value="Chicago"/>
               </ datalist>
               <ListaProductos />
            </div>
         </div>
      </>
   )
};
