import Event from "./eventitem";
import style from "./events.module.css";

const eventlist = () => {
  return (
    <div className={style.events}>
      <Event />
      <Event />
      <Event />
      <Event />
    </div>
  );
};

export default eventlist;
