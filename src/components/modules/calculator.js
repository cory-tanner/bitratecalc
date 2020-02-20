import React, { Component } from 'react';
import { numberWithCommas } from '../utility/numberWithCommas';

function bitrateCalcLow(userFPS, userResolutionW, userResolutionH) {
  const PPS = ((userResolutionW * userResolutionH) * userFPS);
  const fractionLow = Math.round((.079 * PPS) / 1000);

  return(numberWithCommas(fractionLow))
}

function bitrateCalcHigh(userFPS, userResolutionW, userResolutionH) {
  const PPS = ((userResolutionW * userResolutionH) * userFPS);
  const fractionHigh = Math.round((.15 * PPS) / 1000);

  return(numberWithCommas(fractionHigh))
}

function bitrateAcceptance(userUpload, userStream) {
  const recommendBitrate = (userUpload * 1000) * (userStream * .01);

  return(numberWithCommas(recommendBitrate))
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
      userBitrate: 3600,
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
          <label className="t-label calculator__label" htmlFor="userUpload">Your Upload Speed (Mbps):</label>
          <input 
            name="userUpload"
            id="userUpload"
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={this.state.userUpload}
            data-has-value={this.state.userUpload ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userStream">Percent of Upload for Stream:</label>
          <input
            name="userStream"
            id="userStream"
            className="t-input calculator__input"
            type="number"
            max="100"
            value={this.state.userStream}
            onChange={this.handleChange}
            data-has-value={this.state.userStream ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionW">Output Stream Resolution Width:</label>
          <input
            name="userResolutionW"
            id="userResolutionW" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={this.state.userResolutionW}
            data-has-value={this.state.userResolutionW ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionH">Output Stream Resolution Height:</label>
          <input
            name="userResolutionH"
            id="userResolutionH" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={this.state.userResolutionH}
            data-has-value={this.state.userResolutionH ? true : false} />
        </div>

        <div className="grid__item">
          <label className="t-label calculator__label" htmlFor="userFPS">Output Frames Per Second (FPS):</label>
          <input
            name="userFPS"
            id="userFPS" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={this.state.userFPS}
            data-has-value={this.state.userFPS ? true : false} />
        </div>

        <div className="calculator__result grid__item"  data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Recommended Bitrate</h4>
          <p id="resultLow" className="t-bitrate calculator__result__output">
            Low {bitrateCalcLow(this.state.userFPS, this.state.userResolutionW, this.state.userResolutionH)}
          </p>
          <p id="resultHigh" className="t-bitrate calculator__result__output">
            High {bitrateCalcHigh(this.state.userFPS, this.state.userResolutionW, this.state.userResolutionH)}
          </p>
        </div>
        <div className="calculator__result grid__item" data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Streams Max Bitrate</h4>
          <p className="t-bitrate calculator__result__output">
            {bitrateAcceptance(this.state.userUpload, this.state.userStream)}
          </p>
        </div>
      </div>
    );
  }
}

export default Calculator;