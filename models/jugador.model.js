
const equipo = [
    {
        nombre: "Messi", 
        Posicion: "Delantero", 
        edad: 36, 
        imagen: "https://static.euronews.com/articles/stories/08/17/34/96/1200x675_cmsv2_f684f7ac-d7bb-5cf6-8931-33a1ca460f2a-8173496.jpg",
    },
    {
        nombre: "Iniesta", 
        Posicion: "Mediocampista",     
        edad: 39, 
        imagen: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4550dc6325c691a0/60db879863584e0ecae3a905/012c674d983be63d6de2841e4343672415608e3c.jpg?auto=webp&format=pjpg&width=3840&quality=60"
    },
];

module.exports = class Jugador {

    constructor(mi_nombre, mi_Posicion, mi_edad, mi_imagen) {
        this.nombre = mi_nombre;
        this.Posicion = mi_Posicion;
        this.edad = mi_edad;
        this.imagen = mi_imagen;
    }

    save() {
        equipo.push({
            nombre: this.nombre,
            Posicion: this.Posicion,
            edad: this.edad,
            imagen: this.imagen,
        }); 
    }

    static fetchAll() {
        return equipo;
    }

}