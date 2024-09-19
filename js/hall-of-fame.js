function addGOAT(rank, name, medalsSingles, medalsDoubles, medalsMixed, medalsGold, medalsSilver, medalsBronze) {
    var text = `<tr>`;
    text += "<td>" + rank + "</td>";
    text += "<td>" + name + "</td>";
    text += "<td>" + medalsGold + "</td>";
    text += "<td>" + medalsSilver + "</td>";
    text += "<td>" + medalsBronze + "</td>";
    text += "<td>" + medalsSingles + "</td>";
    text += "<td>" + medalsDoubles + "</td>";
    text += "<td>" + medalsMixed + "</td>";
    text += "<td>" + (medalsSingles + medalsDoubles + medalsMixed) + "</td>";
    text += "<td>" + (3 * medalsGold + 2 * medalsSilver + medalsBronze) + "</td>";
    text += `</tr>`

    document.write(text);
}


function createGOATList() {
    // Define the CSV file content
    const csvData = `Gabriel Prado,Nitro,Singles,Bronze
Tristan Ohler,Gamma,Singles,Bronze
Dominick Robinson,Gamma,Singles,Silver
Alexa Carl,Gamma,Singles,Gold
Vincent Sokalski,Gamma,Doubles,Gold
Tristan Ohler,Battle at the Bridge,Doubles,Silver
Gavin Ohler,Battle at the Bridge,Doubles,Silver
Dominick Robinson,Battle at the Bridge,Doubles,Bronze
Gabriel Prado,Battle at the Bridge,Doubles,Bronze
Tristan Ohler,WV Championships,Doubles,Gold
Claire Marlowe,WV Championships,Doubles,Gold
Dominick Robinson,CMU vs CWRU vs OSU,Doubles,Silver
Gabriel Prado,CMU vs CWRU vs OSU,Doubles,Silver
Dominick Robinson,CMU vs Mt Aloysius,Doubles,Silver
Gabriel Prado,CMU vs Mt Aloysius,Doubles,Silver
Drake Som,CMU vs Mt Aloysius,Doubles,Gold
Evan Zhang,CMU vs Mt Aloysius,Doubles,Gold
Tristan Ohler,Gamma,Doubles,Gold
Drake Som,Gamma,Doubles,Gold
Evan Zhang,Gamma,Doubles,Gold
Evan Zhang,Gamma,Singles,Silver
Vincent Sokalski,Gamma,Doubles,Bronze`;

    // Parse the CSV data into an array of rows
    const rows = csvData.split('\n');

    // Initialize an empty object to store player medal information
    const playerMedals = {};

    // Loop through each row to calculate medals
    rows.forEach((row) => {
        const [player, tournament, format, medal] = row.split(',');
        if (!playerMedals[player]) {
            playerMedals[player] = { singles: 0, doubles: 0, mixed: 0, bronze: 0, silver: 0, gold: 0, total: 0, goatScore: 0 };
        }

        switch (format) {
            case 'Singles':
                playerMedals[player].singles += 1;
                break;
            case 'Doubles':
                playerMedals[player].doubles += 1;
                break;
            case 'Mixed':
                playerMedals[player].mixed += 1;
                break;
        }

        switch (medal) {
            case 'Bronze':
                playerMedals[player].bronze += 1;
                playerMedals[player].goatScore += 1;
                break;
            case 'Silver':
                playerMedals[player].silver += 1;
                playerMedals[player].goatScore += 2;
                break;
            case 'Gold':
                playerMedals[player].gold += 1;
                playerMedals[player].goatScore += 3;
                break;
        }

        playerMedals[player].total += 1;
    });

    // Convert the playerMedals object to an array
    const playerMedalsArray = [];
    for (const player in playerMedals) {
        if (Object.hasOwnProperty.call(playerMedals, player)) {
            playerMedalsArray.push({
                name: player,
                singles: playerMedals[player].singles,
                doubles: playerMedals[player].doubles,
                mixed: playerMedals[player].mixed,
                bronze: playerMedals[player].bronze,
                silver: playerMedals[player].silver,
                gold: playerMedals[player].gold,
                total: playerMedals[player].total,
                goatScore: playerMedals[player].goatScore
            });
        }
    }

    // Sort players by GOAT score first, then by medals (Gold > Silver > Bronze)
    playerMedalsArray.sort((a, b) => {
        if (b.goatScore !== a.goatScore) {
            return b.goatScore - a.goatScore; // Sort by GOAT score
        } else if (b.gold !== a.gold) {
            return b.gold - a.gold; // Sort by gold medals
        } else if (b.silver !== a.silver) {
            return b.silver - a.silver; // Sort by silver medals
        } else {
            return b.bronze - a.bronze; // Sort by bronze medals
        }
    });

    // Set ranks based on sorted order
    let currentRank = 1;
    playerMedalsArray[0].rank = currentRank;

    for (let i = 1; i < playerMedalsArray.length; i++) {
        const prevPlayer = playerMedalsArray[i - 1];
        const currentPlayer = playerMedalsArray[i];

        if (
            prevPlayer.goatScore === currentPlayer.goatScore &&
            prevPlayer.gold === currentPlayer.gold &&
            prevPlayer.silver === currentPlayer.silver &&
            prevPlayer.bronze === currentPlayer.bronze
        ) {
            currentPlayer.rank = currentRank; // Same rank if scores and medals match
        } else {
            currentRank = i + 1;
            currentPlayer.rank = currentRank; // Increment rank if different
        }
    }

    // Generate the HTML table
    playerMedalsArray.forEach((row) => {
        addGOAT(row.rank, row.name, row.singles, row.doubles, row.mixed, row.gold, row.silver, row.bronze);
    });
}
