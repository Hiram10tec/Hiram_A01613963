const fs = require("fs");

class Promedio {
    static calcularPromedio(arreglo) {
        let suma = arreglo.reduce((total, item) => total + item, 0);
        return suma / arreglo.length;
    }
}

const arreglo= [32, 89, 22, 10, 6, 54, 47];
const promedio= Promedio.calcularPromedio(arreglo);
console.log(promedio);

const escribirArchivo = (titulo, texto) => {
    fs.writeFileSync(titulo, texto);
};

const EscribirTexto = "Hola buenas tardes :)";
escribirArchivo("registroslab8.txt", EscribirTexto);

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);
        if (this.minStack.length === 0) {
            this.minStack.push(value);
        } else {
            const min = Math.min(value, this.getMin());
            this.minStack.push(min);
        }
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Ejemplo de uso:
const minStack = new MinStack();
minStack.push(10);
minStack.push(7);
minStack.push(4);
minStack.push(3);
minStack.push(9);
minStack.push(1);
minStack.push(2);
minStack.push(6);
minStack.push(5);

console.log("Valor mayor:", minStack.top()); 
console.log("Valor mínimo:", minStack.getMin()); 
console.log("Valor mínimo:", minStack.getMin()); 
console.log("Valor mayor:", minStack.top()); 
console.log("Valor mínimo:", minStack.getMin()); 
minStack.pop();



const http = require ("http");
const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <title>Lab 8</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
    </head>
        
    <div class="has-text-centered">
        <img src="https://media.es.wired.com/photos/646fafe6a566376ee967bcf8/4:3/w_888,h_666,c_limit/XboxLogo.jpg" alt="Xbox" style="width: 30%; height: 30%;">
    </div>
    
    <h2 style="text-align: center;"><strong>Inicio de sesión</strong></h2>
    
    <body>
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input class="input" type="text" placeholder="Ingresa tu nombre">
            </div>
        </div>
    
        <div class="field">
            <label class="label">Usuario</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-grouped" type="text" placeholder="Ingresa tu usario" value="">
                <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-check"></i>
                </span>
            </div>
            <p class="help is-grouped"> </p>
        </div>
    
        <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-grouped" type="email" placeholder="Ingresa tu correo" value="">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
            </div>
            <p class="help is-grouped"></p>
            <button id="botonInfoEmail">Más info</button>
            <div id="textoInfoEmail" style="display: none;">Ejemplo: 12345@gmail.com</div>
        </div>
    
        <div class="field">
            <label class="label">Contraseña</label>
            <div class="control has-icons-left has-icons-right">
                <input id="password" class="input is-grouped" type="password" placeholder="Ingresa tu contraseña" value="">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation"></i>
                </span>
            </div>
            <p class="help is-grouped"></p>
        </div>
    
        <div class="field">
            <label class="label">Verificar contraseña</label>
            <div class="control has-icons-left has-icons-right">
                <input id="confirmpassword" class="input is-grouped" type="password"
                    placeholder="Ingresa otra vez tu contraseña" value="">
                <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                    <i class="fas fa-exclamation"></i>
                </span>
            </div>
            <p class="help is-grouped"></p>
        </div>
    
        <div class="field">
            <label class="label">Genero</label>
            <div class="control">
                <div class="select">
                    <select>
                        <option></option>
                        <option>Hombre</option>
                        <option>Mujer</option>
                    </select>
                </div>
            </div>
        </div>
    
        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox">
                    Estas de acuerdo con los <a href="https://youtu.be/xvFZjo5PgG0?si=7O2oqwoGm6D9gAXM">terminos y
                        condiciones</a>
                </label>
            </div>
        </div>
    
        <div class="field is-grouped">
            <div class="control">
                <button class="button is-link" onclick="validarContraseñas()">Submit</button>
            </div>
        </div>
        <br><br><br>
    
        <p id="cambiarEstilo" style="text-align: center;">Preguntas de laboratorio 6</strong></p>
        <table>
            <tr>
                <td>1. ¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las
                    formas antes de enviar los datos al servidor?<br>
                    Porque les da una experiencia más amigable y segura a los usuarios, evitando que el servidor reciba
                    datos invalidos.
                </td>
            </tr>
            <tr>
                <td>2. ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?<br>
                    Se podria saltar la seguridad deshabilitando JavaScript en el navegador.
                </td>
            </tr>
            <tr>
                <td>3. Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera
                    pregunta dice que es una buena práctica?<br>
                    Porque evita que el servidor reciba datos no válidos, ahorrando tiempo y recursos.
                </td>
            </tr>
        </table>
        <br><br><br>
        <button id="botonCambiarEstilo" onclick="cambiarEstilo()">Cambiar Estilo</button>
        <script>
            document.addEventListener("DOMContentLoaded", function () {
                // Agregar información extra
                var botonInfoEmail = document.getElementById("botonInfoEmail");
                var textoInfoEmail = document.getElementById("textoInfoEmail");
    
                botonInfoEmail.addEventListener("click", function () {
                    if (textoInfoEmail.style.display === "none" || textoInfoEmail.style.display === "") {
                        textoInfoEmail.style.display = "block";
                    } else {
                        textoInfoEmail.style.display = "none";
                    }
                });
            });
    
            function cambiarEstilo() {
                var elementoCambioEstilo = document.getElementById("cambiarEstilo");
                if (elementoCambioEstilo.style.color === "red") {
                    elementoCambioEstilo.style.color = ""; // Restaura el color por defecto
                    elementoCambioEstilo.style.fontWeight = ""; // Restaura el peso de la fuente por defecto
                } else {
                    elementoCambioEstilo.style.color = "red";
                    elementoCambioEstilo.style.fontWeight = "bold";
                }
            }
    
            function validarContraseñas() {
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("confirmpassword").value;
    
                if (password === confirmPassword) {
                    alert("Contraseñas iguales");
                } else {
                    alert("Contraseñas diferentes");
                }
            }
        </script>
    
    </body>
    
    <footer>
        <p>Hecho con <a href="https://code.visualstudio.com/" target="_blank">visual studio code</a> por Hiram Mendoza</p>
    </footer>
    
    </html>
    
    `)
    response.end();
});

server.listen(3000);