const form = document.getElementById('controls');
const leagueSelect = document.getElementById('league-select');
const seasonSelect = document.getElementById('season-select');
const resultsContainer = document.getElementById('results');

const API_BASE = 'https://v3.football.api-sports.io';
const API_KEY = ''; // put your key here inside of the quotes and then open the index file

const leagueIDs = {
  'Premier League': 39,
  'La Liga': 140,
  'Serie A': 135,
  'Liga MX': 262,
  'MLS': 253,
};

form.addEventListener('submit', handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  const leagueName = leagueSelect.value;
  const leagueID = leagueIDs[leagueName];
  const season = parseInt(seasonSelect.value);

  resultsContainer.innerHTML = ''; 

  try {
    const standingsData = await fetchStandings(leagueID, season);
    const scorersData = await fetchTopScorers(leagueID, season);

    const mappedStandings = standingsData.map(team => ({
      position: team.rank,
      name: team.team.name,
      points: team.points
    }));

    const mappedScorers = scorersData.map(player => ({
      name: player.player.name,
      team: player.statistics[0].team.name,
      goals: player.statistics[0].goals.total
    }));

    renderStandings(mappedStandings);
    renderTopScorers(mappedScorers);
  } catch (err) {
    console.error('Error fetching data:', err);
    resultsContainer.textContent = 'Failed to load data. Please try again.';
  }
}

// calling the api here (between these two comments)
async function fetchStandings(leagueID, season) {
  const response = await fetch(`${API_BASE}/standings?league=${leagueID}&season=${season}`, {
    method: 'GET',
    headers: {
      'x-apisports-key': API_KEY
    }
  });
  const data = await response.json();
  console.log('Standings API response:', data);

  return data.response[0].league.standings[0];
}

async function fetchTopScorers(leagueID, season) {
  const response = await fetch(`${API_BASE}/players/topscorers?league=${leagueID}&season=${season}`, {
    method: 'GET',
    headers: {
      'x-apisports-key': API_KEY
    }
  });
  const data = await response.json();
  console.log('Top Scorers API response:', data);

  return data.response;
}
//calling the api here (between these two comments)


// where we create our tables for the standings and top scorers
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
    row.innerHTML = `<td>${team.position}</td><td>${team.name}</td><td>${team.points}</td>`;
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

  ['#', 'Player', 'Team', 'Goals'].forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  players.forEach((player, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${index + 1}</td><td>${player.name}</td><td>${player.team}</td><td>${player.goals}</td>`;
    table.appendChild(row);
  });

  section.appendChild(table);
  resultsContainer.appendChild(section);
}

