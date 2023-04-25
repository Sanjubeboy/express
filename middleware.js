const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("FIND PAGE");
});

// let listitem = [
//   {
//     id: 1,
//     name: "Akshith",
//   },

//   {
//     id: 2,
//     name: "sanjay",
//   },

//   {
//     id: 3,
//     name: "kumar",
//   },

//   {
//     id: 4,
//     name: "kousik",
//   }
// ];

// router.get("/:id", (request, response) => {
//   const id = Number(request.params.id);

//   const output = listitem.find((items) => items.id === id);

//   if (output) response.json(output.name);
//   else response.status(500).send("Unknown Error!");
// }); 

const middle = (req, res, next, id) => {
//   req.message = "Hii this is middleware!!"
  // req.details = {}
  next()
}

router.route('/:uid')




  
  .get(middle,(request , response) => {
    // console.log(request.details.name)
    // response.send(`Get method on user page with id ${request.params.id} with name ${request.user.name}`)
    response.send(request.details)
    // response.send(request.message)
  })
  
  .put((request , response) => {
    console.log(request.user)
    response.send(`Put method on user page with id ${request.params.id}`)
  })
  
  .delete((request , response) => {
    console.log(request.user)
    response.send(`Delete method on user page with id ${request.params.id}`)
  })
  




const users = [
  {
    name:'Web Development',
    salary:200000
  },
  {
    name:'App Development',
    salary:400000
  },
  {
    name:'Software Development',
    salary:8000000
  },
  {
    name:'Influencer',
    salary:1000000
  }
]




//middleware executes between request and response.
router.param("uid", (request , response, next, userid) => {
  console.log(request.params.id)
  request.details = users[userid]
  next()
})


module.exports = router;  