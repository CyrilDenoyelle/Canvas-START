
$(document).ready(function(){

	var canvas = document.getElementById("paper"),
	c = canvas.getContext("2d");

	c.fillStyle = "white";		// On defini que le fond sera un carré blanc
	c.fillRect (0, 0, canvas.width, canvas.height);

	c.strokeStyle = "#f0cd44";		// Le chemin jaune est tracé en premier
	c.lineWidth = 3;
	c.beginPath();
	c.moveTo(12, 190);
	c.lineTo(20, 105);
	c.lineTo(295, 30);
	c.lineTo(481, 265);
	c.lineTo(325, 425);
	c.lineTo(12, 300);
	c.stroke();

	c.strokeStyle = "#e4272e";		// Pour que le rouge soit au dessus
	c.lineWidth = 3;
	c.beginPath();
	c.moveTo(8, 315);
	c.lineTo(12, 150);
	c.lineTo(12, 120);
	c.lineTo(280, 25);
	c.lineTo(490, 250)	
	c.lineTo(340, 415);
	c.closePath();
	c.stroke();

	c.beginPath();
	c.fillStyle="black";
	c.font="80px Helvetica";		// On écrit SIMPLON avec un espace pour le O qui est un cercle
	c.fillText("SIMPL   N", 25, 235);
	
	c.strokeStyle = "#e4272e";		// On fait le cercle en rouge, arc(posY, posX, radius, modification du point de départ en radiants(me semble), taille du chemin tracé, sense horaire ou anti horaire du tracé)
	c.beginPath();
	c.arc(295, 205, 30, 0, Math.PI * 2, false);
	c.lineWidth = 5;
	c.stroke();

	c.beginPath();
	c.fillStyle= "#f0cd44";		// 1 petit carré
	c.fillRect(286.5, 186, 15, 15);

	c.beginPath();
	c.fillStyle= "#f0cd44";		// 2 petits carrés
	c.fillRect(286.5, 209, 15, 15);

	c.beginPath();
	c.fillStyle="#e4272e";
	c.font="60px Helvetica";		//	Occitanie
	c.fillText("Occitanie", 140, 280);
});

