"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

/**
 * ContactForm component that supports form validation provided by react-hook-form and zod.
 * This component is integrated with Formspark API to handle form submission.
 * When submitting the form, user should provide their name, email, and message. Company is optional.
 *
 * @returns A contact form component
 */
export const ContactForm = () => {
  const { t } = useTranslation("common");

  /**
   * FieldClue component that displays a required or optional field indicator.
   *
   * @param type - "required" or "optional"
   * @returns A required or optional field indicator
   */
  const FieldClue = ({ type }: { type: "required" | "optional" }) => {
    const isRequired = type === "required";
    const color = isRequired ? "text-red-500" : "text-gray-500";

    return (
      <span className={`pl-1 italic text-xs ${color}`}>
        <span className="font-bold">
          {isRequired ? "*" : t("contact.form.optional")}
        </span>
      </span>
    );
  };

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t("contact.form.errors.name"),
    }),
    email: z.string().email({
      message: t("contact.form.errors.email"),
    }),
    company: z.string(),
    message: z.string().min(10, {
      message: t("contact.form.errors.message"),
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  /**
   * Fetches the Formspark Action URL from the environment variables and sends a POST request to the URL with the form values.
   *
   * @param values
   */
  const handleFetchFormAPI = async (values: z.infer<typeof formSchema>) => {
    if (!process.env.NEXT_PUBLIC_FORMSPARK_ACTION_URL) return;

    const res = await fetch(process.env.NEXT_PUBLIC_FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) throw new Error("Failed to submit form");
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    handleFetchFormAPI(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-3 p-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact.form.name")}
                <FieldClue type="required" />
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>
                {t("contact.form.email")}
                <FieldClue type="required" />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t("contact.form.company")}
                <FieldClue type="optional" />
              </FormLabel>
              <FormControl>
                <Input {...field} />
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
              <FormLabel>
                {t("contact.form.message")}
                <FieldClue type="required" />
              </FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          {t("contact.form.submit")}
        </Button>
      </form>
    </Form>
  );
};
