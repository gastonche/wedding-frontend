// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "../../data/attendees.json";
import fs from "fs";
export default function handler(req, res) {
  const attendees = [...data];
  const index = req.query.index;
  const person = attendees[index];
  person.Phone &&
    !person.attended &&
    fetch(
      `http://crocko.237sms.com/api/webhook/settag?phone=237${person.Phone}`
    )
  res.status(200).json(attendees);
}
