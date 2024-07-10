import React from "react";
import LayoutWrapper from "../../components/utils/LayoutWrapper";
import { AnimatePresence, motion } from "framer-motion";
import SvgMotion from "./components/svg.motion";

const Login: React.FC = () => {
  return (
    <LayoutWrapper>
      <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 , filter: "blur(5px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", duration: 1 },
        }}
        className="md:w-full flex md:flex-row flex-col md:p-3 p-1 w-[98vw] bg-[#0f1727] min-h-[60vh] [&>* h-full] rounded-md shadow-[inset_-2px_2px_10px_1px_rgba(0,0,0,0.35)]"
      >
        <div className="md:max-w-[40%] flex justify-center scale-90 w-full"><SvgMotion /></div>
        <div className="md:w-5/12 w-full md:border-l-gray-700/50 ">12</div>
      </motion.div>
      </AnimatePresence>
    </LayoutWrapper>
  );
};

export default Login;
