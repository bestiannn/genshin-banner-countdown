import Times from "./times.json";

export default function handler(req, res) {
  res.status(200).json(Times);
}