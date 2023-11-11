if (window.location.href.includes('index')) {
  var data = `{
    "s1": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s2": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s3": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s4": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s5": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s6": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s7": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s8": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s9": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s10": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s11": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    },
    "s12": {
      "q1": 1,
      "q2": 1,
      "q3": 1
    }
  }`;
} else {
  var data = localStorage.getItem('data');
}
const tsvData = `
Hello there sir, how could I help you today?\tHello there sir, how could I help you today??\tHello there sir, how could I help you today???
Hello there sir, how could I help you today????\tHello there sir, how could I help you today?????\tHello there sir, how could I help you today??????
Hello there sir, how could I help you today???????\tHello there sir, how could I help you today????????\tHello there sir, how could I help you today?????????
Hello there sir, how could I help you today??????????\tHello there sir, how could I help you today???????????\tHello there sir, how could I help you today???????????
Hello there sir, how could I help you today????????????\tHello there sir, how could I help you today?????????????\tHello there sir, how could I help you today?????????????
Hello there sir, how could I help you today??????????????\tHello there sir, how could I help you today???????????????\tHello there sir, how could I help you today???????????????
Hello there sir, how could I help you today????????????????\tHello there sir, how could I help you today?????????????????\tHello there sir, how could I help you today?????????????????
Hello there sir, how could I help you today??????????????????\tHello there sir, how could I help you today???????????????????\tHello there sir, how could I help you today???????????????????
Hello there sir, how could I help you today????????????????????\tHello there sir, how could I help you today?????????????????????\tHello there sir, how could I help you today?????????????????????
Hello there sir, how could I help you today??????????????????????\tHello there sir, how could I help you today???????????????????????\tHello there sir, how could I help you today???????????????????????
Hello there sir, how could I help you today????????????????????????\tHello there sir, how could I help you today?????????????????????????\tHello there sir, how could I help you today?????????????????????????
Hello there sir, how could I help you today??????????????????????????\tHello there sir, how could I help you today???????????????????????????\tHello there sir, how could I help you today???????????????????????????
`;
var stageTitles = [
  'Faza 1',
  'Faza 2',
  'Faza 3',
  'Faza 4',
  'Faza 5',
  'Faza 6',
  'Faza 7',
  'Faza 8',
  'Faza 9',
  'Faza 10',
  'Faza 11',
  'Faza 12'
];
var parced = JSON.parse(data);
localStorage.setItem('data', data);
var obj = JSON.parse(data);
var scores = obj;
var current = 1;
var nextBtn = document.getElementById('next');
var prevBtn = document.getElementById('return');
var title = document.getElementById('title');
var progress = document.getElementById('progressBar');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');

function changeTitle(num) {
  if (window.location.href.includes('quiz')) {
    document.title = `Faza ${num} | Test Wypalenia`;
    title.innerHTML = `Faza ${num} - ${stageTitles[num - 1]}`;
    progress.value = num;
  }
}
changeTitle(current);
function next() {
  if (current < 12) {
    current++;
    changeTitle(current);
    setQuestion(current);
    resetChekcks();
  } else {
    window.location.href = 'done';
  }
}
function back() {
  if (current > 1) {
    current--;
    changeTitle(current);
    setQuestion(current);
    resetChekcks();
  } else {
    window.location.href = 'index';
  }
}

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', back);
}

function addData(score, s, q) {
  obj[s][q] = score;
  localStorage.setItem('data', JSON.stringify(obj));
  console.log('Added data: ' + score + ' to ' + s + ' ' + q);
}
for (let i = 1; i < 13; i++) {
  var sel = `s${i}`;
  var score = obj[sel]['q1'] + obj[sel]['q2'] + obj[sel]['q3'];
  if (document.querySelector(`#${sel}`)) {
    document.querySelector(`#${sel}`).textContent = score + '/3';
  }
}
function tsvParse() {
  const rows = tsvData.trim().split('\n');
  const listOfLists = [];

  for (let i = 0; i < rows.length; i++) {
    const values = rows[i].split('\t'); // Assuming tabs separate the values
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
if (window.location.href.includes('quiz')) {
  document.querySelector('#answer_1_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q1');
  });
  document.querySelector('#answer_1_0').addEventListener('click', function () {
    addData(0, `s${current}`, 'q1');
  });
  document.querySelector('#answer_2_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q2');
  });
  document.querySelector('#answer_2_0').addEventListener('click', function () {
    addData(0, `s${current}`, 'q2');
  });
  document.querySelector('#answer_3_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q3');
  });
  document.querySelector('#answer_3_0').addEventListener('click', function () {
    addData(0, `s${current}`, 'q3');
  });
}

function resetChekcks() {
  const buttons = document.querySelectorAll("input[type='radio']");
  buttons.forEach((button) => {
    if (button.value == 'true') {
      button.checked = true;
    } else {
      button.checked = false;
    }
  });
}

document.addEventListener('load', function () {
  resetChekcks();
  console.log('Loaded');
});

document.querySelector('.special').addEventListener('click', function () {
  window.location.href = 'quiz';
});
