(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u=(n,r,t,o)=>{const e={titre:n,auteur:r,resume:t,estLu:o,id:crypto.randomUUID(),createdAt:new Date().toDateString()};JSON.stringify(e);const s=localStorage.getItem("livres"),i=s?JSON.parse(s):[];i.push(e),localStorage.setItem("livres",JSON.stringify(i))},m=()=>{const n=localStorage.getItem("livres");return n?JSON.parse(n):[]},f=n=>{const r=localStorage.getItem("livres"),o=(r?JSON.parse(r):[]).filter(e=>e.id!==n);localStorage.setItem("livres",JSON.stringify(o))},g=(n,r)=>{const t=localStorage.getItem("livres"),e=(t?JSON.parse(t):[]).find(s=>s.id!==n);r===!0?e.estLu=!1:r===!1&&(e.estLu=!0),localStorage.setItem("livres",JSON.stringify(e))},a=()=>{const n=document.querySelector("#booksList"),r=m();console.log(r),n.innerHTML=r.map(t=>{const o=new Date(t.createdAt).toLocaleDateString("fr-FR");return`
<div class="col-md-6 col-lg-4" id="book-${t.id}">
     <div class="card h-100">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-2">
                <h5 class="card-title mb-0">${t.titre}</h5>
                <span class="badge ${t.estLu?"bg-success":"bg-secondary"} toggle-read-btn"  data-id="${t.id}" data-bool="${t.estLu}"
                        style="cursor: pointer;" >
                    ${t.estLu?'<i class="bi bi-check-circle me-1"></i>Lu':'<i class="bi bi-circle me-1"></i>Non lu'}
                </span>
                </div>
                <h6 class="card-subtitle mb-2">
                <i class="bi bi-person me-1"></i>${t.auteur}
                </h6>
                <p class="card-text small">${t.resume}</p>
                <div class="d-flex justify-content-between align-items-center mt-3">
                <small class="text-muted">
                    <i class="bi bi-calendar3 me-1"></i>${o}
                </small>
                <button class="btn btn-outline-danger btn-sm delete-btn" data-id="${t.id}" >
                    <i class="bi bi-trash me-1"></i>Supprimer
                </button>
            </div>
        </div>
    </div>
</div>`}).join(" ")};console.log("JS - Gestionnaires - Mes Livres JS");const b=()=>{const n=document.querySelector("#toggleFormBtn"),r=document.querySelector("#formSection"),t=new bootstrap.Collapse(r,{toggle:!1}),o=document.querySelector("#bookForm");n.addEventListener("click",()=>{t.toggle()}),r.addEventListener("hidden.bs.collapse",()=>{o.reset()}),o.addEventListener("submit",s=>{s.preventDefault();const i=o.elements.title.value,l=o.elements.author.value,c=o.elements.summary.value,d=o.elements.isRead.checked;u(i,l,c,d),t.hide(),a()}),document.querySelector("#booksList").addEventListener("click",s=>{const i=s.target.closest(".delete-btn, .toggle-read-btn");if(i==null)return;const l=i.dataset.id,c=i.dataset.bool;i.classList.contains("delete-btn")?(f(l),a()):i.classList.contains("toggle-read-btn")&&g(l,c)})};b();a();
