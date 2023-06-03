import i18n from "../../i18n/configs";
import { changeLanguage } from "i18next";
import { CHANGE_LANGUAGE, LanguageActionTypes } from "./lanageActions";
export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}
const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};
export default (state = defaultState, action: LanguageActionTypes) => {
  if (action.type === CHANGE_LANGUAGE) {
    i18n.changeLanguage(action.payload);
    return { ...state, language: action.payload };
  }
  return state;
};
