import Event from "./eventitem";
import style from "./events.module.css";

const eventlist = () => {
  return (
    <div className={style.events}>
      <div className={style.events_flexbox}>
        <div className={style.events_flexbox_item}>
          <Event event_num={0} />
        </div>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          <Event event_num={1} />
        </div>
      </div>
      <div className={style.events_flexbox2}>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          <Event event_num={2} />
        </div>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          <Event event_num={3} />
        </div>
      </div>
    </div>
  );
};

export default eventlist;
