# Gestor de tasques - API REST

API REST feta amb Node.js, Express, MongoDB i Mongoose per gestionar tasques.

## Estructura del projecte

- `models/Task.js`: esquema i model de les tasques.
- `controllers/taskController.js`: funcions per crear, consultar, actualitzar i eliminar tasques.
- `routes/taskRoutes.js`: rutes de l'API.
- `app.js`: configuració d'Express i middleware.
- `index.js`: connexió amb MongoDB i inici del servidor.

## Requisits

- Node.js i npm.
- MongoDB en funcionament.

## Rutes de l'API

| Mètode | Ruta | Descripció |
|---|---|---|
| POST | `/api/tasks` | Crear una tasca |
| GET | `/api/tasks` | Obtenir totes les tasques |
| GET | `/api/tasks/:id` | Obtenir una tasca pel seu ID |
| PUT | `/api/tasks/:id` | Actualitzar una tasca |
| DELETE | `/api/tasks/:id` | Eliminar una tasca |
