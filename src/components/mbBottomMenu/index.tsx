import { AppDropdownMenu } from "../appDropdownMenu";

export const MBBottomMenu = () => {
  return (
    <div className="lg:hidden fixed bottom-0 bg-primary w-full p-2 flex justify-end">
      <AppDropdownMenu isMobile />
    </div>
  );
};
