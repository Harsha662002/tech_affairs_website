import React from "react";
import styles from "./linkcomponent.module.css";

const Linkcomponent = () => {
  const documents = [
    {
      id: 1,
      name: "Advance Request Form",
      url: "/assests/forms/Advance_Request_Form.docx",
    },
    {
      id: 2,
      name: "Budget Request form",
      url: "/assests/forms/Budget_Request_form.docx",
    },
    {
      id: 3,
      name: "Reimbursement Form",
      url: "/assests/forms/Reimbursement_Form.docx",
    },
    {
      id: 4,
      name: "SA Tech Advance Settlement Form",
      url: "/assests/forms/SA_Tech_Advance_Settlement_Form.pdf",
    },
    {
      id: 5,
      name: "SA_Tech_03_ASSET_TRANSFER_FORM",
      url: "/assests/forms/SA_Tech_03_ASSET_TRANSFER_FORM.docx",
    },
    {
      id: 6,
      name: "SA Tech Non Consumable Indent.pdf",
      url: "/assests/forms/SA_Tech_Non_Consumable_Indent.pdf",
    },
    {
      id: 7,
      name: "SA Tech Temporary Advance Form",
      url: "/assests/forms/SA_Tech_Temporary_Advance_Form.pdf",
    },
  ];

  const handleDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.substring(url.lastIndexOf("/") + 1);
    link.click();
  };
  return (
    <div className={styles.container}>
      <h3>Important Links</h3>
      <ul>
        {documents.map((document) => (
          <li key={document.id}>
            <a href="#" onClick={() => handleDownload(document.url)}>
              {document.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Linkcomponent;
