import { describe, it, expect } from "vitest";
import { cn } from "@/lib/cn";

describe("cn", () => {
  it("combina clases básicas", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("resuelve conflictos de Tailwind (último gana)", () => {
    expect(cn("p-4", "p-6")).toBe("p-6");
  });

  it("omite clases falsas", () => {
    expect(cn("base", false && "hidden", "active")).toBe("base active");
  });

  it("maneja clases condicionales con objeto", () => {
    expect(cn("base", { hidden: false, active: true })).toBe("base active");
  });

  it("fusiona variantes de padding", () => {
    expect(cn("px-4 py-2", "px-6")).toBe("py-2 px-6");
  });

  it("devuelve string vacío si no hay clases", () => {
    expect(cn()).toBe("");
  });
});
