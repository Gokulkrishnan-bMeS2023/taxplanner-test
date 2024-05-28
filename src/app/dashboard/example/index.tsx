import axios from "axios";

const getmethod = async () =>
  await axios.get("https://taxplanner-test-json.onrender.com/user");

export default getmethod;
