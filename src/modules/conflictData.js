const conflictFormAnswers = {
  1: "Always",
  2: "Very often",
  3: "Sometimes",
  4: "Not very often",
  5: "Rarely, if ever",
};

const calculationObj = (type) => {
  if (type == "conflict") {
    return {
      Competing: ["a", "e", "g"],
      Collaborating: ["d", "i", "l"],
      Avoiding: ["f", "j", "o"],
      Accommodating: ["c", "k", "n"],
      Compromising: ["b", "h", "m"],
    };
  }
  if (type == "learning") {
    return {
      Visual: "v",
      Auditory: "a",
      Kinesthetic: "k",
    };
  }
};

// Holds form question data

const formQuestions = (type) => {
  if (type === "conflict") {
    return [
      {
        question:
          "I argue my ideas with teammates to prove the importance of the position I take.",
        letter: "a",
        answers: conflictFormAnswers,
      },
      {
        question: "I try to reach compromises through negotiation.",
        letter: "b",
        answers: conflictFormAnswers,
      },
      {
        question: "I attempt to meet the expectation of others.",
        letter: "c",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I seek to investigate issues with others in order to find solutions that are mutually acceptable.",
        letter: "d",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I am firm in resolve when it comes to defending my side of the issue.",
        letter: "e",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I try to avoid being singled out, keeping conflict with others to myself.",
        letter: "f",
        answers: conflictFormAnswers,
      },
      {
        question: "I uphold my solutions to problems.",
        letter: "g",
        answers: conflictFormAnswers,
      },
      {
        question: "I compromise in order to reach solutions.",
        letter: "h",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I trade important information with others so that problems can be solved together.",
        letter: "i",
        answers: conflictFormAnswers,
      },
      {
        question: "I avoid discussing my differences with others.",
        letter: "j",
        answers: conflictFormAnswers,
      },
      {
        question: "I try to accommodate the wishes of my peers and colleagues.",
        letter: "k",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I seek to bring everyone's concerns out into the open in order to resolve disputes in the best possible way.",
        letter: "l",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I put forward middle positions in efforts to break deadlocks.",
        letter: "m",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I accept the recommendations of colleagues, peers, and coworkers.",
        letter: "n",
        answers: conflictFormAnswers,
      },
      {
        question:
          "I avoid hard feelings by keeping my disagreements with others to myself.",
        letter: "o",
        answers: conflictFormAnswers,
      },
      {
        question: "How do you approach learning new things?",
        letter: "slow---fast",
        answers: {
          1: "Slowly",
          2: "Fast",
        },
      },
      {
        question:
          "When working in teams, are you more task or people oriented?",
        letter: "task---people",
        answers: {
          1: "Task oriented",
          2: "People oriented",
        },
      },
    ];
  }
  if (type === "learning") {
    return [
      {
        question: "If I have to learn how to do something, I learn best when I",
        letter: 1,
        answers: {
          v: "(V) Watch someone show me how.",
          a: "Hear someone tell me how.",
          k: "Try to do it myself.",
        },
      },

      {
        question: "When I read, I often find that I:",
        letter: 2,
        answers: {
          v: "Visualize what I am reading in my mind’s eye.",
          a: "Read out loud or hear the words inside my head.",
          k: "Fidget and try to “feel” the content.",
        },
      },
      // 3.
      // (V)  (A)  (K)
      {
        question: "When asked to give directions, I:",
        letter: 3,
        answers: {
          v:
            "See the actual places in my mind as I say them or prefer to draw them.",
          a: "Have no difficulty in giving them verbally.",
          k: "Have to point or move my body as I give them.",
        },
      },
      // 4.
      // (V)  (A)  (K)
      {
        question: "If I am unsure how to",
        letter: 4,
        answers: {
          v: "Write it in order to determine if it looks right.",
          a: "Spell it out loud in order to determine if it sounds right.",
          k: "Write it in order to determine if it feels right.",
        },
      },
      // 5.
      // (V)  (A)  (K)
      {
        question: "When I write I:",
        letter: 5,
        answers: {
          v:
            "Am concerned with how neat and well spaced my letters and words appear.",
          a: "Often say the letters and words to myself.",
          k:
            "Push hard on my part or pencil and can feel the flow of the words.",
        },
      },
      // 6.
      // (V) (A)  (K)
      {
        question:
          "If I had to remember a list of items, I would remember it best if:",
        letter: 6,
        answers: {
          v: " Wrote them down.",
          a: "Said them over and over to myself.",
          k: "Move around and used my fingers to name each item.",
        },
      },
      // 7.
      // (V)  (A)  (K)
      {
        question: "I prefer teachers who:",
        letter: 7,
        answers: {
          v: "Use a board or overhead projector while they lecture.",
          a: "Talk with lots of expression.",
          k: "Use hands­on activities.",
        },
      },
      // 8.
      // (V)  (A)  (K)
      {
        question: "When trying to concentrate, I have a difficult time when:",
        letter: 8,
        answers: {
          v: "There is a lot of clutter or movement in the room.",
          a: "There is a lot of noise in the room.",
          k: "I have to sit still for any length of time.",
        },
      },
      // 9.
      // (V)  (A)  (K)
      {
        question: "When solving a problem I:",
        letter: 9,
        answers: {
          v: "Write or draw diagrams to see it.",
          a: "Talk myself through it.",
          k: "Use my entire body or move objects to help me think.",
        },
      },
      // 10.
      // (V)  (A)  (K)
      {
        question:
          "When given written instructions on how to build something, I:",
        letter: 10,
        answers: {
          v:
            "Read them silently and try to visualize how the parts will fit together.",
          a:
            "Read them out loud and talk to myself as I put the part together.",
          k: "Try to put the parts together first and read later.",
        },
      },
      // 11.

      {
        question: "To keep occupied while waiting, I:",
        letter: 11,
        answers: {
          v: "Look around, stare, or read.",
          a: "Talk or listen to others.",
          k:
            "Walk around, manipulate things with my hands, or move/shake my feet as I sit.",
        },
      },

      {
        question:
          "If I had to verbally describe something to another person, I would:",
        letter: 12,
        answers: {
          v: "Be brief because I do not like to talk at length.",
          a: "Go into great detail because I like to talk.",
          k: "Gesture and move around while talking.",
        },
      },

      {
        question:
          "If someone were verbally describing something to another person, I would:",
        letter: 13,
        answers: {
          v: "Try to visualize what he/she was saying.",
          a: "Enjoy listening but want to interrupt and talk myself.",
          k: "Become bored if her/his description got too long and detailed.",
        },
      },

      {
        question: "When trying to recall names, I remember:",
        letter: 14,
        answers: {
          v: "Faces but forget names.",
          a: "Names, but forget faces.",
          k:
            "The situation where I met the person rather than the person’s name or face.",
        },
      },
    ];
  }
};

const answerObj = (type, shuffled) => {
  // Creates a default object to hold user's answers
  let newObj = {};
  shuffled.forEach((item) => {
    newObj[item.letter] = 0;
  });
  window.localStorage.setItem(`${type}Answers`, JSON.stringify(newObj));
  return newObj;
};

const shuffleQuestions = (type) => {
  // Shuffles the user's questions
  let shuffled = formQuestions(type).sort(() => Math.random() - 0.5);

  window.localStorage.setItem(`${type}Questions`, JSON.stringify(shuffled));
  return shuffled;
};

export { calculationObj, formQuestions, answerObj, shuffleQuestions };
