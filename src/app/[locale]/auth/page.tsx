import { redirect } from "next/navigation";

export default function AuthRoot() {
  redirect("/app/signup");
}
