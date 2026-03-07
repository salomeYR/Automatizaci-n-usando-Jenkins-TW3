# IUDigital - Gestión de Proyectos Académicos

Este proyecto es una solución para la administración de asesorías académicas, dividida en un arquitectura de **Monolito** y un **Microservicio** desacoplado.

## Arquitectura
- **Monolito (Puerto 4000):** Gestiona Clientes, Universidades, Etapas y Tipos de Proyecto.
- **Microservicio (Puerto 4001):** Gestiona exclusivamente los Proyectos (Módulo de alta demanda).
- **Base de Datos:** MongoDB Atlas (Cloud).

## Requisitos
- Node.js v20+
- Docker & Docker Compose (para despliegue en contenedores)

## Ejecución Local
1. Clonar el repositorio.
2. Configurar los archivos `.env` en `/monolito` y `/microservicio-proyectos` con tu URI de MongoDB Atlas.
3. Instalar dependencias:
   ```bash
   cd monolito && npm install
   cd ../microservicio-proyectos && npm install
   ```
4. Correr con: `npm run dev`

## Docker
Para correr toda la infraestructura:
```bash
docker compose up --build
```
