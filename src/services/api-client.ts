import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b8e666a148dd4f6ba97153413d0d1079",
  },
});
