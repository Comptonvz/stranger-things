import React from "react";

export default function Logout() {
  localStorage.clear(); /// it had to b done like this srry.
  console.log(localStorage);
  // if (document.getElementById("button").clicked == true) {
  //   return <h3> LOGGED OUT</h3>;
  // }

  return (
    <div>
      <button onClick="window.location.reload();">LOG OUT</button>
      {/* <script>function refresh(){window.location.reload("Refresh")}</script> */}
    </div>
  );
}
