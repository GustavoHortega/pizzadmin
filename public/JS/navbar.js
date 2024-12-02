function navbar() {
    // Carrega o arquivo 'navbar.html' e o insere no 'header' com o ID 'navbar-container'
    fetch('http://localhost:3000/html/navbar.html')
      .then(response => response.text())
      .then(data => document.getElementById('navbar-container').innerHTML = data)
      .catch(error => console.error('Erro ao carregar o menu:', error));
      console.log('menú impotado com sucesso');
}

module.exports = navbar();