import React from 'react';
import ButtonSolid from '../../../components/ui/ButtonSolid';
import { FaceBookSvg, GoogleSVG } from '../../../components/utils/Icon';
import Wrapper from '../../../components/utils/Wrapper';

const ThirdPartyLogin: React.FC = () => {
  return (
    <Wrapper className='flex flex-col'>
      <ButtonSolid icon={GoogleSVG} className='text-center text-sm mb-5 flex justify-center rounded-md border-none bg-[#18253d]'>Login with Google</ButtonSolid>
      <ButtonSolid icon={FaceBookSvg} className='text-center flex text-sm justify-center rounded-md border-none bg-[#18253d]'>Login with Facebook</ButtonSolid>
    </Wrapper>
  );
};

export default ThirdPartyLogin;