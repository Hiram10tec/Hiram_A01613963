const barbaro = {nivel: 1, vida: 20, ataque: 12};
const arquera = {nivel: 1, vida: 14, ataque: 8};

const boton_levelear_barbaro = document.getElementById("boton_levelear_barbaro");

const subir_barbaro = () => {
    barbaro.nivel++;
    barbaro.vida += 4;
    barbaro.ataque += 2;
}

boton_levelear_barbaro.onclick = () => {
    subir_barbaro();
    const span_nivel = document.getElementById("nivel_barbaro");
    span_nivel.innerHTML = barbaro.nivel;
    const span_ataque = document.getElementById("ataque_barbaro");
    span_ataque.innerHTML = barbaro.ataque;
    const span_vida = document.getElementById("vida_barbaro");
    span_vida.innerHTML = barbaro.vida;
}

const boton_atacar_arquera = document.getElementById("boton_atacar_arquera");

boton_atacar_arquera.onclick = () => {
    arquera.vida -= barbaro.ataque;
    
    if (arquera.vida <= 0) {
        const imagen_arquera = document.getElementById("imagen_arquera");
        imagen_arquera.src = "https://pbs.twimg.com/media/FGqnaSAWYAM-P__.jpg";
        const boton_levelear_arquera = document.getElementById("boton_levelear_arquera");
        boton_levelear_arquera.style.display = "none";
        const boton_atacar_barbaro = document.getElementById("boton_atacar_barbaro");
        boton_atacar_barbaro.style.display = "none";
    }

    const span_vida = document.getElementById("vida_arquera");
    span_vida.innerHTML = arquera.vida;
}

const subir_arquera = () => {
    arquera.nivel++;
    arquera.vida += 2;
    arquera.ataque += 4;
}

boton_levelear_arquera.onclick = () => {
    subir_arquera();
    const span_nivel = document.getElementById("nivel_arquera");
    span_nivel.innerHTML = arquera.nivel;
    const span_ataque = document.getElementById("ataque_arquera");
    span_ataque.innerHTML = arquera.ataque;
    const span_vida = document.getElementById("vida_arquera");
    span_vida.innerHTML = arquera.vida;
}

const boton_atacar_barbaro = document.getElementById("boton_atacar_barbaro");

boton_atacar_barbaro.onclick = () => {
    barbaro.vida -= arquera.ataque;
    
    if (barbaro.vida <= 0) {
        const imagen_barbaro = document.getElementById("imagen_barbaro");
        imagen_barbaro.src = "https://p.turbosquid.com/ts-thumb/Vw/S5IUL1/9XyEOpwn/barbarian/png/1548506480/1920x1080/fit_q99/213fe431655c56a984598422f62ed769f31ed4fa/barbarian.jpg";
        const boton_levelear_barbaro = document.getElementById("boton_levelear_barbaro");
        boton_levelear_barbaro.style.display = "none";
        const boton_atacar_arquera = document.getElementById("boton_atacar_arquera");
        boton_atacar_arquera.style.display = "none";
    }

    const span_vida = document.getElementById("vida_barbaro");
    span_vida.innerHTML = barbaro.vida;
}