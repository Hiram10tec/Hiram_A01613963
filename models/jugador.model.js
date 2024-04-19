const db= require('../util/database');

module.exports = class Jugador {


    constructor(mi_nombre, mi_Posicion, mi_edad, mi_imagen) {
        this.nombre = mi_nombre;
        this.Posicion = mi_Posicion;
        this.edad = mi_edad;
        this.imagen = mi_imagen;
    }


    save() {
        return new Promise((resolve, reject) => {
            db.query(
                'CALL insertjugador(?, ?, ?, ?)',
                [this.nombre, this.Posicion, this.edad, this.imagen],
                (error, results, fields) => {
                    if (error) {
                        console.error('Error al llamar al procedimiento almacenado:', error);
                        reject(error);
                        return;
                    }
                    console.log('Procedimiento almacenado ejecutado correctamente:', results);
                    resolve(results);
                }
            );
        });
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

    static update(id, nombre, Posicion, edad, imagen) {
        nombre = nombre || null;
        Posicion = Posicion || null;
        edad = edad || null;
        imagen = imagen || null;
    
        return db.execute(
            'CALL actualizarJugador(?, ?, ?, ?, ?)', 
            [id, nombre, Posicion, edad, imagen]
        );
    }
    
    
    

}