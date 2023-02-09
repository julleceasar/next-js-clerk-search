import axios from "axios";


async function handler(req, res) {
const options = {
    method: "GET",
    url: "http://api.clerk.io/v2/search/search",
    params: {
      key: "FSyEZOtoDPncLYS3ifjNby4JFoCBfLP9",
      query: req.query.searchQuery,
      limit: "5",
      longtail: "false",
      offset: "0",
      order: "asc",
    },
    headers: { accept: "application/json" },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.result);
      res.json(response.data.result)
    })
    .catch(function (error) {
      console.error(error);
    });

}   

export default handler;
