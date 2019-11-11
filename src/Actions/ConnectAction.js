import axios from 'axios';

export const connectAction = (host, port, eci, protocol, rid, callback) => {
  let url = `${protocol}://${host}:${port}/sky/cloud/${eci}/${rid}/__testing`;

  return (dispatch, getState) => {
      axios.get(url).then((resp) => {
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
          callback(true, "");
      }).catch((resp) => {
        dispatch({
          type: "PICO_CONNECT",
          payload: { }
        })
        callback(false, `Unable to connect to engine at ${protocol}://${host}:${port}. Check your internet connection and make sure the engine is running`);
      });
    };
}
