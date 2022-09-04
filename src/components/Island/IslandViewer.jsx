/* eslint-disable no-return-assign */
import { useRef, useEffect, useState } from "react";
import "./Tiles.css";
import "react-isometric-tilemap/build/css/index.css";
import { TileSwitcher } from "./TileEngine/TileSwitcher";
import { createTerrain } from "./TileEngine/TileMapProcessor";

import rock from "./IslandImages/rock.png";
import grass from "./IslandImages/grass.png";
import empty from "./IslandImages/empty.png";
import selectedGrid from "./IslandImages/selectedGrid.png";

import dirt from "./IslandImages/dirt.png";
import dirtDouble from "./IslandImages/dirtDouble.png";

import water from "./IslandImages/water.png";
import waterN from "./IslandImages/waterN.png";
import waterNE from "./IslandImages/waterNE.png";
import waterNW from "./IslandImages/waterNW.png";
import waterE from "./IslandImages/waterE.png";
import waterES from "./IslandImages/waterES.png";
import waterS from "./IslandImages/waterS.png";
import waterSW from "./IslandImages/waterSW.png";
import waterW from "./IslandImages/waterW.png";

import waterCornerES from "./IslandImages/waterCornerES.png";
import waterCornerNE from "./IslandImages/waterCornerNE.png";
import waterCornerNW from "./IslandImages/waterCornerNW.png";
import waterCornerSW from "./IslandImages/waterCornerSW.png";

import road from "./IslandImages/road.png";
import roadES from "./IslandImages/roadES.png";
import roadEW from "./IslandImages/roadEW.png";
import roadNE from "./IslandImages/roadNE.png";
import roadNS from "./IslandImages/roadNS.png";
import roadNW from "./IslandImages/roadNW.png";
import roadSW from "./IslandImages/roadSW.png";

import roadHill2E from "./IslandImages/roadHill2E.png";
import roadHill2N from "./IslandImages/roadHill2N.png";
import roadHill2S from "./IslandImages/roadHill2S.png";
import roadHill2W from "./IslandImages/roadHill2W.png";
import roadHillE from "./IslandImages/roadHillE.png";
import roadHillN from "./IslandImages/roadHillN.png";
import roadHillS from "./IslandImages/roadHillS.png";
import roadHillW from "./IslandImages/roadHillW.png";

import lotE from "./IslandImages/lotE.png";
import lotES from "./IslandImages/lotES.png";
import lotN from "./IslandImages/lotN.png";
import lotNE from "./IslandImages/lotNE.png";
import lotNW from "./IslandImages/lotNW.png";
import lotS from "./IslandImages/lotS.png";
import lotSW from "./IslandImages/lotSW.png";
import lotW from "./IslandImages/lotW.png";

import bridgeEW from "./IslandImages/bridgeEW.png";
import bridgeNS from "./IslandImages/bridgeNS.png";

import crossroad from "./IslandImages/crossroad.png";
import crossroadESW from "./IslandImages/crossroadESW.png";
import crossroadNES from "./IslandImages/crossroadNES.png";
import crossroadNEW from "./IslandImages/crossroadNEW.png";
import crossroadNSW from "./IslandImages/crossroadNSW.png";

import endE from "./IslandImages/endE.png";
import endN from "./IslandImages/endN.png";
import endS from "./IslandImages/endS.png";
import endW from "./IslandImages/endW.png";

import exitE from "./IslandImages/exitE.png";
import exitN from "./IslandImages/exitN.png";
import exitS from "./IslandImages/exitS.png";
import exitW from "./IslandImages/exitW.png";

import riverBankedES from "./IslandImages/riverBankedES.png";
import riverBankedEW from "./IslandImages/riverBankedEW.png";
import riverBankedNE from "./IslandImages/riverBankedNE.png";
import riverBankedNS from "./IslandImages/riverBankedNS.png";
import riverBankedNW from "./IslandImages/riverBankedNW.png";
import riverBankedSW from "./IslandImages/riverBankedSW.png";

import riverES from "./IslandImages/riverES.png";
import riverEW from "./IslandImages/riverEW.png";
import riverNE from "./IslandImages/riverNE.png";
import riverNS from "./IslandImages/riverNS.png";
import riverNW from "./IslandImages/riverNW.png";
import riverSW from "./IslandImages/riverSW.png";

import riverBridge1 from "./IslandImages/riverBridge1.png";
import riverBridge2 from "./IslandImages/riverBridge2.png";
import riverBridge3 from "./IslandImages/riverBridge3.png";
import riverBridge4 from "./IslandImages/riverBridge4.png";

import grassWhole from "./IslandImages/grassWhole.png";

import hillE from "./IslandImages/hillE.png";
import hillES from "./IslandImages/hillES.png";
import hillN from "./IslandImages/hillN.png";
import hillNE from "./IslandImages/hillNE.png";
import hillNW from "./IslandImages/hillNW.png";
import hillS from "./IslandImages/hillS.png";
import hillSW from "./IslandImages/hillSW.png";
import hillW from "./IslandImages/hillW.png";

import beach from "./IslandImages/beach.png";
import beachE from "./IslandImages/beachE.png";
import beachES from "./IslandImages/beachES.png";
import beachN from "./IslandImages/beachN.png";
import beachNE from "./IslandImages/beachNE.png";
import beachNW from "./IslandImages/beachNW.png";
import beachS from "./IslandImages/beachS.png";
import beachSW from "./IslandImages/beachSW.png";
import beachW from "./IslandImages/beachW.png";

import beachCornerES from "./IslandImages/beachCornerES.png";
import beachCornerNE from "./IslandImages/beachCornerNE.png";
import beachCornerNW from "./IslandImages/beachCornerNW.png";
import beachCornerSW from "./IslandImages/beachCornerSW.png";

import riverBeachS from "./IslandImages/riverBeachS.png";

import coniferAltShort from "./IslandImages/coniferAltShort.png";
import coniferAltTall from "./IslandImages/coniferAltTall.png";
import coniferShort from "./IslandImages/coniferShort.png";
import coniferTall from "./IslandImages/coniferTall.png";

import treeAltShort from "./IslandImages/treeAltShort.png";
import treeAltTall from "./IslandImages/treeAltTall.png";

import treeShort from "./IslandImages/treeShort.png";
import treeTall from "./IslandImages/treeTall.png";

import tank from "./IslandImages/tank.png";
import koala from "./IslandImages/koala.png";
import redPanda from "./IslandImages/red_panda.png";
import disabled from "./IslandImages/disabled.png";
import disabled2 from "./IslandImages/disabled2.png";

const IslandViewer = ({ terrainMap, items }) => {
  const canvasRef = useRef();
  const imagesRef = useRef({});
  const modalRef = useRef();
  const modalImageRef = useRef();

  const [mapWidth, setMapWidth] = useState(0);
  const [mapPadding, setMapPadding] = useState({ left: 0, top: 0 });
  const [bedrockState, setBedrockState] = useState([]);
  const [subterrainState, setSubterrainState] = useState([]);
  const [terrainMapState, setTerrainMapState] = useState([]);
  const [terrainState, setTerrainState] = useState([]);
  const [itemsState, setItemsState] = useState([]);
  const [mouseCoordState, setMouseCoordState] = useState({ x: null, y: null });

  const getPosition = (event) => {
    if (event !== undefined) {
      const { x, y } = event;
      const tiles = [];
      if (terrainMapState.length === 0) return;

      const images = imagesRef.current;
      const canvasX = canvasRef.current.getBoundingClientRect().left;
      const canvasY = canvasRef.current.getBoundingClientRect().top;

      for (let i = 0; i < terrainMapState.length; i += 1) {
        for (let j = 0; j < terrainMapState[i].length; j += 1) {
          const tileX = canvasX + mapPadding.left + 50 * j - 50 * i;
          const tileY = canvasY + mapPadding.top + 25 * j + 25 * i;
          const centreX = tileX + 50;
          const centreY = tileY + 25;
          const distanceToCentre =
            ((x - centreX) ** 2 + (y - centreY) ** 2) ** 0.5;
          tiles.push({ x: j, y: i, d: distanceToCentre });
        }
      }

      // detail modal!!!!!!!!!

      const minD = Math.min(...tiles.map((d) => d.d));
      const tile = tiles.find((x) => x.d === minD);
      const tileId = terrainState[tile.y][tile.x];

      const modal = modalRef.current;
      modal.style.display = "block";
      const img = TileSwitcher(tileId, images);
      modalImageRef.current.src = img.src;
    }
  };

  const handleMouseMoveEvent = (event) => {
    if (event !== undefined) {
      const { x, y } = event;
      const tiles = [];

      if (terrainMapState.length === 0) return;

      const canvasX = canvasRef.current.getBoundingClientRect().left;
      const canvasY = canvasRef.current.getBoundingClientRect().top;

      for (let i = 0; i < terrainMapState.length; i += 1) {
        for (let j = 0; j < terrainMapState[i].length; j += 1) {
          const tileX = canvasX + mapPadding.left + 50 * j - 50 * i;
          const tileY = canvasY + mapPadding.top + 25 * j + 25 * i;
          const centreX = tileX + 50;
          const centreY = tileY + 25;
          const distanceToCentre =
            ((x - centreX) ** 2 + (y - centreY) ** 2) ** 0.5;
          tiles.push({ x: j, y: i, d: distanceToCentre });
        }
      }

      const minD = Math.min(...tiles.map((d) => d.d));
      const tile = tiles.find((x) => x.d === minD);

      setMouseCoordState({ x: tile.x, y: tile.y });
    }
  };

  const draw = () => {
    if (!canvasRef.current || !imagesRef.current) return;
    const images = imagesRef.current;

    canvasRef.current.addEventListener("mousedown", getPosition, false);
    canvasRef.current.addEventListener(
      "mousemove",
      handleMouseMoveEvent,
      false
    );

    const ctx = canvasRef.current.getContext("2d");

    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // bedrock
    for (let i = 0; i < bedrockState.length; i += 1) {
      for (let j = 0; j < bedrockState[i].length; j += 1) {
        if (bedrockState[i][j] !== 0) {
          const img = TileSwitcher(bedrockState[i][j], images);
          ctx.drawImage(
            img,
            mapPadding.left + 50 * j - 50 * i,
            mapPadding.top + 25 * j + 25 * i + 30
          );
        }
      }
    }

    // subterrain
    for (let i = 0; i < subterrainState.length; i += 1) {
      for (let j = 0; j < subterrainState[i].length; j += 1) {
        if (subterrainState[i][j] !== 0) {
          const img = TileSwitcher(subterrainState[i][j], images);
          ctx.drawImage(
            img,
            mapPadding.left + 50 * j - 50 * i,
            mapPadding.top + 25 * j + 25 * i + 15
          );
        }
      }
    }

    // terrain
    for (let i = 0; i < terrainState.length; i += 1) {
      for (let j = 0; j < terrainState[i].length; j += 1) {
        if (terrainState[i][j] !== 0) {
          const img = TileSwitcher(terrainState[i][j], images);
          ctx.drawImage(
            img,
            mapPadding.left + 50 * j - 50 * i,
            mapPadding.top + 25 * j + 25 * i
          );
          // console.log(mouseCoordState);
          if (i === mouseCoordState.y && j === mouseCoordState.x) {
            const img = TileSwitcher(106, images);
            ctx.drawImage(
              img,
              mapPadding.left + 50 * j - 50 * i,
              mapPadding.top + 25 * j + 25 * i
            );
          }
        }
      }
    }

    // items
    for (let i = 0; i < itemsState.length; i += 1) {
      for (let j = 0; j < itemsState[i].length; j += 1) {
        if (itemsState[i][j] !== 0) {
          const img = TileSwitcher(itemsState[i][j], images);
          ctx.drawImage(
            img,
            mapPadding.left + 50 * j - 50 * i,
            mapPadding.top + 25 * j + 25 * i - 15
          );
        }
      }
    }
  };

  useEffect(() => {
    setTerrainMapState(terrainMap);
    setTerrainState(createTerrain(terrainMap));
    setItemsState(items);
  }, [terrainMap, items]);

  useEffect(() => {
    if (terrainMapState.length === 0) return;

    setMapWidth(terrainMapState[0].length);
  }, [terrainMapState]);

  useEffect(() => {
    if (terrainMapState.length === 0) return;
    if (!canvasRef.current) return;

    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    const terrainYCount = terrainState.length;
    const terrainXCount = terrainState[0].length;

    setMapPadding({
      left: Math.max(canvasWidth - terrainXCount * 11, 0) / 2,
      top: Math.max(canvasHeight - terrainYCount * 60, 0) / 2,
    });
  }, [terrainMapState]);

  useEffect(() => {
    const bedrock = new Array(terrainMapState.length);

    for (let i = 0; i < terrainMapState.length; i += 1) {
      bedrock[i] = new Array(terrainMapState[i].length);
      for (let j = 0; j < terrainMapState[i].length; j += 1) {
        bedrock[i][j] = 101;
      }
    }
    setBedrockState(bedrock);
  }, [terrainMapState]);

  useEffect(() => {
    const subterrain = new Array(terrainMapState.length);

    for (let i = 0; i < terrainMapState.length; i += 1) {
      subterrain[i] = new Array(terrainMapState[i].length);
      for (let j = 0; j < terrainMapState[i].length; j += 1) {
        subterrain[i][j] = 77;
      }
    }
    setSubterrainState(subterrain);
  }, [terrainMapState]);

  useEffect(() => {
    draw();
  }, [mouseCoordState, mapWidth, terrainMapState, mapPadding, itemsState]);

  return (
    <div className="center">
      {/* <!-- The Modal --> */}
      <div ref={modalRef} id="myModal" className="modal">
        {/* <!-- The Close Button --> */}
        <button
          className="close"
          onClick={() => {
            modalRef.current.style.display = "none";
          }}
        >
          &times;
        </button>
        {/* <!-- Modal Content (The Image) --> */}
        <div className="modal-content">
          <img ref={modalImageRef} id="img01" alt="" />
        </div>

        {/* <!-- Modal Caption (Image Text) --> */}
        <div id="caption" />
      </div>

      <canvas ref={canvasRef} id="canvas" width={1200} height={650} />

      <img
        alt=""
        ref={(el) => (imagesRef.current.grass = el)}
        src={grass}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirt = el)}
        src={dirt}
        className="hidden"
      />

      {/* water */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterN = el)}
        src={waterN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterNE = el)}
        src={waterNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterE = el)}
        src={waterE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterES = el)}
        src={waterES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterS = el)}
        src={waterS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterSW = el)}
        src={waterSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterW = el)}
        src={waterW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterNW = el)}
        src={waterNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.water = el)}
        src={water}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerES = el)}
        src={waterCornerES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerNE = el)}
        src={waterCornerNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerNW = el)}
        src={waterCornerNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerSW = el)}
        src={waterCornerSW}
        className="hidden"
      />

      {/* road */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.road = el)}
        src={road}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadES = el)}
        src={roadES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadEW = el)}
        src={roadEW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src={roadHill2E}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2N = el)}
        src={roadHill2N}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2S = el)}
        src={roadHill2S}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2W = el)}
        src={roadHill2W}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHillE = el)}
        src={roadHillE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHillN = el)}
        src={roadHillN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHillS = el)}
        src={roadHillS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHillW = el)}
        src={roadHillW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadNE = el)}
        src={roadNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadNS = el)}
        src={roadNS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadNW = el)}
        src={roadNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadSW = el)}
        src={roadSW}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.lotE = el)}
        src={lotE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotES = el)}
        src={lotES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotN = el)}
        src={lotN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotNE = el)}
        src={lotNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotNW = el)}
        src={lotNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotS = el)}
        src={lotS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotSW = el)}
        src={lotSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotW = el)}
        src={lotW}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.bridgeEW = el)}
        src={bridgeEW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.bridgeNS = el)}
        src={bridgeNS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroad = el)}
        src={crossroad}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadESW = el)}
        src={crossroadESW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNES = el)}
        src={crossroadNES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNEW = el)}
        src={crossroadNEW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNSW = el)}
        src={crossroadNSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endE = el)}
        src={endE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endN = el)}
        src={endN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endS = el)}
        src={endS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endW = el)}
        src={endW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitE = el)}
        src={exitE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitN = el)}
        src={exitN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitS = el)}
        src={exitS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitW = el)}
        src={exitW}
        className="hidden"
      />

      {/* river */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedES = el)}
        src={riverBankedES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedEW = el)}
        src={riverBankedEW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNE = el)}
        src={riverBankedNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNS = el)}
        src={riverBankedNS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNW = el)}
        src={riverBankedNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedSW = el)}
        src={riverBankedSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverES = el)}
        src={riverES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverEW = el)}
        src={riverEW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNE = el)}
        src={riverNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNS = el)}
        src={riverNS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNW = el)}
        src={riverNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverSW = el)}
        src={riverSW}
        className="hidden"
      />

      {/* grass */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.grass = el)}
        src={grass}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.grassWhole = el)}
        src={grassWhole}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillE = el)}
        src={hillE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillES = el)}
        src={hillES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillN = el)}
        src={hillN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillNE = el)}
        src={hillNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillNW = el)}
        src={hillNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillS = el)}
        src={hillS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotS = el)}
        src={hillSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillW = el)}
        src={hillW}
        className="hidden"
      />

      {/* dirt */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirt = el)}
        src={dirt}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirtDouble = el)}
        src={dirtDouble}
        className="hidden"
      />

      {/* beach */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.beach = el)}
        src={beach}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerES = el)}
        src={beachCornerES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerNE = el)}
        src={beachCornerNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerNW = el)}
        src={beachCornerNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerSW = el)}
        src={beachCornerSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachE = el)}
        src={beachE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachES = el)}
        src={beachES}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachN = el)}
        src={beachN}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachNE = el)}
        src={beachNE}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachNW = el)}
        src={beachNW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachS = el)}
        src={beachS}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachSW = el)}
        src={beachSW}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachW = el)}
        src={beachW}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBeachS = el)}
        src={riverBeachS}
        className="hidden"
      />

      {/* conifer trees */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferAltShort = el)}
        src={coniferAltShort}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferAltTall = el)}
        src={coniferAltTall}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferShort = el)}
        src={coniferShort}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferTall = el)}
        src={coniferTall}
        className="hidden"
      />

      {/* non conifer trees */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeAltShort = el)}
        src={treeAltShort}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeAltTall = el)}
        src={treeAltTall}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeShort = el)}
        src={treeShort}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeTall = el)}
        src={treeTall}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.tank = el)}
        src={tank}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.empty = el)}
        src={empty}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.rock = el)}
        src={rock}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge1 = el)}
        src={riverBridge1}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge2 = el)}
        src={riverBridge2}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge3 = el)}
        src={riverBridge3}
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge4 = el)}
        src={riverBridge4}
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.selectedGrid = el)}
        src={selectedGrid}
        className="hidden"
      />

      <img
        alt="koala"
        ref={(el) => (imagesRef.current.koala = el)}
        src={koala}
        className="hidden"
      />

      <img
        alt="redPanda"
        ref={(el) => (imagesRef.current.redPanda = el)}
        src={redPanda}
        className="hidden"
      />

      <img
        alt="disabled"
        ref={(el) => (imagesRef.current.disabled = el)}
        src={disabled}
        className="hidden"
      />

      <img
        alt="disabled2"
        ref={(el) => (imagesRef.current.disabled2 = el)}
        src={disabled2}
        className="hidden"
      />
    </div>
  );
};

export default IslandViewer;
