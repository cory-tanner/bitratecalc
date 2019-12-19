import React from 'react';

const getViewBox = name => {
  switch (name) {
    default:
      return "0 0 24 24";
  }
};

const getTitle = (name) => {
  switch (name) {
    case "twitter":
      return (
        <title>Twitter icon</title>
      );
    case "mixer":
      return (
        <title>Mixer icon</title>
      );
    default:
      return <title />;
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "twitter":
      return (
        <path
        {...props}
        d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
        />
      );
    case "mixer":
      return (
        <path
        {...props}
        d="M 20.027344 2.9765625 A 2.0002 2.0002 0 0 0 18.373047 3.8378906 L 12.542969 12 L 18.373047 20.162109 A 2.0002 2.0002 0 1 0 21.626953 17.837891 L 17.457031 12 L 21.626953 6.1621094 A 2.0002 2.0002 0 0 0 20.027344 2.9765625 z M 3.9121094 2.9785156 A 2.0002 2.0002 0 0 0 2.3730469 6.1621094 L 6.5429688 12 L 2.3730469 17.837891 A 2.0002 2.0002 0 1 0 5.6269531 20.162109 L 11.457031 12 L 5.6269531 3.8378906 A 2.0002 2.0002 0 0 0 3.9121094 2.9785156 z"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  viewBox = "",
  width ="100%",
  className = "",
  height = "100%",
  role = "img"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role={role}
  >
    {getTitle(name)}
    {getPath(name)}
  </svg>
);

export default SVGIcon;