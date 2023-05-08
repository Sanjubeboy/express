const express = require('express');

const router = express.Router();

router.get("/", (request, response) => {
  response.send("FIND PAGE");
});

let listitem = [
  {
    id: 1,
    name: "Web Development",
  },

  {
    id: 2,
    name: "Software Development",
  },

  {
    id: 3,
    name: "App Development",
  },

  {
    id: 4,
    name: "Nothing",
  }
];

router.get("/:id", (request, response) => {
  const id = Number(request.params.id);

  const output = listitem.find((items) => items.id === id);

  if (output) response.json(output.name);
  else response.status(500).send("Unknown Error!");
}); 


module.exports = router;  