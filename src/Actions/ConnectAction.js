import axios from 'axios';

export const connectAction = (host, eci, rid, callback) => {
  let url = `${host}/sky/cloud/${eci}/${rid}/__testing`;

  return (dispatch, getState) => {
      axios.get(url).then((resp) => {
        dispatch({
            type: "PICO_CONNECT",
            payload: {
              host,
              eci,
              rid,
              info: resp.data
            }
          });
          callback(true, "");
      }).catch((resp) => {
        dispatch({
          type: "PICO_CONNECT",
          payload: { }
        });
        callback(false, `Unable to connect to engine at ${host}. Check your internet connection and make sure the engine is running`);
      });
    };
}
