//promiseは、非同期処理をより扱いやすくするためのオブジェクト。
//非同期処理の完了（成功または失敗）を表現し、その結果をハンドルする方法を提供。
//さらにasync/await構文を使うと、promiseをさらに簡潔に扱えます。

//promise
const fetchDate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Date fetched");
    }, 1000);
  });
};

fetchDate().then(date => {
  console.log(date);
}).catch(error => {
    console.log(eroor);
  });

//async/await
const fetchDate = () => {
  retrn new romise(( resolve, reject) => {
    setTimeout(() => {
      resolve("Date fetched");
    }, 1000);
  });
};

const getDate = async () => {
  try {
    const date = awai fetchDate();
    console.log(date);
  } catch (error) {
    console.log(eroor);
  }
};

getDate();
