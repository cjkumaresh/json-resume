import { ADD_ARTICLE } from "../constants";

export function addArticle(payload: string) {
  return { type: ADD_ARTICLE, payload };
}
