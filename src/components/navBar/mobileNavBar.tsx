import { AppDropdownMenu } from "../appDropdownMenu";

export const MobileNavBar = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 bg-primary w-full p-2 flex justify-end">
      <AppDropdownMenu isMobile />
    </nav>
  );
};
