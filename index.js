/* empty css                      */import{a as y,S as m,i as p}from"./assets/vendor-CZCqCKWq.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="43492556-fe80a4659b666c8db93afe52a",g="https://pixabay.com/api/";function h(o){return y.get(g,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error("Error fetching images:",r.message),[]))}const b=new m(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");document.querySelector(".loader");function v(o){return o.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:a,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${r}" alt="${l}" loading="lazy" />
        </a>
        <div class="thumb-block">
          <div class="block"><h2 class="tittle">Likes</h2><p class="amount">${e}</p></div>
          <div class="block"><h2 class="tittle">Views</h2><p class="amount">${t}</p></div>
          <div class="block"><h2 class="tittle">Comments</h2><p class="amount">${a}</p></div>
          <div class="block"><h2 class="tittle">Downloads</h2><p class="amount">${d}</p></div>
        </div>
      </li>`).join("")}function L(o){q(),u.innerHTML=v(o),b.refresh()}function q(){u.innerHTML=""}function i(o){p.error({title:"Error",message:o,position:"topRight"})}const c=document.querySelector(".form"),S=document.querySelector(".input-search"),P=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";c.addEventListener("submit",function(o){o.preventDefault();const r=S.value.trim();if(r===""){i("Please enter a search query!");return}P.innerHTML="",n.style.display="block",h(r).then(s=>{if(n.style.display="none",s.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}L(s)}).catch(s=>{n.style.display="none",i("Error fetching images. Please try again!"),console.error("Помилка сервера:",s.message)}),c.reset()});
//# sourceMappingURL=index.js.map
