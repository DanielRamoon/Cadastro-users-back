export function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
}

export function validateParam(schema, paramName = "id") {
  return (req, res, next) => {
    const { error } = schema.validate(req.params[paramName]);
    if (error) {
      return res
        .status(400)
        .json({ message: `Parâmetro inválido: ${paramName}` });
    }
    next();
  };
}
