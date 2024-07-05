"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useTranslations } from "next-intl";
import { AppFormMessage } from "../form/AppFormMessage";
import { Input } from "../ui/input";
import { SearchComboBox } from "./SearchComboBox";
import { Category } from "./types";

const categories: Category[] = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
  {
    value: "done",
    label: "Done",
  },
  {
    value: "canceled",
    label: "Canceled",
  },
];

export function SearchBar() {
  const tForms = useTranslations("forms");

  const FormSchema = z.object({
    searchValue: z
      .string({ message: tForms("general.required") })
      .min(4, { message: tForms("general.minLength", { length: 4 }) }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
    },
  });

  const { isValid } = useFormState({ control: form.control });

  const updateSelectedCategory = (data: Category | null) => {
    console.log(data);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col lg:flex-row items-center justify-center relative"
      >
        <SearchComboBox
          updateSelectedCategory={updateSelectedCategory}
          categories={categories}
        />
        <FormField
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <FormItem className="w-full !mt-0 lg:max-w-[400px] xl:max-w-[500px] max-lg:mb-1">
              <FormControl>
                <Input
                  className="lg:rounded-l-[0px] lg:border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onChange={field.onChange}
                  placeholder={tForms("searchBar.searchingFor")}
                />
              </FormControl>
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
