# Justiniha1.github.io

Personal site for Justin Haime. Plain HTML, CSS, and JavaScript with no build
step, no dependencies, and no backend.

## Editing

| To change | Edit |
|---|---|
| Colors, fonts, type sizes | `css/base.css` (the `:root` block at the top) |
| Layout and components | `css/site.css` |
| The opening line on the home page | `index.html`, the paragraph marked `POSITIONING STATEMENT` |
| A job or research role | `experience.html`, copy an existing `<article class="entry">` block |
| A project | `projects.html`, copy an existing `<article class="project">` block |
| Bio, education, skills | `about.html` |

The header and footer are duplicated across all four HTML files. If you change
one, change all four. The only difference between them is which nav link carries
`aria-current="page"`.

To preview locally, open any `.html` file directly in a browser. No server is
needed.

## Writing rules

No em dashes anywhere in the site copy. Use a comma, colon, or period instead.

## Publishing to GitHub Pages

This repository already exists on GitHub as `Personal-Site` with a remote
configured. To publish at the clean root URL, it must be renamed to match your
username. GitHub only serves a repository at the root URL when its name is
exactly `<username>.github.io`.

One-time setup:

The repository must be public. On a free GitHub plan, GitHub Pages will not
publish from a private repository, so confirm this before following the steps
below.

1. On GitHub, open this repository and go to **Settings**. Under **General**, find
   **Repository name**, change it to `Justiniha1.github.io`, and click **Rename**.

2. Point your local clone at the renamed repository and push:

   ```bash
   git remote set-url origin https://github.com/Justiniha1/Justiniha1.github.io.git
   git push -u origin main
   ```

   Use `set-url`, not `add`. This repository already has a remote named `origin`,
   so `git remote add origin` would fail with "remote origin already exists".

3. Still in **Settings**, go to **Pages** in the left sidebar.

4. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   **Branch** to `main`, and folder to `/ (root)`. Click **Save**.

5. Wait one to two minutes, then visit <https://justiniha1.github.io>.

After that, every `git push` to `main` republishes the site automatically within
about a minute.

If you would rather not rename the repository, you can skip step 1 and leave it as
`Personal-Site`. The site then publishes at <https://justiniha1.github.io/Personal-Site/>
instead. Every link in the site is relative, so both work with no code changes.

## Adding a custom domain later

Buy a domain, add a file named `CNAME` at the repository root containing only the
domain name, then set the domain in Settings, Pages. No code changes are needed.
