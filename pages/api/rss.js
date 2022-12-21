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
              <description>${Asia.timeFormatted}</description>
          </item>
          <item>
              <title>Europe</title>
              <description>${Europe.timeFormatted}</description>
          </item>
          <item>
              <title>America</title>
              <description>${America.timeFormatted}</description>
          </item>
      </channel>
  </rss>`;

  res.status(200).send(xml);
}
