import { useState } from "react";
import { Message } from "../Message";

const ChatHeader = ({ chat }) => {
    return (
        <div className="w-full flex justify-between absolute top-0 py-5">
            <div className="absolute top-0 w-full h-full z-10 backdrop-blur-sm mask-gradient"></div>
            <div className="z-20 w-full h-full flex justify-between">
                <div className="flex items-center">
                    <div className="ml-3">
                        <h3 className="text-2xl font-bold">
                            {chat.title || "New Chat"}
                            <button
                                type="button"
                                className="ml-2 text-blue-500"
                            >
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>
                        </h3>
                        <p className="pt-2">Model: <span className="font-light">{chat.model}</span></p>
                        <p className="pt-2">Tokens: <span className="font-light">{chat.tokens > 1000 ? `${parseInt(chat.tokens / 1000)}k${parseInt((chat.tokens % 1000) / 100)}` : chat.tokens}</span></p>
                    </div>
                </div>
                <div className="flex gap-5 pr-5 text-blue-500">
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-phone"></i>
                    </button>
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-video"></i>
                    </button>
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-ellipsis-v"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Chat = () => {
    const [chat, setChat] = useState({
        title: "Preguntas varias",
        model: "gpt3.5",
        tokens: 3150,
        conversation: [
            {
                id: 1,
                role: "user",
                message: "dame el ćodigo (html, css, js) para crear un fondo con efecto de humo, que se mueva en todas direcciones, que sea de color gradiente, o sea, no un solo color. intentalo con tree.js",
            },
            {
                id: 2,
                role: "assistant",
                message: (`Para crear un fondo con efecto de humo utilizando Three.js, necesitarás utilizar un conjunto de partículas que imiten un material con una textura que simule el humo y un shader que controle el movimiento y el color de las partículas. Aquí tienes un código básico para lograrlo:

1. Primero, incluye las bibliotecas necesarias en tu archivo HTML:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Smoke Effect with Three.js</title>
    <style>
        body {
        margin: 0;
        }
        canvas {
        display: block;
        }
    </style>
    </head>
    <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="app.js"></script>
    </body>
</html>
\`\`\`

2. Luego, crea un archivo \`app.js\` con el siguiente código:

\`\`\`javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const smokeTexture = textureLoader.load(
    "https://i.imgur.com/K3l97tW.png" // Asume que esta es la imagen de la textura de humo
);

const smokeMaterial = new THREE.MeshLambertMaterial({
    map: smokeTexture,
    transparent: true,
});

const particleCount = 300;
const smokeParticles = [];

for (let i = 0; i < particleCount; i++) {
    const smokeGeometry = new THREE.PlaneGeometry(5, 5);
    const smokeParticle = new THREE.Mesh(smokeGeometry, smokeMaterial);
    smokeParticle.position.set(
    Math.random() * 50 - 25,
    Math.random() * 50 - 25,
    Math.random() * 50 - 25
    );
    smokeParticle.rotation.z = Math.random() * 360;
    scene.add(smokeParticle);
    smokeParticles.push(smokeParticle);
}

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 25);
scene.add(light);

camera.position.z = 50;

const animate = function () {
    requestAnimationFrame(animate);

    smokeParticles.forEach((particle) => {
    particle.rotation.z += 0.01;
    });

    renderer.render(scene, camera);
};

animate();

window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
\`\`\`

Este código creará un efecto de humo básico utilizando Three.js, partículas y una textura de humo. La imagen de la textura de humo es solo un ejemplo y puedes reemplazarla por la que desees.

Ten en cuenta que este código solo proporciona un punto de partida y puede necesitar ajustes y optimizaciones adicionales para lograr el efecto deseado de humo con gradiente de color en movimiento.`)
            },
            {
                role: "user",
                message: "has una tabla comparativa de dolar y euro"
            },
            {
                role: "assistant",
                message: (`Lo siento, como modelo de lenguaje de inteligencia artificial, no tengo acceso a datos en tiempo real y no puedo proporcionar una tabla comparativa actualizada entre el euro y el dólar. Sin embargo, puedo proporcionarte una tabla comparativa general entre el euro y el dólar en términos de su valor relativo histórico:

| Año | Euro | Dólar |
| --- | --- | --- |
| 2000 | 0.9235 | 1.0807 |
| 2005 | 0.8252 | 1.2168 |
| 2010 | 0.7470 | 1.3274 |
| 2015 | 0.9189 | 1.0851 |
| 2020 | 0.8423 | 1.1863 |
                
Esta tabla muestra la tasa de cambio promedio anual entre el euro y el dólar para los años seleccionados. El valor de la tasa de cambio indica cuántos dólares se necesitan para comprar un euro. Por ejemplo, en el año 2000, se necesitaban 1.0807 dólares para comprar un euro. A partir de la tabla, se puede observar que el valor del euro ha fluctuado a lo largo de los años en relación con el dólar. En general, el euro se ha debilitado en relación con el dólar en los últimos años.`)
            },
            {
                role: "user",
                message: "has una lista con las caracteristicas de ddd"
            },
            {
                role: "assistant",
                message: `Como modelo de arquitectura de software, Domain-Driven Design (DDD) se caracteriza por:

1. Centrarse en el dominio del problema: DDD se enfoca en comprender el dominio del problema y modelarlo en términos del lenguaje de negocio.

2. División en subdominios: El modelo de dominio se divide en subdominios para centrarse en áreas específicas del negocio y reducir la complejidad del modelo general.

3. Ubicuidad del lenguaje: DDD utiliza un lenguaje común que es compartido por todos los miembros del equipo y los stakeholders del negocio para evitar malentendidos y confusiones.

4. Enfoque en las entidades y sus relaciones: DDD se enfoca en modelar las entidades del dominio, sus atributos y relaciones, y cómo interactúan entre sí.

5. Diseño basado en eventos: Se utilizan eventos para modelar los cambios en el estado de las entidades y para comunicar entre distintas partes del sistema.

6. Desarrollo iterativo e incremental: DDD se enfoca en desarrollar el modelo del dominio de forma iterativa e incremental, lo que permite una mayor flexibilidad y adaptación a los cambios en el negocio.

7. Arquitectura basada en servicios: DDD se integra con arquitecturas basadas en servicios para permitir la escalabilidad y el desacoplamiento de los componentes.

8. Testing automatizado: DDD promueve el uso de pruebas automatizadas para asegurar la calidad del software y su conformidad con el modelo del dominio.`
            }
        ]
    });

    // TODO: load chat history from server

    return (
        <div className="w-3/4 h-screen py-7 ml-2 relative">
            <ChatHeader chat={chat} />

            <div className="w-full py-28 pr-3 flex flex-col gap-5 max-h-full overflow-scroll">
                {
                    chat.conversation.map((message) => (
                        <Message key={message.id} message={message} />
                    ))
                }
            </div>

            <div className="w-full flex absolute bottom-0 left-0 py-5 px-5 bg-white shadow-lg">
                <div className="flex gap-5">
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-smile"></i>
                    </button>
                    <button
                        type="button"
                    >
                        <i className="fa-regular fa-paperclip"></i>
                    </button>
                </div>
                <div className="flex-grow">
                    <input
                        type="text"
                        className="w-full h-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Type your message..."
                    />
                </div>
            </div>
        </div>
    );
}

export { Chat };