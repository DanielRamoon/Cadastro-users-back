import express from "express";
import pkg from "@prisma/client";
import { userSchema, idSchema } from "../validations/user.validation.js";
import { validateBody, validateParam } from "../validations/validate.js";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router();

router.post("/", validateBody(userSchema), async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const user = await prisma.user.create({ data: { email, name, age } });
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

router.put(
  "/:id",
  validateParam(idSchema),
  validateBody(userSchema),
  async (req, res) => {
    try {
      const { id } = req.params;
      const { email, name, age } = req.body;

      const updatedUser = await prisma.user.update({
        where: { id },
        data: { email, name, age },
      });

      res.status(200).json(updatedUser);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      res.status(500).json({ error: "Erro ao atualizar usuário" });
    }
  }
);

router.delete("/:id", validateParam(idSchema), async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "Usuário excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir usuário:", error);
    res.status(500).json({ error: "Erro ao excluir usuário" });
  }
});

export default router;
