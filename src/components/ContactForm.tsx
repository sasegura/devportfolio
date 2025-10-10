'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

type Dictionary = {
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
    error: string;
  },
  validation: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMin: string;
  }
}

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const formSchema = z.object({
    name: z.string().min(1, dictionary.validation.nameRequired),
    email: z.string()
      .min(1, dictionary.validation.emailRequired)
      .email(dictionary.validation.emailInvalid),
    message: z.string()
      .min(1, dictionary.validation.messageRequired)
      .min(10, dictionary.validation.messageMin),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        // Using Formspree for form submission
        const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xpwgkqkp';
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            _subject: `New message from ${values.name} - Portfolio Contact Form`,
          }),
        });

        if (response.ok) {
          toast({
            title: "Success!",
            description: dictionary.form.success,
          });
          form.reset();
        } else {
          throw new Error('Form submission failed');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        toast({
          variant: "destructive",
          title: "Error",
          description: dictionary.form.error,
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.form.name}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.form.namePlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.form.email}</FormLabel>
              <FormControl>
                <Input placeholder={dictionary.form.emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dictionary.form.message}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dictionary.form.messagePlaceholder}
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {dictionary.form.submit}
        </Button>
      </form>
    </Form>
  );
}
