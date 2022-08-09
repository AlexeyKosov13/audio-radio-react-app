import React, { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "./Radio.css";
import defaulImages from "./radio.jpg";

export default function Radio() {
  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");
  const [stationLanguage, setStationLanguage] = useState("english");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, []);

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      setStations(data);
    });
  }, [stationFilter, stationLanguage]);

  const setupApi = async (stationFilter) => {
    setIsLoading(true);
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");
    const stations = await api
      .searchStations({
        language: stationLanguage,
        tag: stationFilter,
        limit: 30,
      })
      .then((data) => {
        return data;
      });
    setIsLoading(false);
    console.log(stations);
    return stations;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  const language = ["english", "russian", "german", "spanish", "french"];

  const setDefaultSrc = (event) => {
    event.target.src = defaulImages;
  };

  return (
    <div className="radio">
      <div className="filters">
        {language.map((lang, index) => (
          <span
            key={index}
            className={stationLanguage === lang ? "selected" : ""}
            onClick={() => setStationLanguage(lang)}
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="filters">
        {filters.map((filter, index) => (
          <span
            key={index}
            className={stationFilter === filter ? "selected" : ""}
            onClick={() => setStationFilter(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="stations">
        {isLoading ? (
          <h2>загружаю</h2>
        ) : (
          stations &&
          stations.map((station, index) => {
            return (
              <div className="station" key={index}>
                <div className="stationName">
                  <img
                    src={station.favicon}
                    alt="logo staion"
                    className="logo"
                    onError={setDefaultSrc}
                  />
                  <div className="name">{station.name}</div>
                </div>
                <div className="stationPlayer">
                  <div className="stationBitrate">
                    bitrate: {station.bitrate}
                  </div>
                  {/* <ReactAudioPlayer src={station.urlResolved} controls className="player"/> */}
                  <AudioPlayer
                    className="player"
                    src={station.urlResolved}
                    showJumpControls={false}
                    layout="stacked"
                    customProgressBarSection={[]}
                    customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                    // autoPlayAfterSrcChange={false}
                  />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
