import axios from 'axios';

const KEY = 'AIzaSyCr4QmeEnncORVcUWio18DBXY3C1AAe_LA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
