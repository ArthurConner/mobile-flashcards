import { RECEIVE_ENTRIES, ADD_ENTRY } from "../actions";

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

function entries(state = intialState, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      };
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry
      };
    default:
      return state;
  }
}

export default entries;
