export function ProcessPath(coordinates, mapWidth, tileWidth) {
  // i = 0 is starting point
  const realCoordinates = [];
  for (let i = 0; i < coordinates.length; i += 1) {
    // to move to
    const { x, y } = coordinates[i];
    const top = Math.ceil((mapWidth * tileWidth) / 2 / 100) * 100;
    const realCoord = { x: top + 50 * x - 50 * y, y: 25 * x + 25 * y };
    realCoordinates.push(realCoord);
  }
  return realCoordinates;
}
