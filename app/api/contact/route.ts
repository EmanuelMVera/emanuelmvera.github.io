import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot check: si viene con valor, es bot — responder 200 silencioso
    if (body.company) {
      return NextResponse.json({ ok: true });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { ok: false, errors: result.error.flatten() },
        { status: 400 }
      );
    }

    const emailResult = await sendContactEmail(result.data);

    if (!emailResult.success) {
      return NextResponse.json(
        { ok: false, error: emailResult.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact]", err);
    return NextResponse.json(
      { ok: false, error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
