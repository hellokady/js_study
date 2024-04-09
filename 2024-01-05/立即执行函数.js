const isServer = (() => {
  return !globalThis.window
})()

console.log(isServer);