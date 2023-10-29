'use strict';

function a() {
  console.log(this);
}

a();

// 严格模式下：上述方法的this为undefined；非严格下为global
