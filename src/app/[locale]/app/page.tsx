import { AppPage } from "@/components/layout/app/Page";
import { HomeCarousel } from "@/components/pages/home/HomeCarousel";

export default async function AppHome() {
  return (
    <AppPage>
      <HomeCarousel />
    </AppPage>
  );
}
