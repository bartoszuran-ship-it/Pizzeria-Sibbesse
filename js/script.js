
(function(){
  // ---- menu data ----
  var CAT = {
    pizza: [
      ["01","Margherita","",[["6,50 €","24cm"],["7,50 €","28cm"]],["G"]],
      ["02","Margherita Spezial","mit frischen Tomaten und Mozzarella",[["7,00 €","24cm"],["8,50 €","28cm"]],["G"]],
      ["03","Pizzabrötchen","4 Stück",[["7,00 €","24cm"],["8,50 €","28cm"]],[]],
      ["04","Pizzabrot","mit Knoblauch",[["6,00 €",""]],[]],
      ["05","Funghi","mit Champignons",[["6,00 €","24cm"],["7,50 €","28cm"]],["G"]],
      ["06","Schinken","",[["7,00 €","24cm"],["8,50 €","28cm"]],["1","2"]],
      ["07","Salami","",[["7,50 €","24cm"],["9,50 €","28cm"]],["1","2","3"]],
      ["08","Bomba","mit Salami und Peperoni (mild oder scharf)",[["7,50 €","24cm"],["9,00 €","28cm"]],["1","2","3"]],
      ["09","Quattro Formaggi","mit Gorgonzola, Mozzarella, Weichkäse und Gouda",[["8,50 €","24cm"],["10,00 €","28cm"]],["G"]],
      ["10","Roma","mit Salami und Schinken",[["8,50 €","24cm"],["10,00 €","28cm"]],["1","2","3"]],
      ["11","Salami Funghi","mit Salami und Champignons",[["8,00 €","24cm"],["9,50 €","28cm"]],["G","1","2","3"]],
      ["12","Tonno","mit Thunfisch und Zwiebeln",[["8,50 €","24cm"],["10,00 €","28cm"]],["D"]],
      ["13","Kalbdöner","wahlweise Zaziki, Chili- oder Kräutersauce",[["8,50 €","24cm"],["10,50 €","28cm"]],["A","C","G","2","3","10","11","12"]],
      ["14","Hähnchendöner","wahlweise Zaziki, Chili- oder Kräutersauce",[["8,50 €","24cm"],["10,00 €","28cm"]],["A","C","G","2","3","10","11","12"]],
      ["15","Calzone","mit Salami, Schinken, Döner (Hähnchen/Kalb)",[["9,50 €","24cm"],["11,00 €","28cm"]],["A","C","G","2","3","10","11","12"]],
      ["16","Döner Calzone","mit Weichkäse, frischen Champignons, Döner (Hähnchen/Kalb)",[["9,00 €","24cm"],["10,50 €","28cm"]],["A","C","G","2","3","10","11","12"]],
      ["17","Ätna","mit Salami, Schinken, frischen Champignons",[["8,50 €","24cm"],["10,00 €","28cm"]],["1","2","3"]],
      ["18","Sibbesse","mit Salami, Schinken, frischen Champignons, frischen Paprika, Peperoni",[["9,00 €","24cm"],["10,50 €","28cm"]],["1","2","3"],true],
      ["19","Petze","mit Salami, Schinken, frischen Champignons, frischen Paprika, Zwiebeln",[["8,50 €","24cm"],["10,00 €","28cm"]],["1","2","3"]],
      ["20","Hawaii","mit Schinken, Ananas",[["8,00 €","24cm"],["9,50 €","28cm"]],["1","2","10"]],
      ["21","Milano","mit Schinken, frischen Champignons",[["8,00 €","24cm"],["9,50 €","28cm"]],["1","2"]],
      ["22","Spaghetti","mit Hollandaise oder Bolognese-Sauce",[["9,00 €","24cm"],["10,50 €","28cm"]],["C","G","10"]],
      ["23","Eberholzen","mit Salami, Schinken, Thunfisch, Mais, Zwiebeln, frischen Paprika",[["10,00 €","24cm"],["11,50 €","28cm"]],["D","1","2","3"]],
      ["24","Vier Jahreszeiten","mit Döner, Schinken, Thunfisch, Champignons",[["9,50 €","24cm"],["11,50 €","28cm"]],["A","C","D","G","2","3","10","11","12"]],
      ["25","Vegetaria","mit Weichkäse, Champignons, Mais, Zwiebeln, Peperoni, frischen Paprika",[["9,00 €","24cm"],["10,50 €","28cm"]],["G"]],
      ["26","Sucuk","mit Knoblauchwurst, Ei, Champignons, Weichkäse",[["9,00 €","24cm"],["10,50 €","28cm"]],["1","2","3"]],
      ["27","Almstedt","mit frischen Tomaten, Champignons, Rucola, Weichkäse",[["9,00 €","24cm"],["10,50 €","28cm"]],["G"]],
      ["28","Gorgonzola","mit Salami, Schinken, Brokkoli, Spinat, Gorgonzola",[["10,00 €","24cm"],["11,50 €","28cm"]],["1","2","3"]],
      ["29","Adenstedt","mit Schinken, Weichkäse, frischen Tomaten, Oliven, Peperoni (mild)",[["9,00 €","24cm"],["10,50 €","28cm"]],["G","3"]],
      ["30","Mozzarella","mit Schinken, frischen Tomaten, Mozarella, Rucola",[["9,00 €","24cm"],["10,50 €","28cm"]],["G"]],
      ["31","Inferno","mit Salami, Schinken, frischen Paprika, Peperoni (scharf), Weichkäse",[["9,00 €","24cm"],["10,50 €","28cm"]],["G","1","2","3","6"]],
      ["32","Diavolo","mit Salami, Jalapenos, Weichkäse",[["8,50 €","24cm"],["10,00 €","28cm"]],["G","1","2","3"]],
      ["33","Frutti di Mare","mit Meeresfrüchten und Knoblauch",[["9,00 €","24cm"],["11,00 €","28cm"]],[]],
      ["34","Sardellen","mit Salami und Sardellen",[["9,50 €","24cm"],["11,50 €","28cm"]],[]],
      ["35","Popeye","mit Spinat und Weichkäse",[["9,00 €","24cm"],["10,50 €","28cm"]],["G","6"]],
      ["36","Westfeld","mit Salami, Schinken, Thunfisch",[["9,00 €","24cm"],["10,50 €","28cm"]],["G","D","1","2","3"]],
      ["37","Wrisbergholzen","mit Salami, Thunfisch, Paprika, Zwiebeln",[["9,50 €","24cm"],["11,50 €","28cm"]],["D","1","2","3"]],
      ["38","Grande","Familienpizza 40 cm mit Tomatensauce und Käse — jeder weitere Belag +3,00 €",[["16,00 €","40cm"]],["G"]]
    ],
    doener: [
      ["39","Dönerteller","Kalb- oder Hähnchenfleisch, gem. Salat, Pommes oder Kroketten",[["12,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["40","Dönerauflauf","Kalb- oder Hähnchenfleisch, überbacken mit Käse, Pilze, Hollandaise, Sahnesauce, gem. Salat, Pommes",[["13,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["41","Dürüm","Kalb- oder Hähnchenfleisch, gem. Salat, Sauce nach Wahl",[["8,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["42","Dürüm Chef","Kalb- oder Hähnchenfleisch, Pommes, überbacken mit Käse, Sauce",[["9,00 €",""]],["A","C","G","2","3","10","11","12"],true],
      ["43","Dönertasche","Kalb- oder Hähnchenfleisch, gem. Salat, Kraut, Sauce",[["7,50 €",""]],["A","C","G","2","3","10","11","12"]],
      ["44","Dönertasche mit Weichkäse","Kalb- oder Hähnchenfleisch, Weichkäse, gem. Salat, Sauce",[["8,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["45","Dönerbox","Kalb- oder Hähnchenfleisch, Pommes, Sauce",[["7,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["46","Döner vegetarisch","Weichkäse, Salat, Sauce",[["6,00 €",""]],["A","G"]],
      ["47","Dürüm vegetarisch","Weichkäse, Salat, Sauce",[["7,00 €",""]],["A","G"]]
    ],
    salat: [
      ["48","Gemischter Salat","Eisbergsalat, Kraut, Tomaten, Gurken, Mais, Peperoni, Weichkäse, Dressing",[["9,00 €",""]],["G","H"]],
      ["49","Käse-Schinken-Salat","Eisbergsalat, Tomaten, Gurken, Schinken, Käse, Mais, Dressing",[["9,00 €",""]],["G","H","1","2"]],
      ["50","Thunfisch Salat","Eisbergsalat, Thunfisch, Tomaten, Gurken, Mais, Zwiebeln, Dressing",[["9,00 €",""]],["D","H"]],
      ["51","Hähnchenbrust Salat","Eisbergsalat, Tomaten, Gurken, Hähnchenbrust, Mais, Käse, Dressing",[["9,00 €",""]],["G","H"]],
      ["52","Chef Salat","Gemischter Salat, Weichkäse, Oliven, Peperoni, Hähnchenbrust, Dressing",[["9,00 €",""]],["G","H"]],
      ["53","Sibbesse Salat","Eisbergsalat, Tomaten, Gurken, Hähnchenbrust, Mais, Schinken, Käse, Oliven, Dressing, gekochtes Ei",[["10,50 €",""]],["G","C","H","1","2"],true]
    ],
    schnitzel: [
      ["54","Hähnchen Schnitzel Wiener Art","dazu gemischter Salat, Pommes oder Kroketten",[["9,50 €",""]],["A","C","G","2","6"]],
      ["55","Hähnchen Schnitzel Hollandaise","dazu gemischter Salat, Pommes oder Kroketten",[["12,00 €",""]],["A","C","G","2","3","6"]],
      ["56","Jäger Schnitzel","mit Jägersauce, dazu gemischter Salat, Pommes oder Kroketten",[["12,00 €",""]],["A","C","G","1","2","6"]],
      ["57","Zigeuner Schnitzel","mit Zigeunersauce, dazu gemischter Salat, Pommes oder Kroketten",[["12,00 €",""]],["A","C","G","1","2","6"]]
    ],
    nudeln: [
      ["58","Spaghetti Bolognese","in Rindfleischsauce",[["8,50 €",""]],["A","G"]],
      ["59","Spaghetti Formaggi","in Sahnesauce mit vier Käsesorten",[["9,50 €",""]],["A","G"]],
      ["60","Spaghetti mit Döner","in Sahnesauce mit Dönerfleisch (Hähnchen oder Kalb)",[["9,50 €",""]],["A","C","G","2","3","10","11","12"]],
      ["61","Makkaroni Bolognese","in Rindfleischsauce",[["8,50 €",""]],["A","G"]],
      ["62","Makkaroni Formaggi","in Sahnesauce mit vier Käsesorten",[["9,50 €",""]],["A","G"]],
      ["63","Makkaroni Chef","in Hollandaise-Sauce mit Brokkoli, Spinat, Champignons und Dönerfleisch",[["10,00 €",""]],["A","C","G","2","3","10","11","12"],true]
    ],
    beilagen: [
      ["64","Pommes","",[["3,00 €","Klein"],["4,00 €","Groß"]],[]],
      ["65","Kroketten","8 Stück",[["4,00 €",""]],["A"]],
      ["66","Kroketten","12 Stück",[["5,50 €",""]],["A"]],
      ["67","Pomm Auflauf","mit Pommes, Döner, Hollandaise, überbacken mit Käse",[["12,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["68","Currywurst Pommes","",[["9,00 €",""]],["A","1","2","3","5"]],
      ["69","Hähnchen Nuggets","6 Stück",[["5,00 €",""]],["A","C","G","1","2","3","5","6"]],
      ["70","Hähnchen Nuggets","10 Stück",[["7,00 €",""]],["A","C","G","1","2","3","5","6"]],
      ["71","Hamburger Big","mit kleiner Portion Pommes",[["5,00 €",""]],["A","G"]],
      ["72","Cheeseburger Big","",[["6,00 €",""]],["A","G"]],
      ["73","Sibbesse Burger","mit Bacon, Jalapenos, Käse, Sauce",[["9,00 €","Single"],["15,00 €","Double"]],["A","G"],true],
      ["74","Falafel Dürüm","mit Salat und Sauce",[["8,00 €",""]],["A"]],
      ["75","Falafel im Fladenbrot","",[["6,50 €",""]],["A"]],
      ["76","Zigarren Börek","4 Stück, frittierte Teigröllchen gefüllt mit Weichkäse",[["6,00 €",""]],["A","G"]],
      ["77","Kindertüte","5 Nuggets, Pommes, Capri-Sun, Überraschung",[["9,00 €",""]],["A","C","G","1","2","3","5","6"]],
      ["78","Portion Pepperoni","",[["4,00 €",""]],[]],
      ["79","Portion Käse","",[["3,00 €",""]],["G"]],
      ["80","Portion Sauce","",[["2,50 €",""]],["M"]]
    ],
    pide: [
      ["81","Pide mit Döner","Hähnchen- oder Kalbfleisch, Ei, überbacken mit Käse",[["11,00 €",""]],["A","C","G","2","3","10","11","12"]],
      ["82","Pide mit Sucuk","Ei, überbacken mit Käse",[["12,00 €",""]],["A","C","G","1","2","3"]],
      ["83","Pide mit Thunfisch und Ei","Hähnchen oder Kalb, Ei, überbacken mit Käse",[["12,00 €",""]],["A","C","D","G"]]
    ],
    getraenke: [
      ["","Cola, Fanta, Sprite Mezzo Mix","0,33 l",[["2,50 €",""]],[]],
      ["","Cola, Fanta, Sprite Mezzo Mix","1,0 l",[["4,00 €",""]],[]],
      ["","Uludağ, Fanta Exotic, Eistee","0,33 l",[["2,50 €",""]],[]],
      ["","Ayran","0,25 l",[["2,00 €",""]],["G"]],
      ["","Wasser","0,5 l",[["2,00 €",""]],[]]
    ]
  };

  function esc(s){
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
  }

  Object.keys(CAT).forEach(function(key){
    var grid = document.getElementById("grid-"+key);
    if(!grid) return;
    var html = "";
    CAT[key].forEach(function(item, idx){
      var num = item[0], name = item[1], desc = item[2], prices = item[3], tags = item[4], featured = item[5];
      var favId = num ? num : (key+'-'+idx);
      html += '<article class="dish'+(featured?' featured':'')+'" id="dish-'+esc(favId)+'">';
      html += '<button class="dish-fav" type="button" data-id="'+esc(favId)+'" aria-label="'+esc(name)+' merken" aria-pressed="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg></button>';
      html += '<div class="dish-top">';
      html += '<div class="dish-name">'+(num?'<span class="num">'+esc(num)+'</span>':'')+' '+esc(name)+'</div>';
      html += '<span class="dish-leader" aria-hidden="true"></span>';
      html += '<div class="dish-price">';
      prices.forEach(function(p){
        html += '<span>'+esc(p[0])+(p[1]?' <span class="size">'+esc(p[1])+'</span>':'')+'</span>';
      });
      html += '</div></div>';
      if(desc) html += '<p class="dish-desc">'+esc(desc)+'</p>';
      if(tags && tags.length){
        html += '<div class="dish-tags">';
        tags.forEach(function(t){ html += '<span class="tag">'+esc(t)+'</span>'; });
        html += '</div>';
      }
      html += '</article>';
    });
    grid.innerHTML = html;
  });

  // ---- favorites (localStorage) ----
  var FAV_KEY = 'sibbesseFavorites';
  function getFavs(){
    try{ return new Set(JSON.parse(localStorage.getItem(FAV_KEY) || '[]')); }
    catch(e){ return new Set(); }
  }
  function saveFavs(favs){
    try{ localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(favs))); }
    catch(e){}
  }
  var favs = getFavs();
  function updateFavCounter(){
    var countEl = document.getElementById('favCounter');
    var badge = document.querySelector('.fav-counter-badge');
    if(countEl && badge){
      countEl.textContent = favs.size;
      badge.classList.toggle('has-favs', favs.size > 0);
    }
    var stickyCount = document.getElementById('stickyFavCount');
    var stickyBtn = document.getElementById('stickyFavBtn');
    if(stickyCount && stickyBtn){
      stickyCount.textContent = favs.size;
      stickyBtn.classList.toggle('has-favs', favs.size > 0);
    }
  }
  var favToast = document.getElementById('favToast');
  var favToastTimer = null;
  function showFavToast(){
    if(!favToast) return;
    favToast.classList.add('is-visible');
    clearTimeout(favToastTimer);
    favToastTimer = setTimeout(function(){
      favToast.classList.remove('is-visible');
    }, 3200);
  }
  // Herz und Karte gemeinsam umschalten, damit gemerkte Gerichte dauerhaft
  // umrandet bleiben — auch die aus einem frueheren Besuch
  function markDishFav(btn, on){
    if(!btn) return;
    btn.classList.toggle('is-fav', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    var dish = btn.closest('.dish');
    if(dish) dish.classList.toggle('is-fav', on);
  }
  document.querySelectorAll('.dish-fav').forEach(function(btn){
    var id = btn.getAttribute('data-id');
    if(favs.has(id)) markDishFav(btn, true);
    btn.addEventListener('click', function(){
      if(favs.has(id)){
        favs.delete(id);
        markDishFav(btn, false);
      } else {
        favs.add(id);
        markDishFav(btn, true);
        showFavToast();
      }
      saveFavs(favs);
      updateFavCounter();
      updateFavTray();
    });
  });
  updateFavCounter();

  // ---- favorites tray (view & order saved dishes) ----
  function dishFieldText(dishEl, selector){
    var el = dishEl.querySelector(selector);
    return el ? el.textContent.replace(/\s+/g, ' ').trim() : '';
  }
  function dishPriceText(dishEl){
    var spans = dishEl.querySelectorAll('.dish-price > span');
    var parts = [];
    spans.forEach(function(s){ parts.push(s.textContent.replace(/\s+/g, ' ').trim()); });
    return parts.join(' · ');
  }
  function updateFavTray(){
    var list = document.getElementById('favTrayList');
    var tray = document.getElementById('favTray');
    if(!list || !tray) return;
    var html = '';
    favs.forEach(function(id){
      var favBtn = document.querySelector('.dish-fav[data-id="' + id + '"]');
      var dishEl = favBtn ? favBtn.closest('.dish') : null;
      if(!dishEl) return;
      var name = dishFieldText(dishEl, '.dish-name');
      var price = dishPriceText(dishEl);
      html += '<div class="fav-tray-item">' +
                '<div class="fav-tray-item-info">' +
                  '<span class="fav-tray-item-name">' + esc(name) + '</span>' +
                  '<span class="fav-tray-item-price">' + esc(price) + '</span>' +
                '</div>' +
                '<button class="fav-tray-item-remove" type="button" data-id="' + esc(id) + '" aria-label="' + esc(name) + ' entfernen">' +
                  '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
                '</button>' +
              '</div>';
    });
    list.innerHTML = html;
    tray.classList.toggle('is-empty', favs.size === 0);
    list.querySelectorAll('.fav-tray-item-remove').forEach(function(removeBtn){
      removeBtn.addEventListener('click', function(){
        var id = removeBtn.getAttribute('data-id');
        favs.delete(id);
        saveFavs(favs);
        markDishFav(document.querySelector('.dish-fav[data-id="' + id + '"]'), false);
        updateFavCounter();
        updateFavTray();
      });
    });
  }
  var favTray = document.getElementById('favTray');
  var favTrayScrim = document.getElementById('favTrayScrim');
  var favTrayToggle = document.getElementById('favTrayToggle');
  var favTrayClose = document.getElementById('favTrayClose');
  var stickyFavBtn = document.getElementById('stickyFavBtn');
  if(favTray && favTrayScrim && favTrayToggle && favTrayClose){
    function openFavTray(){
      updateFavTray();
      favTray.classList.add('is-open');
      favTrayScrim.classList.add('is-open');
      favTrayToggle.setAttribute('aria-expanded', 'true');
      if(stickyFavBtn) stickyFavBtn.setAttribute('aria-expanded', 'true');
      favTray.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeFavTray(){
      favTray.classList.remove('is-open');
      favTrayScrim.classList.remove('is-open');
      favTrayToggle.setAttribute('aria-expanded', 'false');
      if(stickyFavBtn) stickyFavBtn.setAttribute('aria-expanded', 'false');
      favTray.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
    favTrayToggle.addEventListener('click', function(){
      if(favTray.classList.contains('is-open')) closeFavTray(); else openFavTray();
    });
    if(stickyFavBtn){
      stickyFavBtn.addEventListener('click', function(){
        if(favTray.classList.contains('is-open')) closeFavTray(); else openFavTray();
      });
    }
    favTrayClose.addEventListener('click', closeFavTray);
    favTrayScrim.addEventListener('click', closeFavTray);
    var favToastView = document.getElementById('favToastView');
    if(favToastView){
      favToastView.addEventListener('click', function(){
        if(favToast){
          favToast.classList.remove('is-visible');
          clearTimeout(favToastTimer);
        }
        openFavTray();
      });
    }
  }

  // ---- ember particle canvas (hero) ----
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function emberField(canvasId, density, heightBias){
    var c = document.getElementById(canvasId);
    if(!c) return;
    var ctx = c.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio||1, 2);
    var w,h,parts=[];
    function resize(){
      w = c.clientWidth; h = c.clientHeight;
      c.width = w*dpr; c.height = h*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }
    function spawn(){
      return {
        x: Math.random()*w,
        y: h + Math.random()*40,
        r: 1 + Math.random()*2.4,
        vy: 0.25 + Math.random()*0.55,
        vx: (Math.random()-0.5)*0.3,
        a: 0.3 + Math.random()*0.5,
        hue: Math.random() > 0.35 ? '232,85,31' : '215,162,62',
        life: 0,
        max: 200 + Math.random()*260
      };
    }
    resize();
    var n = Math.max(14, Math.floor((w*h)/ (density||26000)));
    for(var i=0;i<n;i++){ var p=spawn(); p.y = Math.random()*h; parts.push(p); }
    window.addEventListener('resize', resize);
    if(reduce){
      // draw a single static-ish frame
      ctx.clearRect(0,0,w,h);
      parts.forEach(function(p){
        ctx.beginPath();
        ctx.fillStyle = 'rgba('+p.hue+','+p.a+')';
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      });
      return;
    }
    function tick(){
      ctx.clearRect(0,0,w,h);
      for(var i=0;i<parts.length;i++){
        var p = parts[i];
        p.y -= p.vy; p.x += p.vx + Math.sin(p.life*0.02)*0.15; p.life++;
        var fade = 1 - (p.life/p.max);
        if(fade < 0 || p.y < -10){ parts[i] = spawn(); continue; }
        ctx.beginPath();
        ctx.fillStyle = 'rgba('+p.hue+','+(p.a*Math.max(fade,0))+')';
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  emberField('embers', 22000);

  // ---- scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealEls.length){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in-view'); });
  }

  // ---- opening-hours status badge (Mo-So 12:00-22:00) ----
  var OPEN_HOUR = 12, CLOSE_HOUR = 22;
  function updateStatus(){
    var badge = document.getElementById('statusBadge');
    if(!badge) return;
    var now = new Date();
    var hour = now.getHours() + now.getMinutes()/60;
    var isOpen = hour >= OPEN_HOUR && hour < CLOSE_HOUR;
    var textEl = badge.querySelector('.status-text');
    var extraEl = badge.querySelector('.status-extra');
    badge.classList.toggle('is-closed', !isOpen);
    if(isOpen){
      textEl.textContent = 'Geöffnet';
      extraEl.textContent = ' · bis ' + CLOSE_HOUR + ':00 Uhr';
    } else {
      textEl.textContent = 'Geschlossen';
      extraEl.textContent = ' · ab ' + OPEN_HOUR + ':00 Uhr';
    }
  }
  updateStatus();
  setInterval(updateStatus, 60000);

  // ---- header height (used to position mobile nav panel and category nav) ----
  var topbarEl = document.querySelector('.topbar');
  var catnavWrapEl = document.querySelector('.catnav-wrap');
  function updateHeaderHeight(){
    if(topbarEl){
      // rect height, not offsetHeight: the rounded-up integer left a sub-pixel
      // gap under the header that the page flickered through while scrolling
      document.documentElement.style.setProperty('--header-h', topbarEl.getBoundingClientRect().height + 'px');
    }
    if(catnavWrapEl){
      document.documentElement.style.setProperty('--catnav-h', catnavWrapEl.offsetHeight + 'px');
    }
  }
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);

  // ---- solidify header background on scroll (logo stays a fixed size) ----
  if(topbarEl){
    var scrollTicking = false;
    function applyScrollState(){
      topbarEl.classList.toggle('is-scrolled', window.scrollY > 40);
      scrollTicking = false;
    }
    window.addEventListener('scroll', function(){
      if(!scrollTicking){
        requestAnimationFrame(applyScrollState);
        scrollTicking = true;
      }
    }, {passive:true});
    applyScrollState();
  }

  // ---- mobile hamburger menu ----
  var menuToggle = document.getElementById('menuToggle');
  var navlinks = document.getElementById('navlinks');
  var navScrim = document.getElementById('navScrim');
  if(menuToggle && navlinks && navScrim){
    function closeMenu(){
      menuToggle.setAttribute('aria-expanded','false');
      navlinks.classList.remove('is-open');
      navScrim.classList.remove('is-open');
      document.body.style.overflow = '';
    }
    function openMenu(){
      menuToggle.setAttribute('aria-expanded','true');
      navlinks.classList.add('is-open');
      navScrim.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    menuToggle.addEventListener('click', function(){
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      isOpen ? closeMenu() : openMenu();
    });
    navScrim.addEventListener('click', closeMenu);
    navlinks.addEventListener('click', function(e){
      if(e.target.tagName === 'A') closeMenu();
    });
    window.addEventListener('resize', function(){
      if(window.innerWidth > 1180) closeMenu();
    });
  }

  // ---- hero headline word rotator ----
  var rotator = document.getElementById('heroRotator');
  if(rotator && !reduce){
    var rotatorWords = ['Holzofen-Pizza', 'Frischer Döner', 'Knusprige Pide'];
    var rotatorIdx = 0;
    setInterval(function(){
      rotatorIdx = (rotatorIdx + 1) % rotatorWords.length;
      rotator.style.opacity = '0';
      rotator.style.transform = 'translateY(10px)';
      setTimeout(function(){
        rotator.textContent = rotatorWords[rotatorIdx];
        rotator.style.transform = 'translateY(-10px)';
        requestAnimationFrame(function(){
          requestAnimationFrame(function(){
            rotator.style.opacity = '1';
            rotator.style.transform = 'translateY(0)';
          });
        });
      }, 350);
    }, 2800);
  }

  // ---- count-up stats ----
  var countEls = document.querySelectorAll('.count');
  if(countEls.length){
    function animateCount(el){
      var target = parseFloat(el.getAttribute('data-target')) || 0;
      var suffix = el.getAttribute('data-suffix') || '';
      if(reduce){
        el.textContent = target + suffix;
        return;
      }
      var start = performance.now();
      var duration = 1100;
      function tick(now){
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if(p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
    if('IntersectionObserver' in window){
      var countIo = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            animateCount(entry.target);
            countIo.unobserve(entry.target);
          }
        });
      }, {threshold:0.5});
      countEls.forEach(function(el){ countIo.observe(el); });
    } else {
      countEls.forEach(animateCount);
    }
  }

  // ---- 3D tilt on cards (desktop mouse only) ----
  var canTilt = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  function initTilt(selector, max, lift){
    if(!canTilt || reduce) return;
    document.querySelectorAll(selector).forEach(function(el){
      el.addEventListener('mousemove', function(e){
        var rect = el.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = 'translateY(' + lift + 'px) perspective(800px) rotateX(' + (-y * max) + 'deg) rotateY(' + (x * max) + 'deg)';
      });
      el.addEventListener('mouseleave', function(){
        el.style.transform = '';
      });
    });
  }
  initTilt('.highlight-card', 7, -6);
  initTilt('.dish', 5, -3);

  // ---- scrollspy for menu category nav ----
  var catnavLinks = document.querySelectorAll('.catnav a');
  var menuCats = document.querySelectorAll('.menu-cat[id]');
  var catnavEl = document.querySelector('.catnav');

  // fade the edges only where there is actually more to scroll to
  if(catnavEl && catnavEl.parentElement){
    var catnavShell = catnavEl.parentElement;
    var edgeTicking = false;
    function updateCatnavEdges(){
      var max = catnavEl.scrollWidth - catnavEl.clientWidth;
      catnavShell.classList.toggle('can-scroll-left', catnavEl.scrollLeft > 2);
      catnavShell.classList.toggle('can-scroll-right', catnavEl.scrollLeft < max - 2);
    }
    catnavEl.addEventListener('scroll', function(){
      if(edgeTicking) return;
      edgeTicking = true;
      requestAnimationFrame(function(){ updateCatnavEdges(); edgeTicking = false; });
    }, {passive:true});
    window.addEventListener('resize', updateCatnavEdges);
    updateCatnavEdges();
  }

  if(catnavLinks.length && menuCats.length && catnavEl && 'IntersectionObserver' in window){
    var catnavMap = {};
    catnavLinks.forEach(function(a){
      catnavMap[a.getAttribute('href').slice(1)] = a;
    });
    function setActiveCat(id){
      var link = catnavMap[id];
      if(!link || link.classList.contains('is-active')) return;
      catnavLinks.forEach(function(a){ a.classList.remove('is-active'); });
      link.classList.add('is-active');
      var navRect = catnavEl.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      var offset = (linkRect.left + linkRect.right) / 2 - (navRect.left + navRect.right) / 2;
      catnavEl.scrollBy({left: offset, behavior: reduce ? 'auto' : 'smooth'});
    }
    var catObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) setActiveCat(entry.target.id);
      });
    }, {rootMargin: '-30% 0px -55% 0px', threshold: 0});
    menuCats.forEach(function(cat){ catObserver.observe(cat); });
  }
})();
