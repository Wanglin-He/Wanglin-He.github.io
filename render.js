// 把 content.js 里的内容显示到网页上，日常修改不需要动这个文件。
const ICONS = {
  email: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  cv: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  scholar: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
  pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
  award: '<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  bot: '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>',
  layers: '<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
  cube: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  spark: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>'
};

const SECTIONS = [
  ['research', 'Research'],
  ['projects', 'Projects'],
  ['publications', 'Publications'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['honors', 'Honors']
];

function renderSite(c) {
  if (!c) return;
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const icon = name => {
    const span = make('span', 'icon');
    span.setAttribute('aria-hidden', 'true');
    if (ICONS[name]) span.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
    return span;
  };
  const safeUrl = value => {
    if (!value) return null;
    try {
      const url = new URL(value, location.href);
      return ['https:', 'http:', 'mailto:', 'file:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const link = (label, url, className) => {
    const href = safeUrl(url);
    const node = make(href ? 'a' : 'span', className, label);
    if (href) {
      node.href = href;
      if (/^https?:/.test(href) && new URL(href).host !== location.host) {
        node.target = '_blank';
        node.rel = 'noopener';
      }
    }
    return node;
  };
  // 支持 [文字](网址) 和 **加粗**
  const rich = (tag, text, className) => {
    const node = make(tag, className);
    const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let cursor = 0;
    for (const m of (text || '').matchAll(re)) {
      node.append(text.slice(cursor, m.index), m[3] ? make('strong', '', m[3]) : link(m[1], m[2]));
      cursor = m.index + m[0].length;
    }
    node.append((text || '').slice(cursor));
    return node;
  };
  const linkRow = items => {
    const row = make('div', 'item-links');
    row.append(...(items || []).map(item => link(item.label, item.url)));
    return row;
  };
  const section = (id, title, intro) => {
    const el = make('section', 'section');
    el.id = id;
    el.setAttribute('aria-labelledby', `${id}-title`);
    const h2 = make('h2', '', title);
    h2.id = `${id}-title`;
    el.append(h2);
    if (intro) el.append(rich('p', intro, 'section-intro'));
    return el;
  };

  document.title = c.name;

  // 顶部导航
  const present = SECTIONS.filter(([key]) => key === 'research' ? c.research?.areas?.length : c[key]?.length);
  const brand = document.querySelector('.brand');
  brand.textContent = c.name;
  const nav = document.querySelector('.nav-links');
  nav.replaceChildren(...present.map(([key, title]) => {
    const a = make('a', '', title);
    a.href = `#${key}`;
    return a;
  }));

  const main = document.querySelector('main');
  main.replaceChildren();

  // 个人信息
  const hero = make('section', 'hero');
  hero.setAttribute('aria-label', 'About');
  const info = make('div', 'hero-info');
  info.append(make('h1', '', c.name), make('p', 'tagline', c.tagline));
  if (c.location) {
    const loc = make('p', 'location');
    loc.append(icon('pin'), c.location);
    info.append(loc);
  }
  const buttons = make('div', 'buttons');
  buttons.append(...c.links.map(item => {
    const a = link('', item.url, 'button');
    a.append(icon(item.icon), item.label);
    return a;
  }));
  info.append(buttons);
  const photo = make('img', 'portrait');
  photo.src = c.portrait;
  photo.alt = `Portrait of ${c.name}`;
  photo.width = 520;
  photo.height = 520;
  const bio = make('div', 'bio');
  bio.append(...c.bio.map(text => rich('p', text)));
  hero.append(info, photo, bio);
  main.append(hero);

  // 研究方向
  if (c.research?.areas?.length) {
    const el = section('research', 'Research', c.research.intro);
    const grid = make('div', 'cards');
    grid.append(...c.research.areas.map(area => {
      const card = make('div', 'card');
      card.append(icon(area.icon), make('h3', '', area.title), make('p', '', area.text));
      return card;
    }));
    el.append(grid);
    main.append(el);
  }

  // 项目和论文：左图右文
  const entry = (item, isPaper) => {
    const article = make('article', item.image ? 'entry' : 'entry no-image');
    if (item.image) {
      const img = make('img', 'thumb');
      img.src = item.image;
      img.alt = item.title;
      img.loading = 'lazy';
      img.width = 720;
      img.height = 540;
      article.append(img);
    }
    const body = make('div', 'entry-body');
    body.append(make('h3', '', item.title));
    if (isPaper) body.append(rich('p', item.authors, 'authors'));
    else if (item.context) body.append(make('p', 'context', item.context));
    const venueText = isPaper ? item.venue : item.status;
    if (venueText || item.highlight) {
      const venue = make('p', 'venue', venueText);
      if (item.highlight) {
        const award = make('span', 'highlight');
        award.append(icon('award'), item.highlight);
        if (venueText) venue.append(' · ');
        venue.append(award);
      }
      body.append(venue);
    }
    if (item.summary) body.append(rich('p', item.summary, 'summary'));
    if (item.links?.length) body.append(linkRow(item.links));
    article.append(body);
    return article;
  };
  if (c.projects?.length) {
    const el = section('projects', 'Projects');
    el.append(...c.projects.map(p => entry(p, false)));
    main.append(el);
  }
  if (c.publications?.length) {
    const el = section('publications', 'Publications');
    el.append(...c.publications.map(p => entry(p, true)));
    main.append(el);
  }

  // 两列表格
  for (const [key, title] of SECTIONS.slice(3)) {
    if (!c[key]?.length) continue;
    const el = section(key, title);
    const table = make('div', 'rows');
    table.append(...c[key].map(row => {
      const div = make('div', 'row');
      const text = rich('span', row.text, 'row-text');
      if (row.links?.length) row.links.forEach(l => text.append(' ', link(`[${l.label}]`, l.url)));
      div.append(make('span', 'row-label', row.label), text);
      return div;
    }));
    el.append(table);
    main.append(el);
  }

  const footer = document.querySelector('footer');
  footer.replaceChildren(
    make('span', '', `© ${new Date().getFullYear()} ${c.name}${c.updated ? ` · Last updated ${c.updated}` : ''}`),
    Object.assign(make('a', '', 'Back to top ↑'), { href: '#top' })
  );

  // 滚动时高亮当前板块
  const navLinks = [...nav.querySelectorAll('a')];
  const setActive = id => navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  const sections = present.map(([key]) => document.getElementById(key));
  let previous = null;
  const update = () => {
    const offset = document.querySelector('.site-nav').offsetHeight + 24;
    let current = '';
    for (const s of sections) if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2 && sections.length) {
      current = sections[sections.length - 1].id;
    }
    if (current === previous) return;
    previous = current;
    setActive(current);
    const active = nav.querySelector('a.active');
    if (active && nav.scrollWidth > nav.clientWidth) {
      const left = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
      nav.scrollTo({ left, behavior: 'smooth' });
    }
  };
  window.removeEventListener('scroll', window.__navUpdate || (() => {}));
  window.__navUpdate = update;
  window.addEventListener('scroll', update, { passive: true });
  update();
}

renderSite(window.siteContent);
if (window.parent !== window && ['127.0.0.1', 'localhost'].includes(location.hostname)) {
  window.addEventListener('message', event => {
    if (event.origin === location.origin && event.source === window.parent && event.data?.type === 'preview-content') {
      renderSite(event.data.content);
    }
  });
}
