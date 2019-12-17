import React, { Component } from 'react';

function bitrateCalc(userUpload, userStream, userFPS, userResolutionW, userResolutionH) {
  const PPS = ((userResolutionW * userResolutionH) * userFPS);
  const fractionHigh = .1 * PPS;
  const fractionLow = .06 * PPS;
  const recommendBitrate = (userUpload * 10) / userStream;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return(numberWithCommas('Low ' + Math.round((fractionLow / 1000) / recommendBitrate) + ' High ' + Math.round((fractionHigh / 1000) / recommendBitrate)))

}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userUpload: 8,
      userStream: 60,
      userResolutionH: 1080,
      userResolutionW: 1920,
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
        <div className="grid__item" data-grid-medium="8">
          <label className="calculator__label" htmlFor="userUpload">Upload Speed (Mbps)</label>
          <input 
            name="userUpload"
            value={this.state.userUpload}
            onChange={this.handleChange}
            className="calculator__input"
            id="userUpload"
            type="number" />
        </div>

        <div className="grid__item" data-grid-medium="8">
          <label className="calculator__label" htmlFor="userStream">Percent of Upload for Stream</label>
          <input
            name="userStream"
            className="calculator__input"
            type="number"
            value={this.state.userStream}
            onChange={this.handleChange}
            id="userStream" />
        </div>

        <div className="grid__item" data-grid-medium="8">
          <label className="calculator__label" htmlFor="userResolutionW">Output Stream Resolution Width</label>
          <input
            name="userResolutionW"
            className="calculator__input"
            type="number"
            value={this.state.userResolutionW}
            onChange={this.handleChange}
            id="userResolutionW" />
        </div>

        <div className="grid__item" data-grid-medium="8">
          <label className="calculator__label" htmlFor="userResolutionH">Output Stream Resolution Height</label>
          <input
            name="userResolutionH"
            className="calculator__input"
            type="number"
            value={this.state.userResolutionH}
            onChange={this.handleChange}
            id="userResolutionH" />
        </div>

        <div className="grid__item" data-grid-medium="8">
          <label className="calculator__label" htmlFor="userFPS">Output Frames Per Second (FPS)</label>
          <input
            name="userFPS"
            className="calculator__input"
            type="number"
            value={this.state.userFPS}
            onChange={this.handleChange}
            id="userFPS" />
        </div>

        <div className="calculator__result grid__item">
          <h4 className="t-body-heading calculator__result__heading">Recommended Bitrate</h4>
          <p className="t-body calculator__result__output">{bitrateCalc(this.state.userUpload, this.state.userStream, this.state.userFPS, this.state.userResolutionH, this.state.userResolutionW)}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;