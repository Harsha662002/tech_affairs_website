import Event from "./eventitem";
import style from "./events.module.css";

const eventlist = () => {
  return (
    <div className={style.events}>
      <div className={style.events_flexbox}>
        <div className={style.events_flexbox_item}>
          <Event
            event_num={0}
            image="sae.jpg"
            club="SAE CLUB"
            date="10/11/2022"
            time="18:00"
            desc="Matlab and Simulink Workshop"
            title="Mathworks Workshop"
          />
        </div>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          <Event
            event_num={1}
            image="sae.jpg"
            club="SAE CLUB"
            date="13/11/2022"
            time="12:00"
            desc="Design and Manufacturing of ATV's"
            title="SAE Technical Workshop"
          />
        </div>
      </div>
      <div className={style.events_flexbox2}>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          {/* <Event
            event_num={2}
            image="techaffairslogo.png"
            club="ZUNO"
            date="9/11/2022"
            time="17:30"
            desc="Skills to enchance productivity like Time Management, Task Allotment"
            title="Productivity Hacks"
          />
        </div>
        <div
          className={
            style.events_flexbox_item + " " + style.events_flexbox_temp
          }
        >
          <Event
            event_num={3}
            image="sae.jpg"
            club="SAE CLUB"
            date="13/11/2022"
            time="12:00"
            desc="Design and Manufacturing of ATV's"
            title="SAE Technical Workshop"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default eventlist;
