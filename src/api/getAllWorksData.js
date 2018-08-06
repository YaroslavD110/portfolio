import config from "../config";
import normalizationWorksData from "../utils/normalizationWorksData";

export default new Promise((resolve, reject) => {
  fetch(`${config.siteUri}/wp-json/tg-api/v1/works/data`)
    .then(res => res.json())
    .then(res => resolve(normalizationWorksData(res)))
    .catch(error => reject(error));
});
