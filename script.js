const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W E W     W E   W W W",
  "W W W WWW WWWWW W W W",
  "W W W   W     W W   W",
  "W WWWWWWW W WWW W W W",
  "W       E W     W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W   W W     W W",
  "W WWWWW W W W WWW W F",
  "S     W W W W W W WWW",
  "WWWWW W W W W W W W W",
  "W     W W W   W W W W",
  "W WWWWWWW WWWWW W W W",
  "W   E   W       W E W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

const criarMapa = () => {
  document.querySelector("#jogo").innerHTML = " ";

  for (let i = 0; i < map.length; i++) {
    let mapa = document.querySelector("#jogo");
    let linha = document.createElement("div");
    linha.classList.add("linha");
    mapa.append(linha);
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "W") {
        let parede = document.createElement("div");
        parede.classList.add("parede");
        linha.append(parede);
      } else if (map[i][j] === "S") {
        let jogador = document.createElement("div");
        jogador.classList.add("jogador");
        linha.append(jogador);
      } else if (map[i][j] === "F") {
        let final = document.createElement("div");
        final.classList.add("final");
        linha.append(final);
      }else {
        let espaco = document.createElement("div");
        espaco.classList.add("espaco");
        linha.append(espaco);
      }
    }
  }
};
criarMapa();

let position = [9, 0]

const moverJogador = (eixoX, eixoY) => {
      if(position[1] === 0 && eixoY === -1){
        return null;
      }
      if(position[1] === 20 && eixoY === 1){
        return null;
      }

      if(map[position[0] + eixoX][position[1] + eixoY] !== "W"){
        let antigoMapa = map[position[0]].split("");
        antigoMapa[position[1]] = " ";
        map[position[0]] = antigoMapa.join("");
        
        let novoMapa = map[position[0]+eixoX].split("");
        novoMapa[position[1] + eixoY] = "S";               
        map[position[0] + eixoX] = novoMapa.join("");

        position[0] += eixoX;
        position[1] += eixoY;

        criarMapa();
      }
};

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if(keyName === 'ArrowDown'){
    moverJogador(1, 0);
    document.querySelector(".jogador").style.backgroundImage = "url('img/down.png')"; 
    verificarVitoria()
  };
  if(keyName === 'ArrowRight'){ 
    moverJogador(0, 1)
    document.querySelector(".jogador").style.backgroundImage = "url('img/right.png')"; 
    verificarVitoria()
  }
  if(keyName === 'ArrowUp'){  
    moverJogador(-1, 0)
    document.querySelector(".jogador").style.backgroundImage = "url('img/up.png')"; 
    verificarVitoria()

  }
  if(keyName === 'ArrowLeft'){
    moverJogador(0, -1)
    document.querySelector(".jogador").style.backgroundImage = "url('img/left.png')"
    verificarVitoria()
  }
});

const verificarVitoria = () => {
  if(map[8][20] === "S"){
    let jogoMsg = document.getElementById("msg")
    let msg = document.createElement('h2');
    jogoMsg.innerHTML = " ";
    msg.innerHTML = "Parabéns você encontrou o tesouro"
    jogoMsg.appendChild(msg)
  }
}

//mover inimigo1
