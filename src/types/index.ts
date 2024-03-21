interface ContentFunctions {
  help: () => string;
  about: () => string;
  education: () => string;
  skills: () => string;
  projects: () => Promise<string>;
  contact: () => Promise<any>;
  resume: () => string;
  error: (input: string | any) => string;
  blog: () => string;
  youtube: () => string;
  [key: string]:
    | (() => string)
    | (() => Promise<string>)
    | ((input: any) => string);
}

type COMMAND =
  | "help"
  | "about"
  | "education"
  | "skills"
  | "projects"
  | "contact"
  | "resume"
  | "error"
  | "blog"
  | "youtube"
  | string;

export type { COMMAND, ContentFunctions };
