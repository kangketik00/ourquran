import { combineReducers } from "redux";

import surahs from "./surahs";
import searchSurah from "./searchSurah";
import surah from "./surah";
import asmaulhusna from "./asmaulhusna";

export default combineReducers({
  surahs,
  searchSurah,
  surah,
  asmaulhusna,
});
