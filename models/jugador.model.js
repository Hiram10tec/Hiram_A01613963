const db= require('../util/database');

module.exports = class Jugador {

    constructor(mi_nombre, mi_Posicion, mi_edad, mi_imagen) {
        this.nombre = mi_nombre;
        this.Posicion = mi_Posicion;
        this.edad = mi_edad;
        this.imagen = mi_imagen;
    }

    save() {
        return db.execute(
            'INSERT INTO jugador (nombre, Posicion, edad, imagen) VALUES (?, ?, ?, ?)',
            [this.nombre, this.Posicion, this.edad, this.imagen]);
    }

    static fetchAll() {
        return db.execute('SELECT * FROM jugador');
    }

    static fetch(id) {
        if (id) {
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM jugador WHERE id = ?', [id]);
    }

}