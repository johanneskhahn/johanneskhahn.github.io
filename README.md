# Johannes Hahn — personal academic website

An English, responsive one-page website built with HTML, CSS and a small amount of JavaScript. No dependencies, build step, external fonts, cookies, or analytics.

## Preview

From this directory, run `python3 -m http.server 8000` and open http://localhost:8000.

## Edit content

- `index.html`: biography, news, publications, league, teaching, and contact. Keep only the three latest news items, newest first.
- `styles.css`: colours, typography, and responsive layouts.
- `assets/johannes-hahn.jpeg`: portrait.
- `assets/*.bib`: downloadable publication citations. The journal entry uses `gh2026_teac.bib`; the original conference citation remains available as `gh2024_sagt.bib`.
- `CNAME`: custom domain, currently `johanneshahn.com`.

Content has been updated with the owner’s supplied biography, news, music activities, and Nordostpark address. Publication metadata was checked against arXiv, ACM, and Springer; the Springer chapter BibTeX files are the publisher’s exports. The chapters appeared online on 7 November 2026 and carry the bibliographic year 2027. Course titles are translated into English.

## Publish on GitHub Pages

1. Copy these files and `assets/` into the root of the `johanneskhahn.github.io` repository. Include the hidden `.nojekyll` file. The existing Jekyll build is no longer needed; retain a backup before replacing old source files.
2. In the repository's **Settings → Pages**, select **Deploy from a branch**, then the publishing branch (usually `main`) and **/ (root)**. If an old custom Jekyll Actions workflow is present, disable it so it does not overwrite this deployment.
3. Set the custom domain to `johanneshahn.com` and enable **Enforce HTTPS** once GitHub has issued the certificate. `CNAME` preserves the custom domain across deployments.
4. Your domain can stay registered at Strato. Keep or configure its DNS records to point at GitHub Pages. Use GitHub's current documentation for the exact records; an additional Strato webhosting package is not required for this arrangement. Do not use framed forwarding.

Official configuration guides:
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

All asset and anchor links are relative. The site can also be uploaded to ordinary static webspace. When publishing under another domain, update `CNAME` and the canonical URL in `index.html`.

No deployment or DNS changes have been performed by creating these files.

## Image and media files

Replace these files in `source/` with your own media, keeping their names:

- `source/fdsl.jpg`: matchday photo (JPEG). Update its `alt` text in `index.html` to describe the actual photograph.
- `source/conducting.mp4`: conducting video (MP4, H.264 recommended).
- `source/composition.mp3`: composition recording (MP3).

All three files are already linked in the website. No HTML edits are needed to activate replacement files. The owner has supplied the actual matchday photograph, conducting video (approximately 25 seconds), and “Rainfall” recording (approximately 4 minutes 49 seconds). The video uses its native 4:3 aspect ratio and supports inline playback on mobile. There are no visible captions beneath either player. The music credits are in the paragraph above the audio player.

## Content sources

- Journal: https://doi.org/10.1145/3789259
- Preprint: https://arxiv.org/abs/2609.35711 (first submitted 28 September 2026). STOC 2027 review status supplied by the owner.
- Book chapters: https://doi.org/10.1007/978-3-032-34969-9_8 and https://doi.org/10.1007/978-3-032-34969-9_21
- League description: https://franconiandsl.github.io
- The supplied LinkedIn feed URLs could not be retrieved directly. Publicly indexed league posts visible at https://de.linkedin.com/in/kristina-rolsing-68a8641bb and https://de.linkedin.com/in/johannes-koller-39b015217 corroborate Cube One, the String Fingerprints challenge, live submissions/leaderboards and DATEV’s win. Lead organiser role supplied by the owner.

## Latest media verification

Photo verified as JPEG (2048 × 1365); video H.264/yuv420p with AAC stereo audio (1440 × 1080); recording stereo MP3. Full video and audio decode checks passed. Local HTTP responses returned 200 with correct MIME types for all media. On 9 November 2026, Safari desktop playback was verified (video time progressed; Rainfall played and showed a 4:49 duration). Safari Responsive Design checks at 390 × 844 and 320 × 844 confirmed the mobile layout. The menu opened, navigated and collapsed. Both media players were tested in the 390-pixel view; the video reached its end and Rainfall advanced beyond 30 seconds. This is a responsive browser check, not a physical-device test.
