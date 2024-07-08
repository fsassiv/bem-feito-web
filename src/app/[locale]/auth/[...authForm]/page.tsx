import dynamic from "next/dynamic";

const AuthSignInSignUpTabs = dynamic(() =>
  import("@/components/auth/authSignInSignUpTabs").then(
    (mod) => mod.AuthSignInSignUpTabs
  )
);

export default function Auth() {
  return <AuthSignInSignUpTabs />;
}
