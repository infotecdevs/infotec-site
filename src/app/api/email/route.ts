import { EmailTemplate } from "@/components/EmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.EMAIL_API_KEY);

export async function POST(_request: Request) {
  const { name, email, message } = await _request.json();

  console.log(name, email, message);

  if (!name || !email || !message) {
    throw new Error("Missing fields!");
  }

  try {
    const data = await resend.emails.send({
      from: "delivered@resend.dev",
      to: ["infotecdevs@gmail.com"],
      subject: "InfotecDevs",
      react: EmailTemplate({ name, email, message }),
    });

    return NextResponse.json({ data });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
