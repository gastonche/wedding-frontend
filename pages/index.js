import { useRouter } from "next/router";
import { useState } from "react";
import data from "../data/attendees.json";
import style from "../styles/Home.module.css";

const Person = ({
  id,
  Name,
  Table,
  Group,
  attended,
  invitees,
  ID,
  index,
  onSubmit,
}) => {
  const [count, setCount] = useState(1);
  function submit() {
    fetch(`/api/hello?index=${index}&attended=${count}`)
      .then((res) => res.json())
      .then(onSubmit);
  }
  return (
    <div className={`${style.card} ${id == ID ? style.active : ""} ${attended >= 1? style.attended: ''}`}>
      <p className={style.title}>{Name}</p>

      <div className={style.details}>
        <div>
          <div className={style.data}>
            <b>Table:</b>
            <span>{Table}</span>
          </div>

          <div className={style.data}>
            <b>Attendance:</b>
            <span>
              {attended || 0}/{invitees}
            </span>
          </div>

          <div className={style.data}>
            <b>Group:</b>
            <span>{Group}</span>
          </div>
        </div>
        <div className={style.attendance}>
          <input value={count} onChange={(e) => setCount(e.target.value)} />
          <button onClick={submit}>Mark Attended</button>
        </div>
      </div>
    </div>
  );
};
const SearchBox = () => {
  const [term, setTerm] = useState("");
  const [people, setPeople] = useState(data);
  const {
    query: { id },
  } = useRouter();

  const attendees = people
    .map((attendee, index) => ({ ...attendee, index }))
    .filter(({ Name }) => Name.toLowerCase().includes(term.toLowerCase()))
    .sort((a, b) => (!id ? 1 : a.id == id ? -1 : b.id == id ? 1 : -1));

  return (
    <div className={style.container}>
      <label htmlFor="name" className={style.title}>
        Please search a name
      </label>
      <input
        id="name"
        className={style.field}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>
        {attendees.map((attendee) => (
          <Person
            key={`${attendee.Name}-${attendee.id}`}
            {...attendee}
            ID={id}
            onSubmit={setPeople}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchBox;
