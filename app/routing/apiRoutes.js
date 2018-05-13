const express = require("express");
const app = express();

var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        var score;
        var match = friends[0];
        friends.forEach(function (friend) {
            const difArray = friend.scores.map((score, i) => score = Math.abs(newFriend.scores[i] - score));
            console.log("Dif array: "+difArray);
            console.log(newFriend.scores);
            const matchDif = newFriend.scores.map((score, i) => score = Math.abs(match.scores[i] - score));
            console.log("Match Dif: "+matchDif)
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            matchDif.reduce(reducer) >= difArray.reduce(reducer) ? match = friend : console.log('no match change');
            return match;
        });
        friends.push(newFriend);
        console.log(match.name);
        res.send(match);


        // for (j=0;j<friends.length;j++){
        //     for (i=0;i<friends.scores.length;i++){
        //         // var compatabilityScore = [];
        //         friends[j].compatabilityScore = Math.abs(newFriend.scores[i] - friends[j].scores[i]);
        //     }
        // }
    });

}


// friends.compatabilityScore = 