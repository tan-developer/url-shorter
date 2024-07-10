import React from "react";
import ButtonSolid from "../../components/ui/ButtonSolid"
import LinearGardientLogo from "../../components/ui/LinearGardientLogo"
import Wrapper from "../../components/utils/Wrapper"
import { CiLogin } from "react-icons/ci";


const Header : React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper className="flex fixed justify-between w-screen md:px-16 px-1 md:py-6 py-3 items-center  backdrop-blur-[3px] z-10">
        <LinearGardientLogo />
        <Wrapper className="[&>*:not(:last-child)]:mr-3">
          <ButtonSolid className="bg-[#181E29] border-zinc-700 text-xs">
            Login
            <CiLogin className="ml-1" size={18} />
          </ButtonSolid>

          <ButtonSolid className="bg-linear-blue border-none text-xs px-7 py-2.5 shadow-2xl shadow-linear-blue">
            Register
          </ButtonSolid>
        </Wrapper>
      </Wrapper>


      
    </React.Fragment>
  );
}

export default Header