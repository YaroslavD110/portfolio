import config from "../config";
import initNormalizationWorksData from "../utils/initNormalizationWorksData";

export default new Promise((resolve, reject) => {
  fetch(`${config.siteUri}/wp-json/wp/v2/posts`)
    .then(res => res.json())
    .then(res => resolve(initNormalizationWorksData(res)))
    .catch(error => reject(error));
});
