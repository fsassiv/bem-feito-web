"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useAppToast } from "@/hooks/useAppToast";
import { categories } from "@/lib/dummy-data";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { SearchComboBox } from "./SearchComboBox";
import { Category } from "./types";

export function SearchBar() {
  const tForms = useTranslations("forms");
  const { push } = useRouter();

  const { toastWarning } = useAppToast();

  const FormSchema = z.object({
    category: z.string().or(z.null()).optional(),
    searchValue: z
      .string({ message: tForms("general.required") })
      .min(4, { message: tForms("general.minLength", { length: 4 }) }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchValue: "",
      category: null,
    },
  });

  const { isValid, errors } = useFormState({ control: form.control });

  const updateSelectedCategory = (data: Category | null) => {
    form.setValue("category", data?.value);
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  useEffect(() => {
    if (errors["searchValue"]?.message) {
      toastWarning({ description: errors["searchValue"]?.message });
      return;
    }
    toast.dismiss();
  }, [toastWarning, errors]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col lg:flex-row items-center lg:items-start relative lg:mr-4"
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
                  className={
                    "lg:rounded-l-[0px] lg:border-l-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  }
                  onChange={field.onChange}
                  placeholder={tForms("searchBar.searchingFor")}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          disabled={!isValid}
          type="submit"
          className="lg:ml-4 !mt-0 max-lg:w-full"
          onClick={() => push("/app/home")}
        >
          {tForms("searchBar.search")}
        </Button>
      </form>
    </Form>
  );
}
