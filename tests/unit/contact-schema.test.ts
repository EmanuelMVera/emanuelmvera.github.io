import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/validation";

const valid = {
  name: "Juan Pérez",
  email: "juan@example.com",
  subject: "Consulta laboral",
  message: "Hola, me interesa conocer las posiciones disponibles en tu equipo.",
};

describe("contactSchema", () => {
  it("valida un payload correcto", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rechaza nombre menor a 2 caracteres", () => {
    const result = contactSchema.safeParse({ ...valid, name: "J" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.flatten().fieldErrors.name?.[0]).toContain("Ingresa");
    }
  });

  it("rechaza email sin formato válido", () => {
    const result = contactSchema.safeParse({ ...valid, email: "no-es-un-email" });
    expect(result.success).toBe(false);
  });

  it("rechaza asunto menor a 3 caracteres", () => {
    const result = contactSchema.safeParse({ ...valid, subject: "ab" });
    expect(result.success).toBe(false);
  });

  it("rechaza mensaje menor a 10 caracteres", () => {
    const result = contactSchema.safeParse({ ...valid, message: "Corto" });
    expect(result.success).toBe(false);
  });

  it("acepta honeypot vacío", () => {
    const result = contactSchema.safeParse({ ...valid, company: "" });
    expect(result.success).toBe(true);
  });

  it("acepta honeypot ausente (campo opcional)", () => {
    const result = contactSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });
});
