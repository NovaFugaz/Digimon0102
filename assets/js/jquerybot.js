$(document).ready(function() {

    // Para cuando apriete "Fresh"
    $('#baby').click(function() {
        const fresh = 'https://digimon-api.vercel.app/api/digimon/level/fresh';
        fetch(fresh)
          .then(response => response.json())
          .then(fresh => {
            galeria(fresh)
          });
      
        function galeria(fresh) {
          const gallmon = $('#galmon');
          gallmon.empty();
          for (let temp of fresh) {
            gallmon.append(`
              <div class="col-6 col-sm-6 col-md-3 col-xl-2">
                <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
              </div>
            `);
          }
          gallmon.find('img').click(function() {
            const digimonImg = $(this).attr('src');
            const digimonName = fresh.find(digimon => digimon.img === digimonImg).name;
            const digimonLevel = fresh.find(digimon => digimon.img === digimonImg).level;
            $('#DatosDigimonOC').html(`
              <div class="text-center">
                <img src="${digimonImg}" class="img-fluid mb-4 mx-auto" alt="${digimonName}" width="200">
                <h3 id="diginame">${digimonName}</h3>
                <p>${digimonLevel}</p>
              </div>
              <div class="text-center fst-italic text-break fw-lighter">
              <p>Fresh o Baby es la denominación de la primera etapa en que nace un Digimon tras ser un Digihuevo. Su fuerza es muy limitada y en la mayoria de los casos su aspecto es el de un ser pequeño.
                Su capacidad de poder es muy bajo en este nivel.</p></div>
            `);
          });
        }
      });

// Para cuando apriete "In Training"
$('#int').click(function() {
    const int = 'https://digimon-api.vercel.app/api/digimon/level/In%20Training';
    fetch(int)
      .then(response => response.json())
      .then(int => {
        galeria(int)
      });
  
    function galeria(int) {
      const gallmon = $('#galmon');
      gallmon.empty();
      for (let temp of int) {
        gallmon.append(`
          <div class="col-6 col-sm-6 col-md-3 col-xl-2">
            <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
          </div>
        `);
      }
      gallmon.find('img').click(function() {
        const digimonImg = $(this).attr('src');
        const digimonName = int.find(digimon => digimon.img === digimonImg).name;
        const digimonLevel = int.find(digimon => digimon.img === digimonImg).level;
        $('#DatosDigimonOC').html(`
          <div class="text-center">
            <img src="${digimonImg}" class="img-fluid mb-4" alt="${digimonName}" width="200">
            <h3 id="diginame">${digimonName}</h3>
            <p>${digimonLevel}</p>
          </div>
          <div class="text-center fst-italic text-break fw-lighter">
          <p>Los Digimon en entrenamiento son capaces de hablar, sostener batallas y ya muestran desarrollos propios de cada uno. En este desarrollo son capaces de absorber información del Digimundo.</p></div>
        `);
      });
    }
  });
            

// Rookie

$('#rook').click(function() {
    const rook = 'https://digimon-api.vercel.app/api/digimon/level/rookie';
    fetch(rook)
      .then(response => response.json())
      .then(rook => {
        galeria(rook)
      });
  
    function galeria(rook) {
      const gallmon = $('#galmon');
      gallmon.empty();
      for (let temp of rook) {
        gallmon.append(`
          <div class="col-6 col-sm-6 col-md-3 col-xl-2">
            <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
          </div>
        `);
      }
      gallmon.find('img').click(function() {
        const digimonImg = $(this).attr('src');
        const digimonName = rook.find(digimon => digimon.img === digimonImg).name;
        const digimonLevel = rook.find(digimon => digimon.img === digimonImg).level;
        $('#DatosDigimonOC').html(`
          <div class="text-center">
            <img src="${digimonImg}" class="img-fluid mb-4" alt="${digimonName}" width="200">
            <h3 id="diginame">${digimonName}</h3>
            <p>${digimonLevel}</p>
          </div>
          <div class="text-center fst-italic text-break fw-lighter">
          <p>Los Digimon Rookie son notablemente fuertes y su poder ya se encuentra en desarrollo. Pueden tener batallas sin mayor dificultad y pueden usar implementos para digievolucionar.</p></div>
        `);
      });
    }
  });
          
// Champion

$('#champ').click(function() {
    const champ = 'https://digimon-api.vercel.app/api/digimon/level/champion';
    fetch(champ)
      .then(response => response.json())
      .then(champ => {
        galeria(champ)
      });
  
    function galeria(champ) {
      const gallmon = $('#galmon');
      gallmon.empty();
      for (let temp of champ) {
        gallmon.append(`
          <div class="col-6 col-sm-6 col-md-3 col-xl-2">
            <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
          </div>
        `);
      }
      gallmon.find('img').click(function() {
        const digimonImg = $(this).attr('src');
        const digimonName = champ.find(digimon => digimon.img === digimonImg).name;
        const digimonLevel = champ.find(digimon => digimon.img === digimonImg).level;
        $('#DatosDigimonOC').html(`
          <div class="text-center">
            <img src="${digimonImg}" class="img-fluid mb-4" alt="${digimonName}" width="200">
            <h3 id="diginame">${digimonName}</h3>
            <p>${digimonLevel}</p>
          </div>
          <div class="text-center fst-italic text-break fw-lighter">
          <p>Los Digimon Champion dejan su etapa infantil y pueden soportar batallas duras. A veces este estado es permanente, pero eso depende de cada Digimon.</p></div>
        `);
      });
    }
  });

// Ultimate

$('#ulti').click(function() {
    const ulti = 'https://digimon-api.vercel.app/api/digimon/level/ultimate';
    fetch(ulti)
      .then(response => response.json())
      .then(ulti => {
        galeria(ulti)
      });
  
    function galeria(ulti) {
      const gallmon = $('#galmon');
      gallmon.empty();
      for (let temp of ulti) {
        gallmon.append(`
          <div class="col-6 col-sm-6 col-md-3 col-xl-2">
            <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
          </div>
        `);
      }
      gallmon.find('img').click(function() {
        const digimonImg = $(this).attr('src');
        const digimonName = ulti.find(digimon => digimon.img === digimonImg).name;
        const digimonLevel = ulti.find(digimon => digimon.img === digimonImg).level;
        $('#DatosDigimonOC').html(`
          <div class="text-center">
            <img src="${digimonImg}" class="img-fluid mb-4" alt="${digimonName}" width="200">
            <h3 id="diginame">${digimonName}</h3>
            <p>${digimonLevel}</p>
          </div>
          <div class="text-center fst-italic text-break fw-lighter">
          <p>Los Digimon Ultimate se considera el nivel máximo de evolución y son pocos los que la alcanzan. En estado salvaje, se vuelven líderes de sus manadas.</p></div>
        `);
      });
    }
  });

// Mega

$('#mega').click(function() {
    const mega = 'https://digimon-api.vercel.app/api/digimon/level/mega';
    fetch(mega)
      .then(response => response.json())
      .then(mega => {
        galeria(mega)
      });
  
    function galeria(mega) {
      const gallmon = $('#galmon');
      gallmon.empty();
      for (let temp of mega) {
        gallmon.append(`
          <div class="col-6 col-sm-6 col-md-3 col-xl-2">
            <img src="${temp.img}" class="img-fluid img-thumbnail mb-4" data-bs-toggle="offcanvas" data-bs-target="#OffCanvasDigimon">
          </div>
        `);
      }
      gallmon.find('img').click(function() {
        const digimonImg = $(this).attr('src');
        const digimonName = mega.find(digimon => digimon.img === digimonImg).name;
        const digimonLevel = mega.find(digimon => digimon.img === digimonImg).level;
        $('#DatosDigimonOC').html(`
          <div class="text-center">
            <img src="${digimonImg}" class="img-fluid mb-4" alt="${digimonName}" width="200">
            <h3 id="diginame">${digimonName}</h3>
            <p>${digimonLevel}</p>
          </div>
          <div class="text-center fst-italic text-break fw-lighter">
          <p>Los Digimon Mega tienen un nivel muchísimo más alto que en su etapa anterior. Es la última etapa natural del proceso de digievolución y por ello, la más rara de alcanzar.</p></div>
        `);
      });
    }
  });
});