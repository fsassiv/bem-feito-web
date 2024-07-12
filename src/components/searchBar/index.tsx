"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { CategoryTypes } from "@/types/miscellaneous";
import { SelectedStateTypes } from "@/types/searchBarTypes";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FetchCategories } from "../SWRConfigProvider";
import { Input } from "../ui/input";
import { SearchComboBox } from "./category/SearchComboBox";
import { SearchState } from "./state/SearchState";

export const SearchBar = () => {
  const tForms = useTranslations("forms");

  const { push } = useRouter();

  const { data: categories } = FetchCategories();

  const FormSchema = z.object({
    state: z.string().or(z.null()).optional(),
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
      state: null,
    },
  });

  const { formState, setValue, handleSubmit, control } = form;

  const { isValid } = formState;

  const updateSelectedCategory = (data: CategoryTypes | null) => {
    setValue("category", data?.value);
  };

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const { category, searchValue, state } = data;
    push(
      `/app/results?state=${state}&category=${category || "all"}&search=${searchValue}`
    );
  };

  const getSelectedState = (data: SelectedStateTypes) => {
    setValue("state", data?.sigla);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col lg:flex-row items-center lg:items-start relative lg:mr-4"
      >
        <SearchComboBox
          updateSelectedCategory={updateSelectedCategory}
          categories={categories}
        />
        <SearchState getSelectedState={getSelectedState} />
        <FormField
          control={control}
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
        >
          {tForms("searchBar.search")}
        </Button>
      </form>
    </Form>
  );
};
