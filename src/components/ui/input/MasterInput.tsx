import Wrapper from "../../utils/Wrapper"
import { IoIosLink } from "react-icons/io";
import { InputText } from 'primereact/inputtext';
import ButtonSolid from "../ButtonSolid";

const MasterInput: React.FC = () => {

  return (
    <Wrapper className="flex w-7/12 border-2 border-drak-border rounded-3xl bg-dark-grey pl-3 justify-between py-0.5 pr-0.5">
      <Wrapper className="flex items-center">
        <IoIosLink className="scale-125 text-lite" />
        <InputText placeholder="Enter the link here !" className="text-xs font-light text-lite pl-3 focus:shadow-none border-none outline-none bg-transparent caret-pink-500" />
      </Wrapper>

      <ButtonSolid className="border-none shadow-2xl shadow-linear-blue/40 bg-linear-blue text-xs py-3 text-lite font-bold">
        Shorten now !
      </ButtonSolid>
    </Wrapper>
  );
};

export default MasterInput