"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { disableOutlineCss } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { AppFormMessage } from "../form/AppFormMessage";
import { Input } from "../ui/input";

export function SearchBar() {
  const tForms = useTranslations("forms");

  const FormSchema = z.object({
    categories: z.string().optional(),
    searchValue: z
      .string({ message: tForms("general.required") })
      .min(4, { message: tForms("general.minLength", { length: 4 }) }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: "",
      searchValue: "",
    },
  });

  const { isValid } = useFormState({ control: form.control });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col lg:flex-row items-center justify-center relative"
      >
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => (
            <FormItem className="w-full lg:max-w-[200px] max-lg:mb-1">
              <Select onValueChange={field.onChange} defaultValue="0">
                <FormControl>
                  <SelectTrigger
                    className={`lg:rounded-r-[0px] bg-primary !text-white lg:border-r-0 ${disableOutlineCss}`}
                  >
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="0">
                    {tForms("searchBar.allCategories")}
                  </SelectItem>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <AppFormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem className="w-full !mt-0 lg:max-w-[400px] xl:max-w-[500px] max-lg:mb-1">
              <Input
                className="lg:rounded-l-[0px] lg:border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                onChange={field.onChange}
                placeholder={tForms("searchBar.searchingFor")}
              />
              <AppFormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={!isValid}
          type="submit"
          className="lg:ml-4 !mt-0 max-lg:w-full"
        >
          {tForms("searchBar.search")}
        </Button>
      </form>
    </Form>
  );
}
