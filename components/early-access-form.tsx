"use client";

import { useEffect, useState } from "react";

import {
  AlertCircleIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon
} from "@/components/icons";
import { maritalStatusOptions } from "@/lib/content";
import {
  type CircleApplication,
  getApplicationSubmission,
  getSession,
  setApplicationSubmission
} from "@/lib/storage";

type FieldName = keyof CircleApplication;

const initialForm: CircleApplication = {
  name: "",
  age: "",
  city: "",
  email: "",
  whatsapp: "",
  instagram: "",
  linkedin: "",
  occupation: "",
  whyChooseYou: "",
  maritalStatus: ""
};

const validators: Record<FieldName, (value: string) => string> = {
  name: (value) =>
    value.trim().length >= 2
      ? ""
      : "Please enter your full name (min 2 characters)",
  age: (value) =>
    /^\d+$/.test(value.trim()) && Number(value) >= 16 && Number(value) <= 80
      ? ""
      : "Enter a valid age between 16 and 80",
  city: (value) =>
    value.trim().length >= 2 ? "" : "Please enter your city",
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ""
      : "Enter a valid email address",
  whatsapp: (value) =>
    /^\+?[0-9\s-]{7,15}$/.test(value.trim())
      ? ""
      : "Enter a valid WhatsApp number",
  instagram: (value) =>
    value.trim().length >= 3
      ? ""
      : "Enter your Instagram profile link or @handle",
  linkedin: () => "",
  occupation: (value) =>
    value.trim().length >= 2 ? "" : "Please enter your occupation",
  whyChooseYou: (value) =>
    value.trim().length >= 20 ? "" : "Tell us a bit more (min 20 characters)",
  maritalStatus: (value) =>
    value !== "" ? "" : "Please select your marital status"
};

type FormFieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: string;
  touched: boolean;
  placeholder?: string;
  hint?: string;
  type?: "text" | "email" | "tel" | "number" | "url";
  rows?: number;
  textarea?: boolean;
  options?: Array<{ value: string; label: string }>;
  required?: boolean;
};

function FormField({
  id,
  label,
  value,
  onChange,
  onBlur,
  error,
  touched,
  placeholder,
  hint,
  type = "text",
  rows = 4,
  textarea = false,
  options,
  required = true
}: FormFieldProps) {
  const hasError = touched && error;
  const className = [
    "w-full rounded-xl border px-4 py-3 text-sm leading-relaxed text-white placeholder-white/30 outline-none transition-all duration-200 hover:border-white/25",
    hasError
      ? "border-red-400/70 bg-red-400/5 focus:border-red-400"
      : "border-white/10 bg-white/5 focus:border-brand-purple focus:bg-white/10"
  ].join(" ");

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium tracking-wide text-white/70">
        {label}
        {required ? <span className="ml-1 text-brand-purple">*</span> : null}
      </label>
      {hint && !hasError ? (
        <p id={`${id}-hint`} className="-mt-0.5 text-xs text-white/35">
          {hint}
        </p>
      ) : null}
      {options ? (
        <select
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className={`${className} appearance-none cursor-pointer pr-10`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236E3CC8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 14px center"
          }}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.value === ""}
              className="bg-[#1e0b4a] text-white"
            >
              {option.label}
            </option>
          ))}
        </select>
      ) : textarea ? (
        <textarea
          id={id}
          rows={rows}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`${className} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={className}
        />
      )}
      {hasError ? (
        <p
          id={`${id}-error`}
          className="mt-0.5 flex items-center gap-1.5 text-xs text-red-400"
          role="alert"
        >
          <AlertCircleIcon size={12} />
          {error}
        </p>
      ) : null}
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="my-1 flex items-center gap-3" aria-hidden="true">
      <div className="h-px flex-1 bg-white/8" />
      <span className="text-[10px] font-semibold uppercase tracking-widest text-white/25">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/8" />
    </div>
  );
}

export function EarlyAccessForm() {
  const [form, setForm] = useState<CircleApplication>(initialForm);
  const [isHydrated, setIsHydrated] = useState(false);
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    age: false,
    city: false,
    email: false,
    whatsapp: false,
    instagram: false,
    linkedin: false,
    occupation: false,
    whyChooseYou: false,
    maritalStatus: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);

    const storedApplication = getApplicationSubmission();
    const storedSession = getSession();

    if (storedApplication) {
      setForm(storedApplication);
      setIsSuccess(true);
      return;
    }

    if (storedSession) {
      setForm((current) => ({
        ...current,
        name: current.name || storedSession.name,
        email: current.email || storedSession.email,
        city: current.city || storedSession.city
      }));
    }
  }, []);

  const errors = Object.fromEntries(
    Object.entries(validators).map(([key, validator]) => [
      key,
      validator(form[key as FieldName])
    ])
  ) as Record<FieldName, string>;

  const isValid = Object.values(errors).every((value) => value === "");

  const setField = (field: FieldName, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value
    }));
  };

  const touchField = (field: FieldName) => {
    setTouched((current) => ({
      ...current,
      [field]: true
    }));
  };

  if (isSuccess) {
    return (
      <div
        className="flex flex-col items-center gap-5 py-6 text-center"
        role="status"
        aria-live="polite"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-purple/20 ring-2 ring-brand-purple/40">
          <CheckCircleIcon className="text-brand-purple" size={36} />
        </span>
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-extrabold text-white">
            You&apos;re in, {form.name || "friend"}!
          </h3>
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/50">
            We&apos;ve saved your Circle application locally. When you revisit
            this page, your latest submission will still be here.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="text-xs text-white/35 underline underline-offset-2 transition-colors hover:text-white/65"
        >
          Edit response
        </button>
      </div>
    );
  }

  return (
    <form
      noValidate
      className="flex flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setTouched({
          name: true,
          age: true,
          city: true,
          email: true,
          whatsapp: true,
          instagram: true,
          linkedin: true,
          occupation: true,
          whyChooseYou: true,
          maritalStatus: true
        });

        if (!isValid) {
          return;
        }

        setIsSubmitting(true);
        window.setTimeout(() => {
          setApplicationSubmission(form);
          setIsSubmitting(false);
          setIsSuccess(true);
        }, 800);
      }}
    >
      <Divider label="Personal" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          id="jf-name"
          label="Full Name"
          value={form.name}
          onChange={(value) => setField("name", value)}
          onBlur={() => touchField("name")}
          error={errors.name}
          touched={touched.name}
          placeholder="e.g. Aryan Mehta"
        />
        <FormField
          id="jf-age"
          label="Age"
          type="number"
          value={form.age}
          onChange={(value) => setField("age", value)}
          onBlur={() => touchField("age")}
          error={errors.age}
          touched={touched.age}
          placeholder="e.g. 24"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          id="jf-city"
          label="City"
          value={form.city}
          onChange={(value) => setField("city", value)}
          onBlur={() => touchField("city")}
          error={errors.city}
          touched={touched.city}
          placeholder="e.g. Mumbai"
        />
        <FormField
          id="jf-marital"
          label="Marital Status"
          value={form.maritalStatus}
          onChange={(value) => setField("maritalStatus", value)}
          onBlur={() => touchField("maritalStatus")}
          error={errors.maritalStatus}
          touched={touched.maritalStatus}
          options={maritalStatusOptions}
        />
      </div>

      <FormField
        id="jf-occupation"
        label="Occupation"
        value={form.occupation}
        onChange={(value) => setField("occupation", value)}
        onBlur={() => touchField("occupation")}
        error={errors.occupation}
        touched={touched.occupation}
        placeholder="e.g. Software Engineer, Designer, Student…"
      />

      <Divider label="Contact" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          id="jf-email"
          label="Email Address"
          type="email"
          value={form.email}
          onChange={(value) => setField("email", value)}
          onBlur={() => touchField("email")}
          error={errors.email}
          touched={touched.email}
          placeholder="you@example.com"
        />
        <FormField
          id="jf-whatsapp"
          label="WhatsApp Number"
          type="tel"
          value={form.whatsapp}
          onChange={(value) => setField("whatsapp", value)}
          onBlur={() => touchField("whatsapp")}
          error={errors.whatsapp}
          touched={touched.whatsapp}
          placeholder="+91 98765 43210"
        />
      </div>

      <Divider label="Social Profiles" />
      <FormField
        id="jf-instagram"
        label="Instagram Profile"
        type="url"
        value={form.instagram}
        onChange={(value) => setField("instagram", value)}
        onBlur={() => touchField("instagram")}
        error={errors.instagram}
        touched={touched.instagram}
        placeholder="https://instagram.com/yourhandle"
        hint="Make sure your profile is set to Public"
      />
      <FormField
        id="jf-linkedin"
        label="LinkedIn Profile (optional)"
        type="url"
        value={form.linkedin}
        onChange={(value) => setField("linkedin", value)}
        onBlur={() => touchField("linkedin")}
        error=""
        touched={false}
        placeholder="https://linkedin.com/in/yourname"
        required={false}
      />

      <Divider label="About You" />
      <FormField
        id="jf-why"
        label="Why should we choose you?"
        value={form.whyChooseYou}
        onChange={(value) => setField("whyChooseYou", value)}
        onBlur={() => touchField("whyChooseYou")}
        error={errors.whyChooseYou}
        touched={touched.whyChooseYou}
        placeholder="Tell us what makes you a great fit for Circle — your vibe, what you're looking for, what you bring to the table…"
        textarea
      />

      <p className="-mt-3 text-right text-xs text-white/25">
        {form.whyChooseYou.trim().length} / 20 min characters
      </p>

      {Object.values(touched).some(Boolean) && !isValid ? (
        <p className="-mb-1 text-center text-xs text-red-400" role="alert">
          Please fix the errors above before submitting.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting || !isHydrated}
        className={[
          "flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200",
          isSubmitting || !isHydrated
            ? "cursor-not-allowed opacity-60"
            : "bg-cta shadow-glow hover:scale-[1.02] hover:opacity-90 active:scale-[0.99]"
        ].join(" ")}
      >
        {isSubmitting ? (
          <>
            <span
              className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
              role="status"
              aria-label="Submitting…"
            />
            Submitting…
          </>
        ) : (
          <>
            <SparklesIcon size={16} />
            Join Circle Standouts
            <ArrowRightIcon className="ml-auto" size={16} />
          </>
        )}
      </button>

      <p className="-mt-1 text-center text-xs text-white/25">
        Free to join · Your data stays private · No spam
      </p>
    </form>
  );
}
