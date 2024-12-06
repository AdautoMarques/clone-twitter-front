"use client";

import { useState } from "react";
import { Input } from "./input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaultValue?: string;
  hidenOnSearch?: boolean;
};

export const SearchInput = ({ defaultValue, hidenOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(defaultValue ?? "");
  const handleSearchEnter = () => {
    if (searchInput) {
      router.push("/search?q=" + encodeURIComponent(searchInput));
    }
  };

  if (hidenOnSearch && pathname === "/search") return null;
  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(t) => setSearchInput(t)}
      onEnter={handleSearchEnter}
    />
  );
};
