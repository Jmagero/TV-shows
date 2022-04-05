import axios from 'axios';

export async function getData () {
  const resp = await axios.get('https://api.tvmaze.com/people');
  const data = await resp.data.slice(0,6);
  //console.log(data);
  return data;
}