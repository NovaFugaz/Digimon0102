// Para que llene la pantalla de inicio

const todos = 'https://digimon-api.vercel.app/api/digimon';

// Descripción nivel a nivel.

const levelText = {
  "Fresh": "Fresh o Baby es la denominación de la primera etapa en que nace un Digimon tras ser un Digihuevo. Su fuerza es muy limitada y en la mayoria de los casos su aspecto es el de un ser pequeño. Su capacidad de poder es muy bajo en este nivel.",
  "In Training": "Los Digimon en entrenamiento son capaces de hablar, sostener batallas y ya muestran desarrollos propios de cada uno. En este desarrollo son capaces de absorber información del Digimundo.",
  "Rookie": "Los Digimon Rookie son notablemente fuertes y su poder ya se encuentra en desarrollo. Pueden tener batallas sin mayor dificultad y pueden usar implementos para digievolucionar.",
  "Champion": "Los Digimon Champion dejan su etapa infantil y pueden soportar batallas duras. A veces este estado es permanente, pero eso depende de cada Digimon.",
  "Ultimate": "Los Digimon Ultimate se considera el nivel máximo de evolución y son pocos los que la alcanzan. En estado salvaje, se vuelven líderes de sus manadas.",
  "Mega": "Los Digimon Mega tienen un nivel muchísimo más alto que en su etapa anterior. Es la última etapa natural del proceso de digievolución y por ello, la más rara de alcanzar.",
};

fetch(todos)
  .then(response => response.json())
  .then(digimon => { galeria(digimon) });

function galeria(digimon) {
  const gallmon = document.getElementById('galmon');
  gallmon.innerHTML = "";
  for (let i = 0; i < digimon.length; i++) {
    const temp = digimon[i];
    const div = document.createElement('div');
    div.className = 'col-6 col-sm-6 col-md-3 col-xl-2';
    const img = document.createElement('img');
    img.src = temp.img;
    img.className = 'img-fluid img-thumbnail mb-4';
    img.setAttribute('data-bs-toggle', 'offcanvas');
    img.setAttribute('data-bs-target', '#OffCanvasDigimon');
    img.addEventListener('click', () => {
      const offcanvasBody = document.getElementById('DatosDigimonOC');
      offcanvasBody.innerHTML = `
      <div class="text-center">
        <img src="${temp.img}" class="img-fluid mb-4 mx-auto" alt="${temp.name}" width="200">
        <h3 class="text-center" id="diginame">${temp.name}</h3>
        <p class="text-center">Level: ${temp.level}</p>
        </div>
        <div class="text-center fst-italic text-break fw-lighter">
        <p>${levelText[temp.level]}</p>
      </div>
      `;
    });
    div.appendChild(img);
    gallmon.appendChild(div);
  }
}

// Para que recargue cuando se apriete el "mostrar todos"

const allButton = document.getElementById('all');
allButton.addEventListener('click', function() {
  fetch(todos)
  .then(response => response.json())
  .then(digimon => { galeria(digimon) });

})

