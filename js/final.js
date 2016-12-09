function drawShip(x, y, r)
{	
	push();
		translate(x, y);
		rotate(r);
		translate(-73, -70);
		scale(.3);
	
	strokeWeight(1)
	stroke(0)
	fill(40,160,30)

	beginShape()
	//cockpit
	vertex(245,22)
	vertex(207,122)
	vertex(207,148)
	vertex(176,218)
	vertex(175,227)
	//left wing
	vertex(162,228)
	vertex(120,246)
	vertex(90,234)
	vertex(90,144)
	vertex(73,143)
	vertex(20,236)
	vertex(15,237)
	vertex(15,248)
	vertex(161,356)
	vertex(333,356)
	//right wing
	vertex(478,249)
	vertex(478,237)
	vertex(473,237)
	vertex(420,144)
	vertex(400,144)
	vertex(400,233)
	vertex(371,246)
	vertex(332,228)
	//cockpit
	vertex(318,227)
	vertex(318,218)
	vertex(287,148)
	vertex(285,122)
	vertex(245,22)
	endShape()

	//cockpit
	strokeWeight(5)
	stroke(100)
	fill(230)

	beginShape()
	vertex(245,90)
	vertex(213,121)
	vertex(213,143)
	vertex(245,170)
	vertex(280,143)
	vertex(280,121)
	vertex(245,90)
	endShape()

	line(245,90,245,170)
	line(213,121,245,115)
	line(245,115,280,121)

	//gray boxes
	stroke(0)
	strokeWeight(1)
	fill(80)
	rect(200,250,25,65)
	rect(265,250,25,65)

	fill(40,140,30)
	beginShape()
	vertex(205,250)
	vertex(215,235)
	vertex(275,235)
	vertex(285,250)
	endShape()

	//tail
	push()
	strokeWeight(3)
	line(290,330,200,330)
	pop()

	beginShape()
	vertex(238,248)
	vertex(252,248)
	vertex(277,345)
	vertex(245,415)
	vertex(215,345)
	vertex(238,248)
	endShape()

	push()
	fill(0)
	triangle(244,248,246,248,245,415)
	pop()

	line(162,228,332,228)
	quad(200,228,225,177,265,177,290,228)

	triangle(200,356,215,356,215,380)
	triangle(290,356,275,356,275,380)

	//wing detail
	push()
	strokeWeight(3)
	line(67,156,83,156)
	pop()

	line(85,156,85,228)
	line(85,228,25,228)

	push()
	strokeWeight(3)
	line(427,158,407,157)
	pop()

	line(405,157,405,230)
	line(405,230,468,230)

	line(180,228,110,268)
	push()
	translate(15,0)
	line(180,228,110,268)
	pop()

	line(310,228,380,268)
	push()
	translate(-15,0)
	line(310,228,380,268)
	pop()

	line(380,268,290,330)
	line(365,268,290,330)

	line(110,268,200,330)
	line(125,268,200,330)

	line(15,237,75,237)
	line(15,248,75,248)

	line(478,237,418,237)
	line(478,249,418,249)

	line(75,237,110,268)
	line(75,248,110,268)

	line(418,237,380,268)
	line(418,249,380,268)

	line(245,88,245,22)

	//rockets
	fill(100)
	triangle(170,340,200,340,185,300)
	triangle(320,340,290,340,305,300)
	fill(50)
	ellipse(185,340,30,15)
	ellipse(305,340,30,15)
	fill(0)
	ellipse(185,340,10,5)
	ellipse(305,340,10,5)

	pop();
}