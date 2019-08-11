import axios from "axios";

export const fetch = async (game, platform, id) => {
  const url = `http://localhost:4000/${game}/standard/profile/${platform}/${id}`;
  console.log("url", url);
  const result = await axios
    .get(url)
    .then(data => data)
    .catch(err => {
      console.log(err);
      return err;
    });
  return result;
};
