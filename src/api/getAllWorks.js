import config from "../config";
import normalizationWorksData from "../utils/normalizationWorksData";

export default new Promise((resolve, reject) => {
  fetch(`${config.siteUri}/wp-json/wp/v2/posts`)
    .then(res => res.json())
    .then(res => resolve(normalizationWorksData(res)))
    .catch(error => reject(error));
});
