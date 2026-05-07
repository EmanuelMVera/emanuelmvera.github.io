import { test, expect } from "@playwright/test";

test.describe("Página de inicio", () => {
  test("carga el hero con el CTA principal", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByText("Ver proyectos")).toBeVisible();
  });

  test("skip link es visible al hacer Tab", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByText("Saltar al contenido principal");
    await expect(skipLink).toBeVisible();
  });

  test("el toggle de tema cambia la clase dark en html", async ({ page }) => {
    await page.goto("/");
    const htmlEl = page.locator("html");
    const initialClass = await htmlEl.getAttribute("class");
    const isDarkInitially = initialClass?.includes("dark") ?? false;

    await page.getByRole("button", { name: /modo (oscuro|claro)/i }).click();
    await page.waitForTimeout(100);

    const updatedClass = await htmlEl.getAttribute("class");
    const isDarkAfter = updatedClass?.includes("dark") ?? false;

    expect(isDarkAfter).toBe(!isDarkInitially);
  });

  test("la sección de proyectos es accesible por ancla", async ({ page }) => {
    await page.goto("/#proyectos");
    await expect(page.locator("#proyectos")).toBeVisible();
  });
});
