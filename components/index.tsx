import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type EnabledTrueLabelFalseType = {
  text?: string;

  /** Style props */
  enabledTrueLabelFalseBorder?: CSSProperties["border"];
  enabledTrueLabelFalsePosition?: CSSProperties["position"];
};

const EnabledTrueLabelFalse: NextPage<EnabledTrueLabelFalseType> = ({
  text,
  enabledTrueLabelFalseBorder,
  enabledTrueLabelFalsePosition,
}) => {
  const enabledTrueLabelFalseStyle: CSSProperties = useMemo(() => {
    return {
      border: enabledTrueLabelFalseBorder,
      position: enabledTrueLabelFalsePosition,
    };
  }, [enabledTrueLabelFalseBorder, enabledTrueLabelFalsePosition]);

  return (
    <div
      className="rounded box-border w-[295px] h-12 text-left text-lg text-color-1 font-body border-[1px] border-solid border-color-1"
      style={enabledTrueLabelFalseStyle}
    >
      <div className="absolute w-[calc(100%_-_32px)] top-[calc(50%_-_14px)] left-[16px] leading-[28px] font-medium flex items-center">
        {text}
      </div>
    </div>
  );
};

export default EnabledTrueLabelFalse;
