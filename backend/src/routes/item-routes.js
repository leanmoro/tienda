const express = require("express");
const router = express.Router();
const { verifyToken, isAdmin } = require("../middlewares/auth");

const {
  getItems,
  getItemXid,
  deleteItemXid,
  updateItemXid,
  postNuevoItem,
} = require("../controller/item-controller");

//GET
router.get("/:id", getItemXid);
router.get("/", getItems);

//DELETE ITEM_ID
router.delete("/:id", [verifyToken], deleteItemXid);

//UPDATE ITEM_ID
router.patch("/:id", [verifyToken, isAdmin], updateItemXid);

//POST DE ITEM
router.post("/new", [verifyToken, isAdmin], postNuevoItem);

module.exports = router;
