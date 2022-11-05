import Style from "./honeycomb.module.css";
import { useState } from "react";
import Image_modal from "./image_modal";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
const Hexagon = (props) => {
  const [check, setcheck] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  // let logo = require(props.details.path);
  function changeLeave(e) {
    // setcheck(false);
    e.target.style.filter = "contrast(100%)";
  }
  function onclickfunc(e) {
    setcheck(true);
    e.target.style.background = "blur(0px);";
    console.log("came to click");
    console.log(props.details.image);
  }
  if (props.visibility === "none") {
    return <li className={Style.honeycombcell}></li>;
  } else {
    return (
      <>
        <li className={Style.honeycombcell}>
          <img
            className={Style.imageclip}
            onClick={() => setModalOpen(!modalOpen)}
            // onMouseEnter={changeBackground}
            onMouseLeave={changeLeave}
            data-toggle="modal"
            data-target="#exampleModalCenter"
            src={`/assests/images/team/${props.details.image}`}
            alt="logo"
          />

          <Button
            color="primary"
            type="button"
            onClick={() => setModalOpen(props.status)}
          >
            Launch demo modal
          </Button>
          <Modal toggle={() => setModalOpen(modalOpen)} isOpen={modalOpen}>
            <ModalBody>
              {<Image_modal details={props.details} status={modalOpen} />}
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                type="button"
                onClick={() => setModalOpen(!modalOpen)}
              >
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </li>
      </>
    );
  }
};

export default Hexagon;
