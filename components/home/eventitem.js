import Image from "next/image";
import logo from "../../public/assests/images/techaffairslogo.png";
import style from "./events.module.css";
// import FontAwesomeIcon from 'react-fontawesome';

import React, { Component } from "react";
export class eventitem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 10,
    category: "general",
  };
  constructor() {
    super();
    this.state = {
      _id: "1",
      title: " ",
      description: " ",
      club: "",
      date: "",
      time: "",
      __v: 0,
      loading: false,
    };
  }
  async Updatealert(a) {
    const url = `https://techaffairs-backend.herokuapp.com/events`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    let dateeve = parsedData[a].date.slice(0, 10);
    let timeeve = parsedData[a].date.slice(11, 16);
    this.setState({
      _id: parsedData[a]._id,
      title: parsedData[a].title,
      description: parsedData[a].description,
      club: parsedData[a].club,
      date: dateeve,
      time: timeeve,
      __v: parsedData[a].__v,
      loading: false,
    });
  }
  async componentDidMount() {
    this.Updatealert(this.props.event_num);
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.image}>
          <Image src={logo} height={100} width={100} />
        </div>
        <div className={style.text}>
          <h5>{this.state.title}</h5>
          <p className={style.date_time}>
            <i className="bi bi-building">&nbsp;{this.state.club}</i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class="bi bi-calendar">
              &nbsp;{this.state.date} {this.state.time}
            </i>
          </p>
          <p className={style.details}>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
export function createNews() {
  return new eventitem(props);
}
export default eventitem;

// export default function eventitem() {
//   return (
// <div className={style.container}>
//   <div className={style.image}>
//     <Image src={logo} height={100} width={100} />
//   </div>
//   <div className={style.text}>
//     <h5>Event Name</h5>
//     <p className={style.date_time}>
//       <i className="bi bi-building">&nbsp;Club Name</i>
//       &nbsp;&nbsp;&nbsp;&nbsp;
//       <i class="bi bi-calendar">&nbsp;Date and time</i>
//     </p>
//     <p className={style.details}>
//       sapien. Nulla vitae ultrices urna. Duis tincidunt molestie sodales.
//     </p>
//   </div>
// </div>
//   );
// }
