# Site1 Workspace

This workspace owns the page-specific content and rendering for the standalone personal homepage.

- `profile.js` is the content source for hero, links, profile facts, work experience, education, academic research, and footer text.
- `render-profile.js` renders that content into `index.html`.
- `essays.js` and `render-essays.js` own the English essay archive page.
- `blog.js` and `render-blog.js` own the Chinese blog archive page.
- `render-archive.js` is the shared archive renderer used only by `site1` article-list pages.
- `index.html` stays as the static page shell for GitHub Pages.

Do not import files from the parent project. `site1` must remain deployable as a standalone static site.
