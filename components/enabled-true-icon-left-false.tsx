import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type EnabledTrueIconLeftFalseType = {
  label?: string;

  /** Style props */
  enabledTrueIconLeftFalseBorder?: CSSProperties["border"];
  labelColor?: CSSProperties["color"];
  labelTextAlign?: CSSProperties["textAlign"];
};

const EnabledTrueIconLeftFalse: NextPage<EnabledTrueIconLeftFalseType> = ({
  label,
  enabledTrueIconLeftFalseBorder,
  labelColor,
  labelTextAlign,
}) => {
  const enabledTrueIconLeftFalseStyle: CSSProperties = useMemo(() => {
    return {
      border: enabledTrueIconLeftFalseBorder,
    };
  }, [enabledTrueIconLeftFalseBorder]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      color: labelColor,
      textAlign: labelTextAlign,
    };
  }, [labelColor, labelTextAlign]);

  return (
    <div
      className="rounded bg-white box-border h-12 flex flex-row py-0 px-4 items-center justify-center text-center text-lg text-color-1 font-body border-[3px] border-solid border-color-1"
      style={enabledTrueIconLeftFalseStyle}
    >
      <b className="relative leading-[28px]" style={labelStyle}>
        {label}
      </b>
    </div>
  );
};

export default EnabledTrueIconLeftFalse;
