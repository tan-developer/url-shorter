export const authHeader = () => {
  try {
    if (!isLogin()) {
      logoutAll()
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}')
    if (currentUser && currentUser?.access_token) {
      return { Authorization: 'Bearer' + ' ' + currentUser.access_token }; 
    }else {
      return {}
    }
  } catch (error) {
    return {}
  }
}

export const logoutAll = () => {
  //? Task call API revoke token


  localStorage.clear();
  

  // redirect

  window.location.replace('/')

}

export const isLogin = (): boolean =>  {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  let nowTime = new Date().getTime();
  return (
      currentUser && currentUser.access_token && nowTime < currentUser?.validTo
  );
}