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
} from "./tileMaps";

const getTile = ({ tile, A, B, C, D, F, G, H, I, tileMap }) => {
  const NONE = 0;
  //  [A]   [B]   [C]

  //  [D] [tile]  [F]

  //  [G]   [H]   [I]

  // ===== outJunction_bend =====
  if (
    A !== tile &&
    B === tile &&
    C === tile &&
    D === tile &&
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
    return tileMap.east_edge;
  }
  if ((B === tile || H === tile) && F === NONE) {
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
  if ((D === tile || F === tile) && H === NONE) {
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
  if ((B === tile || H === tile) && D === NONE) {
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
  if ((D === tile || F === tile) && B === NONE) {
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
  // Process Full Water
  const proecessedMap6 = ProcessMap(proecessedMap5, fullWaterTileMap);
  // Process Beach
  const proecessedMap7 = ProcessMap(proecessedMap6, beachTileMap);
  // Process Edge Beach
  const proecessedMap8 = ProcessMap(proecessedMap7, edgeBeachTileMap);

  return proecessedMap8;
};
