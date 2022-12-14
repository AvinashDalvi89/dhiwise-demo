import React from "react";

import { Stack, Row, Img, Column, Text, Button } from "components";

const DesktopThreePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1024px] mx-[auto] relative w-[100%]">
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start left-[0] max-w-[1380px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Stack className="h-[1024px] relative w-[22%]">
            <Img
              src="images/img_list1.png"
              className="absolute h-[65px] left-[11%] max-w-[100%] top-[9%] w-[26%]"
              alt="listTwo"
            />
            <aside className="absolute md:hidden sm:hidden w-[100%]">
              <div className="">
                <Column className="bg-bluegray_100 flex flex-col justify-center sm:p-[15px] md:p-[18px] p-[27px] w-[100%]">
                  <Text
                    className="sm:ml-[11px] md:ml-[14px] ml-[21px] sm:mt-[122px] md:mt-[158px] mt-[230px] text-black_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Upload Frame
                  </Text>
                  <Text
                    className="sm:mb-[327px] md:mb-[422px] mb-[614px] sm:ml-[11px] md:ml-[15px] ml-[22px] sm:mt-[25px] md:mt-[33px] mt-[48px] text-teal_800 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Setting
                  </Text>
                </Column>
              </div>
            </aside>
          </Stack>
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mb-[302px] md:mb-[390px] mb-[568px] md:ml-[41px] ml-[61px] sm:mt-[133px] md:mt-[172px] mt-[251px] sm:mx-[0] pb-[3px] pl-[3px] sm:w-[100%] w-[50%]">
            <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:mb-[11px] mb-[16px] sm:mb-[8px] sm:pl-[15px] md:pl-[39px] pl-[58px] sm:py-[15px] md:py-[39px] py-[58px] w-[100%]">
              <Text className="text-black_900 w-[auto]" as="h2" variant="h2">
                Camera radius :{" "}
              </Text>
              <div className="bg-bluegray_100 sm:h-[36px] md:h-[46px] h-[66px] mb-[4px] sm:ml-[30px] md:ml-[39px] ml-[58px] sm:w-[100%] w-[51%]"></div>
            </Row>
          </Column>
          <Img
            src="images/img_shutdown2.png"
            className="max-w-[100%] sm:ml-[145px] md:ml-[187px] ml-[273px] sm:mt-[47px] md:mt-[61px] mt-[90px] w-[6%]"
            alt="shutdownThree"
          />
        </Row>
        <Column className="absolute bg-teal_100 flex flex-col items-center justify-start sm:p-[4px] md:p-[6px] p-[9px] top-[0] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1311px] md:mb-[11px] mb-[17px] sm:mb-[9px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                <Img
                  src="images/img_list1.png"
                  className="max-w-[100%] sm:mb-[13px] md:mb-[17px] mb-[26px] sm:mt-[32px] md:mt-[41px] mt-[61px] w-[6%]"
                  alt="listTwo One"
                />
                <Img
                  src="images/img_vplogotranspa.png"
                  className="max-w-[100%] sm:ml-[251px] md:ml-[324px] ml-[472px] w-[14%]"
                  alt="VPlogotranspa"
                />
                <Img
                  src="images/img_shutdown2.png"
                  className="max-w-[100%] sm:mb-[13px] md:mb-[17px] mb-[26px] sm:ml-[271px] md:ml-[350px] ml-[509px] sm:mt-[29px] md:mt-[37px] mt-[55px] w-[6%]"
                  alt="shutdownThree One"
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
        <Button className="absolute cursor-pointer font-bold min-w-[12%] right-[12%] sm:text-[28px] md:text-[30px] text-[32px] text-black_900 text-center top-[30%] w-[max-content]">
          Save{" "}
        </Button>
      </Stack>
    </>
  );
};

export default DesktopThreePage;
