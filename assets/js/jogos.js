function createGame(player1,hur, player2){
    return`
    <li>
<img scr="./times/icon-${player1}.png" alt="bandeira do ${player1}"/>
<strong>${hour}</strong>
<img src="./times/icon-${player2}.png" alt="bandeira do ${player2}"/>
    `
}
let delay = -0.4;
function createCare(date, day, games){
    delay = delay + 0.4;
    return`
    <div class= "card" style= "animation-delay: ${delay} s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games} 
    </ul>
    </div>
    `
}
document.querySelector("#cards").innerHTML=
creadCard("15/07", "Sábado", creatGame("corinthians", "21:00", "palmeiras"))