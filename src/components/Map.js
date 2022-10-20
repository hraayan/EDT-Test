import React, { Component } from "react";
import {
  GoogleMap,
  whithScriptjs,
  whithGoogleMap,
} from "@react-google-maps/api";

export default class Maps extends Component{
  render(){
    return(
      <div className="container">
        <GoogleMap
          apikey={"AIzaSyAfypr-EsRB4of5z6vuWy86N4DWkvLUUyo"}
          style={{height: "800px", width: "370px"}}
          zoom={10}
          center={{ lat: -34.397, lng: 150.644 }}
          />
      </div>
    )
  }
}

// const Map = (props) => {
//   return (
//     <GoogleMap
//       defaultZoom={10}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     />
//   );
// };

// export default whithScriptjs(
//   whithGoogleMap(
//     Map
//   )
// )
