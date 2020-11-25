import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Cc6UuT1dUBcJuzk1Is25bOiRgd0jarXmvcfKgA0JegA',
  },
});
