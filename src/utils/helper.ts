export const parseUrlWithQuery = (url: string, filter: Record<string, any>) => {
  let querys = "?";
  Object.keys(filter).map((key) => {
    querys = querys + `${key}=${filter[key]}&`;
  });
  return url + querys;
};
