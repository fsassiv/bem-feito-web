"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  LogIn,
  LogOut,
  Menu,
  MessageSquareMore,
  User,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

export const AppDropdownMenu = () => {
  const tMenu = useTranslations("mainMenu");

  const { data } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="max-lg:hidden focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu color="#00a8a8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-4">
        <DropdownMenuLabel>{tMenu("title")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          <span>{tMenu("profile")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <MessageSquareMore className="mr-2 h-4 w-4" />
          <span>{tMenu("messages")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2 h-4 w-4" />
          <span>{tMenu("notifications")}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        {data ? (
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>{tMenu("logOut")}</span>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem>
            <LogIn className="mr-2 h-4 w-4" />
            <span>{tMenu("logIn")}</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
