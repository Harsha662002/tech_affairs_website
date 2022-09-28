import React from "react";
import clubcardcss from "../../styles/Clubcard.module.css";

const Clubcard = (props) => {
  return (
    <div className={clubcardcss.container}>
      <div className={clubcardcss.card} style={{ flexDirection: props.type }}>
        <div className={clubcardcss.info}>
          <div className={clubcardcss.flexcol1}>
            <div className={clubcardcss.flexrow1}>
              <div className={clubcardcss.block}></div>
              <div className={clubcardcss.flexcol2}>
                <h1 className={clubcardcss.name}> {props.name} </h1>
                <h3 className={clubcardcss.mail}> {props.mail} </h3>
              </div>
            </div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              incidunt sapiente ad inventore, nihil beatae explicabo
              consectetur, odit vel commodi aut in quo quis. Recusandae, fuga.
              Nam exercitationem commodi fugiat id necessitatibus dolore maxime
              neque amet aliquid quidem architecto cumque itaque autem
              dignissimos perferendis, nihil quae laudantium aperiam! Maiores
              dolor voluptas aperiam, eos repellendus rem ipsa iure at quis
              exercitationem deserunt nam numquam distinctio alias saepe
              delectus dignissimos. Nesciunt, eligendi?
            </p>
          </div>
          <div className={clubcardcss.flexrow2}>
            <p>Representative 1</p>
            <p>Representative 2</p>
          </div>
        </div>
        <div className={clubcardcss.image}></div>
      </div>
    </div>
  );
};

export default Clubcard;
