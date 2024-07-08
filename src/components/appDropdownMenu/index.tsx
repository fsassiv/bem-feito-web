"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { appColors } from "@/lib/utils";
import { icons, Menu } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { FC, useMemo } from "react";

export const AppDropdownMenu: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const tMenu = useTranslations("mainMenu");
  const { push } = useRouter();

  const { data } = useSession();

  const MENU_ITEMS = useMemo(
    () => [
      {
        Icon: icons["User"],
        label: "profile",
        isSeparator: false,
        callback: () => push("/app/profile"),
      },
      {
        Icon: icons["LayoutDashboard"],
        label: "dashboard",
        isSeparator: false,
        callback: () => console.log("dashboard"),
      },
      {
        Icon: icons["MessageSquareMore"],
        label: "messages",
        callback: () => console.log("Messages"),
      },
      {
        Icon: icons["Bell"],
        label: "notifications",
        callback: () => console.log("Notif"),
      },
      { Icon: "", label: "", isSeparator: true },
      {
        Icon: icons["LogOut"],
        label: "logOut",
        isHidden: !Boolean(data),
        callback: () => signOut(),
      },
      {
        Icon: icons["UserPlus"],
        label: "createAccount",
        isHidden: Boolean(data),
        callback: () => push("/auth/signup"),
      },
      {
        Icon: icons["LogIn"],
        label: "logIn",
        isHidden: Boolean(data),
        callback: () => push("/auth/signin"),
      },
    ],
    [data, push]
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={`${
            isMobile ? null : "max-lg:hidden"
          } focus-visible:ring-0 focus-visible:ring-offset-0`}
        >
          <Menu color={`${isMobile ? "white" : appColors.primary}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        {MENU_ITEMS.map((item, index) => {
          if (item.isHidden) return null;
          return item.isSeparator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem key={item.label}>
              <button className="flex w-full" onClick={item.callback}>
                <item.Icon className="mr-2 h-4 w-4" />
                <span>{tMenu(item.label)}</span>
              </button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
