// ============================================
// PRIMUS SHOP - TO'LIQ YANGILANGAN KOD
// v2.0 - Savat, Kategoriyalar, Qidiruv, Chat
// ============================================

const ADMIN_PASSWORD = "dokon2026";
const ADMIN_PATH = "/boss-panel-7k2x";

const CATEGORIES = ["Barchasi", "Erkaklar", "Ayollar", "Aksessuarlar", "Uy buyumlari"];

const DELIVERY_PRICES = {
  "Toshkent shahri": 15000,
  "Toshkent viloyati": 20000,
  "Andijon viloyati": 25000,
  "Farg'ona viloyati": 25000,
  "Namangan viloyati": 25000,
  "Samarqand viloyati": 25000,
  "Jizzax viloyati": 25000,
  "Sirdaryo viloyati": 25000,
  "Buxoro viloyati": 30000,
  "Navoiy viloyati": 30000,
  "Qashqadaryo viloyati": 30000,
  "Surxondaryo viloyati": 30000,
  "Xorazm viloyati": 35000,
  "Qoraqalpog'iston": 35000,
};

const DISTRICTS = {
  "Toshkent shahri": ["Bektemir","Chilonzor","Hamza","Mirobod","Mirzo Ulug'bek","Sergeli","Shayxontohur","Olmazar","Uchtepa","Yakkasaroy","Yunusobod","Yangihayot"],
  "Toshkent viloyati": ["Angren","Bekobod","Bo'stonliq","Bo'ka","Chinoz","Qibray","Oqqo'rg'on","Ohangaron","Parkent","Piskent","Quyi Chirchiq","O'rta Chirchiq","Yuqori Chirchiq","Zangiota","Yangiyo'l"],
  "Samarqand viloyati": ["Samarqand shahri","Bulung'ur","Ishtixon","Jomboy","Kattaqo'rg'on","Narpay","Nurobod","Oqdaryo","Pastdarg'om","Payariq","Po'latov","Toyloq","Urgut"],
  "Buxoro viloyati": ["Buxoro shahri","Buxoro tumani","G'ijduvon","Jondor","Kogon","Olot","Peshku","Qorako'l","Qorovulbozor","Romitan","Shofirkon","Vobkent"],
  "Namangan viloyati": ["Namangan shahri","Chortoq","Chust","Kosonsoy","Mingbuloq","Namangan tumani","Norin","Pop","To'raqo'rg'on","Uychi","Yangiqo'rg'on"],
  "Andijon viloyati": ["Andijon shahri","Asaka","Baliqchi","Bo'z","Buloqboshi","Izboskan","Jalolquduq","Ko'hna Qo'rg'on","Marhamat","Oltinko'l","Paxtaobod","Qo'rg'ontepa","Shahrixon","Ulug'nor","Xo'jaobod"],
  "Farg'ona viloyati": ["Farg'ona shahri","Qo'qon","Marg'ilon","Beshariq","Bog'dod","Buvayda","Dang'ara","Furqat","Oltiariq","O'zbekiston","Qo'shtepa","Rishton","So'x","Toshloq","Uchko'prik","Yozyovon"],
  "Qashqadaryo viloyati": ["Qarshi shahri","Chiroqchi","Dehqonobod","G'uzor","Kasbi","Kitob","Koson","Mirishkor","Muborak","Nishon","Qarshi tumani","Shahrisabz","Yakkabog'"],
  "Surxondaryo viloyati": ["Termiz shahri","Angor","Bandixon","Bo'ysun","Denov","Jarqo'rg'on","Qiziriq","Qumqo'rg'on","Muzrabot","Oltinsoy","Sariosiyo","Sherobod","Sho'rchi","Termiz tumani","Uzun"],
  "Sirdaryo viloyati": ["Guliston shahri","Boyovut","Mirzaobod","Oqoltin","Sardoba","Sayxunobod","Sirdaryo tumani","Xavos"],
  "Jizzax viloyati": ["Jizzax shahri","Arnasoy","Baxmal","Do'stlik","Forish","G'allaorol","Mirzacho'l","Paxtakor","Sharof Rashidov","Yangiobod","Zarbdor","Zafarobod","Zomin"],
  "Navoiy viloyati": ["Navoiy shahri","Karmana","Konimex","Navbahor","Nurota","Qiziltepa","Tomdi","Uchquduq","Xatirchi"],
  "Xorazm viloyati": ["Urganch shahri","Bog'ot","Gurlan","Hazorasp","Xiva","Xonqa","Qo'shko'pir","Shovot","Tuproqqal'a","Yangiariq","Yangibozor"],
  "Qoraqalpog'iston": ["Nukus shahri","Amudaryo","Beruniy","Chimboy","Ellikqal'a","Kegeyli","Mo'ynoq","Nukus tumani","Qanliko'l","Qo'ng'irot","Qorao'zak","Shumanay","Taxtako'pir","To'rtko'l","Xo'jayli"]
};

const STYLE = `
:root {
  --green: #0f3d2e;
  --green-mid: #1a5440;
  --gold: #d4a72c;
  --gold-bright: #f0c14b;
  --cream: #faf6ed;
  --ink: #1c2620;
  --ink-soft: #5a6b61;
  --line: #e3dcc9;
  --white: #ffffff;
  --danger: #c1432e;
  --radius: 12px;
  --shadow: 0 2px 8px rgba(15,61,46,0.08);
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, sans-serif; background: var(--cream); color: var(--ink); }
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; }

/* HEADER */
.header { background: var(--green); color: var(--cream); padding: 12px 16px; position: sticky; top: 0; z-index: 100; }
.header-inner { max-width: 1080px; margin: 0 auto; display: flex; align-items: center; gap: 10px; }
.logo { font-family: Georgia, serif; font-size: 1.3rem; font-weight: 700; letter-spacing: 0.05em; flex-shrink: 0; }
.logo span { color: var(--gold-bright); }
.search-wrap { flex: 1; position: relative; }
.search-input { width: 100%; padding: 8px 14px; border-radius: 999px; border: none; font-size: 0.9rem; background: rgba(255,255,255,0.15); color: var(--cream); }
.search-input::placeholder { color: rgba(255,255,255,0.5); }
.cart-btn { background: var(--gold); color: var(--green); border-radius: 999px; padding: 8px 14px; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; position: relative; }
.cart-count { position: absolute; top: -5px; right: -5px; background: var(--danger); color: #fff; border-radius: 50%; width: 18px; height: 18px; font-size: 0.7rem; display: flex; align-items: center; justify-content: center; font-weight: 700; }

/* CATEGORIES */
.cats { background: var(--white); border-bottom: 1px solid var(--line); overflow-x: auto; white-space: nowrap; padding: 0 16px; }
.cats::-webkit-scrollbar { display: none; }
.cat-btn { display: inline-block; padding: 10px 16px; font-size: 0.85rem; font-weight: 600; color: var(--ink-soft); border-bottom: 2px solid transparent; }
.cat-btn.active { color: var(--green); border-bottom-color: var(--green); }

/* CATALOG */
.catalog { max-width: 1080px; margin: 0 auto; padding: 14px 12px 80px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
@media(min-width: 600px){ .catalog { grid-template-columns: repeat(3,1fr); } }
@media(min-width: 900px){ .catalog { grid-template-columns: repeat(4,1fr); } }

.product-card { background: var(--white); border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); display: flex; flex-direction: column; }
.product-img { aspect-ratio: 1/1; overflow: hidden; background: var(--line); position: relative; }
.product-img img { width: 100%; height: 100%; object-fit: cover; transition: opacity 0.2s; }
.badge { position: absolute; top: 7px; left: 7px; padding: 3px 8px; border-radius: 999px; font-size: 0.68rem; font-weight: 700; }
.badge.soldout { background: var(--danger); color: #fff; }
.badge.soon { background: var(--gold); color: var(--green); }
.product-body { padding: 10px; flex: 1; display: flex; flex-direction: column; gap: 4px; }
.product-name { font-size: 0.85rem; font-weight: 600; line-height: 1.3; }
.product-price { font-size: 1rem; font-weight: 700; color: var(--green-mid); }
.product-price::after { content: " so'm"; font-size: 0.7rem; font-weight: 400; color: var(--ink-soft); }
.color-dots { display: flex; gap: 4px; flex-wrap: wrap; margin-top: 2px; }
.color-dot { width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--line); cursor: pointer; flex-shrink: 0; }
.color-dot.selected { border-color: var(--green); }
.product-actions { display: flex; gap: 6px; margin-top: 8px; }
.btn-view { flex: 1; background: var(--green); color: var(--cream); padding: 8px; border-radius: 999px; font-size: 0.8rem; font-weight: 600; text-align: center; }
.btn-cart { background: var(--gold); color: var(--green); padding: 8px 10px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; }
.btn-cart.disabled { background: var(--line); color: var(--ink-soft); }

.empty-state { grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--ink-soft); }

/* DETAIL */
.detail-wrap { max-width: 600px; margin: 0 auto; padding: 16px; }
.back-link { color: var(--ink-soft); font-size: 0.85rem; margin-bottom: 12px; display: inline-block; }
.detail-images { margin-bottom: 12px; }
.detail-main-img { aspect-ratio: 1/1; border-radius: var(--radius); overflow: hidden; background: var(--line); margin-bottom: 8px; }
.detail-main-img img { width: 100%; height: 100%; object-fit: cover; }
.detail-thumbs { display: flex; gap: 6px; overflow-x: auto; }
.detail-thumb { width: 60px; height: 60px; border-radius: 8px; overflow: hidden; flex-shrink: 0; border: 2px solid var(--line); cursor: pointer; }
.detail-thumb.active { border-color: var(--green); }
.detail-thumb img { width: 100%; height: 100%; object-fit: cover; }
.detail-name { font-family: Georgia, serif; font-size: 1.3rem; font-weight: 600; margin-bottom: 6px; }
.detail-price { font-size: 1.4rem; font-weight: 700; color: var(--green-mid); margin-bottom: 14px; }
.detail-price::after { content: " so'm"; font-size: 0.8rem; font-weight: 400; color: var(--ink-soft); }
.option-label { font-size: 0.82rem; font-weight: 700; margin-bottom: 6px; color: var(--ink); }
.option-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 14px; }
.option-pill { padding: 7px 14px; border-radius: 999px; border: 1.5px solid var(--line); font-size: 0.82rem; background: var(--white); }
.option-pill.selected { border-color: var(--green); background: var(--green); color: var(--cream); }
.qty-wrap { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.qty-btn { width: 32px; height: 32px; border-radius: 50%; background: var(--line); font-size: 1.1rem; font-weight: 700; display: flex; align-items: center; justify-content: center; }
.qty-num { font-size: 1rem; font-weight: 700; min-width: 24px; text-align: center; }
.btn-add-cart { width: 100%; background: var(--gold); color: var(--green); padding: 14px; border-radius: 999px; font-weight: 700; font-size: 1rem; margin-bottom: 8px; }
.btn-buy-now { width: 100%; background: var(--green); color: var(--cream); padding: 14px; border-radius: 999px; font-weight: 700; font-size: 1rem; }

/* MODAL */
.modal-overlay { position: fixed; inset: 0; background: rgba(15,38,30,0.55); display: none; align-items: flex-end; justify-content: center; z-index: 200; }
.modal-overlay.open { display: flex; }
.modal { background: var(--white); border-radius: 20px 20px 0 0; width: 100%; max-width: 500px; max-height: 92vh; overflow-y: auto; padding: 20px; }
@media(min-width:600px){ .modal-overlay{align-items:center;} .modal{border-radius:20px;} }
.modal-title { font-family: Georgia, serif; font-size: 1.2rem; color: var(--green); margin-bottom: 14px; }

/* CART */
.cart-item { display: flex; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--line); align-items: center; }
.cart-item img { width: 52px; height: 52px; object-fit: cover; border-radius: 8px; flex-shrink: 0; }
.cart-item-info { flex: 1; min-width: 0; }
.cart-item-name { font-size: 0.88rem; font-weight: 600; }
.cart-item-meta { font-size: 0.78rem; color: var(--ink-soft); }
.cart-item-price { font-size: 0.9rem; font-weight: 700; color: var(--green-mid); }
.cart-remove { color: var(--danger); font-size: 1.1rem; padding: 4px 8px; background: none; }
.cart-total { padding: 12px 0; border-top: 2px solid var(--green); margin-top: 8px; }
.cart-total-row { display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 0.88rem; }
.cart-total-main { display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 700; color: var(--green); margin-top: 8px; }

/* FORM */
.form-group { margin-bottom: 12px; }
.form-group label { display: block; font-size: 0.82rem; font-weight: 600; margin-bottom: 5px; }
.form-group input, .form-group textarea, .form-group select { width: 100%; padding: 11px 13px; border: 1.5px solid var(--line); border-radius: 10px; font-size: 0.92rem; font-family: inherit; background: var(--cream); }
.payment-box { background: var(--green); color: var(--cream); border-radius: 10px; padding: 14px; margin: 12px 0; }
.payment-label { font-size: 0.75rem; opacity: 0.7; text-transform: uppercase; margin-bottom: 4px; }
.payment-card { font-family: Georgia, serif; font-size: 1.1rem; font-weight: 600; color: var(--gold-bright); }
.delivery-box { background: #f0faf5; border: 1.5px solid var(--green-mid); border-radius: 10px; padding: 12px; margin-bottom: 12px; display: none; }
.delivery-row { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px; }
.delivery-total { display: flex; justify-content: space-between; font-size: 1rem; font-weight: 700; color: var(--green); padding-top: 8px; border-top: 1px solid var(--green-mid); margin-top: 4px; }
.warning-box { background: #fff3cd; border: 1.5px solid var(--gold); border-radius: 10px; padding: 11px; margin-bottom: 12px; font-size: 0.82rem; color: #856404; }
.btn-submit { width: 100%; background: var(--gold); color: var(--green); padding: 13px; border-radius: 999px; font-weight: 700; font-size: 0.95rem; margin-top: 6px; }
.btn-cancel { width: 100%; background: transparent; color: var(--ink-soft); padding: 9px; font-size: 0.85rem; margin-top: 4px; }
.btn-tg { width: 100%; background: #229ED9; color: #fff; padding: 13px; border-radius: 999px; font-weight: 700; font-size: 0.95rem; display: block; text-align: center; margin-top: 10px; }
.success-box { text-align: center; padding: 20px 0; }
.success-icon { width: 56px; height: 56px; border-radius: 50%; background: var(--green-mid); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin: 0 auto 14px; }

/* ADMIN */
.admin-login { max-width: 340px; margin: 80px auto; background: var(--white); border-radius: var(--radius); padding: 28px; box-shadow: var(--shadow); text-align: center; }
.admin-wrap { max-width: 960px; margin: 0 auto; padding: 16px; }
.admin-tabs { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }
.admin-tab { padding: 8px 14px; border-radius: 999px; background: var(--white); border: 1.5px solid var(--line); font-weight: 600; font-size: 0.82rem; color: var(--ink-soft); }
.admin-tab.active { background: var(--green); color: var(--cream); border-color: var(--green); }
.admin-section { background: var(--white); border-radius: var(--radius); padding: 18px; margin-bottom: 14px; box-shadow: var(--shadow); }
.admin-section h2 { font-family: Georgia, serif; font-size: 1.1rem; color: var(--green); margin-bottom: 14px; }
.admin-prod-row { display: flex; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--line); align-items: center; flex-wrap: wrap; }
.admin-prod-row img { width: 48px; height: 48px; border-radius: 7px; object-fit: cover; }
.admin-prod-info { flex: 1; min-width: 100px; }
.admin-prod-info strong { display: block; font-size: 0.88rem; }
.admin-prod-info span { font-size: 0.78rem; color: var(--ink-soft); }
.icon-btn { background: var(--cream); border: 1px solid var(--line); border-radius: 7px; padding: 6px 10px; font-size: 0.78rem; font-weight: 600; }
.icon-btn.danger { color: var(--danger); }
.icon-btn.success { color: var(--green-mid); }
.order-card { border: 1px solid var(--line); border-radius: 10px; padding: 12px; margin-bottom: 10px; }
.order-card.done { border-color: #1a5440; background: #f0faf5; }
.order-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px; flex-wrap: wrap; gap: 4px; }
.order-status { font-size: 0.72rem; font-weight: 700; padding: 3px 9px; border-radius: 999px; background: var(--gold); color: var(--green); }
.order-status.done { background: var(--green-mid); color: #fff; }
.order-detail { font-size: 0.83rem; color: var(--ink-soft); margin: 2px 0; }
.order-detail strong { color: var(--ink); }
.order-actions { display: flex; gap: 6px; margin-top: 8px; flex-wrap: wrap; }
.imagelist-row { display: flex; gap: 6px; margin-bottom: 6px; }
.imagelist-row input { flex: 1; }
.orders-header { display: flex; gap: 8px; margin-bottom: 14px; }
.orders-filter-btn { padding: 7px 14px; border-radius: 999px; border: 1.5px solid var(--line); font-size: 0.82rem; font-weight: 600; background: var(--white); color: var(--ink-soft); }
.orders-filter-btn.active { background: var(--green); color: var(--cream); border-color: var(--green); }
.footer { text-align: center; padding: 20px; color: var(--ink-soft); font-size: 0.78rem; }
`;

function esc(s) {
  if (!s) return "";
  return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function fmt(p) {
  return Number(p||0).toLocaleString("ru-RU");
}

function html(title, body) {
  return `<!DOCTYPE html><html lang="uz"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${esc(title)}</title><style>${STYLE}</style></head><body>${body}</body></html>`;
}

async function getProducts(env) {
  const d = await env.STORE_KV.get("products");
  return d ? JSON.parse(d) : [];
}
async function saveProducts(env, arr) {
  await env.STORE_KV.put("products", JSON.stringify(arr));
}
async function getOrders(env) {
  const d = await env.STORE_KV.get("orders");
  return d ? JSON.parse(d) : [];
}
async function saveOrders(env, arr) {
  await env.STORE_KV.put("orders", JSON.stringify(arr));
}
async function getConfig(env) {
  const d = await env.STORE_KV.get("config");
  const def = { storeName:"Primus", cardNumber:"8600 1234 5678 9012", cardOwner:"F. Ism Sharifov", telegramWorkerUrl:"" };
  return d ? {...def,...JSON.parse(d)} : def;
}
async function saveConfig(env, cfg) {
  await env.STORE_KV.put("config", JSON.stringify(cfg));
}

function isAuthed(req) {
  return (req.headers.get("Cookie")||"").includes("admin_session=valid");
}

async function notifyTelegram(env, order) {
  const cfg = await getConfig(env);
  if (!cfg.telegramWorkerUrl) return;
  const items = (order.items||[]).map(i => `- ${i.name} x${i.qty} (${i.color||""} ${i.size||""}) = ${fmt(i.price*i.qty)} so'm`).join("\n");
  const msg = `🛒 YANGI BUYURTMA!\n\n${items}\n\n💰 Jami: ${fmt(order.total)} so'm\n👤 ${order.customerName}\n📞 ${order.customerPhone}\n📍 ${order.customerAddress}${order.note?"\n📝 "+order.note:""}`;
  try {
    await fetch(cfg.telegramWorkerUrl, {
      method:"POST", headers:{"Content-Type":"application/json"},
      body: JSON.stringify({message: msg})
    });
  } catch(e){}
}

// ============ HOME PAGE ============
async function renderHome(env, searchQ, catFilter) {
  let products = await getProducts(env);
  const cfg = await getConfig(env);

  if (searchQ) {
    const q = searchQ.toLowerCase();
    products = products.filter(p => p.name.toLowerCase().includes(q) || (p.description||"").toLowerCase().includes(q));
  }
  if (catFilter && catFilter !== "Barchasi") {
    products = products.filter(p => p.category === catFilter);
  }

  const catHtml = CATEGORIES.map(c =>
    `<button class="cat-btn${(!catFilter||catFilter==="Barchasi")&&c==="Barchasi"||catFilter===c?" active":""}" onclick="filterCat('${esc(c)}')">${esc(c)}</button>`
  ).join("");

  const cards = products.length === 0
    ? `<div class="empty-state">Hozircha mahsulot yo'q</div>`
    : products.map(p => {
        const cover = (p.images&&p.images[0])||"";
        const colors = (p.colors||[]).filter(Boolean);
        const isSoldout = p.status === "soldout";
        const isSoon = p.status === "soon";
        let badge = "";
        if (isSoldout) badge = `<span class="badge soldout">Sotildi</span>`;
        if (isSoon) badge = `<span class="badge soon">Tez kunda</span>`;

        const colorDots = colors.map((c,i) => {
          const colorMap = {
            "Qora":"#222","Oq":"#f5f5f5","Ko'k":"#1a56db","Qizil":"#e02424","Yashil":"#057a55",
            "Sariq":"#e3a008","Jigarrang":"#92400e","Kulrang":"#9ca3af","Pushti":"#f472b6",
            "To'q jigarrang":"#44281e","Xaki":"#6b7c3a","Navy":"#1e3a5f"
          };
          const bg = colorMap[c] || "#ccc";
          return `<div class="color-dot${i===0?" selected":""}" style="background:${bg}" title="${esc(c)}" onclick="changeCardColor(this,'${p.id}',${i})"></div>`;
        }).join("");

        return `
        <div class="product-card" id="card-${p.id}">
          <div class="product-img">
            <img id="card-img-${p.id}" src="${esc(cover)}" alt="${esc(p.name)}" loading="lazy"/>
            ${badge}
          </div>
          <div class="product-body">
            <div class="product-name">${esc(p.name)}</div>
            <div class="product-price">${fmt(p.price)}</div>
            ${colors.length ? `<div class="color-dots">${colorDots}</div>` : ""}
            <div class="product-actions">
              <a href="/product/${p.id}" class="btn-view">Ko'rish</a>
              ${!isSoldout&&!isSoon
                ? `<button class="btn-cart" onclick="addToCart('${p.id}')">🛒</button>`
                : `<button class="btn-cart disabled" disabled>🛒</button>`}
            </div>
          </div>
        </div>`;
      }).join("");

  return html(cfg.storeName, `
    <header class="header">
      <div class="header-inner">
        <div class="logo">P<span>R</span>IMUS</div>
        <div class="search-wrap">
          <input class="search-input" type="text" placeholder="Qidiruv..." id="searchInput" value="${esc(searchQ||"")}" onkeydown="if(event.key==='Enter')doSearch()" />
        </div>
        <button class="cart-btn" onclick="openCart()">🛒 <span id="cartCountBadge" class="cart-count" style="display:none">0</span></button>
      </div>
    </header>
    <div class="cats">${catHtml}</div>
    <main class="catalog" id="catalog">${cards}</main>
    <footer class="footer">© 2026 Primus. Barcha huquqlar himoyalangan.</footer>

    <!-- CART MODAL -->
    <div class="modal-overlay" id="cartModal">
      <div class="modal">
        <h3 class="modal-title">🛒 Savat</h3>
        <div id="cartItems"></div>
        <div id="cartEmpty" style="text-align:center;padding:30px;color:var(--ink-soft);display:none">Savat bo'sh</div>
        <div id="cartFooter" style="display:none">
          <div class="cart-total">
            <div class="cart-total-row"><span>Mahsulotlar:</span><span id="cartSubtotal"></span></div>
            <div class="cart-total-main"><span>Jami:</span><span id="cartTotal"></span></div>
          </div>
          <button class="btn-submit" onclick="openOrderModal()">Buyurtma berish</button>
        </div>
        <button class="btn-cancel" onclick="closeModal('cartModal')">Yopish</button>
      </div>
    </div>

    <!-- ORDER MODAL -->
    <div class="modal-overlay" id="orderModal">
      <div class="modal">
        <div id="orderFormView">
          <h3 class="modal-title">Buyurtma berish</h3>
          <form id="orderForm">
            <div class="form-group"><label>Ismingiz</label><input type="text" id="customerName" required placeholder="Ism Familiya"/></div>
            <div class="form-group"><label>Telefon</label><input type="tel" id="customerPhone" required placeholder="+998 90 123 45 67"/></div>
            <div class="form-group">
              <label>Viloyat</label>
              <select id="customerRegion" required onchange="updateDistricts()">
                <option value="">-- Viloyat tanlang --</option>
                ${Object.keys(DELIVERY_PRICES).map(r=>`<option>${esc(r)}</option>`).join("")}
              </select>
            </div>
            <div class="form-group" id="districtGroup" style="display:none">
              <label>Tuman</label>
              <select id="customerDistrict" required><option value="">-- Tuman tanlang --</option></select>
            </div>
            <div class="form-group"><label>Ko'cha, uy raqami</label><input type="text" id="customerAddress" required placeholder="Ko'cha, uy raqami"/></div>
            <div class="form-group"><label>Izoh (ixtiyoriy)</label><textarea id="orderNote" rows="2"></textarea></div>
            <div class="delivery-box" id="deliveryBox">
              <div class="delivery-row"><span>Mahsulotlar:</span><span id="dSubtotal"></span></div>
              <div class="delivery-row"><span>Yetkazib berish:</span><span id="dDelivery"></span></div>
              <div class="delivery-total"><span>JAMI TO'LOV:</span><span id="dTotal"></span></div>
            </div>
            <div class="warning-box">⚠️ <strong>Diqqat!</strong> Yuqoridagi jami summani to'lang! Soxta screenshot yuborilsa buyurtma bekor qilinadi.</div>
            <div class="payment-box" id="paymentBox" style="display:none">
              <div class="payment-label">TO'LOV UCHUN KARTA</div>
              <div class="payment-card" id="payCard"></div>
              <div style="font-size:0.82rem;opacity:0.85;margin-top:3px;" id="payOwner"></div>
            </div>
            <button type="submit" class="btn-submit">Buyurtmani tasdiqlash</button>
            <button type="button" class="btn-cancel" onclick="closeModal('orderModal')">Bekor qilish</button>
          </form>
        </div>
        <div id="orderSuccessView" style="display:none">
          <div class="success-box">
            <div class="success-icon">✓</div>
            <h3 style="font-family:Georgia,serif;color:var(--green);margin-bottom:8px;">Buyurtma qabul qilindi!</h3>
            <p style="color:var(--ink-soft);font-size:0.9rem;margin-bottom:16px;">Endi to'lov chekining screenshotini Telegram orqali yuboring — biz tekshirib, mahsulotni jo'natamiz.</p>
            <a href="https://t.me/shokhjahon_primus" target="_blank" class="btn-tg">📸 To'lov screenshotini yuborish</a>
            <button class="btn-cancel" onclick="closeModal('orderModal');window.location.reload()">Yopish</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      const PRODUCTS_DATA = ${JSON.stringify(await getProducts(env))};
      const DISTRICTS_ENCODED = decodeURIComponent('{"Toshkent shahri": ["Bektemir", "Chilonzor", "Hamza", "Mirobod", "Mirzo Ulugbek", "Sergeli", "Shayxontohur", "Olmazar", "Uchtepa", "Yakkasaroy", "Yunusobod", "Yangihayot"], "Toshkent viloyati": ["Angren", "Bekobod", "Bostonliq", "Boka", "Chinoz", "Qibray", "Oqqorgon", "Ohangaron", "Parkent", "Piskent", "Quyi Chirchiq", "Orta Chirchiq", "Yuqori Chirchiq", "Zangiota", "Yangiyo l"], "Samarqand viloyati": ["Samarqand shahri", "Bulungur", "Ishtixon", "Jomboy", "Kattaqorgon", "Narpay", "Nurobod", "Oqdaryo", "Pastdargom", "Payariq", "Polatov", "Toyloq", "Urgut"], "Buxoro viloyati": ["Buxoro shahri", "Buxoro tumani", "Gijduvon", "Jondor", "Kogon", "Olot", "Peshku", "Qarakol", "Qarovulbozor", "Romitan", "Shofirkon", "Vobkent"], "Namangan viloyati": ["Namangan shahri", "Chortoq", "Chust", "Kosonsoy", "Mingbuloq", "Namangan tumani", "Norin", "Pop", "Toraqorgon", "Uychi", "Yangiqorgon"], "Andijon viloyati": ["Andijon shahri", "Asaka", "Baliqchi", "Boz", "Buloqboshi", "Izboskan", "Jalolquduq", "Marhamat", "Oltinkol", "Paxtaobod", "Qorgontepa", "Shahrixon", "Ulagnor", "Xojaobod"], "Fargona viloyati": ["Fargona shahri", "Qoqon", "Margilon", "Beshariq", "Bogdod", "Buvayda", "Dangara", "Furqat", "Oltiariq", "Qoshtepа", "Rishton", "Sox", "Toshloq", "Uchkoprik", "Yozyovon"], "Qashqadaryo viloyati": ["Qarshi shahri", "Chiroqchi", "Dehqonobod", "Guzor", "Kasbi", "Kitob", "Koson", "Mirishkor", "Muborak", "Nishon", "Qarshi tumani", "Shahrisabz", "Yakkabog"], "Surxondaryo viloyati": ["Termiz shahri", "Angor", "Bandixon", "Boysun", "Denov", "Jarqorgon", "Qiziriq", "Qumqorgon", "Muzrabot", "Oltinsoy", "Sariosiyo", "Sherobod", "Shorchi", "Termiz tumani", "Uzun"], "Sirdaryo viloyati": ["Guliston shahri", "Boyovut", "Mirzaobod", "Oqoltin", "Sardoba", "Sayxunobod", "Sirdaryo tumani", "Xavos"], "Jizzax viloyati": ["Jizzax shahri", "Arnasoy", "Baxmal", "Dostlik", "Forish", "Gallaorol", "Mirzachol", "Paxtakor", "Sharof Rashidov", "Yangiobod", "Zarbdor", "Zafarobod", "Zomin"], "Navoiy viloyati": ["Navoiy shahri", "Karmana", "Konimex", "Navbahor", "Nurota", "Qiziltepa", "Tomdi", "Uchquduq", "Xatirchi"], "Xorazm viloyati": ["Urganch shahri", "Bogot", "Gurlan", "Hazorasp", "Xiva", "Xonqa", "Qoshkopir", "Shovot", "Tuproqqala", "Yangiariq", "Yangibozor"], "Qoraqalpogiston": ["Nukus shahri", "Amudaryo", "Beruniy", "Chimboy", "Ellikqala", "Kegeyli", "Moynok", "Nukus tumani", "Qanlikol", "Qongrot", "Qaraozak", "Shumanay", "Taxtakopir", "Tortkol", "Xojayli"]}');
      const DELIVERY_PRICES = {"Toshkent shahri": 15000, "Toshkent viloyati": 20000, "Andijon viloyati": 25000, "Fargona viloyati": 25000, "Namangan viloyati": 25000, "Samarqand viloyati": 25000, "Jizzax viloyati": 25000, "Sirdaryo viloyati": 25000, "Buxoro viloyati": 30000, "Navoiy viloyati": 30000, "Qashqadaryo viloyati": 30000, "Surxondaryo viloyati": 30000, "Xorazm viloyati": 35000, "Qoraqalpogiston": 35000};
      const DISTRICTS_DATA = JSON.parse(decodeURIComponent(DISTRICTS_ENCODED));
      let cart = JSON.parse(localStorage.getItem('primus_cart')||'[]');

      function saveCart(){ localStorage.setItem('primus_cart', JSON.stringify(cart)); updateCartBadge(); }

      function updateCartBadge(){
        const total = cart.reduce((s,i)=>s+i.qty,0);
        const badge = document.getElementById('cartCountBadge');
        if(total>0){ badge.textContent=total; badge.style.display='flex'; }
        else { badge.style.display='none'; }
      }

      function addToCart(id){
        const p = PRODUCTS_DATA.find(x=>x.id===id);
        if(!p) return;
        const existing = cart.find(i=>i.id===id&&!i.color&&!i.size);
        if(existing){ existing.qty++; }
        else { cart.push({id,name:p.name,price:Number(p.price),image:(p.images&&p.images[0])||"",qty:1}); }
        saveCart();
        const btn = document.querySelector(`#card-${id} .btn-cart`);
        if(btn){ btn.textContent='✓'; setTimeout(()=>btn.textContent='🛒',1000); }
      }

      function removeFromCart(idx){
        cart.splice(idx,1);
        saveCart();
        renderCartItems();
      }

      function renderCartItems(){
        const el = document.getElementById('cartItems');
        const empty = document.getElementById('cartEmpty');
        const footer = document.getElementById('cartFooter');
        if(cart.length===0){ el.innerHTML=''; empty.style.display='block'; footer.style.display='none'; return; }
        empty.style.display='none'; footer.style.display='block';
        let subtotal=0;
        el.innerHTML = cart.map((item,i)=>{
          subtotal+=item.price*item.qty;
          return \`<div class="cart-item">
            <img src="\${item.image}" alt=""/>
            <div class="cart-item-info">
              <div class="cart-item-name">\${item.name}</div>
              <div class="cart-item-meta">\${item.color||''} \${item.size||''} x\${item.qty}</div>
              <div class="cart-item-price">\${(item.price*item.qty).toLocaleString('ru-RU')} so'm</div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
              <button class="qty-btn" onclick="changeQty(\${i},-1)">−</button>
              <span style="font-weight:700">\${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(\${i},1)">+</button>
            </div>
            <button class="cart-remove" onclick="removeFromCart(\${i})">✕</button>
          </div>\`;
        }).join('');
        document.getElementById('cartSubtotal').textContent=subtotal.toLocaleString('ru-RU')+' so\'m';
        document.getElementById('cartTotal').textContent=subtotal.toLocaleString('ru-RU')+' so\'m';
      }

      function changeQty(idx, delta){
        cart[idx].qty = Math.max(1, cart[idx].qty+delta);
        saveCart(); renderCartItems();
      }

      function openCart(){ renderCartItems(); document.getElementById('cartModal').classList.add('open'); }

      function openOrderModal(){
        document.getElementById('cartModal').classList.remove('open');
        document.getElementById('orderFormView').style.display='block';
        document.getElementById('orderSuccessView').style.display='none';
        document.getElementById('orderModal').classList.add('open');
      }

      function closeModal(id){ document.getElementById(id).classList.remove('open'); }

      document.querySelectorAll('.modal-overlay').forEach(el=>{
        el.addEventListener('click', function(e){ if(e.target===this) this.classList.remove('open'); });
      });

      function updateDistricts(){
        const region = document.getElementById('customerRegion').value;
        const dg = document.getElementById('districtGroup');
        const ds = document.getElementById('customerDistrict');
        const db = document.getElementById('deliveryBox');
        const pb = document.getElementById('paymentBox');
        if(!region){ dg.style.display='none'; db.style.display='none'; pb.style.display='none'; return; }
        const districts = DISTRICTS_DATA[region]||[];
        ds.innerHTML='<option value="">-- Tuman tanlang --</option>'+districts.map(d=>\`<option>\${d}</option>\`).join('');
        dg.style.display='block';
        const delivery = DELIVERY_PRICES[region]||30000;
        const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
        const total = subtotal+delivery;
        document.getElementById('dSubtotal').textContent=subtotal.toLocaleString('ru-RU')+' so\'m';
        document.getElementById('dDelivery').textContent=delivery.toLocaleString('ru-RU')+' so\'m';
        document.getElementById('dTotal').textContent=total.toLocaleString('ru-RU')+' so\'m';
        db.style.display='block';
        fetch('/api/config').then(r=>r.json()).then(cfg=>{
          document.getElementById('payCard').textContent=cfg.cardNumber||'';
          document.getElementById('payOwner').textContent=cfg.cardOwner||'';
          pb.style.display='block';
        });
      }

      document.getElementById('orderForm').addEventListener('submit', async function(e){
        e.preventDefault();
        const region = document.getElementById('customerRegion').value;
        const delivery = DELIVERY_PRICES[region]||30000;
        const subtotal = cart.reduce((s,i)=>s+i.price*i.qty,0);
        const order = {
          items: cart,
          total: subtotal+delivery,
          deliveryPrice: delivery,
          customerName: document.getElementById('customerName').value.trim(),
          customerPhone: document.getElementById('customerPhone').value.trim(),
          customerAddress: region+', '+document.getElementById('customerDistrict').value+', '+document.getElementById('customerAddress').value.trim(),
          note: document.getElementById('orderNote').value.trim(),
        };
        const res = await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(order)});
        if(res.ok){
          cart=[];saveCart();
          document.getElementById('orderFormView').style.display='none';
          document.getElementById('orderSuccessView').style.display='block';
        } else { alert("Xatolik yuz berdi, qaytadan urinib ko'ring"); }
      });

      function doSearch(){
        const q = document.getElementById('searchInput').value;
        window.location.href='/?q='+encodeURIComponent(q);
      }

      function filterCat(cat){
        window.location.href='/?cat='+encodeURIComponent(cat);
      }

      function changeCardColor(dot, productId, imgIndex){
        const p = PRODUCTS_DATA.find(x=>x.id===productId);
        if(!p||!p.images) return;
        const img = document.getElementById('card-img-'+productId);
        if(img && p.images[imgIndex]) img.src=p.images[imgIndex];
        dot.parentElement.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('selected'));
        dot.classList.add('selected');
      }

      updateCartBadge();
    </script>
  `);
}

// ============ PRODUCT DETAIL ============
async function renderDetail(env, id) {
  const products = await getProducts(env);
  const cfg = await getConfig(env);
  const p = products.find(x=>x.id===id);
  if(!p) return html("Topilmadi", `<div style="padding:40px;text-align:center"><a href="/">← Orqaga</a><p>Mahsulot topilmadi</p></div>`);

  const images = (p.images&&p.images.length) ? p.images : [""];
  const colors = (p.colors||[]).filter(Boolean);
  const sizes = (p.sizes||[]).filter(Boolean);
  const isAvail = p.status!=="soldout"&&p.status!=="soon";

  return html(p.name+" - "+cfg.storeName, `
    <header class="header">
      <div class="header-inner">
        <div class="logo">P<span>R</span>IMUS</div>
        <div style="flex:1"></div>
        <button class="cart-btn" onclick="openCart()">🛒 <span id="cartCountBadge" class="cart-count" style="display:none">0</span></button>
      </div>
    </header>
    <div class="detail-wrap">
      <a href="/" class="back-link">← Bosh sahifa</a>
      <div class="detail-images">
        <div class="detail-main-img"><img id="mainImg" src="${esc(images[0])}" alt="${esc(p.name)}"/></div>
        ${images.length>1?`<div class="detail-thumbs">${images.map((img,i)=>`<div class="detail-thumb${i===0?" active":""}" onclick="switchImg(this,'${esc(img)}')"><img src="${esc(img)}" alt=""/></div>`).join("")}</div>`:""}
      </div>
      <h1 class="detail-name">${esc(p.name)}</h1>
      <div class="detail-price">${fmt(p.price)}</div>
      ${p.status==="soldout"?`<p style="color:var(--danger);font-weight:600;margin-bottom:12px;">Bu mahsulot sotildi</p>`:""}
      ${p.status==="soon"?`<p style="color:var(--gold);font-weight:600;margin-bottom:12px;">Tez kunda sotuvga chiqadi</p>`:""}
      <p style="color:var(--ink-soft);margin-bottom:14px;font-size:0.9rem;">${esc(p.description||"")}</p>
      ${colors.length?`<div class="option-label">Rang tanlang</div><div class="option-pills" id="colorPills">${colors.map((c,i)=>`<button class="option-pill${i===0?" selected":""}" onclick="selectOpt('color',this,'${esc(c)}')">${esc(c)}</button>`).join("")}</div>`:""}
      ${sizes.length?`<div class="option-label">O'lcham tanlang</div><div class="option-pills" id="sizePills">${sizes.map((s,i)=>`<button class="option-pill${i===0?" selected":""}" onclick="selectOpt('size',this,'${esc(s)}')">${esc(s)}</button>`).join("")}</div>`:""}
      <div class="qty-wrap" style="margin-bottom:14px;">
        <div class="option-label" style="margin:0">Miqdor:</div>
        <button class="qty-btn" onclick="changeQty(-1)">−</button>
        <span class="qty-num" id="qtyNum">1</span>
        <button class="qty-btn" onclick="changeQty(1)">+</button>
      </div>
      ${isAvail?`
        <button class="btn-add-cart" onclick="addToCartDetail()">🛒 Savatga qo'shish</button>
        <button class="btn-buy-now" onclick="buyNow()">Hoziroq buyurtma berish</button>
      `:`<button class="btn-buy-now" disabled style="opacity:0.5">${p.status==="soldout"?"Sotildi":"Tez kunda"}</button>`}
    </div>

    <!-- CART MODAL -->
    <div class="modal-overlay" id="cartModal">
      <div class="modal">
        <h3 class="modal-title">🛒 Savat</h3>
        <div id="cartItems"></div>
        <div id="cartEmpty" style="text-align:center;padding:30px;color:var(--ink-soft);display:none">Savat bo'sh</div>
        <div id="cartFooter" style="display:none">
          <div class="cart-total">
            <div class="cart-total-main"><span>Jami:</span><span id="cartTotal"></span></div>
          </div>
          <button class="btn-submit" onclick="openOrderFromCart()">Buyurtma berish</button>
        </div>
        <button class="btn-cancel" onclick="closeModal('cartModal')">Yopish</button>
      </div>
    </div>

    <!-- ORDER MODAL -->
    <div class="modal-overlay" id="orderModal">
      <div class="modal">
        <div id="orderFormView">
          <h3 class="modal-title">Buyurtma berish</h3>
          <form id="orderForm">
            <div class="form-group"><label>Ismingiz</label><input type="text" id="customerName" required/></div>
            <div class="form-group"><label>Telefon</label><input type="tel" id="customerPhone" required placeholder="+998 90 123 45 67"/></div>
            <div class="form-group">
              <label>Viloyat</label>
              <select id="customerRegion" required onchange="updateDistricts()">
                <option value="">-- Viloyat tanlang --</option>
                ${Object.keys(DELIVERY_PRICES).map(r=>`<option>${esc(r)}</option>`).join("")}
              </select>
            </div>
            <div class="form-group" id="districtGroup" style="display:none">
              <label>Tuman</label>
              <select id="customerDistrict" required><option value="">-- Tuman tanlang --</option></select>
            </div>
            <div class="form-group"><label>Ko'cha, uy raqami</label><input type="text" id="customerAddress" required/></div>
            <div class="form-group"><label>Izoh (ixtiyoriy)</label><textarea id="orderNote" rows="2"></textarea></div>
            <div class="delivery-box" id="deliveryBox">
              <div class="delivery-row"><span>Mahsulotlar:</span><span id="dSubtotal"></span></div>
              <div class="delivery-row"><span>Yetkazib berish:</span><span id="dDelivery"></span></div>
              <div class="delivery-total"><span>JAMI TO'LOV:</span><span id="dTotal"></span></div>
            </div>
            <div class="warning-box">⚠️ <strong>Diqqat!</strong> Yuqoridagi jami summani to'lang!</div>
            <div class="payment-box" id="paymentBox" style="display:none">
              <div class="payment-label">TO'LOV UCHUN KARTA</div>
              <div class="payment-card" id="payCard"></div>
              <div style="font-size:0.82rem;opacity:0.85;margin-top:3px;" id="payOwner"></div>
            </div>
            <button type="submit" class="btn-submit">Buyurtmani tasdiqlash</button>
            <button type="button" class="btn-cancel" onclick="closeModal('orderModal')">Bekor qilish</button>
          </form>
        </div>
        <div id="orderSuccessView" style="display:none">
          <div class="success-box">
            <div class="success-icon">✓</div>
            <h3 style="font-family:Georgia,serif;color:var(--green);margin-bottom:8px;">Buyurtma qabul qilindi!</h3>
            <p style="color:var(--ink-soft);font-size:0.9rem;margin-bottom:14px;">To'lov chekining screenshotini Telegram orqali yuboring.</p>
            <a href="https://t.me/shokhjahon_primus" target="_blank" class="btn-tg">📸 Screenshot yuborish</a>
            <button class="btn-cancel" onclick="window.location.href='/'">Yopish</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      const PRODUCT = ${JSON.stringify(p)};
      const DELIVERY_PRICES = {"Toshkent shahri": 15000, "Toshkent viloyati": 20000, "Andijon viloyati": 25000, "Fargona viloyati": 25000, "Namangan viloyati": 25000, "Samarqand viloyati": 25000, "Jizzax viloyati": 25000, "Sirdaryo viloyati": 25000, "Buxoro viloyati": 30000, "Navoiy viloyati": 30000, "Qashqadaryo viloyati": 30000, "Surxondaryo viloyati": 30000, "Xorazm viloyati": 35000, "Qoraqalpogiston": 35000};
      const DISTRICTS_DATA = JSON.parse(decodeURIComponent(DISTRICTS_ENCODED));
      let selectedColor = colors.length ? colors[0] : '';
      let selectedSize = sizes.length ? sizes[0] : '';
      let qty = 1;
      let cart = JSON.parse(localStorage.getItem('primus_cart')||'[]');
      let orderItems = [];

      function saveCart(){ localStorage.setItem('primus_cart',JSON.stringify(cart)); updateCartBadge(); }
      function updateCartBadge(){
        const total=cart.reduce((s,i)=>s+i.qty,0);
        const badge=document.getElementById('cartCountBadge');
        if(total>0){badge.textContent=total;badge.style.display='flex';}else{badge.style.display='none';}
      }

      function switchImg(thumb, src){
        document.getElementById('mainImg').src=src;
        document.querySelectorAll('.detail-thumb').forEach(t=>t.classList.remove('active'));
        thumb.classList.add('active');
      }

      function selectOpt(type, btn, val){
        btn.parentElement.querySelectorAll('.option-pill').forEach(b=>b.classList.remove('selected'));
        btn.classList.add('selected');
        if(type==='color'){
          selectedColor=val;
          const idx=(PRODUCT.colors||[]).indexOf(val);
          if(idx>=0&&PRODUCT.images&&PRODUCT.images[idx]){
            document.getElementById('mainImg').src=PRODUCT.images[idx];
            document.querySelectorAll('.detail-thumb').forEach((t,i)=>{t.classList.toggle('active',i===idx);});
          }
        }
        if(type==='size') selectedSize=val;
      }

      function changeQty(delta){
        qty=Math.max(1,qty+delta);
        document.getElementById('qtyNum').textContent=qty;
      }

      function addToCartDetail(){
        const item={id:PRODUCT.id,name:PRODUCT.name,price:Number(PRODUCT.price),image:(PRODUCT.images&&PRODUCT.images[0])||"",color:selectedColor,size:selectedSize,qty};
        const existing=cart.find(i=>i.id===PRODUCT.id&&i.color===selectedColor&&i.size===selectedSize);
        if(existing){existing.qty+=qty;}else{cart.push(item);}
        saveCart();
        alert("Savatga qo'shildi!");
      }

      function buyNow(){
        orderItems=[{id:PRODUCT.id,name:PRODUCT.name,price:Number(PRODUCT.price),image:(PRODUCT.images&&PRODUCT.images[0])||"",color:selectedColor,size:selectedSize,qty}];
        document.getElementById('orderFormView').style.display='block';
        document.getElementById('orderSuccessView').style.display='none';
        document.getElementById('orderModal').classList.add('open');
      }

      function openCart(){
        renderCartItems();
        document.getElementById('cartModal').classList.add('open');
      }

      function openOrderFromCart(){
        orderItems=[...cart];
        document.getElementById('cartModal').classList.remove('open');
        document.getElementById('orderFormView').style.display='block';
        document.getElementById('orderSuccessView').style.display='none';
        document.getElementById('orderModal').classList.add('open');
      }

      function closeModal(id){ document.getElementById(id).classList.remove('open'); }

      document.querySelectorAll('.modal-overlay').forEach(el=>{
        el.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
      });

      function renderCartItems(){
        const el=document.getElementById('cartItems');
        const empty=document.getElementById('cartEmpty');
        const footer=document.getElementById('cartFooter');
        if(cart.length===0){el.innerHTML='';empty.style.display='block';footer.style.display='none';return;}
        empty.style.display='none';footer.style.display='block';
        let total=0;
        el.innerHTML=cart.map((item,i)=>{
          total+=item.price*item.qty;
          return \`<div class="cart-item">
            <img src="\${item.image}" alt=""/>
            <div class="cart-item-info">
              <div class="cart-item-name">\${item.name}</div>
              <div class="cart-item-meta">\${item.color||''} \${item.size||''} x\${item.qty}</div>
              <div class="cart-item-price">\${(item.price*item.qty).toLocaleString('ru-RU')} so'm</div>
            </div>
            <button class="cart-remove" onclick="removeCartItem(\${i})">✕</button>
          </div>\`;
        }).join('');
        document.getElementById('cartTotal').textContent=total.toLocaleString('ru-RU')+' so\'m';
      }

      function removeCartItem(i){ cart.splice(i,1); saveCart(); renderCartItems(); }

      function updateDistricts(){
        const region=document.getElementById('customerRegion').value;
        const dg=document.getElementById('districtGroup');
        const ds=document.getElementById('customerDistrict');
        const db=document.getElementById('deliveryBox');
        const pb=document.getElementById('paymentBox');
        if(!region){dg.style.display='none';db.style.display='none';pb.style.display='none';return;}
        const districts=DISTRICTS_DATA[region]||[];
        ds.innerHTML='<option value="">-- Tuman tanlang --</option>'+districts.map(d=>\`<option>\${d}</option>\`).join('');
        dg.style.display='block';
        const delivery=DELIVERY_PRICES[region]||30000;
        const items=orderItems.length>0?orderItems:cart;
        const subtotal=items.reduce((s,i)=>s+i.price*i.qty,0);
        document.getElementById('dSubtotal').textContent=subtotal.toLocaleString('ru-RU')+' so\'m';
        document.getElementById('dDelivery').textContent=delivery.toLocaleString('ru-RU')+' so\'m';
        document.getElementById('dTotal').textContent=(subtotal+delivery).toLocaleString('ru-RU')+' so\'m';
        db.style.display='block';
        fetch('/api/config').then(r=>r.json()).then(cfg=>{
          document.getElementById('payCard').textContent=cfg.cardNumber||'';
          document.getElementById('payOwner').textContent=cfg.cardOwner||'';
          pb.style.display='block';
        });
      }

      document.getElementById('orderForm').addEventListener('submit',async function(e){
        e.preventDefault();
        const region=document.getElementById('customerRegion').value;
        const delivery=DELIVERY_PRICES[region]||30000;
        const items=orderItems.length>0?orderItems:cart;
        const subtotal=items.reduce((s,i)=>s+i.price*i.qty,0);
        const order={
          items,total:subtotal+delivery,deliveryPrice:delivery,
          customerName:document.getElementById('customerName').value.trim(),
          customerPhone:document.getElementById('customerPhone').value.trim(),
          customerAddress:region+', '+document.getElementById('customerDistrict').value+', '+document.getElementById('customerAddress').value.trim(),
          note:document.getElementById('orderNote').value.trim(),
        };
        const res=await fetch('/api/orders',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(order)});
        if(res.ok){
          cart=[];saveCart();
          document.getElementById('orderFormView').style.display='none';
          document.getElementById('orderSuccessView').style.display='block';
        }else{alert("Xatolik yuz berdi");}
      });

      updateCartBadge();
    </script>
  `);
}

// ============ ADMIN PANEL ============
async function renderAdmin(env) {
  const products = await getProducts(env);
  const orders = await getOrders(env);
  const cfg = await getConfig(env);

  const newOrders = orders.filter(o=>o.status!=='bajarildi');
  const doneOrders = orders.filter(o=>o.status==='bajarildi');

  function orderCard(o, isDone) {
    const items = (o.items||[]).map(i=>`${esc(i.name)} x${i.qty}${i.color?' ('+esc(i.color)+')':''}`).join(', ');
    return `<div class="order-card${isDone?' done':''}">
      <div class="order-top">
        <strong style="font-size:0.88rem;">${items}</strong>
        <span class="order-status${isDone?' done':''}">${isDone?'Bajarildi':'Yangi'}</span>
      </div>
      <div class="order-detail"><strong>Jami:</strong> ${fmt(o.total)} so'm</div>
      <div class="order-detail"><strong>Mijoz:</strong> ${esc(o.customerName)}</div>
      <div class="order-detail"><strong>Telefon:</strong> ${esc(o.customerPhone)}</div>
      <div class="order-detail"><strong>Manzil:</strong> ${esc(o.customerAddress)}</div>
      ${o.note?`<div class="order-detail"><strong>Izoh:</strong> ${esc(o.note)}</div>`:''}
      <div class="order-detail" style="font-size:0.75rem;">${new Date(o.date).toLocaleString('uz-UZ')}</div>
      <div class="order-actions">
        ${!isDone?`<button class="icon-btn success" onclick="markDone('${o.id}')">✅ Bajarildi</button>`:''}
        <button class="icon-btn danger" onclick="deleteOrder('${o.id}')">🗑️ O'chirish</button>
      </div>
    </div>`;
  }

  const productRows = products.length===0
    ? `<div style="text-align:center;padding:30px;color:var(--ink-soft)">Hozircha mahsulot yo'q</div>`
    : products.map(p=>`
      <div class="admin-prod-row">
        <img src="${esc((p.images&&p.images[0])||'')}" alt=""/>
        <div class="admin-prod-info">
          <strong>${esc(p.name)}</strong>
          <span>${fmt(p.price)} so'm · ${esc(p.category||'—')} · ${p.status==='soldout'?'Sotildi':p.status==='soon'?'Tez kunda':'Faol'}</span>
        </div>
        <button class="icon-btn" onclick="editProduct('${p.id}')">✏️</button>
        <button class="icon-btn danger" onclick="deleteProduct('${p.id}')">🗑️</button>
      </div>`).join('');

  return html("Admin - Primus", `
    <header class="header">
      <div class="header-inner">
        <div class="logo">P<span>R</span>IMUS Admin</div>
        <a href="/" style="color:var(--cream);opacity:0.8;font-size:0.82rem;">Saytga qaytish</a>
      </div>
    </header>
    <div class="admin-wrap">
      <div class="admin-tabs">
        <button class="admin-tab active" id="tabProducts" onclick="switchTab('products')">Mahsulotlar</button>
        <button class="admin-tab" id="tabNewOrders" onclick="switchTab('newOrders')">Yangi buyurtmalar (${newOrders.length})</button>
        <button class="admin-tab" id="tabDoneOrders" onclick="switchTab('doneOrders')">Bajarilganlar (${doneOrders.length})</button>
        <button class="admin-tab" id="tabSettings" onclick="switchTab('settings')">Sozlamalar</button>
      </div>

      <!-- MAHSULOTLAR -->
      <div id="productsPanel">
        <div class="admin-section">
          <h2 id="formTitle">Yangi mahsulot qo'shish</h2>
          <form id="productForm">
            <input type="hidden" id="editId"/>
            <div class="form-group"><label>Nomi</label><input type="text" id="prodName" required/></div>
            <div class="form-group"><label>Narxi (so'm)</label><input type="number" id="prodPrice" required/></div>
            <div class="form-group"><label>Kategoriya</label>
              <select id="prodCategory">
                ${CATEGORIES.filter(c=>c!=="Barchasi").map(c=>`<option>${esc(c)}</option>`).join("")}
              </select>
            </div>
            <div class="form-group"><label>Tavsif</label><textarea id="prodDesc" rows="2"></textarea></div>
            <div class="form-group">
              <label>Rasmlar (URL) — har bir rang uchun alohida rasm qo'shing</label>
              <div id="imageList"><div class="imagelist-row"><input type="text" class="imgInput" placeholder="https://..."/></div></div>
              <button type="button" class="icon-btn" style="margin-top:6px" onclick="addImgField()">+ Rasm qo'shish</button>
            </div>
            <div class="form-group"><label>Ranglar (vergul bilan: Qora, Oq, Ko'k)</label><input type="text" id="prodColors"/></div>
            <div class="form-group"><label>O'lchamlar (vergul bilan: S, M, L, XL)</label><input type="text" id="prodSizes"/></div>
            <div class="form-group"><label>Holati</label>
              <select id="prodStatus">
                <option value="active">Faol</option>
                <option value="soldout">Sotildi</option>
                <option value="soon">Tez kunda</option>
              </select>
            </div>
            <button type="submit" class="btn-submit" id="submitBtn">Qo'shish</button>
            <button type="button" class="btn-cancel" id="cancelEditBtn" style="display:none" onclick="cancelEdit()">Bekor qilish</button>
          </form>
        </div>
        <div class="admin-section">
          <h2>Mavjud mahsulotlar (${products.length})</h2>
          <div id="productList">${productRows}</div>
        </div>
      </div>

      <!-- YANGI BUYURTMALAR -->
      <div id="newOrdersPanel" style="display:none">
        <div class="admin-section">
          <h2>Yangi buyurtmalar</h2>
          ${newOrders.length===0?'<div style="text-align:center;padding:30px;color:var(--ink-soft)">Hozircha yangi buyurtma yo\'q</div>':newOrders.map(o=>orderCard(o,false)).join('')}
        </div>
      </div>

      <!-- BAJARILGAN BUYURTMALAR -->
      <div id="doneOrdersPanel" style="display:none">
        <div class="admin-section">
          <h2>Bajarilgan buyurtmalar</h2>
          ${doneOrders.length===0?'<div style="text-align:center;padding:30px;color:var(--ink-soft)">Hozircha bajarilgan buyurtma yo\'q</div>':doneOrders.map(o=>orderCard(o,true)).join('')}
        </div>
      </div>

      <!-- SOZLAMALAR -->
      <div id="settingsPanel" style="display:none">
        <div class="admin-section">
          <h2>Do'kon sozlamalari</h2>
          <form id="settingsForm">
            <div class="form-group"><label>Do'kon nomi</label><input type="text" id="settName" value="${esc(cfg.storeName)}"/></div>
            <div class="form-group"><label>Karta raqami</label><input type="text" id="settCard" value="${esc(cfg.cardNumber)}"/></div>
            <div class="form-group"><label>Karta egasi</label><input type="text" id="settOwner" value="${esc(cfg.cardOwner)}"/></div>
            <div class="form-group"><label>Telegram Worker URL</label><input type="text" id="settTg" value="${esc(cfg.telegramWorkerUrl)}"/></div>
            <button type="submit" class="btn-submit">Saqlash</button>
          </form>
        </div>
      </div>
    </div>

    <script>
      const PRODUCTS_DATA = ${JSON.stringify(products)};

      function switchTab(tab){
        ['products','newOrders','doneOrders','settings'].forEach(t=>{
          document.getElementById('tab'+t[0].toUpperCase()+t.slice(1)).classList.toggle('active',t===tab);
          document.getElementById(t+'Panel').style.display=t===tab?'block':'none';
        });
      }

      function addImgField(){
        const list=document.getElementById('imageList');
        const row=document.createElement('div');
        row.className='imagelist-row';
        row.innerHTML='<input type="text" class="imgInput" placeholder="https://..."/><button type="button" class="icon-btn danger" onclick="this.parentElement.remove()">✕</button>';
        list.appendChild(row);
      }

      function getImages(){ return Array.from(document.querySelectorAll('.imgInput')).map(i=>i.value.trim()).filter(Boolean); }
      function setImages(imgs){
        const list=document.getElementById('imageList');
        list.innerHTML=(imgs.length?imgs:['']).map((img,i)=>
          \`<div class="imagelist-row"><input type="text" class="imgInput" value="\${img}"/>\${i>0?'<button type="button" class="icon-btn danger" onclick="this.parentElement.remove()">✕</button>':''}</div>\`
        ).join('');
      }

      document.getElementById('productForm').addEventListener('submit',async function(e){
        e.preventDefault();
        const editId=document.getElementById('editId').value;
        const payload={
          id:editId||undefined,
          name:document.getElementById('prodName').value.trim(),
          price:document.getElementById('prodPrice').value,
          category:document.getElementById('prodCategory').value,
          description:document.getElementById('prodDesc').value.trim(),
          images:getImages(),
          colors:document.getElementById('prodColors').value.split(',').map(s=>s.trim()).filter(Boolean),
          sizes:document.getElementById('prodSizes').value.split(',').map(s=>s.trim()).filter(Boolean),
          status:document.getElementById('prodStatus').value,
        };
        await fetch('/api/products',{method:editId?'PUT':'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
        window.location.reload();
      });

      function editProduct(id){
        const p=PRODUCTS_DATA.find(x=>x.id===id);
        if(!p)return;
        document.getElementById('editId').value=p.id;
        document.getElementById('prodName').value=p.name;
        document.getElementById('prodPrice').value=p.price;
        document.getElementById('prodCategory').value=p.category||'Erkaklar';
        document.getElementById('prodDesc').value=p.description||'';
        setImages(p.images||[]);
        document.getElementById('prodColors').value=(p.colors||[]).join(', ');
        document.getElementById('prodSizes').value=(p.sizes||[]).join(', ');
        document.getElementById('prodStatus').value=p.status||'active';
        document.getElementById('formTitle').textContent='Mahsulotni tahrirlash';
        document.getElementById('submitBtn').textContent='Saqlash';
        document.getElementById('cancelEditBtn').style.display='block';
        window.scrollTo(0,0);
      }

      function cancelEdit(){
        document.getElementById('productForm').reset();
        document.getElementById('editId').value='';
        setImages([]);
        document.getElementById('formTitle').textContent="Yangi mahsulot qo'shish";
        document.getElementById('submitBtn').textContent="Qo'shish";
        document.getElementById('cancelEditBtn').style.display='none';
      }

      async function deleteProduct(id){
        if(!confirm("O'chirishni tasdiqlaysizmi?"))return;
        await fetch('/api/products?id='+id,{method:'DELETE'});
        window.location.reload();
      }

      async function markDone(id){
        await fetch('/api/orders/'+id,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({status:'bajarildi'})});
        window.location.reload();
      }

      async function deleteOrder(id){
        if(!confirm("Buyurtmani o'chirishni tasdiqlaysizmi?"))return;
        await fetch('/api/orders/'+id,{method:'DELETE'});
        window.location.reload();
      }

      document.getElementById('settingsForm').addEventListener('submit',async function(e){
        e.preventDefault();
        await fetch('/api/config',{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({
          storeName:document.getElementById('settName').value.trim(),
          cardNumber:document.getElementById('settCard').value.trim(),
          cardOwner:document.getElementById('settOwner').value.trim(),
          telegramWorkerUrl:document.getElementById('settTg').value.trim(),
        })});
        alert('Sozlamalar saqlandi!');
      });
    </script>
  `);
}

// ============ MAIN HANDLER ============
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // API config GET
    if (path === "/api/config" && request.method === "GET") {
      const cfg = await getConfig(env);
      return new Response(JSON.stringify(cfg), {headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});
    }

    // API products
    if (path === "/api/products" && request.method === "POST") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      const body = await request.json();
      const products = await getProducts(env);
      body.id = Date.now().toString();
      products.push(body);
      await saveProducts(env, products);
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }
    if (path === "/api/products" && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      const body = await request.json();
      const products = await getProducts(env);
      const idx = products.findIndex(p=>p.id===body.id);
      if (idx!==-1) products[idx]={...products[idx],...body};
      await saveProducts(env, products);
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }
    if (path === "/api/products" && request.method === "DELETE") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      const id = url.searchParams.get("id");
      await saveProducts(env, (await getProducts(env)).filter(p=>p.id!==id));
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }

    // API orders
    if (path === "/api/orders" && request.method === "POST") {
      const body = await request.json();
      const orders = await getOrders(env);
      body.id = Date.now().toString();
      body.date = new Date().toISOString();
      body.status = "yangi";
      orders.unshift(body);
      await saveOrders(env, orders);
      await notifyTelegram(env, body);
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }
    if (path.startsWith("/api/orders/") && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      const id = path.split("/api/orders/")[1];
      const body = await request.json();
      const orders = await getOrders(env);
      const idx = orders.findIndex(o=>o.id===id);
      if (idx!==-1) orders[idx].status = body.status;
      await saveOrders(env, orders);
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }
    if (path.startsWith("/api/orders/") && request.method === "DELETE") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      const id = path.split("/api/orders/")[1];
      await saveOrders(env, (await getOrders(env)).filter(o=>o.id!==id));
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }

    // API config PUT
    if (path === "/api/config" && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized",{status:401});
      await saveConfig(env, await request.json());
      return new Response(JSON.stringify({ok:true}),{headers:{"Content-Type":"application/json"}});
    }

    // Admin login
    if (path === ADMIN_PATH+"/login" && request.method === "POST") {
      const fd = await request.formData();
      if (fd.get("password") === ADMIN_PASSWORD) {
        return new Response(null,{status:302,headers:{"Location":ADMIN_PATH,"Set-Cookie":"admin_session=valid; Path=/; HttpOnly; Max-Age=86400"}});
      }
      return new Response(html("Kirish",`<div class="admin-login"><h2>Kirish</h2><form method="POST" action="${ADMIN_PATH}/login"><div class="form-group"><input type="password" name="password" placeholder="Parol"/></div><button type="submit" class="btn-submit">Kirish</button><p style="color:var(--danger);margin-top:10px">Parol noto'g'ri</p></form></div>`),{headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }

    // Admin panel
    if (path === ADMIN_PATH) {
      if (!isAuthed(request)) {
        return new Response(html("Kirish",`<div class="admin-login"><h2 style="font-family:Georgia,serif;color:var(--green);margin-bottom:14px">Admin kirish</h2><form method="POST" action="${ADMIN_PATH}/login"><div class="form-group"><input type="password" name="password" placeholder="Parol"/></div><button type="submit" class="btn-submit">Kirish</button></form></div>`),{headers:{"Content-Type":"text/html;charset=UTF-8"}});
      }
      return new Response(await renderAdmin(env),{headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }

    // Product detail
    if (path.startsWith("/product/")) {
      const id = path.split("/product/")[1];
      return new Response(await renderDetail(env,id),{headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }

    // Home
    if (path==="/"||path==="") {
      const q = url.searchParams.get("q")||"";
      const cat = url.searchParams.get("cat")||"";
      return new Response(await renderHome(env,q,cat),{headers:{"Content-Type":"text/html;charset=UTF-8"}});
    }

    return new Response("Sahifa topilmadi",{status:404});
  }
};
