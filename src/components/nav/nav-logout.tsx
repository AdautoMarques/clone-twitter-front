"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/signin");
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex items-center gap-6 py-3 opacity-50 hover:opacity-100`}
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="size-6" />
      <div>Sair</div>
    </div>
  );
};
