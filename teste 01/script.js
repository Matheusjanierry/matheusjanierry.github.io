function searchProducts() {
    var input, filter, ul, li, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('productList');
    li = ul.getElementsByTagName('li');
  
    // Loop por todos os itens da lista e esconde os que não correspondem à pesquisa
    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }