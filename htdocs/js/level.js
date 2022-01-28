let answers = {
  easy: [
    {
      id: 1,
      question: "An Embedded System is a combination of ___",
      answer: "(c) Both a & b",
      options: ["(a) Software", "(b) Hardware", "(c) Both a & b", "(d) None"],
    },
    {
      id: 2,
      question: "An embedded system can be classified into how many types?",
      answer: "(a) 2",
      options: ["(a) 2", "(b) 3", "(c) 4", "(d) 1"],
    },
    {
      id: 3,
      question: "An IC contains__?",
      answer: "(c) Both a & b",
      options: [
        "(a) Passive Elements",
        "(b) Active Elements",
        "(c) Both a & b",
        "(d) None",
      ],
    },
    {
      id: 4,
      question: "What is the full form of oop?",
      answer: "(a) Object Oriented Programming",
      options: [
        "(a) Object Oriented Programming",
        "(b) Oriented Object Programming",
        "(c) Office Oriented Programming",
      ],
    },
    {
      id: 5,
      question: " ___ is an example of 16-bit micro-controller.",
      answer: "(c) 8096",
      options: ["(a) 8031", "(b) 8051", "(c) 8096", "(d) None"],
    },

    {
      id: 6,
      question: "The UART value is 0 for which Arduino Board?",
      answer: "(b) LilyPad Arduino Simple",
      options: [
        "(a) Lilypad Arduino",
        "(b) LilyPad Arduino Simple",
        "(c) Lilypad Arduino Simple snap",
        "(d) None",
      ],
    },
    {
      id: 7,
      question: "Leonardo Board is 1st to use micro-controller with in build",
      answer: "(c) USB",
      options: ["(a) bluetooth", "(b) Led", "(c) USB", "(d) None"],
    },
    {
      id: 8,
      question: "the optiboot bootloader takes how many bytes?",
      answer: "(c) 512",
      options: ["(a) 516", "(b) 520", "(c) 512", "(d) None"],
    },
    {
      id: 9,
      question:
        "In which of the following programming languages can an embedded software be programmed in?",
      answer: "(a) C & C++",
      options: ["(a) C & C++", "(b) C++", "(c) Java", "(d) Python"],
    },
    {
      id: 10,
      question: "What does p refer to in ATmega328p?",
      answer: "(d) Pico-power",
      options: [
        "(a) Programmable on chip",
        "(b) Power-pico",
        "(c) Production",
        "(d) Pico-power",
      ],
    },
  ],
  intermediate: [
    {
      id: 1,
      question: "In which of the following embedded systems devices communicate with servers?",
      answer: "(d) Networked Embedded Systems",
      options: [
        "(a) Soft real time",
        "(b) Hard real time",
        "(c) Stand alone",
        "(d) Networked Embedded Systems"
      ],
    },
    {
      id: 2,
      question: "What does API stand for?",
      answer: "(a) Application Programming Interface",
      options: [
        "(a) Application Programming Interface",
        "(b) Address Programming Interface",
        "(c) Accessing peripheral through the interface",
        "(d) None of them"
      ],
    },
    {
      id: 3,
      question: "Which of the following tools can replace floating-point arithmetic with fixed-point arithmetic?",
      answer: "(c)FRIDGE",
      options: [
        "(a) FAT",
        "(b) SDS",
        "(c)FRIDGE",
        "(d) VFAT"
      ],
    },
    {
      id: 4,
      question: "Which of the following produces an assembler file in the compilation process?",
      answer: "(c) Compiler",
      options: [
        "(a) Pre-processor",
        "(b) Assembler",
        "(c) Compiler",
        "(d) Post-processing"
      ],
    },
    {
      id: 5,
      question: "Which statement is used to condense the code to improve the eligibility?",
      answer: "(a) # define MACRO()",
      options: [
        "(a) # define MACRO()",
        "(b) # include",
        "(c) if",
        "(d) else-if"
      ],
    },
    {
      id: 6,
      question: "To access the services of the operating system, the interface is provided by the ___________",
      answer: "(b) System calls",
      options: [
        "(a) Library",
        "(b) System calls",
        "(c) Assembly instructions",
        "(d) API"
      ],
    },
  ],
  hard: [
    {
      id: 1,
      question: "Which of the following components of basic ES architecture relates DAC results with expected result?",
      answer: "(c) Actuators",
      options: [
        "(a) Sensor",
        "(b) Processor",
        "(c) Actuators",
        "(d) Timers",
      ],
    },
    {
      id: 2,
      question: "MC6800 possesses an ___ accumulator register",
      answer: "(c) 8-bit",
      options: [
        "(a) 32-bit",
        "(b) 16-bit",
        "(c) 8-bit",
        "(d) 64-bit"
      ],
    },
    {
      id: 3,
      question: "Which of the following is capable of displaying output signal waveform resulting from stimuli applied to inputs?",
      answer: "(d) VHDL simulator",
      options: [
        "(a) VHDL locator",
        "(b) VHDL debugger",
        "(c) VHDL emulator",
        "(d) VHDL simulator"
      ],
    },
    {
      id: 4,
      question: "When pins are configured as an output(logic 0), then the single port pins can receive a current of?",
      answer: "(d) 10mA",
      options: [
        "(a) 5mA",
        "(b) 8mA",
        "(c) 15mA",
        "(d) 10mA"
      ],
    },
    {
      id: 5,
      question: "What will be the output of the following code snippet? \nprint(2**3 + (5 + 6)**(1 + 1))",
      answer: "(a) 129",
      options: [
        "(a) 129",
        "(b) 8",
        "(c) 121",
        "(d) None"
      ],
    },
    
    {
      id: 6,
      question: "Monolithic ICs are fabricated inside __ layer?",
      answer: "(a) Tantalum",
      options: [
        "(a) Tantalum",
        "(b) Silicon",
        "(c) Germanium",
        "(d) Only a & c"
      ],
    },
    {
      id: 7,
      question: "A network provider module which helps your microcontroller to connect to any wifi network in vincity?",
      answer: "(a) ESP8266 wifi module",
      options: [
        "(a) ESP8266 wifi module",
        "(b) ESP8256 wifi module",
        "(c) ESP7266  wifi module",
      ],
    },
    {
      id: 8,
      question: "The  Pulse Width Modulated Signal is the one which is transmitted by",
      answer: "(a) analogwrite()",
      options: [
        "(a) analogwrite()",
        "(b) analogread()",
        "(c) digitalread()",
      ],
    },
    {
      id: 9,
      question: "The Atmega168 is capable of processing how many bits of data at a time ?",
      answer: "(c) 8",
      options: [
        "(a) 16",
        "(b) 32",
        "(c) 8",
      ],
    },
  ],
  extrahard: [
    {
      id: 1,
      question: "Diagram 1- this is the circuit diagram between an Arduino UNO and IR Receiver Diode - TSOP38238. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/1.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly"   
      ],
    },
    {
      id: 2,
      question: "Diagram 2- this is the circuit diagram between an Arduino UNO and DHT22/11 Humidity and Temperature Sensor. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/2.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 3,
      question: "Diagram 3- this is the circuit diagram between an Arduino UNO and Piezo Element. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/3.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 4,
      question: "Diagram 4- this is the circuit diagram between an Arduino UNO and Fingerprint Scanner - TTL (GT-511C3). Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/4.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 5,
      question: "Diagram 5- this is the circuit diagram between an Arduino UNO and BMP180 - Barometric Pressure, Temperature, Altitude Sensor. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/5.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 6,
      question: "Diagram 6- this is the circuit diagram between an Arduino UNO and Piezo Speaker - PC Mount 12mm 2.048kHz. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/6.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 7,
      question: "Diagram 7- this is the circuit diagram between an Arduino UNO and LDR - Mini Photocell. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/7.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
    {
      id: 8,
      question: "Diagram 8- this is the circuit diagram between an Arduino UNO and Infrared Thermometer - MLX90614. Is the circuit diagram correct?<br><img src = 'https://raw.githubusercontent.com/4bdul4ziz/Adaptive-Quiz/master/assets/8.PNG'/>",
      answer: "(a)	Completely Correct",
      options: [
        "(a)	Completely Correct",
        "(b)	Completely Incorrect",
        "(c)	Ground and VCC connection are correct, else everything is connected incorrectly",
        "(d)	Ground and VCC connection are not correct, else everything is connected correctly" 
      ],
    },
  ],
};

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

  $.ajax({
  url: "./scorePost.php",
  type: "POST",
  data: points,
  success: function (data) {
    console.log(data);
  }

})

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
