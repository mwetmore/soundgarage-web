var axios   = require('axios');

module.exports = async function() {
  let url = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCU3Pw2ONAZS0yieakt23KHQ`;
  
  return axios.get(url)
      .then(function (response) {
        return response.data.items;
      })
      .catch(function(error) {
          console.log(error);
      });
}