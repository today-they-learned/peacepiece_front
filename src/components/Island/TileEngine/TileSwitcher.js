export const Beach = {
  default: 78,
  cornerES: 79,
  cornerNE: 80,
  cornerNW: 81,
  cornerSW: 82,
  E: 83,
  ES: 84,
  N: 85,
  NE: 86,
  NW: 87,
  S: 88,
  SW: 89,
  W: 90,
};

export const RiverBeach = {
  default: 130,
  cornerES: 131,
  cornerNE: 132,
  cornerNW: 133,
  cornerSW: 134,
  E: 135,
  ES: 136,
  N: 137,
  NE: 138,
  NW: 139,
  S: 140,
  SW: 141,
  W: 142,
};

export const TileSwitcher = (tileId, context) => {
  switch (tileId) {
    // water
    case 3:
      return context.waterN;
    case 4:
      return context.waterNE;
    case 5:
      return context.waterE;
    case 6:
      return context.waterES;
    case 7:
      return context.waterS;
    case 8:
      return context.waterSW;
    case 9:
      return context.waterW;
    case 10:
      return context.waterNW;
    case 11:
      return context.water;
    case 12:
      return context.waterCornerES;
    case 13:
      return context.waterCornerNE;
    case 14:
      return context.waterCornerNW;
    case 15:
      return context.waterCornerSW;

    // road
    case 16:
      return context.road;
    case 17:
      return context.roadES;
    case 18:
      return context.roadEW;
    case 19:
      return context.roadHill2E;
    case 20:
      return context.roadHill2N;
    case 21:
      return context.roadHill2S;
    case 22:
      return context.roadHill2W;
    case 23:
      return context.roadHillE;
    case 24:
      return context.roadHillN;
    case 25:
      return context.roadHillS;
    case 26:
      return context.roadHillW;
    case 27:
      return context.roadNE;
    case 28:
      return context.roadNS;
    case 29:
      return context.roadNW;
    case 30:
      return context.roadSW;
    case 31:
      return context.lotE;
    case 32:
      return context.lotES;
    case 33:
      return context.lotN;
    case 34:
      return context.lotNE;
    case 35:
      return context.lotNW;
    case 36:
      return context.lotS;
    case 37:
      return context.lotSW;
    case 38:
      return context.lotW;
    case 39:
      return context.bridgeEW;
    case 40:
      return context.bridgeNS;
    case 41:
      return context.crossroad;
    case 42:
      return context.crossroadESW;
    case 43:
      return context.crossroadNES;
    case 44:
      return context.crossroadNEW;
    case 45:
      return context.crossroadNSW;
    case 46:
      return context.endE;
    case 47:
      return context.endN;
    case 48:
      return context.endS;
    case 49:
      return context.endW;
    case 50:
      return context.exitE;
    case 51:
      return context.exitN;
    case 52:
      return context.exitS;
    case 53:
      return context.exitW;

    // river
    case 54:
      return context.riverBankedES;
    case 55:
      return context.riverBankedEW;
    case 56:
      return context.riverBankedNE;
    case 57:
      return context.riverBankedNS;
    case 58:
      return context.riverBankedNW;
    case 59:
      return context.riverBankedSW;
    case 60:
      return context.riverES;
    case 61:
      return context.riverEW;
    case 62:
      return context.riverNE;
    case 63:
      return context.riverNS;
    case 64:
      return context.riverNW;
    case 65:
      return context.riverSW;

    // grass
    case 66:
      return context.grass;
    case 67:
      return context.grassWhole;
    case 68:
      return context.hillE;
    case 69:
      return context.hillES;
    case 70:
      return context.hillN;
    case 71:
      return context.hillNE;
    case 72:
      return context.hillNW;
    case 73:
      return context.hillS;
    case 74:
      return context.hillSW;
    case 75:
      return context.hillW;

    // dirt
    case 76:
      return context.dirt;
    case 77:
      return context.dirtDouble;

    // beach
    case Beach.default:
      return context.beach;
    case Beach.cornerES:
      return context.beachCornerES;
    case Beach.cornerNE:
      return context.beachCornerNE;
    case Beach.cornerNW:
      return context.beachCornerNW;
    case Beach.cornerSW:
      return context.beachCornerSW;
    case Beach.E:
      return context.beachE;
    case Beach.ES:
      return context.beachES;
    case Beach.N:
      return context.beachN;
    case Beach.NE:
      return context.beachNE;
    case Beach.NW:
      return context.beachNW;
    case Beach.S:
      return context.beachS;
    case Beach.SW:
      return context.beachSW;
    case Beach.W:
      return context.beachW;

    // river beach
    case RiverBeach.S:
      return context.riverBeachS;

    // conifer trees
    case 91:
      return context.coniferAltShort;
    case 92:
      return context.coniferAltTall;
    case 93:
      return context.coniferShort;
    case 94:
      return context.coniferTall;

    // non conifer trees
    case 95:
      return context.treeAltShort;
    case 96:
      return context.treeAltTall;
    case 97:
      return context.treeShort;
    case 98:
      return context.treeTall;

    case 99:
      return context.tank;

    case 100:
      return context.empty;

    case 101:
      return context.rock;

    case 102:
      return context.riverBridge1;
    case 103:
      return context.riverBridge2;
    case 104:
      return context.riverBridge3;
    case 105:
      return context.riverBridge4;

    case 106:
      return context.selectedGrid;

    case 107:
      return context.blobTest;

    default:
      return context.empty;
  }
};
