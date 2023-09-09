import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TypeBrowserType = {
  bar?: string;

  /** Style props */
  typeBrowserBorderRadius?: CSSProperties["borderRadius"];
  typeBrowserBackgroundColor?: CSSProperties["backgroundColor"];
  typeBrowserBorder?: CSSProperties["border"];
  typeBrowserWidth?: CSSProperties["width"];
  typeBrowserHeight?: CSSProperties["height"];
  typeBrowserFlexShrink?: CSSProperties["flexShrink"];
  typeBrowserPosition?: CSSProperties["position"];
  typeBrowserTop?: CSSProperties["top"];
  typeBrowserRight?: CSSProperties["right"];
  groupDivWidth?: CSSProperties["width"];
  groupDivHeight?: CSSProperties["height"];
  barIconHeight?: CSSProperties["height"];
  buttonTop?: CSSProperties["top"];
  buttonLeft?: CSSProperties["left"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonWidth?: CSSProperties["width"];
  buttonHeight?: CSSProperties["height"];
  buttonTop1?: CSSProperties["top"];
  buttonLeft1?: CSSProperties["left"];
  buttonBorderRadius1?: CSSProperties["borderRadius"];
  buttonWidth1?: CSSProperties["width"];
  buttonHeight1?: CSSProperties["height"];
  buttonTop2?: CSSProperties["top"];
  buttonLeft2?: CSSProperties["left"];
  buttonBorderRadius2?: CSSProperties["borderRadius"];
  buttonWidth2?: CSSProperties["width"];
  buttonHeight2?: CSSProperties["height"];
};

const TypeBrowser: NextPage<TypeBrowserType> = ({
  bar,
  typeBrowserBorderRadius,
  typeBrowserBackgroundColor,
  typeBrowserBorder,
  typeBrowserWidth,
  typeBrowserHeight,
  typeBrowserFlexShrink,
  typeBrowserPosition,
  typeBrowserTop,
  typeBrowserRight,
  groupDivWidth,
  groupDivHeight,
  barIconHeight,
  buttonTop,
  buttonLeft,
  buttonBorderRadius,
  buttonWidth,
  buttonHeight,
  buttonTop1,
  buttonLeft1,
  buttonBorderRadius1,
  buttonWidth1,
  buttonHeight1,
  buttonTop2,
  buttonLeft2,
  buttonBorderRadius2,
  buttonWidth2,
  buttonHeight2,
}) => {
  const typeBrowserStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: typeBrowserBorderRadius,
      backgroundColor: typeBrowserBackgroundColor,
      border: typeBrowserBorder,
      width: typeBrowserWidth,
      height: typeBrowserHeight,
      flexShrink: typeBrowserFlexShrink,
      position: typeBrowserPosition,
      top: typeBrowserTop,
      right: typeBrowserRight,
    };
  }, [
    typeBrowserBorderRadius,
    typeBrowserBackgroundColor,
    typeBrowserBorder,
    typeBrowserWidth,
    typeBrowserHeight,
    typeBrowserFlexShrink,
    typeBrowserPosition,
    typeBrowserTop,
    typeBrowserRight,
  ]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
    };
  }, [groupDivWidth, groupDivHeight]);

  const barIconStyle: CSSProperties = useMemo(() => {
    return {
      height: barIconHeight,
    };
  }, [barIconHeight]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      top: buttonTop,
      left: buttonLeft,
      borderRadius: buttonBorderRadius,
      width: buttonWidth,
      height: buttonHeight,
    };
  }, [buttonTop, buttonLeft, buttonBorderRadius, buttonWidth, buttonHeight]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      top: buttonTop1,
      left: buttonLeft1,
      borderRadius: buttonBorderRadius1,
      width: buttonWidth1,
      height: buttonHeight1,
    };
  }, [
    buttonTop1,
    buttonLeft1,
    buttonBorderRadius1,
    buttonWidth1,
    buttonHeight1,
  ]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      top: buttonTop2,
      left: buttonLeft2,
      borderRadius: buttonBorderRadius2,
      width: buttonWidth2,
      height: buttonHeight2,
    };
  }, [
    buttonTop2,
    buttonLeft2,
    buttonBorderRadius2,
    buttonWidth2,
    buttonHeight2,
  ]);

  return (
    <div
      className="rounded-21xl bg-white box-border w-[1280px] h-[800px] overflow-hidden shrink-0 border-[10px] border-solid border-color-1"
      style={typeBrowserStyle}
    >
      <div
        className="absolute w-full top-[0px] right-[0px] left-[0px] h-[60px]"
        style={groupDivStyle}
      >
        <img
          className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[60px]"
          alt=""
          src={bar}
          style={barIconStyle}
        />
        <div
          className="absolute top-[20px] left-[40px] rounded-80xl bg-white w-5 h-5"
          style={buttonStyle}
        />
        <div
          className="absolute top-[20px] left-[70px] rounded-80xl bg-white w-5 h-5"
          style={button1Style}
        />
        <div
          className="absolute top-[20px] left-[100px] rounded-80xl bg-white w-5 h-5"
          style={button2Style}
        />
      </div>
    </div>
  );
};

export default TypeBrowser;
