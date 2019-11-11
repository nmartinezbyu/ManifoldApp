import axios from 'axios';

export const queryAction = (host, eci, rid, func, args) => {
  let url = `${host}/sky/cloud/${eci}/${rid}/${func}?${toQueryString(args)}`;

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

const toQueryString = (obj) => {
    var parts = [];
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
        }
    }
    return parts.join("&");
}
