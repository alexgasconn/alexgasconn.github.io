(() => {
    const projects = window.projectDetails ?? {};
    const projectIds = new Map([
        ['TrailNav', 'trailnav'],
        ['Trekking Time', 'trekkingtime-pro'],
        ['Race Planner Pro', 'race-planner-pro'],
        ['100 Cims Map', '100-cims'],
        ['Oasis', 'oasis'],
        ['GPX Master', 'gpx-master-pro'],
        ['GPX Track Analyzer', 'gpx-track-analyzer'],
        ['StravaStats', 'stravastats'],
        ['Player Recommender', 'player-recommender'],
        ['Transfermarkt Pipeline', 'transfermarkt-pipeline'],
        ['Spotify Stats', 'spotify-stats'],
        ['WhatsApp Analyzer', 'whatsapp-analyzer'],
        ['Timeline Heatmap', 'timeline-heatmap']
    ]);

    const pageHref = (id, language = 'en') => {
        const params = new URLSearchParams({ id });
        if (language !== 'en') params.set('lang', language);
        return `project.html?${params.toString()}`;
    };
    window.projectPageHref = pageHref;

    const imageExtension = /\.(apng|avif|bmp|gif|jpe?g|png|svg|webp)$/i;
    const imageCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });
    let publishedImagePaths;

    function getPublishedImagePaths() {
        if (!publishedImagePaths) {
            const controller = new AbortController();
            const timeout = window.setTimeout(() => controller.abort(), 8000);
            publishedImagePaths = fetch('https://data.jsdelivr.com/v1/package/gh/alexgasconn/alexgasconn.github.io@main/flat', {
                signal: controller.signal,
                headers: { Accept: 'application/json' }
            })
                .then(response => {
                    if (!response.ok) throw new Error(`Image catalog request failed: ${response.status}`);
                    return response.json();
                })
                .then(catalog => Array.isArray(catalog.files)
                    ? catalog.files.map(file => file.name).filter(name => typeof name === 'string')
                    : [])
                .catch(() => null)
                .finally(() => window.clearTimeout(timeout));
        }
        return publishedImagePaths;
    }

    function discoverProjectImages(project) {
        const fallback = Array.isArray(project?.images) ? project.images : (project?.image ? [project.image] : []);
        if (!project?.imageFolder) return Promise.resolve(fallback);

        return getPublishedImagePaths().then(paths => {
            if (!paths) return fallback;
            const prefix = `/files/${project.imageFolder}/`;
            const matchingPaths = paths
                .filter(path => path.startsWith(prefix) && !path.slice(prefix.length).includes('/') && imageExtension.test(path))
                .sort(imageCollator.compare);
            if (!matchingPaths.length) return fallback;

            const fallbackByPath = new Map(fallback.map(entry => {
                const image = typeof entry === 'string' ? { src: entry } : entry;
                return [image.src.toLowerCase(), image];
            }));

            const discovered = matchingPaths.map((path, index) => {
                const relativePath = path.slice(1);
                const knownImage = fallbackByPath.get(relativePath.toLowerCase());
                if (knownImage) return knownImage;

                const encodedPath = relativePath.split('/').map(encodeURIComponent).join('/');
                const src = window.location.protocol === 'file:'
                    ? `https://cdn.jsdelivr.net/gh/alexgasconn/alexgasconn.github.io@main/${encodedPath}`
                    : relativePath;
                const name = relativePath.split('/').pop().replace(imageExtension, '').replace(/[_-]+/g, ' ').trim();
                const number = index + 1;
                return {
                    src,
                    caption: {
                        en: name || `Image ${number}`,
                        es: name || `Imagen ${number}`,
                        ca: name || `Imatge ${number}`
                    }
                };
            });

            if (window.location.protocol === 'file:') {
                const discoveredPaths = new Set(discovered.map(item => item.src.toLowerCase()));
                fallback.forEach(item => {
                    const src = typeof item === 'string' ? item : item.src;
                    if (!discoveredPaths.has(src.toLowerCase())) discovered.push(item);
                });
            }

            return discovered;
        });
    }

    const detailRoot = document.querySelector('#project-detail');
    if (detailRoot) {
        const labels = {
            en: {
                back: 'Back to selected work',
                live: 'Open live project',
                source: 'View source on GitHub',
                previousImage: 'Previous image',
                nextImage: 'Next image',
                pause: 'Pause slideshow',
                play: 'Play slideshow',
                gallery: 'Project image gallery',
                challenge: ['01 / CONTEXT', 'The challenge'],
                features: ['02 / PRODUCT', 'What it does'],
                engineering: ['03 / ENGINEERING', 'How it works'],
                architecture: ['04 / ARCHITECTURE', 'System design'],
                data: ['05 / DATA & PRIVACY', 'Data, privacy & caveats'],
                stack: ['06 / TECHNOLOGY', 'Built with'],
                projectNav: 'Project navigation',
                notFound: 'Project not found',
                notFoundCopy: 'This project page is unavailable. Return to the portfolio to choose another project.'
            },
            es: {
                back: 'Volver a proyectos',
                live: 'Abrir proyecto',
                source: 'Ver código en GitHub',
                previousImage: 'Imagen anterior',
                nextImage: 'Imagen siguiente',
                pause: 'Pausar carrusel',
                play: 'Reanudar carrusel',
                gallery: 'Galería de imágenes del proyecto',
                challenge: ['01 / CONTEXTO', 'El reto'],
                features: ['02 / PRODUCTO', 'Qué hace'],
                engineering: ['03 / INGENIERÍA', 'Cómo funciona'],
                architecture: ['04 / ARQUITECTURA', 'Diseño del sistema'],
                data: ['05 / DATOS Y PRIVACIDAD', 'Datos, privacidad y límites'],
                stack: ['06 / TECNOLOGÍA', 'Tecnologías'],
                projectNav: 'Navegación del proyecto',
                notFound: 'Proyecto no encontrado',
                notFoundCopy: 'Esta ficha no está disponible. Vuelve al portfolio para elegir otro proyecto.'
            },
            ca: {
                back: 'Torna als projectes',
                live: 'Obre el projecte',
                source: 'Veure el codi a GitHub',
                previousImage: 'Imatge anterior',
                nextImage: 'Imatge següent',
                pause: 'Pausa la presentació',
                play: 'Reprèn la presentació',
                gallery: 'Galeria d’imatges del projecte',
                challenge: ['01 / CONTEXT', 'El repte'],
                features: ['02 / PRODUCTE', 'Què fa'],
                engineering: ['03 / ENGINYERIA', 'Com funciona'],
                architecture: ['04 / ARQUITECTURA', 'Disseny del sistema'],
                data: ['05 / DADES I PRIVACITAT', 'Dades, privacitat i límits'],
                stack: ['06 / TECNOLOGIA', 'Tecnologies'],
                projectNav: 'Navegació del projecte',
                notFound: 'Projecte no trobat',
                notFoundCopy: 'Aquesta fitxa no està disponible. Torna al portafolis per triar un altre projecte.'
            }
        };

        const query = new URLSearchParams(window.location.search);
        const projectId = query.get('id');
        const project = projects[projectId];
        const language = ['en', 'es', 'ca'].includes(query.get('lang')) ? query.get('lang') : 'en';
        const title = document.querySelector('#detail-title');
        const description = document.querySelector('#detail-summary');
        const imageFigure = document.querySelector('#detail-visual');
        const image = document.querySelector('#detail-image');
        const imageCaption = document.querySelector('#detail-image-caption');
        const imageCounter = document.querySelector('#carousel-counter');
        const previousButton = document.querySelector('#carousel-previous');
        const nextButton = document.querySelector('#carousel-next');
        const carouselToggle = document.querySelector('#carousel-toggle');
        let images = [];
        let imageIndex = 0;
        let activeLanguage = language;
        let autoplayTimer;
        let swipeStart = null;
        let userPaused = false;
        let pointerInside = false;
        let focusInside = false;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function stopAutoplay() {
            window.clearInterval(autoplayTimer);
            autoplayTimer = undefined;
        }

        function renderImage() {
            const current = images[imageIndex];
            if (!current) return;
            const frame = typeof current === 'string' ? { src: current } : current;
            const caption = typeof frame.caption === 'string'
                ? frame.caption
                : frame.caption?.[activeLanguage] ?? frame.caption?.en ?? '';
            image.src = frame.src;
            image.alt = frame.alt?.[activeLanguage] ?? frame.alt?.en ?? `${project.title} — ${caption || project[activeLanguage].category}`;
            imageCaption.textContent = caption;
            imageCaption.hidden = !caption;
            imageCounter.textContent = `${String(imageIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
            previousButton.hidden = images.length < 2;
            nextButton.hidden = images.length < 2;
            imageCounter.hidden = images.length < 2;
            carouselToggle.hidden = images.length < 2;
            carouselToggle.setAttribute('aria-pressed', String(userPaused));
            carouselToggle.setAttribute('aria-label', userPaused ? labels[activeLanguage].play : labels[activeLanguage].pause);
            carouselToggle.querySelector('span').textContent = userPaused ? '▶' : 'Ⅱ';
            imageFigure.classList.toggle('has-carousel', images.length > 1);
        }

        function startAutoplay(force = false) {
            stopAutoplay();
            if (images.length < 2 || userPaused || reduceMotion || document.hidden || (!force && (pointerInside || focusInside))) return;
            autoplayTimer = window.setInterval(() => {
                imageIndex = (imageIndex + 1) % images.length;
                renderImage();
            }, 5000);
        }

        function moveImage(direction) {
            if (images.length < 2) return;
            imageIndex = (imageIndex + direction + images.length) % images.length;
            renderImage();
            startAutoplay();
        }

        previousButton.addEventListener('click', () => moveImage(-1));
        nextButton.addEventListener('click', () => moveImage(1));
        carouselToggle.addEventListener('click', () => {
            userPaused = !userPaused;
            if (userPaused) stopAutoplay();
            else startAutoplay(true);
            renderImage();
        });
        imageFigure.addEventListener('pointerenter', () => {
            pointerInside = true;
            stopAutoplay();
        });
        imageFigure.addEventListener('pointerleave', () => {
            pointerInside = false;
            startAutoplay();
        });
        imageFigure.addEventListener('focusin', () => {
            focusInside = true;
            stopAutoplay();
        });
        imageFigure.addEventListener('focusout', event => {
            if (!imageFigure.contains(event.relatedTarget)) {
                focusInside = false;
                startAutoplay();
            }
        });
        imageFigure.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') moveImage(-1);
            if (event.key === 'ArrowRight') moveImage(1);
        });
        imageFigure.addEventListener('pointerdown', event => {
            if (!event.target.closest('button')) swipeStart = event.clientX;
        });
        imageFigure.addEventListener('pointerup', event => {
            if (swipeStart === null) return;
            const delta = event.clientX - swipeStart;
            swipeStart = null;
            if (Math.abs(delta) > 45) moveImage(delta < 0 ? 1 : -1);
        });
        imageFigure.addEventListener('pointercancel', () => { swipeStart = null; });
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) stopAutoplay();
            else startAutoplay();
        });

        function setList(element, values) {
            element.replaceChildren(...values.map(value => {
                const item = document.createElement('li');
                item.textContent = value;
                return item;
            }));
        }

        function renderProject(nextLanguage) {
            const copy = project?.[nextLanguage] ?? project?.en;
            const ui = labels[nextLanguage] ?? labels.en;
            activeLanguage = nextLanguage;
            document.documentElement.lang = nextLanguage;
            document.querySelector('.project-nav').setAttribute('aria-label', ui.projectNav);
            imageFigure.setAttribute('aria-label', ui.gallery);
            previousButton.setAttribute('aria-label', ui.previousImage);
            nextButton.setAttribute('aria-label', ui.nextImage);
            carouselToggle.setAttribute('aria-label', userPaused ? ui.play : ui.pause);

            document.querySelectorAll('.project-detail-back').forEach(link => {
                link.href = 'index.html#projects';
            });
            document.querySelector('#back-label').textContent = ui.back;
            document.querySelector('#footer-back').textContent = ui.back;

            const sectionNames = ['challenge', 'features', 'engineering', 'architecture', 'data', 'stack'];
            sectionNames.forEach(name => {
                document.querySelector(`#label-${name}`).textContent = ui[name][0];
                document.querySelector(`#heading-${name}`).textContent = ui[name][1];
            });

            document.querySelectorAll('.language-button').forEach(button => {
                const selected = button.dataset.language === nextLanguage;
                button.classList.toggle('active', selected);
                button.setAttribute('aria-pressed', String(selected));
            });

            if (!project || !copy) {
                document.title = `${ui.notFound} | Alex Gascón Navarro`;
                title.textContent = ui.notFound;
                description.textContent = ui.notFoundCopy;
                document.querySelector('.project-detail-grid').hidden = true;
                document.querySelector('#detail-visual').hidden = true;
                document.querySelector('#detail-live').hidden = true;
                document.querySelector('#detail-repo').hidden = true;
                return;
            }

            discoverProjectImages(project).then(discoveredImages => {
                if (!discoveredImages.length) return;
                const sameImages = discoveredImages.length === images.length
                    && discoveredImages.every((item, index) => {
                        const src = typeof item === 'string' ? item : item.src;
                        const current = typeof images[index] === 'string' ? images[index] : images[index]?.src;
                        return src === current;
                    });
                if (sameImages) return;
                images = discoveredImages;
                imageIndex = 0;
                imageFigure.hidden = false;
                renderImage();
                startAutoplay();
            });

            document.title = `${project.title} | Alex Gascón Navarro`;
            document.querySelector('meta[name="description"]').content = copy.summary;
            document.querySelector('#detail-category').textContent = copy.category;
            title.textContent = project.title;
            description.textContent = copy.summary;
            document.querySelector('#detail-challenge').textContent = copy.challenge;
            document.querySelector('#detail-engineering').textContent = copy.engineering;
            document.querySelector('#detail-architecture').textContent = copy.architecture;
            document.querySelector('#detail-data').textContent = copy.data;
            setList(document.querySelector('#detail-features'), copy.features);
            setList(document.querySelector('#detail-stack'), project.stack);

            images = Array.isArray(project.images) ? project.images : (project.image ? [project.image] : []);
            imageIndex = Math.min(imageIndex, Math.max(images.length - 1, 0));
            if (images.length) {
                imageFigure.hidden = false;
                renderImage();
                startAutoplay();
                image.onerror = () => {
                    images.splice(imageIndex, 1);
                    if (!images.length) {
                        stopAutoplay();
                        imageFigure.hidden = true;
                        return;
                    }
                    imageIndex %= images.length;
                    renderImage();
                    startAutoplay();
                };
            } else {
                stopAutoplay();
                imageFigure.hidden = true;
                imageCaption.hidden = true;
                imageCounter.hidden = true;
                previousButton.hidden = true;
                nextButton.hidden = true;
                carouselToggle.hidden = true;
            }

            const liveLink = document.querySelector('#detail-live');
            liveLink.textContent = ui.live;
            if (project.live) {
                liveLink.href = project.live;
                liveLink.hidden = false;
            } else {
                liveLink.hidden = true;
            }

            const sourceLink = document.querySelector('#detail-repo');
            sourceLink.textContent = ui.source;
            sourceLink.href = project.repo;
            sourceLink.hidden = !project.repo;

            const params = new URLSearchParams({ id: projectId });
            if (nextLanguage !== 'en') params.set('lang', nextLanguage);
            history.replaceState(null, '', `project.html?${params.toString()}`);
        }

        document.querySelectorAll('.language-button').forEach(button => {
            button.addEventListener('click', () => renderProject(button.dataset.language));
        });

        renderProject(language);
        return;
    }

    document.querySelectorAll('#projects .project-card').forEach(card => {
        const title = card.querySelector('.project-title')?.textContent.trim();
        const id = projectIds.get(title);
        if (!id) return;

        card.dataset.projectId = id;
        card.tabIndex = 0;
        card.setAttribute('aria-label', `Open full project details for ${title}`);

        const detailLink = document.createElement('a');
        detailLink.className = 'project-detail-cta';
        detailLink.href = pageHref(id, document.documentElement.lang || 'en');
        detailLink.textContent = 'Read project details';
        detailLink.addEventListener('click', event => {
            detailLink.href = pageHref(id, document.documentElement.lang || 'en');
            event.stopPropagation();
        });
        card.querySelector('.project-content').append(detailLink);

        card.addEventListener('click', event => {
            if (event.target.closest('a, button')) return;
            window.location.href = pageHref(id, document.documentElement.lang || 'en');
        });
        card.addEventListener('keydown', event => {
            if (event.target !== card || (event.key !== 'Enter' && event.key !== ' ')) return;
            event.preventDefault();
            window.location.href = pageHref(id, document.documentElement.lang || 'en');
        });
    });
})();
