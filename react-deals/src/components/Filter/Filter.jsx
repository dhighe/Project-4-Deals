import React, { Component } from 'react';
import style from './Filter.css';

export default class Filter extends Component {
  render(){
    return(
      <div className="Filter-Container">
        <div class="range-slider" data-slider data-options="start: 1; end: 10;">
          <span class="range-slider-handle" role="slider" tabindex="0"></span>
          <span class="range-slider-active-segment"></span>
          <input type="hidden" />
        </div>
        <div class="range-slider" data-slider data-options="start: 1; end: 10;">
          <span class="range-slider-handle" role="slider" tabindex="0"></span>
          <span class="range-slider-active-segment"></span>
          <input type="hidden" />
        </div>
        <select>
          <option value="test">Test</option>
          <option value="test">Test 2</option>
          <option value="test">Test 3</option>
          <option value="test">Test 4</option>
        </select>

        <select>
          <option value="next">Next Test</option>
          <option value="next">Next Test 2</option>
          <option value="next">Next Test 3</option>
          <option value="next">Next Test 4</option>
        </select>

        <select>
          <option value="last">Last Test</option>
          <option value="last">Last Test 2</option>
          <option value="last">Last Test 3</option>
          <option value="last">Last Test 4</option>
        </select>
      </div>
    )
  }
}
