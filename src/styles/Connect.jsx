import React from 'react';
import styled from 'styled-components';
import { AiOutlineMessage } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";

const Button = () => {
  return (
    <StyledWrapper>
      <button className="noselect"><span className="text">Connect
        </span><span className="icon"><RiMessage2Fill /></span></button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
   width: 150px;
   height: 50px;
   cursor: pointer;
   display: flex;
   align-items: center;
   background: red;
   border: none;
   border-radius: 5px;
   box-shadow: 1px 1px 3px rgba(0,0,0,0.15);
   background: #A16207;
  }

  button, button span {
   transition: 200ms;
  }

  button .text {
   transform: translateX(35px);
   color: white;
   font-weight: bold;
  }

  button .icon {
   position: absolute;
   border-left: 1px solid #ffffff;
   transform: translateX(110px);
   height: 40px;
   width: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
  }

  button svg {
   width: 15px;
   fill: #eee;
  }

  button:hover {
   background: #A16207;
  }

  button:hover .text {
   color: transparent;
  }

  button:hover .icon {
   width: 150px;
   border-left: none;
   transform: translateX(0);
  }

  button:focus {
   outline: none;
  }

  button:active .icon svg {
   transform: scale(0.8);
  }`;

export default Button;
