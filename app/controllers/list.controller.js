const db = require("../models");
const List = db.lists;
const Op = db.Sequelize.Op;

// Create and Save a new List
exports.create = (req, res) => {
  // Validate request
  if (!req.body.alias) {
    res.json({
      error: "Alias required."
    });
    return;
  }

  // TO-DO: Validate alias

  // Create a List
  const list = {
    alias: req.body.alias,
  };

  // Save List in the database
  List.create(list)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the List."
      });
    });
};

// Check if list with alias already exists
exports.checkAlias = (req, res) => {
  const alias = req.params.alias;

  // TO-DO: Validate alias

  List.findOne({ where: { alias: alias } })
    .then(data => {
      if (data === null) {
        res.send({
          available: true,
          message: "That alias is available.",
        });
      } else {
        res.send({
          available: false,
          message: "That alias is already taken.",
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error checking for List with alias=" + alias
      });
    });
};

// // Get a list with tasks
// exports.getListWithTasksByAlias = (req, res) => {
//   const alias = req.params.alias;

//   List.findOne({ where: { alias: alias } }, { include: "tasks" })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving List with id=" + id
//       });
//     });
// };

// Retrieve all Lists from the database.
exports.findAll = (req, res) => {
  const list = req.query.list;
  var condition = list ? { list: { [Op.like]: `%${list}%` } } : null;

  List.findAll({ where: condition })
    .then(data => {
      const sortedLists = data.sort((t1, t2) => new Date(t1.dueDate).getTime() > new Date(t2.dueDate).getTime());
      res.send(sortedLists);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving lists."
      });
    });
};

// Find a single List by its alias
exports.findOne = (req, res) => {
  const alias = req.params.alias;

  List.findOne({ where: { alias: alias }, include: ["tasks"] })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving List with alias=" + alias
      });
    });
};

// Update a List by the alias in the request
exports.update = (req, res) => {
  const alias = req.params.alias;

  List.update(req.body, {
    where: { alias: alias }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "List was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update List with alias=${alias}. Maybe List was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating List with alias=" + alias
      });
    });
};

// Delete a List with the specified alias in the request
exports.delete = (req, res) => {
  const alias = req.params.alias;

  List.destroy({
    where: { alias: alias }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "List was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete List with alias=${alias}. Maybe List was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete List with alias=" + alias
      });
    });
};

// // Find a single List with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   List.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving List with id=" + id
//       });
//     });
// };

// // Update a List by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   List.update(req.body, {
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "List was updated successfully."
//         });
//       } else {
//         res.send({
//           message: `Cannot update List with id=${id}. Maybe List was not found or req.body is empty!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error updating List with id=" + id
//       });
//     });
// };

// // Delete a List with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   List.destroy({
//     where: { id: id }
//   })
//     .then(num => {
//       if (num == 1) {
//         res.send({
//           message: "List was deleted successfully!"
//         });
//       } else {
//         res.send({
//           message: `Cannot delete List with id=${id}. Maybe List was not found!`
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Could not delete List with id=" + id
//       });
//     });
// };

// Delete all Lists from the database.
exports.deleteAll = (req, res) => {
  List.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} lists were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all lists."
      });
    });
};
