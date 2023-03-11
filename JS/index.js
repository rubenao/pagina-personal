var contenedor = document.getElementById("proyectos");

const query = `?sort[0][field]=fecha_creacion&sort[0][direction]=desc`;

fetch('https://api.airtable.com/v0/apptYL9vRjll124bu/Blog' + query, {
  headers: {
    'Authorization': 'Bearer patbDlphOjJuJTsCR.441deb26b78f9e441cdbec396c0c31efa7a45ec5260d1589223d96747552b78e'
  }
})
  .then(response => response.json())
  .then(data => {
    data.records.forEach(record => {
      var card = document.createElement('div');
      card.className = 'card-proyectos';
      var card_texto = document.createElement('div')
      card_texto.className = 'card-texto'
      var title = document.createElement('h3');
      title.textContent = record.fields.Titulo;
      var body = document.createElement('p');
      body.textContent = record.fields.Cuerpo;
      var link = document.createElement('a');
      link.textContent = 'Leer artículo';
      link.className = 'call-to-action'
      var imagen= document.createElement('img');
      imagen = record.fields.Imagen[0].url;
      link.href = `detalle.html?id=${record.id}`;
      
      //card.appendChild(body);
      card.innerHTML= `<img src="${imagen}" alt="imagen" class="img-proyecto">`
      contenedor.appendChild(card);
      card.appendChild(card_texto)
      card_texto.appendChild(title);
      card_texto.appendChild(link);
      
    });
  });



  // Detalle JS

  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('id');
  
  fetch(`https://api.airtable.com/v0/apptYL9vRjll124bu/blog/${id}`, {
    headers: {
      'Authorization': 'Bearer patbDlphOjJuJTsCR.441deb26b78f9e441cdbec396c0c31efa7a45ec5260d1589223d96747552b78e'
    }
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("titulo").textContent = data.fields.Titulo;
      document.getElementById("titulo").className = "titulo-blog";
      document.getElementById("cuerpo").innerHTML = marked.parse(data.fields.Cuerpo);
      document.getElementById("imagen").src = data.fields.Imagen[0].url;
      document.getElementById("imagen").className = "img-blog"
      //document.getElementById("fecha").textContent=data.fields.fecha_creacion;
      //document.getElementById("fecha").className = "fecha-blog";
      document.title = data.fields.Titulo;
    });


    // Ultimos artículos
    
  const currentDate = new Date().toISOString().split('T')[0];
  console.log(currentDate)
  const url = `https://api.airtable.com/v0/apptYL9vRjll124bu/blog?filterByFormula={fecha_creacion}<='${currentDate}'&sort%5B0%5D%5Bfield%5D=fecha_creacion&sort%5B0%5D%5Bdirection%5D=desc&maxRecords=3`;

fetch(url, {
  headers: {
    Authorization: `Bearer patbDlphOjJuJTsCR.441deb26b78f9e441cdbec396c0c31efa7a45ec5260d1589223d96747552b78e`
  }
})
.then(response => response.json())
.then(data => {
  const cardsContainer = document.getElementById('cards');
  data.records.forEach(record => {
    const card = document.createElement('div');
    card.className = 'card-proyectos';
    var title = document.createElement('h3');
      title.textContent = record.fields.Titulo;

    card.innerHTML = `
      <img src="${record.fields.Imagen[0].url}" class="img-proyecto"></img>
      
    `;
    var card_texto = document.createElement('div')
      card_texto.className = 'card-texto'
    card.addEventListener('click', () => {
      window.location.href = `detalle.html?id=${record.id}`;
    });
    cardsContainer.appendChild(card);
    card.appendChild(card_texto)
    card_texto.appendChild(title);
  });
})
.catch(error => console.error(error));

  //Ventana modal

  setTimeout(() => {
    const modalContainer = document.getElementById('modal-container');
    const closeButton = document.getElementById('close-button');
  
    modalContainer.style.display = 'flex';
  
    closeButton.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    });
  }, 5000);

  
  //Boton de whatsapp

  window.addEventListener('scroll', function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    if (window.scrollY > 100) {
      whatsappButton.style.display = 'block';
    } else {
      whatsappButton.style.display = 'none';
    }
  });
  

  
