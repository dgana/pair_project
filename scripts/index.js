"use strict"

const db = require('../models');

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

function addDummies() {
  db.Players.create(
    {strength: 10, constitution: 10}
  ).then(function (data) {
    console.log(`Added ${data} to your Player's database...`);
  }).catch(function (err) {
    console.log(err.message);
  });
}

function setStartJob(string) {
  db.Players.findOne().then(function (find) {
    find.update({
      job: string
    })
  })
}

var k = 1;
var j = 1;

function updateStatus(stringArr) {
  db.Players.findOne().then(function (find) {
    for (let i = 0; i < stringArr.length; i++) {
      let str = find.strength+1;
      let con = find.constitution+1;
      if (stringArr[i].toLowerCase() == "str") {
        find.update({
          strength: str
        })
        console.log("STR: " + find.strength);
      }
      else if (stringArr[i].toLowerCase() == "con") {
        find.update({
          constitution: con
        })
        console.log("CON: " + find.constitution);
      }
      if(k + j === stringArr.length + 2) {
        k = 1;
        j = 1;
      }
    }
  })
}
  //   if (stringArr[i].toLowerCase() == "con") {
  //     db.Players.findOne().then(function (find) {
  //       find.update({
  //         constitution: j++
  //       })
  //       console.log("CON: " + find.constitution);
  //     })
  //     j = 1;
  //   }
  //   else if (stringArr[i].toLowerCase() == "int") {
  //     db.Players.findOne().then(function (find) {
  //       // find.update({
  //       //   intelligence: i++
  //       // })
  //     })
  //   }
  //   else if (stringArr[i].toLowerCase() == "spr") {
  //     db.Players.findOne().then(function (find) {
  //       // find.update({
  //       //   spirit: i++
  //       // })
  //     })
  //   }
  //   else if (stringArr[i].toLowerCase() == "dex") {
  //     db.Players.findOne().then(function (find) {
  //       // find.update({
  //       //   dexterity: i++
  //       // })
  //     })
  //   }
//   }
// }

function assignJob () {
  db.Players.findAll({raw:true}).then(function (find) {
    console.log(find.job);
    if(find.job.toLowerCase() == "swordman") {
      jobSwordman(find);
    }
    else if(find.job.toLowerCase() == "wizard") {
      jobWizard(find);
    }
    else if(find.job.toLowerCase() == "archer") {
      jobArcher(find);
    }
  })
}

function jobSwordman (player) {
  db.Players.findOne().then(function (find) {
    for (let j = 0; j < classSwordman.length; j++) {
      if(find.strength >= classSwordman[j].str && find.constitution >= classSwordman[j].con) {
        find.update({
          job: classSwordman[j].name
        })
      }
    }
  })
  console.log(player);
}

function jobWizard (player) {
  db.Players.findOne().then(function (find) {
    for (let j = 0; j < classWizard.length; j++) {
      if(find.intelligence >= classWizard[j].int && find.spirit >= classWizard[j].spr) {
        find.update({
          job: classWizard[j].name
        })
      }
    }
  })
  console.log(player);
}

function jobArcher (player) {
  db.Players.findOne().then(function (find) {
    for (let j = 0; j < classArcher.length; j++) {
      if(find.strength >= classArcher[j].str && find.dexterity >= classArcher[j].dex) {
        find.update({
          job: classArcher[j].name
        })
      }
    }
  })
  console.log(player);
}

// View
function help() {
  let showArr = ["$ node todo.js help", "$ node todo.js dummy", "$ node todo.js job", "$ node todo.js set"];
  console.log(showArr.join("\n"));
}

// Controller
function run(param) {
  switch (param[0]) {
    case "help":
      help();
      break;
    case "dummy":
      addDummies();
      break;
    case "set":
      setStartJob(param[1]);
      break;
    case "update":
      updateStatus(["str","str","str","str","str",
      "str","str","str","str","str",
      "str","str","str","str","str",
      "con","con","con","con","con",
      "con","con","con","con","con"]);
      break;
    case "job":
      assignJob();
      break;
    default:
      console.log("Please input correct command.");
      break;
  }
}

// Driver code
let argv = process.argv.slice(2, process.argv.length);
run(argv);
