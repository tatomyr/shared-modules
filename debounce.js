/**
 * Debounce
 *
 * @param {callback} callback function to be executed
 * @param {number} wait interval between calls
 *         positive for triggering the callback on the leading edge
 *         negative for triggering the callback at the trailing edge
 */

export const debounce = (callback, wait) => {
  let timeout
  return () => {
    if (!timeout) {
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        timeout = null
        if (Math.sign(wait) === -1) callback()
      }, Math.abs(wait))
      if (Math.sign(wait) === 1) callback()
    }
  }
}
