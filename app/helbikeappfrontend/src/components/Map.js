import React from "react";
import GoogleMapReact from "google-map-react";

export const Map = (props) => {
  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng,
    },
    zoom: 15,
  };

  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  const TextComponent = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
        
      }}
    >
      {text}
    </div>
  );

  return (
    <diV className='Table-Journeys-map'>
      <div
        style={{ height: '50vh', width: '100%', padding: '1%' }}
      >
        <GoogleMapReact
          //API key added, you can see it at
          //https://console.cloud.google.com/apis/credentials/key/dd95bb1b-d1c4-42e3-b335-e135270680cb?project=helsinki-bike-app-389009&supportedpurview=project
          bootstrapURLKeys={{ key: 'AIzaSyArKMiEg83YPnv4SMw46laAKl1oflpmELE' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {/* the below component will add a marker that says 'my marker'
         but it doesn't stay in the right spot when moving the map */}
          <TextComponent lat={props.lat} lng={props.lng} text='!' />
        </GoogleMapReact>
      </div>
    </diV>
  );
};
