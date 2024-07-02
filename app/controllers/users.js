const { httpError } = require("../helpers/handleErrors");
const userModel = require("../models/users");

const getItems = (req, res) => {
  res.send({ list: [1, 2, 3] });
};
const getItem = (req, res) => {};
const createItem = async (req, res) => {
  try {
  } catch (e) {
    httpError(res, e);
  }
};
const updateItem = (req, res) => {};
const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
