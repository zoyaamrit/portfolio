  /* ───────────── DATA ───────────── */
  const ME = {
    name: "tanvi amrit",
    tagline: "studying creative technology.",
    bio: "My projects explore digital experiences, animation, storytelling and interactive installation. I'm passionate about working at the intersection of art and technology. ",
    links: [
        { label: "Email", href: "mailto:tanviamrit03@gmail.com" },
        { label: "GitHub", href: "https://github.com/zoyaamrit" },
        { label: "Resume", href: "imgs/resume.pdf" },
        { label: "Instagram", href: "https://www.instagram.com/wall_stories/"}

    ],
    portrait: "imgs/me.png", 
    about: "I enjoy working at intersections. I don't believe that anything exists in isolation, and my work reflects that.\n\n My projects lie at the confluence of art, design and technology. I'm particularly interested in exploring storytelling and interaction. I think creative technology will transform storytelling by opening doors for immersive experiences that enhance meaning, invite thought, and compose compelling narratives.",
    ed: " BS Computer Science, BFA Studio Art @ Tufts. Incoming M.S. Integrated Design and Media @ NYU", 
    };


const PROJECTS = [
      {
        id: 1,
        title: "Pulse ",
        sub: "Interactive Installation · 2026",
        type: "Interactive Installation",
        year: "2026",
        tags: ["Creative Code", "Arduino", "Electronics", "Installation", "Research"],
        img: "imgs/thesis/landscape_1394.png",
        desc: "An interactive piece featuring an electronic setup connected to a projection. A pulse sensor captures real-time pulse data that, when interacted with, generates a dynamic digital landscape built from the participant's heartbeat. ",
        links: [{label: "About", url: "imgs/thesis.html"}],
        role: "Developer & Designer",
        duration: "ongoing",
        quote: { text: "If you unravel your DNA, it can wrap the solar system 10 times over. The wiring of your brain will short circuit the most powerful computer on earth. People do not simply pass through space, they shape it. I aim to document this transformation. ", cite: "Pulse" },
    },
    {
        id: 2,
        title: "Ripple",
        sub: "Interactive Animation · 2026",
        type: "Interactive Animation",
        year: "2026",
        tags: ["Animation", "Creative Coding", "P5.js"],
        img: "imgs/waves.gif",
        links: [
            {label: "Preview", url:"https://editor.p5js.org/zoyaa/full/kvEVUgxob"}, 
            {label: "View Video", url: "https://player.vimeo.com/video/1150592682?h=497ca02101"}],
        role: "Designer and Programmer",
        duration: "4 months",
        desc: " This began as animation, built by compositing multiple 12-24 frame loops into a coherent narrative. I then converted the animation into an interactive piece, where the user could compose music by clicking on the screen, and creating an environment for the character.  ",
        quote: { text: "moving from independent loops to animation to interaction", cite: "Ripple Project" },  
    
    },

    { 
        id: 3,
        title: "Strange New Places",
        sub: "Music Video· 2026",
        type: "Animation",
        year: "2026",
        tags: ["Animation", "Video Editing", "Drawing"],
        img: "imgs/para.gif",
        links: [{label: "Watch Video",  url: "https://www.youtube.com/embed/5bCvHD8Lhyc?si=aJr5yYKNPsTsDYi1"}],
        desc: "A music video for Aadya Jaswal's song, Strange New Places. Through hand drawn images and text, the animated movements visualise and emulate the emotions in the song. ", 
        role: "Animator",
        duration: "4 months",
        quote: { text: "lyric video built from 3000 frames", cite: "Strange New Places" },

    },
    {
        id: 4,
        title: "Mythical Safari",
        sub: "Creative Coding · 2024",
        type: "Website",
        year: "2024",
        tags: ["Javascript", "Web Design", "Story Building", "Illustration"],
        img: "imgs/forest.png",
        links: [{label: "Preview", url: "https://zoyaamrit.github.io/myth_narrative/"}],
        desc: "An interactive, narrative website inspired by Ray Bradbury's 'A Sound of Thunder'. The piece invites you to navigate a mythical world and adapts the narrative according to the decisions you make, eventually showing an alternate future",
        role: "Designers & Developer",
        duration: "2 months",    
        quote: { text: "exploring branching narratives, parallax, and time travel", cite: "Mythical Safari" },

    },
    {
        id: 5,
        title: "33 Answers to Fall in Love",
        sub: "Book · 2024",
        type: "Artist Book",
        year: "2022",
        links: [
            {label: "Cover", url: "imgs/cover.png"}, 
            {label: "Page", url: "imgs/page1.jpg"}, 
        ],

        tags: ["InDesign", "Typography", "Graphic Design", "Print on Demand"],
        img: "imgs/page1.jpg",
        desc: "The book uses expressive text, typography and image to convey the voice of the interviewee. The interview is adopted from a study that aims to accelerate intimacy between strangers through 36 increasingly personal questions.",
        role: "Artist",
        duration: "2 months",
        quote: { text: "trying to capture someone's voice through type", cite: "33 Answers" },

    },
    {
        id: 6, 
        title: "Musical(c)ity", 
        sub: "Animation · 2023 ", 
        type: "Animation",
        year: "2023", 
        links: [{label: "Preview", url: "https://player.vimeo.com/video/1184234066?h=39b69dd726"}], 
        tags: ["Animation", "Drawing", "Premiere Pro", "Editing"], 
        img: "imgs/musicality.png", 
        desc: "An animation built from music sheets, using characters to redefine the lines and notes as a cityscape. Animated through drawings and edited together with music by Gaby Namouni. ", 
        duration: "3 months", 
        quote: {text: "constructing a city through music sheets", cite: "Musical(c)ity"}
    }, 
    {
        id: 7,
        title: "Textile",
        sub: "Data Vis · 2024",
        type: "Data Visualization",
        year: "2024",
        tags: ["p5.js", "Web Design", "Research"],
        img: "imgs/TextAsImage.png",
        desc: "A web art project inspired by the DADA movement. Exploring the 'absurd' in a digital space, this piece opens with a text box for a viewer to input in any text, and renders the input as grid of pixels.",
        links: [{label: "Preview", url: "https://zoyaamrit.github.io/pixel_text/"}],
        role: "Developer & Designer",
        duration: "1 month",
        quote: { text: "demonstrating the dadaist assault on meaning", cite: "Textile" },
    },

];



const IMAGE_BANK = [
    "imgs/cheers.gif",
    "imgs/circles.gif",
    "imgs/puzzle.gif",
    "imgs/twirl.gif",
    "imgs/pasta.gif",
    "imgs/Pixels on transparency as film.gif", 
    "imgs/embroidered_film.gif", 
    "imgs/experimental observation drawings.gif"
];

shuffle(IMAGE_BANK);

/* ───────────── CURSOR ───────────── */
const cursor = document.getElementById('cursor');
let mx = -200, my = -200;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function addHover(el) {
  el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
}

/* ───────────── LOADER ───────────── */
function initLoader() {
  const nameEl = document.getElementById('loader-name');
  const full = ME.name;
  full.split('').forEach((ch, i) => {
    const span = document.createElement('span');
    span.className = 'name-char' + (ch === ' ' ? ' space' : '');
    span.textContent = ch === ' ' ? '\u00A0' : ch;
    span.style.animationDelay = (i * 0.06) + 's';
    nameEl.appendChild(span);
  });

  const totalDur = full.length * 60 + 700;
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('done');
    document.getElementById('name-logo').classList.add('visible');
    setTimeout(() => { loader.style.display = 'none'; }, 800);
  }, totalDur + 300);
}

/* ───────────── GRID BUILD ───────────── */
function buildGrid() {
    const wrapper = document.getElementById('grid-wrapper');
    wrapper.innerHTML = '';

    // about me cell   
    const aboutCell = makeCell('cell-about', null);
    aboutCell.innerHTML = `
        <div class="about-label">About Me</div>
        <h1>${ME.tagline}</h1>
        <p>${ME.bio}</p> </br>
        <p>[try reloading site for a new layout]<p>

        <div class="links">${ME.links.map(l => `<a href="${l.href}" target="_blank" class="hoverable">${l.label}</a>`).join('')}</div>
    `;

    wrapper.appendChild(aboutCell);

    const portraitCell = makeCell('cell-portrait', null);
    portraitCell.innerHTML = `<img src="imgs/cafe.gif" alt="Portrait">`;
    wrapper.appendChild(portraitCell);

    let img_id = 0; 


    // PROJECT ROWS
    PROJECTS.forEach((p, idx) => {
        const cells = buildProjectRow(p, idx);
        cells.forEach(c => wrapper.appendChild(c));

        // if((idx - 1) % 2 == 0) {
        //     // cells2 = buildInterruptRow(img_id);
        //     // cells2.forEach(c => wrapper.appendChild(c));
        //     wrapper.appendChild(buildInterruptRow(img_id));

        //     img_id = img_id + 1; 

        // }
    });

    // attach hover to all clickable
    wrapper.querySelectorAll('.clickable').forEach(addHover);
}

function buildProjectRow(p, idx) {

    // const positions = [0, 1, 2];
    // shuffle(positions);

    // const cells = [null, null, null];

    // cells[positions[0]] = makeImageCell(p);
    // cells[positions[1]] = makeTitleCell(p, idx);
    // cells[positions[2]] = makeQuoteCell(p)
    // // cells[positions[3]] = makeBlankCell();
    // return cells;

    const positions = [0, 1]; 
    shuffle(positions); 

    const cells = [null, null]; 

    cells[positions[0]] = makeImageCell(p); 
    cells[positions[1]] = makeTitleCell(p, idx);

    return cells; 


}

function buildInterruptRow(idx) {
    // const cells = [null, null, null];

    // const positions = [0, 1, 2]; 
    // shuffle(positions); 

    // const imgPos = positions[0]; 
    // const blank  = positions[1]; 
    // const blank1 = positions[2]; 

    // cells[imgPos] = makeImageCellExtra(IMAGE_BANK[idx])
    // cells[blank] = makeBlankCell();
    // cells[blank1] = makeBlankCell();


    return makeImageCellExtra(IMAGE_BANK[idx]);
}

function makeCell(cls, project) {
  const div = document.createElement('div');
  div.className = 'grid-cell ' + cls;
  // if (project && cls == 'cell-title clickable') {
  if (project && cls != 'cell-quote') {
    div.classList.add('clickable');
    div.dataset.project = project.id;
    div.addEventListener('click', () => openModal(project));
  }
  return div;
}


function makeImageCell(p) {
  const div = makeCell('cell-image', p);
  div.innerHTML = `<img src="${p.img}" alt="${p.title}" loading="lazy">`;
  return div;
}

function makeQuoteCell(p) {
    const div = makeCell('cell-quote', p)
    div.innerHTML = `<blockquote>${p.quote.text}<cite>${p.quote.cite}</cite></blockquote>`;
    return div;
}

function makeImageCellExtra(i) {
    const div = document.createElement('div');
    div.className = 'grid-cell cell-image non-proj-img';
    div.innerHTML = `<img src="${i}" loading="lazy">`;
    return div; 
}

function makeTitleCell(p, idx) {
  const div = makeCell('cell-title clickable', p);
  div.innerHTML = `
    <div class="proj-num">Project ${String(idx + 1).padStart(2,'0')}</div>
    <h2>${p.title}</h2>
    <div class="sub">${p.sub}</div>
    <div class="tags">${p.tags.slice(0,3).map(t => `<span class="tag">${t}</span>`).join('')}</div>
  `;
  return div;

}



function makeBlankCell() {
    const div = document.createElement('div');
        div.className = 'grid-cell cell-blank';
    return div;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ───────────── LIST BUILD ───────────── */
function buildList() {
  const container = document.getElementById('list-rows');
  container.innerHTML = '';
  PROJECTS.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'list-row clickable';
    row.innerHTML = `
      <span class="lr-num">${String(i+1).padStart(2,'0')}</span>
      <span class="lr-title">${p.title}</span>
      <span class="lr-type">${p.type}</span>
      `;
    row.addEventListener('click', () => openModal(p));
    container.appendChild(row);
  });
  document.querySelectorAll('.list-row').forEach(addHover);
}

/* ───────────── MODAL ───────────── */
function isEmbedUrl(url) {
  // YouTube embed, Vimeo embed, or explicit /embed/ paths are video-ratio
  return /youtube\.com\/embed|youtu\.be|vimeo\.com\/video/.test(url);
}


function openModal(p) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  const links = p.links || [];
  const hasLinks = links.length > 0;

  // ── Tabs bar (Details always first, then one tab per link)
  const tabsHTML = hasLinks ? `
    <div class="modal-tabs">
      <button class="modal-tab active" data-panel="detail">Details</button>
      ${links.map((l, i) => `
        <button class="modal-tab" data-panel="iframe-${i}" data-url="${l.url}">
          ${l.label}
        </button>`).join('')}
    </div>` : '';

  // ── One iframe panel per link, all hidden initially
  const iframesHTML = links.map((l, i) => `
    <div class="modal-iframe-panel" id="modal-iframe-panel-${i}">
      <div class="modal-iframe-wrap ${isEmbedUrl(l.url) ? 'ratio-video' : 'ratio-site'}">
        <iframe src="" data-src="${l.url}" allowfullscreen
          allow="autoplay; fullscreen; encrypted-media;" title="${l.label}" loading="lazy"></iframe>
      </div>
      <div class="modal-iframe-fallback">
        <p>If the preview doesn't load, open externally.</p>
        <a href="${l.url}" target="_blank" rel="noopener"
          class="modal-open-ext hoverable">Open externally ↗</a>
      </div>
    </div>`).join('');

  // ── Link row in the Details meta section
  const linksMetaHTML = hasLinks ? `
    <div class="modal-meta-item" style="grid-column: span 2">
      <label>Links</label>
      <span style="display:flex; gap:16px; flex-wrap:wrap">
        ${links.map(l => `
          <a href="${l.url}" target="_blank" rel="noopener"
            class="modal-open-ext hoverable">${l.label} ↗</a>`).join('')}
      </span>
    </div>` : '';

  

  content.innerHTML = `
    ${tabsHTML}
    ${iframesHTML}
    <div class="modal-detail-panel active" id="modal-detail-panel">
      <div class="modal-body">
        <h2 class="modal-title">${p.title}</h2>
        <div class="modal-cat">${p.sub}</div>

        <p class="modal-desc">${p.desc}</p>
        <div class="modal-tags">
          ${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}
        </div>
        <div class="modal-meta">
          ${linksMetaHTML}
        </div>
      </div>
    </div>
  `;

  // ── Tab switching
  content.querySelectorAll('.modal-tab').forEach(tab => {
    addHover(tab);
    tab.addEventListener('click', () => {
      const panel = tab.dataset.panel;

      // update active tab style
      content.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // hide all panels
      document.getElementById('modal-detail-panel').classList.remove('active');
      links.forEach((_, i) => {
        document.getElementById(`modal-iframe-panel-${i}`)?.classList.remove('active');
      });

      if (panel === 'detail') {
        document.getElementById('modal-detail-panel').classList.add('active');
      } else {
        const iframePanel = document.getElementById(`modal-iframe-panel-${panel.split('-')[1]}`);
        iframePanel.classList.add('active');
        // lazy-load src on first open
        const iframe = iframePanel.querySelector('iframe');
        if (!iframe.src || iframe.src === window.location.href) {
          iframe.src = iframe.dataset.src;
        }
        document.getElementById('modal-box').scrollTop = 0;
      }
    });
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  addHover(document.getElementById('modal-close'));
  content.querySelectorAll('.hoverable').forEach(addHover);
}
function closeModal() {
    document.getElementById('modal-overlay').classList.remove('open');
    document.body.style.overflow = '';
  // stop any playing iframe (video/site) by clearing src
    const iframe = document.querySelector('#modal-content iframe');
    if (iframe) iframe.src = '';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-blur-bg').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


/* ───────────── VIEW SWITCHING ───────────── */
let currentView = 'grid';
const VIEWS = {
  grid:    document.getElementById('grid-view'),
  list:    document.getElementById('list-view'),
  gallery: document.getElementById('gallery-view'),
};

function showView(name) {
  VIEWS.grid.classList.toggle('hidden', name !== 'grid');
  VIEWS.list.classList.toggle('active', name === 'list');
  VIEWS.gallery.classList.toggle('active', name === 'gallery');
  document.getElementById('nav-projects').classList.toggle('active', name === 'list');
  document.getElementById('nav-projects').textContent = name === 'list' ? 'Project Grid-View' : 'Project List-View';
  document.getElementById('nav-gallery').classList.toggle('active', name === 'gallery');
  currentView = name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// function showView(name) {
//   VIEWS.grid.classList.toggle('hidden', name !== 'grid');
//   VIEWS.list.classList.toggle('active', name === 'list');
//   VIEWS.gallery.classList.toggle('active', name === 'gallery');

//   const projects = document.getElementById('nav-projects');
//   const gallery  = document.getElementById('nav-gallery');

//   projects.classList.toggle('active', name === 'list');
//   gallery.classList.toggle('active', name === 'gallery');

//   // relabel based on what the link will do next
//   projects.textContent = name === 'list' ? 'Project Grid' : 'Project List';
//   gallery.textContent  = name === 'gallery' ? 'Back' : 'Gallery';

//   currentView = name;
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

document.getElementById('nav-projects').addEventListener('click', e => {
  e.preventDefault();
  showView(currentView === 'list' ? 'grid' : 'list'); 

});
document.getElementById('nav-gallery').addEventListener('click', e => {
  e.preventDefault();
  showView(currentView === 'gallery' ? 'grid' : 'gallery');
});
document.getElementById('nav-about').addEventListener('click', e => {
  e.preventDefault();
  openAbout(); 
});
document.getElementById('name-logo').addEventListener('click', () => location.reload());
document.querySelectorAll('nav a').forEach(addHover);



/* ───────────── STAGGER ANIMATION ───────────── */
function staggerCells() {
  document.querySelectorAll('.grid-cell').forEach((cell, i) => {
    cell.style.animationDelay = (i * 0.04) + 's';
  });
}
/* ───────────── ABOUT OVERLAY ───────────── */
function buildAbout() {
  const content = document.getElementById('about-content');
  const paras = ME.about.split((/\n+/)).map(t => `</br><p>${t.trim()}</p>`).join('');


 content.innerHTML = `
    <div class="about-portrait"><img src="${ME.portrait}" alt="${ME.name}"></div>
    <div class="cell-about">
      <div class="about-label">More about me</div>
      <h1>${ME.name}</h1>
      ${paras}
      <div class="links">
        ${(ME.links || []).map(l => `<a href="${l.href}" target="_blank" rel="noopener" class="hoverable">${l.label}</a>`).join('')}
        ${ME.email ? `<a href="mailto:${ME.email}" class="hoverable">Email</a>` : ''}
      </div>
      </br><p>${ME.ed}</p>
    </div>`;
  content.querySelectorAll('.hoverable').forEach(addHover);
}

function openAbout() {
  document.getElementById('about-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeAbout() {
  document.getElementById('about-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('about-close').addEventListener('click', closeAbout);
document.getElementById('about-blur-bg').addEventListener('click', closeAbout);
addHover(document.getElementById('about-close'));

/* ───────────── GALLERY ───────────── */
function prettyName(path) {
  return path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
}

function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  grid.innerHTML = '';
  const items = (typeof GALLERY !== 'undefined' && GALLERY.length)
    ? GALLERY
    : IMAGE_BANK.map(src => ({ src, name: prettyName(src) }));

  items.forEach((it, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item clickable';
    div.innerHTML = `
      <img src="${it.src}" alt="${it.name}" loading="lazy">
      <div class="gi-cap">
        <span class="gi-name">${it.name}</span>
        <span class="gi-idx">${String(i + 1).padStart(2, '0')}</span>
      </div>`;
    div.addEventListener('click', () => openLightbox(it.src, it.name));
    grid.appendChild(div);
  });
  grid.querySelectorAll('.clickable').forEach(addHover);
}

function openLightbox(src, alt) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src; img.alt = alt || '';
  lb.classList.add('open');
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.getElementById('lightbox-img').src = '';
}
document.getElementById('lightbox-bg').addEventListener('click', closeLightbox);
document.getElementById('lightbox-img').addEventListener('click', closeLightbox);
addHover(document.getElementById('lightbox-img'));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeAbout(); closeLightbox(); }
});

/* ───────────── INIT ───────────── */
initLoader();
buildGrid();
buildList();
staggerCells();
buildAbout();
buildGallery();