import { declareEvents } from "./jokesForm.js";
import { checkQueryString, doApi } from "./jokesinfo.js";

const init = () => {
  checkQueryString();
  declareEvents();
};

init();
