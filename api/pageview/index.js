module.exports = async function (context, req) {
  context.log("pageview");

  context.res = {
    status: 204
  };
};
