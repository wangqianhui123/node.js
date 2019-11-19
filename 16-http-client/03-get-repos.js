#!/usr/bin/node

const https = require('https'),
            log   = console.log,
                  url   = require('url');

var addr    = 'https://api.github.com/search/repositories?q=user:' + (process.argv[2] || 'wangding'),
    options = url.parse(addr);

    options.headers = {
        'User-Agent': '02-get-repos.js'

    };

https.get(options, function(res) {
    var result = '';

    res.on('data', function(data) {
          result += data.toString('utf8');
            
    });
      
    res.on('end', function() {
          var reps = JSON.parse(result);

              log('Total:', reps.items.length);
                  log('==========================');
                  for(var i=0; i<reps.items.length; i++) {
                          log('%d\t%s', (i + 1), reps.items[i].name);
                              
                  }
                    
    });

});
