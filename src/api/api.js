import axios from "axios";

const BACKEND_POINT = "https://qtify-backend-labs.crio.do";

export async function fetchTopAlbums() {
  try {
    const res = await axios.get(`${BACKEND_POINT}/albums/top`);
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
