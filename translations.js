(() => {
    const translations = {
        es: {
            title: 'Alex Gascón Navarro | Ingeniería de software, ciencia de datos y deporte',
            description: 'Alex Gascón Navarro es ingeniero de software, especializado en ciencia de datos, analítica deportiva y productos basados en datos.',
            languageLabel: 'Seleccionar idioma',
            projectIndexLabel: 'Categorías de proyectos',
            nav: ['Sobre mí', 'Experiencia', 'Proyectos', 'Contacto'],
            heroKicker: 'Ingeniero de software · Ciencia de datos · Analítica deportiva',
            heroTitle: 'Creo software que convierte los datos deportivos en conocimiento.',
            heroIntro: 'Combino ingeniería de software y análisis de datos para transformar información compleja en herramientas claras, útiles y centradas en el deporte.',
            heroWork: 'Ver proyectos',
            heroCv: 'Abrir mi CV',
            aboutTitle: 'Sobre mí',
            about: [
                'Estudié Ingeniería de Telecomunicaciones, pero mi profesión es la ingeniería de software. En Indra desarrollo y mantengo software para sistemas de telecomunicaciones; fuera de ese ámbito, mis grandes intereses son la ciencia de datos y la analítica deportiva.',
                'Creo pipelines de datos, herramientas de análisis interactivo y productos geoespaciales que ayudan a entender mejor los datos de GPS y entrenamiento. Mi trabajo abarca métricas de rendimiento, predicción y análisis de rutas, además de la ingeniería necesaria para que estas herramientas sean fiables y útiles.',
                'También cursé estudios de posgrado en Analítica Deportiva en la UPC y Barça Innovation Hub. Como corredor, ciclista y triatleta, aporto la perspectiva de quien también utiliza las herramientas que desarrolla.'
            ],
            experienceTitle: 'Experiencia profesional',
            roles: [
                'Ingeniero de software / Ingeniero de redes',
                'Colaborador a tiempo parcial',
                'Desarrollador full-stack de redes en prácticas',
                'Consultor de soporte'
            ],
            dates: [
                'sep. 2023 – actualidad',
                '2025',
                '2022 – 2023',
                '2023'
            ],
            keySkillsLabel: 'Competencias clave',
            experienceTags: [
                ['Java', 'C', 'Valkey / Redis', 'APIs REST', 'Linux / Docker'],
                ['Python', 'Modelos predictivos', 'Analítica deportiva', 'Pipelines de datos'],
                ['PHP', 'Python', 'DNS', 'Linux', 'Servicios web'],
                ['Soporte técnico', 'Resolución de incidencias', 'Atención al cliente', 'Facturación', 'Documentación']
            ],
            experience: [
                [
                    'Desarrollo y mantengo componentes y bibliotecas en Java y C para sistemas de telecomunicaciones. Implemento nuevas funciones, corrijo defectos y entrego hotfixes y actualizaciones de software.',
                    'Diseño, desarrollo y mantengo APIs REST e integraciones con bases de datos para gestionar datos y conectar componentes de software.',
                    'Desarrollo integraciones Java con Valkey y almacenamiento compatible con Redis: gestión de conexiones, suscripciones, operaciones de datos y bibliotecas cliente.',
                    'Diseño planes de prueba e implemento pruebas unitarias y funcionales para validar requisitos, comprobar el comportamiento de los componentes y detectar regresiones antes de cada entrega.',
                    'Analizo requisitos de software, los convierto en tareas de implementación y documento diseños técnicos, documentación y diagramas de componentes.',
                    'Trabajo con Git y GitLab en la gestión de ramas, merge requests, integración de código, dependencias y ejecución de pipelines CI.',
                    'Compilo y valido componentes con Maven y Docker en Linux; investigo y resuelvo incidencias de ejecución, integración y compatibilidad.',
                    'Participo en migraciones de Java y actualizaciones de dependencias, adaptando componentes a versiones nuevas y resolviendo incompatibilidades.'
                ],
                [
                    'Colaboro en el desarrollo de modelos predictivos para estimar el rendimiento en carreras.',
                    'Construyo y mantengo pipelines para procesar y analizar datos de entrenamiento de atletas.',
                    'Trabajo en un entorno startup para convertir los resultados del análisis en funcionalidades de producto.'
                ],
                [
                    'Automaticé funciones DNS mediante servicios web en PHP y Python, reduciendo más de un 50 % los errores de configuración manual.',
                    'Administré servidores Linux y desplegué soluciones web internas para operaciones de TI.'
                ],
                [
                    'Ofrecí soporte técnico y de facturación a usuarios de todo el mundo, resolviendo cientos de consultas cada semana.',
                    'Creé documentación interna para agilizar los flujos de soporte y reducir los tiempos de respuesta.'
                ]
            ],
            skillsTitle: 'Competencias técnicas',
            skillGroups: [
                'Lenguajes de programación',
                'Desarrollo backend',
                'Bases de datos y almacenamiento',
                'Pruebas y calidad',
                'Herramientas de desarrollo y compilación',
                'Ingeniería de software',
                'Tecnologías de red',
                'Ciencia de datos y visualización'
            ],
            skills: [
                ['Java', 'C', 'Python', 'Bash', 'PHP', 'JavaScript / TypeScript', 'SQL'],
                ['APIs REST', 'Integración de servicios', 'Integración con bases de datos', 'JSON'],
                ['Valkey', 'Redis', 'MongoDB', 'PostgreSQL / MySQL'],
                ['Pruebas unitarias', 'Pruebas funcionales', 'Planes de prueba', 'JUnit'],
                ['Git / GitLab', 'Maven', 'Docker', 'Linux', 'Pipelines CI/CD'],
                ['Análisis de requisitos', 'Gestión de dependencias', 'Depuración / hotfixes', 'Documentación técnica', 'UML / Mermaid', 'Javadoc'],
                ['SDN', 'NETCONF / YANG', 'QoS', 'Redes L2 / L3'],
                ['Pandas / NumPy', 'Scikit-learn / XGBoost', 'Streamlit / Plotly', 'SHAP / explicación de modelos', 'Spark con Python', 'OpenStreetMap / GeoJSON', 'React / Leaflet / MapLibre']
            ],
            projectsTitle: 'Proyectos destacados',
            projectsIntro: 'Productos creados en torno al movimiento, los mapas y los datos útiles.',
            projectNav: ['Aire libre y mapas', 'Herramientas GPX', 'Analítica deportiva', 'Datos personales'],
            projectGroups: [
                'Productos outdoor y geoespaciales',
                'Edición y análisis de rutas GPX',
                'Datos y rendimiento deportivo',
                'Datos personales y visualización'
            ],
            cards: [
                {
                    eyebrow: 'Navegación sin conexión · PWA',
                    description: 'Planifica y sigue rutas outdoor con archivos GPX, KML o GeoJSON. Descarga zonas de mapa antes de salir, consulta el perfil y las estadísticas de la ruta, y sigue tu posición con GPS y brújula. El detalle cartográfico sin conexión depende de las zonas descargadas previamente.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Mapa de ruta y pantalla de navegación de TrailNav'
                },
                {
                    eyebrow: 'Análisis de rutas · Planificación',
                    description: 'Convierte una ruta GPX en un perfil de elevación, un análisis del terreno y una estimación de duración. Compara cinco modelos transparentes y una estimación agregada; añade previsión meteorológica y avisos de luz diurna. Los cálculos de la ruta se realizan en el navegador.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Mapa de ruta y panel de planificación de TrekkingTime Pro'
                },
                {
                    eyebrow: 'Estrategia de carrera · Trail running',
                    description: 'Crea un plan de carrera por sectores a partir de una ruta GPX y un tiempo objetivo, con ritmos adaptados al terreno, el desnivel y las condiciones de carrera.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Perfil de desnivel y plan de carrera de Race Planner Pro'
                },
                {
                    eyebrow: 'Cataluña · Seguimiento de retos',
                    description: 'Visualiza actividades de Strava o importa archivos GPX, TCX y FIT para identificar qué cimas del reto 100 Cims de Cataluña has visitado. La importación y la detección se procesan en un Web Worker; los archivos permanecen en el dispositivo.',
                    actions: ['Ver mapa', 'GitHub'],
                    alt: 'Mapa del reto 100 Cims con cimas completadas y actividades'
                },
                {
                    eyebrow: 'Utilidad móvil · OpenStreetMap',
                    description: 'Encuentra fuentes y puntos de agua cercanos mientras corres, pedaleas o viajas. La ubicación en tiempo real, la lista ordenada por distancia y la brújula facilitan encontrar agua. La PWA incluye datos y mapas de Cataluña para usarlos sin conexión tras la configuración inicial.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Mapa y brújula de fuentes cercanas de Oasis'
                },
                {
                    eyebrow: 'Editor de rutas · Procesamiento local',
                    description: 'Un espacio de trabajo en el navegador para comparar, editar y reparar tracks GPS. Edita puntos, recorta rutas, suaviza trazas, rellena huecos, consulta la elevación y exporta el GPX. Los datos se procesan localmente; el ajuste opcional a caminos utiliza el servicio público de rutas Valhalla.',
                    actions: ['Abrir editor', 'GitHub'],
                    alt: null
                },
                {
                    eyebrow: 'Elevación y calidad GPS',
                    description: 'Analiza rutas GPX con estadísticas, segmentación del desnivel y detección de ruido GPS. Sus visualizaciones ayudan a entender el terreno y la calidad de los datos.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Ruta GPS representada en un mapa interactivo'
                },
                {
                    eyebrow: 'Proyecto más ambicioso · Analítica de resistencia',
                    description: 'Una plataforma gratuita de analítica deportiva con funciones de nivel premium. Conecta tu cuenta de Strava y explora 13 áreas: carga de entrenamiento y constancia; análisis de running, ciclismo y natación; perfil del atleta; predicción de carreras; vida útil del material; buscador de actividades; calendario; meteorología histórica; mapas; informes anuales y un asistente de IA opcional. El Predictor combina escalado de Riegel, transferencia de rendimiento al estilo VDOT y ajuste de curvas personales. Las fichas de actividad profundizan en streams, parciales, subidas y métricas específicas, con exportación a GPX, CSV y JSON. La mayor parte del análisis ocurre en el navegador, con OAuth de Strava y una ligera capa API en Vercel.',
                    actions: ['Explorar StravaStats', 'GitHub'],
                    alt: 'Gráfica de predicción de ritmo de StravaStats'
                },
                {
                    eyebrow: 'Scouting de fútbol · Machine learning',
                    description: 'Encuentra futbolistas con perfiles de rendimiento similares mediante datos de FBref, PCA y clustering K-means, con gráficos radar interactivos para comparar jugadores.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Panel de comparación del rendimiento de jugadores'
                },
                {
                    eyebrow: 'Datos de fútbol · Ingeniería de datos',
                    description: 'Pipeline integral que recopila datos de jugadores de Transfermarkt, los expone mediante una API y permite explorarlos en una aplicación interactiva.',
                    actions: ['GitHub'],
                    alt: 'Aplicación de datos de jugadores de Transfermarkt'
                },
                {
                    eyebrow: 'Escucha musical · Visualización de datos',
                    description: 'Explora tu historial de escucha y descubre tus canciones, artistas y listas favoritas con gráficos interactivos.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Estadísticas de escucha de Spotify'
                },
                {
                    eyebrow: 'Patrones de conversación · Análisis de texto',
                    description: 'Analiza exportaciones de chats con estadísticas de actividad, nubes de palabras, uso de emojis y tendencias de conversación.',
                    actions: ['Abrir app', 'GitHub'],
                    alt: 'Panel de análisis de conversaciones de WhatsApp'
                },
                {
                    eyebrow: 'Historial de ubicación · Mapas',
                    description: 'Visualiza en un mapa interactivo los lugares de Google Timeline y descubre patrones en tu historial de ubicaciones.',
                    actions: ['Ver mapa', 'GitHub'],
                    alt: 'Mapa de calor de ubicaciones'
                }
            ],
            contactTitle: 'Contacto',
            contactHeadline: 'Construyamos algo útil.',
            contactText: 'Me interesan oportunidades en ingeniería de software, ciencia de datos y tecnología deportiva. Escríbeme para hablar de un puesto, un producto o una colaboración.',
            contactCta: 'Escribir a Alex',
            footerCredit: 'Diseñado y desarrollado por Alex Gascón Navarro',
            footerLink: 'Ver el código fuente en GitHub'
        },
        ca: {
            title: 'Alex Gascón Navarro | Enginyeria de Software, Ciència de Dades i Esport',
            description: 'Alex Gascón Navarro és un Enginyer en Xarxes de Telecomunicacions, especialitzat en ciència de dades, analítica esportiva i productes basats en dades.',
            languageLabel: 'Selecciona l\'idioma',
            projectIndexLabel: 'Categories de projectes',
            nav: ['Sobre mi', 'Experiència', 'Projectes', 'Contacte'],
            heroKicker: 'Enginyer de Software · Ciència de dades · Analítica esportiva',
            heroTitle: 'Creo aplicacions que transformen les dades esportives en coneixement.',
            heroIntro: 'Combino enginyeria de Software i anàlisi de dades per convertir informació complexa en eines clares, útils i centrades en l\'esport.',
            heroWork: 'Veure projectes',
            heroCv: 'Obre el meu CV',
            aboutTitle: 'Sobre mi',
            about: [
                'Vaig estudiar Enginyeria de Telecomunicacions, però la meva professió és l\'enginyeria de Software. A Indra desenvolupo i mantinc software per a sistemes de telecomunicacions; fora d\'aquest àmbit, els meus grans interessos són la ciència de dades i l\'analítica esportiva.',
                'Creo pipelines de dades, eines d\'anàlisi interactiva i productes geoespacials que ajuden a entendre millor les dades de GPS i entrenament. La meva feina abasta mètriques de rendiment, predicció i anàlisi de rutes, a més de l\'enginyeria necessària perquè aquestes eines siguin fiables i útils.',
                'També vaig cursar estudis de postgrau en Analítica Esportiva a la UPC i Barça Innovation Hub. Com a corredor, ciclista i triatleta, aporto la perspectiva de qui també fa servir les eines que desenvolupa.'
            ],
            experienceTitle: 'Experiència professional',
            roles: [
                'Enginyer de Software / Enginyer de xarxes',
                'Col·laborador a temps parcial',
                'Desenvolupador full-stack de xarxes en pràctiques',
                'Consultor de suport'
            ],
            dates: [
                'set. 2023 – actualitat',
                '2025',
                '2022 – 2023',
                '2023'
            ],
            keySkillsLabel: 'Competències clau',
            experienceTags: [
                ['Java', 'C', 'Valkey / Redis', 'APIs REST', 'Linux / Docker'],
                ['Python', 'Models predictius', 'Analítica esportiva', 'Pipelines de dades'],
                ['PHP', 'Python', 'DNS', 'Linux', 'Serveis web'],
                ['Suport tècnic', 'Resolució d\'incidències', 'Atenció al client', 'Facturació', 'Documentació']
            ],
            experience: [
                [
                    'Desenvolupo i mantinc components i biblioteques en Java i C per a sistemes de telecomunicacions. Implemento funcionalitats, corregeixo defectes i lliuro hotfixes i actualitzacions de software.',
                    'Dissenyo, desenvolupo i mantinc APIs REST i integracions amb bases de dades per gestionar dades i connectar components de software.',
                    'Creo integracions Java amb Valkey i emmagatzematge compatible amb Redis: gestió de connexions, subscripcions, operacions de dades i biblioteques client.',
                    'Dissenyo plans de prova i implemento proves unitàries i funcionals per validar requisits, comprovar el comportament dels components i detectar regressions abans de cada lliurament.',
                    'Analitzo requisits de software, els converteixo en tasques d\'implementació i documento dissenys tècnics, documentació i diagrames de components.',
                    'Treballo amb Git i GitLab en la gestió de branques, merge requests, integració de codi, dependències i execució de pipelines CI.',
                    'Compilo i valido components amb Maven i Docker en Linux; investigo i resolc incidències d\'execució, integració i compatibilitat.',
                    'Participo en migracions de Java i actualitzacions de dependències, adaptant components a versions noves i resolent incompatibilitats.'
                ],
                [
                    'Col·laboro en el desenvolupament de models predictius per estimar el rendiment en curses.',
                    'Construeixo i mantinc pipelines per processar i analitzar dades d\'entrenament d\'atletes.',
                    'Treballo en un entorn startup per convertir els resultats de l\'anàlisi en funcionalitats de producte.'
                ],
                [
                    'Vaig automatitzar funcions DNS mitjançant serveis web en PHP i Python, reduint més d\'un 50 % els errors de configuració manual.',
                    'Vaig administrar servidors Linux i desplegar solucions web internes per a operacions de TI.'
                ],
                [
                    'Vaig oferir suport tècnic i de facturació a usuaris d\'arreu del món, resolent centenars de consultes cada setmana.',
                    'Vaig crear documentació interna per agilitzar els fluxos de suport i reduir els temps de resposta.'
                ]
            ],
            skillsTitle: 'Competències tècniques',
            skillGroups: [
                'Llenguatges de programació',
                'Desenvolupament backend',
                'Bases de dades i emmagatzematge',
                'Proves i qualitat',
                'Eines de desenvolupament i compilació',
                'Enginyeria de software',
                'Tecnologies de xarxa',
                'Ciència de dades i visualització'
            ],
            skills: [
                ['Java', 'C', 'Python', 'Bash', 'PHP', 'JavaScript / TypeScript', 'SQL'],
                ['APIs REST', 'Integració de serveis', 'Integració amb bases de dades', 'JSON'],
                ['Valkey', 'Redis', 'MongoDB', 'PostgreSQL / MySQL'],
                ['Proves unitàries', 'Proves funcionals', 'Plans de prova', 'JUnit'],
                ['Git / GitLab', 'Maven', 'Docker', 'Linux', 'Pipelines CI/CD'],
                ['Anàlisi de requisits', 'Gestió de dependències', 'Depuració / hotfixes', 'Documentació tècnica', 'UML / Mermaid', 'Javadoc'],
                ['SDN', 'NETCONF / YANG', 'QoS', 'Xarxes L2 / L3'],
                ['Pandas / NumPy', 'Scikit-learn / XGBoost', 'Streamlit / Plotly', 'SHAP / explicabilitat de models', 'Spark amb Python', 'OpenStreetMap / GeoJSON', 'React / Leaflet / MapLibre']
            ],
            projectsTitle: 'Projectes destacats',
            projectsIntro: 'Productes creats al voltant del moviment, els mapes i les dades útils.',
            projectNav: ['Aire lliure i mapes', 'Eines GPX', 'Analítica esportiva', 'Dades personals'],
            projectGroups: [
                'Productes outdoor i geoespacials',
                'Edició i anàlisi de rutes GPX',
                'Dades i rendiment esportiu',
                'Dades personals i visualització'
            ],
            cards: [
                {
                    eyebrow: 'Navegació sense connexió · PWA',
                    description: 'Planifica i segueix rutes outdoor amb fitxers GPX, KML o GeoJSON. Descarrega zones del mapa abans de sortir, consulta el perfil i les estadístiques de la ruta, i segueix la teva posició amb GPS i brúixola. El detall cartogràfic sense connexió depèn de les zones descarregades prèviament.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Mapa de ruta i pantalla de navegació de TrailNav'
                },
                {
                    eyebrow: 'Anàlisi de rutes · Planificació',
                    description: 'Converteix una ruta GPX en un perfil d\'elevació, una anàlisi del terreny i una estimació de durada. Compara cinc models transparents i una estimació agregada; afegeix previsió meteorològica i avisos de llum diürna. Els càlculs de la ruta es fan al navegador.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Mapa de ruta i panell de planificació de TrekkingTime Pro'
                },
                {
                    eyebrow: 'Estratègia de cursa · Trail running',
                    description: 'Crea un pla de cursa per sectors a partir d\'una ruta GPX i un temps objectiu, amb ritmes adaptats al terreny, el desnivell i les condicions de cursa.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Perfil de desnivell i pla de cursa de Race Planner Pro'
                },
                {
                    eyebrow: 'Catalunya · Seguiment de reptes',
                    description: 'Visualitza activitats de Strava o importa fitxers GPX, TCX i FIT per identificar quins cims del repte dels 100 Cims de Catalunya has visitat. La importació i la detecció es processen en un Web Worker; els fitxers es queden al dispositiu.',
                    actions: ['Veure el mapa', 'GitHub'],
                    alt: 'Mapa del repte dels 100 Cims amb cims completats i activitats'
                },
                {
                    eyebrow: 'Utilitat mòbil · OpenStreetMap',
                    description: 'Troba fonts i punts d\'aigua propers mentre corres, pedales o viatges. La ubicació en temps real, la llista ordenada per distància i la brúixola faciliten trobar aigua. La PWA inclou dades i mapes de Catalunya per fer-los servir sense connexió després de la configuració inicial.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Mapa i brúixola de fonts properes d\'Oasis'
                },
                {
                    eyebrow: 'Editor de rutes · Processament local',
                    description: 'Un espai de treball al navegador per comparar, editar i reparar tracks GPS. Edita punts, retalla rutes, suavitza traces, omple buits, consulta l\'elevació i exporta el GPX. Les dades es processen localment; l\'ajust opcional als camins fa servir el servei públic de rutes Valhalla.',
                    actions: ['Obre l\'editor', 'GitHub'],
                    alt: null
                },
                {
                    eyebrow: 'Elevació i qualitat GPS',
                    description: 'Analitza rutes GPX amb estadístiques, segmentació del desnivell i detecció de soroll GPS. Les visualitzacions ajuden a entendre el terreny i la qualitat de les dades.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Ruta GPS representada en un mapa interactiu'
                },
                {
                    eyebrow: 'Projecte més ambiciós · Analítica de resistència',
                    description: 'Una plataforma gratuïta d\'analítica esportiva amb funcions de nivell premium. Connecta el teu compte de Strava i explora 13 àrees: càrrega d\'entrenament i constància; anàlisi de running, ciclisme i natació; perfil de l\'atleta; predicció de curses; vida útil de l\'equipament; cercador d\'activitats; calendari; meteorologia històrica; mapes; informes anuals i un assistent d\'IA opcional. El Predictor combina l\'escalat de Riegel, la transferència de rendiment a l\'estil VDOT i l\'ajust de corbes personals. Les fitxes d\'activitat aprofundeixen en streams, parcials, pujades i mètriques específiques, amb exportació a GPX, CSV i JSON. La major part de l\'anàlisi passa al navegador, amb OAuth de Strava i una capa API lleugera a Vercel.',
                    actions: ['Explora StravaStats', 'GitHub'],
                    alt: 'Gràfic de predicció de ritme de StravaStats'
                },
                {
                    eyebrow: 'Scouting de futbol · Machine learning',
                    description: 'Troba futbolistes amb perfils de rendiment similars mitjançant dades de FBref, PCA i clustering K-means, amb gràfics radar interactius per comparar jugadors.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Panell de comparació del rendiment de jugadors'
                },
                {
                    eyebrow: 'Dades de futbol · Enginyeria de dades',
                    description: 'Pipeline integral que recopila dades de jugadors de Transfermarkt, les exposa mitjançant una API i permet explorar-les en una aplicació interactiva.',
                    actions: ['GitHub'],
                    alt: 'Aplicació de dades de jugadors de Transfermarkt'
                },
                {
                    eyebrow: 'Escolta musical · Visualització de dades',
                    description: 'Explora el teu historial d\'escolta i descobreix les teves cançons, artistes i llistes preferides amb gràfics interactius.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Estadístiques d\'escolta de Spotify'
                },
                {
                    eyebrow: 'Patrons de conversa · Anàlisi de text',
                    description: 'Analitza exportacions de xats amb estadístiques d\'activitat, núvols de paraules, ús d\'emojis i tendències de conversa.',
                    actions: ['Obre l\'app', 'GitHub'],
                    alt: 'Panell d\'anàlisi de converses de WhatsApp'
                },
                {
                    eyebrow: 'Historial d\'ubicacions · Mapes',
                    description: 'Visualitza en un mapa interactiu els llocs de Google Timeline i descobreix patrons en el teu historial d\'ubicacions.',
                    actions: ['Veure el mapa', 'GitHub'],
                    alt: 'Mapa de calor d\'ubicacions'
                }
            ],
            contactTitle: 'Contacte',
            contactHeadline: 'Construïm alguna cosa útil.',
            contactText: 'M\'interessen oportunitats en enginyeria de software, ciència de dades i tecnologia esportiva. Escriu-me per parlar d\'una feina, un producte o una col·laboració.',
            contactCta: 'Escriu a l\'Alex',
            footerCredit: 'Dissenyat i desenvolupat per Alex Gascón Navarro',
            footerLink: 'Veure el codi font a GitHub'
        }
    };

    const originalContent = new Map();
    const originalTextNodes = new Map();
    const originalAttributes = new Map();
    const originalTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const originalDescription = descriptionMeta?.content ?? '';
    const languageButtons = [...document.querySelectorAll('.language-button')];

    function setContent(element, value) {
        if (!element) return;
        if (!originalContent.has(element)) originalContent.set(element, element.innerHTML);
        element.textContent = value;
    }

    function setLeadingText(element, value) {
        if (!element) return;
        const textNode = [...element.childNodes].find(node =>
            node.nodeType === Node.TEXT_NODE && node.textContent.trim()
        );
        if (!textNode) {
            setContent(element, value);
            return;
        }
        if (!originalTextNodes.has(textNode)) originalTextNodes.set(textNode, textNode.textContent);
        const original = originalTextNodes.get(textNode);
        const prefix = original.match(/^\s*/)[0];
        const suffix = original.match(/\s*$/)[0];
        textNode.textContent = `${prefix}${value}${suffix}`;
    }

    function setAttribute(element, name, value) {
        if (!element) return;
        if (!originalAttributes.has(element)) originalAttributes.set(element, new Map());
        const attributes = originalAttributes.get(element);
        if (!attributes.has(name)) attributes.set(name, element.getAttribute(name));
        if (value === null) element.removeAttribute(name);
        else element.setAttribute(name, value);
    }

    function restoreOriginals() {
        originalContent.forEach((value, element) => { element.innerHTML = value; });
        originalTextNodes.forEach((value, node) => { node.textContent = value; });
        originalAttributes.forEach((attributes, element) => {
            attributes.forEach((value, name) => {
                if (value === null) element.removeAttribute(name);
                else element.setAttribute(name, value);
            });
        });
    }

    function setList(selector, values, root = document, directText = false) {
        [...root.querySelectorAll(selector)].forEach((element, index) => {
            (directText ? setLeadingText : setContent)(element, values[index]);
        });
    }

    function applyLanguage(language) {
        const copy = translations[language];
        restoreOriginals();
        document.documentElement.lang = language;

        if (copy) {
            document.title = copy.title;
            if (descriptionMeta) descriptionMeta.content = copy.description;

            setList('.main-nav ol a', copy.nav);
            setAttribute(document.querySelector('.language-switch'), 'aria-label', copy.languageLabel);
            setContent(document.querySelector('.hero-kicker'), copy.heroKicker);
            setContent(document.querySelector('header .big-heading'), copy.heroTitle);
            setContent(document.querySelector('header > p:not(.hero-kicker)'), copy.heroIntro);
            setLeadingText(document.querySelector('header .btn'), copy.heroWork);
            setLeadingText(document.querySelector('header .text-link'), copy.heroCv);

            setLeadingText(document.querySelector('#about .section-heading'), copy.aboutTitle);
            setList('#about .about-text p', copy.about);
            setAttribute(document.querySelector('#about .image-wrapper img'), 'alt', language === 'es'
                ? 'Fotografía de Alex Gascón'
                : 'Fotografia d\'Alex Gascón');

            setLeadingText(document.querySelector('#experience .section-heading'), copy.experienceTitle);
            const panelIds = ['panel-indra', 'panel-racepace', 'panel-axians', 'panel-framer'];
            panelIds.forEach((id, index) => {
                setLeadingText(document.querySelector(`#${id} h3`), copy.roles[index]);
                setContent(document.querySelector(`#${id} .panel-date`), copy.dates[index]);
                const panel = document.querySelector(`#${id}`);
                setAttribute(panel.querySelector('.experience-tags'), 'aria-label', copy.keySkillsLabel);
                setList('span', copy.experienceTags[index], panel.querySelector('.experience-tags'));
                setList('li', copy.experience[index], document.querySelector(`#${id}`));
            });

            setLeadingText(document.querySelector('#technical-skills .section-heading'), copy.skillsTitle);
            const skillColumns = [...document.querySelectorAll('#technical-skills .skills-grid > div')];
            skillColumns.forEach((column, index) => {
                setContent(column.querySelector('h4'), copy.skillGroups[index]);
                setList('li', copy.skills[index], column);
            });

            setLeadingText(document.querySelector('#projects .section-heading'), copy.projectsTitle);
            setContent(document.querySelector('#projects .section-intro'), copy.projectsIntro);
            setAttribute(document.querySelector('.project-index'), 'aria-label', copy.projectIndexLabel);
            setList('.project-index a', copy.projectNav);
            setList('.project-group-heading h3', copy.projectGroups);

            const cards = [...document.querySelectorAll('#projects .project-card')];
            cards.forEach((card, index) => {
                const cardCopy = copy.cards[index];
                setContent(card.querySelector('.project-eyebrow'), cardCopy.eyebrow);
                setContent(card.querySelector('.project-description'), cardCopy.description);
                setList('.project-links a', cardCopy.actions, card, true);
                setAttribute(card.querySelector('.project-image img'), 'alt', cardCopy.alt);
            });

            setLeadingText(document.querySelector('#contact .section-heading'), copy.contactTitle);
            setContent(document.querySelector('#contact .contact-title'), copy.contactHeadline);
            setContent(document.querySelector('#contact > p'), copy.contactText);
            setLeadingText(document.querySelector('#contact .btn'), copy.contactCta);
            setContent(document.querySelector('footer p'), copy.footerCredit);
            setContent(document.querySelector('footer a'), copy.footerLink);
        } else {
            document.title = originalTitle;
            if (descriptionMeta) descriptionMeta.content = originalDescription;
        }

        languageButtons.forEach(button => {
            const selected = button.dataset.language === language;
            button.classList.toggle('active', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
})();