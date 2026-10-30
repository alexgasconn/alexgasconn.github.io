const projectImage = (src, en, es, ca) => ({ src, caption: { en, es, ca } });

// Add screenshots to each images array in the order the carousel should show them.
window.projectDetails = {
    trailnav: {
        title: 'TrailNav',
        imageFolder: 'TrailNav',
        images: [
            projectImage('files/TrailNav/TrailNav1.png', 'Route map and elevation profile', 'Mapa de ruta y perfil de elevación', 'Mapa de ruta i perfil d’elevació'),
            projectImage('files/TrailNav/TrailNav2.jpeg', 'Route navigation and planning', 'Navegación y planificación de ruta', 'Navegació i planificació de ruta'),
            projectImage('files/TrailNav/TrailNav3.jpeg', 'Emergency location details', 'Datos de ubicación de emergencia', 'Dades d’ubicació d’emergència'),
            projectImage('files/TrailNav/TrailNav4.jpeg', 'Route analysis and ETA', 'Análisis de ruta y tiempo estimado', 'Anàlisi de ruta i temps estimat'),
            projectImage('files/TrailNav/TrailNav5.jpeg', 'Weather along the route', 'Meteorología durante la ruta', 'Meteorologia durant la ruta')
        ],
        live: 'https://trail-nav.vercel.app/',
        repo: 'https://github.com/alexgasconn/TrailNav',
        stack: ['TypeScript', 'React', 'MapLibre', 'IndexedDB', 'PWA'],
        en: {
            category: 'Outdoor navigation · Open source · Offline-first PWA',
            summary: 'A free, open-source GPS navigation app for hiking, trail running and mountain biking, built by an outdoor enthusiast who wanted a better way to navigate his own routes.',
            challenge: 'I spend a lot of time outdoors, and recording activities and following GPX routes are part of my routine. My Garmin is useful for tracking activities, but its route display is limited: a black background, a partial view of the route and an interface that I find difficult to read at a glance. I also tried navigation apps such as Wikiloc, Komoot and Strava. They all have things I like, but I wanted to bring my favourite features together in one place without relying on paid subscriptions. So I decided to build my own app, designed around how I actually plan and follow routes. This is one of the things I enjoy most about software development: finding a problem in my own daily life and building something that solves it.',
            features: [
                'Import GPX, KML and GeoJSON routes, inspect route statistics and elevation profiles, and edit tracks by trimming or simplifying them without overwriting the original.',
                'Download map areas for offline use, then follow a route with live GPS positioning, heading and compass guidance, even when mobile coverage is unavailable.',
                'Record outdoor activities and export the actual GPS track as GPX. Analyse routes, estimate arrival times and check weather information along the route.',
                'Use it without an account, subscription or remote route-sync service. Route files and downloaded maps are stored locally in the browser.'
            ],
            engineering: 'Route geometry and analysis run in local TypeScript modules. GPS positions are projected onto the route to estimate progress, while route editing preserves the original track by saving modified copies. ETA calculations use explicit hiking models rather than a trained prediction service.',
            architecture: 'A React single-page Progressive Web App uses MapLibre for interactive maps and IndexedDB for routes, settings and downloaded map tiles. Navigation session state is kept separate from individual screens, allowing an active session to continue when switching views. The offline-first design keeps core navigation data on the device.',
            inspiration: 'TrailNav is inspired by my own experience with a Garmin GPS and outdoor navigation apps such as Wikiloc, Komoot and Strava. Each has features I appreciate, but I wanted a clearer route display, useful planning and analysis tools, offline maps and activity recording in one free application. Rather than copying a single product, I built the combination I wanted to use myself.',
            motivation: 'This is more than a portfolio project: it is an app I built to solve a problem I experience on my own hikes, trail runs and MTB rides. I enjoy using the tools I create, testing them outdoors and improving them based on real needs. I would love for other people to find TrailNav useful too. It will remain free and open source, and contributions, suggestions and improvements from the community are welcome.',
            data: 'Route files, navigation sessions and downloaded map tiles are stored in the browser; there are no accounts or remote route-sync services. Offline use requires downloading the relevant map area in advance. Browser storage can be cleared by the device, and GPS and compass availability depend on hardware and permissions. Route estimates are aids for planning, not guarantees of arrival time or trail-level map detail.'
        },
        es: {
            category: 'Navegación outdoor · Open source · PWA offline-first',
            summary: 'Una aplicación GPS gratuita y de código abierto para senderismo, trail running y MTB, creada por un aficionado a la montaña que quería una forma mejor de navegar por sus propias rutas.',
            challenge: 'Paso mucho tiempo en la montaña, y registrar actividades y seguir rutas GPX forma parte de mi rutina. Mi Garmin es útil para grabar actividades, pero la visualización de rutas se me queda corta: fondo negro, una vista parcial del recorrido y una interfaz que no me resulta demasiado intuitiva para consultar de un vistazo. También he probado aplicaciones de navegación como Wikiloc, Komoot y Strava. Todas tienen cosas que me gustan, pero quería reunir mis funciones favoritas en una sola aplicación sin depender de suscripciones de pago. Así que decidí desarrollar mi propia herramienta, pensada para la forma en que realmente planifico y sigo mis rutas. Es una de las cosas que más disfruto del desarrollo de software: detectar un problema de mi día a día y construir algo que lo resuelva.',
            features: [
                'Importa rutas GPX, KML y GeoJSON, consulta estadísticas y perfiles de elevación, y recorta o simplifica recorridos sin sobrescribir el archivo original.',
                'Descarga zonas de mapa para utilizarlas sin conexión y sigue rutas con posición GPS en tiempo real, rumbo y referencias de brújula, incluso cuando no hay cobertura móvil.',
                'Graba actividades outdoor y exporta el track GPS real en GPX. Analiza recorridos, calcula tiempos estimados de llegada y consulta información meteorológica a lo largo de la ruta.',
                'Utiliza la aplicación sin cuenta, suscripción ni servicio remoto de sincronización de rutas. Los archivos y mapas descargados se almacenan localmente en el navegador.'
            ],
            engineering: 'La geometría y el análisis de rutas se procesan en módulos locales de TypeScript. Las posiciones GPS se proyectan sobre el recorrido para estimar el progreso, mientras que la edición conserva la ruta original guardando copias modificadas. Los cálculos de tiempo estimado utilizan modelos explícitos de senderismo, no un servicio de predicción entrenado.',
            architecture: 'PWA de una sola página desarrollada con React, MapLibre para los mapas interactivos e IndexedDB para almacenar rutas, ajustes y teselas cartográficas descargadas. El estado de navegación se mantiene separado de las pantallas, de modo que una sesión activa puede continuar al cambiar de vista. El diseño offline-first permite mantener los datos esenciales de navegación en el dispositivo.',
            inspiration: 'TrailNav nace de mi experiencia utilizando un Garmin y aplicaciones de navegación outdoor como Wikiloc, Komoot y Strava. Cada una tiene funciones que valoro, pero quería reunir en una misma herramienta una visualización más clara de las rutas, planificación, análisis, mapas offline y grabación de actividades, todo gratis. En lugar de reproducir una aplicación concreta, desarrollé la combinación de funciones que me gustaría utilizar a mí.',
            motivation: 'Para mí, TrailNav es mucho más que un proyecto de portfolio: es una aplicación creada para resolver un problema que encuentro en mis propias excursiones, salidas de trail running y rutas en MTB. Me gusta utilizar las herramientas que desarrollo, probarlas en la montaña y mejorarlas a partir de necesidades reales. Me encantaría que otras personas también pudieran encontrar útil TrailNav. Siempre será gratuita y de código abierto, y estará abierta a sugerencias, mejoras y aportaciones de la comunidad.',
            data: 'Los archivos de ruta, las sesiones de navegación y las teselas descargadas se almacenan en el navegador; no hay cuentas ni servicios remotos de sincronización de rutas. Para utilizar la aplicación sin conexión hay que descargar previamente la zona cartográfica correspondiente. El dispositivo puede borrar el almacenamiento del navegador, y el GPS y la brújula dependen del hardware y los permisos. Las estimaciones de ruta sirven como referencia para planificar, no garantizan la hora de llegada ni el nivel de detalle cartográfico de los senderos.'
        },
        ca: {
            category: 'Navegació outdoor · Open source · PWA offline-first',
            summary: 'Una aplicació GPS gratuïta i de codi obert per a senderisme, trail running i MTB, creada per un aficionat a la muntanya que volia una manera millor de navegar per les seves pròpies rutes.',
            challenge: 'Passo molt de temps a la muntanya, i enregistrar activitats i seguir rutes GPX forma part de la meva rutina. El meu Garmin és útil per enregistrar activitats, però la visualització de rutes em queda curta: fons negre, una vista parcial del recorregut i una interfície que no em resulta gaire intuïtiva per consultar-la d’un cop d’ull. També he provat aplicacions de navegació com Wikiloc, Komoot i Strava. Totes tenen coses que m’agraden, però volia reunir les meves funcions preferides en una sola aplicació sense dependre de subscripcions de pagament. Per això vaig decidir desenvolupar la meva pròpia eina, pensada per a la manera com realment planifico i segueixo les meves rutes. És una de les coses que més m’agraden del desenvolupament de programari: detectar un problema del meu dia a dia i construir alguna cosa que el resolgui.',
            features: [
                'Importa rutes GPX, KML i GeoJSON, consulta estadístiques i perfils d’elevació, i retalla o simplifica recorreguts sense sobreescriure el fitxer original.',
                'Descarrega zones de mapa per utilitzar-les sense connexió i segueix rutes amb posició GPS en temps real, rumb i referències de brúixola, fins i tot quan no hi ha cobertura mòbil.',
                'Enregistra activitats outdoor i exporta el track GPS real en GPX. Analitza recorreguts, calcula temps estimats d’arribada i consulta informació meteorològica al llarg de la ruta.',
                'Utilitza l’aplicació sense compte, subscripció ni servei remot de sincronització de rutes. Els fitxers i els mapes descarregats s’emmagatzemen localment al navegador.'
            ],
            engineering: 'La geometria i l’anàlisi de rutes es processen en mòduls locals de TypeScript. Les posicions GPS es projecten sobre el recorregut per estimar-ne el progrés, mentre que l’edició conserva la ruta original desant còpies modificades. Els càlculs del temps estimat utilitzen models explícits de senderisme, no un servei de predicció entrenat.',
            architecture: 'PWA d’una sola pàgina desenvolupada amb React, MapLibre per als mapes interactius i IndexedDB per emmagatzemar rutes, ajustos i tessel·les cartogràfiques descarregades. L’estat de navegació es manté separat de les pantalles, de manera que una sessió activa pot continuar en canviar de vista. El disseny offline-first permet mantenir les dades essencials de navegació al dispositiu.',
            inspiration: 'TrailNav neix de la meva experiència utilitzant un Garmin i aplicacions de navegació outdoor com Wikiloc, Komoot i Strava. Cadascuna té funcions que valoro, però volia reunir en una mateixa eina una visualització més clara de les rutes, planificació, anàlisi, mapes offline i enregistrament d’activitats, tot gratuït. En lloc de reproduir una aplicació concreta, vaig desenvolupar la combinació de funcions que m’agradaria utilitzar a mi.',
            motivation: 'Per a mi, TrailNav és molt més que un projecte de portfolio: és una aplicació creada per resoldre un problema que trobo en les meves excursions, sortides de trail running i rutes en MTB. M’agrada utilitzar les eines que desenvolupo, provar-les a la muntanya i millorar-les a partir de necessitats reals. M’encantaria que altres persones també trobessin útil TrailNav. Sempre serà gratuïta i de codi obert, i estarà oberta a suggeriments, millores i aportacions de la comunitat.',
            data: 'Els fitxers de ruta, les sessions de navegació i les tessel·les descarregades s’emmagatzemen al navegador; no hi ha comptes ni serveis remots de sincronització de rutes. Per utilitzar l’aplicació sense connexió cal descarregar prèviament la zona cartogràfica corresponent. El dispositiu pot esborrar l’emmagatzematge del navegador, i el GPS i la brúixola depenen del maquinari i dels permisos. Les estimacions de ruta serveixen com a referència per planificar, no garanteixen l’hora d’arribada ni el nivell de detall cartogràfic dels senders.'
        }
    },
    'trekkingtime': {
        title: 'Trekking Time', imageFolder: 'TrekkingTime', images: [projectImage('files/TrekkingTime/TrekkingTime.webp', 'Route analysis and planning dashboard', 'Panel de análisis y planificación de rutas', 'Panell d’anàlisi i planificació de rutes')], live: 'https://trekkingtime.vercel.app/', repo: 'https://github.com/alexgasconn/TrekkingTime', stack: ['TypeScript', 'React', 'Leaflet', 'Recharts', 'Open-Meteo'],
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
    'race-planner': {
        title: 'Race Planner', imageFolder: 'RacePlanner', images: [projectImage('files/RacePlanner/RacePlanner1.webp', 'Race elevation and pacing plan', 'Desnivel y plan de ritmos de carrera', 'Desnivell i pla de ritmes de cursa'),
        projectImage('files/RacePlanner/RacePlanner2.webp', 'Race plan overview', 'Resumen del plan de carrera', 'Resum del pla de cursa'),
        projectImage('files/RacePlanner/RacePlanner3.webp', 'Race plan details', 'Detalles del plan de carrera', 'Detalls del pla de cursa'),
        projectImage('files/RacePlanner/RacePlanner4.webp', 'Race plan map view', 'Vista del mapa del plan de carrera', 'Vista del mapa del pla de cursa')
        ], live: 'https://run-race-planner.vercel.app/', repo: 'https://github.com/alexgasconn/RacePlanner', stack: ['TypeScript', 'Next.js', 'GPX', 'Chart.js', 'Leaflet'],
        en: {
            category: 'Race planning',
            summary: 'A terrain-aware pacing planner that turns a route and target finish time into a practical, sector-by-sector race plan.',
            challenge: 'A single target pace ignores the climbing, descending and changing demands of a trail course. Race Planner gives runners a route-based way to distribute effort instead of treating every kilometre as equivalent.',
            features: ['Load a GPX route and set a finish-time goal to build a plan broken into course sectors.', 'Use route elevation and terrain context to vary pacing assumptions across the course.', 'Review the course visually through map and chart components, then refine the plan around the race scenario.'],
            engineering: 'The route is the planning backbone: segment-level distance and elevation shape the pacing breakdown, while the target finish time constrains the plan. The interface focuses on making a route-specific plan inspectable rather than presenting one unexplained average pace.',
            architecture: 'A TypeScript and Next.js application combines client-side GPX parsing, chart-based route summaries and Leaflet mapping. The deployed experience is a web app; no account or persistent training-history service is required for route planning.',
            data: 'The route file and planning inputs are supplied by the user. The displayed plan is an estimate: race-day conditions, terrain, fatigue and aid-station delays can change actual results.'
        },
        es: {
            category: 'Planificación de carrera',
            summary: 'Planificador de ritmos adaptado al terreno que convierte una ruta y un tiempo objetivo en un plan de carrera práctico por sectores.',
            challenge: 'Un ritmo único ignora las subidas, bajadas y demandas cambiantes de una carrera de montaña. Race Planner permite distribuir el esfuerzo según la ruta, en vez de tratar cada kilómetro como equivalente.',
            features: ['Carga una ruta GPX y define un tiempo final objetivo para generar un plan dividido por sectores.', 'Utiliza el desnivel y el contexto del terreno para variar las hipótesis de ritmo a lo largo del recorrido.', 'Consulta visualmente el trazado mediante mapa y gráficos, y ajusta el plan al escenario de carrera.'],
            engineering: 'La ruta es la base de la planificación: la distancia y el desnivel de cada tramo determinan el desglose de ritmos, mientras que el tiempo objetivo acota el plan. La interfaz busca que el plan específico de la ruta se pueda inspeccionar, en lugar de mostrar un promedio sin explicación.',
            architecture: 'Aplicación TypeScript y Next.js que combina lectura de GPX en cliente, resúmenes gráficos de ruta y mapas Leaflet. Es una aplicación web; no requiere cuenta ni servicio de historial de entrenamientos para planificar una ruta.',
            data: 'El archivo de ruta y los parámetros de planificación los aporta el usuario. El plan es una estimación: las condiciones del día, el terreno, la fatiga y las paradas pueden cambiar el resultado real.'
        },
        ca: {
            category: 'Planificació de cursa',
            summary: 'Planificador de ritmes adaptat al terreny que converteix una ruta i un temps objectiu en un pla de cursa pràctic per sectors.',
            challenge: 'Un ritme únic ignora les pujades, baixades i demandes canviants d’una cursa de muntanya. Race Planner permet distribuir l’esforç segons la ruta, en lloc de tractar cada quilòmetre com si fos equivalent.',
            features: ['Carrega una ruta GPX i defineix un temps final objectiu per generar un pla dividit per sectors.', 'Utilitza el desnivell i el context del terreny per variar les hipòtesis de ritme al llarg del recorregut.', 'Consulta visualment el traçat amb mapa i gràfics, i ajusta el pla a l’escenari de cursa.'],
            engineering: 'La ruta és la base de la planificació: la distància i el desnivell de cada tram determinen el desglossament de ritmes, mentre que el temps objectiu acota el pla. La interfície busca que el pla específic de la ruta es pugui inspeccionar, en lloc de mostrar una mitjana sense explicació.',
            architecture: 'Aplicació TypeScript i Next.js que combina lectura de GPX al client, resums gràfics de ruta i mapes Leaflet. És una aplicació web; no requereix compte ni servei d’historial d’entrenaments per planificar una ruta.',
            data: 'El fitxer de ruta i els paràmetres de planificació els aporta l’usuari. El pla és una estimació: les condicions del dia, el terreny, la fatiga i les parades poden canviar el resultat real.'
        }
    },
    '100-cims': {
        title: '100 Cims Map',
        imageFolder: '100Cims',
        images: [
            projectImage(
                'files/100Cims/100cims1.png',
                '100 Cims challenge map',
                'Mapa del reto 100 Cims',
                'Mapa del repte dels 100 Cims'
            )
        ],
        live: 'https://mapa100cims.vercel.app/',
        repo: 'https://github.com/alexgasconn/100-Cims-Mapa',
        stack: ['TypeScript', 'Web Workers', 'deck.gl', 'MapLibre', 'GPX / TCX / FIT'],
        en: {
            category: 'Catalonia · Outdoor · Personal project',
            summary: 'A personal mapping tool to track my progress towards completing the FEEC 100 Cims challenge using my Strava activity history.',
            challenge: 'I love spending time in the mountains, and completing the FEEC 100 Cims challenge is a personal goal of mine. Recording my hikes and other outdoor activities on Strava is part of my daily routine, but keeping track of which peaks I had already visited was difficult. I built this app to connect both things: my recorded routes and my progress towards the challenge. It solves a real problem I had, and it is an application I genuinely use.',
            features: [
                'Import a full Strava account export ZIP or select individual GPX, TCX and FIT activity files.',
                'Visualise recorded activities and the official FEEC 100 Cims peaks together on an interactive map, with completed-peak totals and geographic breakdowns.',
                'Adjust the proximity radius to identify peaks near recorded routes, recalculate results and see which activity is associated with each peak.'
            ],
            engineering: 'Large exports are extracted and parsed in a Web Worker to keep the interface responsive. A spatial grid narrows the candidate peaks before Haversine distance calculations, while route-point sampling helps keep the matching workload manageable.',
            architecture: 'A React and TypeScript application uses a dedicated worker for file extraction, format parsing and peak matching. deck.gl renders activity paths and peak markers over a MapLibre map, with peak data bundled into the application.',
            inspiration: 'The project draws on three references: the official FEEC website for the 100 Cims challenge, AllRoutes for inspiration on how recorded routes are displayed, and 100 Cims Map for how peaks are identified and presented. The result is my own tool, built around the specific need to track my personal progress using my Strava history.',
            data: 'Importing and matching happen locally in the browser; activity files are not uploaded. Supported files must contain GPS tracks. Peak detection is based on route proximity rather than confirmed summit visits, so the configurable radius can produce false positives or miss peaks.',
            links: [
                {
                    label: 'Official FEEC 100 Cims challenge',
                    url: 'https://www.feec.cat/activitats/100-cims/'
                },
                {
                    label: 'AllRoutes',
                    url: 'https://allroutes.app/'
                },
                {
                    label: '100 Cims Map',
                    url: 'https://100-cims.vercel.app/'
                }
            ]
        },
        es: {
            category: 'Cataluña · Montaña · Proyecto personal',
            summary: 'Una herramienta cartográfica personal para seguir mi progreso en el reto de los 100 Cims de la FEEC a partir de mi historial de actividades de Strava.',
            challenge: 'Me encanta la montaña y uno de mis objetivos personales es completar el reto de los 100 Cims de la FEEC. Registrar mis excursiones y otras actividades al aire libre en Strava forma parte de mi día a día, pero llevar la cuenta de las cimas que ya había visitado era complicado. Creé esta aplicación para conectar ambas cosas: las rutas que tengo registradas y mi progreso en el reto. Resuelve una necesidad que tenía de verdad y es una aplicación que utilizo habitualmente.',
            features: [
                'Importa el ZIP completo de exportación de Strava o selecciona archivos de actividad GPX, TCX y FIT.',
                'Visualiza las actividades registradas y las cimas oficiales del reto 100 Cims de la FEEC en un mapa interactivo, con totales de cimas completadas y desgloses geográficos.',
                'Ajusta el radio de proximidad para detectar cimas cercanas a las rutas registradas, recalcula los resultados y consulta qué actividad está asociada a cada cima.'
            ],
            engineering: 'La extracción y lectura de exportaciones grandes se ejecutan en un Web Worker para mantener la interfaz fluida. Una cuadrícula espacial reduce las cimas candidatas antes de calcular distancias Haversine, mientras que el muestreo de puntos de las rutas ayuda a mantener controlado el coste de procesamiento.',
            architecture: 'Aplicación React y TypeScript con un worker dedicado a extraer archivos, interpretar formatos y detectar cimas. deck.gl dibuja las rutas y los marcadores sobre un mapa MapLibre, con los datos de las cimas incluidos en la aplicación.',
            inspiration: 'El proyecto toma como referencia tres recursos: la web oficial de la FEEC para el reto de los 100 Cims, AllRoutes como inspiración para visualizar las rutas registradas y 100 Cims Map para la identificación y presentación de las cimas. A partir de estas referencias, desarrollé una herramienta propia adaptada a una necesidad concreta: seguir mi progreso personal a partir de mi historial de Strava.',
            data: 'La importación y la detección se realizan localmente en el navegador; los archivos de actividad no se suben. Los archivos deben contener trazas GPS. La detección se basa en la proximidad a las cimas, no en la confirmación de haber alcanzado la cima, por lo que el radio configurable puede producir falsos positivos o dejar cimas sin detectar.',
            links: [
                {
                    label: 'Reto oficial 100 Cims de la FEEC',
                    url: 'https://www.feec.cat/activitats/100-cims/'
                },
                {
                    label: 'AllRoutes',
                    url: 'https://allroutes.app/'
                },
                {
                    label: '100 Cims Map',
                    url: 'https://100-cims.vercel.app/'
                }
            ]
        },
        ca: {
            category: 'Catalunya · Muntanya · Projecte personal',
            summary: 'Una eina cartogràfica personal per seguir el meu progrés en el repte dels 100 Cims de la FEEC a partir del meu historial d’activitats de Strava.',
            challenge: 'M’encanta la muntanya i un dels meus objectius personals és completar el repte dels 100 Cims de la FEEC. Enregistrar les meves excursions i altres activitats a l’aire lliure a Strava forma part del meu dia a dia, però portar el compte dels cims que ja havia visitat era complicat. Vaig crear aquesta aplicació per connectar totes dues coses: les rutes que tinc enregistrades i el meu progrés en el repte. Resol una necessitat real que tenia i és una aplicació que faig servir habitualment.',
            features: [
                'Importa el ZIP complet d’exportació de Strava o selecciona fitxers d’activitat GPX, TCX i FIT.',
                'Visualitza les activitats enregistrades i els cims oficials del repte dels 100 Cims de la FEEC en un mapa interactiu, amb totals de cims completats i desglossaments geogràfics.',
                'Ajusta el radi de proximitat per detectar cims a prop de les rutes enregistrades, recalcula els resultats i consulta quina activitat està associada a cada cim.'
            ],
            engineering: 'L’extracció i la lectura d’exportacions grans s’executen en un Web Worker per mantenir la interfície fluida. Una graella espacial redueix els cims candidats abans de calcular distàncies Haversine, mentre que el mostreig de punts de les rutes ajuda a mantenir controlat el cost de processament.',
            architecture: 'Aplicació React i TypeScript amb un worker dedicat a extreure fitxers, interpretar formats i detectar cims. deck.gl dibuixa les rutes i els marcadors sobre un mapa MapLibre, amb les dades dels cims incloses a l’aplicació.',
            inspiration: 'El projecte pren com a referència tres recursos: el web oficial de la FEEC per al repte dels 100 Cims, AllRoutes com a inspiració per visualitzar les rutes enregistrades i 100 Cims Map per a la identificació i presentació dels cims. A partir d’aquestes referències, vaig desenvolupar una eina pròpia adaptada a una necessitat concreta: seguir el meu progrés personal a partir de l’historial de Strava.',
            data: 'La importació i la detecció es fan localment al navegador; els fitxers d’activitat no es pugen. Els fitxers han de contenir traces GPS. La detecció es basa en la proximitat als cims, no en la confirmació d’haver-hi arribat, de manera que el radi configurable pot produir falsos positius o deixar cims sense detectar.',
            links: [
                {
                    label: 'Repte oficial dels 100 Cims de la FEEC',
                    url: 'https://www.feec.cat/activitats/100-cims/'
                },
                {
                    label: 'AllRoutes',
                    url: 'https://allroutes.app/'
                },
                {
                    label: '100 Cims Map',
                    url: 'https://100-cims.vercel.app/'
                }
            ]
        }
    },

    oasis: {
        title: 'Oasis', imageFolder: 'Oasis', images: [
            projectImage('files/Oasis/Oasis1.png', 'Nearby fountains and compass', 'Fuentes cercanas y brújula', 'Fonts properes i brúixola'),
            projectImage('files/Oasis/Oasis2.jpeg', 'Search and map settings', 'Ajustes de búsqueda y mapa', 'Ajustos de cerca i mapa'),
            projectImage('files/Oasis/Oasis3.jpeg', 'Water source details and directions', 'Detalles de la fuente y cómo llegar', 'Detalls de la font i com arribar-hi'),
            projectImage('files/Oasis/Oasis4.jpeg', 'Nearby water sources in list view', 'Fuentes cercanas en vista de lista', 'Fonts properes en vista de llista')
        ], live: 'https://www.oasis-search.vercel.app/', repo: 'https://github.com/alexgasconn/Oasis', stack: ['React', 'TypeScript', 'Leaflet', 'OpenStreetMap', 'PWA'],
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
    'gpx-master': {
        title: 'GPX Master', imageFolder: 'GPXMaster', images: [
            projectImage('files/GPXMaster/GPXMaster1.png', 'Batch selection and track repair tools', 'Selección múltiple y reparación de tracks', 'Selecció múltiple i reparació de tracks'),
            projectImage('files/GPXMaster/GPXMaster2.png', 'Multi-track map editor and statistics', 'Editor cartográfico multirruta y estadísticas', 'Editor cartogràfic multiruta i estadístiques')
        ], live: 'https://gpx-master.vercel.app/', repo: 'https://github.com/alexgasconn/GPX-Master', stack: ['React', 'TypeScript', 'Leaflet', 'GPX', 'Valhalla'],
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
        title: 'GPX Track Analyzer', imageFolder: 'GPXAnalyzer', images: [projectImage('files/GPXAnalyzer/GPX.webp', 'GPS route and terrain analysis', 'Análisis de ruta GPS y terreno', 'Anàlisi de ruta GPS i terreny')], live: 'https://gpx-analyzer.streamlit.app/', repo: 'https://github.com/alexgasconn/GPX-Analyzer', stack: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'GPX'],
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
        title: 'StravaStats',
        imageFolder: 'Strav',
        images: [
            projectImage(
                'files/Strava/Strava.png',
                'Race pace prediction chart',
                'Gráfico de predicción de ritmo',
                'Gràfic de predicció de ritme'
            )
        ],
        live: 'https://stravastats.vercel.app/',
        repo: 'https://github.com/alexgasconn/StravaStats',
        stack: [
            'JavaScript ES modules',
            'Strava API v3',
            'Vercel Functions',
            'IndexedDB',
            'Chart.js',
            'D3.js',
            'Leaflet',
            'Open-Meteo API',
            'Gemini API',
            'PWA'
        ],
        en: {
            category: 'Sports analytics · Endurance training · Data visualisation',
            summary: 'A free, feature-rich sports analytics platform that turns a Strava activity history into an interactive workspace for understanding training load, tracking progress, analysing performance and making better-informed decisions across running, cycling and swimming.',

            challenge: 'I am a regular Strava user and endurance athlete. Over time, activity history becomes a valuable source of information, but the standard interface does not always make it easy to answer more specific questions about training. How has my running volume changed over the last few months? Am I becoming more consistent? Which shoes are approaching the end of their useful life? How does temperature affect my pace? What race time could my recent performances support? I wanted to go beyond individual activity summaries and understand the bigger picture. StravaStats grew into a personal sports analytics project that brings these questions together, using the data athletes already record instead of asking them to maintain spreadsheets or manually export files.',

            features: [
                'Training dashboard: Track daily training stress, acute and chronic training load (ATL and CTL), training stress balance (TSB), rolling load, activity consistency and progress towards distance, time or activity-count goals.',
                'Running analytics: Analyse monthly and weekly mileage, frequency, pace distributions, distance and elevation profiles, pace-versus-distance relationships, accumulated volume, personal progression, Eddington numbers, shoe usage and individual performances.',
                'Cycling analytics: Break down rides by road cycling, MTB, gravel, indoor cycling and other bike types. Examine speed, distance, elevation, climbing ratios, power-versus-speed relationships, weekly trends, accumulated distance and performance by bike.',
                'Swimming analytics: Separate pool and open-water sessions, analyse pace per 100 metres, estimate pool length from recorded distances and track changes in swimming volume, pace and aerobic efficiency.',
                'Athlete profile: Explore training zones, personal records, activity frequency, start-time distributions, group sizes and training patterns by day of the week, month, season and year.',
                'Race predictor: Estimate potential race times using personal bests, Riegel scaling, VDOT-style performance transfer and personal curve fitting. Adjust the contribution of different models and compare conservative, moderate and aggressive scenarios.',
                'Equipment tracking: Monitor mileage, usage frequency, first and last use, average pace and estimated remaining lifespan for running shoes, bikes and other registered equipment.',
                'Activity search and calendar: Search and filter activities by sport, name, date, distance, duration, heart rate and training load. Browse week, month and year views to identify streaks, training gaps and changes in routine.',
                'Weather analysis: Enrich geolocated runs with historical weather data and investigate relationships between pace and temperature, rainfall, wind, humidity, cloud cover and other environmental conditions.',
                'Interactive maps: Display recorded routes and activity-density heatmaps, filter by sport and date, and explore where training takes place.',
                'Annual reports: Generate a year-in-sport retrospective with distance, duration, elevation gain, activity counts, active days, longest sessions, monthly volume, top weeks and year-over-year comparisons.',
                'Detailed activity analysis: Inspect individual activities using GPS, elevation, heart-rate, speed, cadence and other available streams. Examine splits, climbs, stops, segments, fatigue indicators and sport-specific metrics, then export analysed data as GPX, CSV or JSON.',
                'Optional AI coach: Ask questions about your training history through a conversational interface that uses summaries of your activities, performance indicators, equipment and recent training volume as context.'
            ],

            engineering: 'The project includes a complete data-processing pipeline rather than relying exclusively on the metrics returned by Strava. Activity history is retrieved through paginated API requests, validated, cached and enriched with derived fields. The preprocessing layer handles missing values, GPS anomalies, elevation outliers, speed spikes, sport-specific pace calculations and training-load estimates. Detailed activity analysis reconstructs structured tracks from individual streams before applying filtering, segmentation, climb and stop detection, and sport-specific analysis. Derived metrics include aerobic efficiency, rolling training volume, training-load indicators and performance-related features. The pipeline uses deterministic formulas and explicit heuristics wherever possible, keeping calculations inspectable and allowing results to be recomputed from the underlying activity data.',

            architecture: 'The application uses a static frontend built with native JavaScript ES modules, supported by Vercel serverless functions for Strava OAuth, token refresh and API requests. Dedicated API endpoints retrieve athlete information, training zones, activity history, gear metadata, individual activity details and activity streams. Most preprocessing, aggregation and visualisation happens in the browser. IndexedDB stores cached activity payloads, while localStorage holds smaller items such as preferences, session metadata and cache timestamps. The interface is organised into 13 specialised tabs, with dedicated pages for detailed activity analysis. Chart.js handles most charts, D3.js provides additional visualisation capabilities, and Leaflet renders interactive maps and activity heatmaps. A service worker and web app manifest provide installability and static-asset caching.',

            analytics: 'The analytical layer combines time-series processing, statistical summaries, geospatial calculations and sport-specific models. Training-load calculations include daily training stress, 7-day acute load, 42-day chronic load and training stress balance. The race predictor combines Riegel scaling, VDOT-style estimates, direct personal-best matching and individual curve fitting. Activity analysis includes GPS spike interpolation, altitude anomaly filtering, smoothing of noisy streams, climb and stop detection, route segmentation and derived physiological or fatigue indicators. Weather enrichment joins running activities with historical environmental data based on their recorded locations and times. These methods are designed to be understandable and useful for personal analysis; they are not presented as clinically validated models or guaranteed race predictions.',

            data: 'Strava authentication uses OAuth 2.0, with token exchange and refresh handled by the serverless API layer. There is no application database: activity caches, preferences and analysis state are stored in the browser. Historical weather data comes from Open-Meteo. The optional AI coach connects to Gemini using an API key supplied by the user, which is stored in browser localStorage. Most analytical calculations run locally after the data has been retrieved. Results depend on the quality and completeness of the original activities, available GPS and sensor streams, and the assumptions behind each model. Training-load indicators, fatigue estimates and race predictions should be treated as decision-support tools rather than medical advice or guarantees of performance.'
        },

        es: {
            category: 'Analítica deportiva · Entrenamiento de resistencia · Visualización de datos',

            summary: 'Una plataforma gratuita de analítica deportiva que transforma el historial de Strava en un espacio interactivo para entender la carga de entrenamiento, seguir la evolución del rendimiento y analizar actividades de running, ciclismo y natación.',

            challenge: 'Soy usuario habitual de Strava y practico deportes de resistencia. Con el tiempo, el historial de actividades se convierte en una fuente de información muy valiosa, pero la interfaz habitual no siempre permite responder fácilmente a preguntas más concretas sobre el entrenamiento. ¿Cómo ha evolucionado mi volumen de running en los últimos meses? ¿Estoy entrenando con más regularidad? ¿Qué zapatillas se acercan al final de su vida útil? ¿Cómo afecta la temperatura a mi ritmo? ¿Qué marca podría conseguir en una carrera según mis últimos resultados? Quería ir más allá del resumen de cada actividad y entender el conjunto. StravaStats nació como un proyecto personal de analítica deportiva para reunir estas respuestas utilizando los datos que los deportistas ya registran, sin tener que mantener hojas de cálculo ni exportar archivos manualmente.',

            features: [
                'Dashboard de entrenamiento: Consulta la carga diaria, la carga aguda y crónica (ATL y CTL), el balance de entrenamiento (TSB), las tendencias de carga, la regularidad y el progreso hacia objetivos de distancia, tiempo o número de actividades.',
                'Analítica de running: Analiza kilómetros semanales y mensuales, frecuencia, distribuciones de ritmo, distancia, desnivel, relaciones entre ritmo y distancia, volumen acumulado, progresión personal, números de Eddington, uso de zapatillas y mejores actividades.',
                'Analítica de ciclismo: Desglosa las salidas por carretera, MTB, gravel, ciclismo indoor y otros tipos de bicicleta. Examina velocidad, distancia, desnivel, ratios de ascenso, relaciones entre potencia y velocidad, tendencias semanales y rendimiento por bicicleta.',
                'Analítica de natación: Separa piscina y aguas abiertas, analiza el ritmo por cada 100 metros, estima la longitud de piscina a partir de las distancias registradas y sigue la evolución del volumen, el ritmo y la eficiencia aeróbica.',
                'Perfil del deportista: Explora zonas de entrenamiento, marcas personales, frecuencia de actividad, horarios de salida, tamaño de los grupos y patrones por día de la semana, mes, temporada y año.',
                'Predictor de carreras: Estima marcas potenciales mediante los récords personales, el modelo de Riegel, transferencias de rendimiento al estilo VDOT y ajuste de curvas personales. Permite modificar la contribución de cada modelo y comparar escenarios conservadores, moderados y agresivos.',
                'Seguimiento del material: Controla kilómetros, frecuencia de uso, primera y última utilización, ritmo medio y vida útil estimada de zapatillas, bicicletas y otros elementos registrados.',
                'Buscador y calendario: Busca y filtra actividades por deporte, nombre, fecha, distancia, duración, frecuencia cardíaca y carga de entrenamiento. Consulta vistas semanales, mensuales y anuales para identificar rachas, interrupciones y cambios de rutina.',
                'Análisis meteorológico: Enriquece las actividades de running geolocalizadas con datos meteorológicos históricos para estudiar la relación entre ritmo, temperatura, lluvia, viento, humedad, nubosidad y otras condiciones ambientales.',
                'Mapas interactivos: Visualiza las rutas registradas y los mapas de calor de densidad de actividades, filtra por deporte y fecha y analiza dónde se concentra el entrenamiento.',
                'Informes anuales: Genera un resumen del año deportivo con distancia, tiempo, desnivel, número de actividades, días activos, sesiones más largas, volumen mensual, mejores semanas y comparativas entre años.',
                'Análisis detallado de actividades: Examina actividades individuales utilizando los datos GPS, altitud, frecuencia cardíaca, velocidad, cadencia y otros streams disponibles. Analiza parciales, subidas, paradas, segmentos e indicadores de fatiga, y exporta los resultados en GPX, CSV o JSON.',
                'Asistente de IA opcional: Consulta tu historial de entrenamiento mediante una interfaz conversacional que utiliza como contexto resúmenes de actividades, indicadores de rendimiento, material y volumen reciente.'
            ],

            engineering: 'El proyecto incorpora un pipeline completo de procesamiento de datos, en lugar de depender únicamente de las métricas proporcionadas por Strava. El historial se obtiene mediante peticiones paginadas a la API, se valida, se almacena en caché y se enriquece con métricas derivadas. La capa de preprocesamiento gestiona valores ausentes, anomalías GPS, errores de altitud, picos de velocidad, cálculos de ritmo específicos de cada deporte y estimaciones de carga de entrenamiento. El análisis detallado reconstruye tracks estructurados a partir de los streams de cada actividad y aplica filtrado, segmentación, detección de subidas y paradas, y análisis específicos por deporte. Entre las métricas calculadas se incluyen la eficiencia aeróbica, las tendencias de volumen, los indicadores de carga y las variables relacionadas con el rendimiento. Se utilizan fórmulas deterministas y heurísticas explícitas siempre que es posible, de modo que los cálculos sean comprensibles y puedan volver a obtenerse a partir de los datos originales.',

            architecture: 'La aplicación utiliza un frontend estático desarrollado con módulos JavaScript nativos y funciones serverless de Vercel para gestionar OAuth de Strava, renovar tokens y realizar peticiones a la API. Hay endpoints específicos para obtener información del deportista, zonas de entrenamiento, historial de actividades, material, detalles de actividades y streams. La mayor parte del procesamiento, las agregaciones y las visualizaciones se ejecuta en el navegador. IndexedDB almacena las actividades en caché, mientras que localStorage guarda preferencias, metadatos de sesión y marcas temporales de la caché. La interfaz se organiza en 13 secciones especializadas, además de páginas dedicadas al análisis detallado de actividades. Chart.js gestiona la mayoría de los gráficos, D3.js aporta funciones adicionales de visualización y Leaflet permite representar mapas interactivos y mapas de calor. Un service worker y un manifiesto PWA permiten instalar la aplicación y mantener en caché los recursos estáticos.',

            analytics: 'La capa analítica combina procesamiento de series temporales, estadística descriptiva, cálculos geoespaciales y modelos específicos de cada deporte. Los cálculos de carga incluyen el estrés diario, la carga aguda de 7 días, la carga crónica de 42 días y el balance de entrenamiento. El predictor de carreras combina el modelo de Riegel, estimaciones al estilo VDOT, comparación directa con marcas personales y ajuste de curvas individuales. El análisis de actividades incorpora interpolación de errores GPS, filtrado de anomalías de altitud, suavizado de señales, detección de subidas y paradas, segmentación de recorridos e indicadores fisiológicos o de fatiga. El enriquecimiento meteorológico relaciona las actividades de running con datos ambientales históricos según su ubicación y hora. Estos métodos están pensados para ofrecer información comprensible y útil para el análisis personal, no para presentarse como modelos clínicamente validados ni como predicciones garantizadas.',

            data: 'La autenticación con Strava utiliza OAuth 2.0, con el intercambio y la renovación de tokens gestionados por la capa serverless. No hay una base de datos propia: las cachés de actividades, preferencias y estado del análisis se almacenan en el navegador. Los datos meteorológicos históricos proceden de Open-Meteo. El asistente de IA opcional se conecta a Gemini mediante una clave API proporcionada por el usuario y almacenada en localStorage. La mayoría de los cálculos analíticos se ejecutan localmente una vez recuperados los datos. Los resultados dependen de la calidad y la integridad de las actividades originales, de los streams GPS y de sensores disponibles y de las hipótesis de cada modelo. Los indicadores de carga, las estimaciones de fatiga y las predicciones de carrera son herramientas de apoyo a la toma de decisiones, no consejos médicos ni garantías de rendimiento.'
        },

        ca: {
            category: 'Analítica esportiva · Entrenament de resistència · Visualització de dades',

            summary: 'Una plataforma gratuïta d’analítica esportiva que transforma l’historial de Strava en un espai interactiu per entendre la càrrega d’entrenament, seguir l’evolució del rendiment i analitzar activitats de running, ciclisme i natació.',

            challenge: 'Soc usuari habitual de Strava i practico esports de resistència. Amb el temps, l’historial d’activitats es converteix en una font d’informació molt valuosa, però la interfície habitual no sempre permet respondre fàcilment preguntes més concretes sobre l’entrenament. Com ha evolucionat el meu volum de running els darrers mesos? Estic entrenant amb més regularitat? Quines sabatilles s’acosten al final de la seva vida útil? Com afecta la temperatura al meu ritme? Quina marca podria aconseguir en una cursa segons els meus últims resultats? Volia anar més enllà del resum de cada activitat i entendre el conjunt. StravaStats va néixer com un projecte personal d’analítica esportiva per reunir aquestes respostes utilitzant les dades que els esportistes ja enregistren, sense haver de mantenir fulls de càlcul ni exportar fitxers manualment.',

            features: [
                'Dashboard d’entrenament: Consulta la càrrega diària, la càrrega aguda i crònica (ATL i CTL), el balanç d’entrenament (TSB), les tendències de càrrega, la regularitat i el progrés cap a objectius de distància, temps o nombre d’activitats.',
                'Analítica de running: Analitza quilòmetres setmanals i mensuals, freqüència, distribucions de ritme, distància, desnivell, relacions entre ritme i distància, volum acumulat, progressió personal, nombres d’Eddington, ús de sabatilles i millors activitats.',
                'Analítica de ciclisme: Desglossa les sortides per carretera, MTB, gravel, ciclisme indoor i altres tipus de bicicleta. Examina velocitat, distància, desnivell, ràtios d’ascens, relacions entre potència i velocitat, tendències setmanals i rendiment per bicicleta.',
                'Analítica de natació: Separa piscina i aigües obertes, analitza el ritme per cada 100 metres, estima la longitud de la piscina a partir de les distàncies enregistrades i segueix l’evolució del volum, el ritme i l’eficiència aeròbica.',
                'Perfil de l’esportista: Explora zones d’entrenament, marques personals, freqüència d’activitat, horaris de sortida, mida dels grups i patrons per dia de la setmana, mes, temporada i any.',
                'Predictor de curses: Estima marques potencials mitjançant els rècords personals, el model de Riegel, transferències de rendiment a l’estil VDOT i ajust de corbes personals. Permet modificar la contribució de cada model i comparar escenaris conservadors, moderats i agressius.',
                'Seguiment del material: Controla quilòmetres, freqüència d’ús, primera i última utilització, ritme mitjà i vida útil estimada de sabatilles, bicicletes i altres elements registrats.',
                'Cercador i calendari: Cerca i filtra activitats per esport, nom, data, distància, durada, freqüència cardíaca i càrrega d’entrenament. Consulta vistes setmanals, mensuals i anuals per identificar ratxes, interrupcions i canvis de rutina.',
                'Anàlisi meteorològica: Enriqueix les activitats de running geolocalitzades amb dades meteorològiques històriques per estudiar la relació entre ritme, temperatura, pluja, vent, humitat, nuvolositat i altres condicions ambientals.',
                'Mapes interactius: Visualitza les rutes enregistrades i els mapes de calor de densitat d’activitats, filtra per esport i data i analitza on es concentra l’entrenament.',
                'Informes anuals: Genera un resum de l’any esportiu amb distància, temps, desnivell, nombre d’activitats, dies actius, sessions més llargues, volum mensual, millors setmanes i comparatives entre anys.',
                'Anàlisi detallada d’activitats: Examina activitats individuals utilitzant les dades GPS, altitud, freqüència cardíaca, velocitat, cadència i altres streams disponibles. Analitza parcials, pujades, aturades, segments i indicadors de fatiga, i exporta els resultats en GPX, CSV o JSON.',
                'Assistent d’IA opcional: Consulta el teu historial d’entrenament mitjançant una interfície conversacional que utilitza com a context resums d’activitats, indicadors de rendiment, material i volum recent.'
            ],

            engineering: 'El projecte incorpora un pipeline complet de processament de dades, en lloc de dependre únicament de les mètriques proporcionades per Strava. L’historial s’obté mitjançant peticions paginades a l’API, es valida, s’emmagatzema a la memòria cau i s’enriqueix amb mètriques derivades. La capa de preprocessament gestiona valors absents, anomalies GPS, errors d’altitud, pics de velocitat, càlculs de ritme específics de cada esport i estimacions de càrrega d’entrenament. L’anàlisi detallada reconstrueix tracks estructurats a partir dels streams de cada activitat i aplica filtratge, segmentació, detecció de pujades i aturades, i anàlisi específica per esport. Entre les mètriques calculades hi ha l’eficiència aeròbica, les tendències de volum, els indicadors de càrrega i les variables relacionades amb el rendiment. S’utilitzen fórmules deterministes i heurístiques explícites sempre que és possible, de manera que els càlculs siguin comprensibles i es puguin tornar a obtenir a partir de les dades originals.',

            architecture: 'L’aplicació utilitza un frontend estàtic desenvolupat amb mòduls JavaScript natius i funcions serverless de Vercel per gestionar OAuth de Strava, renovar tokens i fer peticions a l’API. Hi ha endpoints específics per obtenir informació de l’esportista, zones d’entrenament, historial d’activitats, material, detalls d’activitats i streams. La major part del processament, les agregacions i les visualitzacions s’executa al navegador. IndexedDB emmagatzema les activitats a la memòria cau, mentre que localStorage desa preferències, metadades de sessió i marques temporals de la memòria cau. La interfície s’organitza en 13 seccions especialitzades, a més de pàgines dedicades a l’anàlisi detallada d’activitats. Chart.js gestiona la majoria dels gràfics, D3.js aporta funcions addicionals de visualització i Leaflet permet representar mapes interactius i mapes de calor. Un service worker i un manifest PWA permeten instal·lar l’aplicació i mantenir a la memòria cau els recursos estàtics.',

            analytics: 'La capa analítica combina processament de sèries temporals, estadística descriptiva, càlculs geoespacials i models específics de cada esport. Els càlculs de càrrega inclouen l’estrès diari, la càrrega aguda de 7 dies, la càrrega crònica de 42 dies i el balanç d’entrenament. El predictor de curses combina el model de Riegel, estimacions a l’estil VDOT, comparació directa amb marques personals i ajust de corbes individuals. L’anàlisi d’activitats incorpora interpolació d’errors GPS, filtratge d’anomalies d’altitud, suavitzat de senyals, detecció de pujades i aturades, segmentació de recorreguts i indicadors fisiològics o de fatiga. L’enriquiment meteorològic relaciona les activitats de running amb dades ambientals històriques segons la ubicació i l’hora. Aquests mètodes estan pensats per oferir informació comprensible i útil per a l’anàlisi personal, no per presentar-se com a models clínicament validats ni com a prediccions garantides.',

            data: 'L’autenticació amb Strava utilitza OAuth 2.0, amb l’intercanvi i la renovació de tokens gestionats per la capa serverless. No hi ha una base de dades pròpia: les memòries cau d’activitats, les preferències i l’estat de l’anàlisi s’emmagatzemen al navegador. Les dades meteorològiques històriques provenen d’Open-Meteo. L’assistent d’IA opcional es connecta a Gemini mitjançant una clau API proporcionada per l’usuari i emmagatzemada a localStorage. La majoria dels càlculs analítics s’executen localment un cop recuperades les dades. Els resultats depenen de la qualitat i la integritat de les activitats originals, dels streams GPS i dels sensors disponibles i de les hipòtesis de cada model. Els indicadors de càrrega, les estimacions de fatiga i les prediccions de cursa són eines de suport a la presa de decisions, no consells mèdics ni garanties de rendiment.'
        }
    },
    'player-recommender': {
        title: 'Player Recommender',
        imageFolder: 'PlayerRecommender',
        images: [
            projectImage(
                'files/PlayerRecommender/Players.png',
                'Player comparison dashboard',
                'Panel de comparación de jugadores',
                'Panell de comparació de jugadors'
            )
        ],
        live: 'https://player-recommender.streamlit.app/',
        repo: 'https://github.com/alexgasconn/player-recommender',
        stack: ['Python', 'Pandas', 'Scikit-learn', 'Feature Engineering', 'PCA', 'K-means', 'Streamlit'],

        en: {
            category: 'Sports Data Science · Machine Learning · Football Scouting',

            summary: 'A personal sports data science project that uses player statistics and unsupervised machine learning to identify footballers with similar performance profiles.',

            challenge: 'After completing my postgraduate studies in sports analytics at UPC and Barça Innovation Hub, I wanted to put what I had learned into practice with a concrete football scouting problem. Comparing players across dozens of performance metrics is difficult to do manually. I built this tool to explore how data preparation, feature engineering and machine learning could help identify statistically similar players and make the results easy to interpret.',

            features: [
                'Explore football player statistics from FBref and select a player to discover candidates with similar statistical profiles.',
                'Prepare and select performance features to build a meaningful representation of each player.',
                'Apply PCA to reduce dimensionality and K-means clustering to explore groups of players with similar profiles.',
                'Compare players through interactive radar charts that make similarities and differences easier to understand.',
                'Explore how statistical similarity can support player discovery and generate new scouting ideas.'
            ],

            engineering: 'The main learning experience was taking a sports data science workflow from raw statistics to an interactive tool. The project involved data preparation, feature engineering, feature selection, dimensionality reduction and unsupervised learning. Rather than treating the model as a black box, I wanted to visualize the results and understand why players appeared similar. It was a practical way to experiment with machine learning on a real sports use case.',

            architecture: 'A Python and Streamlit application that combines data processing, Scikit-learn models and interactive visualizations. PCA and K-means support the similarity exploration, while radar charts help users inspect individual player profiles.',

            data: 'The project uses football statistics from FBref. Similarity depends on the selected features and available data, so it should be treated as a starting point for scouting rather than a definitive measure of player quality, tactical role or future performance.'
        },

        es: {
            category: 'Data Science deportivo · Machine Learning · Scouting de fútbol',

            summary: 'Proyecto personal de Data Science deportivo que utiliza estadísticas de jugadores y machine learning no supervisado para encontrar futbolistas con perfiles de rendimiento similares.',

            challenge: 'Después de terminar el posgrado en Sports Analytics de la UPC y Barça Innovation Hub, quería poner en práctica lo aprendido con un problema concreto de scouting. Comparar jugadores a partir de decenas de métricas de rendimiento es complicado manualmente. Construí esta herramienta para explorar cómo la preparación de datos, la ingeniería de variables y el machine learning podían ayudar a encontrar jugadores estadísticamente similares y presentar los resultados de forma comprensible.',

            features: [
                'Explora estadísticas de futbolistas de FBref y selecciona un jugador para encontrar candidatos con perfiles estadísticos similares.',
                'Prepara y selecciona variables de rendimiento para construir una representación útil de cada jugador.',
                'Aplica PCA para reducir la dimensionalidad y clustering K-means para explorar grupos de jugadores con perfiles parecidos.',
                'Compara jugadores mediante gráficos radar interactivos que facilitan la interpretación de sus similitudes y diferencias.',
                'Explora cómo la similitud estadística puede ayudar a descubrir jugadores y generar nuevas ideas para el scouting.'
            ],

            engineering: 'El principal aprendizaje fue llevar un flujo de Data Science deportivo desde los datos estadísticos hasta una herramienta interactiva. Trabajé con preparación de datos, feature engineering, selección de variables, reducción de dimensionalidad y aprendizaje no supervisado. No quería tratar el modelo como una caja negra: quería visualizar los resultados y entender por qué dos jugadores aparecían como similares. Fue una forma práctica de experimentar con machine learning aplicado a un caso de uso real del deporte.',

            architecture: 'Aplicación desarrollada con Python y Streamlit que combina procesamiento de datos, modelos de Scikit-learn y visualizaciones interactivas. PCA y K-means permiten explorar similitudes, mientras que los gráficos radar ayudan a analizar el perfil de cada jugador.',

            data: 'El proyecto utiliza estadísticas de fútbol de FBref. La similitud depende de las variables seleccionadas y de los datos disponibles, por lo que debe entenderse como un punto de partida para el scouting, no como una medida definitiva de calidad, función táctica o rendimiento futuro.'
        },

        ca: {
            category: 'Data Science esportiva · Machine Learning · Scouting de futbol',

            summary: 'Projecte personal de Data Science esportiva que utilitza estadístiques de jugadors i machine learning no supervisat per trobar futbolistes amb perfils de rendiment similars.',

            challenge: 'Després d’acabar el postgrau en Sports Analytics de la UPC i Barça Innovation Hub, volia posar en pràctica els coneixements adquirits amb un problema concret de scouting. Comparar jugadors a partir de desenes de mètriques de rendiment és complicat manualment. Vaig construir aquesta eina per explorar com la preparació de dades, l’enginyeria de variables i el machine learning podien ajudar a trobar jugadors estadísticament semblants i presentar els resultats d’una manera fàcil d’interpretar.',

            features: [
                'Explora estadístiques de futbolistes de FBref i selecciona un jugador per trobar candidats amb perfils estadístics similars.',
                'Prepara i selecciona variables de rendiment per construir una representació útil de cada jugador.',
                'Aplica PCA per reduir la dimensionalitat i clustering K-means per explorar grups de jugadors amb perfils semblants.',
                'Compara jugadors mitjançant gràfics radar interactius que faciliten la interpretació de les similituds i diferències.',
                'Explora com la similitud estadística pot ajudar a descobrir jugadors i generar noves idees per al scouting.'
            ],

            engineering: 'El principal aprenentatge va ser portar un flux de Data Science esportiva des de les dades estadístiques fins a una eina interactiva. Vaig treballar amb preparació de dades, feature engineering, selecció de variables, reducció de dimensionalitat i aprenentatge no supervisat. No volia tractar el model com una caixa negra: volia visualitzar els resultats i entendre per què dos jugadors apareixien com a similars. Va ser una manera pràctica d’experimentar amb machine learning aplicat a un cas d’ús real de l’esport.',

            architecture: 'Aplicació desenvolupada amb Python i Streamlit que combina processament de dades, models de Scikit-learn i visualitzacions interactives. PCA i K-means permeten explorar similituds, mentre que els gràfics radar ajuden a analitzar el perfil de cada jugador.',

            data: 'El projecte utilitza estadístiques de futbol de FBref. La similitud depèn de les variables seleccionades i de les dades disponibles, de manera que s’ha d’entendre com un punt de partida per al scouting, no com una mesura definitiva de qualitat, funció tàctica o rendiment futur.'
        }
    },
    'transfermarkt-pipeline': {
        title: 'Transfermarkt Pipeline',
        imageFolder: 'Transfermarkt',
        images: [
            projectImage(
                'files/Transfermarkt/Transfermarkt.webp',
                'Player data application',
                'Aplicación de datos de jugadores',
                'Aplicació de dades de jugadors'
            )
        ],
        live: null,
        repo: 'https://github.com/alexgasconn/transfermarkt-scraper-api',
        stack: ['Python', 'Pandas', 'Web Scraping', 'FastAPI', 'Streamlit', 'Data Pipelines'],

        en: {
            category: 'Sports Data Engineering · Data Science · Football Analytics',

            summary: 'A personal football data project built to practice the full journey from collecting player information to serving structured data through an API and exploring it in an interactive application.',

            challenge: 'After completing my postgraduate studies in sports analytics at UPC and Barça Innovation Hub, I wanted to go beyond analysing an existing dataset and learn how to build the data workflow behind a useful application. Football information is spread across player profiles and web pages, so I explored how to collect it, structure it and make it accessible for further analysis. The result connects data acquisition, an API and an interactive interface in one project.',

            features: [
                'Collect and structure football player information from Transfermarkt.',
                'Transform information extracted from web pages into structured records that are easier to query and analyse.',
                'Expose the collected data through a FastAPI service.',
                'Explore the resulting dataset through a Streamlit interface.',
                'Connect data acquisition, backend delivery and visualization in a single end-to-end workflow.'
            ],

            engineering: 'This project helped me practise the less visible but essential part of data science: getting data into a usable state before analysing it. I worked on the collection and structuring workflow and connected it to an API and a user-facing interface. The main idea was to build something more useful than a one-off notebook: a repeatable data pipeline that makes information available to other parts of an application.',

            architecture: 'A Python-based workflow that collects data from Transfermarkt, exposes it through a FastAPI backend and provides an interactive exploration layer with Streamlit. Separating collection, API delivery and presentation makes the different parts of the data product easier to understand and maintain.',

            data: 'The project uses information from Transfermarkt. Source pages and availability may change, and extracted values should be interpreted in the context of their source and retrieval time. The repository is a learning project focused on data collection and delivery, rather than an official or guaranteed-complete data service.'
        },

        es: {
            category: 'Ingeniería de datos deportivos · Data Science · Analítica de fútbol',

            summary: 'Proyecto personal de datos de fútbol para practicar el proceso completo: recopilar información de jugadores, servir datos estructurados mediante una API y explorarlos desde una aplicación interactiva.',

            challenge: 'Después de terminar el posgrado en Sports Analytics de la UPC y Barça Innovation Hub, quería ir más allá de analizar un dataset existente y aprender a construir el flujo de datos que hay detrás de una aplicación útil. La información futbolística está repartida entre perfiles de jugadores y páginas web, así que exploré cómo recopilarla, estructurarla y dejarla disponible para futuros análisis. El resultado conecta la obtención de datos, una API y una interfaz interactiva en un mismo proyecto.',

            features: [
                'Recopila y estructura información de futbolistas de Transfermarkt.',
                'Transforma información extraída de páginas web en registros estructurados, más fáciles de consultar y analizar.',
                'Expone los datos recopilados mediante un servicio FastAPI.',
                'Permite explorar el conjunto de datos desde una interfaz desarrollada con Streamlit.',
                'Conecta la obtención de datos, el backend y la visualización en un flujo de trabajo integral.'
            ],

            engineering: 'Este proyecto me permitió practicar una parte menos visible, pero fundamental, de la Data Science: conseguir que los datos estén en condiciones de utilizarse antes de analizarlos. Trabajé en el proceso de recopilación y estructuración y lo conecté con una API y una interfaz de usuario. La idea era construir algo más útil que un notebook puntual: un pipeline de datos reutilizable que pusiera la información a disposición de otras partes de una aplicación.',

            architecture: 'Flujo de trabajo en Python que recopila datos de Transfermarkt, los expone mediante un backend FastAPI y ofrece una capa de exploración interactiva con Streamlit. Separar la recopilación, la entrega mediante API y la presentación facilita entender y mantener las diferentes partes del producto de datos.',

            data: 'El proyecto utiliza información de Transfermarkt. Las páginas y la disponibilidad de la fuente pueden cambiar, por lo que los valores extraídos deben interpretarse teniendo en cuenta su origen y fecha de obtención. Es un proyecto de aprendizaje centrado en la recopilación y distribución de datos, no un servicio oficial ni una fuente que garantice una cobertura completa.'
        },

        ca: {
            category: 'Enginyeria de dades esportives · Data Science · Analítica de futbol',

            summary: 'Projecte personal de dades de futbol per practicar el procés complet: recopilar informació de jugadors, servir dades estructurades mitjançant una API i explorar-les des d’una aplicació interactiva.',

            challenge: 'Després d’acabar el postgrau en Sports Analytics de la UPC i Barça Innovation Hub, volia anar més enllà d’analitzar un conjunt de dades existent i aprendre a construir el flux de dades que hi ha darrere d’una aplicació útil. La informació futbolística està repartida entre perfils de jugadors i pàgines web, així que vaig explorar com recopilar-la, estructurar-la i deixar-la disponible per a anàlisis posteriors. El resultat connecta l’obtenció de dades, una API i una interfície interactiva en un mateix projecte.',

            features: [
                'Recopila i estructura informació de futbolistes de Transfermarkt.',
                'Transforma informació extreta de pàgines web en registres estructurats, més fàcils de consultar i analitzar.',
                'Exposa les dades recopilades mitjançant un servei FastAPI.',
                'Permet explorar el conjunt de dades des d’una interfície desenvolupada amb Streamlit.',
                'Connecta l’obtenció de dades, el backend i la visualització en un flux de treball integral.'
            ],

            engineering: 'Aquest projecte em va permetre practicar una part menys visible, però fonamental, de la Data Science: aconseguir que les dades estiguin preparades per utilitzar-les abans d’analitzar-les. Vaig treballar en el procés de recopilació i estructuració i el vaig connectar amb una API i una interfície d’usuari. La idea era construir una cosa més útil que un notebook puntual: un pipeline de dades reutilitzable que posés la informació a disposició d’altres parts d’una aplicació.',

            architecture: 'Flux de treball en Python que recopila dades de Transfermarkt, les exposa mitjançant un backend FastAPI i ofereix una capa d’exploració interactiva amb Streamlit. Separar la recopilació, el lliurament mitjançant API i la presentació facilita entendre i mantenir les diferents parts del producte de dades.',

            data: 'El projecte utilitza informació de Transfermarkt. Les pàgines i la disponibilitat de la font poden canviar, de manera que els valors extrets s’han d’interpretar tenint en compte l’origen i la data d’obtenció. És un projecte d’aprenentatge centrat en la recopilació i distribució de dades, no un servei oficial ni una font que garanteixi una cobertura completa.'
        }
    },

    'spotify-stats': {
        title: 'Spotify Stats', imageFolder: 'SpotifyStats', images: [projectImage('files/SpotifyStats/Spotify.webp', 'Spotify listening statistics', 'Estadísticas de escucha de Spotify', 'Estadístiques d’escolta de Spotify')], live: 'https://spotystats.vercel.app/', repo: 'https://github.com/alexgasconn/SpotifyStats', stack: ['JavaScript', 'Chart.js', 'Spotify API'],
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
    'bicing-stats': {
        title: 'Bicing Stats', imageFolder: 'BicingStats', images: [projectImage('files/BicingStats/Bicing1.png', 'Bicing statistics', 'Estadísticas de Bicing', 'Estadístiques de Bicing')], live: 'https://bicing-stats.vercel.app/', repo: 'https://github.com/alexgasconn/BicingStats', stack: ['TypeScript', 'Chart.js'],
        en: {
            category: 'Personal data · Bicing usage',
            summary: 'An interactive way to explore Bicing usage patterns and trends.',
            challenge: 'Bicing usage data is personal and complex, making it hard to understand as raw logs. Bicing Stats transforms it into visual summaries for easier exploration of patterns and trends.',
            features: ['Connect Bicing data to surface usage patterns and trends.', 'Use charts to compare station activity and explore usage.', 'Keep the experience focused on personal insights rather than raw data.'],
            engineering: 'The frontend uses TypeScript and Chart.js to transform Bicing data into interactive visual summaries. The project is intentionally compact: API data, aggregation and chart presentation are the core workflow.',
            architecture: 'A browser-based TypeScript application integrates with the Bicing API and renders charts with Chart.js.',
            data: 'Bicing account authorization and the data available from the API determine what can be shown. Users should review Bicing permissions and the application’s current authorization flow before connecting an account.'
        },
        es: {
            category: 'Datos personales · Uso de Bicing',
            summary: 'Una forma interactiva de explorar patrones y tendencias de uso de Bicing.',
            challenge: 'Los datos de uso de Bicing son personales y complejos, lo que dificulta su comprensión como registros sin procesar. Bicing Stats los transforma en resúmenes visuales para facilitar la exploración de patrones y tendencias.',
            features: ['Conecta datos de Bicing para mostrar patrones y tendencias de uso.', 'Utiliza gráficos para comparar la actividad de las estaciones y explorar el uso.', 'Centra la experiencia en los conocimientos personales en lugar de los datos en bruto.'],
            engineering: 'El frontend utiliza TypeScript y Chart.js para convertir los datos de Bicing en resúmenes visuales interactivos. El proyecto es intencionadamente compacto: datos de API, agregación y presentación gráfica son el flujo de trabajo principal.',
            architecture: 'Aplicación TypeScript en navegador integrada con la API de Bicing y gráficos renderizados con Chart.js.',
            data: 'La autorización de la cuenta de Bicing y los datos disponibles en la API determinan qué se puede mostrar. Los usuarios deben revisar los permisos de Bicing y el flujo de autorización actual de la aplicación antes de conectar una cuenta.'
        },
        ca: {
            category: 'Dades personals · Ús de Bicing',
            summary: 'Una forma interactiva d’explorar patrons i tendències d’ús de Bicing.',
            challenge: 'Dades d’ús de Bicing són personals i complexes, difícils d’interpretar com a registres sense processar. Bicing Stats els transforma en resums visuals per facilitar l’exploració de patrons i tendències.',
            features: ['Connecta dades de Bicing per mostrar patrons i tendències d’ús.', 'Utilitza gràfics per comparar l’activitat de les estacions i explorar l’ús.', 'Centra l’experiència en els coneixements personals en lloc de les dades en brut.'],
            engineering: 'El frontend utilitza TypeScript i Chart.js per convertir les dades de Bicing en resums visuals interactius. El projecte és intencionadament compacte: dades d’API, agregació i presentació gràfica són el flux de treball principal.',
            architecture: 'Aplicació TypeScript al navegador integrada amb l’API de Bicing i gràfics renderitzats amb Chart.js.',
            data: 'L’autorització del compte de Bicing i les dades disponibles a l’API determinen què es pot mostrar. Els usuaris han de revisar els permisos de Bicing i el flux d’autorització actual de l’aplicació abans de connectar un compte.'
        }
    },
    'whatsapp-analyzer': {
        title: 'WhatsApp Analyzer', imageFolder: 'WhatsAppAnalyzer', images: [projectImage('files/WhatsAppAnalyzer/Whatsapp.png', 'Conversation analysis dashboard', 'Panel de análisis de conversaciones', 'Panell d’anàlisi de converses')], live: 'https://whats-stats.vercel.app/', repo: 'https://github.com/alexgasconn/WhatsAppAnalyzer', stack: ['JavaScript', 'Chart.js', 'HTML', 'CSS'],
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
        title: 'Timeline Heatmap', imageFolder: 'TimelineHeatmap', images: [projectImage('files/TimelineHeatmap/Heatmap.png', 'Location history heatmap', 'Mapa de calor del historial de ubicaciones', 'Mapa de calor de l’historial d’ubicacions')], live: 'https://alexgasconn.github.io/timeline/', repo: 'https://github.com/alexgasconn/timeline', stack: ['JavaScript', 'Maps', 'HTML', 'CSS'],
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
