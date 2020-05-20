//importing the sprites/panel images
const p1 = require("./sprites/the_interview_page 1.jpg");
const p2 = require("./sprites/the_interview_page_2.jpg");
const p3 = require("./sprites/the_interview_page_3.jpg");
const p4 = require("./sprites/the_interview_page_4.jpg");
const p5 = require("./sprites/the_interview_page_5.jpg");
const p6 = require("./sprites/the_interview_page_6.jpg");
const p7 = require("./sprites/the_interview_page_7.jpg");
const p8 = require("./sprites/the_interview_page_8.jpg");
const p9 = require("./sprites/the_interview_page_9.jpg");
const p10 = require("./sprites/the_interview_page_10.jpg");
const p11 = require("./sprites/the_interview_page_11.jpg");
const p12 = require("./sprites/the_interview_page_12.jpg");
const p13 = require("./sprites/the_interview_page_13.jpg");
const p14 = require("./sprites/the_interview_page_14.jpg");
const p15 = require("./sprites/the_interview_page_15.jpg");
const p16 = require("./sprites/the_interview_page_16.jpg");
const p17 = require("./sprites/the_interview_page_17.jpg");
const p18 = require("./sprites/the_interview_page_18.jpg");
const p19 = require("./sprites/the_interview_page_19.jpg");

const q1 = require("./sprites/quizPageNeutral.jpg");
const q2 = require("./sprites/quizPageGood.jpg");
const q3 = require("./sprites/quiz3reallygood.jpg");
const q4 = require("./sprites/quiz4perfect.jpg");
const q5 = require("./sprites/quizPageBad.jpg");
const q6 = require("./sprites/quiz6reallybad.jpg");
const q7 = require("./sprites/quiz7worst.jpg");
const e1 = require("./sprites/ending1perfect.jpg");
const e2 = require("./sprites/goodEnding1.jpg");
const e3 = require("./sprites/badEnding1.jpg");
const e4 = require("./sprites/ending4horriable.jpg");
const w1 = require("./sprites/waitingpage.jpg");

const pe1 = require("./sprites/perfectEnding1.jpg");
const pe2 = require("./sprites/perfectEnding2.jpg");
const pe3 = require("./sprites/perfectEnding3.jpg");
const pe4 = require("./sprites/perfectEnding4.jpg");
const pe5 = require("./sprites/perfectEnding5.jpg");

const he1 = require("./sprites/horriableEnding1.jpg");
const he2 = require("./sprites/horriableEnding2.jpg");
const he3 = require("./sprites/horriableEnding3.jpg");
const he4 = require("./sprites/horriableEnding4.jpg");
const he5 = require("./sprites/horriableEnding5.jpg");

const ep = require('./sprites/theEnd.jpg');





//importing the sounds
const s1 = require("./sounds/panel_1.wav");
const s2 = require("./sounds/panel_2.wav");
const s3 = require("./sounds/panel_3.wav");
const s4 = require("./sounds/panel_4.wav");
const s5 = require("./sounds/panel_5.wav");
const s5s = require("./sounds/panel_5_fire.wav");
const s6 = require("./sounds/panel_6.wav");
const s6s = require('./sounds/panel_6_sad_trombone.wav');
const s7 = require("./sounds/panel_7.wav");
const s9 = require("./sounds/panel_9.wav");
const s10 = require("./sounds/panel_10.wav");
const s11 = require("./sounds/panel_11.wav");
const s11s = require("./sounds/panel_11_evil.mp3");
const s12 = require("./sounds/panel_12.wav");
const s13 = require('./sounds/panel_13.wav');
const s14 = require("./sounds/panel_14.wav");
const s15 = require('./sounds/panel_15.wav');
const s16 = require("./sounds/panel_16.wav");
const s17 = require('./sounds/panel_17.wav');
const s18 = require('./sounds/panle_18.wav');
const s19 = require('./sounds/panel_19.wav');

const sq1 = require('./sounds/quizPanel1Jerry1.wav');
const sq2 = require('./sounds/quizPanel1Boss.wav');
const sq3 = require('./sounds/quizPanel1Jerry2.wav');
const sq1a = require('./sounds/question1AskedJerry.wav');
const sq1w = require('./sounds/question1WrongJerry.wav');
const sq1c = require('./sounds/question1CorrectJerry.wav');
const sq2a = require('./sounds/question2AskedJerry.wav');
const sq2w = require('./sounds/question2WrongJerry.wav');
const sq2c = require('./sounds/question2CorrectJerry.wav');
const sq3a = require('./sounds/question3AskedJerry.wav');

const she1 = require('./sounds/horriableEnding1Boss.wav');
const she2 = require('./sounds/horriableEnding2Boss.wav');
const she3 = require('./sounds/horribaleEnding3Boss.wav');
const she4 = require('./sounds/horribaleEnding4Matt.wav');
const she5 = require('./sounds/horribaleEnding5Matt.wav');

const sge1 = require('./sounds/goodEndingJerry.wav');
const sge2 = require('./sounds/goodEndingMatt.wav');

const sbe1 = require('./sounds/badEndingJerry.wav');
const sbe2 = require('./sounds/badEndingMatt.wav');

const spe1 = require('./sounds/perfectEnding1Jerry.wav');
const spe2 = require('./sounds/perfectEnding1Boss.wav');
const spe3 = require('./sounds/perfectEnding2Matt.wav');
const spe4 = require('./sounds/perfectEnding3Matt.wav');
const spe5 = require('./sounds/perfectEnding3aMatt.wav');
const spe6 = require('./sounds/perfectEnding4Boss.wav');
const spe7 = require('./sounds/perfectEnding5Matt.wav');




//speaker
const m = "Matt";
const j = "Jerry Duva";
const b = "The Boss!";
const n = "Narrator";

let story = [
   {
     sprite: p1,
     speaker: m,
     voice: s1,
     text: "Hi, my name is Matthew Dukes, but you can call me Matt. I guess you could say I'm your typical unemployed 28 year old."
   },
   {
     sprite: p2,
     speaker: m,
     voice: s2,
     text: "I used to be the manager of a local Italian restaurant....it was a great job and I loved working there. Then one day the owner of the restaurant started getting really nervious....I didn't know why...."
   },
   {
     sprite: p3,
     speaker: m,
     voice: s3,
     text: "Until that day the Mob showed up......."
   },
   {
     sprite: p4,
     speaker: m,
     voice: s4,
     text: "So yeah...the boss she kind of owed some money to the Mob, and she couldn't pay it back...and...."
   },
   {
    sprite: p5,
    speaker: m,
    soundEffect: s5s,
    text: "......."
  },
   {
     sprite: p5,
     speaker: m,
     voice: s5,
     text: "So they ending up torching the place."
   },
   {
     sprite: p6,
     speaker: m,
     voice: s6,
     text: "and left me unemployed.",
   },
   {
    sprite: p6,
    speaker: m,
    text: "and left me unemployed.",
    soundEffect: s6s,
  },
   {
     sprite: p7,
     speaker: m,
     voice: s7,
     text: "So then off the unemployment office it was with me, contempating what to do with my life now, but then something caught my eye."
   },
   {
     sprite: p8,
     speaker: m,
     text: "hmmm."
   },
   {
     sprite: p9,
     speaker: m,
     voice: s9,
     text: "and inspiration struck!"
   },
   {
     sprite: p10,
     speaker: m,
     voice: s10,
     text: "The course was expensive, and I had to get a new laptop, so I went to MallieSae and applied for a student loan to cover the expenses for the 6 months. It cost me my soul"
   },
   {
    sprite: p11,
    speaker: m,
    soundEffect: s11s,
  },
   {
     sprite: p11,
     speaker: m,
     voice: s11,
     text: "Quite literally actually....but I wasn't even using that darn thing anyway"
   },
   {
     sprite: p12,
     speaker: m,
     voice: s12,
     text: "So I started the bootcamp.... and studied like crazy for 6 months. Learning everything about HTML, CSS, Javascript, Node, Express, MySQL, & React.....and so much more."
   },
   {
    sprite: p13,
    speaker: m,
    voice: s13,
    text: "It was overwhelming....I think I literally fried my brain.....what the heck did I get myself into?"
  },
  {
    sprite: p14,
    speaker: m,
    voice: s14,
    text: "But I stuck with it....and.....6 months later I graduated."
  },
  {
    sprite: p15,
    speaker: m,
    voice: s15,
    text: "So....I started applying for jobs....and now here I am at my first post bootcamp job interview!"
  },
   {
     sprite: p16,
     speaker: m,
     voice: s16,
     text: "AND OH MY GOD I'M FREAKING THE HECK OUT!!!!!........I don't think I've ever been this nervious"
   },
   {
     sprite: p17,
     speaker: m,
     voice: s17,
     text: "Six months wasn't enough....I don't feel remotey ready...no way am I gonna get this job!"
   },
   {
     sprite: p18,
     speaker: m,
     voice: s18,
     text: "oh darn...they're ready for me already....come on Matt....put on your game face and get this job!"
   },
   {
     sprite: p19,
     speaker: m,
     voice: s19,
     text: "here goes nothing!"
   },
   {
     sprite: q1,
     speaker: j,
     voice: sq1,
     text: "Hi Matt, and thank you for coming in. I'm the Human Resource Manager, you can call me Jerry Duva, and this is the boss."
   },
   {
     sprite: q1,
     speaker: b,
     voice: sq2,
     text: "Another Bootcamp Interview....grrr......"
   },
  

  // first question
  {
    sprite: q1,
    speaker: j,
    voice: sq3,
    text: "so Matt.. we Looked over your resume and I think you might be perfect for our junior developer opening. But we just have a few technical questions we like to ask you....just a formality.",
    receiveJump: "startOfQuiz",  
  },
  {
    sprite: q1,
    speaker: j,
    voice: sq1a,
    text: "What does CSS stand for?."
  },
  { choicesExist: true, text: "What does CSS Stand for?" },
  {
    routeBegins: "questionOneWrong",
    sprite: q5,
    speaker: j,
    voice: sq1w,
    text: "oh...oh my...even my grandma can get that one..Lets go to the next question.",
    jumpTo: "mainPath",
  },
  {
    routeBegins: "questionOneRight",
    sprite: q2,
    speaker: j,
    voice: sq1c,
    text: "Excellent you're off to a great start!, lets go on to the next question!",
    jumpTo: "mainPath",
  },

  // 2nd Question
  
  {
    receiveJump: "mainPath",
    sprite: q1,
    speaker: j,
    voice: sq2a,
    text: "what types of image maps can be used with Javascript?",
  },
  { choicesExist: true, text: "what types of image maps can be used with Javascript?" },
  {
    routeBegins: "questionTwoWrong",
    sprite: q5,
    speaker: j,
    voice: sq2w,
    text: "hmm......well.....how dissapointing....now onto the next question",
    jumpTo: "nextPath",
  },
  {
    routeBegins: "questionTwoRight",
    sprite: q2,
    speaker: j,
    voice: sq2c,
    text: "You seem to know your stuff! Doing a great job, now onto the last question",
    jumpTo: "nextPath",
  },
  
  // 3rd question
  
  {
    receiveJump: "nextPath",
    sprite: q1,
    speaker: j,
    voice: sq3a,
    text: "In Node JS, what does the fs module stand for?",
  },
  { choicesExist: true, text: "In Node JS, what does the fs module stand for?" },
  { 
    routeBegins: "questionThreeWrong",
    sprite: w1,
    jumpToBecauseStore: "blockAffection" 
  },
  { 
    routeBegins: "questionThreeRight",
    sprite: w1,
    jumpToBecauseStore: "blockAffection"
  },
  {
    sprite: he1,
    speaker: b,
    voice: she1,
    text: "GET THE HECK OUT OF MY OFFICE YOU HACK YOU DON'T KNOW ANYTHING ABOUT CODING!!!!!"
  },
  {
    sprite: he2,
    speaker: b,
    voice: she2,
    text: "YOU WASTED 6 MONTHS AND LEARNED NOTHING! AND THATS ALL YOU'RE EVER GONNA BE....A NOTHING!!!!!"
    
  },
  {
    sprite: he3,
    speaker: b,
    voice: she3,
    text: "AND YOU'LL NEVER GET MORE THEN A DEAD END JOB! NOW YOU'VE WASTED ENOUGH OF MY PRECIOUS TIME, GET THE HECK OUT!!!!!!!"
  },
  {
    sprite: he4,
    speaker: m,
    voice: she4,
    text: "and that one interview destroyed all my self confidence......and he was right....I never got more then a dead end job."
  },
  {
    sprite: he5,
    speaker: m,
    voice: she5,
    text: "and as the decades passed....I never coded again......",
    jumpTo: "skitDone",
  },
  {
    receiveJumpBecauseStore: ["blockAffection", 1],
    sprite: q5,
    speaker: j,
    voice: sbe1,
    text: "I think we've heard enough....I can tell you that you won't be a good fit here....my recomendation kid....I would implore you to maybe brush up your knowledge base, you still have alot to learn",
  },
  {
    sprite: e3,
    speaker: m,
    voice: sbe2,
    text: "oh damn!....I really wanted that job.",
    jumpTo: "skitDone",
  },
  {
    receiveJumpBecauseStore: ["blockAffection", 2],
    sprite: q2,
    speaker: j,
    voice: sge1,
    text: "We have a few other canidates we need to interview still...you seem like you would be a good fit....once we make our decision we'll give you a callback",
  },
  {
    sprite: e2,
    speaker: m,
    voice: sge2,
    text: "Well....at least I'm leaving hopefull...hopefully I'll get that call back",
    jumpTo: "skitDone",
  },
  {
    receiveJumpBecauseStore: ["blockAffection", 3],
    sprite: pe1,
    speaker: j,
    voice: spe1,
    text: "And I think we got a winner! Congrats.....You Got the Job!",
  },
  { sprite: pe1,
    speaker: b,
    voice: spe2,
    text: "Great job, we don't normally hire bootcamp graudates, but you seem to know your stuff kid. Welcome aboard."
  },
  { sprite: pe2,
    speaker: m,
    voice: spe3,
    text: "I DID IT!!!! I GOT THE JOB!"
  },
  { sprite: pe3,
    speaker: m,
    voice: spe4,
    text: "And it ended up being quite the dream job! All they want me to do is code dummy webpages."
  },
  { sprite: pe3,
    speaker: m,
    voice: spe5,
    text: "They don't even check or care how well I code it.....its weird....is almost like this whole bussiness is a front for....."
  },
  { sprite: pe4,
    speaker: b,
    voice: spe6,
    text: "Hey Matt..now that you've been here long enough, I want to introduce you to some of your fellow associates!"
  },
  {
    sprite: pe5,
    speaker: m,
    voice: spe7,
    text: "THE MOB.... my jobs a front for the Mob!.",
    jumpTo: "skitDone",
  },

  {
    sprite: ep,
    speaker: n,
    receiveJump: "skitDone",
    text: "thanks for playing! Replay for the alternate endings",
    jumpTo: "title-screen",
  },
  


];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
