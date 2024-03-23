import { getAge, getContacts, getProjects } from "../lib/utils";
import type { ContentFunctions } from "../types";
import { COMMANDS } from "./command";

export const CONTENTS: ContentFunctions = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p>${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div>Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Yogi. I am ${getAge(
    "February 02, 2003"
  )} and I\'m a fullstack web developer.
    <br/><br/>
    I enjoy coding in JavaScript and TypeScript and working within their ecosystems. I have experience with frameworks such as ReactJS, VueJS, and Express, among others. Currently, I primarily use Next.js and Node.js in many of my projects.
    <br />`,
  skills: () => `
  I have experience in web development with React and Next.js, and I am proficient in HTML, CSS, JavaScript, and TypeScript.<br />
  <div class="skill"><b>core</b>: HTML, CSS, JS, TS and Node.js<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Vue, Svelte, Express and Fastify<br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, and MySQL<br /></div>
  I also Know how to utilise assistive <p style='color: hsl(var(--secondary)); display: inline; text-decoration-line: underline;' title='Yes, they are Google, StackOverflow and ChatGPT!'>technologies</p> to enhance productivity.<br />`,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open(
      "https://drive.google.com/file/d/1C6mBfmmCvS-jE6iPbdHZqbuFp89nz-Ts/view",
      "_blank"
    );
    return "";
  },
  error: (input: string) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  " ": () => ``,
};
