import { 
  TOGGLE_SECTION,
} from "./ActionTypes";

export const toggleSection = section => ({
  type: TOGGLE_SECTION,
  payload: section,
});