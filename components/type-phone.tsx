import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TypePhoneType = {
  typePhoneTypePhone?: string;

  /** Style props */
  typePhoneIconBorderRadius?: CSSProperties["borderRadius"];
  typePhoneIconWidth?: CSSProperties["width"];
  typePhoneIconHeight?: CSSProperties["height"];
  typePhoneIconPosition?: CSSProperties["position"];
  typePhoneIconTop?: CSSProperties["top"];
  typePhoneIconRight?: CSSProperties["right"];
};

const TypePhone: NextPage<TypePhoneType> = ({
  typePhoneTypePhone,
  typePhoneIconBorderRadius,
  typePhoneIconWidth,
  typePhoneIconHeight,
  typePhoneIconPosition,
  typePhoneIconTop,
  typePhoneIconRight,
}) => {
  const typePhoneIconStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: typePhoneIconBorderRadius,
      width: typePhoneIconWidth,
      height: typePhoneIconHeight,
      position: typePhoneIconPosition,
      top: typePhoneIconTop,
      right: typePhoneIconRight,
    };
  }, [
    typePhoneIconBorderRadius,
    typePhoneIconWidth,
    typePhoneIconHeight,
    typePhoneIconPosition,
    typePhoneIconTop,
    typePhoneIconRight,
  ]);

  return (
    <img
      className="rounded-21xl w-[375px] h-[812px]"
      alt=""
      src={typePhoneTypePhone}
      style={typePhoneIconStyle}
    />
  );
};

export default TypePhone;
