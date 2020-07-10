const formAnswers = {
  1: "Always",
  2: "Very often",
  3: "Sometimes",
  4: "Not very often",
  5: "Rarely, if ever",
};

const calculationObj = {
  Competing: ["a", "e", "g"],
  Collaborating: ["d", "i", "l"],
  Avoiding: ["f", "j", "o"],
  Accommodating: ["c", "k", "n"],
  Compromising: ["b", "h", "m"],
};
// Holds form question data
const formQuestions = [
  {
    question:
      "I argue my ideas with teammates to prove the importance of the position I take.",
    letter: "a",
    answers: formAnswers,
  },
  {
    question: "I try to reach compromises through negotiation.",
    letter: "b",
    answers: formAnswers,
  },
  {
    question: "I attempt to meet the expectation of others.",
    letter: "c",
    answers: formAnswers,
  },
  {
    question:
      "I seek to investigate issues with others in order to find solutions that are mutually acceptable.",
    letter: "d",
    answers: formAnswers,
  },
  {
    question:
      "I am firm in resolve when it comes to defending my side of the issue.",
    letter: "e",
    answers: formAnswers,
  },
  {
    question:
      "I try to avoid being singled out, keeping conflict with others to myself.",
    letter: "f",
    answers: formAnswers,
  },
  {
    question: "I uphold my solutions to problems.",
    letter: "g",
    answers: formAnswers,
  },
  {
    question: "I compromise in order to reach solutions.",
    letter: "h",
    answers: formAnswers,
  },
  {
    question:
      "I trade important information with others so that problems can be solved together.",
    letter: "i",
    answers: formAnswers,
  },
  {
    question: "I avoid discussing my differences with others.",
    letter: "j",
    answers: formAnswers,
  },
  {
    question: "I try to accommodate the wishes of my peers and colleagues.",
    letter: "k",
    answers: formAnswers,
  },
  {
    question:
      "I seek to bring everyone's concerns out into the open in order to resolve disputes in the best possible way.",
    letter: "l",
    answers: formAnswers,
  },
  {
    question: "I put forward middle positions in efforts to break deadlocks.",
    letter: "m",
    answers: formAnswers,
  },
  {
    question:
      "I accept the recommendations of colleagues, peers, and coworkers.",
    letter: "n",
    answers: formAnswers,
  },
  {
    question:
      "I avoid hard feelings by keeping my disagreements with others to myself.",
    letter: "o",
    answers: formAnswers,
  },
  {
    question: "Do you think fast or slow?",
    letter: false,
    answers: {
      1: "I Think Slow",
      2: "I Think Fast",
    },
  },
  {
    question: "Are you more task or people oriented?",
    letter: false,
    answers: {
      1: "I'm more task oriented",
      2: "I'm more people oriented",
    },
  },
];


const answerObj = () => {
  // Creates a default object to hold user's answers
  let newObj = {};
  formQuestions.forEach((item) => {
    newObj[item.letter] = 0;
  });
  const savedAnswers = window.localStorage.setItem(
    "conflictAnswers",
    JSON.stringify(newObj)
  );
  return newObj;
};

const shuffleQuestions = () => {
  // Shuffles the user's questions
  let shuffled = formQuestions.sort(() => Math.random() - 0.5);
  window.localStorage.setItem("conflictQuestions", JSON.stringify(shuffled));
  return shuffled;
};

export {
  formAnswers,
  calculationObj,
  formQuestions,
  answerObj,
  shuffleQuestions,
};
