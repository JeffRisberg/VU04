/* eslint-disable */

import * as axios from 'axios';

function upload(formData) {
  const url = `api/v1/tenants/10000/uploadToS3`;

  return axios.post(url, formData)
  // get data
    .then(x => x.data)
    // add url field
    .then(x => {

      return x.map(img => {
        console.log(img)
        return Object.assign({},
          img, { url: img.url })
      })
    })
}

export { upload }
