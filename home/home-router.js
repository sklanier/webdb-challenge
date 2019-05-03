const router = require("express").Router();

const knex = require("knex");

const knexConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  connection: {
    filename: "./dev.sqlite3"
  }
};

const db = knex(knexConfig);

//check
// router.get('/', (req, res) => {
//     res.send('Hello World!')
// });

//check
router.get("/", (req, res) => {
  db("home")
    .then(home)=> {
      res.status(200).json(home);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//check
router.post("/", async (req, res) => {
  try {
    const home = await db("home").insert(req.body);
    res.status(201).json(home);
  } catch (error) {
    res.status(500).json({ error: "Derrrrrp" });
  }
});

//check
router.get("/project/:id", (req, res) => {
  const { id } = req.params;
  db("home")
    .where({ id: id })
    .first()
    .then(home => {
      db("actions")
        .where({ person_id: id })
        .then(actions => {
          home.actions = actions;
          return res.status(200).json(projects);
        });
    })
    .catch(err => {
      res.status(500).json({ Error: "There was an error" });
    });
});

module.exports = router;