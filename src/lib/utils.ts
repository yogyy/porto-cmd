import { contacts } from "../constants/contact";
import { smallProjects } from "../constants/project";

export const escapeHTML = (str: string) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const getProjects = async () => {
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    smallProjects
      .map(
        (project) => `<div>
        <a href="${project.github || project.url}" target="_blank"><b>${
          project.title
        }</b></a> - <b>${project.type.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

export const getContacts = async () => {
  return contacts
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.alt.toLowerCase()}</p>
      <a href="${contact.href}" target="_blank">${
        contact.href.startsWith("mailto")
          ? contact.href.split(":")[1]
          : contact.href.substring(contact.href.lastIndexOf("/") + 1)
      }</a>
    </div>`
    )
    .join("");
};

export const getAge = (dateString: string | number | Date) => {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
};
