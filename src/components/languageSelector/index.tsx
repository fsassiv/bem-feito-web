import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { locales } from "@/i18n";
import { disableOutlineCss } from "@/lib/utils";
import clsx from "clsx";
import { Globe } from "lucide-react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useMemo } from "react";

export function LanguageSelector() {
  const pathname = usePathname();
  const searchparams = useSearchParams();
  const { replace } = useRouter();
  const { locale } = useParams();

  const currentUrl = useMemo(() => {
    return `${pathname}?${searchparams}`;
  }, [pathname, searchparams]);

  const handleSelectChange = (value: string) => {
    const temp = `/${value}${currentUrl}`;
    replace(temp);
  };
  return (
    <Select onValueChange={handleSelectChange} defaultValue={locale as string}>
      <SelectTrigger
        className={clsx(disableOutlineCss, "border-0 last:*:hidden")}
      >
        <Globe size={16} />
      </SelectTrigger>
      <SelectContent className="min-w-[5rem]">
        {locales.map((item) => (
          <SelectItem
            className="flex justify-end p-2 text-xs"
            key={item}
            value={item}
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
