import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ObjectOther09IconType = {
  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propMaxWidth?: CSSProperties["maxWidth"];
  propOverflow?: CSSProperties["overflow"];
  propMaxHeight?: CSSProperties["maxHeight"];
};

const ObjectOther09Icon: NextPage<ObjectOther09IconType> = ({
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propMaxWidth,
  propOverflow,
  propMaxHeight,
}) => {
  const objectOther09IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      maxHeight: propMaxHeight,
    };
  }, [
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propMaxWidth,
    propOverflow,
    propMaxHeight,
  ]);

  return (
    <img
      className="absolute h-[17.21%] w-[21.6%] top-[34.53%] right-[22.43%] bottom-[48.26%] left-[55.97%] max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      src="/objectother-09@2x.png"
      style={objectOther09IconStyle}
    />
  );
};

export default ObjectOther09Icon;
