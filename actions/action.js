import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
export const submitForm = async (form) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Query from my blog site <onboarding@resend.dev>",
      to: ["pranjalhanu66@gmail.com"],
      subject: form.subject,
      html: ` <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.phone}</p>
        <p><strong>Message:</strong><br/> ${form.message}</p>`,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};
