import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type VoiceToTextTranscriptionContaiType = {
  featureIconUrl?: string;
  featureDescription?: string;
  appFunctionality?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBackground?: CSSProperties["background"];
  propBoxShadow?: CSSProperties["boxShadow"];
};

const VoiceToTextTranscriptionContai: NextPage<
  VoiceToTextTranscriptionContaiType
> = ({
  featureIconUrl,
  featureDescription,
  appFunctionality,
  propTop,
  propBackground,
  propBoxShadow,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      background: propBackground,
      boxShadow: propBoxShadow,
    };
  }, [propTop, propBackground, propBoxShadow]);

  return (
    <div
      className="absolute top-[405px] left-[245px] [background:linear-gradient(247.85deg,_rgba(37,_35,_100,_0.4),_rgba(255,_255,_255,_0))] w-[478px] h-[305px] overflow-hidden flex flex-col p-5 box-border items-start justify-start gap-[20px] text-left text-12xl text-black-button font-body"
      style={frameDivStyle}
    >
      <img
        className="relative w-20 h-20 object-cover"
        alt=""
        src={featureIconUrl}
      />
      <b className="self-stretch relative">{featureDescription}</b>
      <div className="self-stretch relative text-base leading-[150%] font-medium">
        {appFunctionality}
      </div>
    </div>
  );
};

export default VoiceToTextTranscriptionContai;
