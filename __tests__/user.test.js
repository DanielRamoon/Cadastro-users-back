import request from "supertest";
import app from "../src/app.js";

describe("Testes da rota /usuarios", () => {
  it("Deve retornar status 201 ao criar usuário válido", async () => {
    const response = await request(app)
      .post("/usuarios")
      .send({
        name: "Daniel",
        email: `daniel${Date.now()}@email.com`,
        age: "27",
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.email).toMatch(/daniel.*@email\.com/);
  });

  it("Deve retornar 400 se os dados forem inválidos", async () => {
    const response = await request(app).post("/usuarios").send({
      name: "",
      email: "email-invalido",
    });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});
