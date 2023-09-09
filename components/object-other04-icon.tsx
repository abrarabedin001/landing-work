import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type ObjectOther04IconType = {
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

const ObjectOther04Icon: NextPage<ObjectOther04IconType> = ({
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
  const objectOther04IconStyle: CSSProperties = useMemo(() => {
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
      className="absolute h-[17.21%] w-[21.6%] top-[56.23%] right-[56.46%] bottom-[26.56%] left-[21.94%] max-w-full overflow-hidden max-h-full object-cover"
      alt=""
      src="/objectother-04@2x.png"
      style={objectOther04IconStyle}
    />
  );
};

export default ObjectOther04Icon;
