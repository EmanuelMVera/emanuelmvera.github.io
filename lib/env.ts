import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().optional(),
  RESEND_FROM_EMAIL: z.string().email().optional(),
  RESEND_TO_EMAIL: z.string().email().optional(),
  FORMSPREE_ENDPOINT: z.string().url().optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

function validateEnv() {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.warn("[env] Variables de entorno con formato inválido:", parsed.error.flatten());
    return envSchema.parse({ NODE_ENV: process.env.NODE_ENV ?? "development" });
  }
  return parsed.data;
}

export const env = validateEnv();
