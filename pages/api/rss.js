import Config from "../../public/config.json";
import getTimeFromServer from "./utils/getTimeFromServer";

export default function handler(req, res) {
  const { title, subtitle, link } = Config;

  const {Asia, Europe, America} = getTimeFromServer();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
      <channel>
          <title>${title}</title>
          <description>${subtitle}</description>
          <link>${link}</link>
          <language>en-us</language>
          <item>
              <title>Asia</title>
              <description>Time left for Asian banner</description>
              <days>${Asia.days}</days>
              <hours>${Asia.hours}</hours>
              <minutes>${Asia.minutes}</minutes>
              <seconds>${Asia.seconds}</seconds>
              <totalSeconds>${Asia.totalSeconds}</totalSeconds>
              <timeFormatted>${Asia.totalSeconds}</timeFormatted>
          </item>
          <item>
              <title>Europe</title>
              <description>Time left for European banner</description>
              <days>${Europe.days}</days>
              <hours>${Europe.hours}</hours>
              <minutes>${Europe.minutes}</minutes>
              <seconds>${Europe.seconds}</seconds>
              <totalSeconds>${Europe.totalSeconds}</totalSeconds>
              <timeFormatted>${Europe.totalSeconds}</timeFormatted>
          </item>
          <item>
              <title>America</title>
              <description>Time left for American banner</description>
              <days>${America.days}</days>
              <hours>${America.hours}</hours>
              <minutes>${America.minutes}</minutes>
              <seconds>${America.seconds}</seconds>
              <totalSeconds>${America.totalSeconds}</totalSeconds>
              <timeFormatted>${America.totalSeconds}</timeFormatted>
          </item>
      </channel>
  </rss>`;

  res.status(200).send(xml);
}
