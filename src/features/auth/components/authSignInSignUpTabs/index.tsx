"use client";
import GoogleLogo from "#/images/google.png";
import { LoadingComponent } from "@/components/loadingScreen/LoadingComponent";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import { useTranslations } from "use-intl";

const SignInForm = dynamic(
  () =>
    import("@/features/auth/components/form/SignInForm").then(
      (mod) => mod.SignInForm
    ),
  {
    ssr: false,
    loading: LoadingComponent,
  }
);
const SignUpForm = dynamic(
  () =>
    import("@/features/auth/components/form/SignUpForm").then(
      (mod) => mod.SignUpForm
    ),
  { ssr: false, loading: LoadingComponent }
);

export const AuthSignInSignUpTabs = ({}) => {
  const pathname = usePathname();
  const { replace } = useRouter();

  const tAuth = useTranslations("forms.auth");

  const defaultTab = useMemo(() => {
    return pathname.split("?")[0].split("/")[2] || "signin";
  }, [pathname]);

  return (
    <Tabs defaultValue={defaultTab} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin" onClick={() => replace("/auth/signin")}>
          {tAuth("account")}
        </TabsTrigger>
        <TabsTrigger value="signup" onClick={() => replace("/auth/signup")}>
          {tAuth("createAccount")}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="signin" className="text-center">
        <SignInForm />
      </TabsContent>
      <TabsContent value="signup" className="text-center">
        <SignUpForm />
      </TabsContent>
      <div className="flex flex-col items-center mt-6 lg:mt-6 rounded-md">
        <p className="text-sm mb-2 max-lg:text-white">
          {tAuth("orConectWith")}
        </p>
        <div className="flex justify-center w-full">
          <Button
            variant="ghost"
            title={tAuth("logInWithGoogle")}
            className="bg-white"
          >
            <Image src={GoogleLogo} alt="Google logo" width={30} height={30} />
          </Button>
        </div>
      </div>
    </Tabs>
  );
};
