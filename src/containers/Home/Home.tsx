import React from "react";
import Wrapper from "../../components/utils/Wrapper";
import LinearText from "../../components/ui/LinerText";
import Label from "../../components/ui/Label";
import MasterInput from "../../components/ui/input/MasterInput";
import HomeDatatable from "./HomeDatatable";
import LayoutWrapper from "../../components/utils/LayoutWrapper";

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <LayoutWrapper >
        <LinearText className="md:text-4xl text-xl mb-3">
          Shorten Your Loooong Links :)
        </LinearText>
        <Label className="md:w-2/5 text-center text-xs font-light text-lite mb-5">
          Linkly is an efficient and easy-to-use URL shortening service that
          streamlines your online experience.
        </Label>

        <MasterInput />

        <Label className="md:w-2/5 md:mt-10 mt-4  text-center text-xs font-light text-lite md:mb-5 mb-2">
              You can create <span className="text-pink-600 font-bold">05</span> more links. Register  Now to enjoy Unlimited usage
        </Label>
        <Wrapper className="md:w-10/12 w-[98vw] my-5">
          <HomeDatatable />
        </Wrapper>
      </LayoutWrapper>
    </React.Fragment>
  );
};

export default Home;
