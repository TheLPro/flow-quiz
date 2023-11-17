if (document.title.includes("12 Faz Wypalenia Zawodowego"))  {
 var data = `
{
  "s1": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s2": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s3": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s4": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s5": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s6": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s7": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s8": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s9": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s10": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s11": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  },
  "s12": {
    "q1": "1",
    "q2": "1",
    "q3": "1",
    "q4": "1"
  }
}
`
localStorage.setItem('data', data);
} else {
  var data = localStorage.getItem('data');
}
var questions = `
  Czy czuję się zmęczony?\tCzy czuję się wyczerpany??\tCzy czuję się wypalony???\tCzy czuję się wypompowany????
  Czy czuję się zmęczony??\tCzy czuję się wyczerpany???\tCzy czuję się wypalony????\tCzy czuję się wypompowany?????
  Czy czuję się zmęczony???\tCzy czuję się wyczerpany????\tCzy czuję się wypalony?????\tCzy czuję się wypompowany??????
  Czy czuję się zmęczony????\tCzy czuję się wyczerpany?????\tCzy czuję się wypalony??????\tCzy czuję się wypompowany???????
  Czy czuję się zmęczony?????\tCzy czuję się wyczerpany??????\tCzy czuję się wypalony???????\tCzy czuję się wypompowany????????
  Czy czuję się zmęczony??????\tCzy czuję się wyczerpany???????\tCzy czuję się wypalony????????\tCzy czuję się wypompowany?????????
  Czy czuję się zmęczony???????\tCzy czuję się wyczerpany????????\tCzy czuję się wypalony?????????\tCzy czuję się wypompowany??????????
  Czy czuję się zmęczony????????\tCzy czuję się wyczerpany?????????\tCzy czuję się wypalony??????????\tCzy czuję się wypompowany???????????
  Czy czuję się zmęczony?????????\tCzy czuję się wyczerpany??????????\tCzy czuję się wypalony???????????\tCzy czuję się wypompowany????????????
  Czy czuję się zmęczony??????????\tCzy czuję się wyczerpany???????????\tCzy czuję się wypalony????????????\tCzy czuję się wypompowany?????????????
  Czy czuję się zmęczony???????????\tCzy czuję się wyczerpany????????????\tCzy czuję się wypalony?????????????\tCzy czuję się wypompowany??????????????
  Czy czuję się zmęczony????????????\tCzy czuję się wyczerpany?????????????\tCzy czuję się wypalony??????????????\tCzy czuję się wypompowany???????????????
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
var q4 = document.getElementById('q4');

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
    resetChekcks();
    window.location.href = `${window.location.href.split('#')[0]}#${current}`;
  } else {
    if (window.location.href.includes('5502')) {
      window.location.href = 'done.html';
    } else {
      window.location.href = 'done';
    }
  }
}

function back() {
  if (current > 1) {
    current--;
    changeTitle(current);
    setQuestion(current);
    resetChekcks();
    window.location.href = `${window.location.href.split('#')[0]}#${current}`;
  } else {
    if (window.location.href.includes('5502')) {
      window.location.href = 'index.html';
    } else {
      window.location.href = 'index';
    }
  }
}

function addData(score, s, q) {
  obj[s][q] = score;
  localStorage.setItem('data', JSON.stringify(obj));
  console.log('Added data: ' + score + ' to ' + s + ' ' + q);
}

for (let i = 1; i < 13; i++) {
  var sel = `s${i}`;
  var score = parseInt(obj[sel]['q1']) + parseInt(obj[sel]['q2']) + parseInt(obj[sel]['q3']) + parseInt(obj[sel]['q4']);
  var calc = score / 20 * 100;
  if (document.querySelector(`#${sel}`)) {
    document.querySelector(`#${sel}`).textContent = calc + '%';
  }
}
function resetChekcks() {
  const buttons = document.querySelectorAll("input[type='radio']");
  buttons.forEach((button) => {
    if (button.id.endsWith('1')) {
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
    q4.innerHTML = tsvParse()[section][3];
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
  document.querySelector('#answer_3_4').addEventListener('click', function () {
    addData(5, `s${current}`, 'q3');
  });
  document.querySelector('#answer_4_1').addEventListener('click', function () {
    addData(1, `s${current}`, 'q4');
  });
  document.querySelector('#answer_4_2').addEventListener('click', function () {
    addData(2, `s${current}`, 'q4');
  });
  document.querySelector('#answer_4_3').addEventListener('click', function () {
    addData(3, `s${current}`, 'q4');
  });
  document.querySelector('#answer_4_4').addEventListener('click', function () {
    addData(4, `s${current}`, 'q4');
  });
  document.querySelector('#answer_4_5').addEventListener('click', function () {
    addData(5, `s${current}`, 'q4');
  });
}
window.onload = (event) => {
  if (window.location.href.includes('#')) {
    var last = window.location.href.split('#')[1];
    if (current == 1) {
      last = 1;
    }
    console.log(last);
    changeTitle(last);
    setQuestion(last);
    current = last;
  }
  resetChekcks();
  console.log('Loaded');
};
if (document.title.includes("Koniec")) {
  document.querySelector('.special').addEventListener('click', function () {
    if (window.location.href.includes('5502')) {
      window.location.href = 'quiz.html';
    } else {
      window.location.href = 'quiz';
    }
  });
}