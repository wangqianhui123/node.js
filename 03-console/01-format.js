#!/usr/bin/node

const user={
  name:'王顶',
  age:41,
  qq:'408542507'
};

const log=console.log;

log('name:%s',user.name);
log('age:%d',user.age);
log('JSON':%j,user);

log('qq:%s',user.qq);
log('qq:',user.qq);
log('qq:'+user.qq);
log('qq:${user.qq}');
console.error('Error!something wrong!');
