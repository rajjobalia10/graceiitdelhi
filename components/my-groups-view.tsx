"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { JoinGroupButton } from "@/components/join-group-button";
import { groups } from "@/lib/content";
import { GROUPS_EVENT, getJoinedGroups, getSession } from "@/lib/storage";

export function MyGroupsView() {
  const [joinedSlugs, setJoinedSlugs] = useState<string[]>([]);
  const [sessionName, setSessionName] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      setJoinedSlugs(getJoinedGroups());
      setSessionName(getSession()?.name ?? null);
    };

    sync();
    window.addEventListener(GROUPS_EVENT, sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener(GROUPS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const joinedGroups = groups.filter((group) => joinedSlugs.includes(group.slug));

  if (joinedGroups.length === 0) {
    return (
      <div className="route-card rounded-[28px] p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
          Joined Groups
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
          {sessionName ? `${sessionName.split(" ")[0]}, your list is empty` : "No groups joined yet"}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
          Use the Groups page or any group detail page to join a tribe. Joined
          groups are stored locally and surfaced here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/groups"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple"
          >
            Explore Groups
          </Link>
          <Link
            href="/sign-in"
            className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80"
          >
            Update Session
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {joinedGroups.map((group) => (
        <article
          key={group.slug}
          className="route-card flex h-full flex-col rounded-[28px] p-6 text-white"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
                {group.city}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                {group.name}
              </h2>
              <p className="mt-1 text-sm text-white/55">
                Led by {group.leader} · {group.members} members
              </p>
            </div>
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${group.avatarColor}`}
            >
              <span className="text-lg font-bold text-white">
                {group.leader.charAt(0)}
              </span>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/65">
            {group.mission}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {group.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/groups/${group.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-purple"
            >
              View Group
            </Link>
            <JoinGroupButton
              slug={group.slug}
              allowLeave
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80 transition-colors hover:bg-white/10"
            />
          </div>
        </article>
      ))}
    </div>
  );
}
