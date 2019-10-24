export const connectAction = (host, port, eci, protocol) => {
  return {
    type: "PICO_CONNECT",
    payload: {
      host,
      port,
      eci,
      protocol
    }
  }
}
