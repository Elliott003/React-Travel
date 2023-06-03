export const CHANGE_LANGUAGE = "change_language";

interface ChangeLanguageAction {
  type: string;
  payload: "zh" | "en";
}

export type LanguageActionTypes = ChangeLanguageAction;

export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};
