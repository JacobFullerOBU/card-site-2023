function createFooter() {
    var footer = document.createElement('footer');
    var p = document.createElement('p');
    var text = document.createTextNode('\u00A9 2023 Cards and Community Online. All rights reserved.');
  
    p.appendChild(text);
    footer.appendChild(p);
    document.body.appendChild(footer);
  }