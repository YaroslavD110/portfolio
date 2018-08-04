import { siteUri } from "../config";
import normalizationAppSettingsData from "../utils/normalizationAppSettingsData";

export default new Promise((resolve, reject) => {
  fetch(`${siteUri}/wp-json/acf/v3/pages/2`)
    .then(res => res.json())
    .then(res => resolve(normalizationAppSettingsData(res)))
    .catch(error => reject(error));
});
