# Maxcare, Inc. Website

Marketing website for Maxcare, Inc. — residential group homes and Customized
Community Supports for New Mexicans with intellectual and developmental
disabilities, based in Albuquerque, NM.

## Structure

- `index.html` — the full site (single page, self-contained CSS, no build step)
- `assets/` — images referenced by the site

## Required images

`index.html` references the following files in `assets/`, which need to be
added from the original desktop project:

| File | Used for |
| --- | --- |
| `assets/maxcare-logo.png` | Header logo |
| `assets/p-3244.jpg` | Hero image |
| `assets/p-3548.jpg` | Houses gallery (wide) |
| `assets/p-3517.jpg` | Houses gallery |
| `assets/p-3535.jpg` | Houses gallery |
| `assets/p-3527.jpg` | Careers section |

## Local preview

No build step is needed — open `index.html` directly in a browser, or serve
the folder with any static server, e.g.:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.
