import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.giphy.com/v1/gifs";

export const ApiSearchGiphy = async (q: string, limit: number) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search?api_key=${API_KEY}&q=${q}&limit=${limit}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};
