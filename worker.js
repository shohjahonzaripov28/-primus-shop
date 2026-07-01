// ============================================
// ELITE COUTURE - TO'LIQ WORKER KODI
// Bu yagona fayl: server + baza (KV) + barcha sahifalar
// ============================================

const ADMIN_PASSWORD = "dokon2026"; // shu yerda parolni o'zgartirishingiz mumkin
const ADMIN_PATH = "/boss-panel-7k2x"; // yashirin admin manzili - buni o'zgartiring!

const STYLE = `
:root {
  --emerald-deep: #0f3d2e;
  --emerald-mid: #1a5440;
  --gold: #d4a72c;
  --gold-bright: #f0c14b;
  --cream: #faf6ed;
  --ink: #1c2620;
  --ink-soft: #5a6b61;
  --line: #e3dcc9;
  --white: #ffffff;
  --danger: #c1432e;
  --font-display: "Georgia", serif;
  --font-body: -apple-system, sans-serif;
  --radius: 14px;
  --shadow-card: 0 2px 8px rgba(15,61,46,0.08);
  --shadow-lift: 0 12px 28px rgba(15,61,46,0.16);
}
* { box-sizing: border-box; }
body { margin:0; font-family: var(--font-body); background: var(--cream); color: var(--ink); line-height:1.5; }
img { max-width:100%; display:block; }
a { color:inherit; text-decoration:none; }
button { font-family:inherit; cursor:pointer; }
.site-header { background: var(--emerald-deep); color: var(--cream); padding:18px 20px; position:sticky; top:0; z-index:50; }
.header-inner { max-width:1080px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; }
.brand { font-family: var(--font-display); font-size:1.5rem; font-weight:600; }
.hero { max-width:1080px; margin:0 auto; padding:40px 20px 24px; text-align:center; }
.hero h1 { font-family: var(--font-display); font-size: clamp(1.6rem,5vw,2.4rem); margin:0 0 10px; color: var(--emerald-deep); }
.hero p { color: var(--ink-soft); }
.catalog { max-width:1080px; margin:0 auto; padding:12px 20px 80px; display:grid; grid-template-columns: repeat(auto-fill, minmax(200px,1fr)); gap:18px; }
.product-card { background: var(--white); border-radius: var(--radius); overflow:hidden; box-shadow: var(--shadow-card); display:flex; flex-direction:column; position:relative; }
.product-image-wrap { aspect-ratio:1/1; overflow:hidden; background: var(--line); position:relative; }
.product-image-wrap img { width:100%; height:100%; object-fit:cover; }
.badge { position:absolute; top:10px; left:10px; padding:5px 12px; border-radius:999px; font-size:0.72rem; font-weight:700; text-transform:uppercase; }
.badge.soldout { background: var(--danger); color:#fff; }
.badge.soon { background: var(--gold); color: var(--emerald-deep); }
.product-body { padding:14px; display:flex; flex-direction:column; gap:5px; flex:1; }
.product-name { font-family: var(--font-display); font-size:1rem; font-weight:600; }
.product-price { font-family: var(--font-display); font-size:1.2rem; font-weight:600; color: var(--emerald-mid); margin-top:2px; }
.product-price::after { content:" so'm"; font-size:0.72rem; font-weight:400; color: var(--ink-soft); }
.btn-view { margin-top:8px; background: var(--gold); color: var(--emerald-deep); border:none; padding:10px 14px; border-radius:999px; font-weight:600; font-size:0.88rem; text-align:center; display:block; }
.btn-view.disabled { background: var(--line); color: var(--ink-soft); pointer-events:none; }
.site-footer { text-align:center; padding:24px 20px 40px; color: var(--ink-soft); font-size:0.82rem; }

.detail-wrap { max-width:600px; margin:0 auto; padding:20px; }
.detail-image { aspect-ratio:1/1; border-radius:var(--radius); overflow:hidden; background:var(--line); margin-bottom:16px; }
.detail-image img { width:100%; height:100%; object-fit:cover; }
.detail-name { font-family: var(--font-display); font-size:1.4rem; font-weight:600; color:var(--emerald-deep); margin:0 0 6px; }
.detail-price { font-family: var(--font-display); font-size:1.5rem; font-weight:600; color: var(--emerald-mid); margin-bottom:14px; }
.detail-price::after { content:" so'm"; font-size:0.8rem; font-weight:400; color:var(--ink-soft); }
.detail-desc { color: var(--ink-soft); margin-bottom:18px; }
.option-group { margin-bottom:16px; }
.option-label { font-weight:600; font-size:0.85rem; margin-bottom:8px; display:block; }
.option-pills { display:flex; flex-wrap:wrap; gap:8px; }
.option-pill { border:1.5px solid var(--line); border-radius:999px; padding:8px 16px; font-size:0.85rem; background:var(--white); }
.option-pill.selected { border-color: var(--emerald-deep); background: var(--emerald-deep); color: var(--cream); }
.back-link { display:inline-block; margin-bottom:14px; color: var(--ink-soft); font-size:0.88rem; }

.modal-overlay { position:fixed; inset:0; background:rgba(15,38,30,0.55); display:none; align-items:flex-end; justify-content:center; z-index:100; }
.modal-overlay.open { display:flex; }
.modal { background:var(--white); border-radius:20px 20px 0 0; width:100%; max-width:480px; max-height:90vh; overflow-y:auto; padding:24px 22px 28px; }
@media (min-width:640px){ .modal-overlay{align-items:center;} .modal{border-radius:20px;} }
.modal-title { font-family: var(--font-display); font-size:1.3rem; color: var(--emerald-deep); margin:0 0 4px; }
.form-group { margin-bottom:14px; }
.form-group label { display:block; font-size:0.82rem; font-weight:600; margin-bottom:6px; }
.form-group input, .form-group textarea, .form-group select { width:100%; padding:12px 14px; border:1.5px solid var(--line); border-radius:10px; font-size:0.95rem; font-family:inherit; background:var(--cream); }
.payment-box { background: var(--emerald-deep); color: var(--cream); border-radius:12px; padding:16px; margin:16px 0; }
.payment-box-label { font-size:0.78rem; opacity:0.7; text-transform:uppercase; margin-bottom:6px; }
.payment-card-number { font-family: var(--font-display); font-size:1.15rem; font-weight:600; color: var(--gold-bright); }
.btn-submit { width:100%; background: var(--gold); color: var(--emerald-deep); border:none; padding:14px; border-radius:999px; font-weight:700; font-size:1rem; margin-top:6px; }
.btn-cancel { width:100%; background:transparent; border:none; color: var(--ink-soft); padding:10px; font-size:0.88rem; }
.success-box { text-align:center; padding:20px 0; }
.success-icon { width:56px; height:56px; border-radius:50%; background: var(--emerald-mid); color:#fff; display:flex; align-items:center; justify-content:center; font-size:1.8rem; margin:0 auto 16px; }

.admin-login { max-width:340px; margin:80px auto; background:var(--white); border-radius:var(--radius); padding:30px; box-shadow:var(--shadow-card); text-align:center; }
.admin-wrap { max-width:900px; margin:0 auto; padding:20px; }
.admin-tabs { display:flex; gap:8px; margin-bottom:18px; flex-wrap:wrap; }
.admin-tab { padding:9px 16px; border-radius:999px; background:var(--white); border:1.5px solid var(--line); font-weight:600; font-size:0.85rem; color:var(--ink-soft); }
.admin-tab.active { background: var(--emerald-deep); color: var(--cream); border-color: var(--emerald-deep); }
.admin-section { background:var(--white); border-radius:var(--radius); padding:20px; margin-bottom:18px; box-shadow:var(--shadow-card); }
.admin-section h2 { font-family: var(--font-display); font-size:1.1rem; color:var(--emerald-deep); margin-top:0; }
.admin-product-row { display:flex; gap:12px; padding:12px 0; border-bottom:1px solid var(--line); align-items:center; flex-wrap:wrap; }
.admin-product-row img { width:52px; height:52px; border-radius:8px; object-fit:cover; }
.admin-product-info { flex:1; min-width:120px; }
.admin-product-info strong { display:block; font-size:0.9rem; }
.admin-product-info span { font-size:0.8rem; color:var(--ink-soft); }
.icon-btn { background:var(--cream); border:1px solid var(--line); border-radius:8px; padding:7px 11px; font-size:0.78rem; font-weight:600; }
.icon-btn.danger { color: var(--danger); }
.order-card { border:1px solid var(--line); border-radius:12px; padding:14px; margin-bottom:10px; }
.order-status { font-size:0.72rem; font-weight:700; padding:3px 9px; border-radius:999px; background:var(--gold); color:var(--emerald-deep); text-transform:uppercase; }
.order-status.bajarildi { background: var(--emerald-mid); color:#fff; }
.empty-admin, .empty-state { text-align:center; padding:40px 20px; color: var(--ink-soft); grid-column:1/-1; }
.imagelist-row { display:flex; gap:8px; margin-bottom:8px; }
.imagelist-row input { flex:1; }
`;

// ============================================
// YORDAMCHI FUNKSIYALAR
// ============================================

function esc(s) {
  if (!s) return "";
  return String(s).replace(/[&<>"']/g, (c) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));
}

function fmtPrice(p) {
  return Number(p || 0).toLocaleString("ru-RU");
}

async function getProducts(env) {
  const data = await env.STORE_KV.get("products");
  return data ? JSON.parse(data) : [];
}
async function saveProducts(env, products) {
  await env.STORE_KV.put("products", JSON.stringify(products));
}
async function getOrders(env) {
  const data = await env.STORE_KV.get("orders");
  return data ? JSON.parse(data) : [];
}
async function saveOrders(env, orders) {
  await env.STORE_KV.put("orders", JSON.stringify(orders));
}
async function getConfig(env) {
  const data = await env.STORE_KV.get("config");
  const defaults = {
    storeName: "Primus",
    cardNumber: "8600 1234 5678 9012",
    cardOwner: "F. Ism Sharifov",
    telegramWorkerUrl: "",
  };
  return data ? { ...defaults, ...JSON.parse(data) } : defaults;
}
async function saveConfig(env, config) {
  await env.STORE_KV.put("config", JSON.stringify(config));
}

function pageShell(title, bodyHtml, extraHead = "") {
  return `<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<style>${STYLE}</style>
${extraHead}
</head>
<body>${bodyHtml}</body>
</html>`;
}

// ============================================
// SAHIFALAR
// ============================================

async function renderHome(env) {
  const products = await getProducts(env);
  const config = await getConfig(env);

  const cards = products.length === 0
    ? `<div class="empty-state">Hozircha mahsulot yo'q.</div>`
    : products.map((p) => {
        const cover = (p.images && p.images[0]) || "";
        let badge = "";
        let btnText = "Ko'rish";
        let btnClass = "btn-view";
        if (p.status === "soldout") { badge = `<span class="badge soldout">Sotildi</span>`; }
        if (p.status === "soon") { badge = `<span class="badge soon">Tez kunda</span>`; btnClass += " disabled"; btnText = "Tez kunda"; }
        return `
        <div class="product-card">
          <div class="product-image-wrap">
            <img src="${esc(cover)}" alt="${esc(p.name)}" loading="lazy" />
            ${badge}
          </div>
          <div class="product-body">
            <div class="product-name">${esc(p.name)}</div>
            <div class="product-price">${fmtPrice(p.price)}</div>
            <a href="/product/${p.id}" class="${btnClass}">${btnText}</a>
          </div>
        </div>`;
      }).join("");

  return pageShell(config.storeName, `
    <header class="site-header">
      <div class="header-inner">
        <div class="brand">${esc(config.storeName)}</div>
      </div>
    </header>
    <section class="hero">
      <h1>Sevimli mahsulotlaringiz bir qadam yaqinroq</h1>
      <p>Tanlang, buyurtma bering — biz qolganini hal qilamiz.</p>
    </section>
    <main class="catalog">${cards}</main>
    <footer class="site-footer">© 2026 ${esc(config.storeName)}. Barcha huquqlar himoyalangan.</footer>
  `);
}

async function renderProductDetail(env, id) {
  const products = await getProducts(env);
  const config = await getConfig(env);
  const p = products.find((x) => x.id === id);

  if (!p) {
    return pageShell("Topilmadi", `<div class="detail-wrap"><a href="/" class="back-link">&larr; Bosh sahifa</a><p>Mahsulot topilmadi.</p></div>`);
  }

  const images = p.images && p.images.length ? p.images : [""];
  const colors = (p.colors || []).filter(Boolean);
  const sizes = (p.sizes || []).filter(Boolean);

  const isAvailable = p.status !== "soldout" && p.status !== "soon";
  let statusNote = "";
  if (p.status === "soldout") statusNote = `<p style="color:var(--danger); font-weight:600;">Bu mahsulot hozircha sotildi</p>`;
  if (p.status === "soon") statusNote = `<p style="color:var(--gold); font-weight:600;">Tez kunda sotuvga chiqadi</p>`;

  return pageShell(p.name + " - " + config.storeName, `
    <header class="site-header">
      <div class="header-inner"><div class="brand">${esc(config.storeName)}</div></div>
    </header>
    <div class="detail-wrap">
      <a href="/" class="back-link">&larr; Bosh sahifa</a>
      <div class="detail-image">
        <img id="mainImage" src="${esc(images[0])}" alt="${esc(p.name)}" />
      </div>
      ${images.length > 1 ? `<div style="display:flex; gap:8px; margin-bottom:16px; overflow-x:auto;">
        ${images.map((img, i) => `<img src="${esc(img)}" onclick="document.getElementById('mainImage').src='${esc(img)}'" style="width:56px;height:56px;object-fit:cover;border-radius:8px;cursor:pointer;border:2px solid ${i===0?'var(--emerald-deep)':'var(--line)'};" />`).join("")}
      </div>` : ""}
      <h1 class="detail-name">${esc(p.name)}</h1>
      <div class="detail-price">${fmtPrice(p.price)}</div>
      ${statusNote}
      <p class="detail-desc">${esc(p.description || "")}</p>

      ${colors.length ? `<div class="option-group">
        <label class="option-label">Rang</label>
        <div class="option-pills" id="colorPills">
          ${colors.map((c, i) => `<button type="button" class="option-pill${i===0?' selected':''}" onclick="selectOption('color', this)">${esc(c)}</button>`).join("")}
        </div>
      </div>` : ""}

      ${sizes.length ? `<div class="option-group">
        <label class="option-label">O'lcham</label>
        <div class="option-pills" id="sizePills">
          ${sizes.map((s, i) => `<button type="button" class="option-pill${i===0?' selected':''}" onclick="selectOption('size', this)">${esc(s)}</button>`).join("")}
        </div>
      </div>` : ""}

      ${isAvailable ? `<button class="btn-view" style="width:100%; border:none; font-size:1rem; padding:14px;" onclick="openOrderModal()">Buyurtma berish</button>`
        : `<button class="btn-view disabled" style="width:100%; border:none; font-size:1rem; padding:14px;">${p.status === "soldout" ? "Sotildi" : "Tez kunda"}</button>`}
    </div>

    <div class="modal-overlay" id="orderModal">
      <div class="modal">
        <div id="orderFormView">
          <h3 class="modal-title">Buyurtma berish</h3>
          <p style="color:var(--ink-soft); font-size:0.9rem; margin-bottom:16px;">${esc(p.name)} — ${fmtPrice(p.price)} so'm</p>
          <form id="orderForm">
            <div class="form-group"><label>Ismingiz</label><input type="text" id="customerName" required /></div>
            <div class="form-group"><label>Telefon raqamingiz</label><input type="tel" id="customerPhone" required placeholder="+998 90 123 45 67" /></div>
            <div class="form-group"><label>Yetkazib berish manzili</label><input type="text" id="customerAddress" required /></div>
            <div class="form-group"><label>Izoh (ixtiyoriy)</label><textarea id="orderNote" rows="2"></textarea></div>
            <div class="payment-box">
              <div class="payment-box-label">To'lov uchun karta</div>
              <div class="payment-card-number">${esc(config.cardNumber)}</div>
              <div style="font-size:0.85rem; opacity:0.85; margin-top:4px;">${esc(config.cardOwner)}</div>
            </div>
            <button type="submit" class="btn-submit">Buyurtmani tasdiqlash</button>
            <button type="button" class="btn-cancel" onclick="closeOrderModal()">Bekor qilish</button>
          </form>
        </div>
        <div id="orderSuccessView" style="display:none;">
          <div class="success-box">
            <div class="success-icon">&#10003;</div>
            <h3 style="font-family: var(--font-display); color: var(--emerald-deep);">Buyurtma qabul qilindi!</h3>
            <p style="color:var(--ink-soft);">Tez orada siz bilan bog'lanamiz. To'lovni amalga oshirib, tasdiqlash uchun karta egasiga xabar yuborishingizni unutmang.</p>
            <button type="button" class="btn-submit" style="margin-top:16px;" onclick="window.location.href='/'">Yopish</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      let selectedColor = ${colors.length ? `"${esc(colors[0])}"` : "null"};
      let selectedSize = ${sizes.length ? `"${esc(sizes[0])}"` : "null"};

      function selectOption(type, el) {
        const parent = el.parentElement;
        Array.from(parent.children).forEach(c => c.classList.remove('selected'));
        el.classList.add('selected');
        if (type === 'color') selectedColor = el.textContent;
        if (type === 'size') selectedSize = el.textContent;
      }

      function openOrderModal() {
        document.getElementById('orderModal').classList.add('open');
      }
      function closeOrderModal() {
        document.getElementById('orderModal').classList.remove('open');
      }
      document.getElementById('orderModal').addEventListener('click', function(e) {
        if (e.target === this) closeOrderModal();
      });

      document.getElementById('orderForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const order = {
          productId: "${p.id}",
          productName: "${esc(p.name)}",
          price: "${p.price}",
          color: selectedColor,
          size: selectedSize,
          customerName: document.getElementById('customerName').value.trim(),
          customerPhone: document.getElementById('customerPhone').value.trim(),
          customerAddress: document.getElementById('customerAddress').value.trim(),
          note: document.getElementById('orderNote').value.trim(),
        };
        const res = await fetch('/api/orders', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(order)
        });
        if (res.ok) {
          document.getElementById('orderFormView').style.display = 'none';
          document.getElementById('orderSuccessView').style.display = 'block';
        } else {
          alert('Xatolik yuz berdi, qaytadan urinib ko\\'ring');
        }
      });
    </script>
  `);
}

function renderAdminLogin(error) {
  return pageShell("Admin kirish", `
    <div class="admin-login">
      <h2 style="font-family: var(--font-display); color:var(--emerald-deep);">Kirish</h2>
      <p style="color:var(--ink-soft); font-size:0.85rem; margin-bottom:16px;">Admin panelga kirish uchun parolni kiriting</p>
      <form method="POST" action="${ADMIN_PATH}/login">
        <div class="form-group"><input type="password" name="password" placeholder="Parol" /></div>
        <button type="submit" class="btn-submit">Kirish</button>
        ${error ? `<p style="color:var(--danger); font-size:0.85rem; margin-top:10px;">Parol noto'g'ri</p>` : ""}
      </form>
    </div>
  `);
}

async function renderAdminPanel(env) {
  const products = await getProducts(env);
  const orders = await getOrders(env);
  const config = await getConfig(env);

  const productRows = products.length === 0
    ? `<div class="empty-admin">Hozircha mahsulot qo'shilmagan</div>`
    : products.map((p) => `
      <div class="admin-product-row">
        <img src="${esc((p.images && p.images[0]) || '')}" alt="" />
        <div class="admin-product-info">
          <strong>${esc(p.name)}</strong>
          <span>${fmtPrice(p.price)} so'm &middot; ${p.status === 'soldout' ? 'Sotildi' : p.status === 'soon' ? 'Tez kunda' : 'Faol'}</span>
        </div>
        <button class="icon-btn" onclick="editProduct('${p.id}')">Tahrirlash</button>
        <button class="icon-btn danger" onclick="deleteProduct('${p.id}')">O'chirish</button>
      </div>
    `).join("");

  const orderRows = orders.length === 0
    ? `<div class="empty-admin">Hozircha buyurtma yo'q</div>`
    : orders.map((o) => `
      <div class="order-card">
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
          <strong>${esc(o.productName)}</strong>
          <span class="order-status ${o.status === 'bajarildi' ? 'bajarildi' : ''}">${esc(o.status)}</span>
        </div>
        ${o.color ? `<div style="font-size:0.85rem; color:var(--ink-soft);">Rang: ${esc(o.color)}</div>` : ""}
        ${o.size ? `<div style="font-size:0.85rem; color:var(--ink-soft);">O'lcham: ${esc(o.size)}</div>` : ""}
        <div style="font-size:0.85rem; color:var(--ink-soft);">Mijoz: ${esc(o.customerName)}</div>
        <div style="font-size:0.85rem; color:var(--ink-soft);">Telefon: ${esc(o.customerPhone)}</div>
        <div style="font-size:0.85rem; color:var(--ink-soft);">Manzil: ${esc(o.customerAddress)}</div>
        ${o.note ? `<div style="font-size:0.85rem; color:var(--ink-soft);">Izoh: ${esc(o.note)}</div>` : ""}
        <div style="font-size:0.75rem; color:var(--ink-soft); margin-top:6px;">${new Date(o.date).toLocaleString("uz-UZ")}</div>
        ${o.status !== 'bajarildi' ? `<button class="icon-btn" style="margin-top:8px;" onclick="markDone('${o.id}')">Bajarildi deb belgilash</button>` : ""}
      </div>
    `).join("");

  return pageShell("Admin panel", `
    <header class="site-header">
      <div class="header-inner">
        <div class="brand">Admin panel</div>
        <a href="/" style="color:var(--cream); opacity:0.8; font-size:0.85rem;">Saytga qaytish</a>
      </div>
    </header>
    <div class="admin-wrap">
      <div class="admin-tabs">
        <button class="admin-tab active" id="tabProducts" onclick="switchTab('products')">Mahsulotlar</button>
        <button class="admin-tab" id="tabOrders" onclick="switchTab('orders')">Buyurtmalar</button>
        <button class="admin-tab" id="tabSettings" onclick="switchTab('settings')">Sozlamalar</button>
      </div>

      <div id="productsPanel">
        <div class="admin-section">
          <h2 id="formTitle">Yangi mahsulot qo'shish</h2>
          <form id="productForm">
            <input type="hidden" id="editId" value="" />
            <div class="form-group"><label>Mahsulot nomi</label><input type="text" id="prodName" required /></div>
            <div class="form-group"><label>Narxi (so'm)</label><input type="number" id="prodPrice" required /></div>
            <div class="form-group"><label>Tavsif</label><textarea id="prodDesc" rows="2"></textarea></div>
            <div class="form-group">
              <label>Rasm manzillari (URL) - bir nechta qo'shish mumkin</label>
              <div id="imageList">
                <div class="imagelist-row"><input type="text" class="imgInput" placeholder="https://..." /></div>
              </div>
              <button type="button" class="icon-btn" onclick="addImageField()">+ Yana rasm qo'shish</button>
            </div>
            <div class="form-group"><label>Ranglar (vergul bilan ajrating, masalan: Qora, Oq, Ko'k)</label><input type="text" id="prodColors" placeholder="Qora, Oq, Ko'k" /></div>
            <div class="form-group"><label>O'lchamlar (vergul bilan ajrating, masalan: S, M, L, XL)</label><input type="text" id="prodSizes" placeholder="S, M, L, XL" /></div>
            <div class="form-group">
              <label>Holati</label>
              <select id="prodStatus">
                <option value="active">Faol (sotuvda)</option>
                <option value="soldout">Sotildi</option>
                <option value="soon">Tez kunda</option>
              </select>
            </div>
            <button type="submit" class="btn-submit" id="submitBtn">Mahsulot qo'shish</button>
            <button type="button" class="icon-btn" id="cancelEditBtn" style="display:none; margin-top:8px; width:100%;" onclick="cancelEdit()">Tahrirlashni bekor qilish</button>
          </form>
        </div>
        <div class="admin-section">
          <h2>Mavjud mahsulotlar</h2>
          <div id="productList">${productRows}</div>
        </div>
      </div>

      <div id="ordersPanel" style="display:none;">
        <div class="admin-section">
          <h2>Kelgan buyurtmalar</h2>
          <div id="orderList">${orderRows}</div>
        </div>
      </div>

      <div id="settingsPanel" style="display:none;">
        <div class="admin-section">
          <h2>Do'kon sozlamalari</h2>
          <form id="settingsForm">
            <div class="form-group"><label>Do'kon nomi</label><input type="text" id="settStoreName" value="${esc(config.storeName)}" /></div>
            <div class="form-group"><label>Karta raqami</label><input type="text" id="settCardNumber" value="${esc(config.cardNumber)}" /></div>
            <div class="form-group"><label>Karta egasining ismi</label><input type="text" id="settCardOwner" value="${esc(config.cardOwner)}" /></div>
            <div class="form-group"><label>Telegram bildirishnoma manzili (Worker URL)</label><input type="text" id="settTelegramUrl" value="${esc(config.telegramWorkerUrl)}" /></div>
            <button type="submit" class="btn-submit">Saqlash</button>
          </form>
        </div>
      </div>
    </div>

    <script>
      const PRODUCTS = ${JSON.stringify(products)};

      function switchTab(tab) {
        ['products','orders','settings'].forEach(t => {
          document.getElementById('tab' + t[0].toUpperCase() + t.slice(1)).classList.toggle('active', t === tab);
          document.getElementById(t + 'Panel').style.display = t === tab ? 'block' : 'none';
        });
      }

      function addImageField() {
        const list = document.getElementById('imageList');
        const row = document.createElement('div');
        row.className = 'imagelist-row';
        row.innerHTML = '<input type="text" class="imgInput" placeholder="https://..." /><button type="button" class="icon-btn danger" onclick="this.parentElement.remove()">X</button>';
        list.appendChild(row);
      }

      function getImageValues() {
        return Array.from(document.querySelectorAll('.imgInput')).map(i => i.value.trim()).filter(Boolean);
      }

      function setImageValues(images) {
        const list = document.getElementById('imageList');
        list.innerHTML = '';
        (images.length ? images : ['']).forEach(img => {
          const row = document.createElement('div');
          row.className = 'imagelist-row';
          row.innerHTML = '<input type="text" class="imgInput" placeholder="https://..." value="' + img.replace(/"/g,'&quot;') + '" /><button type="button" class="icon-btn danger" onclick="this.parentElement.remove()">X</button>';
          list.appendChild(row);
        });
      }

      document.getElementById('productForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const editId = document.getElementById('editId').value;
        const payload = {
          id: editId || undefined,
          name: document.getElementById('prodName').value.trim(),
          price: document.getElementById('prodPrice').value,
          description: document.getElementById('prodDesc').value.trim(),
          images: getImageValues(),
          colors: document.getElementById('prodColors').value.split(',').map(s => s.trim()).filter(Boolean),
          sizes: document.getElementById('prodSizes').value.split(',').map(s => s.trim()).filter(Boolean),
          status: document.getElementById('prodStatus').value,
        };
        const method = editId ? 'PUT' : 'POST';
        await fetch('/api/products', { method, headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
        window.location.reload();
      });

      function editProduct(id) {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return;
        document.getElementById('editId').value = p.id;
        document.getElementById('prodName').value = p.name;
        document.getElementById('prodPrice').value = p.price;
        document.getElementById('prodDesc').value = p.description || '';
        setImageValues(p.images || []);
        document.getElementById('prodColors').value = (p.colors || []).join(', ');
        document.getElementById('prodSizes').value = (p.sizes || []).join(', ');
        document.getElementById('prodStatus').value = p.status || 'active';
        document.getElementById('formTitle').textContent = 'Mahsulotni tahrirlash';
        document.getElementById('submitBtn').textContent = 'Saqlash';
        document.getElementById('cancelEditBtn').style.display = 'block';
        window.scrollTo(0,0);
      }

      function cancelEdit() {
        document.getElementById('productForm').reset();
        document.getElementById('editId').value = '';
        setImageValues([]);
        document.getElementById('formTitle').textContent = "Yangi mahsulot qo'shish";
        document.getElementById('submitBtn').textContent = 'Mahsulot qo\\'shish';
        document.getElementById('cancelEditBtn').style.display = 'none';
      }

      async function deleteProduct(id) {
        if (!confirm("Bu mahsulotni o'chirishni tasdiqlaysizmi?")) return;
        await fetch('/api/products?id=' + id, { method: 'DELETE' });
        window.location.reload();
      }

      async function markDone(id) {
        await fetch('/api/orders/' + id, { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify({status:'bajarildi'}) });
        window.location.reload();
      }

      document.getElementById('settingsForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const payload = {
          storeName: document.getElementById('settStoreName').value.trim(),
          cardNumber: document.getElementById('settCardNumber').value.trim(),
          cardOwner: document.getElementById('settCardOwner').value.trim(),
          telegramWorkerUrl: document.getElementById('settTelegramUrl').value.trim(),
        };
        await fetch('/api/config', { method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload) });
        alert('Sozlamalar saqlandi!');
      });
    </script>
  `);
}

// ============================================
// AUTentifikatsiya (cookie orqali)
// ============================================

function isAuthed(request) {
  const cookie = request.headers.get("Cookie") || "";
  return cookie.includes("admin_session=valid");
}

// ============================================
// TELEGRAM
// ============================================

async function notifyTelegram(env, order) {
  const config = await getConfig(env);
  if (!config.telegramWorkerUrl) return;
  const message = "Yangi buyurtma! Mahsulot: " + order.productName +
    (order.color ? " Rang: " + order.color : "") +
    (order.size ? " Olcham: " + order.size : "") +
    " Narx: " + order.price +
    " Ism: " + order.customerName +
    " Telefon: " + order.customerPhone +
    " Manzil: " + order.customerAddress +
    (order.note ? " Izoh: " + order.note : "");
  try {
    await fetch(config.telegramWorkerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
  } catch (e) {}
}

// ============================================
// ASOSIY HANDLER
// ============================================

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // --- API: mahsulotlar ---
    if (path === "/api/products" && request.method === "POST") {
      if (!isAuthed(request)) return new Response("Unauthorized", { status: 401 });
      const body = await request.json();
      const products = await getProducts(env);
      body.id = Date.now().toString();
      products.push(body);
      await saveProducts(env, products);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }
    if (path === "/api/products" && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized", { status: 401 });
      const body = await request.json();
      const products = await getProducts(env);
      const idx = products.findIndex((p) => p.id === body.id);
      if (idx !== -1) products[idx] = { ...products[idx], ...body };
      await saveProducts(env, products);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }
    if (path === "/api/products" && request.method === "DELETE") {
      if (!isAuthed(request)) return new Response("Unauthorized", { status: 401 });
      const id = url.searchParams.get("id");
      let products = await getProducts(env);
      products = products.filter((p) => p.id !== id);
      await saveProducts(env, products);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }

    // --- API: buyurtmalar ---
    if (path === "/api/orders" && request.method === "POST") {
      const body = await request.json();
      const orders = await getOrders(env);
      body.id = Date.now().toString();
      body.date = new Date().toISOString();
      body.status = "yangi";
      orders.unshift(body);
      await saveOrders(env, orders);
      await notifyTelegram(env, body);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }
    if (path.startsWith("/api/orders/") && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized", { status: 401 });
      const id = path.split("/").pop();
      const body = await request.json();
      const orders = await getOrders(env);
      const idx = orders.findIndex((o) => o.id === id);
      if (idx !== -1) orders[idx].status = body.status;
      await saveOrders(env, orders);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }

    // --- API: config ---
    if (path === "/api/config" && request.method === "PUT") {
      if (!isAuthed(request)) return new Response("Unauthorized", { status: 401 });
      const body = await request.json();
      await saveConfig(env, body);
      return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
    }

    // --- Admin login ---
    if (path === ADMIN_PATH + "/login" && request.method === "POST") {
      const formData = await request.formData();
      const password = formData.get("password");
      if (password === ADMIN_PASSWORD) {
        return new Response(null, {
          status: 302,
          headers: {
            "Location": ADMIN_PATH,
            "Set-Cookie": "admin_session=valid; Path=/; HttpOnly; Max-Age=86400",
          },
        });
      }
      return new Response(renderAdminLogin(true), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    // --- Admin panel ---
    if (path === ADMIN_PATH) {
      if (!isAuthed(request)) {
        return new Response(renderAdminLogin(false), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
      }
      return new Response(await renderAdminPanel(env), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    // --- Mahsulot sahifasi ---
    if (path.startsWith("/product/")) {
      const id = path.split("/product/")[1];
      return new Response(await renderProductDetail(env, id), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    // --- Bosh sahifa ---
    if (path === "/" || path === "") {
      return new Response(await renderHome(env), { headers: { "Content-Type": "text/html;charset=UTF-8" } });
    }

    return new Response("Sahifa topilmadi", { status: 404 });
  },
};
