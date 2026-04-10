import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.864 18.16q.486.067.982.07h.019a7.34 7.34 0 0 0 4.788-1.77l3.875 3.874a.567.567 0 0 0 .801-.801l-3.874-3.874a7.37 7.37 0 0 0 .535-8.884 7.364 7.364 0 1 0-7.126 11.386m6.076-3.68a6.233 6.233 0 1 0-5.076 2.616h.001a6.21 6.21 0 0 0 5.075-2.616"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ChevronIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="square" d="M17.5 9.5 12 15 6.5 9.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="square" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="square" d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="square" d="M15.5 5.5 9 12l6.5 6.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path stroke="currentColor" strokeLinecap="square" d="M8.5 5.5 15 12l-6.5 6.5" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.998 4c-2.173 0-2.445.01-3.298.048-.851.039-1.432.174-1.941.372a3.9 3.9 0 0 0-1.417.922A3.9 3.9 0 0 0 4.42 6.76c-.198.509-.333 1.09-.372 1.941C4.01 9.553 4 9.825 4 11.998s.01 2.444.048 3.297c.039.851.174 1.432.372 1.941.204.526.478.972.922 1.417.445.444.89.718 1.417.922.509.198 1.09.333 1.941.372.853.039 1.125.048 3.298.048s2.444-.01 3.297-.048c.851-.039 1.432-.174 1.941-.372a3.9 3.9 0 0 0 1.417-.922c.444-.445.718-.891.922-1.417.198-.509.333-1.09.372-1.941.039-.853.048-1.126.048-3.298s-.01-2.444-.048-3.297c-.039-.851-.174-1.432-.372-1.941a3.9 3.9 0 0 0-.922-1.417 3.9 3.9 0 0 0-1.417-.922c-.509-.198-1.09-.333-1.941-.372C14.442 4.01 14.17 4 11.998 4m0 1.44c2.136 0 2.389.008 3.232.047.78.035 1.203.166 1.485.275.373.145.64.318.92.598s.453.547.598.92c.109.282.24.705.275 1.485.039.843.047 1.096.047 3.232 0 2.135-.008 2.388-.047 3.231-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.598.92 2.5 2.5 0 0 1-.92.598c-.282.11-.705.24-1.485.275-.843.039-1.096.047-3.232.047-2.135 0-2.388-.008-3.231-.047-.78-.035-1.203-.166-1.485-.275a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.92c-.11-.282-.24-.705-.275-1.485-.039-.843-.047-1.096-.047-3.231 0-2.136.008-2.389.047-3.232.035-.78.166-1.203.275-1.485.145-.373.318-.64.598-.92s.547-.453.92-.598c.282-.109.705-.24 1.485-.275.843-.039 1.096-.047 3.231-.047"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.998 14.663a2.666 2.666 0 1 1 0-5.331 2.666 2.666 0 0 1 0 5.331m0-6.772a4.107 4.107 0 1 0 0 8.213 4.107 4.107 0 0 0 0-8.213M17.226 7.728a.96.96 0 1 1-1.92 0 .96.96 0 0 1 1.92 0"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M15.293 4h-2.762v10.899a2.377 2.377 0 0 1-2.384 2.365 2.377 2.377 0 0 1-2.385-2.365c0-1.276 1.039-2.32 2.314-2.366V9.797C7.266 9.843 5 12.093 5 14.9 5 17.728 7.314 20 10.17 20c2.857 0 5.17-2.296 5.17-5.101V9.31A6.5 6.5 0 0 0 19 10.516V7.78c-2.078-.07-3.707-1.74-3.707-3.78"
      />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 19V9H4v10zM5.49 7C6.421 7 7 6.333 7 5.5 6.983 4.648 6.421 4 5.509 4S4 4.648 4 5.5C4 6.333 4.579 7 5.474 7h.017zM10 19h3.276v-5.456c0-.292.021-.584.108-.792.236-.584.776-1.188 1.68-1.188 1.186 0 1.66.896 1.66 2.21V19H20v-5.603c0-3-1.616-4.397-3.771-4.397-1.767 0-2.544.98-2.975 1.646h.022V9.229H10c.043.917 0 9.771 0 9.771"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function YouTubeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.246 6.358c.69.203 1.236.784 1.418 1.52C20 9.212 20 12 20 12s0 2.787-.327 4.123c-.191.745-.728 1.325-1.418 1.519C17 18 12 18 12 18s-5 0-6.245-.358c-.691-.203-1.237-.784-1.419-1.52C4 14.788 4 12 4 12s0-2.787.327-4.123c.191-.745.728-1.325 1.418-1.519C7 6 12 6 12 6s5 0 6.246.358M14.5 12l-4 2.5v-5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
