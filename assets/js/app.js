/* =========================================================
   个人主页 · 交互脚本
   想改内容优先看下面的 CONFIG 和 I18N
   ========================================================= */
const CONFIG = {
  github: "https://github.com/zhu-app",
  // ⚠️ 下面两项是占位内容，换成你自己的
  email: "hello@zhuweilang.com",
  wechat: "zhuweilang",
  game: "https://zhu-app.github.io/shanhai-demon-tide/",
  repo: "https://github.com/zhu-app/zhu-app.github.io"
};

/* ---------------- 文案 ---------------- */
const I18N = {
  zh: {
    "nav.home": "名片", "nav.projects": "项目", "nav.stack": "技术栈",
    "nav.timeline": "经历", "nav.contact": "联系",

    "hero.role": "全栈开发 / Full-Stack Developer",
    "hero.bio1": "你好，我是朱伟榔。喜欢一个人把一个想法从设计稿做到上线——前端、后端、数据库、部署，能自己扛下来的部分就不麻烦别人。",
    "hero.bio2": "最近几年把主要精力放在 AI 应用的工程落地上：流式对话、RAG 检索、Agent 工具调用。享受把模型能力变成真正有人用的功能。",
    "hero.status": "开放远程合作 · 随时可以聊聊",

    "now.title": "最近在忙",
    "now.k1": "在做", "now.v1": "Vireo —— 可自部署的多模型 AI 工作台",
    "now.k2": "在学", "now.v2": "Agent 评测、前端工程化与一点 Rust",
    "now.k3": "在读", "now.v3": "《设计中的设计》原研哉",

    "projects.title": "精选项目", "projects.more": "查看全部仓库 →", "projects.latest": "最近更新",

    "stack.title": "技术栈",
    "stack.front": "前端", "stack.back": "后端", "stack.data": "数据",
    "stack.ai": "AI", "stack.ops": "工程",

    "timeline.title": "经历",

    "play.title": "玩一下", "play.btn": "点击运行",
    "play.desc": "纯前端 HTML5 Canvas 塔防游戏，零依赖、无后端。四大关卡、多分支塔升级。",
    "play.open": "新标签页打开 →",

    "contact.title": "联系",
    "contact.desc": "有项目想聊、想招人、或者只是想认识一下，随时找我。邮件一般当天回。",
    "contact.note": "这个页面的源码也是开源的，欢迎来 GitHub 看。",

    "foot.source": "本站源码", "foot.top": "回到顶部", "foot.motto": "保持好奇",

    "p.vireo": "可自部署的多模型 AI 工作台：账号体系、流式对话、知识库检索、联网搜索与用量管理。",
    "p.zhiliao.t": "知聊",
    "p.zhiliao": "全栈 AI 聊天助手：SSE 流式输出、RAG 知识库、多 Agent 协作与 Docker 部署。",
    "p.shanhai.t": "山海妖潮",
    "p.shanhai": "中国神话主题的纯前端塔防游戏，四大关卡、多分支塔升级，所有逻辑与美术都是一个人写的。",
    "p.seat.t": "座位预约 Agent",
    "p.seat": "基于 function calling 的图书馆选座助手：选座地图、改期、签到与违约信用管理。",
    "p.data.t": "数据采集看板",
    "p.data": "从爬虫采集、MySQL 存储到可视化展示的完整数据流水线，一条链路跑通。",
    "p.gallery.t": "云相册",
    "p.gallery": "个人相册系统：多图拖拽上传、标签分类、滤镜、回收站与统计仪表盘。",

    "tl1.t": "独立开发 / 全栈",
    "tl1.d": "一个人从需求、设计到部署，做了十几个 AI 与 Web 项目，涵盖多模型工作台、RAG 问答、Agent 与数据看板。",
    "tl2.t": "某科技公司 · 后端开发",
    "tl2.d": "负责业务系统后端接口与数据库设计，参与从单体到服务拆分的迁移。",
    "tl3.t": "计算机相关专业 · 本科",
    "tl3.d": "系统学了数据结构、操作系统、网络与数据库，课余时间基本都在写项目。",

    "btn.github": "GitHub", "btn.projects": "查看项目", "btn.email": "发邮件", "btn.wechat": "复制微信",
    "copy.ok": "微信号已复制：", "contact.email": "邮箱", "contact.wechat": "微信", "contact.github": "GitHub",
    "meta.title": "朱伟榔 · 全栈开发",
    "meta.desc": "朱伟榔，全栈开发。用 Vue / React + Python / Node 把想法做成能用的产品，专注 AI 应用的工程落地。",
    "lang.label": "EN"
  },
  en: {
    "nav.home": "Profile", "nav.projects": "Projects", "nav.stack": "Stack",
    "nav.timeline": "Timeline", "nav.contact": "Contact",

    "hero.role": "Full-Stack Developer",
    "hero.bio1": "Hi, I'm Zhu Weilang. I like taking an idea from sketch to production on my own — frontend, backend, database, deployment. Whatever I can carry, I carry.",
    "hero.bio2": "These days I focus on shipping AI products: streaming chat, RAG retrieval and agent tool-calling. My favourite part is turning model output into something people actually use.",
    "hero.status": "Open to remote work · say hi anytime",

    "now.title": "What I'm up to",
    "now.k1": "Building", "now.v1": "Vireo — a self-hostable multi-model AI workspace",
    "now.k2": "Learning", "now.v2": "Agent evaluation, frontend architecture and a bit of Rust",
    "now.k3": "Reading", "now.v3": "Designing Design — Kenya Hara",

    "projects.title": "Selected Projects", "projects.more": "All repositories →", "projects.latest": "Recently updated",

    "stack.title": "Stack",
    "stack.front": "Front", "stack.back": "Back", "stack.data": "Data",
    "stack.ai": "AI", "stack.ops": "Ops",

    "timeline.title": "Timeline",

    "play.title": "Playground", "play.btn": "Click to run",
    "play.desc": "A pure front-end HTML5 Canvas tower defense game. Zero dependencies, no backend — four levels and branching upgrades.",
    "play.open": "Open in new tab →",

    "contact.title": "Contact",
    "contact.desc": "Got a project, a job, or just want to say hi? I usually reply the same day.",
    "contact.note": "The source of this page is open too — come take a look on GitHub.",

    "foot.source": "Source", "foot.top": "Back to top", "foot.motto": "stay curious",

    "p.vireo": "A self-hostable multi-model AI workspace: accounts, streaming chat, knowledge retrieval, web search and usage control.",
    "p.zhiliao.t": "Zhiliaoo",
    "p.zhiliao": "Full-stack AI chat assistant: SSE streaming, RAG knowledge base, multi-agent collaboration, Docker deploy.",
    "p.shanhai.t": "Demon Tide",
    "p.shanhai": "A Chinese-mythology tower defense game in pure Canvas. Four levels, branching upgrades — every line and pixel by one person.",
    "p.seat.t": "Seat Agent",
    "p.seat": "A library seat-booking assistant built on function calling: seat map, rescheduling, check-in and credit tracking.",
    "p.data.t": "Crawler Dashboard",
    "p.data": "A full data pipeline from crawling and MySQL storage to a visual dashboard — end to end.",
    "p.gallery.t": "Photo Gallery",
    "p.gallery": "Personal photo cloud: drag-and-drop upload, tags, filters, recycle bin and a stats dashboard.",

    "tl1.t": "Independent Developer / Full-Stack",
    "tl1.d": "Designed, built and shipped a dozen AI and web projects solo — multi-model workspaces, RAG Q&A, agents and dashboards.",
    "tl2.t": "Backend Developer · Tech Company",
    "tl2.d": "Owned backend APIs and schema design, took part in splitting a monolith into services.",
    "tl3.t": "B.Eng. in Computer Science",
    "tl3.d": "Data structures, OS, networking and databases by day; side projects by night.",

    "btn.github": "GitHub", "btn.projects": "Projects", "btn.email": "Email", "btn.wechat": "WeChat",
    "copy.ok": "WeChat ID copied: ", "contact.email": "Email", "contact.wechat": "WeChat", "contact.github": "GitHub",
    "meta.title": "Zhu Weilang · Full-Stack Developer",
    "meta.desc": "Zhu Weilang, full-stack developer. I build usable products with Vue / React + Python / Node, with a focus on shipping AI features.",
    "lang.label": "中"
  }
};

/* ---------------- 基础工具 ---------------- */
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));

const state = {
  lang: localStorage.getItem('lang') || (/^en/i.test(navigator.language) ? 'en' : 'zh'),
  theme: localStorage.getItem('theme') || 'dark'
};

function t(key) {
  const pack = I18N[state.lang] || I18N.zh;
  return pack[key] !== undefined ? pack[key] : (I18N.zh[key] || key);
}

const ICON = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.4-3.88-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  wechat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 4C4.9 4 2 6.4 2 9.4c0 1.7.9 3.2 2.4 4.2L4 16l2.5-1.3c.6.2 1.3.3 2 .3"/><path d="M22 15.2c0-2.6-2.5-4.7-5.5-4.7S11 12.6 11 15.2s2.5 4.7 5.5 4.7c.6 0 1.2-.1 1.7-.3L20.7 21l-.5-1.8c1.1-.9 1.8-2.3 1.8-4Z"/></svg>'
};

/* ---------------- 提示条 ---------------- */
let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
  } else {
    fallbackCopy(text);
  }
}
function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); } catch (e) {}
  document.body.removeChild(ta);
}

/* ---------------- 主题 ---------------- */
function applyTheme(theme, save) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const meta = $('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#080b12' : '#f2f4f9');
  if (save) localStorage.setItem('theme', theme);
}
$('#themeBtn').addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark', true);
});

/* ---------------- 语言 ---------------- */
function applyLang(lang, save) {
  state.lang = lang;
  if (save) { localStorage.setItem('lang', lang); }
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  $$('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.title = t('meta.title');
  const md = $('meta[name="description"]');
  if (md) md.setAttribute('content', t('meta.desc'));
  const ogt = $('meta[property="og:title"]');
  if (ogt) ogt.setAttribute('content', t('meta.title'));
  const ogd = $('meta[property="og:description"]');
  if (ogd) ogd.setAttribute('content', t('meta.desc'));
  $('#langBtn').textContent = t('lang.label');
  buildLinks();
  buildContact();
  renderLatest();
}
$('#langBtn').addEventListener('click', () => {
  applyLang(state.lang === 'zh' ? 'en' : 'zh', true);
});

/* ---------------- 名片按钮 ---------------- */
function mkBtn(html, attrs, primary) {
  const el = attrs.href ? document.createElement('a') : document.createElement('button');
  el.className = 'btn' + (primary ? ' primary' : '');
  el.innerHTML = html;
  Object.keys(attrs).forEach(k => el.setAttribute(k, attrs[k]));
  if (!attrs.href) el.type = 'button';
  return el;
}

function buildLinks() {
  const box = $('#links');
  if (!box) return;
  box.innerHTML = '';
  box.appendChild(mkBtn(ICON.github + '<span>' + t('btn.github') + '</span>',
    { href: CONFIG.github, target: '_blank', rel: 'noopener' }, true));
  box.appendChild(mkBtn(ICON.arrow + '<span>' + t('btn.projects') + '</span>', { href: '#projects' }));

  if (CONFIG.email) {
    box.appendChild(mkBtn(ICON.mail + '<span>' + t('btn.email') + '</span>', { href: 'mailto:' + CONFIG.email }));
  }
  if (CONFIG.wechat) {
    const b = mkBtn(ICON.wechat + '<span>' + t('btn.wechat') + '</span>', {});
    b.addEventListener('click', () => {
      copyText(CONFIG.wechat);
      toast(t('copy.ok') + CONFIG.wechat);
    });
    box.appendChild(b);
  }
}

function buildContact() {
  const box = $('#contactGrid');
  if (!box) return;
  box.innerHTML = '';
  const items = [];
  if (CONFIG.email) items.push({ k: t('contact.email'), v: CONFIG.email, href: 'mailto:' + CONFIG.email });
  if (CONFIG.wechat) items.push({ k: t('contact.wechat'), v: CONFIG.wechat, copy: true });
  items.push({ k: t('contact.github'), v: '@zhu-app', href: CONFIG.github });

  items.forEach(it => {
    const el = document.createElement(it.href ? 'a' : 'button');
    el.className = 'clink';
    if (it.href) { el.href = it.href; el.target = '_blank'; el.rel = 'noopener'; }
    else { el.type = 'button'; }
    el.innerHTML = '<span class="ck">' + it.k + '</span><span class="cv">' + it.v + '</span>';
    if (it.copy) {
      el.addEventListener('click', () => { copyText(it.v); toast(t('copy.ok') + it.v); });
    }
    box.appendChild(el);
  });
}

/* ---------------- 最近更新的仓库（自动同步） ---------------- */
const CURATED = ['vireo', 'ai-chat-assistant', 'shanhai-demon-tide', 'seat-reservation-agent',
  'book-crawler-analytics', 'photo-gallery', 'zhu-app.github.io'];
const LANG_COLORS = {
  JavaScript: '#f1e05a', TypeScript: '#3178c6', Python: '#3572A5', HTML: '#e34c26',
  CSS: '#563d7c', Vue: '#41b883', 'Jupyter Notebook': '#DA5B0B', Go: '#00ADD8',
  Rust: '#dea584', Shell: '#89e051', Java: '#b07219', C: '#555', 'C++': '#f34b7d', PHP: '#4F5D95'
};
const CACHE_KEY = 'gh_repos_v1';
const CACHE_TTL = 6 * 60 * 60 * 1000;

function renderLatest(repos) {
  const head = $('#latestHead');
  const list = $('#latestList');
  if (!head || !list) return;
  const data = repos || readCache();
  if (!data || !data.length) return;

  list.innerHTML = '';
  data.slice(0, 5).forEach(r => {
    const a = document.createElement('a');
    a.className = 'repo';
    a.href = r.html_url;
    a.target = '_blank';
    a.rel = 'noopener';
    const color = LANG_COLORS[r.language] || '#7c8aa0';
    a.innerHTML =
      '<span class="rn">' + r.name + '</span>' +
      '<span class="rd">' + (r.description || '') + '</span>' +
      (r.language ? '<span class="rm"><i class="lang-dot" style="background:' + color + '"></i>' + r.language + '</span>' : '') +
      (r.stargazers_count ? '<span class="rm">★ ' + r.stargazers_count + '</span>' : '');
    list.appendChild(a);
  });
  head.hidden = false;
  list.hidden = false;
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const obj = JSON.parse(raw);
    if (Date.now() - obj.ts > CACHE_TTL) return null;
    return obj.data;
  } catch (e) { return null; }
}

function writeCache(data) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data: data })); } catch (e) {}
}

function loadRepos() {
  const cached = readCache();
  if (cached) { renderLatest(cached); return; }
  fetch('https://api.github.com/users/zhu-app/repos?sort=pushed&per_page=100')
    .then(r => r.ok ? r.json() : [])
    .then(list => {
      const data = (list || [])
        .filter(r => !r.fork && CURATED.indexOf(r.name) === -1)
        .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
        .map(r => ({
          name: r.name, html_url: r.html_url, description: r.description,
          language: r.language, stargazers_count: r.stargazers_count, pushed_at: r.pushed_at
        }));
      if (data.length) { writeCache(data); renderLatest(data); }
    })
    .catch(() => { /* 离线或限流时静默失败 */ });
}

/* ---------------- 试玩 ---------------- */
const playBtn = $('#playBtn');
if (playBtn) {
  playBtn.addEventListener('click', function () {
    const frame = $('#playFrame');
    frame.innerHTML = '<iframe src="' + CONFIG.game + '" title="山海妖潮 试玩" loading="lazy" ' +
      'allow="fullscreen" sandbox="allow-scripts allow-same-origin allow-pointer-lock"></iframe>';
  });
}

/* ---------------- 滚动渐显 ---------------- */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));
} else {
  $$('.reveal').forEach(el => el.classList.add('in'));
}

/* ---------------- 导航高亮 ---------------- */
const sections = $$('main section[id]');
const navLinks = $$('.navlinks a');
if ('IntersectionObserver' in window && navLinks.length) {
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));
}

/* ---------------- 小交互 ---------------- */
const topLink = $('#topLink');
if (topLink) topLink.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const markBtn = $('#markBtn');
if (markBtn) markBtn.addEventListener('click', () => {
  toast(state.lang === 'zh' ? '这段经历是示例内容，替换后可以删掉这个标记' : 'Sample content — replace it and remove this badge');
});

const y = $('#year');
if (y) y.textContent = new Date().getFullYear();

/* ---------------- 启动 ---------------- */
// 支持用 ?theme=light / ?lang=en 直接分享指定样式
const qs = new URLSearchParams(location.search);
if (qs.get('theme') === 'light' || qs.get('theme') === 'dark') state.theme = qs.get('theme');
if (qs.get('lang') === 'en' || qs.get('lang') === 'zh') state.lang = qs.get('lang');

applyTheme(state.theme, false);
applyLang(state.lang, false);
loadRepos();

if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}
