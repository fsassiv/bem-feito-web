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
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { FC, useMemo } from "react";

export const AppDropdownMenu: FC<{ isMobile?: boolean }> = ({ isMobile }) => {
  const tMenu = useTranslations("mainMenu");

  const { data } = useSession();

  const MENU_ITEMS = useMemo(
    () => [
      {
        Icon: icons["User"],
        label: tMenu("profile"),
        isSeparator: false,
        callback: () => console.log("Profile"),
      },
      {
        Icon: icons["LayoutDashboard"],
        label: tMenu("dashboard"),
        isSeparator: false,
        callback: () => console.log("dashboard"),
      },
      {
        Icon: icons["MessageSquareMore"],
        label: tMenu("messages"),
        callback: () => console.log("Messages"),
      },
      {
        Icon: icons["Bell"],
        label: tMenu("notifications"),
        callback: () => console.log("Notif"),
      },
      { Icon: "", label: "", isSeparator: true },
      {
        Icon: icons["LogOut"],
        label: tMenu("logOut"),
        isHidden: !Boolean(data),
        callback: () => console.log("first"),
      },
      {
        Icon: icons["LogIn"],
        label: tMenu("logIn"),
        isHidden: Boolean(data),
        callback: () => console.log("Login"),
      },
    ],
    [data, tMenu]
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
              <button className="flex" onClick={item.callback}>
                <item.Icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </button>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
