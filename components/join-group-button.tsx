"use client";

import { useEffect, useState } from "react";

import {
  GROUPS_EVENT,
  getJoinedGroups,
  joinGroup,
  leaveGroup
} from "@/lib/storage";

type JoinGroupButtonProps = {
  slug: string;
  allowLeave?: boolean;
  className?: string;
};

export function JoinGroupButton({
  slug,
  allowLeave = false,
  className
}: JoinGroupButtonProps) {
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const sync = () => {
      setJoined(getJoinedGroups().includes(slug));
    };

    sync();
    window.addEventListener(GROUPS_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(GROUPS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [slug]);

  return (
    <button
      type="button"
      onClick={() => {
        if (joined && allowLeave) {
          leaveGroup(slug);
          return;
        }

        if (!joined) {
          joinGroup(slug);
        }
      }}
      className={
        className ??
        [
          "mt-auto w-full rounded-full py-2.5 text-xs font-semibold tracking-wide transition-colors duration-200",
          joined
            ? "bg-brand-purple/15 text-brand-purple"
            : "bg-indigo-900 text-white hover:bg-indigo-800"
        ].join(" ")
      }
    >
      {joined ? (allowLeave ? "Leave Group" : "Joined") : "Join Group"}
    </button>
  );
}
