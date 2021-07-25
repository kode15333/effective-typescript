export {};

const csvData = "...";
const rawRows = csvData.split("\n");
const headers = rawRows[0].split(",");

const rows = rawRows.slice(1).map(rowStr => {
    const row: { [column: string]: string } = {};
    rowStr.split(",").forEach((val, j) => {
        row[headers[j]] = val;
    });
    return row;
});

const reduceRows = rawRows
    .slice(1)
    .map(rowStr =>
        rowStr
            .split(",")
            .reduce((row, val, i) => ((row[headers[i]] = val), row), {})
    );

// import _ from 'lodash'

const rowsLodash = rawRows
    .splice(1)
    .map(rowStr => _.zipObject(headers, rowStr.split(",")));

interface BasketballPlayer {
    name: string;
    team: string;
    salary: number;
}

declare const roaster: { [team: string]: BasketballPlayer[] };

let allPlayers: BasketballPlayer[] = [];

for (const players of Object.values(roaster)) {
    allPlayers = allPlayers.concat(players);
}

const allPlayerss = Object.values(roaster).flat();

const teamPlayers: { [team: string]: BasketballPlayer[] } = {};
for (const player of allPlayers) {
    const { team } = player;
    teamToPlayers[team] = teamToPlayer[team] || [];
    teamToPlayers[team].push(player);
}

for (const players of Object.values(teamPlayers)) {
    players.sort((a, b) => b.salary - a.salary);
}

const bestPaid = Object.values(teamToPlayers).map(players => players[0]);
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary);
console.log(bestPaid);

const bestPaid = _(allPlayers)
    .groupBy(player => player.name)
    .mapValues(players => _.maxBy(players, p => p.salary)!)
    .values()
    .sortBy(p => -p.salary)
    .value();

const nameA = allPlayers.map(player => player.name);
const nameB = _.map(allPlayers, player => player.name);
const nameC = _.map(allPlayers, { name });

const salaries = _.map(allPlayers, "salary");
const teams = _.map(allPlayers, "team");
const mix = _.map(allPlayers, Math.random() < 0.5 ? "name" : "salary");
