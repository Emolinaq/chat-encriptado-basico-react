# Encriptador de Mensajes 🔐

¡Bienvenido al **Encriptador de Mensajes**! Esta es una aplicación web que permite a los usuarios enviar mensajes encriptados en un chat en tiempo real. Los mensajes pueden ser encriptados y desencriptados usando una clave secreta, lo que garantiza la privacidad de las conversaciones.

## Características Principales ✨

- **Encriptación de Mensajes:** Los mensajes se encriptan antes de ser enviados y se desencriptan al recibirlos.
- **Interfaz Amigable:** Diseño simple y fácil de usar.
- **Notificaciones:** Recibe notificaciones cuando llegan nuevos mensajes.
- **Persistencia de Mensajes:** Los mensajes se guardan en `localStorage` temporalmente.
- **Eliminación de Mensajes:** Permite eliminar mensajes individualmente.

## Tecnologías Utilizadas 🛠️

- **Frontend:** React.js, Material-UI.
- **Encriptación:** `crypto-js` para encriptación AES.
- **Estilos:** CSS puro.
- **Gestión de Estado:** React Hooks (`useState`, `useEffect`, `useRef`).

---

## Cómo Configurar el Proyecto 🚀

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/encriptador-de-mensajes.git
   cd encriptador-de-mensajes

2. **Instala las dependencias::**

   ```bash
   npm install
    # o
   yarn install

3. **Configura las variables de entorno:**

    Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

    ```bash
    REACT_APP_SECRET_KEY=tu_clave_secreta
    REACT_APP_KEY_VI=tu_vector_de_inicializacion

Nota: Asegúrate de no subir este archivo al repositorio (está incluido en .gitignore).

4. **Inicia la aplicación:**

    ```bash
    npm start
    # o
    yarn start
    
La aplicación estará disponible en http://localhost:3000.

### Cómo Usar la Aplicación 💻 
Ingresa tu nombre de usuario: Escribe tu nombre en el campo correspondiente.

Envía mensajes: Escribe tu mensaje en el campo de texto y haz clic en "Enviar".

Encriptación: Activa o desactiva la encriptación usando el interruptor.

Elimina mensajes: Haz clic en el botón "Eliminar" para borrar un mensaje específico.

## Próximas Mejoras 🚧

Encriptación de Extremo a Extremo (E2EE): Implementar un sistema donde solo los usuarios autorizados puedan desencriptar los mensajes.

Claves Dinámicas: Permitir a los usuarios ingresar su propia clave de encriptación.

Indicador de Encriptación: Mostrar un ícono o mensaje que indique claramente si un mensaje está encriptado.

Modo Oscuro: Agregar soporte para modo oscuro.


## Licencia 📄

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](https://chat.deepseek.com/a/chat/s/LICENSE) para más detalles.

## Contribuir 🤝

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una rama para tu feature o corrección: git checkout -b nombre-de-tu-feature.

Realiza tus cambios y haz commit: git commit -m "Añade nueva funcionalidad".

Sube tus cambios: git push origin nombre-de-tu-feature.

Abre un Pull Request y describe tus cambios.

## Estructura del Proyecto 📂

    ```bash
    encriptador-de-mensajes/
    ├── public/                  # Archivos públicos (HTML, imágenes, etc.)
    ├── src/                     # Código fuente de la aplicación
    │   ├── components/          # Componentes de React
    │   │   ├── MessageList.jsx  # Lista de mensajes
    │   │   ├── MessageInput.jsx # Entrada de mensajes
    │   │   └── EncryptionToggle.jsx # Interruptor de encriptación
    │   ├── utils/               # Utilidades (encriptación, sanitización)
    │   ├── App.js               # Componente principal
    │   ├── index.js             # Punto de entrada de la aplicación
    │   └── styles.css           # Estilos globales
    ├── .env.example             # Ejemplo de archivo de entorno
    ├── .gitignore               # Archivos ignorados por Git
    ├── package.json             # Dependencias y scripts
    └── README.md                # Este archivo

