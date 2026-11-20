import fr from "./fr";
import en from "./en";
import ar from "./ar";

export const LANGS = ["fr", "en", "ar"];

export const content = { fr, en, ar };

export function getContent(lang) {
  return content[lang] || content.fr;
}

export default content;