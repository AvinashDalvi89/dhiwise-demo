import React from "react";

import { Column, Img, Text, Row, List, Stack } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[124px] sm:pb-[15px] md:pb-[85px] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-teal_100 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[181px] md:mb-[11px] mb-[17px] sm:mb-[9px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Img
                src="images/img_vplogotranspa.png"
                className="max-w-[100%] w-[100%]"
                alt="VPlogotranspa"
              />
              <Text
                className="font-normal not-italic text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Click me & Frame me!
              </Text>
            </Column>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1263px] ml-[auto] mr-[auto] sm:mt-[28px] md:mt-[37px] mt-[54px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="bg-teal_300 flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[19px] sm:w-[100%] w-[32%]">
              <Text
                className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[28px] md:mt-[36px] mt-[53px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Step 1: Select your frame first{" "}
              </Text>
              <Text
                className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[12px] md:mt-[15px] mt-[23px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Step 2: Adjust your camera in right position
              </Text>
              <Text
                className="font-semibold sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[12px] md:mt-[15px] mt-[23px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Step3: Capture photo
              </Text>
              <Text
                className="font-semibold sm:mb-[30px] md:mb-[39px] mb-[57px] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[12px] md:mt-[15px] mt-[23px] text-black_900 w-[auto]"
                as="h4"
                variant="h4"
              >
                Step 4: Download photo
              </Text>
            </Column>
            <Row className="bg-bluegray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[50px] ml-[73px] mt-[4px] sm:mx-[0] sm:p-[15px] md:p-[20px] p-[30px] sm:w-[100%] w-[63%]">
              <Column className="bg-teal_300 border border-black_900 border-solid flex flex-col mb-[11px] sm:mb-[5px] md:mb-[7px] md:ml-[4px] ml-[6px] sm:mx-[0] sm:p-[15px] md:p-[51px] p-[75px] sm:w-[100%] w-[42%]">
                <Text
                  className="md:mb-[10px] mb-[15px] sm:mb-[7px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Frame 1
                </Text>
              </Column>
              <Column className="bg-red_300 border border-black_900 border-solid flex flex-col items-center mb-[11px] sm:mb-[5px] md:mb-[7px] md:mr-[26px] mr-[39px] sm:mx-[0] sm:p-[15px] md:p-[53px] p-[78px] shadow-bs sm:w-[100%] w-[42%]">
                <Text
                  className="md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-black_900 w-[auto]"
                  as="h1"
                  variant="h1"
                >
                  Frame 2
                </Text>
              </Column>
            </Row>
          </Row>
          <List
            className="gap-[121px] sm:gap-[64px] md:gap-[83px] grid sm:grid-cols-1 grid-cols-2 max-w-[723px] min-h-[auto] ml-[auto] mr-[auto] sm:mt-[37px] md:mt-[48px] mt-[71px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="horizontal"
          >
            <Column className="bg-teal_300 border border-black_900 border-solid flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
              <Stack className="h-[160px] relative sm:w-[100%] w-[68%]">
                <div className="absolute bg-white_A700 md:h-[111px] h-[160px] sm:h-[86px] rounded-radius815 w-[100%]"></div>
                <Img
                  src="images/img_whatsappimage.png"
                  className="absolute h-[152px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[91%]"
                  alt="WhatsAppImage"
                />
              </Stack>
            </Column>
            <Column className="bg-teal_300 border border-black_900 border-solid flex flex-col items-center justify-start sm:p-[15px] md:p-[19px] p-[29px] w-[100%]">
              <Stack className="h-[160px] relative sm:w-[100%] w-[68%]">
                <div className="absolute bg-white_A700 md:h-[111px] h-[160px] sm:h-[86px] rounded-radius815 w-[100%]"></div>
                <Img
                  src="images/img_whatsappimage.png"
                  className="absolute h-[152px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[91%]"
                  alt="WhatsAppImage One"
                />
              </Stack>
            </Column>
          </List>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end max-w-[613px] ml-[auto] mr-[auto] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="bg-bluegray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] sm:w-[100%] w-[32%]">
              <Img
                src="images/img_camera1.png"
                className="flex-shrink-0 max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] w-[22%]"
                alt="cameraOne"
              />
              <Text
                className="flex-grow ml-[12px] sm:ml-[6px] md:ml-[8px] mt-[1px] not-italic text-black_900"
                as="h3"
                variant="h3"
              >
                Capture
              </Text>
            </Row>
            <Row className="bg-bluegray_100 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[158px] ml-[231px] sm:mx-[0] sm:p-[4px] md:p-[5px] p-[8px] sm:w-[100%] w-[32%]">
              <Img
                src="images/img_downloading1.png"
                className="flex-shrink-0 max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[20px] w-[15%]"
                alt="downloadingOne"
              />
              <Text
                className="flex-grow mt-[1px] sm:mx-[4px] md:mx-[5px] mx-[8px] not-italic text-black_900"
                as="h3"
                variant="h3"
              >
                Download
              </Text>
            </Row>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default DesktopOnePage;
