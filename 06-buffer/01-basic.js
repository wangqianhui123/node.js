#!/usr/bin/node

const log = console.log;

var buf1 = new Buffer(256);
buf1[0] = 0;

log('buf1 length:', buf1.length);
log('\nbuf1:', buf1);
