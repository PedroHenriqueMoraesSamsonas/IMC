alert("A altura está em metros");
function meuEscopo() {
  const form = document.querySelector('.form');
  const resultados = document.querySelector('.resultados');
  let IMC = 0;

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    let peso = form.querySelector('.peso')
    let altura = form.querySelector('.altura')
    pessoas[peso.value, altura.value]
    pessoas.push({

      altura: altura.value,
      peso: peso.value
    });

    peso = Number(peso.value);
    altura = Number(altura.value);
    IMC = peso / (altura ** 2);

    if (IMC < 18.5) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Abaixo do peso </p></div>`;
    }
    if (IMC > 18.5 && IMC < 24.9) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Com o peso normal </p></div>`;
    }
    if (IMC > 25 && IMC < 29.9) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Sobrepeso </p></div>`;
    }
    if (IMC > 30 && IMC < 34.9) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Obesidade grau 1 </p></div>`;
    }
    if (IMC > 35 && IMC < 39.9) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Obesidade grau 2 </p></div>`;
    }
    if (IMC > 40) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Obesidade grau 3  </p></div>`;
    }
    if (a - z) {
      resultados.innerHTML += `<div class= conclu><p>Com o seu IMC de ${IMC} você está : Querendo </p></div>`;
    }
    console.log(pessoas);
  }

  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
