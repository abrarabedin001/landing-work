import type { NextPage } from "next";
import TypeBrowser from "./type-browser";
import ButtonPrimary from "./button-primary";
import EnabledTrueIconLeftFalse from "./enabled-true-icon-left-false";
import TypePhone from "./type-phone";

const CleverCoreAIContainer1: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] bg-white w-[1440px] h-[722px] overflow-hidden text-left text-20xl text-black-button font-body">
      <TypeBrowser
        bar="/bar1.svg"
        typeBrowserBorderRadius="21.1px"
        typeBrowserBackgroundColor="#fbfafc"
        typeBrowserBorder="5.3px solid #8e7ef6"
        typeBrowserWidth="675.2px"
        typeBrowserHeight="422px"
        typeBrowserFlexShrink="unset"
        typeBrowserPosition="absolute"
        typeBrowserTop="170px"
        typeBrowserRight="-35.2px"
        groupDivWidth="calc(100% - 0.2px)"
        groupDivHeight="31.65px"
        barIconHeight="31.65px"
        buttonTop="10.55px"
        buttonLeft="21.1px"
        buttonBorderRadius="52.22px"
        buttonWidth="10.55px"
        buttonHeight="10.55px"
        buttonTop1="10.55px"
        buttonLeft1="36.92px"
        buttonBorderRadius1="52.22px"
        buttonWidth1="10.55px"
        buttonHeight1="10.55px"
        buttonTop2="10.55px"
        buttonLeft2="52.75px"
        buttonBorderRadius2="52.22px"
        buttonWidth2="10.55px"
        buttonHeight2="10.55px"
      />
      <div className="absolute top-[254px] left-[107px] w-[613px] flex flex-col items-start justify-start gap-[30px]">
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start">
          <b className="self-stretch relative leading-[120%]">
            Automate, Analyze, and Amplify your Communication Process with
            CleverCore AI
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-lg">
          <b className="self-stretch relative leading-[28px]">
            Clever Core extracts essential notes from calls , identifies key
            discussion points, and suggests actionable steps derived from the
            call's content.
          </b>
        </div>
        <div className="flex flex-row items-center justify-start gap-[20px]">
          <ButtonPrimary
            buttonText="Sign In"
            propPosition="unset"
            propWidth="unset"
            propTop="unset"
            propRight="unset"
            propLeft="unset"
          />
          <EnabledTrueIconLeftFalse
            label="Register"
            enabledTrueIconLeftFalseBorder="3px solid #8e7ef6"
            labelColor="#8e7ef6"
            labelTextAlign="left"
          />
        </div>
      </div>
      <ButtonPrimary
        buttonText="Login"
        propPosition="absolute"
        propWidth="unset"
        propTop="60px"
        propRight="61px"
        propLeft="unset"
      />
      <div className="absolute top-[61px] left-[calc(50%_-_257.5px)] rounded-8xs bg-lavender flex flex-row py-0 px-6 items-start justify-start gap-[24px] text-base">
        <div className="h-12 flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-medium">Features</div>
        </div>
        <div className="h-12 flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-medium">Solutions</div>
        </div>
        <div className="h-12 flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-medium">Resources</div>
        </div>
        <div className="h-12 flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-medium">Pricing</div>
        </div>
        <div className="h-12 flex flex-row items-center justify-start">
          <div className="relative leading-[150%] font-medium">Contacts</div>
        </div>
      </div>
      <TypePhone
        typePhoneTypePhone="/device.svg"
        typePhoneIconBorderRadius="34.13px"
        typePhoneIconWidth="320px"
        typePhoneIconHeight="692.91px"
        typePhoneIconPosition="absolute"
        typePhoneIconTop="254px"
        typePhoneIconRight="0px"
      />
      <img
        className="absolute top-[44px] left-[32px] w-72 h-[53px] object-cover"
        alt=""
        src="/clevercore-mainlogo1@2x.png"
      />
    </div>
  );
};

export default CleverCoreAIContainer1;
