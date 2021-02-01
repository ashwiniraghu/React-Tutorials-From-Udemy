import axios from 'axios';
const KEY='AIzaSyAzasQy3Rl0Tmlhuoro_BXAZp3Z46kOfN4';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
params:{
    part:'snippet',
    type:'video',
    maxresult:5,
    key:KEY
}
});

