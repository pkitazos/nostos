import { formSchema } from "@/app/(site)/contact-us/_components/contact-form";
import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

  const data = await req.json();
  const { subject, name, email, message } = formSchema.parse(data);

  const messagePayload = {
    to: "nadia@nostosagency.com",
    from: "nadia@nostosagency.com",
    subject: `[Contact Form] ${subject}`,
    html: `<h2>You have a new contact form submission:</h2><p><strong>Name: </strong>${name}</p><p><strong>Email: </strong>${email}</p><p><strong>Subject: </strong>${subject}</p><p><strong>Message: </strong>${message}</p><div>This message was sent from <a href='${process.env.WEBSITE_URL!}'>${process.env.WEBSITE_URL!}</a></div>`,
  };

  try {
    await sendgrid.send(messagePayload);
    return NextResponse.json({
      status: 202,
      data: "Message have been accepted for delivery.",
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      data: "Something went wrong while delivering the message. Please try again later.",
    });
  }
}
