import axios from "./axios";

export default axios.create({
  baseURL:
    " https://newsdata.io/api/1/latest?apikey=pub_4854937288275c0ee0a58abff3739e34745af&q=finance",
});
