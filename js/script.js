
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
    CAT[key].forEach(function(item){
      var num = item[0], name = item[1], desc = item[2], prices = item[3], tags = item[4], featured = item[5];
      html += '<article class="dish'+(featured?' featured':'')+'">';
      html += '<div class="dish-top">';
      html += '<div class="dish-name">'+(num?'<span class="num">'+esc(num)+'</span>':'')+' '+esc(name)+'</div>';
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
  emberField('embers', 5000);
  emberField('ovenfire', 9000);

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

  // ---- header height (used to position mobile nav panel below header) ----
  var topbarEl = document.querySelector('.topbar');
  function updateHeaderHeight(){
    if(!topbarEl) return;
    document.documentElement.style.setProperty('--header-h', topbarEl.offsetHeight + 'px');
  }
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);

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
      if(window.innerWidth > 860) closeMenu();
    });
  }
})();
