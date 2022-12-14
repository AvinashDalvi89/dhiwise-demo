import React from "react";

import { Stack, Row, Img, Text, Column, Line } from "components";

const DesktopTwoPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <Row className="absolute bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start justify-center max-w-[677px] mx-[auto] p-[3px] sm:pl-[15px] sm:pr-[15px] top-[25%] w-[100%]">
          <Img
            src="images/img_photo11.png"
            className="flex-shrink-0 max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[11px] md:mt-[15px] mt-[22px] w-[28%]"
            alt="photoEleven"
          />
          <Text
            className="flex-grow ml-[3px] md:mr-[116px] mr-[170px] sm:mr-[90px] sm:mt-[33px] md:mt-[42px] mt-[62px] text-black_900"
            as="h2"
            variant="h2"
          >
            Upload frame here !
          </Text>
        </Row>
        <Stack className="absolute h-[1024px] w-[100%]">
          <aside className="absolute md:hidden sm:hidden left-[0] w-[21%]">
            <div className="">
              <Column className="bg-bluegray_100 flex flex-col justify-center sm:p-[15px] md:p-[18px] p-[27px] w-[100%]">
                <Text
                  className="sm:ml-[11px] md:ml-[14px] ml-[21px] sm:mt-[122px] md:mt-[158px] mt-[230px] text-teal_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Upload Frame
                </Text>
                <Text
                  className="sm:mb-[327px] md:mb-[422px] mb-[614px] sm:ml-[11px] md:ml-[14px] ml-[21px] sm:mt-[25px] md:mt-[33px] mt-[48px] text-black_900 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Setting
                </Text>
              </Column>
            </div>
          </aside>
          <Column className="absolute bg-teal_100 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] top-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Img
                    src="images/img_list1.png"
                    className="max-w-[100%] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[6%]"
                    alt="listOne"
                  />
                  <Img
                    src="images/img_vplogotranspa.png"
                    className="max-w-[100%] sm:ml-[262px] md:ml-[339px] ml-[493px] w-[14%]"
                    alt="VPlogotranspa"
                  />
                  <Img
                    src="images/img_shutdown2.png"
                    className="max-w-[100%] sm:ml-[279px] md:ml-[361px] ml-[525px] sm:mt-[33px] md:mt-[42px] mt-[62px] w-[6%]"
                    alt="shutdownTwo"
                  />
                </Row>
                <Text
                  className="font-normal not-italic text-black_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Click me & Frame me!
                </Text>
              </Column>
            </Column>
          </Column>
          <Column className="absolute bottom-[1%] flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[6%] sm:w-[100%] w-[69%]">
            <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
              <Line className="bg-black_900 h-[1px] sm:ml-[12px] md:ml-[15px] ml-[23px] sm:w-[100%] w-[98%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[37px] md:mt-[48px] mt-[71px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Column className="bg-teal_300 border border-black_900 border-solid flex flex-col sm:mx-[0] sm:p-[15px] md:p-[51px] p-[75px] sm:w-[100%] w-[44%]">
                  <Text
                    className="md:mb-[10px] mb-[15px] sm:mb-[7px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Frame 1
                  </Text>
                </Column>
                <Column className="bg-red_300 border border-black_900 border-solid flex flex-col items-center md:ml-[58px] ml-[85px] sm:mx-[0] sm:p-[15px] md:p-[53px] p-[78px] shadow-bs sm:w-[100%] w-[44%]">
                  <Text
                    className="md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-black_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Frame 2
                  </Text>
                </Column>
              </Row>
            </Column>
            <Column className="bg-indigo_300 border border-black_900 border-solid flex flex-col items-center justify-start sm:mt-[23px] md:mt-[30px] mt-[45px] sm:mx-[0] sm:p-[15px] md:p-[53px] p-[78px] shadow-bs sm:w-[100%] w-[31%]">
              <Text
                className="md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-black_900 w-[auto]"
                as="h1"
                variant="h1"
              >
                Frame 2
              </Text>
            </Column>
          </Column>
        </Stack>
      </Stack>
    </>
  );
};

export default DesktopTwoPage;
