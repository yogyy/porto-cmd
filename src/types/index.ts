interface ContentFunctions {
  help: () => string;
  about: () => string;
  skills: () => string;
  projects: () => Promise<string>;
  contact: () => Promise<any>;
  resume: () => string;
  error: (input: string | any) => string;
  [key: string]:
    | (() => string)
    | (() => Promise<string>)
    | ((input: any) => string);
}

type COMMAND =
  | "help"
  | "about"
  | "skills"
  | "projects"
  | "contact"
  | "resume"
  | "error"
  | string;

interface ProjectTypes {
  title: string;
  description: string;
  github?: string;
  url?: string;
  type: string[];
}

export type { COMMAND, ContentFunctions, ProjectTypes };
