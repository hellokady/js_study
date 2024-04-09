namespace Frontend {
  /**
   * 1、依次发出十个异步请求，每个请求使用前一个请求返回的数据作为参数传递给当前请求，最终返回最后一次请求的结果
   */
  function requestServer(data: unknown) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve((data as number) + 1);
      }, 1000);
    });
  }
  function main(initData: unknown) {
    let finalResult = Promise.resolve(initData);
    // your code here
    for (let i = 0; i < 10; i++) {
      finalResult = finalResult.then(data => requestServer(data));
    }
    // 异步请求调用 requestServer(params)，此函数返回一个 Promise。
    return finalResult;
  }

  main(0).then(data => {
    console.log(data);
  });

  /**
   * 2、实现一个 compare 函数：接受两个符合 SemVer 规范的版本号字符串，从而能够让以下的版本号从小到大排列
   */
  const versions = ['4.1.3', '4.2', '10.0.2', '2.10.0', '2.2.10'];

  versions.sort(compare);

  console.log(versions);

  function* walk(v: string) {
    let result = '';
    const chars = ['.', '-'];
    for (let i = 0; i < v.length; i++) {
      if (chars.includes(v[i])) {
        yield result;
        result = '';
      } else {
        result += v[i];
      }
    }

    if (result) {
      yield result;
    }
  }

  function compare(v1: string, v2: string) {
    const t1 = walk(v1);
    const t2 = walk(v2);

    let r1 = t1.next();
    let r2 = t2.next();

    while (!r1.done && !r2.done) {
      if (r1.value === r2.value) {
        r1 = t1.next();
        r2 = t2.next();
        continue;
      }

      return +r1.value - +r2.value;
    }

    while (!r1.done) {
      if (+r1.value > 0) {
        return 1;
      } else {
        r1 = t1.next();
      }
    }

    while (!r2.done) {
      if (+r2.value > 0) {
        return -1;
      } else {
        r2 = t2.next();
      }
    }

    return 0;
  }

  /**
   * 3、请用 TypeScript 描述一只狗的 interface，包含属性及行为
   */
  interface Dog {
    nickName: string;
    age: number;
    color: 'black' | 'white' | 'other';
    bark(): void;
  }
}
