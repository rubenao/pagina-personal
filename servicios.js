var accordionItems = document.querySelectorAll('.accordion-item');

for (var i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', function() {
    var isActive = this.classList.contains('active');
    
    for (var j = 0; j < accordionItems.length; j++) {
      accordionItems[j].classList.remove('active');
    }
    
    if (!isActive) {
      this.classList.add('active');
    }
  });
}
