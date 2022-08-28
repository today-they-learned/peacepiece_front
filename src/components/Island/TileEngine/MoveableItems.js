const MovableTank = {
  tileId: 99,
  speed: 0.4,
  position: undefined,
  stage: 0,
  path: [
    { x: 0, y: 0 },
    // { x: 0, y: 2 },
    // { x: 2, y: 2 },
    // { x: 2, y: 7 }
  ],
};

// var MovableTank2 = {
//   tileId: 99,
//   speed: 0.2,
//   position: undefined,
//   stage: 0,
//   path: [
//     { x: 2, y: 0 },
//     { x: 2, y: 1 },
//     { x: 4, y: 1 },
//     { x: 4, y: 7 }
//   ]
// };

const BlobTest = {
  tileId: 107,
  speed: 0.2,
  position: undefined,
  stage: 0,
  path: [
    { x: 2, y: 0 },
    // { x: 2, y: 1 },
    // { x: 4, y: 1 },
    // { x: 4, y: 7 }
  ],
};

export const MovableItems = [MovableTank, BlobTest];
