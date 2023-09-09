import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ButtonPrimaryType = {
  buttonText?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propWidth?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
};

const ButtonPrimary: NextPage<ButtonPrimaryType> = ({
  buttonText,
  propPosition,
  propWidth,
  propTop,
  propRight,
  propLeft,
}) => {
  const buttonPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      width: propWidth,
      top: propTop,
      right: propRight,
      left: propLeft,
    };
  }, [propPosition, propWidth, propTop, propRight, propLeft]);

  return (
    // <div
    //   className="rounded bg-color-2 h-12 flex flex-row py-0 px-4 box-border items-center justify-center text-left text-lg text-white font-body"
    //   style={buttonPrimaryStyle}
    // >
    //   <b className="relative leading-[28px]">{buttonText}</b>
    // </div>
    <button
    className="rounded bg-color-2 h-12 flex flex-row py-0 px-4 box-border items-center justify-center text-left text-lg text-white font-body  hover:scale-105"
      >
      {buttonText}
    </button>
  );
};

export default ButtonPrimary;
