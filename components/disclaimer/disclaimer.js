import React from "react";
import Styles from "./disclaimer.module.css";

const disclaimer = () => {
  return (
    <div>
      <h2 className={Styles.heading}>Disclaimer</h2>
      <div className={Styles.content}>
        <h3>Content Disclaimer</h3>
        <p>
          All information provided in the "Technical Affairs IIITDM
          Kancheepuram" hereafter referred to as "Tech Affairs", Website is
          provided for information purposes only and does not constitute a legal
          contract between Tech Affairs and any person or entity unless
          otherwise specified. Information on official Tech Affairs websites is
          subject to change without prior notice. Although every reasonable
          effort is made to present current and accurate information, Tech
          Affairs makes no guarantees of any kind.
        </p>
        <p>
          The Tech Affairs website may contain information that is created and
          maintained by a variety of sources both internal and external to the
          Institute. These sites are unmoderated forums containing the personal
          opinions and other expressions of the persons who post the entries.
          Tech Affairs does not control, monitor, or guarantee the information
          contained in these sites or information contained in links to other
          external websites, and does not endorse any views expressed or
          products or services offered therein. In no event shall tech Affairs
          be responsible or liable, directly or indirectly, for any damage or
          loss caused or alleged to be caused by or in connection with the use
          of or reliance on any such content, goods, or services available on or
          through any such site or resource.
        </p>
      </div>
      <div className={Styles.link}>
        <h3>Link Disclaimer</h3>
        <p>
          Any links to external websites and/or non-Institute information
          provided on tech Affairs pages or returned from tech Affairs web
          search engines are provided as a courtesy. They should not be
          construed as an endorsement by Tech Affairs of the content or views of
          the linked materials.
        </p>
      </div>
    </div>
  );
};

export default disclaimer;
