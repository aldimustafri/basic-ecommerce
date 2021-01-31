import Axios from "axios";

export default async (req, res) => {
  const { query: { id } } = req;
  const url = "https://private-4639ce-ecommerce56.apiary-mock.com/home";

  try {
    const response = await Axios.get(url);
    const getData = response.data[0].data.productPromo;
    const getDatabyID = getData.find((item) => (item.id === id));

    return res.status(200).json({ data: getDatabyID });
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
