import axios from "axios";

export default {
  // Gets all books
  getDrawings: function() {
    return axios.get("/drawings");
  },
  // Gets the book with the given id
  getDrawing: function(id) {
    return axios.get("/drawing" + id);
  },
  // Deletes the book with the given id
  deleteDrawing: function(id) {
    return axios.delete("/drawings/" + id);
  },
  // Saves a book to the database
  saveDrawing: function(drawingData) {
    return axios.post("/drawings", drawingData);
  }
};
