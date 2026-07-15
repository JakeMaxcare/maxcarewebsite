# Maxcare, Inc. Website

Marketing website for Maxcare, Inc. — residential group homes and Customized
Community Supports for New Mexicans with intellectual and developmental
disabilities, based in Albuquerque, NM.

## Structure

Static multi-page site, no build step:

- `index.html` — Home
- `services.html` — Services overview, with detail views at `#supported-living` and `#ccs`
- `houses.html` — Houses overview, with a gallery view per home (`#fourhills`, `#st16`, `#arco8`, `#arco9`, `#manzano`, `#park`, `#sandia`, `#sunglow`)
- `about.html` — About Us
- `careers.html` — DSP role overview; applications go through the
  Maxcare company page on Indeed (no ATS)
- `contact.html` — contact form (submissions go through Formspree to
  jake@maxcarenm.com; form id `mvzezzzk`), plus phone/address details
- `css/styles.css` — shared styles
- `js/site.js` — mobile nav, dropdown menus, and hash-based view switching
- `assets/` — images referenced by the site

Photo spots that don't have an image yet (house galleries, founding photo)
render as styled "coming soon" placeholders — drop the real photos into
`assets/` and swap them in as they become available.

## Images

`index.html` references the following files in `assets/`:

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
