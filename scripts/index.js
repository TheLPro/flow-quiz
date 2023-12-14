if (document.title.includes("12 Faz Wypalenia Zawodowego"))  {
 var data = `
{
  "s1": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s2": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s3": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s4": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s5": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s6": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s7": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s8": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s9": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s10": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s11": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  },
  "s12": {
    "q1": "1",
    "q2": "1",
    "q3": "1"
  }
}
`
localStorage.setItem('data', data);
} else {
  var data = localStorage.getItem('data');
}
var questions = `
Lorem ipsum dolor sit amet... Pytanie 1 Faza 1	Lorem ipsum dolor sit amet... Pytanie 2 Faza 1	Lorem ipsum dolor sit amet... Pytanie 3 Faza 1
Lorem ipsum dolor sit amet... Pytanie 1 Faza 2	Lorem ipsum dolor sit amet... Pytanie 2 Faza 2	Lorem ipsum dolor sit amet... Pytanie 3 Faza 2
Lorem ipsum dolor sit amet... Pytanie 1 Faza 3	Lorem ipsum dolor sit amet... Pytanie 2 Faza 3	Lorem ipsum dolor sit amet... Pytanie 3 Faza 3
Lorem ipsum dolor sit amet... Pytanie 1 Faza 4	Lorem ipsum dolor sit amet... Pytanie 2 Faza 4	Lorem ipsum dolor sit amet... Pytanie 3 Faza 4
Lorem ipsum dolor sit amet... Pytanie 1 Faza 5	Lorem ipsum dolor sit amet... Pytanie 2 Faza 5	Lorem ipsum dolor sit amet... Pytanie 3 Faza 5
Lorem ipsum dolor sit amet... Pytanie 1 Faza 6	Lorem ipsum dolor sit amet... Pytanie 2 Faza 6	Lorem ipsum dolor sit amet... Pytanie 3 Faza 6
Lorem ipsum dolor sit amet... Pytanie 1 Faza 7	Lorem ipsum dolor sit amet... Pytanie 2 Faza 7	Lorem ipsum dolor sit amet... Pytanie 3 Faza 7
Lorem ipsum dolor sit amet... Pytanie 1 Faza 8	Lorem ipsum dolor sit amet... Pytanie 2 Faza 8	Lorem ipsum dolor sit amet... Pytanie 3 Faza 8
Lorem ipsum dolor sit amet... Pytanie 1 Faza 9	Lorem ipsum dolor sit amet... Pytanie 2 Faza 9	Lorem ipsum dolor sit amet... Pytanie 3 Faza 9
Lorem ipsum dolor sit amet... Pytanie 1 Faza 10	Lorem ipsum dolor sit amet... Pytanie 2 Faza 10	Lorem ipsum dolor sit amet... Pytanie 3 Faza 10
Lorem ipsum dolor sit amet... Pytanie 1 Faza 11	Lorem ipsum dolor sit amet... Pytanie 2 Faza 11	Lorem ipsum dolor sit amet... Pytanie 3 Faza 11
Lorem ipsum dolor sit amet... Pytanie 1 Faza 12	Lorem ipsum dolor sit amet... Pytanie 2 Faza 12	Lorem ipsum dolor sit amet... Pytanie 3 Faza 12
  `
var stageTitles = [
  "Faza 1",
  "Faza 2",
  "Faza 3",
  "Faza 4",
  "Faza 5",
  "Faza 6",
  "Faza 7",
  "Faza 8",
  "Faza 9",
  "Faza 10",
  "Faza 11",
  "Faza 12"
]
var obj = JSON.parse(data);
var current = 1;
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('return');
var title = document.getElementById('title');
var progress = document.getElementById('progressBar');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var a1 = [id('answer_1_1'), id('answer_1_2'), id('answer_1_3'), id('answer_1_4'), id('answer_1_5')];
var a2 = [id('answer_2_1'), id('answer_2_2'), id('answer_2_3'), id('answer_2_4'), id('answer_2_5')];
var a3 = [id('answer_3_1'), id('answer_3_2'), id('answer_3_3'), id('answer_3_4'), id('answer_3_5')];
var lhCheck = window.location.href.includes('5502');

function id(id) {return document.getElementById(id);}

function changeTitle(num) {
  if (window.location.href.includes('quiz')) {
    document.title = `Faza ${num} | Test Wypalenia`;
    title.innerHTML = `Faza ${num} - ${stageTitles[num - 1]}`;
    progress.value = num;
  }
}
function next() {
  if (current < 12) {
    current++;
    changeTitle(current);
    setQuestion(current);
    resetChekcks(current);
    localStorage.setItem('data', JSON.stringify(obj));
  } else {
    window.location.href = 'done.html';
  }
}

function back() {
  if (current > 1) {
    current--;
    changeTitle(current);
    setQuestion(current);
    resetChekcks(current);
    localStorage.setItem('data', JSON.stringify(obj));
  } else {
    window.location.href = 'https://ifwl.thelpro.studio';
  }
}

function addData(score, s, q) {
  obj[s][q] = score;
  localStorage.setItem('data', JSON.stringify(obj));
}

for (let i = 1; i < 13; i++) {
  var sel = `s${i}`;
  var sq1 = parseInt(obj[sel]['q1']);
  var sq2 = parseInt(obj[sel]['q2']);
  var sq3 = parseInt(obj[sel]['q3']);
  var score = 0;
  if (document.querySelector(`#${sel}`)) {
    if (sq1 >= 4) {
      score++;
    } 
    if (sq2 >= 4) {
      score++;
    } 
    if (sq3 >= 4) {
      score++;
    } 
    document.querySelector(`#${sel}`).textContent = `${score}/3`
  };
}
function resetChekcks(current) {
  const buttons = document.querySelectorAll("input[type='radio']");
  buttons.forEach((button) => {
    var i = button.id.split("_");
    var question = i[1];
    if (button.id.endsWith(parseInt(obj["s" + current]["q" + question]))) {
      button.checked = true;
    } else {
      button.checked = false;
    }
  });
}
function tsvParse() {
  const rows = questions.trim().split('\n');
  const listOfLists = [];

  for (let i = 0; i < rows.length; i++) {
    const values = rows[i].split('\t'); 
    listOfLists.push(values);
  }
  return listOfLists;
}

function setQuestion(section) {
  section = section - 1;
  if (q1 && q2 && q3) {
    q1.innerHTML = tsvParse()[section][0];
    q2.innerHTML = tsvParse()[section][1];
    q3.innerHTML = tsvParse()[section][2];
  }
}

setQuestion(current);
changeTitle(current);
if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', back);
}




if (window.location.href.includes('quiz')) {
  document.querySelector('#answer_1_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q1');
  });
  document.querySelector('#answer_1_2').addEventListener('click', function () {
    addData(2, `s${current}`, 'q1');
  });
  document.querySelector('#answer_1_3').addEventListener('click', function () {
    addData(3, `s${current}`, 'q1');
  });
  document.querySelector('#answer_1_4').addEventListener('click', function () {
    addData(4, `s${current}`, 'q1');
  });
  document.querySelector('#answer_1_5').addEventListener('click', function () {
    addData(5, `s${current}`, 'q1');
  });
  document.querySelector('#answer_2_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q2');
  });
  document.querySelector('#answer_2_2').addEventListener('click', function () {
    addData(2, `s${current}`, 'q2');
  });
  document.querySelector('#answer_2_3').addEventListener('click', function () {
    addData(3, `s${current}`, 'q2');
  });
  document.querySelector('#answer_2_4').addEventListener('click', function () {
    addData(4, `s${current}`, 'q2');
  });
  document.querySelector('#answer_2_5').addEventListener('click', function () {
    addData(5, `s${current}`, 'q2');
  });
  document.querySelector('#answer_3_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q3');
  });
  document.querySelector('#answer_3_2').addEventListener('click', function () {
    addData(2, `s${current}`, 'q3');
  });
  document.querySelector('#answer_3_3').addEventListener('click', function () {
    addData(3, `s${current}`, 'q3');
  });
  document.querySelector('#answer_3_4').addEventListener('click', function () {
    addData(4, `s${current}`, 'q3');
  });
  document.querySelector('#answer_3_5').addEventListener('click', function () {
    addData(5, `s${current}`, 'q3');
  });
}
