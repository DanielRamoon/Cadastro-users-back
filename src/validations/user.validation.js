import Joi from "joi";

export const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.string().optional(),
});

export const idSchema = Joi.string().length(24).required();
