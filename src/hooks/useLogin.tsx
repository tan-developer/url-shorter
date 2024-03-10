import { useState } from "react";
import { IToken } from "../interface/IToken";

const useLogin = () : Boolean  => {
  const token : IToken = JSON.parse(localStorage.getItem('currentUser') || '')

  if (StringUtils.isEmpty(token.access_token)) {
    return false;
  }
  return true;
};

export default useLogin;