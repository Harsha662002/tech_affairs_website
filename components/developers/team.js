import TeamMember from "./teammember.js";
import Classes from "./deve.module.css";

export default function Team(props) {
  let elements = props.data.map((element) => {
    return (
      <TeamMember
        key={element.key}
        keye={element.key}
        name={element.name}
        image={element.image}
        rollno={element.rollno}
      />
    );
  });
  return (
    <div>
      <h1 className={Classes.heading}>{props.title}</h1>
      <div className={Classes.team_container}>{elements}</div>
    </div>
  );
}
