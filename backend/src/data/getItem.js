const Item = require("../models/Product").default;

module.exports = async function getItem(id) {
  const itemFromDB = await Item.findById(id);
  return itemFromDB;
};
