import { RECEIVE_ENTRIES, ADD_CARD, ADD_DECK } from "../actions";
import { getDeck } from "../utils/api";
import { saveDecksToStore } from "../utils/api";
const intialState = {
  data: [
    {
      title: "React",
      key: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    {
      key: "JavaScript",
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer:
            "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  ]
};

function mergelist(first, second) {
  var lookUp = {};

  for (var i = 0; i < first.length; i++) {
    let x = first[i];
    lookUp[x.key] = x;
  }

  for (var i = 0; i < second.length; i++) {
    let x = second[i];
    lookUp[x.key] = x;
  }

  var ret = [];
  for (var key in lookUp) {
    ret.push(lookUp[key]);
  }

  return ret;
}

function entries(state = intialState, action) {
  const { key } = action;

  switch (action.type) {
    case RECEIVE_ENTRIES:
      let { decklist } = action;

      let data = mergelist(state.data, decklist);
      return {
        ...state,
        data
      };

    case ADD_CARD:
      let nextDecks = state.data.filter(x => {
        return x.key !== key;
      });
      let addDeck = { ...getDeck({ id: key, state: state }) };
      const { question, answer } = action;
      addDeck.questions.push({ question, answer });
      nextDecks.push(addDeck);

      let nextState = { ...state, data: nextDecks };
      saveDecksToStore({ decks: nextDecks });
      return nextState;

    case ADD_DECK:
      let addDecks = [...state.data];
      let { title } = action;
      addDecks.push({ key, title, questions: [] });
      saveDecksToStore({ decks: addDecks });
      return { ...state, data: addDecks };

    default:
      return state;
  }
}

export default entries;
