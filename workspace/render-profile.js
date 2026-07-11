import {
  academicResearch,
  education,
  footer,
  hero,
  links,
  profileItems,
  siteMeta,
  workExperience,
} from "./profile.js?v=remove-top-tagline";
import { projects } from "./projects.js?v=remove-video-blog-site";

const text = (value) => document.createTextNode(value);

function setMeta() {
  document.title = siteMeta.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", siteMeta.description);
}

function renderHero() {
  const portrait = document.querySelector("[data-profile-portrait]");
  const heading = document.querySelector("[data-profile-heading]");
  const tagline = document.querySelector("[data-profile-tagline]");
  const intro = document.querySelector("[data-profile-intro]");
  const nav = document.querySelector("[data-profile-links]");

  if (portrait instanceof HTMLImageElement) {
    portrait.src = hero.photo;
    portrait.alt = hero.photoAlt;
  }

  if (heading) {
    heading.textContent = "";
    heading.append(text(`${hero.name} `));

    const chineseName = document.createElement("span");
    chineseName.lang = "zh-Hans";
    chineseName.textContent = hero.chineseName;
    heading.append(chineseName);
  }

  if (tagline) {
    if (hero.tagline) {
      tagline.hidden = false;
      tagline.textContent = hero.tagline;
    } else {
      tagline.hidden = true;
      tagline.textContent = "";
    }
  }
  if (intro) intro.textContent = hero.intro;

  if (nav) {
    nav.textContent = "";
    links.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.textContent = link.label;
      nav.append(anchor);
    });
  }
}

function renderProfileList() {
  const list = document.querySelector("[data-profile-list]");
  if (!list) return;

  list.textContent = "";
  profileItems.forEach((item) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    term.textContent = item.label;
    description.textContent = item.value;

    row.append(term, description);
    list.append(row);
  });
}

function renderDatedList(selector, items) {
  const list = document.querySelector(selector);
  if (!list) return;

  list.textContent = "";
  items.forEach((item) => {
    const entry = document.createElement("li");
    const date = document.createElement("span");
    const organization = document.createElement("strong");

    date.className = "date";
    date.textContent = item.date;
    organization.textContent = item.organization;

    entry.append(date, organization, text(`, ${item.details}`));
    list.append(entry);
  });
}

function renderProjects() {
  const list = document.querySelector("[data-work-projects]");
  if (!list) return;

  list.textContent = "";
  projects.forEach((project) => {
    const entry = document.createElement("li");
    const name = document.createElement("strong");

    name.textContent = project.name;

    entry.append(name, text(`: ${project.summary}`));
    list.append(entry);
  });
}

function renderAcademicResearch() {
  const section = document.querySelector("[data-academic-research]");
  if (!section) return;

  const title = section.querySelector("h2");
  const body = section.querySelector("p");

  if (title) title.textContent = academicResearch.title;
  if (body) body.textContent = academicResearch.body;
}

function renderFooter() {
  const updated = document.querySelector("[data-footer-updated]");
  if (updated) updated.textContent = footer.updated;
}

setMeta();
renderHero();
renderProfileList();
renderDatedList("[data-work-experience]", workExperience);
renderProjects();
renderDatedList("[data-education]", education);
renderAcademicResearch();
renderFooter();
