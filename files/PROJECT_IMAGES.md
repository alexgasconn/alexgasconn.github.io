# Project images

Each project has its own folder under `files/`. Current files include:

```text
files/
  TrailNav/TrailNav1.png
  TrailNav/TrailNav2.jpeg
  TrailNav/TrailNav3.jpeg
  TrailNav/TrailNav4.jpeg
  TrailNav/TrailNav5.jpeg
  TrekkingTime/TrekkingTime.webp
  RacePlanner/RacePlanner1.webp
  100Cims/100cims1.png
  Oasis/Oasis1.png
  Oasis/Oasis2.jpeg
  Oasis/Oasis3.jpeg
  Oasis/Oasis4.jpeg
  GPXMaster/GPXMaster1.png
  GPXMaster/GPXMaster2.png
  GPXAnalyzer/GPX.webp
  Strav/Strava.png
  PlayerRecommender/Players.png
  Transfermarkt/Transfermarkt.webp
  SpotifyStats/Spotify.webp
  WhatsAppAnalyzer/Whatsapp.png
  BicingStats/Bicing1.png
  TimelineHeatmap/Heatmap.png
```

## Adding images

On the published GitHub Pages site, each gallery discovers images from its project folder through the public jsDelivr file index. Add images to the folder and push them; no `images` array edit is needed. Newly pushed images appear after the CDN index refreshes.

Supported extensions are APNG, AVIF, BMP, GIF, JPG/JPEG, PNG, SVG and WebP. Filenames may contain spaces, mixed capitalization or any naming pattern; the carousel sorts them naturally. Captions default to the filename, while known screenshots keep their translated captions.

When opening the site directly with `file://`, browsers cannot enumerate local directories. The preview combines the published file index with the known local fallback images in `project-details.js`. An unpushed local-only image appears automatically on the published site after it is pushed; add a fallback entry only if you need to preview it before publishing.

The carousel shows arrows, a counter and slideshow controls when a project has at least two images. It pauses while hovered or focused, supports keyboard and touch, respects reduced-motion preferences, and uses the registered local images if the remote index is unavailable.
