const youtuber = "tony";
const favprogram = "ozark";

function myName(){
    let chName = '';
    return (chName = "stark");
}

function myNames(){
    let chName1  = "stark1";
    return (chName1);
}

export default youtuber; // default export,which can be called as different name aswell Ex. name
//only one default export is allowed in react.

//all others will be defined and called as same as written here/.
// all other export can be called in one export
export {favprogram, myName, myNames}
// or you can use * to get everything as an object