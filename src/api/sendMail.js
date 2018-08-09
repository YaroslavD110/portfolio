import config from "../config";

export default mail =>
  new Promise((resolve, reject) => {
    fetch(`${config.siteUri}/wp-json/tg-api/v1/mail`, {
      method: "post",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(mail)
    })
      .then(res => {
        if (res.status === 200) {
          resolve("дякую за повідомлення, я відповім вам найближчим часом :)");
        } else {
          reject("вибачте, але щось пішло не так :(");
        }
      })
      .catch(err => reject("вибачте, але щось пішло не так :("));
  });
