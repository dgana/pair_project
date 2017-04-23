"use strict"

const db = require('../models');
const express = require('express');
const path = require('path');
const app = express();ß

// Models
let classSwordman = [
  { name: 'Swordman', str: 10, con: 10, int: 5, spr: 5, dex: 5, complete: 1},
  { name: 'Highlander', str: 20, con: 10, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Peltasta', str: 10, con: 20, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Hoplite', str: 20, con: 40, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Barbarian', str: 40, con: 20, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Corsair', str: 60, con: 30, int: 5, spr: 5, dex: 5, complete: 0},
  { name: 'Squire', str: 30, con: 60, int: 5, spr: 5, dex: 5, complete: 0}
];
let classWizard = [
  { name: 'Wizard', str: 5, con: 5, int: 10, spr: 10, dex: 5, complete: 1},
  { name: 'Pyromancer', str: 5, con: 5, int: 20, spr: 10, dex: 5, complete: 0},
  { name: 'Cryomancer', str: 5, con: 5, int: 10, spr: 20, dex: 5, complete: 0},
  { name: 'Necromancer', str: 5, con: 5, int: 20, spr: 40, dex: 5, complete: 0},
  { name: 'Alchemist', str: 5, con: 5, int: 40, spr: 20, dex: 5, complete: 0},
  { name: 'Chronomancer', str: 5, con: 5, int: 60, spr: 30, dex: 5, complete: 0},
  { name: 'Sorcerer', str: 5, con: 5, int: 30, spr: 60, dex: 5, complete: 0}
];
let classArcher = [
  { name: 'Archer', str: 10, con: 5, int: 5, spr: 5, dex: 10, complete: 1},
  { name: 'Sapper', str: 10, con: 5, int: 5, spr: 5, dex: 20, complete: 0},
  { name: 'Hunter', str: 20, con: 5, int: 5, spr: 5, dex: 10, complete: 0},
  { name: 'Wugushi', str: 20, con: 5, int: 5, spr: 5, dex: 40, complete: 0},
  { name: 'Scout', str: 40, con: 5, int: 5, spr: 5, dex: 20, complete: 0},
  { name: 'Rogue', str: 30, con: 5, int: 5, spr: 5, dex: 60, complete: 0},
  { name: 'Fletcher', str: 60, con: 5, int: 5, spr: 5, dex: 30, complete: 0}
];

// Add Player
function add(string) {
  db.Players.create().then(function (find) {
    if (string === "Swordman") {
      find.update({
        job: string,
        strength: 10,
        constitution: 10,
        intelligence: 5,
        spirit: 5,
        dexterity: 5
      })
    }
    else if (string === "Wizard") {
      find.update({
        job: string,
        strength: 5,
        constitution: 5,
        intelligence: 10,
        spirit: 10,
        dexterity: 5
      })
    }
    else if (string === "Archer") {
      find.update({
        job: string,
        strength: 10,
        constitution: 5,
        intelligence: 5,
        spirit: 5,
        dexterity: 10
      })
    }
    console.log(find.dataValues);
  });
}

// Delete Player
function deleted() {
  db.Players.findAll().then(function (find) {
    find.forEach(function (data) {
      data.destroy();
    })
  })
}

// Reset Player Status
function resetStatus(string) {
  db.Players.findAll().then(function (find) {
    find.forEach(function (data) {
      data.destroy();
    })
  }).then(function () {
    if (string === "Swordsman") {
      db.Players.update({
        job: string,
        strength: 10,
        constitution: 10,
        intelligence: 5,
        spirit: 5,
        dexterity: 5
      }).then(function (data) {
        res.redirect('/main');
      })
    } else if (string === "Wizard") {
      db.Players.update({
        job: string,
        strength: 10,
        constitution: 10,
        intelligence: 5,
        spirit: 5,
        dexterity: 5
      }).then(function () {
        res.redirect('/main');
      })
    } else if (string === "Archer") {
      db.Players.update({
        job: string,
        strength: 10,
        constitution: 5,
        intelligence: 5,
        spirit: 5,
        dexterity: 10
      }).then(function () {
        res.redirect('/main');
      })
    }
    // db.Players.create().then(function (find) {
    //   if (string === "Swordman") {
    //     find.update({
    //       job: string,
    //       strength: 10,
    //       constitution: 10,
    //       intelligence: 5,
    //       spirit: 5,
    //       dexterity: 5
    //     })
    //   }
    //   else if (string === "Wizard") {
    //     find.update({
    //       job: string,
    //       strength: 5,
    //       constitution: 5,
    //       intelligence: 10,
    //       spirit: 10,
    //       dexterity: 5
    //     })
    //   }
    //   else if (string === "Archer") {
    //     find.update({
    //       job: string,
    //       strength: 10,
    //       constitution: 5,
    //       intelligence: 5,
    //       spirit: 5,
    //       dexterity: 10
    //     })
    //   }
    // });
  })
}

// Update Player Status
function updateStatus(stringArr) {
  db.Players.findOne().then(function (find) {
    for (let i = 0; i < stringArr.length; i++) {
      let str = find.strength+1;
      let con = find.constitution+1;
      let int = find.intelligence+1;
      let spr = find.spirit+1;
      let dex = find.dexterity+1;
      if (stringArr[i].toLowerCase() == "str") {
        find.update({
          strength: str
        })
      }
      else if (stringArr[i].toLowerCase() == "con") {
        find.update({
          constitution: con
        })
      }
      else if (stringArr[i].toLowerCase() == "int") {
        find.update({
          intelligence: int
        })
      }
      else if (stringArr[i].toLowerCase() == "spr") {
        find.update({
          spirit: spr
        })
      }
      else if (stringArr[i].toLowerCase() == "dex") {
        find.update({
          dexterity: dex
        })
      }
    }
    if(find.dataValues.job == classSwordman[0].name || find.dataValues.job == classSwordman[1].name || find.dataValues.job == classSwordman[2].name || find.dataValues.job == classSwordman[3].name || find.dataValues.job == classSwordman[4].name || find.dataValues.job == classSwordman[5].name || find.dataValues.job == classSwordman[6].name) {
      jobSwordman(find);
    }
    else if(find.dataValues.job == classWizard[0].name || find.dataValues.job == classWizard[1].name || find.dataValues.job == classWizard[2].name || find.dataValues.job == classWizard[3].name || find.dataValues.job == classWizard[4].name || find.dataValues.job == classWizard[5].name || find.dataValues.job == classWizard[6].name) {
      jobWizard(find);
    }
    else if(find.dataValues.job == classArcher[0].name || find.dataValues.job == classArcher[1].name || find.dataValues.job == classArcher[2].name || find.dataValues.job == classArcher[3].name || find.dataValues.job == classArcher[4].name || find.dataValues.job == classArcher[5].name || find.dataValues.job == classArcher[6].name) {
      jobArcher(find);
    }
  })
}

function jobSwordman (find) {
  for (let j = 0; j < classSwordman.length; j++) {
    if(find.dataValues.strength >= classSwordman[j].str && find.dataValues.constitution >= classSwordman[j].con) {
      find.update({
        job: classSwordman[j].name
      })
    }
  }
  console.log(find.dataValues);
}

function jobWizard (find) {
  for (let j = 0; j < classWizard.length; j++) {
    if(find.dataValues.intelligence >= classWizard[j].int && find.dataValues.spirit >= classWizard[j].spr) {
      find.update({
        job: classWizard[j].name
      })
    }
  }
  console.log(find.dataValues);
}

function jobArcher (find) {
  for (let j = 0; j < classArcher.length; j++) {
    if(find.dataValues.strength >= classArcher[j].str && find.dataValues.dexterity >= classArcher[j].dex) {
      find.update({
        job: classArcher[j].name
      })
    }
  }
  console.log(find.dataValues);
}

// View
function help() {
  let showArr = ["$ node todo.js help", "$ node todo.js add", "$ node todo.js reset", "$ node todo.js delete", "$ node todo.js update", "$ node todo.js show"];
  console.log(showArr.join("\n"));
}

function show() {
  db.Players.findOne().then(function (find) {
    console.log(find.dataValues);
  }).catch(function (err) {
    console.log(err.message);
  })
}

// Controller
function run(param) {
  switch (param[0]) {
    case "help":
      help();
      break;
    case "create":
      add(param[1]);
      break;
    case "reset":
      resetStatus(param[1]);
      break;
    case "update":
      updateStatus(["str","str","str","str","str",
      "str","str","str","str","str",
      "str","str","str","str","str",
      "con","con","con","con","con",
      "con","con","con","con","con"]);
      break;
    case "delete":
      deleted();
      break;
    case "show":
      show();
      break;
    default:
      console.log("Please input correct command.");
      break;
  }
}

// Driver code
let argv = process.argv.slice(2, process.argv.length);
run(argv);
