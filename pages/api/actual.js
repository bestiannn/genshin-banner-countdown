import getTimeFromServer from "./utils/getTimeFromServer";

export default function handler(req, res) {
  res.status(200).json(getTimeFromServer());
}
