# Project images

Add screenshots to the folder for their project. Use numbered filenames in display order:

```text
files/
  TrailNav/TrailNav1.png
  TrailNav/TrailNav2.png
  TrekkingPro/TrekkingPro1.png
  RacePlanner/RacePlanner1.png
  100Cims/100Cims1.png
  Oasis/Oasis1.png
  GPXMaster/GPXMaster1.png
  GPXAnalyzer/GPXAnalyzer1.png
  Strav/Strava1.png
  Strav/Strava2.png
  PlayerRecommender/Player1.png
  Transfermarkt/Transfermarkt1.png
  SpotifyStats/Spotify1.png
  WhatsAppAnalyzer/WhatsApp1.png
  TimelineHeatmap/Timeline1.png
```

GitHub Pages is static and cannot discover files in a folder automatically. After adding a screenshot, register its path in that project's `images` array in `project-details.js`. Keep entries in the order they should appear and provide a caption in English, Spanish and Catalan:

```js
images: [
  {
    src: 'files/Strav/Strava1.png',
    caption: {
      en: 'Training dashboard',
      es: 'Panel de entrenamiento',
      ca: 'Panell d’entrenament'
    }
  },
  {
    src: 'files/Strav/Strava2.png',
    caption: {
      en: 'Activity analysis',
      es: 'Análisis de actividad',
      ca: 'Anàlisi d’activitat'
    }
  }
]
```

Use PNG, JPG or WebP. The carousel shows arrows and starts its slideshow when a project has at least two registered images. Existing screenshots in `files/` and the repository root remain in use until replaced in the image arrays.
