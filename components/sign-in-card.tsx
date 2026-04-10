"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { clearSession, getSession, setSession } from "@/lib/storage";

type SignInForm = {
  name: string;
  email: string;
  city: string;
};

const initialForm: SignInForm = {
  name: "",
  email: "",
  city: ""
};

export function SignInCard() {
  const router = useRouter();
  const [form, setForm] = useState<SignInForm>(initialForm);
  const [isHydrated, setIsHydrated] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const session = getSession();

    if (session) {
      setForm(session);
      setSignedIn(true);
    }
  }, []);

  if (signedIn) {
    return (
      <div className="route-card rounded-[28px] p-8 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
          Signed In
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
          Welcome back, {form.name.split(" ")[0]}
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
          Your local Circle session is active on this device. You can keep
          exploring groups or clear the session at any time.
        </p>
        <dl className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 sm:grid-cols-3">
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/40">Name</dt>
            <dd className="mt-1 text-sm font-medium text-white">{form.name}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/40">Email</dt>
            <dd className="mt-1 text-sm font-medium text-white">{form.email}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-white/40">City</dt>
            <dd className="mt-1 text-sm font-medium text-white">{form.city}</dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/my-groups"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple"
          >
            View My Groups
          </Link>
          <button
            type="button"
            onClick={() => {
              clearSession();
              setForm(initialForm);
              setSignedIn(false);
            }}
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/80"
          >
            Log Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className="route-card rounded-[28px] p-8 text-white"
      onSubmit={(event) => {
        event.preventDefault();
        setSession(form);
        setSignedIn(true);
        router.push("/my-groups");
      }}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-purple">
        Local Session
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
        Sign in to Circle
      </h2>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">
        This clone uses device-local session storage instead of a backend auth
        provider. Your name, email, and city stay in localStorage only.
      </p>
      <div className="mt-8 grid gap-4">
        <label className="grid gap-1.5">
          <span className="text-sm font-medium text-white/70">Full Name</span>
          <input
            required
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:bg-white/10"
            placeholder="e.g. Aryan Mehta"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-white/70">Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                setForm((current) => ({ ...current, email: event.target.value }))
              }
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:bg-white/10"
              placeholder="you@example.com"
            />
          </label>
          <label className="grid gap-1.5">
            <span className="text-sm font-medium text-white/70">City</span>
            <input
              required
              value={form.city}
              onChange={(event) =>
                setForm((current) => ({ ...current, city: event.target.value }))
              }
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition-colors focus:border-brand-purple focus:bg-white/10"
              placeholder="e.g. Bangalore"
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={!isHydrated}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-purple"
      >
        Continue
      </button>
    </form>
  );
}
