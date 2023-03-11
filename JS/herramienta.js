var contenedor = document.getElementById("proyectos");
/*let button = document.querySelectorAll('button');
console.log(button)

for ( let i=0; i<button.length; i++){

    button[i].addEventListener('click', filtrarPorCategoria())
    
}*/




 

fetch('https://api.airtable.com/v0/apptYL9vRjll124bu/Herramientas', {
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
      title.textContent = record.fields.nombre.toUpperCase();
      var body = document.createElement('p');
      body.textContent = record.fields.descripción;
      var link = document.createElement('a');
      link.textContent = 'Ver herramienta';
      link.className = 'call-to-action'
      var imagen= document.createElement('img');
      //imagen = record.fields.Imagen[0].url;
      link.href = record.fields.url;
      
      //card.appendChild(body);
      //card.innerHTML= `<img src="${imagen}" alt="imagen" class="img-proyecto">`
      contenedor.appendChild(card);
      card.appendChild(card_texto)
      card_texto.appendChild(title);
      card_texto.appendChild(body);
      card_texto.appendChild(link);
      
    });
  });



  /*function filtrarPorCategoria(categoria) {
    const registrosFiltrados = registros.filter(registro => registro.fields.categoria === categoria);
    mostrarRegistros(registrosFiltrados);
  }*/