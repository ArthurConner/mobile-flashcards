export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries
  };
}

export function addDeck({ key, title }) {
  return {
    type: ADD_DECK,
    key,
    title
  };
}

export function addCard({ key, question, answer }) {
  return {
    type: ADD_CARD,
    question,
    answer,
    key
  };
}
