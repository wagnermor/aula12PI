const alicia = [23, 69, 32, 50, 30];
const bob = [12, 67, 43, 50, 40];

function encontrarGanhador(a, b) {
  let pontosAlicia = 0;
  let pontosBob = 0;
  let msg = "";

  if (alicia.length === bob.length) {
    for (let i = 0; i < alicia.length; i += 1) {
      if (a[i] > b[i]) pontosAlicia++;
      if (a[i] < b[i]) pontosBob++;
      //if (a[i] === b[i]) (pontosBob++), (pontosAlicia++); ==> O requisito para empate é que ninguém pontua. Gostei dessa sítaxe se separar o retorno do if por vírgula.
    }
  }

  if (pontosAlicia > pontosBob) msg = `Alicia com ${pontosAlicia} pontos`;
  if (pontosAlicia < pontosBob) msg = `Bob com ${pontosBob}`;
  if (pontosAlicia === pontosBob) msg = `Competidores empataram`;
  return msg;
}

console.log(`O ganhador é: ${encontrarGanhador(alicia, bob)}`);
