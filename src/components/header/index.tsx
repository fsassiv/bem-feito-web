import { House } from "lucide-react";
import { AppDropdownMenu } from "../appDropdownMenu";
import { SearchBar } from "../searchBar";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="w-full flex justify-between p-2 items-center">
      <Button variant="ghost" className="max-lg:hidden">
        <House color="#00a8a8" />
        <span className="inline-block ml-2 text-primary">Bem feito</span>
      </Button>
      <SearchBar />
      <AppDropdownMenu />
    </header>
  );
};
