console.log(gameObject());

function gameObject() {
  const homePlayers = {
    "Alan Anderson": {
      "number": 0,
      "shoe": 16,
      "points": 22,
      "rebounds": 12,
      "assists": 12,
      "steals": 3,
      "blocks": 1,
      "slamDunks": 1
    },
    "Reggie Evans": {
      "number": 30,
      "shoe": 14,
      "points": 12,
      "rebounds": 12,
      "assists": 12,
      "steals": 12,
      "blocks": 12,
      "slamDunks": 7
    },
    "Brook Lopez": {
      "number": 11,
      "shoe": 17,
      "points": 17,
      "rebounds": 19,
      "assists": 10,
      "steals": 3,
      "blocks": 1,
      "slamDunks": 15
    },
    "Mason Plumlee": {
      "number": 1,
      "shoe": 19,
      "points": 26,
      "rebounds": 12,
      "assists": 6,
      "steals": 3,
      "blocks": 8,
      "slamDunks": 5
    },
    "Jason Terry": {
      "number": 31,
      "shoe": 15,
      "points": 19,
      "rebounds": 2,
      "assists": 2,
      "steals": 4,
      "blocks": 11,
      "slamDunks": 1

    }
  }
  const awayPlayers = {
    "Jeff Adrien": {
      "number": 4,
      "shoe": 18,
      "points": 10,
      "rebounds": 1,
      "assists": 1,
      "steals": 2,
      "blocks": 7,
      "slamDunks": 2
    },
    "Bismak Biyombo": {
      "number": 0,
      "shoe": 16,
      "points": 12,
      "rebounds": 4,
      "assists": 7,
      "steals": 7,
      "blocks": 15,
      "slamDunks": 10
    },
    "DeSagna Diop": {
      "number": 2,
      "shoe": 14,
      "points": 24,
      "rebounds": 12,
      "assists": 12,
      "steals": 4,
      "blocks": 5,
      "slamDunks": 5
    },
    "Ben Gordon": {
      "number": 8,
      "shoe": 15,
      "points": 33,
      "rebounds": 3,
      "assists": 2,
      "steals": 1,
      "blocks": 1,
      "slamDunks": 0
    },
    "Brendan Haywood": {
      "number": 33,
      "shoe": 15,
      "points": 6,
      "rebounds": 12,
      "assists": 12,
      "steals": 22,
      "blocks": 5,
      "slamDunks": 12
    }
  }
  const homeData = {
    "teamName": "Brooklyn Nets",
    "colors": ["Black", "White"],
    "players": homePlayers
  }
  const awayData = {
    "teamName": "Charlotte Hornets",
    "colors": ["Turquoise", "Purple"],
    "players": awayPlayers
  }
  const gameData = {
    "home": homeData,
    "away": awayData
  }
  return gameData;
}

function numPointsScored(playerName) {
  const game = gameObject();
  const team = Object.keys(game.home.players).includes(playerName) ? "home" : "away";
  const teamData = game[team];
  const playerData = teamData.players[playerName];
  const playerPoints = playerData.points;
  return playerPoints;
}

console.log(numPointsScored("Jason Terry"), ' should equal 19');
console.log(numPointsScored("Bismak Biyombo"), 'should equal 12');

function shoeSize(playerName) {
  const game = gameObject();
  const team = Object.keys(game.home.players).includes(playerName) ? "home" : "away";
  const teamData = game[team];
  const playerData = teamData.players[playerName];
  const playerShoeSize = playerData.shoe;
  return playerShoeSize;
}

console.log(shoeSize("Brook Lopez"), 'should equal 17');


function teamColors(teamName) {
  const game = gameObject();
  const team = game.home.teamName === teamName ? "home" : "away";
  const colors = game[team].colors;
  return colors;
}

console.log(teamColors("Brooklyn Nets"), 'should equal [Black, White]');

// Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames(game){
  const teamNames = [
    game.home.teamName,
    game.away.teamName
  ]
  return teamNames;
}

console.log(teamNames(gameObject()), 'should equal [Brooklyn Nets, Charlotte Hornets]');
function playerNumbers(teamName){
  const game = gameObject();
  const team = game.home.teamName === teamName ? "home" : "away";
  const players = game[team].players;
  const jerseyNumbers = [];
  for (player in players){
    jerseyNumbers.push(players[player].number)
  } 
  return jerseyNumbers;
}

console.log(playerNumbers("Brooklyn Nets"), "should equal [0, 30, 11, 1, 31]");

function playerStats(playerName){
  const game = gameObject();
  const team = Object.keys(game.home.players).includes(playerName) ? "home" : "away";
  const teamData = game[team];
  const playerData = teamData.players[playerName];
  return playerData;
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds(){
  const game = gameObject();;
  const playersWithShoeSizes = getPlayerShoeSizes(game);
  const playerName = getPlayerWithLargestShoeSize(playersWithShoeSizes);
  const team = Object.keys(game.home.players).includes(playerName) ? "home" : "away";
  const teamData = game[team];
  const playerData = teamData.players[playerName];
  const rebounds = playerData.rebounds;
  return rebounds;
}

function getPlayerShoeSizes(game){
  const playersWithShoeSizes = {};
  const players = {...game.home.players, ...game.away.players};
  for (player in players){
    playersWithShoeSizes[player] = players[player].shoe;
  }
  return playersWithShoeSizes;
}

function getPlayerWithLargestShoeSize(playersWithShoeSizes){
  let maxShoeSize = 0;
  let playerWithMaxShoeSize;
  for (player in playersWithShoeSizes){
    const shoeSize = playersWithShoeSizes[player];
    if (shoeSize > maxShoeSize) {
       maxShoeSize = shoeSize;
       playerWithMaxShoeSize = player;
    }
  }
  return playerWithMaxShoeSize;
}


console.log(bigShoeRebounds());
