import { describe, it, expect, vi, beforeEach } from "vitest";
import * as fs from "node:fs";

// Mockear el módulo fs para no depender del filesystem real
vi.mock("node:fs");

describe("getProjectSlugs", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("devuelve slugs desde archivos .mdx", async () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vi.mocked(fs.readdirSync).mockReturnValue([
      "app-clima.mdx",
      "billetera-virtual.mdx",
      "proximamente.mdx",
      "otro.ts",
    ] as any);

    const { getProjectSlugs } = await import("@/lib/mdx");
    const slugs = getProjectSlugs();

    expect(slugs).toEqual(["app-clima", "billetera-virtual", "proximamente"]);
  });

  it("devuelve array vacío si el directorio no existe", async () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);

    const { getProjectSlugs } = await import("@/lib/mdx");
    const slugs = getProjectSlugs();

    expect(slugs).toEqual([]);
  });
});
