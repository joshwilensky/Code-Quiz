var goBackBtn = document.querySelector("button.goBackBtn"),
    var clearBtn = document.querySelector("button.clearBtn"),
        // get the highScores list and turn it back into an object
        var highScores = JSON.parse(localStorage.getItem("HighScores") || "[]"),
            var scoreList = document.getElementById("score-list");

// sort scores from high to low
highScores.sort(function (a, b) {
    return b.score - a.score
})

// display the scores
for (var s = 0; s < highScores.length; s++) {
    var newLi = document.createElement("li")
    newLi.textContent = highScores[s].name + " - " + highScores[s].score
    scoreList.appendChild(newLi)
}

// click handlers for restart and clearing scoreboard
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
goBackBtn.addEventListener("click", function () {
    history.back();
});