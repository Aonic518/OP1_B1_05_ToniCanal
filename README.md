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

## Instal·lació i arrencada

1. Instal·la les dependències:

   ```bash
   npm install
   ```

2. Crea el fitxer `.env` fent una còpia de `.env.example`.

3. Comprova que el fitxer `.env` contingui:

   ```env
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
   ```

4. Inicia MongoDB.

5. Arrenca el servidor:

   ```bash
   npm run dev
   ```

El servidor estarà disponible a `http://localhost:3000`.

## Rutes de l'API

| Mètode | Ruta | Descripció |
|---|---|---|
| POST | `/api/tasks` | Crear una tasca |
| GET | `/api/tasks` | Obtenir totes les tasques |
| GET | `/api/tasks/:id` | Obtenir una tasca pel seu ID |
| PUT | `/api/tasks/:id` | Actualitzar una tasca |
| DELETE | `/api/tasks/:id` | Eliminar una tasca |

## Camps de la tasca

- `title`: obligatori.
- `description`: opcional.
- `cost`: obligatori i no pot ser negatiu.
- `hours_estimated`: obligatori i no pot ser negatiu.
- `hours_real`: opcional i no pot ser negatiu.
- `image`: opcional.
- `completed`: booleà, per defecte `false`.
- `finished_at`: es genera quan `completed` és `true`; torna a `null` quan passa a `false`.
- `createdAt`: data de creació generada automàticament.

## Exemple de POST

Envia una petició POST a `http://localhost:3000/api/tasks` amb el cos JSON:

```json
{
  "title": "Dissenyar una pàgina web",
  "description": "Crear una pàgina web responsiva",
  "cost": 500,
  "hours_estimated": 20,
  "image": "https://example.com/images/task1.jpg"
}
```

## Postman

Importa el fitxer `postman/gestor-tasques.postman_collection.json` a Postman.

Després de crear una tasca, copia el seu `_id` a la variable `taskId` de la col·lecció. Executa les peticions i desa les respostes amb **Save Response -> Save as example** per completar l'entrega.

## GitHub

No s'han de pujar `node_modules/` ni `.env`. El repositori ha de contenir almenys quatre commits amb missatges descriptius.
