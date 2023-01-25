import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const TippyWrapper = ({
  htmlContent = "",
  ActionConfirmed = () => {},
  inplaceConfirm = true,
  message = "Are you sure?"
}: any) => {
  const [visible, setVisible] = useState(false);
  const show = () => {
    setVisible(true);
  };
  const hide = () => setVisible(false);

  const ConfirmContent = () => {
    return (
      <div className="inplace-confirm">
        <label>{message}</label>
        <div className="btn-wrapper ncl-flex jc-space-evenly">
          <button
            type="button"
            onClick={() => {
              hide();
              ActionConfirmed();
            }}
          >
            Yes
          </button>
          <button
            type="button"
            onClick={() => {
              hide();
            }}
          >
            No
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Tippy
        content={inplaceConfirm ? ConfirmContent() : ConfirmContent()}
        visible={visible}
        onClickOutside={hide}
        animation={"scale-subtle"}
        interactive={true}
        arrow={false}
        placement={inplaceConfirm ? "left" : "bottom"}
      >
        <div onClick={visible ? hide : show}>{htmlContent}</div>
      </Tippy>
    </>
  );
};

export default TippyWrapper;
