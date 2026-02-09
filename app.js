const form = document.getElementById('controls');
const leagueSelect = document.getElementById('league-select');
const seasonSelect = document.getElementById('season-select');
const resultsContainer = document.getElementById('results');

// once the button gets click, we will run this function
form.addEventListener('submit', function(e) {
   e.preventDefault(); // without this, after button gets clicked, page will immediately refresh

  const league = leagueSelect.value;
  const season = seasonSelect.value;

  console.log('Selected league:', league);
  console.log('Selected season:', season);

  resultsContainer.innerHTML = '';

  // will delete the below, just want to ensure event listener is working
  const placeholder = document.createElement('p');
  placeholder.textContent = `You selected ${league} for the ${season} season.`;
  resultsContainer.appendChild(placeholder);
});
