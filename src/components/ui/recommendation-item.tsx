"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";

type Props = {
  user: User;
};

export const RecommendationItem = ({ user }: Props) => {
  const handleFollowButton = () => {};

  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`${user.slug}`}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`${user.slug}`} className="block truncate">
          {user.name}
          <div className="truncate text-sm text-gray-400">@{user.slug}</div>
        </Link>
      </div>
      <div className="pl-2 w-20">
        <Button label="Seguir" onClick={handleFollowButton} size={3} />
      </div>
    </div>
  );
};
