let map = document.getElementById("svg4");
map.setAttribute("width",  (window.innerWidth * 0.8));
map.setAttribute("height", (window.innerHeight * 0.8));

window.addEventListener('resize', () => {
    map.setAttribute("width",  (window.innerWidth * 0.8));
    map.setAttribute("height", (window.innerHeight * 0.8));
});

const states = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
];

let statesCopy = [...states];

let isPlaying = 0;
let counter = 0;
let score = 0;

const scoreboard = document.getElementById('score-display');
const input = document.getElementById('input-word');
const timer = document.getElementById('timer');
const winner = document.getElementById('winner');

const timeLimit = 10; //time to complete in minutes
let time = timeLimit * 60;
let timerInterval;

function start() {
    isPlaying = true;
    score = 0;
    input.value = '';
    winner.innerHTML = '';
    input.addEventListener('input', loop);
    timerInterval = setInterval(getTime, 1000);
}

function getTime() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds === "00" && minutes === 0) {
        winner.innerHTML = "TIME OVER!";
        finish();
    }
    time--;
    timer.innerHTML = minutes + "." + seconds;
}

function check() {
    let match = false;
    let state;
    for (let i = 0; i < statesCopy.length && !match; i++) {
        if (statesCopy[i].toLowerCase() === input.value.toLowerCase()) {
            match = true;
            state = document.getElementById(statesCopy[i].toLowerCase());
            state.innerHTML = statesCopy[i];
            statesCopy[i] = "done"; 
        }
    }
    return match;
}

function loop() {
    counter = 0;
    if (check()) {
        console.log('match');
        input.value = '';
        for (let i = 0; i < statesCopy.length; i++) {
            if (statesCopy[i] === "done") {
                counter++;
            }
        }
        score = counter;
    }
    if (!isPlaying) {
        finish();
    }
    scoreboard.innerHTML = score;
    if (score === 50) {
        winner.innerHTML = "YOU WIN!";
        finish();
    }
}

function finish() {
    isPlaying = false;
    clearInterval(timerInterval);
    time = timeLimit * 60;
    if (!isPlaying) {
        console.log('game over');
        let state;
        for (let i = 0; i < states.length; i++) {
            state = document.getElementById(states[i].toLowerCase());
            state.innerHTML = '';
        }
        statesCopy = [...states];
    }
}
