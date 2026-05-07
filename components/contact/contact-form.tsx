"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ContactStatus } from "./contact-status";
import { contactSchema, type ContactFormData } from "@/lib/validation";
import { siteConfig } from "@/data/site";

type FormStatus = "idle" | "sending" | "success" | "error";
type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const { form } = siteConfig.contact;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData.entries());

    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const errors: FieldErrors = {};
      const flat = result.error.flatten().fieldErrors;
      for (const [field, msgs] of Object.entries(flat)) {
        if (msgs?.[0]) errors[field as keyof ContactFormData] = msgs[0];
      }
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return <ContactStatus status="success" message={form.success} />;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Honeypot: oculto, debe quedar vacío */}
      <input
        name="company"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label={form.fields.name.label}
          placeholder={form.fields.name.placeholder}
          error={fieldErrors.name}
          required
          autoComplete="name"
        />
        <Input
          id="email"
          name="email"
          type="email"
          label={form.fields.email.label}
          placeholder={form.fields.email.placeholder}
          error={fieldErrors.email}
          required
          autoComplete="email"
        />
      </div>

      <Input
        id="subject"
        name="subject"
        label={form.fields.subject.label}
        placeholder={form.fields.subject.placeholder}
        error={fieldErrors.subject}
        required
      />

      <Textarea
        id="message"
        name="message"
        label={form.fields.message.label}
        placeholder={form.fields.message.placeholder}
        error={fieldErrors.message}
        required
        rows={5}
      />

      {status === "error" && (
        <ContactStatus status="error" message={form.error} />
      )}

      <Button type="submit" loading={status === "sending"} className="w-full">
        {status === "sending" ? form.sending : form.submit}
      </Button>
    </form>
  );
}
