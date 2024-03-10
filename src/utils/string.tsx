class  StringUtils {

  static isEmpty = (string : any) : Boolean => {
    if (typeof string === "string" && string.length === 0) {
      return false
    } else if (string === null) {
      return false;
    } else {
      return true;
    }
  }

}



