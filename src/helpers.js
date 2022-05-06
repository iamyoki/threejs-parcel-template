/**
 * @param {(time: number)=>boolean} callback¡
 */
export function tick(callback, time = 0) {
  const next = callback(time);
  if (next !== false) {
    requestAnimationFrame(time => {
      tick(callback, time);
    });
  }
}
