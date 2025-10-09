'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function sendEmail(formData: FormData) {
  const rawFormData = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  const parsed = contactFormSchema.safeParse(rawFormData);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // Placeholder for sending email
  console.log('New message from portfolio contact form:');
  console.log(parsed.data);

  // In a real application, you would integrate with an email service like Resend, Nodemailer, or Formspree.
  // Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'your-email@example.com',
  //     subject: `New message from ${parsed.data.name}`,
  //     text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\n\nMessage:\n${parsed.data.message}`,
  //   });
  //   return { success: true, message: 'Message sent successfully!' };
  // } catch (error) {
  //   console.error('Email sending error:', error);
  //   return { success: false, message: 'Failed to send message.' };
  // }

  return { success: true, message: 'Message sent successfully (logged to console)!' };
}
