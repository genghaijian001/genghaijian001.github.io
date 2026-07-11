export function renderArchive(archive) {
  renderHeader(archive);
  renderPosts(archive.posts);
  renderSidebar(archive);
  renderFooter(archive.footer);
}

function renderHeader(archive) {
  const title = document.querySelector("[data-archive-title]");
  const description = document.querySelector("[data-archive-description]");
  const nav = document.querySelector("[data-archive-nav]");

  if (title) title.textContent = archive.title;
  if (description && archive.description) {
    description.textContent = archive.description;
  }

  if (nav) {
    nav.textContent = "";
    archive.nav.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      nav.append(link);
    });
  }
}

function renderPosts(posts) {
  const feed = document.querySelector("[data-archive-feed]");
  if (!feed) return;

  feed.textContent = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "archive-post";

    const meta = document.createElement("p");
    meta.className = "archive-post-meta";
    meta.textContent = `${post.category}  ${post.date}`;

    const heading = document.createElement("h2");
    const headingLink = document.createElement("a");
    headingLink.href = post.href;
    headingLink.textContent = post.title;
    heading.append(headingLink);

    const excerpt = document.createElement("p");
    excerpt.className = "archive-excerpt";
    excerpt.textContent = post.excerpt;

    const readMore = document.createElement("a");
    readMore.className = "read-more";
    readMore.href = post.href;
    readMore.textContent = document.documentElement.lang.startsWith("zh")
      ? "阅读更多"
      : "Read More";

    article.append(meta, heading, excerpt, readMore);
    feed.append(article);
  });
}

function renderSidebar(archive) {
  const sidebar = document.querySelector("[data-archive-sidebar]");
  if (!sidebar) return;

  sidebar.textContent = "";
  renderSidebarList(sidebar, "Archives", archive.archives);
  renderSidebarList(sidebar, "Categories", archive.categories);
}

function renderSidebarList(sidebar, title, items = []) {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  const list = document.createElement("ul");

  heading.textContent = title;
  items.forEach((item) => {
    const entry = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = item;
    entry.append(link);
    list.append(entry);
  });

  section.append(heading, list);
  sidebar.append(section);
}

function renderFooter(copy) {
  const footer = document.querySelector("[data-archive-footer]");
  if (footer) footer.textContent = copy;
}
