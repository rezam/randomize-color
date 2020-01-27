function randomizeColor() {
  let listArrNum = [48, 49, 50, 51, 52, 53, 54, 55,
            56, 57, 65, 66, 67, 68, 69, 70];
  let tempValue = "";
  let finalValue = "";

  for(let index = 0; index < 6; index++) {
    tempValue += String.fromCharCode(listArrNum[Math.floor(Math.random() * listArrNum.length)]);
  }
  finalValue =  "#" + tempValue;
  return finalValue;
}
