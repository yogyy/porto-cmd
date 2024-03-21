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
  )} and I\'m a fullstack web developer
    <br/><br/>
    I enjoy coding in JavaScript and TypeScript and working within their ecosystems. I have experience with frameworks such as ReactJS, VueJS, and Express, among others. Currently, I primarily use Next.js and Node.js in many of my projects.
    <br /><br />
    I am a former President of <a href="https://exunclan.com" target="_blank">Exun Clan</a> ('22-23). I am a freshman at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.
    <br />
    I am also the Chapter Officer at the <a href="https://new-delhi-space-society.github.io" target="_blank">New Delhi Space Society</a>, a chapter of the <a href="https://space.nss.org" target="_blank">National Space Society</a>. I am a core maintainer of <a href="https://typewind.vercel.app" target="_new">Typewind</a>
  `,
  education: () =>
    `I am a high school graduate from <a href="https://dpsrkp.net" target="_blank">Delhi Public School, R.K. Puram</a> and a freshman at <a href="https://uwaterloo.ca/content/home" target="_blank">University of Waterloo</a>.`,
  skills: () => `
  I am experienced with Javascript, Typescript and Python and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS, JS, TS and Node.js<br /></div>
  <div class="skill"><b>frameworks</b>: React, NextJS, Vue, Svelte, Express and Fastify<br /></div>
  <div class="skill"><b>database</b>: MongoDB, PostgreSQL, and MySQL<br /></div>
  I also have knowledge of basic shell scripting and my dotfiles can be found <a href="https://github.com/kavinvalli/.dotfiles" target="_blank">here</a>.
<br /><br />
  I also have experience with Mobile Development with Flutter.
  `,
  projects: getProjects,
  contact: getContacts,
  resume: () => {
    window.open("https://kavin.me/resume.pdf", "_blank");
    return "";
  },
  error: (input: any) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://livecode247.com", "_blank");
    return "";
  },
  youtube: () => {
    window.open("https://youtube.com/@livecode247", "_blank");
    return "";
  },
};
