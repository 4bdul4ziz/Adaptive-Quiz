let answers={
  easy : [
    {
      id: 1,
      question: "Easy Question 1",
      answer: "Easy option 1",
      options: [
        "Easy option 1",
        "Easy option 2",
        "Easy option 3",
        "Easy option 4",
      ],
    },
    {
      id: 2,
      question: "Easy Question 2",
      answer: "Easy option 1",
      options: [
        "Easy option 1",
        "Easy option 2",
        "Easy option 3",
        "Easy option 4",
      ],
    },
    {
      id: 3,
      question: "Easy Question 3",
      answer: "Easy option 1",
      options: [
        "Easy option 1",
        "Easy option 2",
        "Easy option 3",
        "Easy option 4",
      ],
    },
    {
      id: 4,
      question: "Easy Question 4",
      answer: "Easy option 1",
      options: [
        "Easy option 1",
        "Easy option 2",
        "Easy option 3",
        "Easy option 4",
      ],
    },
  ],
  intermediate : [
    {
      id: 1,
      question: "Intermediate Question 1",
      answer: "Intermediate option 2",
      options: [
        "Intermediate option 1",
        "Intermediate option 2",
        "Intermediate option 3",
        "Intermediate option 4",
      ],
    },
    {
      id: 2,
      question: "Intermediate Question 2",
      answer: "Intermediate option 2",
      options: [
        "Intermediate option 1",
        "Intermediate option 2",
        "Intermediate option 3",
        "Intermediate option 4",
      ],
    },
    {
      id: 3,
      question: "Intermediate Question 3",
      answer: "Intermediate option 2",
      options: [
        "Intermediate option 1",
        "Intermediate option 2",
        "Intermediate option 3",
        "Intermediate option 4",
      ],
    },
    {
      id: 4,
      question: "Intermediate Question 4",
      answer: "Intermediate option 2",
      options: [
        "Intermediate option 1",
        "Intermediate option 2",
        "Intermediate option 3",
        "Intermediate option 4",
      ],
    },
  ],
  hard : [
    {
      id: 1,
      question: "Hard Question 1",
      answer: "Hard option 3",
      options: [
        "Hard option 1",
        "Hard option 2",
        "Hard option 3",
        "Hard option 4",
      ],
    },
    {
      id: 2,
      question: "Hard Question 2",
      answer: "Hard option 3",
      options: [
        "Hard option 1",
        "Hard option 2",
        "Hard option 3",
        "Hard option 4",
      ],
    },
    {
      id: 3,
      question: "Hard Question 3",
      answer: "Hard option 3",
      options: [
        "Hard option 1",
        "Hard option 2",
        "Hard option 3",
        "Hard option 4",
      ],
    },
    {
      id: 4,
      question: "Hard Question 4",
      answer: "Hard option 3",
      options: [
        "Hard option 1",
        "Hard option 2",
        "Hard option 3",
        "Hard option 4",
      ],
    },
  ],
  extrahard : [
    {
      id: 1,
      question: "Extra Hard Question 1",
      answer: "Extra Hard option 4",
      options: [
        "Extra Hard option 1",
        "Extra Hard option 2",
        "Extra Hard option 3",
        "Extra Hard option 4",
      ],
    },
    {
      id: 2,
      question: "Extra Hard Question 2",
      answer: "Extra Hard option 4",
      options: [
        "Extra Hard option 1",
        "Extra Hard option 2",
        "Extra Hard option 3",
        "Extra Hard option 4",
      ],
    },
    {
      id: 3,
      question: "Extra Hard Question 3",
      answer: "Extra Hard option 4",
      options: [
        "Extra Hard option 1",
        "Extra Hard option 2",
        "Extra Hard option 3",
        "Extra Hard option 4",
      ],
    },
    {
      id: 4,
      question: "Extra Hard Question 4",
      answer: "Extra Hard option 4",
      options: [
        "Extra Hard option 1",
        "Extra Hard option 2",
        "Extra Hard option 3",
        "Extra Hard option 4",
      ],
    },
  ]
} 
let question_count = 0;
let points = 0;
let questionPoints={
  easy:1,
  intermediate:2,
  hard:3,
  extrahard:4
}
let index={
  easy:0,
  intermediate:0,
  hard:0,
  extrahard:0
}
let questionLevelOptions = ['easy','intermediate','hard','extrahard'];
window.onload = function () {
  show(question_count, 0, answers['easy']);
};
let nextBtn=document.getElementById('nextBtn');
let questionLevelGlobal='easy';
nextBtn.addEventListener('click',function(){
  next(questionLevelGlobal);
});

function next(questionLevel) {
  
  let user_answer = document.querySelector("li.option.active")?.innerHTML;

  // check if the answer is right or wrong
  question_count++;
  let currentAnswers = answers[`${questionLevel}`];
  let currentQIndex = index[`${questionLevel}`];
  let qLevelIndex = questionLevelOptions.indexOf(questionLevel);
  if (user_answer == currentAnswers[currentQIndex].answer) 
  {
    if(qLevelIndex < 3){
      qLevelIndex++;  //1
    }
    index[`${questionLevel}`]++; 
    points += questionPoints[`${questionLevel}`];
    questionLevel = questionLevelOptions[qLevelIndex];
    
    show(question_count, index[`${questionLevel}`], answers[`${questionLevel}`]);
    
    console.log(points);
    sessionStorage.setItem("points", points);
  } else
  {
    if(qLevelIndex > 0){
      qLevelIndex--;
    }
    index[`${questionLevel}`]++;
    questionLevel = questionLevelOptions[qLevelIndex];
    
    show(question_count, index[`${questionLevel}`], answers[`${questionLevel}`]);
    sessionStorage.setItem("points", points);
  } 
  questionLevelGlobal=questionLevel;

  // if the question is last then redirect to final page
  if (question_count == 10) {
    sessionStorage.setItem("time", time);
    location.href = "./end.php";
  }
}

function show(question_count, count, questions) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `<h2>Q${question_count + 1}.${
    questions[count].question
  }</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li></ul>`;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
