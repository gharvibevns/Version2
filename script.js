const services = [
["Complete Home Interiors","A cohesive look and feel from room to room.","⌂"],["Modular Kitchen","A practical, beautiful kitchen planned around you.","▤"],["Living Room","Comfort-led spaces made for gathering and unwinding.","◫"],["Bedroom Design","A restful retreat with thoughtful materials and light.","☾"],["False Ceiling","Architectural detail with integrated lighting options.","⌁"],["TV Unit Design","Custom focal points with clean lines and clever storage.","▣"],["TV Wall Panels","Textures and finishes that elevate your entertainment wall.","▥"],["Entertainment Units","A considered home for screens, sound and accessories.","▤"],["Floating TV Consoles","Light-looking storage with a contemporary finish.","▱"],["Wardrobe Design","Storage designed around your everyday routine.","▦"],["Storage Solutions","Make every inch work harder, without visual clutter.","▧"],["Space Planning","A better flow for the way you really live.","⌗"],["Home Renovation","Refresh existing spaces with a clear, thoughtful plan.","↗"],["Lighting Design","Layered lighting for warmth, focus and atmosphere.","☼"],["Dining Area","A welcoming setting for daily meals and celebrations.","◯"],["Kids Room","Flexible, playful spaces that can grow with them.","✳"],["Office Interiors","Calm, functional spaces for focused work.","▥"],["Turnkey Solutions","A coordinated journey from design to installation.","✓"]
];
const products = [
["PVC Wall Panels","▥"],["WPC Panels","▤"],["Charcoal Panels","▥"],["Decorative Wall Panels","▦"],["Wooden Louvers","▥"],["Designer Wallpapers","▧"],["Fancy Lights","✧"],["Chandeliers","✣"],["Pendant Lights","◉"],["Ceiling Lights","☼"],["Decorative Lighting","✧"],["Modular Furniture","▤"],["TV Consoles","▱"],["Coffee Tables","◯"],["Sofa Sets","⌂"],["Dining Tables","▤"],["Storage Units","▦"],["Wardrobe Accessories","▧"],["Kitchen Accessories","⌑"],["Home Decor","✳"]
];
const processSteps = [
["Discover","We listen to your needs, routines, ideas and budget."],["Site Visit","We understand dimensions, light and existing conditions."],["Space Planning","We map the layout and make every inch count."],["Design Direction","We align on the mood, palette and overall concept."],["Material Selection","We shortlist finishes, textures, fittings and products."],["Design Approval","We review the plan and agreed scope together."],["Coordination","We plan the work, timelines and installation details."],["Installation","The selected elements come together on site."],["Final Walkthrough","We review the details and hand over the space."]
];
const serviceGrid = document.getElementById("serviceGrid");
services.forEach((s,i)=>{const el=document.createElement("article");el.className="service-card reveal";el.innerHTML=`<div class="card-top"><span class="card-number">0${i+1}</span><span class="card-icon" aria-hidden="true">${s[2]}</span></div><h3>${s[0]}</h3><p>${s[1]}</p>`;serviceGrid.appendChild(el)});
const productGrid = document.getElementById("productGrid");
products.forEach(p=>{const el=document.createElement("div");el.className="product-item reveal";el.innerHTML=`<span class="product-symbol" aria-hidden="true">${p[1]}</span><span>${p[0]}</span>`;productGrid.appendChild(el)});
const processGrid = document.getElementById("processGrid");
processSteps.forEach((s,i)=>{const el=document.createElement("article");el.className="process-step reveal";el.innerHTML=`<span class="step-no">STEP 0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p>`;processGrid.appendChild(el)});
const gallery = [
{label:"Living Rooms",cat:"living",img:"https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=900&q=80"},
{label:"Modular Kitchens",cat:"kitchen",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80"},
{label:"TV Units",cat:"tv",img:"https://images.unsplash.com/photo-1746439324747-bdda31a83533?auto=format&fit=crop&w=900&q=80"},
{label:"Bedrooms",cat:"bedroom",img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80"},
{label:"Wall Panels",cat:"panels",img:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"},
{label:"Lighting",cat:"lighting",img:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"},
{label:"Wardrobes",cat:"bedroom",img:"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80"},
{label:"Furniture",cat:"living",img:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80"},
{label:"Complete Homes",cat:"home",img:"https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=900&q=80"},
{label:"False Ceilings",cat:"lighting",img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"},
{label:"Decorative Panels",cat:"panels",img:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"},
{label:"Dining Spaces",cat:"home",img:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"}
];
const filters=[["all","All spaces"],["living","Living rooms"],["bedroom","Bedrooms"],["kitchen","Kitchens"],["tv","TV units"],["panels","Wall panels"],["lighting","Lighting"],["home","Complete homes"]];
const filterRoot=document.getElementById("galleryFilters"),galleryRoot=document.getElementById("galleryGrid");
filters.forEach((f,i)=>{const b=document.createElement("button");b.type="button";b.className="filter-button"+(i===0?" active":"");b.textContent=f[1];b.dataset.filter=f[0];b.setAttribute("data-testid","gallery-filter-"+f[0]);b.addEventListener("click",()=>{filterRoot.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));galleryRoot.querySelectorAll(".gallery-card").forEach(card=>card.hidden=f[0]!=="all"&&card.dataset.cat!==f[0])});filterRoot.appendChild(b)});
gallery.forEach((g,i)=>{const el=document.createElement("article");el.className="gallery-card reveal";el.dataset.cat=g.cat;el.innerHTML=`<img src="${g.img}" alt="${g.label} interior design inspiration" loading="lazy"><span class="gallery-label">${g.label}</span>`;galleryRoot.appendChild(el)});
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});
function observeReveals(){document.querySelectorAll(".reveal:not(.visible)").forEach(el=>observer.observe(el))}
observeReveals();document.getElementById("year").textContent=new Date().getFullYear();

// IMPORTANT: replace this placeholder with the business's real WhatsApp number in international format,
// digits only (India example: 91 followed by the 10-digit mobile number).
const WHATSAPP_NUMBER="919876543210";
const waLink=number=>`https://wa.me/${number}`;
document.getElementById("whatsappFloat").href=waLink(WHATSAPP_NUMBER);
document.getElementById("contactForm").addEventListener("submit",e=>{
  e.preventDefault();
  const form=e.currentTarget, data=new FormData(form);
  const name=(data.get("name")||"").toString().trim(), phone=(data.get("phone")||"").toString().trim();
  if(!name||!phone){document.getElementById("formStatus").textContent="Please add your name and phone number.";return}
  const message=[
    "Hello GharVibe Interio, I'd like to enquire about an interior design project.",
    `Name: ${name}`,`Phone: ${phone}`,`Email: ${(data.get("email")||"Not provided").toString()}`,
    `Requirement: ${(data.get("requirement")||"Not specified").toString()}`,
    `Details: ${(data.get("message")||"Not provided").toString()}`
  ].join("\n");
  document.getElementById("formStatus").textContent="Opening WhatsApp with your enquiry…";
  window.open(`${waLink(WHATSAPP_NUMBER)}?text=${encodeURIComponent(message)}`,"_blank","noopener");
});
