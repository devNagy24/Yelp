import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/{id}',
    headers: {
        Authorization: 'Bearer rxSJagZFALd0G3eAw-k97s9yQZHdqr8720B33A0-CCOSkKuO6a2Eil9xdeS3Gb3s4qt8jNuda5fTv7DKk6qSYCe99OGg8QHGx07NL8rdJxmmYH7O0Ck95ImMJ1vHX3Yx'
    }
});