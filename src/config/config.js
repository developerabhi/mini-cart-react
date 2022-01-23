const config = {
  apiGateway: {
    apiUrl: 'http://dnc0cmt2n557n.cloudfront.net'
  }
};

export default {
  ...config,
  axiosTimeout: 100000
};
