(() => {
  const c = window.siteContent;
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
  document.querySelector('#publications-title').textContent = c.publicationsTitle;
  document.querySelector('.filters').remove();
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
})();
