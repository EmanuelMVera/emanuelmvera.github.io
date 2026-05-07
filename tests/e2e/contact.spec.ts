import { test, expect } from "@playwright/test";

test.describe("Formulario de contacto", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contacto");
    // Scroll al formulario
    await page.locator("#contacto").scrollIntoViewIfNeeded();
  });

  test("muestra errores si se envía sin datos", async ({ page }) => {
    await page.getByRole("button", { name: "Enviar mensaje" }).click();
    await expect(page.getByText("Ingresa tu nombre.")).toBeVisible();
  });

  test("muestra error de email inválido", async ({ page }) => {
    await page.getByLabel("Nombre").fill("Test");
    await page.getByLabel("Email").fill("no-es-email");
    await page.getByRole("button", { name: "Enviar mensaje" }).click();
    await expect(page.getByText("Ingresa un email válido.")).toBeVisible();
  });

  test("envía correctamente en modo demo (sin env vars)", async ({ page }) => {
    await page.getByLabel("Nombre").fill("Test Usuario");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Asunto").fill("Consulta de prueba e2e");
    await page.getByLabel("Mensaje").fill("Este es un mensaje de prueba para el formulario de contacto.");

    await page.getByRole("button", { name: "Enviar mensaje" }).click();

    // Espera el mensaje de éxito (modo demo tiene delay de 400ms)
    await expect(page.getByText("¡Gracias!")).toBeVisible({ timeout: 5000 });
  });
});
