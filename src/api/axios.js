import Axios from "axios";

export default Axios.create({
  baseURL: "https://covid19.mathdro.id/api"
})