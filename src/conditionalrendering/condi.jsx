import Admin from "./admin";

import User from "./user";

var isrole = "user";

var compon = "";

// if (isrole == "admin") {
//     compon = <Admin />;
//   } else {
//     compon = <User />;
//   }



function Condit() {
  return <>
  
{isrole=="admin" && <Admin/>}


{isrole=="user" && <User/>}
  
  </>;
}

export default Condit;
