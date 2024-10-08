//GENERICS = <>

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

async function callUrl<ResponseData>(url: string) {
  const res = await fetch(url);
  const data: ResponseData = await res.json();
  return {
    status: res.status,
    data,
  };
}

callUrl<Photo[]>(
  "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3"
).then((res) => {
  res.data.map((item) => console.log(item.id));
});
