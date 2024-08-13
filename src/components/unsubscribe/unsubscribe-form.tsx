"use client";

import { useState } from "react";
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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

/**
 * UnsubscribeForm component that supports form validation provided by react-hook-form and zod.
 * This component is integrated with Formspark API to handle form submission.
 * When submitting the form, user should provide their email.
 *
 * @returns A unsubscribe form component
 */
export const UnsubscribeForm = () => {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation("common");

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Please enter your email",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  /**
   * Fetches the Formspark Action URL from the environment variables and sends a POST request to the URL with the form values.
   *
   * @param values
   */
  const handleFetchFormAPI = async (values: z.infer<typeof formSchema>) => {
    if (!process.env.NEXT_PUBLIC_FORMSPARK_UNSUBSCRIBE_ACTION_URL) {
      throw new Error("No Formspark Action URL found");
    }

    const res = await fetch(
      process.env.NEXT_PUBLIC_FORMSPARK_UNSUBSCRIBE_ACTION_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (!res.ok) throw new Error("Failed to submit form");
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      handleFetchFormAPI(values);
    } catch (error) {
      setIsError(true);
    }

    form.reset();
    setIsSuccess(true);
  };
  return (
    <article className="flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mx-auto max-w-xl space-y-3 p-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder={t("unsubscribe.form.email")} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="max-w-xl w-full" type="submit">
            {t("unsubscribe.form.submit")}
          </Button>
        </form>
      </Form>
      {isError ? (
        <span className="text-red-500">{t("common.errorMessage")}</span>
      ) : isSuccess ? (
        <span className="text-green-500">{t("contact.form.success")}</span>
      ) : null}
    </article>
  );
};
