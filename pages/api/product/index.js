import Axios from "axios";

export default async (req, res) => {
  const url = "https://private-4639ce-ecommerce56.apiary-mock.com/home";

  try {
    const response = await Axios.get(url);
    const getData = response.data;
    return res.status(200).json({ data: getData });
  } catch (error) {
    const { response } = error;
    return response
      ? res.status(response.status).json({
        code: response.status,
        status: response.statusText,
        message: response.data.message,
      })
      : res.status(400).json({ message: error.message });
  }
};
