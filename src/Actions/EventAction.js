import axios from 'axios';

export const eventAction = (protocol, host, port, eci, domain, type) => {
  let url = `${protocol}://${host}:${port}/sky/event/${eci}/pico_app/${domain}/${type}`;

  return (dispatch, getState) => {
      axios.post(url).then((resp) => {
        dispatch({
            type: "RAISE_EVENT",
            payload: {
              response: resp.data
            }
          });
      });
    };
}
