const getItem = require("./getItem");

module.exports = getOrderAmount = async items =>{
    var amount = 0;
    for(var i=0;i<items.lenght;i++){
      const item = items[i];
      const itemDB= await getItem(item.id);
      var calculo= itemDB.precio_de_venta * item.cantidad;
      amount += calculo
    }
    const soloDosDecimales = amount.toFixed(2)
    const parsedAmount = parseInt(soloDosDecimales.replace('.',''),10)
    return parsedAmount;
  }