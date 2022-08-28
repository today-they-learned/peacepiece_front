/* eslint-disable no-return-assign */
import React, { useRef, useLayoutEffect, useState } from "react";
import "./Tiles.css";
import "react-isometric-tilemap/build/css/index.css";
import { ProcessPath } from "./TileEngine/PathProcessor";
import { TileSwitcher } from "./TileEngine/TileSwitcher";
import { terrainMap } from "./TileEngine/TerrainMap";
import { items } from "./TileEngine/ItemsMap";
import { MovableItems } from "./TileEngine/MoveableItems";
import { terrain } from "./TileEngine/TileMapProcessor";

const TILE_WIDTH = 100;
const mouseCoords = { x: 0, y: 0 };

const IslandViewer = () => {
  const canvasRef = useRef();
  const imagesRef = useRef({});
  const modalRef = useRef();
  const modalImageRef = useRef();
  const [terrainMapState, setTerrainMapState] = useState(terrainMap);

  const mapWidth = terrainMapState[0].length;

  const bedrock = new Array(terrainMapState.length);

  for (let i = 0; i < terrainMapState.length; i += 1) {
    bedrock[i] = new Array(terrainMapState[i].length);
    for (let j = 0; j < terrainMapState[i].length; j += 1) {
      bedrock[i][j] = 101;
    }
  }

  const subterrain = new Array(terrainMapState.length);

  for (let i = 0; i < terrainMapState.length; i += 1) {
    subterrain[i] = new Array(terrainMapState[i].length);
    for (let j = 0; j < terrainMapState[i].length; j += 1) {
      subterrain[i][j] = 77;
    }
  }

  //   handleMouseMoveEvent(event) {
  //     if (event !== undefined) {
  //       const { x } = event;
  //       const { y } = event;
  //       const tiles = [];

  //       for (let i = 0; i < terrainMapState.length; i += 1) {
  //         for (let j = 0; j < terrainMapState[i].length; j += 1) {
  //           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
  //           const tileX = top + 50 * j - 50 * i;
  //           const tileY = 25 * j + 25 * i;
  //           const centreX = tileX + 50;
  //           const centreY = tileY + 25;
  //           const distanceToCentre =
  //             ((x - centreX) ** 2 + (y - centreY) ** 2) ** 0.5;
  //           tiles.push({ x: j, y: i, d: distanceToCentre });
  //         }
  //       }

  //       const minD = Math.min.apply(
  //         Math,
  //         tiles.map((d) => d.d)
  //       );
  //       const tile = tiles.find((x) => x.d === minD);
  //       mouseCoords = { x: tile.x, y: tile.y };
  //     }
  //   }

  useLayoutEffect(() => {
    if (!canvasRef.current || !imagesRef.current) return;
    console.log("@@@@@@@@@@@@@@@@", canvasRef.current, imagesRef.current);
    const images = imagesRef.current;

    // canvas.addEventListener("mousedown", this.getPosition, false);
    // canvas.addEventListener("mousemove", this.handleMouseMoveEvent, false);

    const ctx = canvasRef.current.getContext("2d");
    // let img = images.dart;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // bedrock
    for (let i = 0; i < bedrock.length; i += 1) {
      for (let j = 0; j < bedrock[i].length; j += 1) {
        if (bedrock[i][j] !== 0) {
          const img = TileSwitcher(bedrock[i][j], images).cloneNode(true);
          // const img = new Image();
          // img.src = "/IslandImages/dart.png";
          const top = Math.ceil((mapWidth * TILE_WIDTH) / 2 / 100) * 100;
          img.onload = () => {
            // ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 30);
            ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 30);
            console.log(i, j, top + 50 * j - 50 * i, 25 * j + 25 * i + 30);
          };
        }
      }
    }

    // subterrain
    for (let i = 0; i < subterrain.length; i += 1) {
      for (let j = 0; j < subterrain[i].length; j += 1) {
        if (subterrain[i][j] !== 0) {
          const img = TileSwitcher(subterrain[i][j], images).cloneNode(true);
          const top = Math.ceil((mapWidth * TILE_WIDTH) / 2 / 100) * 100;
          img.onload = () => {
            // ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 15);
            ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 15);
          };
        }
      }
    }

    // terrain
    // for (let i = 0; i < terrain.length; i += 1) {
    //   for (let j = 0; j < terrain[i].length; j += 1) {
    //     if (terrain[i][j] !== 0) {
    //       img = TileSwitcher(terrain[i][j], images);
    //       const top = Math.ceil((mapWidth * TILE_WIDTH) / 2 / 100) * 100;
    //       ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);

    //       if (i === mouseCoords.y && j === mouseCoords.x) {
    //         img = TileSwitcher(106, images);
    //         ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);
    //       }
    //     }
    //   }
    // }

    // items
    // for (let i = 0; i < items.length; i += 1) {
    //   for (let j = 0; j < items[i].length; j += 1) {
    //     if (items[i][j] !== 0) {
    //       img = TileSwitcher(items[i][j], images);
    //       const top = Math.ceil((mapWidth * TILE_WIDTH) / 2 / 100) * 100;
    //       ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);
    //     }
    //   }

    //   // moveable Items
    //   for (let z = 0; z < MovableItems.length; z += 1) {
    //     const item = MovableItems[z];
    //     const { path } = item;
    //     const realPath = ProcessPath(path, mapWidth, TILE_WIDTH);
    //     const itemToMove = TileSwitcher(item.tileId, images);
    //     if (item.position === undefined) {
    //       // eslint-disable-next-line prefer-destructuring
    //       item.position = realPath[0];
    //     }
    //     if (item.stage < realPath.length - 1) {
    //       const NextPosition = realPath[item.stage + 1];
    //       if (NextPosition.x < item.position.x) {
    //         item.position.x -= item.speed;
    //       } else {
    //         item.position.x += item.speed;
    //       }
    //       if (NextPosition.y < item.position.y) {
    //         item.position.y -= item.speed / 2;
    //       } else {
    //         item.position.y += item.speed / 2;
    //       }

    //       if (
    //         NextPosition.x === Math.round(item.position.x) &&
    //         NextPosition.y === Math.round(item.position.y)
    //       ) {
    //         item.stage += 1;
    //       }
    //     }
    //     ctx.drawImage(itemToMove, item.position.x, item.position.y);
    //   }
    // }
  }, [canvasRef, imagesRef]);

  return (
    <div className="center">
      {/* <!-- The Modal --> */}
      <div ref={modalRef} id="myModal" className="modal">
        {/* <!-- The Close Button --> */}
        <button
          className="close"
          onClick={() => {
            modalRef.style.display = "none";
          }}
        >
          &times;
        </button>
        {/* <!-- Modal Content (The Image) --> */}
        <img ref={modalImageRef} className="modal-content" id="img01" alt="" />

        {/* <!-- Modal Caption (Image Text) --> */}
        <div id="caption" />
      </div>

      <canvas ref={canvasRef} id="canvas" width={1200} height={600} />

      <img
        alt=""
        ref={(el) => (imagesRef.current.grass = el)}
        src="/IslandImages/grass.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirt = el)}
        src="/IslandImages/dirt.png"
        className="hidden"
      />

      {/* water */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterN = el)}
        src="/IslandImages/waterN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterNE = el)}
        src="/IslandImages/waterNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterE = el)}
        src="/IslandImages/waterE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterES = el)}
        src="/IslandImages/waterES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterS = el)}
        src="/IslandImages/waterS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterSW = el)}
        src="/IslandImages/waterSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterW = el)}
        src="/IslandImages/waterW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterNW = el)}
        src="/IslandImages/waterNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.water = el)}
        src="/IslandImages/water.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerES = el)}
        src="/IslandImages/waterCornerES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerNE = el)}
        src="/IslandImages/waterCornerNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerNW = el)}
        src="/IslandImages/waterCornerNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.waterCornerSW = el)}
        src="/IslandImages/waterCornerSW.png"
        className="hidden"
      />

      {/* road */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.road = el)}
        src="/IslandImages/road.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadES = el)}
        src="/IslandImages/roadES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadEW = el)}
        src="/IslandImages/roadEW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHill2E.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHill2N.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHill2S.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHill2W.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHillE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHillN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHillS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadHillW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadNS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/roadSW.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/lotE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/lotES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.roadHill2E = el)}
        src="/IslandImages/lotN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotNE = el)}
        src="/IslandImages/lotNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotNW = el)}
        src="/IslandImages/lotNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotS = el)}
        src="/IslandImages/lotS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotSW = el)}
        src="/IslandImages/lotSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotW = el)}
        src="/IslandImages/lotW.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.bridgeEW = el)}
        src="/IslandImages/bridgeEW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.bridgeNS = el)}
        src="/IslandImages/bridgeNS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroad = el)}
        src="/IslandImages/crossroad.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadESW = el)}
        src="/IslandImages/crossroadESW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNES = el)}
        src="/IslandImages/crossroadNES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNEW = el)}
        src="/IslandImages/crossroadNEW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.crossroadNSW = el)}
        src="/IslandImages/crossroadNSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endE = el)}
        src="/IslandImages/endE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endN = el)}
        src="/IslandImages/endN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endS = el)}
        src="/IslandImages/endS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.endW = el)}
        src="/IslandImages/endW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitE = el)}
        src="/IslandImages/exitE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitN = el)}
        src="/IslandImages/exitN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitS = el)}
        src="/IslandImages/exitS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.exitW = el)}
        src="/IslandImages/exitW.png"
        className="hidden"
      />

      {/* river */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedES = el)}
        src="/IslandImages/riverBankedES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedEW = el)}
        src="/IslandImages/riverBankedEW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNE = el)}
        src="/IslandImages/riverBankedNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNS = el)}
        src="/IslandImages/riverBankedNS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedNW = el)}
        src="/IslandImages/riverBankedNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBankedSW = el)}
        src="/IslandImages/riverBankedSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverES = el)}
        src="/IslandImages/riverES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverEW = el)}
        src="/IslandImages/riverEW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNE = el)}
        src="/IslandImages/riverNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNS = el)}
        src="/IslandImages/riverNS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverNW = el)}
        src="/IslandImages/riverNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverSW = el)}
        src="/IslandImages/riverSW.png"
        className="hidden"
      />

      {/* grass */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.grass = el)}
        src="/IslandImages/grass.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.grassWhole = el)}
        src="/IslandImages/grassWhole.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillE = el)}
        src="/IslandImages/hillE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillES = el)}
        src="/IslandImages/hillES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillN = el)}
        src="/IslandImages/hillN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillNE = el)}
        src="/IslandImages/hillNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillNW = el)}
        src="/IslandImages/hillNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillS = el)}
        src="/IslandImages/hillS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.lotS = el)}
        src="/IslandImages/hillSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.hillW = el)}
        src="/IslandImages/hillW.png"
        className="hidden"
      />

      {/* dirt */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirt = el)}
        src="/IslandImages/dirt.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.dirtDouble = el)}
        src="/IslandImages/dirtDouble.png"
        className="hidden"
      />

      {/* beach */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.beach = el)}
        src="/IslandImages/beach.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerES = el)}
        src="/IslandImages/beachCornerES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerNE = el)}
        src="/IslandImages/beachCornerNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerNW = el)}
        src="/IslandImages/beachCornerNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachCornerSW = el)}
        src="/IslandImages/beachCornerSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachE = el)}
        src="/IslandImages/beachE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachES = el)}
        src="/IslandImages/beachES.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachN = el)}
        src="/IslandImages/beachN.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachNE = el)}
        src="/IslandImages/beachNE.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachNW = el)}
        src="/IslandImages/beachNW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachS = el)}
        src="/IslandImages/beachS.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachSW = el)}
        src="/IslandImages/beachSW.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.beachW = el)}
        src="/IslandImages/beachW.png"
        className="hidden"
      />

      {/* conifer trees */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferAltShort = el)}
        src="/IslandImages/coniferAltShort.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferAltTall = el)}
        src="/IslandImages/coniferAltTall.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferShort = el)}
        src="/IslandImages/coniferShort.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.coniferTall = el)}
        src="/IslandImages/coniferTall.png"
        className="hidden"
      />

      {/* non conifer trees */}
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeAltShort = el)}
        src="/IslandImages/treeAltShort.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeAltTall = el)}
        src="/IslandImages/treeAltTall.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeShort = el)}
        src="/IslandImages/treeShort.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.treeTall = el)}
        src="/IslandImages/treeTall.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.tank = el)}
        src="/IslandImages/tank.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.empty = el)}
        src="/IslandImages/empty.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.rock = el)}
        src="/IslandImages/rock.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge1 = el)}
        src="/IslandImages/riverBridge1.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge2 = el)}
        src="/IslandImages/riverBridge2.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge3 = el)}
        src="/IslandImages/riverBridge3.png"
        className="hidden"
      />
      <img
        alt=""
        ref={(el) => (imagesRef.current.riverBridge4 = el)}
        src="/IslandImages/riverBridge4.png"
        className="hidden"
      />

      <img
        alt=""
        ref={(el) => (imagesRef.current.selectedGrid = el)}
        src="/IslandImages/selectedGrid.png"
        className="hidden"
      />

      <img
        alt="blob test"
        ref={(el) => (imagesRef.current.blobTest = el)}
        src="/IslandImages/testtest.png"
        className="hidden"
      />
    </div>
  );
};

// class IslandViewer extends React.Component {
//   constructor(props) {
//     super(props);
//     this.loop = this.loop.bind(this);
//     this.draw = this.draw.bind(this);
//     this.getPosition = this.getPosition.bind(this);
//     this.handleMouseMoveEvent = this.handleMouseMoveEvent.bind(this);
//   }

//   componentDidMount() {
//     requestAnimationFrame(this.loop);
//   }

//   handleMouseMoveEvent(event) {
//     if (event !== undefined) {
//       const { x } = event;
//       const { y } = event;
//       const tiles = [];

//       for (let i = 0; i < terrainMapState.length; i += 1) {
//         for (let j = 0; j < terrainMapState[i].length; j += 1) {
//           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//           const tileX = top + 50 * j - 50 * i;
//           const tileY = 25 * j + 25 * i;
//           const centreX = tileX + 50;
//           const centreY = tileY + 25;
//           const distanceToCentre =
//             ((x - centreX) ** 2 + (y - centreY) ** 2) ** 0.5;
//           tiles.push({ x: j, y: i, d: distanceToCentre });
//         }
//       }

//       const minD = Math.min.apply(
//         Math,
//         tiles.map((d) => d.d)
//       );
//       const tile = tiles.find((x) => x.d === minD);
//       mouseCoords = { x: tile.x, y: tile.y };
//     }
//   }

// getPosition(event) {
//   if (event !== undefined) {
//     const { x } = event;
//     const { y } = event;
//     const tiles = [];

//     for (let i = 0; i < terrainMapState.length; i += 1) {
//       for (let j = 0; j < terrainMapState[i].length; j += 1) {
//         const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//         const tileX = top + 50 * j - 50 * i;
//         const tileY = 25 * j + 25 * i;
//         const centreX = tileX + 50;
//         const centreY = tileY + 25;
//         const distanceToCentre =
//           ((x - centreX) ** 2 + (y - centreY) ** 2) ** 0.5;
//         tiles.push({ x: j, y: i, d: distanceToCentre });
//       }
//     }

// const minD = Math.min.apply(
//   Math,
//   tiles.map((d) => d.d)
// );
// var tile = tiles.find((x) => x.d === minD);
// console.log(tiles)
// console.log(tile)
// console.log("x:" + tile.x + " y:" + tile.y);
// const tileId = terrain[tile.y][tile.x];

// detail modal!!!!!!!!!
// const modal = this.refs.myModal;
// modal.style.display = "block";
// this.refs.modalImage.src = TileSwitcher(tileId, this.refs).src;
//   }
// }

//   draw() {
//     const { canvas } = this.refs;

//     // canvas.addEventListener("mousedown", this.getPosition, false);
//     canvas.addEventListener("mousemove", this.handleMouseMoveEvent, false);

//     const ctx = canvas.getContext("2d");
//     let img = this.refs.dirt;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // bedrock
//     for (let i = 0; i < bedrock.length; i += 1) {
//       for (let j = 0; j < bedrock[i].length; j += 1) {
//         if (bedrock[i][j] !== 0) {
//           img = TileSwitcher(bedrock[i][j], this.refs);
//           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//           ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 30);
//         }
//       }
//     }

//     // subterrain
//     for (let i = 0; i < subterrain.length; i += 1) {
//       for (let j = 0; j < subterrain[i].length; j += 1) {
//         if (subterrain[i][j] !== 0) {
//           img = TileSwitcher(subterrain[i][j], this.refs);
//           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//           ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i + 15);
//         }
//       }
//     }

//     // terrain
//     for (let i = 0; i < terrain.length; i += 1) {
//       for (let j = 0; j < terrain[i].length; j += 1) {
//         if (terrain[i][j] !== 0) {
//           img = TileSwitcher(terrain[i][j], this.refs);
//           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//           ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);

//           if (i === mouseCoords.y && j === mouseCoords.x) {
//             img = TileSwitcher(106, this.refs);
//             ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);
//           }
//         }
//       }
//     }

//     // items
//     for (let i = 0; i < items.length; i += 1) {
//       for (let j = 0; j < items[i].length; j += 1) {
//         if (items[i][j] !== 0) {
//           img = TileSwitcher(items[i][j], this.refs);
//           const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
//           ctx.drawImage(img, top + 50 * j - 50 * i, 25 * j + 25 * i);
//         }
//       }

//       // moveable Items
//       for (let z = 0; z < MovableItems.length; z++) {
//         const item = MovableItems[z];
//         const { path } = item;
//         const realPath = ProcessPath(path, mapWidth, tileWidth);
//         const itemToMove = TileSwitcher(item.tileId, this.refs);
//         if (item.position === undefined) {
//           item.position = realPath[0];
//         }
//         if (item.stage < realPath.length - 1) {
//           const NextPosition = realPath[item.stage + 1];
//           if (NextPosition.x < item.position.x) {
//             item.position.x -= item.speed;
//           } else {
//             item.position.x += item.speed;
//           }
//           if (NextPosition.y < item.position.y) {
//             item.position.y -= item.speed / 2;
//           } else {
//             item.position.y += item.speed / 2;
//           }

//           if (
//             NextPosition.x === Math.round(item.position.x) &&
//             NextPosition.y === Math.round(item.position.y)
//           ) {
//             item.stage += 1;
//           }
//         }
//         ctx.drawImage(itemToMove, item.position.x, item.position.y);
//       }
//     }
//   }

//   loop() {
//     this.draw();

//     requestAnimationFrame(this.loop);
//   }

//   render() {
//     return (
//       <div className="center">
//         {/* <!-- The Modal --> */}
//         <div ref="myModal" id="myModal" className="modal">
//           {/* <!-- The Close Button --> */}
//           <span
//             className="close"
//             onClick={() => {
//               this.refs.myModal.style.display = "none";
//             }}
//           >
//             &times;
//           </span>

//           {/* <!-- Modal Content (The Image) --> */}
//           <img ref="modalImage" className="modal-content" id="img01" />

//           {/* <!-- Modal Caption (Image Text) --> */}
//           <div id="caption" />
//         </div>

//         <canvas ref="canvas" id="canvas" width={1000} height={600} />
//       </div>
//     );
//   }
// }

export default IslandViewer;
