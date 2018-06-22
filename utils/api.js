import { AsyncStorage } from "react-native";
import { FLASHCARD_STORAGE_KEY } from "./_flashcard";

export function submitEntry({ entry, key }) {
  return AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [key]: entry
    })
  );
}

export function removeEntry(key) {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    const data = JSON.parse(results);
    data[key] = undefined;
    delete data[key];
    AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data));
  });
}

let callback = null;

export function deckCB(results) {
  let dataStore = JSON.parse(results);
  let decklist = dataStore["decks"];
  let sig = { decklist };
  callback(sig);
}

export function loadDecksFromStore({ cb }) {
  callback = cb;
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(deckCB);
}
export function saveDecksToStore({ decks }) {
  console.log("going to save", decks);
  return AsyncStorage.setItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      decks
    }),
    error => {
      console.log("we should have saved else", error);
    }
  );
}

export function getDecks({ state }) {
  return {
    data: state["data"]
  };
}

export function getDeck({ state, id }) {
  items = state["data"].filter(x => {
    return x.key === id;
  });

  if (items === undefined || items.length === 0) {
    console.log("no item", id);

    return {
      title: "",
      key: "",
      questions: []
    };
  }
  return items[0];
}

export function saveDeckTitle({ title }) {}

export function addCardToDecks({ title, card }) {}
