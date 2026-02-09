const form = document.getElementById('controls');
const leagueSelect = document.getElementById('league-select');
const seasonSelect = document.getElementById('season-select');
const resultsContainer = document.getElementById('results');

// once the button gets click, we will run this function
function handleSubmit(e) {
  e.preventDefault(); // without this, after button gets clicked, page will immediately refresh

  const league = leagueSelect.value;
  const season = seasonSelect.value;

  console.log('Selected league:', league);
  console.log('Selected season:', season);

  resultsContainer.innerHTML = '';

  renderStandings(mockStandings);
  renderTopScorers(mockScorers);
}

form.addEventListener('submit', handleSubmit);

// ---------------- RENDERERS ----------------

function renderStandings(standings) {
  const section = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = 'Standings';
  section.appendChild(title);

  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  ['Position', 'Team', 'Points'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  standings.forEach(team => {
    const row = document.createElement('tr');

    const posCell = document.createElement('td');
    posCell.textContent = team.position;

    const nameCell = document.createElement('td');
    nameCell.textContent = team.name;

    const pointsCell = document.createElement('td');
    pointsCell.textContent = team.points;

    row.appendChild(posCell);
    row.appendChild(nameCell);
    row.appendChild(pointsCell);

    table.appendChild(row);
  });

  section.appendChild(table);
  resultsContainer.appendChild(section);
}

function renderTopScorers(players) {
  const section = document.createElement('div');

  const title = document.createElement('h2');
  title.textContent = 'Top Scorers';
  section.appendChild(title);

  const table = document.createElement('table');
  const headerRow = document.createElement('tr');

  ['Player', 'Team', 'Goals'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  players.forEach(player => {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = player.name;

    const teamCell = document.createElement('td');
    teamCell.textContent = player.team;

    const goalsCell = document.createElement('td');
    goalsCell.textContent = player.goals;

    row.appendChild(nameCell);
    row.appendChild(teamCell);
    row.appendChild(goalsCell);

    table.appendChild(row);
  });

  section.appendChild(table);
  resultsContainer.appendChild(section);
}

// ---------------- MOCK DATA ----------------

const mockStandings = [
  { position: 1, name: 'Team A', points: 82 },
  { position: 2, name: 'Team B', points: 78 },
  { position: 3, name: 'Team C', points: 71 }
];

const mockScorers = [
  { name: 'Player One', team: 'Team A', goals: 22 },
  { name: 'Player Two', team: 'Team B', goals: 19 },
  { name: 'Player Three', team: 'Team C', goals: 17 }
];
