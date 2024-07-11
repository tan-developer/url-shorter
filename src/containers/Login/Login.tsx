import React from "react";
import LayoutWrapper from "../../components/utils/LayoutWrapper";
import { AnimatePresence, motion } from "framer-motion";
import SvgMotion from "./components/svg.motion";
import LinearText from "../../components/ui/LinerText";
import Label from "../../components/ui/Label";
import ThirdPartyLogin from "./components/ThirdPartyLogin";
import Divider from "../../components/utils/Divider";
import LoginForm from "./components/LoginForm";

const animate = {
  opacity: 1,
  y: 0,
  filter: "blur(0px)",
  transition: { type: "spring", duration: 1 },
};

const Login: React.FC = () => {
  return (
    <LayoutWrapper>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50, filter: "blur(2px)" }}
          animate={animate}
          className="md:w-full mt-[-3rem] overflow-hidden flex md:flex-row flex-col w-[98vw] bg-[#0b101b] min-h-[70vh] [&>* h-full] rounded-md shadow-2xl"
        >
          <div className="md:min-w-[60%] flex justify-center scale-75 w-full">
            <SvgMotion />
          </div>
          <div className="md:max-w-[40%] w-full md:border-l-gray-700/50 bg-[#131d31] py-10 px-14">

            <Label className=" text-3xl font-medium text-lite mb-5">
              Welcome to
            </Label>
            <LinearText className="text-[3rem] md:mt-[-1rem] font-[900]   mb-3">
              Linkly{" "}
              <span className="text-sm">Your friendly shorten URL :)</span>
            </LinearText>

            <ThirdPartyLogin />
            <Divider children={"OR"} />
            <LoginForm />
          </div>
        </motion.div>
      </AnimatePresence>
    </LayoutWrapper>
  );
};

export default Login;
