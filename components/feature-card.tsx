import type { NextPage } from "next";
import VoiceToTextTranscriptionContai from "./voice-to-text-transcription-contai";

const FeatureCard: NextPage = () => {
  return (
    <div className="absolute top-[827px] left-[6px] bg-white w-[1440px] h-[851px] text-left text-12xl text-black-button font-body">
      <VoiceToTextTranscriptionContai
        featureIconUrl="/objectother-02@2x.png"
        featureDescription="Voice-to-Text Transcription"
        appFunctionality="Never Miss a Detail"
      />
      <div className="absolute top-[151px] left-[720px] [background:linear-gradient(64.44deg,_rgba(228,_152,_163,_0.4),_rgba(228,_152,_163,_0))] w-[483px] h-[334px] overflow-hidden flex flex-col pt-[41px] px-[30px] pb-[3px] box-border items-start justify-start gap-[20px]">
        <img
          className="relative w-20 h-20 object-cover"
          alt=""
          src="/objectother-10@2x.png"
        />
        <b className="self-stretch relative">
          Actionable Insights and Summaries
        </b>
        <div className="self-stretch relative text-base leading-[150%] font-medium">
          AI-Powered Data for Every Customer Interaction
        </div>
      </div>
      <div className="absolute top-[485px] left-[723px] [background:linear-gradient(115.56deg,_rgba(165,_163,_221,_0.39),_rgba(165,_163,_221,_0))] w-[483px] h-[334px] overflow-hidden flex flex-col p-[30px] box-border items-start justify-start gap-[20px]">
        <div className="relative w-20 h-20">
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/objectother-19@2x.png"
          />
        </div>
        <b className="self-stretch relative">CRM Integration</b>
        <div className="self-stretch relative text-base leading-[150%] font-medium">
          Seamless Data Synchronization
        </div>
      </div>
      <VoiceToTextTranscriptionContai
        featureIconUrl="/objectother-17@2x.png"
        featureDescription="Call Management"
        appFunctionality="Make and Receive Calls Directly From the App"
        propTop="100px"
        propBackground="linear-gradient(-67.85deg, rgba(122, 178, 173, 0.4), rgba(255, 255, 255, 0))"
        propBoxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <div className="absolute top-[0px] left-[calc(50%_-_403px)] w-[806px] overflow-hidden flex flex-col items-start justify-start text-center text-20xl">
        <b className="relative leading-[120%] inline-block w-[769px]">
          Why Choose CleverCore AI?
        </b>
      </div>
    </div>
  );
};

export default FeatureCard;
