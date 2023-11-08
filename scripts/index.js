var data = `{
    "s1": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s2": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s3": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s4": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s5": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s6": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s7": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s8": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s9": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s10": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s11": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    },
    "s12": {
      "q1": 0,
      "q2": 0,
      "q3": 0
    }
  }`;

var parced = JSON.parse(data);
localStorage.setItem('data', data);
var obj = JSON.parse(data);
var scores = obj;

function addData(score, s, q) {
  obj[s][q] = score;
}
for (let i = 1; i < 13; i++) {
  var sel = `s${i}`;
  var score = obj[sel]['q1'] + obj[sel]['q2'] + obj[sel]['q3'];
  document.querySelector(`#${sel}`).innerHTML = `${score}/3`;
}
