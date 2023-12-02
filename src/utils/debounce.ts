function debounce (func: (...args: string[]) => void, delay: number): () => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function (...args: string[]) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => { func.apply(null, args) }, delay)
  }
}

export default debounce
