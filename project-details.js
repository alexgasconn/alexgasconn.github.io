// Add more captures to each images array; nested paths such as files/Strav/Strava1.png work on static hosting.
window.projectDetails = {
  trailnav: {
    title: 'TrailNav', images: [{ src: 'TrailNav.png', caption: { en: 'Trail map and elevation profile', es: 'Mapa de ruta y perfil de elevación', ca: 'Mapa de ruta i perfil d’elevació' } }], live: 'https://trail-nav.vercel.app/', repo: 'https://github.com/alexgasconn/TrailNav', stack: ['TypeScript', 'React', 'MapLibre', 'IndexedDB', 'PWA'],
    en: {
      category: 'Outdoor navigation · Offline-first PWA',
      summary: 'A route companion for hiking, trail running and mountain biking, designed to keep core route planning and navigation available when coverage disappears.',
      challenge: 'Outdoor routes often lead beyond reliable mobile coverage. TrailNav brings route files, map preparation, route analysis and an active GPS session together without requiring an account or a custom application server.',
      features: ['Import GPX, KML and GeoJSON routes, inspect route statistics and elevation profiles, and make non-destructive edits such as trimming or simplifying a track.', 'Download a map area and selected styles to local browser storage before setting out; follow a loaded route with live GPS position, heading and compass cues.', 'Record an activity and export its actual GPS track as GPX. Route estimates and map coverage remain distinct from a guarantee of trail-level detail or turn-by-turn routing.'],
      engineering: 'Route geometry and analysis are handled in local TypeScript modules. Map matching projects GPS fixes onto the route to estimate progress; route tools preserve the original by saving edited copies. ETA calculations use transparent hiking models rather than a trained prediction service.',
      architecture: 'A React single-page PWA uses MapLibre for map interaction and IndexedDB for routes, settings and downloaded tiles. Navigation session state is separated from individual screens so changing views does not discard an active session.',
      data: 'Route files, session state and downloaded tiles are stored in the browser; there is no account or remote route sync. Detailed offline coverage depends on downloading the relevant region in advance, and browser storage can be cleared by the device. GPS and compass availability depend on permissions and hardware.'
    },
    es: {
      category: 'Navegación outdoor · PWA offline-first',
      summary: 'Un acompañante de ruta para senderismo, trail running y MTB, pensado para mantener disponibles la planificación y navegación esenciales cuando desaparece la cobertura.',
      challenge: 'Muchas rutas salen de las zonas con cobertura móvil fiable. TrailNav reúne archivos de ruta, preparación de mapas, análisis y seguimiento GPS sin exigir una cuenta ni un servidor propio.',
      features: ['Importa rutas GPX, KML y GeoJSON; consulta estadísticas y perfiles de elevación, y edita el recorrido de forma no destructiva, por ejemplo recortándolo o simplificándolo.', 'Descarga previamente zonas de mapa y estilos al almacenamiento local; sigue una ruta cargada con posición GPS, rumbo y referencias de brújula.', 'Graba una actividad y exporta su recorrido GPS real en GPX. Las estimaciones y la cobertura cartográfica no equivalen a detalle garantizado de senderos ni a navegación giro a giro.'],
      engineering: 'La geometría y el análisis de rutas se procesan en módulos locales de TypeScript. El ajuste GPS proyecta la posición sobre el track para estimar el progreso; las herramientas de edición guardan copias en lugar de sobrescribir el original. La ETA utiliza modelos transparentes de senderismo, no un servicio de predicción entrenado.',
      architecture: 'PWA de una sola página en React, con MapLibre para la interacción cartográfica e IndexedDB para rutas, ajustes y teselas descargadas. El estado de la sesión de navegación está separado de las pantallas para conservar una sesión activa al cambiar de vista.',
      data: 'Los archivos de ruta, la sesión y los mapas descargados permanecen en el navegador; no hay cuentas ni sincronización remota de rutas. La cobertura offline detallada requiere descargar la zona correspondiente y el navegador puede borrar el almacenamiento. GPS y brújula dependen de permisos y dispositivos compatibles.'
    },
    ca: {
      category: 'Navegació outdoor · PWA offline-first',
      summary: 'Un company de ruta per a senderisme, trail running i MTB, pensat per mantenir disponibles la planificació i la navegació essencials quan desapareix la cobertura.',
      challenge: 'Moltes rutes surten de les zones amb cobertura mòbil fiable. TrailNav reuneix fitxers de ruta, preparació de mapes, anàlisi i seguiment GPS sense exigir un compte ni un servidor propi.',
      features: ['Importa rutes GPX, KML i GeoJSON; consulta estadístiques i perfils d’elevació, i edita el recorregut de manera no destructiva, per exemple retallant-lo o simplificant-lo.', 'Descarrega prèviament zones de mapa i estils a l’emmagatzematge local; segueix una ruta carregada amb posició GPS, rumb i referències de brúixola.', 'Enregistra una activitat i exporta’n el recorregut GPS real en GPX. Les estimacions i la cobertura cartogràfica no equivalen a detall garantit de senders ni a navegació gir a gir.'],
      engineering: 'La geometria i l’anàlisi de rutes es processen en mòduls locals de TypeScript. L’ajust GPS projecta la posició sobre el track per estimar el progrés; les eines d’edició desen còpies en lloc de sobreescriure l’original. L’ETA utilitza models transparents de senderisme, no un servei de predicció entrenat.',
      architecture: 'PWA d’una sola pàgina amb React, MapLibre per a la interacció cartogràfica i IndexedDB per a rutes, ajustos i tessel·les descarregades. L’estat de la sessió de navegació està separat de les pantalles per conservar una sessió activa en canviar de vista.',
      data: 'Els fitxers de ruta, la sessió i els mapes descarregats es queden al navegador; no hi ha comptes ni sincronització remota de rutes. La cobertura offline detallada requereix descarregar la zona corresponent i el navegador pot esborrar l’emmagatzematge. El GPS i la brúixola depenen dels permisos i dels dispositius compatibles.'
    }
  },
  'trekkingtime-pro': {
    title: 'TrekkingTime Pro', images: [{ src: 'files/TrekkingPro.webp', caption: { en: 'Route analysis and planning dashboard', es: 'Panel de análisis y planificación de rutas', ca: 'Panell d’anàlisi i planificació de rutes' } }], live: 'https://trekking-pro.vercel.app/', repo: 'https://github.com/alexgasconn/TrekkingPro', stack: ['TypeScript', 'React', 'Leaflet', 'Recharts', 'Open-Meteo'],
    en: {
      category: 'Route analytics · Hiking and trekking',
      summary: 'Turns a GPX file into a route-planning workspace with terrain analysis, elevation visuals and a range of explainable hiking-time estimates.',
      challenge: 'Distance alone is a poor predictor of time in the mountains. Elevation gain, slope distribution, fitness and pace assumptions can shift an ETA substantially, so the app makes those assumptions visible and compares independent models.',
      features: ['Summarize distance, ascent, descent and altitude extremes, then inspect an elevation profile and distance distribution across slope classes.', 'Compare Naismith, Tobler, Munter, Swiss-style and Petzoldt estimates; a disagreement-aware aggregate chooses a mean or median, while fitness, pace, pack and breaks shape the scenario.', 'Add route difficulty, calorie and hydration estimates, forecast conditions and a sunset warning; synchronize map and profile exploration.'],
      engineering: 'GPX points are parsed in the browser. Haversine segment distances and elevation changes produce cumulative distance and slope; small elevation fluctuations are ignored when accumulating ascent and descent. Chart data is downsampled and smoothed for responsive rendering.',
      architecture: 'A browser-only React and TypeScript application separates GPX/geospatial utilities, deterministic calculation services, weather retrieval and visualization components. Leaflet renders selectable map layers; Recharts renders the elevation profile with synchronized hover state.',
      data: 'The uploaded GPX and route calculations stay local. Optional Open-Meteo enrichment requests a forecast for the route start coordinate and selected date; it is not a route-wide weather model. Estimates are planning aids, not safety guarantees.'
    },
    es: {
      category: 'Análisis de rutas · Senderismo y trekking',
      summary: 'Convierte un archivo GPX en un espacio de planificación con análisis del terreno, visualización del desnivel y varias estimaciones explicables de duración.',
      challenge: 'La distancia por sí sola predice mal la duración en montaña. El desnivel, las pendientes, la forma física y el ritmo pueden cambiar mucho la ETA; por eso la aplicación hace visibles esas hipótesis y compara modelos independientes.',
      features: ['Resume distancia, ascenso, descenso y cotas extremas; permite explorar el perfil de elevación y la distribución de distancia por categorías de pendiente.', 'Compara Naismith, Tobler, Munter, el modelo suizo y Petzoldt; un agregado sensible a la discrepancia elige media o mediana y considera forma física, ritmo, mochila y descansos.', 'Añade dificultad, estimaciones de calorías e hidratación, previsión meteorológica y aviso de puesta de sol; mapa y perfil comparten la posición explorada.'],
      engineering: 'Los puntos GPX se procesan en el navegador. Las distancias geodésicas con Haversine y los cambios de elevación generan distancia acumulada y pendiente; se ignoran pequeñas oscilaciones al sumar ascensos y descensos. Los datos del gráfico se reducen y suavizan para mantener una visualización fluida.',
      architecture: 'Aplicación React y TypeScript sin backend propio, con módulos separados para GPX/geometría, cálculos deterministas, meteorología y visualización. Leaflet muestra capas cartográficas y Recharts el perfil de elevación sincronizado.',
      data: 'El GPX y los cálculos de ruta permanecen en el navegador. La consulta opcional a Open-Meteo solicita previsión para la coordenada inicial y la fecha elegida; no representa el tiempo a lo largo de toda la ruta. Las estimaciones orientan la planificación, no garantizan la seguridad.'
    },
    ca: {
      category: 'Anàlisi de rutes · Senderisme i trekking',
      summary: 'Converteix un fitxer GPX en un espai de planificació amb anàlisi del terreny, visualització del desnivell i diverses estimacions explicables de durada.',
      challenge: 'La distància per si sola prediu malament la durada a la muntanya. El desnivell, els pendents, la forma física i el ritme poden canviar molt l’ETA; per això l’aplicació fa visibles aquestes hipòtesis i compara models independents.',
      features: ['Resumeix distància, ascens, descens i cotes extremes; permet explorar el perfil d’elevació i la distribució de distància per categories de pendent.', 'Compara Naismith, Tobler, Munter, el model suís i Petzoldt; un agregat sensible a la discrepància tria mitjana o mediana i considera forma física, ritme, motxilla i descansos.', 'Afegeix dificultat, estimacions de calories i hidratació, previsió meteorològica i avís de posta de sol; mapa i perfil comparteixen la posició explorada.'],
      engineering: 'Els punts GPX es processen al navegador. Les distàncies geodèsiques amb Haversine i els canvis d’elevació generen distància acumulada i pendent; s’ignoren petites oscil·lacions en sumar ascensos i descensos. Les dades del gràfic es redueixen i se suavitzen per mantenir una visualització fluida.',
      architecture: 'Aplicació React i TypeScript sense backend propi, amb mòduls separats per a GPX/geometria, càlculs deterministes, meteorologia i visualització. Leaflet mostra capes cartogràfiques i Recharts el perfil d’elevació sincronitzat.',
      data: 'El GPX i els càlculs de ruta es queden al navegador. La consulta opcional a Open-Meteo demana previsió per a la coordenada inicial i la data triada; no representa el temps al llarg de tota la ruta. Les estimacions orienten la planificació, no garanteixen la seguretat.'
    }
  },
  'race-planner-pro': {
    title: 'Race Planner Pro', images: [{ src: 'files/RacePlanner.webp', caption: { en: 'Race elevation and pacing plan', es: 'Desnivel y plan de ritmos de carrera', ca: 'Desnivell i pla de ritmes de cursa' } }], live: 'https://race-planner-pro.vercel.app/', repo: 'https://github.com/alexgasconn/RacePlanner', stack: ['TypeScript', 'Next.js', 'GPX', 'Chart.js', 'Leaflet'],
    en: {
      category: 'Race planning · Trail running',
      summary: 'A terrain-aware pacing planner that turns a route and target finish time into a practical, sector-by-sector race plan.',
      challenge: 'A single target pace ignores the climbing, descending and changing demands of a trail course. Race Planner gives runners a route-based way to distribute effort instead of treating every kilometre as equivalent.',
      features: ['Load a GPX route and set a finish-time goal to build a plan broken into course sectors.', 'Use route elevation and terrain context to vary pacing assumptions across the course.', 'Review the course visually through map and chart components, then refine the plan around the race scenario.'],
      engineering: 'The route is the planning backbone: segment-level distance and elevation shape the pacing breakdown, while the target finish time constrains the plan. The interface focuses on making a route-specific plan inspectable rather than presenting one unexplained average pace.',
      architecture: 'A TypeScript and Next.js application combines client-side GPX parsing, chart-based route summaries and Leaflet mapping. The deployed experience is a web app; no account or persistent training-history service is required for route planning.',
      data: 'The route file and planning inputs are supplied by the user. The displayed plan is an estimate: race-day conditions, terrain, fatigue and aid-station delays can change actual results.'
    },
    es: {
      category: 'Planificación de carrera · Trail running',
      summary: 'Planificador de ritmos adaptado al terreno que convierte una ruta y un tiempo objetivo en un plan de carrera práctico por sectores.',
      challenge: 'Un ritmo único ignora las subidas, bajadas y demandas cambiantes de una carrera de montaña. Race Planner permite distribuir el esfuerzo según la ruta, en vez de tratar cada kilómetro como equivalente.',
      features: ['Carga una ruta GPX y define un tiempo final objetivo para generar un plan dividido por sectores.', 'Utiliza el desnivel y el contexto del terreno para variar las hipótesis de ritmo a lo largo del recorrido.', 'Consulta visualmente el trazado mediante mapa y gráficos, y ajusta el plan al escenario de carrera.'],
      engineering: 'La ruta es la base de la planificación: la distancia y el desnivel de cada tramo determinan el desglose de ritmos, mientras que el tiempo objetivo acota el plan. La interfaz busca que el plan específico de la ruta se pueda inspeccionar, en lugar de mostrar un promedio sin explicación.',
      architecture: 'Aplicación TypeScript y Next.js que combina lectura de GPX en cliente, resúmenes gráficos de ruta y mapas Leaflet. Es una aplicación web; no requiere cuenta ni servicio de historial de entrenamientos para planificar una ruta.',
      data: 'El archivo de ruta y los parámetros de planificación los aporta el usuario. El plan es una estimación: las condiciones del día, el terreno, la fatiga y las paradas pueden cambiar el resultado real.'
    },
    ca: {
      category: 'Planificació de cursa · Trail running',
      summary: 'Planificador de ritmes adaptat al terreny que converteix una ruta i un temps objectiu en un pla de cursa pràctic per sectors.',
      challenge: 'Un ritme únic ignora les pujades, baixades i demandes canviants d’una cursa de muntanya. Race Planner permet distribuir l’esforç segons la ruta, en lloc de tractar cada quilòmetre com si fos equivalent.',
      features: ['Carrega una ruta GPX i defineix un temps final objectiu per generar un pla dividit per sectors.', 'Utilitza el desnivell i el context del terreny per variar les hipòtesis de ritme al llarg del recorregut.', 'Consulta visualment el traçat amb mapa i gràfics, i ajusta el pla a l’escenari de cursa.'],
      engineering: 'La ruta és la base de la planificació: la distància i el desnivell de cada tram determinen el desglossament de ritmes, mentre que el temps objectiu acota el pla. La interfície busca que el pla específic de la ruta es pugui inspeccionar, en lloc de mostrar una mitjana sense explicació.',
      architecture: 'Aplicació TypeScript i Next.js que combina lectura de GPX al client, resums gràfics de ruta i mapes Leaflet. És una aplicació web; no requereix compte ni servei d’historial d’entrenaments per planificar una ruta.',
      data: 'El fitxer de ruta i els paràmetres de planificació els aporta l’usuari. El pla és una estimació: les condicions del dia, el terreny, la fatiga i les parades poden canviar el resultat real.'
    }
  },
  '100-cims': {
    title: '100 Cims Map', images: [{ src: 'files/100cims.png', caption: { en: '100 Cims challenge map', es: 'Mapa del reto 100 Cims', ca: 'Mapa del repte dels 100 Cims' } }], live: 'https://mapa100cims.vercel.app/', repo: 'https://github.com/alexgasconn/100-Cims-Mapa', stack: ['TypeScript', 'Web Workers', 'deck.gl', 'MapLibre', 'GPX / TCX / FIT'],
    en: {
      category: 'Catalonia · Activity mapping · Challenge tracker',
      summary: 'An activity map that checks which peaks in the FEEC 100 Cims challenge are crossed by your recorded routes.',
      challenge: 'Tracking a long-running peak challenge by memory is difficult, especially when activities live in a large Strava export. The app turns route history into a geographic record of peaks visited, with a configurable proximity radius.',
      features: ['Import a Strava account export ZIP or select standalone GPX, TCX and FIT activity files.', 'See activities and challenge peaks together on an interactive map, with completed-peak totals and geographic breakdowns.', 'Adjust the proximity radius and recompute which peaks a route passes near; the app can show the activity associated with a peak.'],
      engineering: 'Imports are unpacked and parsed in a Web Worker so large files do not block the interface. A spatial grid narrows candidate peaks before Haversine distance checks; route points are sampled to keep the matching workload practical.',
      architecture: 'A TypeScript React app uses a worker for file extraction, format parsing and peak matching. deck.gl renders activity paths and peak markers over a MapLibre map; peak data is bundled with the application.',
      data: 'Importing and matching are performed locally in the browser; activity files are not uploaded. Supported inputs must contain GPS tracks. Peak detection is based on route proximity, so the configurable radius can produce false positives or misses.'
    },
    es: {
      category: 'Cataluña · Mapa de actividades · Seguimiento de retos',
      summary: 'Un mapa de actividades que detecta qué cimas del reto 100 Cims de la FEEC atraviesan las rutas registradas.',
      challenge: 'Llevar de memoria el seguimiento de un reto de cimas de largo recorrido es difícil, sobre todo cuando las actividades están dentro de una exportación grande de Strava. La aplicación transforma el historial de rutas en un registro geográfico de cimas visitadas mediante un radio de proximidad configurable.',
      features: ['Importa el ZIP de exportación de Strava o selecciona archivos de actividad GPX, TCX y FIT.', 'Visualiza actividades y cimas del reto en un mapa interactivo, con totales de cimas completadas y desgloses geográficos.', 'Ajusta el radio de proximidad y recalcula qué cimas quedan cerca de cada ruta; también puede mostrar qué actividad registró una cima.'],
      engineering: 'La importación, descompresión y lectura de formatos se ejecutan en un Web Worker para evitar bloquear la interfaz con archivos grandes. Una cuadrícula espacial reduce las cimas candidatas antes de calcular distancias Haversine; los puntos de las rutas se muestrean para mantener el coste controlado.',
      architecture: 'Aplicación React y TypeScript con un worker dedicado a extraer archivos, parsear formatos y detectar cimas. deck.gl dibuja rutas y marcadores sobre un mapa MapLibre; los datos de las cimas se incluyen con la aplicación.',
      data: 'La importación y la detección se realizan localmente en el navegador; los archivos de actividad no se suben. Los archivos deben contener trazas GPS. La detección se basa en proximidad, por lo que el radio configurable puede producir falsos positivos o dejar cimas sin detectar.'
    },
    ca: {
      category: 'Catalunya · Mapa d’activitats · Seguiment de reptes',
      summary: 'Un mapa d’activitats que detecta quins cims del repte dels 100 Cims de la FEEC travessen les rutes enregistrades.',
      challenge: 'Fer el seguiment de memòria d’un repte de cims de llarga durada és difícil, sobretot quan les activitats són dins d’una exportació gran de Strava. L’aplicació transforma l’historial de rutes en un registre geogràfic de cims visitats mitjançant un radi de proximitat configurable.',
      features: ['Importa el ZIP d’exportació de Strava o selecciona fitxers d’activitat GPX, TCX i FIT.', 'Visualitza activitats i cims del repte en un mapa interactiu, amb totals de cims completats i desglossaments geogràfics.', 'Ajusta el radi de proximitat i recalcula quins cims queden a prop de cada ruta; també pot mostrar quina activitat va registrar un cim.'],
      engineering: 'La importació, descompressió i lectura de formats s’executen en un Web Worker per evitar bloquejar la interfície amb fitxers grans. Una graella espacial redueix els cims candidats abans de calcular distàncies Haversine; els punts de les rutes se mostregen per mantenir el cost controlat.',
      architecture: 'Aplicació React i TypeScript amb un worker dedicat a extreure fitxers, parsejar formats i detectar cims. deck.gl dibuixa rutes i marcadors sobre un mapa MapLibre; les dades dels cims s’inclouen amb l’aplicació.',
      data: 'La importació i la detecció es fan localment al navegador; els fitxers d’activitat no es pugen. Els fitxers han de contenir traces GPS. La detecció es basa en proximitat, de manera que el radi configurable pot produir falsos positius o deixar cims sense detectar.'
    }
  },
  oasis: {
    title: 'Oasis', images: [{ src: 'Oasis.png', caption: { en: 'Nearby water fountain map and compass', es: 'Mapa y brújula de fuentes cercanas', ca: 'Mapa i brúixola de fonts properes' } }], live: 'https://www.oasis-search.vercel.app/', repo: 'https://github.com/alexgasconn/Oasis', stack: ['React', 'TypeScript', 'Leaflet', 'OpenStreetMap', 'PWA'],
    en: {
      category: 'Mobile geospatial utility · Hydration',
      summary: 'A location-aware water finder for people moving outdoors: locate nearby fountains, springs and drinking-water taps without searching a general-purpose map.',
      challenge: 'When running, cycling or travelling, finding a refill point quickly matters. Oasis turns open map data and live location into a distance-ranked list and clear direction to the nearest mapped source.',
      features: ['Search nearby OSM water features around the current or selected position and sort them by distance.', 'Switch between map and list views, inspect water-source details and potability tags, and launch external navigation.', 'Use a compass toward the nearest source when device orientation is available; offline use in Catalonia uses bundled local map tiles and fountain data after setup.'],
      engineering: 'The app normalizes OpenStreetMap tags, filters invalid coordinates and calculates great-circle distance and bearing. Requests use public Overpass mirrors with retries and short-lived caching; nearby results are refreshed as the user moves rather than on every GPS update.',
      architecture: 'A mobile-first React and TypeScript PWA combines browser geolocation and orientation APIs with Leaflet map/list views. Local browser storage and a generated service worker support cached assets and an offline package for Catalonia; a native shell is configured through Capacitor.',
      data: 'The active app has no custom account backend. Online fountain queries use public OpenStreetMap/Overpass data; local Catalonia fountain data and map tiles support offline use after the initial web installation/download. Coverage and potable-water tags depend on community mapping and may be incomplete.'
    },
    es: {
      category: 'Utilidad geoespacial móvil · Hidratación',
      summary: 'Un buscador de agua basado en ubicación para actividades al aire libre: encuentra fuentes, manantiales y puntos de agua cercanos sin buscar en un mapa generalista.',
      challenge: 'Al correr, pedalear o viajar, encontrar rápidamente un punto para rellenar agua importa. Oasis convierte datos cartográficos abiertos y ubicación en tiempo real en una lista ordenada por distancia y una indicación clara hacia la fuente más próxima registrada.',
      features: ['Busca elementos de agua de OpenStreetMap alrededor de la ubicación actual o seleccionada y los ordena por distancia.', 'Alterna entre mapa y lista, consulta detalles y etiquetas de potabilidad, y abre la navegación externa.', 'Ofrece brújula hacia la fuente más cercana si el dispositivo dispone de orientación; tras la configuración inicial, el uso offline en Cataluña aprovecha mapas y datos locales.'],
      engineering: 'La aplicación normaliza etiquetas de OpenStreetMap, filtra coordenadas no válidas y calcula distancia geodésica y rumbo. Las consultas usan varios servidores públicos de Overpass con reintentos y caché temporal; los resultados se actualizan cuando el usuario se desplaza, no con cada señal GPS.',
      architecture: 'PWA móvil en React y TypeScript que combina geolocalización y orientación del navegador con vistas de mapa y lista en Leaflet. El almacenamiento local y un service worker generado permiten guardar recursos y un paquete offline de Cataluña; hay una configuración nativa con Capacitor.',
      data: 'La aplicación activa no tiene backend propio ni cuentas. Las consultas online usan datos públicos de OpenStreetMap/Overpass; los datos de fuentes y mapas locales de Cataluña permiten usarlos sin conexión tras la instalación o descarga inicial. La cobertura y las etiquetas de potabilidad dependen del mapeo comunitario y pueden estar incompletas.'
    },
    ca: {
      category: 'Utilitat geoespacial mòbil · Hidratació',
      summary: 'Un cercador d’aigua basat en la ubicació per a activitats a l’aire lliure: troba fonts, brolladors i punts d’aigua propers sense cercar en un mapa generalista.',
      challenge: 'Quan corres, pedales o viatges, trobar ràpidament un punt per reomplir aigua és important. Oasis converteix dades cartogràfiques obertes i ubicació en temps real en una llista ordenada per distància i una indicació clara cap a la font més propera registrada.',
      features: ['Cerca elements d’aigua d’OpenStreetMap al voltant de la ubicació actual o seleccionada i els ordena per distància.', 'Alterna entre mapa i llista, consulta detalls i etiquetes de potabilitat, i obre la navegació externa.', 'Ofereix brúixola cap a la font més propera si el dispositiu disposa d’orientació; després de la configuració inicial, l’ús offline a Catalunya aprofita mapes i dades locals.'],
      engineering: 'L’aplicació normalitza etiquetes d’OpenStreetMap, filtra coordenades no vàlides i calcula distància geodèsica i rumb. Les consultes utilitzen diversos servidors públics d’Overpass amb reintents i memòria cau temporal; els resultats s’actualitzen quan l’usuari es desplaça, no amb cada senyal GPS.',
      architecture: 'PWA mòbil amb React i TypeScript que combina geolocalització i orientació del navegador amb vistes de mapa i llista a Leaflet. L’emmagatzematge local i un service worker generat permeten desar recursos i un paquet offline de Catalunya; hi ha una configuració nativa amb Capacitor.',
      data: 'L’aplicació activa no té backend propi ni comptes. Les consultes en línia utilitzen dades públiques d’OpenStreetMap/Overpass; les dades de fonts i mapes locals de Catalunya permeten usar-les sense connexió després de la instal·lació o descàrrega inicial. La cobertura i les etiquetes de potabilitat depenen del mapatge comunitari i poden ser incompletes.'
    }
  },
  'gpx-master-pro': {
    title: 'GPX Master Pro', images: [], live: 'https://gpx-master.vercel.app/', repo: 'https://github.com/alexgasconn/GPX-Master', stack: ['React', 'TypeScript', 'Leaflet', 'GPX', 'Valhalla'],
    en: {
      category: 'GPS track editor · Client-side data tools',
      summary: 'A detailed workbench for inspecting, editing, repairing and exporting GPS tracks, with point-level controls and recovery tools.',
      challenge: 'A route file can contain GPS jitter, gaps, spikes or geometry that needs careful correction. GPX Master aims to give users direct control over track points while preserving the original shape and keeping file contents in the browser.',
      features: ['Load and compare multiple GPX tracks, inspect elevation and point density, and export the edited track.', 'Move, insert, anchor, delete or batch-edit points; crop a route and apply smoothing, simplification, elevation adjustment and gap filling.', 'Scan for anomalous speeds, elevation jumps and large gaps, then use the restoration workflow to repair likely spikes and missing segments.'],
      engineering: 'Editing operations use geodesic distance, weighted moving averages and interpolation. Anchored points are protected from automatic edits; undo history makes operations reversible. Optional snap-to-path routes edits through a public Valhalla service using selected segment endpoints and activity profile.',
      architecture: 'A React and TypeScript client-side editor built around a Leaflet map and elevation profile. Track parsing, editing, statistics and export run in the browser; the optional routing integration is an external request rather than an uploaded GPX file.',
      data: 'GPX files are processed in browser memory and are not uploaded to an application server. If snap-to-path is enabled, segment endpoint coordinates and the chosen pedestrian or bicycle profile are sent to the public Valhalla endpoint. Map tiles also come from external providers.'
    },
    es: {
      category: 'Editor de tracks GPS · Herramientas locales de datos',
      summary: 'Un espacio de trabajo detallado para inspeccionar, editar, reparar y exportar tracks GPS, con controles punto a punto y herramientas de recuperación.',
      challenge: 'Un archivo de ruta puede tener ruido GPS, huecos, picos o geometría que requiere corrección cuidadosa. GPX Master da control directo sobre los puntos y busca preservar la forma original, manteniendo el contenido del archivo en el navegador.',
      features: ['Carga y compara varios tracks GPX, consulta la elevación y la densidad de puntos, y exporta la ruta editada.', 'Mueve, inserta, ancla, elimina o edita puntos en lote; recorta la ruta y aplica suavizado, simplificación, ajuste de elevación y relleno de huecos.', 'Analiza velocidades anómalas, saltos de elevación y grandes huecos; después utiliza las herramientas de restauración para reparar posibles picos y tramos ausentes.'],
      engineering: 'Las operaciones utilizan distancia geodésica, medias móviles ponderadas e interpolación. Los puntos anclados quedan protegidos de las ediciones automáticas y el historial de deshacer permite revertir cambios. El ajuste opcional a caminos usa el servicio público Valhalla con extremos de segmento y perfil de actividad.',
      architecture: 'Editor en cliente con React y TypeScript, mapa Leaflet y perfil de elevación. La lectura, edición, cálculo de estadísticas y exportación se realizan en el navegador; el enrutamiento opcional es una petición externa, no una subida del GPX completo.',
      data: 'Los GPX se procesan en memoria del navegador y no se suben a un servidor de la aplicación. Si se activa el ajuste a caminos, se envían al servicio público Valhalla los extremos del segmento y el perfil peatonal o ciclista elegido. Las teselas del mapa también proceden de proveedores externos.'
    },
    ca: {
      category: 'Editor de tracks GPS · Eines locals de dades',
      summary: 'Un espai de treball detallat per inspeccionar, editar, reparar i exportar tracks GPS, amb controls punt a punt i eines de recuperació.',
      challenge: 'Un fitxer de ruta pot tenir soroll GPS, buits, pics o geometria que requereix una correcció acurada. GPX Master dona control directe sobre els punts i busca preservar la forma original, mantenint el contingut del fitxer al navegador.',
      features: ['Carrega i compara diversos tracks GPX, consulta l’elevació i la densitat de punts, i exporta la ruta editada.', 'Mou, insereix, ancora, elimina o edita punts en bloc; retalla la ruta i aplica suavitzat, simplificació, ajust d’elevació i ompliment de buits.', 'Analitza velocitats anòmales, salts d’elevació i buits grans; després utilitza les eines de restauració per reparar possibles pics i trams absents.'],
      engineering: 'Les operacions utilitzen distància geodèsica, mitjanes mòbils ponderades i interpolació. Els punts ancorats queden protegits de les edicions automàtiques i l’historial de desfer permet revertir canvis. L’ajust opcional a camins fa servir el servei públic Valhalla amb extrems de segment i perfil d’activitat.',
      architecture: 'Editor al client amb React i TypeScript, mapa Leaflet i perfil d’elevació. La lectura, edició, càlcul d’estadístiques i exportació es fan al navegador; l’encaminament opcional és una petició externa, no una pujada del GPX complet.',
      data: 'Els GPX es processen a la memòria del navegador i no es pugen a un servidor de l’aplicació. Si s’activa l’ajust a camins, s’envien al servei públic Valhalla els extrems del segment i el perfil de vianant o bicicleta triat. Les tessel·les del mapa també provenen de proveïdors externs.'
    }
  },
  'gpx-track-analyzer': {
    title: 'GPX Track Analyzer', images: [{ src: 'files/GPX.webp', caption: { en: 'GPS route and terrain analysis', es: 'Análisis de ruta GPS y terreno', ca: 'Anàlisi de ruta GPS i terreny' } }], live: 'https://gpx-analyzer.streamlit.app/', repo: 'https://github.com/alexgasconn/GPX-Analyzer', stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'GPX'],
    en: {
      category: 'Route analysis · Elevation and GPS quality',
      summary: 'An analytical view of GPX tracks that surfaces elevation structure, route statistics and potential GPS noise.',
      challenge: 'A GPX line on a map does not explain how hard a route is or whether its elevation data is trustworthy. This tool turns raw track points into a more inspectable route profile.',
      features: ['Upload a GPX track and review distance, elevation and route characteristics.', 'Segment the elevation profile to make climbs and terrain changes easier to inspect.', 'Flag GPS or elevation irregularities that may distort route statistics and difficulty assessment.'],
      engineering: 'Python data processing converts GPX points into route and elevation summaries. The analysis focuses on segmentation and noise-aware interpretation rather than a black-box difficulty score.',
      architecture: 'A Streamlit application provides the upload and interactive analysis experience, using Pandas and NumPy for data manipulation and calculations.',
      data: 'The app is designed around a user-supplied GPX file. Route-quality checks identify potential anomalies, but GPS traces and elevation sources vary, so computed values should be treated as estimates.'
    },
    es: {
      category: 'Análisis de rutas · Desnivel y calidad GPS',
      summary: 'Una vista analítica de tracks GPX que muestra la estructura del desnivel, estadísticas de ruta y posibles irregularidades GPS.',
      challenge: 'Una línea GPX en el mapa no explica lo exigente que es una ruta ni si sus datos de elevación son fiables. Esta herramienta convierte puntos GPS sin procesar en un perfil de ruta más fácil de analizar.',
      features: ['Carga un track GPX y consulta distancia, elevación y características del recorrido.', 'Segmenta el perfil de elevación para facilitar el análisis de subidas y cambios de terreno.', 'Detecta irregularidades GPS o de altitud que pueden distorsionar las estadísticas y la valoración de dificultad.'],
      engineering: 'El procesamiento en Python convierte los puntos GPX en resúmenes de ruta y elevación. El análisis se centra en segmentación e interpretación sensible al ruido, no en una puntuación opaca de dificultad.',
      architecture: 'Aplicación Streamlit para cargar archivos y explorar el análisis, con Pandas y NumPy para manipular datos y realizar cálculos.',
      data: 'La aplicación trabaja con un GPX aportado por el usuario. Los controles de calidad señalan posibles anomalías, pero las trazas GPS y las fuentes de elevación varían, por lo que los resultados son estimaciones.'
    },
    ca: {
      category: 'Anàlisi de rutes · Desnivell i qualitat GPS',
      summary: 'Una vista analítica de tracks GPX que mostra l’estructura del desnivell, estadístiques de ruta i possibles irregularitats GPS.',
      challenge: 'Una línia GPX al mapa no explica com n’és d’exigent una ruta ni si les dades d’elevació són fiables. Aquesta eina converteix punts GPS sense processar en un perfil de ruta més fàcil d’analitzar.',
      features: ['Carrega un track GPX i consulta distància, elevació i característiques del recorregut.', 'Segmenta el perfil d’elevació per facilitar l’anàlisi de pujades i canvis de terreny.', 'Detecta irregularitats GPS o d’altitud que poden distorsionar les estadístiques i la valoració de dificultat.'],
      engineering: 'El processament en Python converteix els punts GPX en resums de ruta i elevació. L’anàlisi se centra en segmentació i interpretació sensible al soroll, no en una puntuació opaca de dificultat.',
      architecture: 'Aplicació Streamlit per carregar fitxers i explorar l’anàlisi, amb Pandas i NumPy per manipular dades i fer càlculs.',
      data: 'L’aplicació treballa amb un GPX aportat per l’usuari. Els controls de qualitat assenyalen possibles anomalies, però les traces GPS i les fonts d’elevació varien; per tant, els resultats són estimacions.'
    }
  },
  stravastats: {
    title: 'StravaStats', images: [{ src: 'files/Strava.png', caption: { en: 'Race pace prediction chart', es: 'Gráfico de predicción de ritmo', ca: 'Gràfic de predicció de ritme' } }], live: 'https://stravastats.vercel.app/', repo: 'https://github.com/alexgasconn/StravaStats', stack: ['JavaScript ES modules', 'Strava API v3', 'Vercel Functions', 'Chart.js', 'D3.js', 'Leaflet', 'PWA'],
    en: {
      category: 'Endurance analytics · Training platform',
      summary: 'A free, feature-rich Strava analytics platform designed to put premium-style training insights within reach of every athlete.',
      challenge: 'Activity history is easy to collect but difficult to turn into a coherent picture of training load, consistency, performance, equipment wear and sport-specific trends. StravaStats brings those questions into one analytical workspace.',
      features: ['Explore 13 focused areas covering training load and consistency, run/bike/swim analysis, athlete profile, race prediction, gear, activity search, calendar, historical weather, maps, annual reports and an optional AI coach.', 'Inspect individual activities at stream level with splits, climbs, route context and derived metrics; export analyzed data as GPX, CSV or JSON.', 'Blend Riegel scaling, VDOT-style performance transfer and personal curve fitting in a configurable race predictor with scenario controls.'],
      engineering: 'The data pipeline paginates Strava activity history, caches responses with different lifetimes, preprocesses metrics and renders tab-specific summaries. Detailed activity analysis cleans noisy GPS/elevation streams before segmentation and sport-specific calculations. Most analytics run client-side.',
      architecture: 'A static JavaScript ES-module frontend works with Vercel serverless functions for Strava OAuth, token refresh and API requests. Activity payloads are cached in IndexedDB, while smaller preferences and session metadata use localStorage; charts and maps are rendered with Chart.js, D3 and Leaflet.',
      data: 'Strava access uses OAuth and a small serverless proxy; there is no application database. The AI coach is optional and uses a Gemini key supplied by the user in the browser. Weather enrichment uses historical Open-Meteo data for geolocated runs. Model outputs are transparent decision support, not medical or performance guarantees.'
    },
    es: {
      category: 'Analítica de resistencia · Plataforma de entrenamiento',
      summary: 'Una plataforma gratuita y completa de analítica de Strava, pensada para acercar a cualquier atleta información de entrenamiento al nivel de las funciones premium.',
      challenge: 'Es fácil acumular actividades, pero cuesta convertirlas en una visión coherente de carga, constancia, rendimiento, desgaste del material y tendencias por deporte. StravaStats reúne esas preguntas en un único espacio de análisis.',
      features: ['Explora 13 áreas: carga y constancia, análisis de running/ciclismo/natación, perfil del atleta, predicción de carreras, material, buscador, calendario, clima histórico, mapas, informes anuales y asistente de IA opcional.', 'Analiza actividades individuales al nivel de sus streams, con parciales, subidas, contexto geográfico y métricas derivadas; exporta datos a GPX, CSV o JSON.', 'Combina escalado de Riegel, transferencia de rendimiento al estilo VDOT y ajuste de curvas personales en un predictor configurable con escenarios.'],
      engineering: 'El pipeline pagina el historial de Strava, aplica cachés con distintas duraciones, calcula métricas derivadas y genera resúmenes por pestaña. El análisis detallado limpia ruido GPS y altimétrico antes de segmentar y aplicar cálculos específicos de cada deporte. La mayor parte de la analítica se ejecuta en cliente.',
      architecture: 'Frontend estático con módulos JavaScript y funciones serverless de Vercel para OAuth de Strava, renovación de tokens y llamadas a la API. Las actividades se guardan en caché en IndexedDB; preferencias y metadatos de sesión usan localStorage. Chart.js, D3 y Leaflet renderizan gráficos y mapas.',
      data: 'El acceso a Strava utiliza OAuth y un pequeño proxy serverless; no hay base de datos de la aplicación. El asistente IA es opcional y utiliza una clave Gemini que aporta el usuario en el navegador. El enriquecimiento meteorológico consulta datos históricos de Open-Meteo para carreras geolocalizadas. Los modelos orientan decisiones, no garantizan rendimiento ni salud.'
    },
    ca: {
      category: 'Analítica de resistència · Plataforma d’entrenament',
      summary: 'Una plataforma gratuïta i completa d’analítica de Strava, pensada per apropar a qualsevol atleta informació d’entrenament de nivell premium.',
      challenge: 'És fàcil acumular activitats, però costa convertir-les en una visió coherent de càrrega, constància, rendiment, desgast del material i tendències per esport. StravaStats reuneix aquestes preguntes en un únic espai d’anàlisi.',
      features: ['Explora 13 àrees: càrrega i constància, anàlisi de running/ciclisme/natació, perfil de l’atleta, predicció de curses, equipament, cercador, calendari, clima històric, mapes, informes anuals i assistent d’IA opcional.', 'Analitza activitats individuals al nivell dels streams, amb parcials, pujades, context geogràfic i mètriques derivades; exporta dades a GPX, CSV o JSON.', 'Combina escalat de Riegel, transferència de rendiment a l’estil VDOT i ajust de corbes personals en un predictor configurable amb escenaris.'],
      engineering: 'El pipeline pagina l’historial de Strava, aplica memòries cau de durades diferents, calcula mètriques derivades i genera resums per pestanya. L’anàlisi detallada neteja soroll GPS i altimètric abans de segmentar i aplicar càlculs específics de cada esport. La major part de l’analítica s’executa al client.',
      architecture: 'Frontend estàtic amb mòduls JavaScript i funcions serverless de Vercel per a OAuth de Strava, renovació de tokens i crides a l’API. Les activitats es guarden a IndexedDB; preferències i metadades de sessió utilitzen localStorage. Chart.js, D3 i Leaflet renderitzen gràfics i mapes.',
      data: 'L’accés a Strava utilitza OAuth i un petit proxy serverless; no hi ha base de dades de l’aplicació. L’assistent d’IA és opcional i utilitza una clau Gemini que aporta l’usuari al navegador. L’enriquiment meteorològic consulta dades històriques d’Open-Meteo per a curses geolocalitzades. Els models orienten decisions, no garanteixen rendiment ni salut.'
    }
  },
  'player-recommender': {
    title: 'Player Recommender', images: [{ src: 'files/Players.png', caption: { en: 'Player comparison dashboard', es: 'Panel de comparación de jugadores', ca: 'Panell de comparació de jugadors' } }], live: 'https://player-recommender.streamlit.app/', repo: 'https://github.com/alexgasconn/player-recommender', stack: ['Python', 'Scikit-learn', 'PCA', 'K-means', 'Streamlit'],
    en: {
      category: 'Football analytics · Scouting',
      summary: 'A player-comparison tool that uses performance statistics to surface footballers with similar profiles.',
      challenge: 'Scouting data contains many dimensions, and comparing players across all of them manually is slow. The project reduces a player’s statistical profile into a more searchable similarity space and keeps the comparison interpretable with visual summaries.',
      features: ['Explore FBref player data and select a player profile to find statistically similar candidates.', 'Use PCA to reduce feature dimensionality and K-means clustering to organize player profiles.', 'Compare candidates with interactive radar charts rather than relying on one opaque ranking.'],
      engineering: 'The workflow combines data preparation, feature selection, dimensionality reduction and unsupervised clustering. Recommendations are similarity aids: the selected features and sample coverage affect which players appear close.',
      architecture: 'A Python and Streamlit application presents the analysis and interactive comparison views. Scikit-learn provides PCA and K-means; the interface exposes the results as a scouting aid.',
      data: 'The project is based on FBref football statistics. Similarity indicates resemblance within the selected statistical feature space, not equivalent role, quality, transfer value or guaranteed future performance.'
    },
    es: {
      category: 'Analítica de fútbol · Scouting',
      summary: 'Herramienta de comparación que utiliza estadísticas de rendimiento para encontrar futbolistas con perfiles similares.',
      challenge: 'Los datos de scouting tienen muchas dimensiones y compararlos manualmente lleva tiempo. El proyecto transforma el perfil estadístico de un jugador en un espacio de similitud más fácil de explorar y presenta la comparación con visualizaciones interpretables.',
      features: ['Explora datos de jugadores de FBref y selecciona un perfil para encontrar candidatos estadísticamente parecidos.', 'Aplica PCA para reducir dimensiones y clustering K-means para organizar perfiles.', 'Compara candidatos mediante gráficos radar interactivos en vez de depender de una única clasificación opaca.'],
      engineering: 'El flujo combina preparación de datos, selección de variables, reducción de dimensionalidad y clustering no supervisado. Las recomendaciones ayudan a explorar similitudes: las variables y la cobertura de datos determinan qué jugadores aparecen próximos.',
      architecture: 'Aplicación Python y Streamlit con vistas interactivas de análisis y comparación. Scikit-learn aporta PCA y K-means, y la interfaz presenta los resultados como apoyo al scouting.',
      data: 'El proyecto utiliza estadísticas de fútbol de FBref. La similitud refleja cercanía dentro del espacio estadístico seleccionado, no equivalencia de rol, calidad, valor de mercado o rendimiento futuro garantizado.'
    },
    ca: {
      category: 'Analítica de futbol · Scouting',
      summary: 'Eina de comparació que utilitza estadístiques de rendiment per trobar futbolistes amb perfils similars.',
      challenge: 'Les dades de scouting tenen moltes dimensions i comparar-les manualment requereix temps. El projecte transforma el perfil estadístic d’un jugador en un espai de similitud més fàcil d’explorar i presenta la comparació amb visualitzacions interpretables.',
      features: ['Explora dades de jugadors de FBref i selecciona un perfil per trobar candidats estadísticament semblants.', 'Aplica PCA per reduir dimensions i clustering K-means per organitzar perfils.', 'Compara candidats amb gràfics radar interactius en lloc de dependre d’una única classificació opaca.'],
      engineering: 'El flux combina preparació de dades, selecció de variables, reducció de dimensionalitat i clustering no supervisat. Les recomanacions ajuden a explorar similituds: les variables i la cobertura de dades determinen quins jugadors apareixen a prop.',
      architecture: 'Aplicació Python i Streamlit amb vistes interactives d’anàlisi i comparació. Scikit-learn aporta PCA i K-means, i la interfície presenta els resultats com a suport al scouting.',
      data: 'El projecte utilitza estadístiques de futbol de FBref. La similitud reflecteix proximitat dins de l’espai estadístic seleccionat, no equivalència de rol, qualitat, valor de mercat o rendiment futur garantit.'
    }
  },
  'transfermarkt-pipeline': {
    title: 'Transfermarkt Pipeline', images: [{ src: 'files/Transfermarkt.webp', caption: { en: 'Player data application', es: 'Aplicación de datos de jugadores', ca: 'Aplicació de dades de jugadors' } }], live: null, repo: 'https://github.com/alexgasconn/transfermarkt-scraper-api', stack: ['Python', 'FastAPI', 'Streamlit', 'Data pipelines'],
    en: {
      category: 'Football data · API and analytics pipeline',
      summary: 'An end-to-end workflow that collects football player data, exposes it through an API and makes it available for interactive exploration.',
      challenge: 'Raw player information is more useful when it can be refreshed, queried and explored through a consistent interface. This project connects the collection, service and visualization layers into one small data product.',
      features: ['Collect and structure player information from Transfermarkt.', 'Expose processed data through a FastAPI service for application use.', 'Explore the resulting dataset with a Streamlit interface.'],
      engineering: 'The project separates ingestion from API delivery and analysis UI, making the stages easier to run and inspect independently. The pipeline turns source pages into structured records rather than leaving users to browse isolated profiles.',
      architecture: 'Python-based data collection feeds a FastAPI backend and a Streamlit presentation layer. The repository is organized around a scraper/API workflow rather than a standalone static dashboard.',
      data: 'Data is sourced from Transfermarkt and displayed for analysis. Source availability and page structure can change; collected values should be interpreted in the context of their source and retrieval time.'
    },
    es: {
      category: 'Datos de fútbol · Pipeline de API y analítica',
      summary: 'Flujo integral que recopila datos de futbolistas, los expone mediante una API y permite explorarlos de forma interactiva.',
      challenge: 'La información de jugadores resulta más útil cuando se puede actualizar, consultar y explorar desde una interfaz coherente. Este proyecto conecta recopilación, servicio y visualización en un pequeño producto de datos.',
      features: ['Recopila y estructura información de jugadores de Transfermarkt.', 'Expone los datos procesados mediante un servicio FastAPI.', 'Permite explorar el conjunto de datos resultante con Streamlit.'],
      engineering: 'El proyecto separa ingesta, entrega mediante API e interfaz de análisis para facilitar la ejecución e inspección de cada etapa. El pipeline convierte páginas de origen en registros estructurados, en lugar de dejar al usuario navegando perfiles aislados.',
      architecture: 'La extracción de datos en Python alimenta un backend FastAPI y una capa de presentación Streamlit. El repositorio se organiza como flujo scraper/API, no como un dashboard estático independiente.',
      data: 'Los datos proceden de Transfermarkt y se presentan para su análisis. La disponibilidad de la fuente y la estructura de sus páginas pueden cambiar; conviene interpretar los valores junto con su origen y fecha de extracción.'
    },
    ca: {
      category: 'Dades de futbol · Pipeline d’API i analítica',
      summary: 'Flux integral que recopila dades de futbolistes, les exposa mitjançant una API i permet explorar-les de manera interactiva.',
      challenge: 'La informació de jugadors és més útil quan es pot actualitzar, consultar i explorar des d’una interfície coherent. Aquest projecte connecta recopilació, servei i visualització en un petit producte de dades.',
      features: ['Recopila i estructura informació de jugadors de Transfermarkt.', 'Exposa les dades processades mitjançant un servei FastAPI.', 'Permet explorar el conjunt de dades resultant amb Streamlit.'],
      engineering: 'El projecte separa ingesta, lliurament mitjançant API i interfície d’anàlisi per facilitar l’execució i inspecció de cada etapa. El pipeline converteix pàgines d’origen en registres estructurats, en lloc de deixar l’usuari navegant per perfils aïllats.',
      architecture: 'L’extracció de dades en Python alimenta un backend FastAPI i una capa de presentació Streamlit. El repositori s’organitza com un flux scraper/API, no com un dashboard estàtic independent.',
      data: 'Les dades provenen de Transfermarkt i es presenten per analitzar-les. La disponibilitat de la font i l’estructura de les pàgines poden canviar; convé interpretar els valors juntament amb l’origen i la data d’extracció.'
    }
  },
  'spotify-stats': {
    title: 'Spotify Stats', images: [{ src: 'files/Spotify.webp', caption: { en: 'Spotify listening statistics', es: 'Estadísticas de escucha de Spotify', ca: 'Estadístiques d’escolta de Spotify' } }], live: 'https://spotystats.vercel.app/', repo: 'https://github.com/alexgasconn/SpotifyStats', stack: ['JavaScript', 'Chart.js', 'Spotify API'],
    en: {
      category: 'Personal data · Music listening',
      summary: 'An interactive way to explore listening habits through favourite tracks, artists and playlists.',
      challenge: 'Music listening history is personal data that is difficult to understand as a raw list. Spotify Stats turns it into visual summaries that make patterns and favourites easier to browse.',
      features: ['Connect music data to surface top tracks, artists and playlists.', 'Use charts to compare listening patterns and explore favourites.', 'Keep the experience focused on personal discovery rather than a generic music catalog.'],
      engineering: 'The frontend uses JavaScript and Chart.js to transform listening data into interactive visual summaries. The project is intentionally compact: API data, aggregation and chart presentation are the core workflow.',
      architecture: 'A browser-based JavaScript application integrates with the Spotify API and renders charts with Chart.js.',
      data: 'Spotify account authorization and the data available from the API determine what can be shown. Users should review Spotify permissions and the application’s current authorization flow before connecting an account.'
    },
    es: {
      category: 'Datos personales · Escucha musical',
      summary: 'Una forma interactiva de explorar hábitos de escucha, canciones favoritas, artistas y listas.',
      challenge: 'El historial musical es un conjunto de datos personal que cuesta interpretar como una lista sin procesar. Spotify Stats lo transforma en resúmenes visuales para descubrir patrones y favoritos con facilidad.',
      features: ['Conecta datos musicales para mostrar canciones, artistas y listas más escuchados.', 'Utiliza gráficos para comparar hábitos de escucha y explorar favoritos.', 'Centra la experiencia en el descubrimiento personal, no en un catálogo musical genérico.'],
      engineering: 'El frontend utiliza JavaScript y Chart.js para convertir datos de escucha en visualizaciones interactivas. El flujo es compacto: datos de API, agregación y presentación gráfica.',
      architecture: 'Aplicación JavaScript en navegador integrada con la API de Spotify y gráficos renderizados con Chart.js.',
      data: 'La autorización de Spotify y los datos disponibles en su API determinan qué información se muestra. Antes de conectar una cuenta, conviene revisar los permisos solicitados y el flujo de autorización vigente.'
    },
    ca: {
      category: 'Dades personals · Escolta musical',
      summary: 'Una manera interactiva d’explorar hàbits d’escolta, cançons preferides, artistes i llistes.',
      challenge: 'L’historial musical és un conjunt de dades personal difícil d’interpretar com una llista sense processar. Spotify Stats el transforma en resums visuals per descobrir patrons i preferits amb facilitat.',
      features: ['Connecta dades musicals per mostrar les cançons, artistes i llistes més escoltats.', 'Utilitza gràfics per comparar hàbits d’escolta i explorar preferits.', 'Centra l’experiència en el descobriment personal, no en un catàleg musical genèric.'],
      engineering: 'El frontend utilitza JavaScript i Chart.js per convertir dades d’escolta en visualitzacions interactives. El flux és compacte: dades d’API, agregació i presentació gràfica.',
      architecture: 'Aplicació JavaScript al navegador integrada amb l’API de Spotify i gràfics renderitzats amb Chart.js.',
      data: 'L’autorització de Spotify i les dades disponibles a l’API determinen quina informació es mostra. Abans de connectar un compte, convé revisar els permisos sol·licitats i el flux d’autorització vigent.'
    }
  },
  'whatsapp-analyzer': {
    title: 'WhatsApp Analyzer', images: [{ src: 'files/Whatsapp.png', caption: { en: 'Conversation analysis dashboard', es: 'Panel de análisis de conversaciones', ca: 'Panell d’anàlisi de converses' } }], live: 'https://whats-stats.vercel.app/', repo: 'https://github.com/alexgasconn/WhatsAppAnalyzer', stack: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
    en: {
      category: 'Personal data · Conversation analysis',
      summary: 'A chat-export analyzer that turns message histories into activity, language and emoji-use summaries.',
      challenge: 'A conversation export is a large text file with patterns hidden across time, participants and message content. This project makes those patterns explorable through focused statistics and visualizations.',
      features: ['Inspect activity over time and compare when conversations are busiest.', 'Explore common words and emoji usage with word-cloud and chart views.', 'Turn an exported chat into a set of readable summaries without manually scanning the entire file.'],
      engineering: 'The application parses exported chat text into message records, groups events into time and content summaries, then renders those summaries with charts. Export formats and locale conventions can affect parsing.',
      architecture: 'A JavaScript web application with a browser interface and Chart.js visualizations. The user supplies a chat export to analyze.',
      data: 'Chat exports can contain sensitive personal information. Only analyze conversations you have permission to use, and avoid sharing screenshots or exported results that expose other participants’ private messages.'
    },
    es: {
      category: 'Datos personales · Análisis de conversaciones',
      summary: 'Analizador de exportaciones de chats que transforma historiales de mensajes en resúmenes de actividad, lenguaje y uso de emojis.',
      challenge: 'Una exportación de conversación es un archivo de texto extenso con patrones ocultos en el tiempo, los participantes y el contenido. Este proyecto permite explorar esos patrones con estadísticas y visualizaciones concretas.',
      features: ['Consulta la actividad a lo largo del tiempo y detecta cuándo se concentran las conversaciones.', 'Explora palabras frecuentes y uso de emojis mediante nubes de palabras y gráficos.', 'Convierte un chat exportado en resúmenes legibles sin revisar el archivo completo manualmente.'],
      engineering: 'La aplicación interpreta texto exportado y lo convierte en registros de mensajes; después agrupa eventos por tiempo y contenido, y representa los resultados con gráficos. Los formatos de exportación y convenciones regionales pueden afectar al análisis.',
      architecture: 'Aplicación web en JavaScript con interfaz de navegador y visualizaciones Chart.js. El usuario aporta la exportación del chat que desea analizar.',
      data: 'Las exportaciones pueden contener información personal sensible. Analiza únicamente conversaciones para las que tengas permiso y evita compartir capturas o resultados que expongan mensajes privados de otras personas.'
    },
    ca: {
      category: 'Dades personals · Anàlisi de converses',
      summary: 'Analitzador d’exportacions de xats que transforma historials de missatges en resums d’activitat, llenguatge i ús d’emojis.',
      challenge: 'Una exportació de conversa és un fitxer de text extens amb patrons amagats en el temps, els participants i el contingut. Aquest projecte permet explorar aquests patrons amb estadístiques i visualitzacions concretes.',
      features: ['Consulta l’activitat al llarg del temps i detecta quan es concentren les converses.', 'Explora paraules freqüents i ús d’emojis mitjançant núvols de paraules i gràfics.', 'Converteix un xat exportat en resums llegibles sense revisar manualment tot el fitxer.'],
      engineering: 'L’aplicació interpreta text exportat i el converteix en registres de missatges; després agrupa esdeveniments per temps i contingut i representa els resultats amb gràfics. Els formats d’exportació i les convencions regionals poden afectar l’anàlisi.',
      architecture: 'Aplicació web en JavaScript amb interfície de navegador i visualitzacions Chart.js. L’usuari aporta l’exportació del xat que vol analitzar.',
      data: 'Les exportacions poden contenir informació personal sensible. Analitza només converses per a les quals tinguis permís i evita compartir captures o resultats que exposin missatges privats d’altres persones.'
    }
  },
  'timeline-heatmap': {
    title: 'Timeline Heatmap', images: [{ src: 'files/Heatmap.png', caption: { en: 'Location history heatmap', es: 'Mapa de calor del historial de ubicaciones', ca: 'Mapa de calor de l’historial d’ubicacions' } }], live: 'https://alexgasconn.github.io/timeline/', repo: 'https://github.com/alexgasconn/timeline', stack: ['JavaScript', 'Maps', 'HTML', 'CSS'],
    en: {
      category: 'Personal data · Geographic visualization',
      summary: 'A map-based view of Google Timeline location history that makes repeated places and movement patterns visible.',
      challenge: 'Location history is usually presented as a chronological log. A heatmap gives a spatial overview, helping users see where their recorded movement is concentrated.',
      features: ['Load a Google Timeline location-history export and display recorded places on a map.', 'Use heatmap visualization to reveal frequently visited areas and spatial concentration.', 'Explore personal movement history through a geographic lens rather than a list of timestamps.'],
      engineering: 'The application transforms location records into map-ready points and renders their spatial density. The quality of the visualization depends on the completeness and format of the user’s export.',
      architecture: 'A lightweight JavaScript, HTML and CSS web application focused on map visualization of user-provided location-history data.',
      data: 'Location history is sensitive. Use your own export, keep downloaded data private, and review the browser and hosting environment before loading personal records.'
    },
    es: {
      category: 'Datos personales · Visualización geográfica',
      summary: 'Vista cartográfica del historial de ubicaciones de Google Timeline para descubrir lugares recurrentes y patrones de movimiento.',
      challenge: 'El historial de ubicaciones suele presentarse como una cronología. Un mapa de calor aporta una visión espacial y permite ver dónde se concentra el movimiento registrado.',
      features: ['Carga una exportación del historial de ubicaciones de Google Timeline y muestra sus puntos en un mapa.', 'Utiliza un mapa de calor para destacar zonas visitadas con frecuencia y concentraciones espaciales.', 'Explora el historial personal desde una perspectiva geográfica, no solo como una lista de fechas.'],
      engineering: 'La aplicación transforma registros de ubicación en puntos cartográficos y representa su densidad espacial. La calidad de la visualización depende de que la exportación del usuario esté completa y tenga el formato esperado.',
      architecture: 'Aplicación web ligera en JavaScript, HTML y CSS, centrada en visualizar en un mapa los datos de ubicación que aporta el usuario.',
      data: 'El historial de ubicación es sensible. Utiliza tu propia exportación, protege los archivos descargados y revisa el navegador y el entorno de alojamiento antes de cargar datos personales.'
    },
    ca: {
      category: 'Dades personals · Visualització geogràfica',
      summary: 'Vista cartogràfica de l’historial d’ubicacions de Google Timeline per descobrir llocs recurrents i patrons de moviment.',
      challenge: 'L’historial d’ubicacions normalment es presenta com una cronologia. Un mapa de calor aporta una visió espacial i permet veure on es concentra el moviment enregistrat.',
      features: ['Carrega una exportació de l’historial d’ubicacions de Google Timeline i mostra’n els punts en un mapa.', 'Utilitza un mapa de calor per destacar zones visitades sovint i concentracions espacials.', 'Explora l’historial personal des d’una perspectiva geogràfica, no només com una llista de dates.'],
      engineering: 'L’aplicació transforma registres d’ubicació en punts cartogràfics i en representa la densitat espacial. La qualitat de la visualització depèn que l’exportació de l’usuari sigui completa i tingui el format esperat.',
      architecture: 'Aplicació web lleugera en JavaScript, HTML i CSS, centrada a visualitzar en un mapa les dades d’ubicació que aporta l’usuari.',
      data: 'L’historial d’ubicacions és sensible. Utilitza la teva pròpia exportació, protegeix els fitxers descarregats i revisa el navegador i l’entorn d’allotjament abans de carregar dades personals.'
    }
  }
};
