import React from "react"
import Wrapper from "../components/utils/Wrapper"
import LinearText from "../components/ui/LinerText"
import Label from "../components/ui/Label"
import MasterInput from "../components/ui/input/MasterInput"

const Home : React.FC = () => {
  return (
    <React.Fragment>
      <Wrapper className="w-4/5 m-auto flex items-center min-h-screen pt-40 flex-col">
        <LinearText className="text-4xl mb-3">
          Shorten Your Loooong Links :) 
        </LinearText>
        <Label className="w-2/5 text-center text-xs font-light text-lite mb-5">
          Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </Label>

        <MasterInput/>
      </Wrapper>
    </React.Fragment>
  )
}


export default Home