"use strict"

const db = require('./models');
const fs = require('fs')

let argv = process.argv;
let task = argv[3];

switch (argv[2]) {

  case 'createswordman':
    db.Swordman.bulkCreate([
      { name: 'Swordman', str: 10, con: 10, int: 5, spr: 5, dex: 5, complete: 1},
      { name: 'Highlander', str: 20, con: 10, int: 5, spr: 5, dex: 5, complete: 0 },
      { name: 'Peltasta', str: 10, con: 20, int: 5, spr: 5, dex: 5, complete: 0 },
      { name: 'Hoplite', str: 20, con: 40, int: 5, spr: 5, dex: 5, complete: 0},
      { name: 'Barbarian', str: 40, con: 20, int: 5, spr: 5, dex: 5, complete: 0},
      { name: 'Corsair', str: 60, con: 30, int: 5, spr: 5, dex: 5, complete: 0},
      { name: 'Squire', str: 30, con: 60, int: 5, spr: 5, dex: 5, complete: 0}
    ])
  break;

  case 'createwizard':
    db.Wizard.bulkCreate([
      { name: 'Wizard', str: 5, con: 5, int: 10, spr: 10, dex: 5, complete: 1},
      { name: 'Pyromancer', str: 5, con: 5, int: 20, spr: 10, dex: 5, complete: 0 },
      { name: 'Cryomancer', str: 5, con: 5, int: 10, spr: 20, dex: 5, complete: 0 },
      { name: 'Necromancer', str: 5, con: 5, int: 20, spr: 40, dex: 5, complete: 0},
      { name: 'Alchemist', str: 5, con: 5, int: 40, spr: 20, dex: 5, complete: 0},
      { name: 'Chronomancer', str: 5, con: 5, int: 60, spr: 30, dex: 5, complete: 0},
      { name: 'Sorcerer', str: 5, con: 5, int: 30, spr: 60, dex: 5, complete: 0}
    ])
  break;

  case 'createarcher':
    db.Archer.bulkCreate([
      { name: 'Archer', str: 10, con: 5, int: 5, spr: 5, dex: 10, complete: 1},
      { name: 'Sapper', str: 10, con: 5, int: 5, spr: 5, dex: 20, complete: 0 },
      { name: 'Hunter', str: 20, con: 5, int: 5, spr: 5, dex: 10, complete: 0 },
      { name: 'Wugushi', str: 20, con: 5, int: 5, spr: 5, dex: 40, complete: 0},
      { name: 'Scout', str: 40, con: 5, int: 5, spr: 5, dex: 20, complete: 0},
      { name: 'Rogue', str: 30, con: 5, int: 5, spr: 5, dex: 60, complete: 0},
      { name: 'Fletcher', str: 60, con: 5, int: 5, spr: 5, dex: 30, complete: 0}
    ])
  break;

  case 'list':
    db.Todo.getAllData(function(todo) {
      todo.forEach(function(todo) {
        console.log(todo.id, todo.todo)
      })
    })
  break;

  case 'delete':
    db.Todo.destroy({
      where: {
        id: task
      }
    });
  break;

  case 'complete':
    db.Todo.findById(task).then(function(data){
      data.update({
        complete: 1
      })
    })

  break;

  default:
    console.log('node todo.js add <task_content>\nnode todo.js list\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>')
  break;
}
