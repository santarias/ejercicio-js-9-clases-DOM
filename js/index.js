class Personaje {
  nombre;
  familia;
  edad;
  estado;
  serie;

  constructor(nombreDefinir, familiaDefinir, edadDefinir) {
    this.nombre = nombreDefinir;
    this.familia = familiaDefinir;
    this.edad = edadDefinir;
    this.estado = "vivo";
    this.serie = "Juego de Tronos";
  }

  morir() {
    this.estado = "muerto";
  }

  comunicar() {
    return `${this.nombre} dice:`;
  }

  nombre() {
    return `${this.nombre}`
  }

}

class Rey extends Personaje {
  anyosReinado;
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.anyosReinado = reinado;
  }

  comunicar() {
    return `${super.comunicar()} "Vais a Morir Todos"`;
  }
}

class Luchador extends Personaje {
  arma;
  destreza;
  constructor(nombre, familia, edad, armaDefinir, destrezaDefinir) {
    super(nombre, familia, edad);
    this.arma = armaDefinir;
    this.verificarDestreza(destrezaDefinir);
  }
  set setterDestreza(destrezaDefinir) {
    this.verificarDestreza(destrezaDefinir);
  }

  verificarDestreza(destrezaVerificar) {
    if (destrezaVerificar > 0 && destrezaVerificar <= 10) {
      this.destreza = destrezaVerificar;
    } else if (destrezaVerificar < 0) {
      this.destreza = 0;
    } else if (destrezaVerificar > 10) {
      this.destreza = 10;
    }
  }

  comunicar() {
    return `${super.comunicar()} "Primero pego y luego pregunto"`;
  }
}
class Escudero extends Personaje {
  personajeQueSirve;
  pelotismo;
  constructor(nombre, familia, edad, personajeServir, pelotismo) {
    super(nombre, familia, edad);
    this.verificarPersonajeServir(personajeServir);
    this.veriricarPelotismo(pelotismo);
  }
  set personajeAServir(personajeDefinir) {
    this.verificarPersonajeServir(personajeDefinir);
  }
  set gradoPelotismo(pelotismoVerificar) {
    this.veriricarPelotismo(pelotismoVerificar);
  }

  verificarPersonajeServir(personaje) {
    if (personaje instanceof Luchador) {
      this.personajeQueSirve = personaje;
    }
  }

  veriricarPelotismo(pelotismoDefinir) {
    if (pelotismoDefinir > 0 && pelotismoDefinir <= 10) {
      this.pelotismo = pelotismoDefinir;
    } else {
      this.pelotismo = 0;
    }
  }

  comunicar() {
    return `${super.comunicar()} "Soy un loser"`;
  }
}
class Asesor extends Personaje {
  personajeAsesorado;
  constructor(nombre, familia, edad, asesorado) {
    super(nombre, familia, edad);
    this.verificarAsesorado(asesorado);
  }
  set personajeAsesor(personajeDefinir) {
    this.verificarAsesorado(personajeDefinir);
  }

  verificarAsesorado(personaje) {
    if (personaje instanceof Luchador || personaje instanceof Rey || personaje instanceof Escudero) {
      this.personajeAsesorado = personaje;
    }
  }


  comunicar() {
    return `${super.comunicar()} "No se por que, pero creo que voy a morir pronto"`;
  }
}

const Joffrey = new Rey("Joffrey", "Baratheon", 25, 3);
const Jamie = new Luchador("Jamie", "Lannister", 37, "Espada", 7);
const Daenerys = new Luchador("Daenerys", "Targaryen", 27, "Dragon", 10);
const Tyrion = new Asesor("Tyrion", "Lannister", 34, Daenerys);
const Bronn = new Escudero("Bronn", "", 36, Jamie, 6);

const listaPersonajes = [Joffrey, Jamie, Daenerys, Tyrion, Bronn];

function mensajesLuchador(personajes) {
  const luchadorMensajes = personajes.filter(personaje => personaje instanceof Luchador).map(personaje => personaje.comunicar());
  return luchadorMensajes;
}


const seriePersonajes = Array.from(new Set(listaPersonajes.map((personaje) => personaje.serie)));

const mensajes = listaPersonajes.map((personaje) => personaje.comunicar());

console.log(mensajes);

console.log(seriePersonajes);

Jamie.morir();
Tyrion.morir();

function resumenListaPersonajes(listaPersonajes) {
  const resumenPersonajes = [];

  const nombresClases = Array.from(new Set(listaPersonajes.map((personaje) => personaje.constructor.name)));
  for (const nombreClase of nombresClases) {
    const nuevaLista = Array.from(new Set(listaPersonajes.filter((personaje) => personaje.constructor.name === nombreClase)));
    nuevaLista.sort((x, y) => x.edad - y.edad);
    resumenPersonajes.push({
      tipo: nombreClase,
      personajes: nuevaLista
    });
  }
  return resumenPersonajes;
}

resumenL = resumenListaPersonajes(listaPersonajes);
console.log(resumenL);



const recorrePersonajes = (listaDePersonajes) => {
  for (const personaje of listaDePersonajes) {
    const personajeDummy = document.querySelector(".personaje-dummy").cloneNode(true);
    const iconoEstado = document.createElement("i");
    iconoEstado.classList.add("fas");
    personajeDummy.classList.remove("personaje-dummy");
    personajeDummy.querySelector(".nombre").textContent = `${personaje.nombre} ${personaje.familia}`;
    personajeDummy.querySelector(".estado").appendChild(iconoEstado);
    personajeDummy.querySelector(".edad").textContent = `Edad: ${personaje.edad}`;
    if (personaje.estado === "vivo") {
      iconoEstado.classList.add("fa-thumbs-up");
    } else {
      iconoEstado.classList.add("fa-thumbs-down");
    }
    personajeDummy.querySelector(".estado").appendChild(iconoEstado);
    const imgPersonaje = personajeDummy.querySelector("img");
    imgPersonaje.src = `img/${personaje.nombre.toLowerCase()}.jpg`;
    imgPersonaje.alt = `${personaje.nombre} ${personaje.familia}`;

    if (personaje instanceof Rey) {
      personajeDummy.querySelector(".anyos-reino").textContent =
        `Años de reinado: ${personaje.anyosReinado}`;
      personajeDummy.querySelector(".emoji").textContent = `👑`;
    }

    if (personaje instanceof Luchador) {
      personajeDummy.querySelector(".arma").textContent = `Arma: ${personaje.arma}`;
      personajeDummy.querySelector(".destreza").textContent = `Destreza: ${personaje.destreza}`;
      personajeDummy.querySelector(".emoji").textContent = `🗡`;
    }

    if (personaje instanceof Escudero) {
      personajeDummy.querySelector(".peloteo").textContent = `Peloteo: ${personaje.pelotismo}`;
      personajeDummy.querySelector(".sirve-a").textContent =
        `Sirve a: ${personaje.personajeQueSirve.nombre}`;
      personajeDummy.querySelector(".emoji").textContent = `🛡`;
    }
    if (personaje instanceof Asesor) {
      personajeDummy.querySelector(".asesora-a").textContent =
        `Asesora a: ${personaje.personajeAsesorado.nombre}`;
      personajeDummy.querySelector(".emoji").textContent = `🎓`;
    }

    document.querySelector(".personajes").append(personajeDummy);
  }
}

recorrePersonajes(listaPersonajes);
