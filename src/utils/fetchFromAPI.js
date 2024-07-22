import axios from "axios";

// const base_url = 'https://youtube-v31.p.rapidapi.com/search';
const base_url = 'https://youtube-v31.p.rapidapi.com';

const options = {
    // url: base_url ,
    params: {
        // relatedToVideoId: '7ghhRHRP6t4',
        // part: 'id,snippet',
        // type: 'video',
        maxResults: '50'
    },
    headers: {
        // 'x-rapidapi-key': '717b022f15msha86a982fee90d86p1d775fjsn11c36d255d3e' ,
        'x-rapidapi-key':  import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.request(`${base_url}/${url}`,options);

    return data;
}