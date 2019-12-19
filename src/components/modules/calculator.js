import React, { Component } from 'react';

function bitrateCalcLow(userFPS, userResolutionW, userResolutionH) {
  const PPS = ((userResolutionW * userResolutionH) * userFPS);
  const fractionLow = Math.round((.079 * PPS) / 1000);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return(numberWithCommas(fractionLow))
}

function bitrateCalcHigh(userFPS, userResolutionW, userResolutionH) {
  const PPS = ((userResolutionW * userResolutionH) * userFPS);
  const fractionHigh = Math.round((.15 * PPS) / 1000);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return(numberWithCommas(fractionHigh))
}

function bitrateAcceptance(userUpload, userStream) {
  const recommendBitrate = (userUpload * 1000) * (userStream * .01);

  return(recommendBitrate)
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userUpload: 8,
      userStream: 60,
      userResolutionW: 1280,
      userResolutionH: 720,
      userFPS: 60,
      userBitrate: 3600
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })
  }

  render() {
    return (
      <div className="calculator grid">
        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userUpload">Upload Speed (Mbps):</label>
          <input 
            name="userUpload"
            value={this.state.userUpload}
            onChange={this.handleChange}
            className="t-input calculator__input"
            id="userUpload"
            type="number" />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userStream">Percent of Upload for Stream:</label>
          <input
            name="userStream"
            className="t-input calculator__input"
            type="number"
            max="100"
            value={this.state.userStream}
            onChange={this.handleChange}
            id="userStream" />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionW">Output Stream Resolution Width:</label>
          <input
            name="userResolutionW"
            className="t-input calculator__input"
            type="number"
            value={this.state.userResolutionW}
            onChange={this.handleChange}
            id="userResolutionW" />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionH">Output Stream Resolution Height:</label>
          <input
            name="userResolutionH"
            className="t-input calculator__input"
            type="number"
            value={this.state.userResolutionH}
            onChange={this.handleChange}
            id="userResolutionH" />
        </div>

        <div className="grid__item" data-grid-medium="8">
          <label className="t-label calculator__label" htmlFor="userFPS">Output Frames Per Second (FPS):</label>
          <input
            name="userFPS"
            className="t-input calculator__input"
            type="number"
            value={this.state.userFPS}
            onChange={this.handleChange}
            id="userFPS" />
        </div>

        <div className="calculator__result grid__item"  data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Recommended Bitrate</h4>
          <p className="t-body calculator__result__output">
            Low {bitrateCalcLow(this.state.userFPS, this.state.userResolutionW, this.state.userResolutionH)}
          </p>
          <p className="t-body calculator__result__output">
            High {bitrateCalcHigh(this.state.userFPS, this.state.userResolutionW, this.state.userResolutionH)}
          </p>
        </div>
        <div className="calculator__result grid__item" data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Streams Max Bitrate</h4>
          <p className="t-body calculator__result__output">
            {bitrateAcceptance(this.state.userUpload, this.state.userStream)}
          </p>
        </div>
      </div>
    );
  }
}

export default Calculator;