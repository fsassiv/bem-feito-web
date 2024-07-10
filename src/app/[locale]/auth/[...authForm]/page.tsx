import { LoadingComponent } from "@/components/loadingScreen/LoadindComponent";
import dynamic from "next/dynamic";

const AuthSignInSignUpTabs = dynamic(
  () =>
    import("@/components/auth/authSignInSignUpTabs").then(
      (mod) => mod.AuthSignInSignUpTabs,
    ),
  {
    loading: LoadingComponent,
  },
);

export default function Auth() {
  return <AuthSignInSignUpTabs />;
}
