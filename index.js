var data = `{
    "s1": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s2": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s3": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s4": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s5": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s6": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s7": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s8": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s9": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s10": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s11": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    },
    "s12": {
      "q1": "null",
      "q2": "null",
      "q3": "null"
    }
  }`;

var obj = JSON.parse(data);
var scores = obj;

function addData(score, s, q) {
    obj[s][q] = score;
}
if (scores.s12.q3 != "null") {
    console.log("test complete");
}