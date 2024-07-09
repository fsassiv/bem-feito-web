"use client";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NotFoundIcon from "../../../../public/svg/not-found.svg";

export default function NotFound() {
  const tNotFound = useTranslations("errors.notFoundPage");

  const { replace, back } = useRouter();

  return (
    <div className="flex flex-col justify-evenly lg:justify-center items-center h-screen w-screen container">
      <h2 className="text-center text-[30px] lg:text-[40px] font-bold text-primary mb-4">
        {tNotFound("title")}
      </h2>

      <Image
        src={NotFoundIcon}
        alt={tNotFound("title")}
        width={200}
        height={200}
        className="mb-4 w-full md:w-1/2 lg:w-2/5 lg:mb-8"
      />

      <div className="flex flex-col w-full md:w-[20%] justify-between">
        <Button
          variant="outline"
          className="max-lg:w-full mb-4 flex-1"
          onClick={() => replace("/app/results")}
        >
          {tNotFound("goHomeBtn")}
        </Button>

        <Button
          variant="default"
          className="max-lg:w-full flex-1"
          onClick={() => back()}
        >
          {tNotFound("backBtn")}
        </Button>
      </div>
    </div>
  );
}
