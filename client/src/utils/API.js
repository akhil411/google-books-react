import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/db");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    
    return axios.post("/api/books", bookData);
  },
  searchBook: function(query) {
    console.log(query)
    return axios.get("/api/books", { params: { q: query } });
  }
};
