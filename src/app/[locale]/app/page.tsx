import { AppPage } from "@/components/layout/app/Page";
import { HomeCarousel } from "@/features/home/components/HomeCarousel";

export default async function AppHome() {
  return (
    <AppPage>
      <HomeCarousel />
    </AppPage>
  );
}
