var plan = require('flightplan');

var appName = 'moihelsinki';
var username = 'deploy';
var startFile = 'bin/www';

var tmpDir = appName+'-' + new Date().getTime();

/* configuration
plan.target('staging', [
  {
    host: '104.131.93.214',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);
*/

plan.target('production', [
  {
    host: '178.62.220.82',
    username: username,
    privateKey: '/Users/sashaissasha/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
//  var filesToCopy = local.exec('git ls-files', {silent: true});
  var filesToCopy = local.exec('find . -type f', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
  remote.exec('forever start -e $HOME/log/moihelsinki.err.log -o $HOME/log/moihelsinki.log ~/'+appName+'/'+startFile);


  //remote.exec('forever -c  /usr/local/bin/nodemon --exitcrash ' +'~/'+appName+'/'+startFile);  
  //remote.exec('forever start -c  /usr/local/bin/nodemon '       +'~/'+appName+'/'+startFile);
  //remote.exec ('forever start -c ../../usr/local/bin/node moihelsinki/bin/www');  
});