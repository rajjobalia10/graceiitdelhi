export const SESSION_KEY = "circle.session";
export const JOINED_GROUPS_KEY = "circle.joinedGroups";
export const APPLICATION_KEY = "circle.applicationSubmission";
export const SESSION_EVENT = "circle:session";
export const GROUPS_EVENT = "circle:groups";
export const APPLICATION_EVENT = "circle:application";

export type CircleSession = {
  name: string;
  email: string;
  city: string;
};

export type CircleApplication = {
  name: string;
  age: string;
  city: string;
  email: string;
  whatsapp: string;
  instagram: string;
  linkedin: string;
  occupation: string;
  whyChooseYou: string;
  maritalStatus: string;
};

function emit(eventName: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(eventName));
  }
}

function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(key);

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

function writeJson(key: string, value: unknown) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getSession() {
  return readJson<CircleSession>(SESSION_KEY);
}

export function setSession(session: CircleSession) {
  writeJson(SESSION_KEY, session);
  emit(SESSION_EVENT);
}

export function clearSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
  emit(SESSION_EVENT);
}

export function getJoinedGroups() {
  return readJson<string[]>(JOINED_GROUPS_KEY) ?? [];
}

export function hasJoinedGroup(slug: string) {
  return getJoinedGroups().includes(slug);
}

export function joinGroup(slug: string) {
  const joined = new Set(getJoinedGroups());
  joined.add(slug);
  writeJson(JOINED_GROUPS_KEY, [...joined]);
  emit(GROUPS_EVENT);
}

export function leaveGroup(slug: string) {
  const joined = new Set(getJoinedGroups());
  joined.delete(slug);
  writeJson(JOINED_GROUPS_KEY, [...joined]);
  emit(GROUPS_EVENT);
}

export function getApplicationSubmission() {
  return readJson<CircleApplication>(APPLICATION_KEY);
}

export function setApplicationSubmission(application: CircleApplication) {
  writeJson(APPLICATION_KEY, application);
  emit(APPLICATION_EVENT);
}
