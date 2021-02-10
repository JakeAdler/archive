import React, {Component} from 'react';
import styled from 'styled-components';
import MapGL, {Source, Layer} from 'react-map-gl';
import { dataLayer } from './map-style.js';
import { updatePercentiles } from './utils';
import { darkGrey, orange, blue } from '../../assets/styles/colors';
import MapStyles from '../../assets/styles/style.json';
import { FaTimes} from 'react-icons/fa';
const MAPBOX_TOKEN = 'pk.eyJ1IjoiamFrZS1jYSIsImEiOiJjazkyam1wbmkwNTF0M3BydGQ1ZHFkazhiIn0.FGWPl-DwoheDWMw4sjGqgQ'

export default class Map extends Component {
  state = {
    noteOpen: true,
    data: {
      type: "FeatureCollection",
      features : this.props.data
   },
    hoveredFeature: null,
    x: 0,
    y: 0,
    viewport: {
      latitude: 34,
      longitude: -118.3,
      zoom: 10.25,
      bearing: 0,
      pitch: 0
    }
  };


  _loadData = data => {
    this.setState({
      data: updatePercentiles(data, f => f.properties.infections)
    });
  };

  _onViewportChange = viewport => this.setState({viewport});

  _onHover = event => {
    const {
      features,
      srcEvent: {offsetX, offsetY}
    } = event;
    const hoveredFeature = features && features.find(f => f.properties.infections);
    this.setState({hoveredFeature, x: offsetX, y: offsetY});
  };

  _handleNoteClose = () => {
    this.setState({noteOpen: false})
  }

  _renderTooltip() {
    const {hoveredFeature, x, y} = this.state;
    const h = hoveredFeature;
    return (
      hoveredFeature && (
        <ToolTip className="tooltip" style={{left: 'calc(50% - 100px)', top: 5, position: 'absolute'}}>
          <TTTitle>{hoveredFeature.properties.name}</TTTitle>
          <h3>Infections: <TTInfections>{h.properties.infections === -1 ? 'N/A' : h.properties.infections}</TTInfections></h3>
        </ToolTip>
      )
    );
  }
  
  render() {
    const {viewport, data, noteOpen} = this.state;
    return (
        <div style={{height: '100%', width: "100%", position: 'relative'}}>
          <MapGL
            {...viewport}
            width='100%'
            height={noteOpen ? "95%" : "100%"}
            onViewportChange={this._onViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={MapStyles}
            onHover={this._onHover}
          >
            <Source type="geojson" data={data}>
              <Layer 
              beforeId='road-primary'
              {...dataLayer}
              />
            </Source>
            {this._renderTooltip()}
          </MapGL>
          {
              noteOpen && (
                <MapNote>
                  <NoteText>
                    Note: Neighborhood boundaries are an approximation.
                  </NoteText>
                  <CloseNoteBtn onClick={this._handleNoteClose}>
                    <FaTimes />
                  </CloseNoteBtn>
                </MapNote>
              )
            }
        </div>
    );
  }
}

const ToolTip = styled.div`
  min-width: 200px;
  height: 50px;
  background-color: ${darkGrey};
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
`
const TTTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`
const TTInfections = styled.span`
    color: ${blue};
    display: inline-block;
`
const MapNote = styled.div`
  background-color: ${darkGrey};
  position: relative;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
`
const NoteText = styled.p`

  @media (max-width: 500px) {
    font-size: .75rem;
  } 
`
const CloseNoteBtn = styled.button`
  width: 20px;
  height: 70%;
  position: absolute;
  right: 5px;
  top: 15%;
  background-color: transparent;
`