function getInfoResponse(environment) {
  return {
    status: 'UP',
    port: environment.PORT,
    name: environment.NAME
  };
}

exports.getInfoResponse = getInfoResponse;