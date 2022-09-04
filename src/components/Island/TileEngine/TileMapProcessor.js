// import { terrainMap } from "./TerrainMap";
import {
  roadTileMap,
  bankedRiverTileMap,
  riverTileMap,
  grassTileMap,
  waterTileMap,
  fullWaterTileMap,
  beachTileMap,
  edgeBeachTileMap,
  riverBeachTileMap,
} from "./tileMaps";

const getTile = ({ tile, A, B, C, D, F, G, H, I, tileMap }) => {
  const NONE = 0;
  //  [A]   [B]   [C]

  //  [D] [tile]  [F]

  //  [G]   [H]   [I]

  // ===== isolate =====
  if (
    A !== tile &&
    B !== tile &&
    C !== tile &&
    D !== tile &&
    F !== tile &&
    G !== tile &&
    H !== tile &&
    I !== tile
  ) {
    // ◻︎ ◻︎ ◻︎
    // ◻︎ ◼︎ ◻︎
    // ◻︎ ◻︎ ◻︎
    return tileMap.isolate;
  }

  // ===== outJunction_bend =====
  if (
    A !== tile &&
    B === tile &&
    C === tile &&
    D === tile &&
    F !== tile &&
    G === tile &&
    H !== tile &&
    I !== tile
  ) {
    // ◻︎ ◼︎ ◼︎
    // ◼︎ ◼︎ ◻︎
    // ◼︎ ◻︎ ◻︎
    return tileMap.outJunction_bend_1;
  }

  if (
    A === tile &&
    B === tile &&
    C !== tile &&
    D !== tile &&
    F === tile &&
    G !== tile &&
    H !== tile &&
    I === tile
  ) {
    // ◼︎ ◼︎ ◻︎
    // ◻︎ ◼︎ ◼︎
    // ◻︎ ◻︎ ◼︎
    return tileMap.outJunction_bend_2;
  }

  if (
    A !== tile &&
    B !== tile &&
    C === tile &&
    D !== tile &&
    F === tile &&
    G === tile &&
    H === tile &&
    I !== tile
  ) {
    // ◻︎ ◻︎ ◼︎
    // ◻︎ ◼︎ ◼︎
    // ◼︎ ◼︎ ◻︎
    return tileMap.outJunction_bend_3;
  }

  if (
    A === tile &&
    B !== tile &&
    C !== tile &&
    D === tile &&
    F !== tile &&
    G !== tile &&
    H === tile &&
    I === tile
  ) {
    // ◼︎ ◻︎ ◻︎
    // ◼︎ ◼︎ ◻︎
    // ◻︎ ◼︎ ◼︎
    return tileMap.outJunction_bend_4;
  }
  // ===== outJunction_bend =====

  // ===== crossroads =====
  if (B === tile && D === tile && F === tile && H === tile) {
    // ◻ ◼︎ ◻︎
    // ◼︎ ◼︎ ◼︎
    // ◻︎ ◼︎ ◻︎
    return tileMap.cross;
  }
  // ===== crossroads =====

  // ===== 3 way junctions =====
  if (A !== tile && B === tile && C !== tile && D === tile && F === tile) {
    return tileMap.tJunction_2;
  }
  if (B === tile && C !== tile && F === tile && H === tile && I !== tile) {
    return tileMap.tJunction_3;
  }
  if (D === tile && F === tile && H === tile && G !== tile && I !== tile) {
    return tileMap.tJunction_4;
  }
  if (A !== tile && B === tile && D === tile && G !== tile && H === tile) {
    return tileMap.tJunction_1;
  }
  // ===== 3 way junctions =====

  // ===== bend =====
  if (B === tile && D === tile && F !== tile && H !== tile) {
    return tileMap.bend_1;
  }
  if (B === tile && F === tile && D !== tile && H !== tile) {
    return tileMap.bend_2;
  }
  if (F === tile && H === tile && D !== tile && B !== tile) {
    return tileMap.bend_3;
  }
  if (H === tile && D === tile && B !== tile && F !== tile) {
    return tileMap.bend_4;
  }
  // ===== bend =====

  // ===== edge =====
  if (D === tile && F !== tile) {
    // ? ? ?
    // ◼︎ ◼︎ ◻︎
    // ? ? ?
    // FIXME: 맵에서 사용하는 특수 케이스
    if (!(tile === "eb" && F === "rbc")) {
      return tileMap.east_edge;
    }
  }
  if (
    (B === tile || H === tile) &&
    (F === NONE || (tile === "eb" && F === 11))
  ) {
    // ? ◼︎ X
    // ? ◼︎ X
    // ? ◼︎ X
    return tileMap.east_edge;
  }
  if (B === tile && H !== tile) {
    // ? ◼︎ ?
    // ? ◼︎ ?
    // ? ◻︎ ?
    return tileMap.south_edge;
  }
  if (
    (D === tile || F === tile) &&
    (H === NONE || (tile === "eb" && H === 11))
  ) {
    // ? ? ?
    // ◼︎ ◼︎ ◼︎
    // X X X
    return tileMap.south_edge;
  }
  if (F === tile && D !== tile) {
    // ? ? ?
    // ◻︎ ◼︎ ◼︎
    // ? ? ?
    return tileMap.west_edge;
  }
  if (
    (B === tile || H === tile) &&
    (D === NONE || (tile === "eb" && D === 11))
  ) {
    // X ◼︎ ?
    // X ◼︎ ?
    // X ◼︎ ?
    return tileMap.west_edge;
  }

  if (H === tile && B !== tile) {
    // ? ◻︎ ?
    // ? ◼︎ ?
    // ? ◼︎ ?
    return tileMap.north_edge;
  }
  if (
    (D === tile || F === tile) &&
    (B === NONE || (tile === "eb" && B === 11))
  ) {
    // X X X
    // ◼︎ ◼︎ ◼︎
    // ? ? ?
    return tileMap.north_edge;
  }
  // ===== edge =====

  // ===== straight =====
  if (B === tile && H === tile) {
    return tileMap.straightJunction_vertical;
  }
  if (D === tile && F === tile) {
    return tileMap.straightJunction_horizontal;
  }
  if (B === tile || H === tile) {
    return tileMap.straightJunction_vertical;
  }
  if (F === tile || D === tile) {
    return tileMap.straightJunction_horizontal;
  }
  // ===== straight =====

  return tileMap.straightJunction_vertical;
};

function ProcessMap(map, tileMap) {
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

      //  [D] [tile]  [F]

      //  [G]   [H]   [I]

      // determine what tiles surround the tile
      let A = 0;
      let B = 0;
      let C = 0;
      let D = 0;
      let tile = 0;
      let F = 0;
      let G = 0;
      let H = 0;
      let I = 0;

      tile = map[i][j];

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

      if (tileId === tile) {
        tiles[i][j] = getTile({ tile, A, B, C, D, F, G, H, I, tileMap });
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

export const createTerrain = (terrainMap) => {
  const processMaps = [
    waterTileMap,
    fullWaterTileMap,
    roadTileMap,
    bankedRiverTileMap,
    riverTileMap,
    grassTileMap,
    beachTileMap,
    edgeBeachTileMap,
    riverBeachTileMap,
  ];

  let map = terrainMap;

  processMaps.forEach((processMap) => {
    map = ProcessMap(map, processMap);
  });

  return map;
};
