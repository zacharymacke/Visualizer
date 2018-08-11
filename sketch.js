var song;
var fft;
var button;
var volhistory = [];
var w;

function preload() {
  song = loadSound('Music/sitremix.mp3');
}

function setup() {
  createCanvas(1110, 512);
  colorMode(HSB);
  song.play();
  fft = new p5.FFT(.86, 1024);
  w = width / 90;

}

function draw() {
  clear();
  var spectrum = fft.analyze();
  //noStroke();
  stroke(255, 0);
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    fill(i, 39, 98, 255);
    var y = map(amp, 0, 320, height, 0);
    rect(i * w, y, w - 2, height - y);
  }

  stroke(255, 0, 0);
}