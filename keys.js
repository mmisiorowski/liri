js
console.log('this is loaded');
//gtfo my keys//
exports.spotify = {
  id: '51efcc72f44a3ca319066e83cbfff0',
  secret: '8ef65bfefd2845f4a0662703d6f39ade'
};

exports.bands = {
    id: process.env.BANDS_API_KEY,
    secret: '8a19fb6ca8154bd990bb85c7638b5b11'
};

exports.OMDB = {
    id: '&y=&plot=short&apikey=trilogy',
    secret: process.env.OMDB_SECRET
};