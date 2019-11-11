import axios from 'axios';

export const eventAction = (host, eci, domain, type, attrs) => {
  let url = `${host}/sky/event/${eci}/pico_app/${domain}/${type}`;

  return (dispatch, getState) => {
      axios.post(url, attrs).then((resp) => {
        dispatch({
            type: "RAISE_EVENT",
            payload: {
              response: resp.data
            }
          });
      });
    };
}
