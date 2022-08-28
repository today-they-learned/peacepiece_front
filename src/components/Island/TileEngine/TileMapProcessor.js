import { terrainMap } from "./TerrainMap";
import {
  roadTileMap,
  bankedRiverTileMap,
  riverTileMap,
  grassTileMap,
  waterTileMap,
  beachTileMap,
} from "./tileMaps";

function ProcessMap(map, tileMap) {
  // , tileId, straightJunction_horizontal, straightJunction_vertical, bend_1, bend_2, bend_3, bend_4, tJunction_1, tJunction_2, tJunction_3, tJunction_4, cross, outJunction_bend_1, outJunction_bend_2, outJunction_bend_3, outJunction_bend_4, edge_1, edge_2, edge_3, edge_4){
  const tiles = fillArray([map.length, map[0].length], 0);
  const { tileId } = tileMap;

  let i = 0;
  let j = 0;

  for (i = 0; i < map.length; i += 1) {
    for (j = 0; j < map[i].length; j += 1) {
      tiles[i][j] = map[i][j];
    }
  }

  for (i = 0; i < map.length; i += 1) {
    for (j = 0; j < map[i].length; j += 1) {
      //  j ->
      //  [A]   [B]   [C]

      //  [D] [TILE]  [F]

      //  [G]   [H]   [I]

      // determine what tiles surround the tile
      let A = 0;
      let B = 0;
      let C = 0;
      let D = 0;
      let TILE = 0;
      let F = 0;
      let G = 0;
      let H = 0;
      let I = 0;

      TILE = map[i][j];

      if (i !== 0) {
        if (j > 0) {
          A = map[i - 1][j - 1];
        }

        B = map[i - 1][j];

        if (j < map[i].length - 1) {
          C = map[i - 1][j + 1];
        }
      }

      if (j > 0) {
        D = map[i][j - 1];
      }

      if (j < map[i].length - 1) {
        F = map[i][j + 1];
      }

      if (i < map.length - 1) {
        if (j > 0) {
          G = map[i + 1][j - 1];
        }

        H = map[i + 1][j];

        if (j < map[i].length - 1) {
          I = map[i + 1][j + 1];
        }
      }

      switch (TILE) {
        case tileId:
          tiles[i][j] = tileMap.straightJunction_vertical;

          // straight
          if (B === tileId) {
            tiles[i][j] = tileMap.straightJunction_vertical;
          }
          if (F === tileId) {
            tiles[i][j] = tileMap.straightJunction_horizontal;
          }
          if (H === tileId) {
            tiles[i][j] = tileMap.straightJunction_vertical;
          }
          if (D === tileId) {
            tiles[i][j] = tileMap.straightJunction_horizontal;
          }
          if (B === tileId && H === tileId) {
            tiles[i][j] = tileMap.straightJunction_vertical;
          }
          if (D === tileId && F === tileId) {
            tiles[i][j] = tileMap.straightJunction_horizontal;
          }

          if (F === tileId && D !== tileId) {
            tiles[i][j] = tileMap.edge_1;
          }
          if (H === tileId && B !== tileId) {
            tiles[i][j] = tileMap.edge_2;
          }
          if (D === tileId && F !== tileId) {
            tiles[i][j] = tileMap.edge_3;
          }
          if (B === tileId && H !== tileId) {
            tiles[i][j] = tileMap.edge_4;
          }

          // bend
          if (B === tileId && D === tileId && F !== tileId && H !== tileId) {
            tiles[i][j] = tileMap.bend_1;
          }
          if (B === tileId && F === tileId && D !== tileId && H !== tileId) {
            tiles[i][j] = tileMap.bend_2;
          }
          if (F === tileId && H === tileId && D !== tileId && B !== tileId) {
            tiles[i][j] = tileMap.bend_3;
          }

          if (H === tileId && D === tileId && B !== tileId && F !== tileId) {
            tiles[i][j] = tileMap.bend_4;
          }

          // 3 way junctions
          if (
            B === tileId &&
            D === tileId &&
            F === tileId &&
            A !== tileId &&
            C !== tileId
          ) {
            tiles[i][j] = tileMap.tJunction_2;
          }
          if (
            B === tileId &&
            H === tileId &&
            F === tileId &&
            I !== tileId &&
            C !== tileId
          ) {
            tiles[i][j] = tileMap.tJunction_3;
          }
          if (
            D === tileId &&
            F === tileId &&
            H === tileId &&
            G !== tileId &&
            I !== tileId
          ) {
            tiles[i][j] = tileMap.tJunction_4;
          }
          if (
            B === tileId &&
            D === tileId &&
            H === tileId &&
            A !== tileId &&
            G !== tileId
          ) {
            tiles[i][j] = tileMap.tJunction_1;
          }

          // crossroads
          if (D === tileId && B === tileId && F === tileId && H === tileId) {
            tiles[i][j] = tileMap.cross;
          }

          if (
            D === tileId &&
            B === tileId &&
            G === tileId &&
            C === tileId &&
            A !== tileId
          ) {
            tiles[i][j] = tileMap.outJunction_bend_1;
          }

          if (
            B === tileId &&
            F === tileId &&
            A === tileId &&
            I === tileId &&
            C !== tileId
          ) {
            tiles[i][j] = tileMap.outJunction_bend_2;
          }

          if (
            F === tileId &&
            H === tileId &&
            C === tileId &&
            G === tileId &&
            I !== tileId
          ) {
            tiles[i][j] = tileMap.outJunction_bend_3;
          }

          if (
            D === tileId &&
            H === tileId &&
            A === tileId &&
            I === tileId &&
            G !== tileId
          ) {
            tiles[i][j] = tileMap.outJunction_bend_4;
          }

          break;

        default:
      }
    }
  }
  return tiles;
}

export function fillArray(dimensions, value) {
  const array = [];

  for (let i = 0; i < dimensions[0]; i += 1) {
    array.push(
      dimensions.length === 1 ? value : fillArray(dimensions.slice(1), value)
    );
  }

  return array;
}

// process roads
const proecessedMap1 = ProcessMap(terrainMap, roadTileMap);
// process banked rivers
const proecessedMap2 = ProcessMap(proecessedMap1, bankedRiverTileMap);
// process rivers
const proecessedMap3 = ProcessMap(proecessedMap2, riverTileMap);
// process grass
const proecessedMap4 = ProcessMap(proecessedMap3, grassTileMap);
// Process Water
const proecessedMap5 = ProcessMap(proecessedMap4, waterTileMap);
// Process Beach
export const terrain = ProcessMap(proecessedMap5, beachTileMap);
