# Estructura del Proyecto
El proyecto se estructurará en las siguientes secciones:


Interfaz similar a WhatsApp: Diseño simple y amigable.

Encriptación/Desencriptación: El usuario elige si el mensaje se envía encriptado o no.

Algoritmo de Encriptación: Usaremos AES (Advanced Encryption Standard) por su equilibrio entre seguridad y facilidad de implementación.

Historial de Mensajes: Los mensajes enviados y recibidos se mostrarán en una lista.

Responsive Design: Funcionará tanto en web como en móvil.

## Tecnologías:
Frontend: React, CSS (o Tailwind CSS para estilos).

Encriptación: Librería crypto-js para AES.

Estado Global: Puedes usar useState o Context API para manejar el estado de los mensajes.

## Componentes:

MessageList.jsx: Muestra la lista de mensajes enviados y recibidos.

MessageInput.jsx: Campo de texto para escribir mensajes y botón de enviar.

EncryptionToggle.jsx: Botón para activar/desactivar la encriptación.

