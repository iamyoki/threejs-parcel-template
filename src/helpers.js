/**
 * @param {(time: number)=>boolean} callback¡
 */
export function tick(callback, time = performance.now()) {
  const next = callback(time);
  if (next !== false) {
    requestAnimationFrame(time => {
      tick(callback, time);
    });
  }
}
