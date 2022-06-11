import { useState } from "react";

import PersonalInfo from "./pages/PersonalInfo";
import WorkspaceInfo from "./pages/WorkspaceInfo";
import PlanInfo from "./pages/PlanInfo";

import CustomButton from "./common/CustomButton";
import Stepper from "./common/stepper/Stepper";
import CongratsPage from "./pages/CongratsPage";

export default function Forms() {
  const [page, setPage] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnClick = () => {
    if (page === buttonText.length - 1) {
      alert("On Boarding is completed");
    } else if (page === 3) {
      setIsSubmit(true);
    } else {
      setPage((currPage) => currPage + 1);
      setIsSubmit(false);
    }
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
      return <WorkspaceInfo />;
    } else if (page === 2) {
      return <PlanInfo />;
    }
  };

  const buttonText = [
    "Create Workspace",
    "Create Workspace",
    "Create Workspace",
    "Launch Eden",
  ];

  return (
    <div>
      <Stepper formpage={page} />
      {page === 3 ? <CongratsPage /> : null}
      <div className="form-body">{PageDisplay()}</div>
      <div className="form-footer">
        <CustomButton
          pageNext={handleOnClick}
          text={buttonText[page]}
          disabled={page === 3 ? false : !isSubmit}
        />
      </div>
    </div>
  );
}
