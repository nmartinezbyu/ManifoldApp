import axios from 'axios';

export const connectAction = (host, port, eci, protocol, rid, callback) => {
  let url = `${protocol}://${host}:${port}/sky/cloud/${eci}/${rid}/__testing`;

  return (dispatch, getState) => {
      axios.get(url).then((resp) => {
        callback(true, "");
        dispatch({
            type: "PICO_CONNECT",
            payload: {
              host,
              port,
              eci,
              protocol,
              rid,
              info: resp.data
            }
          });
      }).catch((resp) => {
        callback(false, `Unable to connect to engine at ${protocol}://${host}:${port}. Check your internet connection and make sure the engine is running`);
        dispatch({
          type: "PICO_CONNECT",
          payload: { }
        })
      });
    };
}
