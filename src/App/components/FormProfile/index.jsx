import React, { useState, useMemo, useCallback, useContext } from "react";
import "../css/formprofile.css";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineHttp, MdOutlineContentCopy } from "react-icons/md";
import Button from "../Button";

function FormProfile() {
  return (
    <div className="Form">
      <div className="Form_box">
        <form>
          <div className="Form_box_input">
            <label htmlFor="name">Username</label>
            <input
              type="text"
              placeholder="shoaib bhai"
              className="Form_box_input_userName"
            />
          </div>

          <div className="Form_box_input">
            <label htmlFor="email">Email</label>
            <div className="Form_box_input_box">
              <div className="Form_box_input_box_icon">
                <HiOutlineMail />
              </div>
              <input type="text" placeholder="Email*" />
            </div>
          </div>
          <div className="Form_box_input">
            <label htmlFor="wallet">Wallet address</label>
            <div className="Form_box_input_box">
              <div className="Form_box_input_box_icon">
                <MdOutlineHttp />
              </div>
              <input
                type="text"
                placeholder="0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8"
              />
              <div className="Form_box_input_box_icon">
                <MdOutlineContentCopy />
              </div>
            </div>
          </div>

          <div className="Form_box_btn">
            <Button
              btnName="Upload profile"
              handleClick={() => {}}
              classStyle="button"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProfile;
