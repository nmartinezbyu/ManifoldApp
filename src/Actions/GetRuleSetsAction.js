import axios from 'axios';

export const GetRuleSetsAction = (host, eci, rid, func, args) => {
  let url = `${host}/sky/cloud/${eci}/io.picolabs.wrangler/installedRulesets`;

  return (dispatch, getState) => {
      axios.get(url).then((resp) => {
        dispatch({
            type: "QUERY",
            payload: {
                [func]: resp.data
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
