import Link from "next/link";

import { JoinGroupButton } from "@/components/join-group-button";
import { UsersIcon } from "@/components/icons";
import type { GroupItem } from "@/lib/content";

type GroupCardProps = {
  group: GroupItem;
};

export function GroupCard({ group }: GroupCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-purple-md transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-lg">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-[rgba(110,60,200,0.30)] ${group.avatarColor}`}
        >
          <span className="select-none text-xl font-bold text-white">
            {group.leader.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold leading-tight text-slate-900">
            {group.leader},{" "}
            <span className="font-normal text-slate-500">{group.age}</span>
          </p>
          <Link
            href={`/groups/${group.slug}`}
            className="mt-0.5 block truncate text-xs font-medium text-brand-purple"
          >
            {group.name}
          </Link>
          <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
            <UsersIcon size={11} strokeWidth={2} />
            <span>{group.members} members</span>
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-slate-600">
        {group.description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5" aria-label="Interests">
        {group.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-chip px-2.5 py-0.5 text-[11px] font-semibold text-brand-purple"
          >
            {tag}
          </span>
        ))}
      </div>

      <JoinGroupButton slug={group.slug} />
    </article>
  );
}
