const formAnswers = {
  1: "Always",
  2: "Very often",
  3: "Sometimes",
  4: "Not very often",
  5: "Rarely, if ever",
};

const calculationObj = {
  Shark: ["a", "e", "g"],
  Owl: ["d", "i", "l"],
  Turtle: ["f", "j", "o"],
  Bear: ["c", "k", "n"],
  Fox: ["b", "h", "m"],
};
// Holds form question data
const formQuestions = [
  {
    question:
      "I argue my ideas with teammates to prove the importance of the position I take.",
    letter: "a",
  },
  {
    question: "I try to reach compromises through negotiation.",
    letter: "b",
  },
  {
    question: "I attempt to meet the expectation of others.",
    letter: "c",
  },
  {
    question:
      "I seek to investigate issues with others in order to find solutions that are mutually acceptable.",
    letter: "d",
  },
  {
    question:
      "I am firm in resolve when it comes to defending my side of the issue.",
    letter: "e",
  },
  {
    question:
      "I try to avoid being singled out, keeping conflict with others to myself.",
    letter: "f",
  },
  { question: "I uphold my solutions to problems.", letter: "g" },
  { question: "I compromise in order to reach solutions.", letter: "h" },
  {
    question:
      "I trade important information with others so that problems can be solved together.",
    letter: "i",
  },
  { question: "I avoid discussing my differences with others.", letter: "j" },
  {
    question: "I try to accommodate the wishes of my peers and colleagues.",
    letter: "k",
  },
  {
    question:
      "I seek to bring everyone's concerns out into the open in order to resolve disputes in the best possible way.",
    letter: "l",
  },
  {
    question: "I put forward middle positions in efforts to break deadlocks.",
    letter: "m",
  },
  {
    question:
      "I accept the recommendations of colleagues, peers, and coworkers.",
    letter: "n",
  },
  {
    question:
      "I avoid hard feelings by keeping my disagreements with others to myself.",
    letter: "o",
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
