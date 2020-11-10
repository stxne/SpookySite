var txt;
var imageElements;
var paraLines;



function setup() {
  noCanvas();
  txt = createDiv('BEWARE');
  imageElements = selectAll('.photo');
  paraLines = selectAll('.line');
}

function draw() {

  for(var elem = 0; elem < paraLines.length; elem++){
    var size = random(50,200);
    paraLines[elem].style('font-size', size + 'px');
  }

  for (var i = 0; i < imageElements.length; i ++) {
    var w = imageElements[i].size().width;
    var h = imageElements[i].size().height;

    imageElements[i].size(w+random(-100,100), h+random(-50,50));

  }

}

function mouseWheel(){
  txt.position(random(100,windowWidth-400), random(100,windowHeight+100));
}
