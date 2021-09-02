import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  const mapProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <Wrap>
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        id="gmap_canvas"
        src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Zagreb+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin-bottom: -5px;
`;

export default Map;
