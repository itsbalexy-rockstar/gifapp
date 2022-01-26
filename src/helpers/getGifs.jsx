export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=m27Ynicr7nmOC3Gs4QpQzvkDtzQA7xHH`;
  const answer = await fetch(url);
  const { data } = await answer.json();
  const gifs = data.map((obj) => {
    return {
      id: obj.id,
      title: obj.title,
      url: obj.images.downsized_medium.url,
    };
  });
  return gifs
};
