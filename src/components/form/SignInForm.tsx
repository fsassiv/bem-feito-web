import { disableOutlineCss } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FormProvider, useForm, useFormState } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { AuthFormsFooter } from "./AuthFormsFooter";

export const SignInForm = () => {
  const tAuth = useTranslations("forms.auth");
  const tForms = useTranslations("forms");
  const { back } = useRouter();

  const FormSchema = z.object({
    email: z.string().email().min(6),
    password: z
      .string({ message: tForms("general.required") })
      .min(8, { message: tForms("general.minLength", { length: 8 }) })
      .refine((password) => /[A-Z]/.test(password), {
        message: tAuth("passwordComplexityUppercase"),
      })
      .refine((password) => /[a-z]/.test(password), {
        message: tAuth("passwordComplexityLowercase"),
      })
      .refine((password) => /[0-9]/.test(password), {
        message: tAuth("passwordComplexityNumber"),
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: tAuth("passwordComplexitySpecialChar"),
      }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isValid } = useFormState({ control: form.control });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>{tAuth("account")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{tAuth("email")}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={tAuth("emailPlaceholder")}
                      className={disableOutlineCss}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{tAuth("password")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={tAuth("passwordPlaceholder")}
                      className={disableOutlineCss}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <AuthFormsFooter
            onGoBack={() => back()}
            mainBtnLabel={tAuth("logIn")}
            cancelBtnLabel={tAuth("goBack")}
            isDisabledSubmit={!isValid}
          />
        </Card>
      </form>
    </FormProvider>
  );
};
