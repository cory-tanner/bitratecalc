import React, { Component } from 'react';
import { numberWithCommas } from '../utility/numberWithCommas';

const bitrateCalcLow = (userFPS, userResolutionW, userResolutionH) => {
  let PPS = ((userResolutionW * userResolutionH) * userFPS);
  let fractionLow = Math.round((.079 * PPS) / 1000);

  return(numberWithCommas(fractionLow))
}

const bitrateCalcHigh = (userFPS, userResolutionW, userResolutionH) => {
  let PPS = ((userResolutionW * userResolutionH) * userFPS);
  let fractionHigh = Math.round((.15 * PPS) / 1000);

  return(numberWithCommas(fractionHigh))
}

const bitrateAcceptance = (userUpload, userStream) => {
  let recommendBitrate = (userUpload * 1000) * (userStream * .01);

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
    let { userFPS, userResolutionW, userResolutionH, userUpload, userStream } = this.state

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
            placeholder={userUpload}
            data-has-value={userUpload ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userStream">Percent of Upload for Stream:</label>
          <input
            name="userStream"
            id="userStream"
            className="t-input calculator__input"
            type="number"
            max="100"
            value={userStream}
            onChange={this.handleChange}
            data-has-value={userStream ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionW">Output Stream Resolution Width:</label>
          <input
            name="userResolutionW"
            id="userResolutionW" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={userResolutionW}
            data-has-value={userResolutionW ? true : false} />
        </div>

        <div className="grid__item" data-grid-medium="6">
          <label className="t-label calculator__label" htmlFor="userResolutionH">Output Stream Resolution Height:</label>
          <input
            name="userResolutionH"
            id="userResolutionH" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={userResolutionH}
            data-has-value={userResolutionH ? true : false} />
        </div>

        <div className="grid__item">
          <label className="t-label calculator__label" htmlFor="userFPS">Output Frames Per Second (FPS):</label>
          <input
            name="userFPS"
            id="userFPS" 
            className="t-input calculator__input"
            type="number"
            onChange={this.handleChange}
            placeholder={userFPS}
            data-has-value={userFPS ? true : false} />
        </div>

        <div className="calculator__result grid__item"  data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Recommended Bitrate</h4>
          <p id="resultLow" className="t-bitrate calculator__result__output">
            Low {bitrateCalcLow(userFPS, userResolutionW, userResolutionH)}
          </p>
          <p id="resultHigh" className="t-bitrate calculator__result__output">
            High {bitrateCalcHigh(userFPS, userResolutionW, userResolutionH)}
          </p>
        </div>
        <div className="calculator__result grid__item" data-grid-medium="6">
          <h4 className="t-body-heading calculator__result__heading">Streams Max Bitrate</h4>
          <p className="t-bitrate calculator__result__output">
            {bitrateAcceptance(userUpload, userStream)}
          </p>
        </div>
      </div>
    );
  }
}

export default Calculator;