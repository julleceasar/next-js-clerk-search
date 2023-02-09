import axios from "axios";


async function handler(req, res) {
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    `https://api.clerk.io/v2/products?key=FSyEZOtoDPncLYS3ifjNby4JFoCBfLP9&private_key=TVBZ8HtWNxv2HXcFQpSHdzaPlu0aL7WKDGrptzd7Gy&products=${req.query.productIds}`,
    options
  )
    .then((response) => response.json())
    .then((response) => res.json(response.products))
    .catch((err) => console.error(err));
}

export default handler;
