var svg
var x1, y1

var clearo = function()
{
  console.log("clear");
  svg.innerHTML = "";
  x1 = null;
  y1 = null;
};

var run = function()
{
  var x1 = null;
  var y1 = null;
  svg = document.getElementById("canvas");
  svg.addEventListener("click", drawCircle);
  console.log("run");
};

var drawCircle = function(e)
{
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", e.offsetX);
  circle.setAttribute("cy", e.offsetY);
  circle.setAttribute("r", 25);
  svg.appendChild(circle);
  console.log("clicked");
  drawLine(e,e.offsetX,e.offsetY);
};

var drawLine = function(e,x,y)
{
  console.log("click 2");
  if (x1 == null || y1 == null)
  {
    x1 = e.offsetX;
    y1 = e.offsetY;
  }
  else
  {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", e.offsetX);
    line.setAttribute("y2", e.offsetY);
    line.setAttribute("stroke", "#000000");
    line.setAttribute("stroke-width", 1);
    x1 = x;
    y1 = y;
    svg.appendChild(line);
  }
};

window.onload = run;
