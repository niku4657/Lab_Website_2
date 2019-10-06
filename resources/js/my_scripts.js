var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];

function viewStudentStats(id, toggle)
{
		var x = document.getElementById(id).style.visibility;
		var y = document.getElementById(id).style.height;
		if(toggle == 0)
		{
			x = "hidden";
			y = 0;

		}
		else if(toggle == 1)
		{
			x = "visible";
			y = "auto";
		}

		document.getElementById(id).style.visibility = x;

		document.getElementById(id).style.height = y;
	}

function changeColor(color)
{
		document.body.style.background = color;
}

function loadStatsPage()
{
	var table = document.getElementById("stats_table");
	var wins = document.getElementById("wins").innerHTML;
	var losses = document.getElementById("losses").innerHTML;
	var r;
	var c;
	var score1;
	var score2;

	for(r = 2; r < table.rows.length; r++)
	{
		score1 = parseInt(table.rows[r].cells[2].innerHTML);
		score2 = parseInt(table.rows[r].cells[3].innerHTML);

		if(score1 > score2)
		{
			table.rows[r].cells[4].innerHTML = "CU Boulder";
			wins++;
		}
		else
		{
			table.rows[r].cells[4].innerHTML = table.rows[r].cells[1].innerHTML;
			losses++;
		}
	}

	document.getElementById("wins").innerHTML = wins;
	document.getElementById("losses").innerHTML = losses;
}

function loadPlayersPage()
{
	var player = document.getElementById('player_selector').innerHTML;
	var name;

	for(index = 0; index < players.length; index++)
	{
		name = players[index].name;
		//TODO: Add the style to the options
		player += "<a class = 'dropdown-item' href = '#' onclick=switchPlayers(" + index + ")>" + name + "</a></br>";
	}

	document.getElementById('player_selector').innerHTML = player;
}

function switchPlayers(playerIndex)
{
	var imageSource = document.getElementById("player_img").src;
	var imageAlt = document.getElementById("player_img").alt;
	var year = document.getElementById("p_year").innerHTML;
	var major = document.getElementById("p_major").innerHTML;
	var games = document.getElementById("g_played").innerHTML;
	var passYd = document.getElementById("p_yards").innerHTML;
	var avgPYd = document.getElementById("avg_p_yards").innerHTML;
	var rushYd = document.getElementById("r_yards").innerHTML;
	var avgRushYd = document.getElementById("avg_r_yards").innerHTML;
	var receiveYd = document.getElementById("rec_yards").innerHTML;
	var avgRecYd = document.getElementById("avg_rec_yards").innerHTML;

	imageSource = players[playerIndex].img;
	imageAlt = players[playerIndex].alt;
	year = players[playerIndex].year;
	major = players[playerIndex].major;
	games = parseInt(players[playerIndex].games_played);
	passYd = parseInt(players[playerIndex].pass_yards);
	rushYd = parseInt(players[playerIndex].rushing_yards);
	receiveYd = parseInt(players[playerIndex].receiving_yards);
	avgPYd = Math.round(passYd / games);
	avgRushYd = Math.round(rushYd / games);
	avgRecYd = Math.round(receiveYd / games);

	document.getElementById("player_img").src = imageSource;
	document.getElementById("player_img").alt = imageAlt;
	document.getElementById("p_year").innerHTML = year;
	document.getElementById("p_major").innerHTML = major;
	document.getElementById("g_played").innerHTML = games;
	document.getElementById("p_yards").innerHTML = passYd;
	document.getElementById("avg_p_yards").innerHTML = avgPYd;
	document.getElementById("r_yards").innerHTML = rushYd;
	document.getElementById("avg_r_yards").innerHTML = avgRushYd;
	document.getElementById("rec_yards").innerHTML = receiveYd;
	document.getElementById("avg_rec_yards").innerHTML = avgRecYd;
}
