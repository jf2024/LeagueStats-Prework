# League Dashboard

A simple web app to view football league **standings** and **top scorers** for various leagues and seasons using the [API-Football API](https://www.api-football.com/).

## Features

- Select a league and season from dropdowns
- Display **standings** (team rank, name, points)
- Display **top scorers** (player rank, name, team, goals)
- Side-by-side, responsive table layouts

## Project Structure

```text
league-dashboard/
├─ index.html      # The main webpage
├─ styles.css      # Styling for layout and tables
├─ app.js          # Logic for fetching API data and rendering
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd league-dashboard
   ```

2. **Create and Configure your API Key**
   In `app.js`, you must initialize your key on **line 7**:
   ```javascript
   const API_KEY = 'your_api_football_key_here'; 
   ```

   **How to get your key:**
   - Follow the [API-Football Introduction](https://www.api-football.com/documentation-v3#section/Introduction) and click the **Dashboard** link.
   - Create a free account and log in.
   - Navigate to **"My Access"** in your profile menu.
   - Your API key is located at the top right, next to the "Reset my API-key" button.
   - Copy and paste that string into line 7 of your `app.js` file.

3. **Run the App**
   - Open `index.html` in any modern web browser. No server setup is required for this basic front-end project.

## Usage

1. Select a league from the dropdown.
2. Select a season (e.g., 2023).
3. Click **Load Data**.
4. View the Standings and Top Scorers tables side-by-side.

> [!NOTE]
> The free plan is limited to data between **2022 – 2024**. So I limited dropdown selection just for those years