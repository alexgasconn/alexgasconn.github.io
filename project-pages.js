(() => {
  const projects = window.projectDetails ?? {};
  const projectIds = new Map([
    ['TrailNav', 'trailnav'],
    ['TrekkingTime Pro', 'trekkingtime-pro'],
    ['Race Planner Pro', 'race-planner-pro'],
    ['100 Cims Map', '100-cims'],
    ['Oasis', 'oasis'],
    ['GPX Master Pro', 'gpx-master-pro'],
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

  const detailRoot = document.querySelector('#project-detail');
  if (detailRoot) {
    const labels = {
      en: {
        back: 'Back to selected work',
        live: 'Open live project',
        source: 'View source on GitHub',
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
      document.documentElement.lang = nextLanguage;
      document.querySelector('.project-nav').setAttribute('aria-label', ui.projectNav);

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

      const imageFigure = document.querySelector('#detail-visual');
      const image = document.querySelector('#detail-image');
      if (project.image) {
        image.src = project.image;
        image.alt = `${project.title} — ${copy.category}`;
        imageFigure.hidden = false;
        image.onerror = () => { imageFigure.hidden = true; };
      } else {
        imageFigure.hidden = true;
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
