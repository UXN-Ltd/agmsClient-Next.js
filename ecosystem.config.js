module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: 'C:/key.pem',
      user : 'ubuntu',
      host : '52.78.20.218',
      ref  : 'origin/main',
      repo : 'git@github.com:UXN-Ltd/agmsClient-Next.js.git',
      path : '/home/ubuntu/agmsClient-Next',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh-options': 'FowardAgent=yes',
    }
  }
};
