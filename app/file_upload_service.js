/* eslint-disable */

import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function upload(formData) {
  // const url = `api/v1/tenants/10000/uploadToS3`;
  const url = `${BASE_URL}/photos/upload`;
  return axios.post(url, formData)
  // get data
    .then(x => x.data)
    // add url field
    .then(x => {

      return x.map(img => Object.assign({},
        img, { url: `${BASE_URL}/images/${img.id}` }))
    })
}

export { upload, BASE_URL }
