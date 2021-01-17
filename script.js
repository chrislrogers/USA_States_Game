var map = document.getElementById("svg4");
map.setAttribute("width",  window.innerWidth);
map.setAttribute("height", window.innerHeight);

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

let isPlaying = 0;
let score = 0;

const scoreboard = document.getElementById('score-display');
const input = document.getElementById('input-word');


function start() {
    isPlaying = true;
    input.value = '';
    input.addEventListener('input', loop);
}

function check() {
    let match = false;
    let state;
    for (let i = 0; i < states.length && !match; i++) {
        if (states[i].toLowerCase() === input.value.toLowerCase()) {
            match = true;
            state = document.getElementById(states[i].toLowerCase());
            state.innerHTML = states[i];
        }
    }
    return match;
}

function loop() {
    if (check()) {
        console.log('match');
        input.value = '';
        score++;
    }
    scoreboard.innerHTML = score;
}

function finish() {
    if (!isPlaying) {
        console.log('game over');
        score = 0;
    } 
}
