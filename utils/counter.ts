/**
 * Counter animation helper
 * @param display - ref yang mau diupdate
 * @param target - angka tujuan
 * @param duration - durasi animasi (ms), default 2000
 */
export function useCounter(display: Ref<number>, target: number, duration = 2000) {
  const startTime = performance.now()

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    display.value = Math.floor(progress * target)

    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }

  requestAnimationFrame(animate)
}
