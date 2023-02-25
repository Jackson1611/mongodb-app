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
// more movies...
]

##POST /movies
Add a movie.

#Request body:
{
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont",
  "year": "1994"
}
#Sure, here's an example readme file with markdown syntax that you can copy and paste:

csharp
Copy code
# Movie API

This is a RESTful API for managing movies. It was built using Node.js, Express, and MongoDB.

## Getting Started

To run this project, you need to have Node.js and MongoDB installed on your machine.

1. Clone this repository.
2. Install dependencies: `npm install`
3. Create a `.env` file with your MongoDB connection string:
MONGO_URI=your-mongodb-connection-string-here

sql
Copy code
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
// more movies...
]
POST /movies
Add a movie.

Request body:

json
Copy code
{
  "title": "The Shawshank Redemption",
  "director": "Frank Darabont",
  "year": "1994"
}
Response:
{
  "newMovie": {
    "_id": "61027847a674810ebd244b8c",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "year": "1994",
    "__v": 0
  }
}
