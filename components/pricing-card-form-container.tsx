import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import ButtonPrimary from "./button-primary";

type PricingCardFormContainerType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const PricingCardFormContainer: NextPage<PricingCardFormContainerType> = ({
  propBackgroundColor,
}) => {
  const pricing2CardsCenterStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className="absolute top-[3574px] left-[0px] bg-lavender w-[1440px] h-[1120px] overflow-hidden text-left text-sm text-black-button font-body"
      style={pricing2CardsCenterStyle}
    >
      <div className="absolute top-[120px] left-[calc(50%_-_265px)] w-[516px]" />
      <div className="absolute top-[143px] left-[386px] w-[653px] overflow-hidden flex flex-col items-start justify-start text-center text-20xl">
        <b className="self-stretch relative leading-[120%]">
          Affordable Packages for Every Size of Team
        </b>
      </div>
      <div className="absolute top-[383px] left-[332px] rounded-3xs [background:linear-gradient(180deg,_#e56a74,_#f9dadf)] shadow-[0px_0px_40px_rgba(0,_0,_0,_0.1)] w-80 h-[472px] overflow-hidden">
        <div className="absolute top-[40px] left-[59.61px] w-[200px] flex flex-col items-start justify-start">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[60px]">
            <b className="self-stretch relative leading-[150%]">
              Individual Plan
            </b>
            <b className="self-stretch relative text-34xl leading-[120%]">
              $60
            </b>
          </div>
        </div>
        <ButtonPrimary
          buttonText="Buy Now"
          propPosition="absolute"
          propWidth="calc(100% - 120px)"
          propTop="362px"
          propRight="60px"
          propLeft="60px"
        />
        <div className="absolute top-[210px] left-[60px] overflow-hidden flex flex-col items-start justify-start gap-[6px] text-base">
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">
              Personal plan
            </div>
          </div>
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">
              Esse labore id
            </div>
          </div>
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">Veniam ut</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[383px] left-[720px] rounded-3xs [background:linear-gradient(180deg,_#5f73c1,_#bdc8ee)] shadow-[0px_0px_40px_rgba(0,_0,_0,_0.1)] w-80 h-[472px] overflow-hidden">
        <div className="absolute top-[40px] left-[59.61px] w-[200px] flex flex-col items-start justify-start">
          <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[60px]">
            <b className="self-stretch relative leading-[150%]">Team Plan</b>
            <b className="self-stretch relative text-34xl leading-[120%]">
              $60
            </b>
          </div>
        </div>
        <ButtonPrimary
          buttonText="Buy Now"
          propPosition="absolute"
          propWidth="calc(100% - 120px)"
          propTop="362px"
          propRight="60px"
          propLeft="60px"
        />
        <div className="absolute top-[210px] left-[60px] overflow-hidden flex flex-col items-start justify-start gap-[6px] text-base">
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">
              Personal plan
            </div>
          </div>
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">
              Esse labore id
            </div>
          </div>
          <div className="h-6 flex flex-row items-center justify-start">
            <div className="relative leading-[150%] font-medium">Veniam ut</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCardFormContainer;
