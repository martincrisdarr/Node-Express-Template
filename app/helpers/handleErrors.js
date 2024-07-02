const httpError = (res, e) => {
  console.log({ error: e });
  res.status(400);
  res.send({ error: `Algo ocurrio, ${e}` });
};

module.exports = { httpError };
