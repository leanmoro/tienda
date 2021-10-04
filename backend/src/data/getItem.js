const Item = require('../models/Producto')

module.exports=async function getItem(id){
    const itemFromDB = await Item.findById(id);
    return itemFromDB;
}