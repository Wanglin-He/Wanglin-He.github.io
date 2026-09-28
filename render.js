function renderSite(c) {
  if (!c) return;
  const make = (tag, text, className) => {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  const safeUrl = value => {
    if (!value) return null;
    try {
      const url = new URL(value, location.href);
      return ['https:', 'http:', 'mailto:', 'file:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const link = ({ label, url }) => {
    const href = safeUrl(url);
    const node = make(href ? 'a' : 'span', label);
    if (href) node.href = href;
    return node;
  };
  const paragraph = text => {
    const p = make('p');
    const re = /\[([^\]]+)\]\(([^)]+)\)/g;
    let cursor = 0;
    for (const match of text.matchAll(re)) {
      p.append(text.slice(cursor, match.index), link({ label: match[1], url: match[2] }));
      cursor = match.index + match[0].length;
    }
    p.append(text.slice(cursor));
    return p;
  };
  document.title = `${c.name} | Personal Website`;
  document.querySelector('#intro-title').textContent = c.name;
  document.querySelector('.role').textContent = c.tagline;
  document.querySelector('.bio').replaceChildren(...c.bio.map(paragraph));
  const nav = document.querySelector('.links');
  nav.setAttribute('aria-label', 'Profile links');
  nav.replaceChildren(...c.links.map(link));
  const photo = document.querySelector('.portrait img');
  photo.src = c.portrait;
  photo.alt = `Portrait of ${c.name}`;
  let sectionAnchor = document.querySelector('.hero');
  for (const [key, title] of [['projects', 'Projects'], ['honors', 'Honors']]) {
  const projectSection = make('section', '', `section ${key}-section`);
  projectSection.setAttribute('aria-labelledby', `${key}-title`);
  const projectHeading = make('h2', title);
  projectHeading.id = `${key}-title`;
  projectSection.append(projectHeading);
  (c[key] || []).forEach((project, index) => {
    const article = make('article', '', 'project');
    const meta = make('div', '', 'project-meta');
    meta.append(make('span', project.dates));
    const body = make('div', '', 'project-body');
    body.append(make('h3', project.title), make('p', project.context, 'project-context'));
    if (project.image) {
      const image = make('img', '', 'project-image');
      image.src = project.image;
      image.alt = project.title;
      image.loading = 'lazy';
      meta.prepend(image);
      article.classList.add('project-with-image');
    }
    const descriptions = project.summary.split(/\n\s*\n/).filter(Boolean);
    descriptions.forEach((text, i) => body.append(make('p', text, i === 0 ? 'project-summary' : 'project-description')));
    if (project.contribution?.trim()) {
      const contribution = make('div', '', 'project-contribution');
      contribution.append(make('span', 'My contribution', 'contribution-label'), make('p', project.contribution));
      body.append(contribution);
    }
    const tags = make('div', '', 'project-tags');
    tags.append(...(project.tags || []).map(tag => make('span', tag)));
    const links = make('div', '', 'paper-links');
    links.append(...(project.links || []).map(link));
    body.append(tags, links);
    article.append(meta, body);
    projectSection.append(article);
  });
  document.querySelector(`.${key}-section`)?.remove();
  sectionAnchor.after(projectSection);
  sectionAnchor = projectSection;
  }
  document.querySelector('#publications-title').textContent = c.publicationsTitle;
  document.querySelector('.filters')?.remove();
  const list = document.querySelector('.pub-list');
  list.classList.remove('publication-draft');
  list.replaceChildren();
  const note = document.querySelector('.note');
  note.textContent = c.emptyPublications;
  note.hidden = c.publications.length > 0;
  c.publications.forEach(paper => {
    const article = make('article', '', 'publication');
    article.style.gridTemplateColumns = '1fr';
    const body = make('div', '', 'pub-body');
    body.append(make('h3', paper.title), make('p', paper.authors, 'authors'));
    if (paper.venue) body.append(make('span', paper.venue, 'venue'));
    if (paper.summary) body.append(make('p', paper.summary, 'summary'));
    const links = make('div', '', 'paper-links');
    links.append(...(paper.links || []).map(link));
    body.append(links);
    article.append(body);
    list.append(article);
  });
  document.querySelector('footer').replaceChildren(
    make('span', `© ${new Date().getFullYear()} ${c.name}`), make('span', c.footer)
  );
}
renderSite(window.siteContent);
if (window.parent !== window && ['127.0.0.1', 'localhost'].includes(location.hostname)) {
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.source === window.parent && event.data?.type === 'preview-content') {
      renderSite(event.data.content);
    }
  });
}
