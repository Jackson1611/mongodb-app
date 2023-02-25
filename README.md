# Movie API

This is a RESTful API for managing movies. It was built using Node.js, Express, and MongoDB.

## Getting Started

To run this project, you need to have Node.js and MongoDB installed on your machine.

1. Clone this repository.
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string:
MONGO_URI=your-mongodb-connection-string-here
4. Start the server: `npm start`

## Endpoints

### GET /movies

Fetch all movies.

**Response:**

```json
[
{
 "_id": "6102711b9f53c2f22a1186e2",
 "title": "Bohemian Rhapsody",
 "director": "Bryan Singer",
 "year": "2018",
 "__v": 0
},

]
```
### POST /movies
Request body:
```json
{
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont",
  "year": "1994"
}

```
Response:

```json
{
  "newMovie": {
    "_id": "61027847a674810ebd244b8c",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": "1994",
    "__v": 0
  }
}
```
### DELETE /movies
Delete a movie by title.
Request body:
```json
{
  "title": "The Shawshank Redemption"
}
```
Response:

```json
{
  "n": 1,
  "ok": 1,
  "deletedCount": 1
}
```
### PUT /movies/:id
Update a movie by ID.
Request parameters:

id: The ID of the movie to update.
Request body:
```json
{
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont",
  "year": "1994"
}

```
Response:

```json
{
  "result": {
    "_id": "61027847a674810ebd244b8c",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": "1994",
    "__v": 0
  }
}

```
