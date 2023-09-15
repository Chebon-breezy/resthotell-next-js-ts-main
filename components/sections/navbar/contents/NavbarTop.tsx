import { Paragraph } from "@/components/common";
import PageWrapper from "@/components/layout/PageWrapper";
import React from "react";
import tw from "tailwind-styled-components";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const NavbarTop = () => {
  const NavbarTopStyles = {
    Layout: tw.div`flex justify-start items-center px-4 md:px-10 w-full py-2 md:py-5 bg-[#1A1C14] text-sm md:text-base`,
    Flex: tw.div`flex items-center gap-x-2 text-[#f8f9fa]`,
    Email: tw.div`flex items-left gap-x-1`,
    Location: tw.div`flex items-center gap-x-1`,
  };
  const { Layout, Flex, Email, Location } = NavbarTopStyles;
  return (
    <>
      <PageWrapper>
        <Layout className="w-full">
          <Flex>
            <Paragraph className="text-[#ffc107]">Opening Hour:</Paragraph>
            <Paragraph>9:00 am to 10:00 pm</Paragraph>
          </Flex>
          <Flex className="md:hidden">
            <Email>
              <HiOutlineMail color="#ffc107" />
              <Paragraph className="text-xs">info@example</Paragraph>
            </Email>
            <Location>
              <HiOutlineLocationMarker className="text-[#ffc107]" />
              <Paragraph className="text-xs">
                Road-01, Block-B, West London City
              </Paragraph>
            </Location>
          </Flex>
          <Flex className="hidden md:flex gap-x-12">
            <Email>
              <HiOutlineMail color="#ffc107" />
              <Paragraph>info@example</Paragraph>
            </Email>
            <Location>
              <HiOutlineLocationMarker className="text-[#ffc107]" />
              <Paragraph>Road-01, Block-B, West London City</Paragraph>
            </Location>
          </Flex>
        </Layout>
      </PageWrapper>
    </>
  );
};

export default NavbarTop;
