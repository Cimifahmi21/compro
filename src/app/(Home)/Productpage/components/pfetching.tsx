import Temptfetch from "./temptfetch";

export default async function Pfetching() {
  const productfetching = await fetch(
    "https://cdn.contentful.com/spaces/weumlpbo3lrc/environments/master/entries?access_token=CwoFnhjtMqDeTOsQPriRrhBaz7T1zjHBLt6dMKCmCms",{
      cache: "no-cache"
    }
  );
  const productjson = await productfetching.json();
  // console.log(productjson.items[0].fields.judul)
  // console.log(productjson.items[0].fields.deskripsi)
  // console.log(productjson.includes.Asset[0].fields.file.url)
  return (
    <div className="w-full pt-20">
      <div className="flex flex-wrap max-w-7xl mx-auto gap-6">
        <Temptfetch
          judul={productjson.items[0].fields.judul}
          deskripsi={productjson.items[0].fields.deskripsi}
          image={productjson.includes.Asset[0].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[1].fields.judul}
          deskripsi={productjson.items[1].fields.deskripsi}
          image={productjson.includes.Asset[6].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[2].fields.judul}
          deskripsi={productjson.items[2].fields.deskripsi}
          image={productjson.includes.Asset[5].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[3].fields.judul}
          deskripsi={productjson.items[3].fields.deskripsi}
          image={productjson.includes.Asset[11].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[4].fields.judul}
          deskripsi={productjson.items[4].fields.deskripsi}
          image={productjson.includes.Asset[3].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[5].fields.judul}
          deskripsi={productjson.items[5].fields.deskripsi}
          image={productjson.includes.Asset[9].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[6].fields.judul}
          deskripsi={productjson.items[6].fields.deskripsi}
          image={productjson.includes.Asset[7].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[7].fields.judul}
          deskripsi={productjson.items[7].fields.deskripsi}
          image={productjson.includes.Asset[8].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[8].fields.judul}
          deskripsi={productjson.items[8].fields.deskripsi}
          image={productjson.includes.Asset[10].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[9].fields.judul}
          deskripsi={productjson.items[9].fields.deskripsi}
          image={productjson.includes.Asset[1].fields.file.url}
        />
        <Temptfetch
          judul={productjson.items[10].fields.judul}
          deskripsi={productjson.items[10].fields.deskripsi}
          image={productjson.includes.Asset[2].fields.file.url}
        />
      </div>
    </div>
  );
}
