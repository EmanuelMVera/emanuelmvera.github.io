import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre.").max(100),
  email: z.string().email("Ingresa un email válido."),
  subject: z
    .string()
    .min(3, "El asunto debe tener al menos 3 caracteres.")
    .max(200),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(5000),
  // Honeypot: debe llegar vacío. Se valida en la API route, no en el schema.
  company: z.string().optional().default(""),
});

export type ContactFormData = z.infer<typeof contactSchema>;
