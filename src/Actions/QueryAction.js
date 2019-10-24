import axios from 'axios';

export const queryAction = (protocol, host, port, eci, rid, func) => {
  let url = `${protocol}://${host}:${port}/sky/cloud/${eci}/${rid}/${func}`;

  return (dispatch, getState) => {
      axios.get(url).then((resp) => {
        dispatch({
            type: "QUERY",
            payload: {
              response: resp.data
            }
          });
      });
    };
}
