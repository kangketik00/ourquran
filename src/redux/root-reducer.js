import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // get local storage

import surahs from "./surahCollections/surahs";
import searchSurah from "./searchSurah/searchSurah";
import surah from "./surahDetail/surah";
import asmaulhusna from "./asmaulhusna/asmaulhusna";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["surahs,asmaulhusna,surah"],
};

const rootReducer = combineReducers({
  surahs,
  searchSurah,
  surah,
  asmaulhusna,
});

export default persistReducer(persistConfig, rootReducer);
