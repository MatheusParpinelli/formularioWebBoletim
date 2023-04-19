
function Media() {
    var nome = document.getElementById("nome").value;
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var media = (nota1 + nota2 + nota3 + nota4) / 4;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = nome + " teve média " + media.toFixed(2);
    
    if (media >= 6.0) {
      resultado.classList.add("aprovado");
      resultado.innerHTML += " - Aprovado";
    
    }else if (media >= 2.1 && media <= 5.9) {
      resultado.classList.add("recuperacao");
      resultado.innerHTML += " - Em Recuperação";
    
    } else {
      resultado.classList.add("reprovado");
      resultado.innerHTML += " - Reprovado";
    }
  }
