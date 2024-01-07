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
Czy przepracowuje się: pracuję dłużej, biorę dodatkowe projekty, podnoszę sam sobie poprzeczkę robiąc wszystko, aby udowodnić swoją wartość?	Czy mam trudności z delegowaniem zadań, odpuszczaniem i czuję potrzebę kontrolowania, aby upewnić się, że wszystko jest wykonane perfekcyjnie?	Czy zaczynam zauważać, że moja ambicja nie pozwala mi odpuścić, choć są “bitwy” które należałoby poddać?
Czy pracuję dłużej niż wymagane godziny lub biorę na siebie więcej zadań, niż jestem w stanie zrealizować?	Czy odpowiadam na wiadomości sms, e-mail związane z pracą wieczorami, w weekendy czy święta?	Czy mam trudności z koncentracją na zadaniach, popełniam coraz więcej błędów?
Czy odczuwam narastające zmęczenie z powodu niewystarczającej ilości snu?	Czy zaniedbuję swoje potrzeby związane z regeneracją: odpoczynkiem, hobby, ćwiczeniami, właściwym odżywianiem?	Czy ograniczam czas poświęcony na kontakty społeczne z moją rodziną czy przyjaciółmi na rzecz pracy?
Czy odczuwam przytłoczenie lub niepokój związany z sytuacją w pracy?	Czy w pracy unikam trudnych rozmów, sytuacji, które sprawią, że czuję się niekomfortowo, bo chcę uniknąć kolejnego obciążenia?	Czy w pracy unikam rozwiązywania problemów lub konfliktów, zastępując je coraz częściej milczeniem lub sarkazmem?
Czy zadaję sobie pytanie: “co ja tu robię?”, czując się coraz mniej spełniony i “niepasujący” do obecnej pracy?	Czy praca stała się moim jedynym celem, przyćmiewając inne aspekty życia, które kiedyś były dla mnie ważne?	Czy naginam lub zmieniam swoje osobiste wartości, aby lepiej dostosować się do obowiązków zawodowych i mojej ambicji?
Czy narasta moja frustracja związana z sytuacją w pracy?	Czy z powodu problemów w pracy doświadczam niepowodzeń, trudnych sytuacji poza nią (rodzina, przyjaciele)?	Czy staję się mniej tolerancyjny, zniecierpliwiony wobec błędów i pomyłek innych w pracy?
Czy czuję, że oddalam się emocjonalnie od rodziny i przyjaciół?	Czy tracę zainteresowanie czynnościami, które kiedyś sprawiały mi przyjemność (hobby, ćwiczenia)?	Czy chętniej sięgam po alkohol lub inne używki, aby się zrelaksować, wyciszyć, pokonać ból czy smutek?
Czy czuję się emocjonalnie oderwany lub odrętwiały, nie jestem sobą?	Czy ktoś z mojego otoczenia powiedział mi, że jest o mnie zaniepokojony?	Czy zaniedbuję swoje domowe obowiązki z powodu wymagań związanych z pracą?
Czy czuję się oddzielony od siebie, jakbym obserwował siebie z daleka, w filmie, we śnie?	Czy czuję się mniej wartościowy, ważny w pracy, w rodzinie?	Czy czuję, że nie kontroluję swoich myśli lub działań, działam na “autopilocie” jak robot czy automat?
Czy mam wrażenie, że nie jestem w stanie odczuwać emocji lub że są one “wypłaszczone”?	Czy wydaje mi się, że nic się nie liczy, nie potrafię odnaleźć sensu i celu w życiu, czuję wewnętrzną pustkę?	Czy zauważam kolejne zmiany w apetycie, wzorcach snu, nadużywaniu alkoholu i innych substancji, aby poradzić sobie ze stresem lub smutkiem?
Czy przez większość czasu czuję się smutny, nic mnie nie cieszy, nie jestem zainteresowany czynnościami, które kiedyś sprawiały mi radość?	Czy czuję brak nadziei i wewnętrzną rozpacz, brak wyjścia?	Czy przez większość czasu czuję się zmęczony fizycznie lub brakuje mi energii, nawet jeśli nie wykonywałem wysiłku fizycznego?
Czy przez większość czasu czuję się wyczerpany emocjonalnie i mentalnie, nawet po wystarczającej ilości snu lub urlopie?	Czy mam poważniejsze problemy ze zdrowiem fizycznym związane z osłabioną odpornością i chronicznym stresem (wysypki, problemy krążeniowe inne)?	Czy czuję, że jest mi potrzebna fachowa pomoc lekarska lub terapeutyczna?
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
    if (!lhCheck) {
      window.location.href = 'done';
    } else {
      window.location.href = 'done.html';
    }
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
    if (!lhCheck) {
      window.location.href = 'https://ifwl.thelpro.studio';
    } else {
      window.location.href = 'index.html';
    }
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
