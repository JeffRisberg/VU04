/* eslint-disable */

import * as axios from 'axios';

const BASE_URL = 'http://localhost:3001';

function upload(formData) {
  const url = `api/v1/tenants/10000/uploadToS3`;
  return axios.post(url, formData)
  // get data
    .then(x => x.data)
    // add url field
    .then(x => {

      console.log(x) // this is a list
      return x.map(img => Object.assign({},
        img, { url: `${BASE_URL}/document/${img.id}` }))
    })
}

export { upload, BASE_URL }
