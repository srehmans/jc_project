# jc_project
JC Project

OS
macOS 10.9 and above (64-bit only)

Setup
cd /your/project/path
npm install cypress --save-dev
./cypress/bin/cypress open - To start server
or
Add to your npm script

{
  "scripts": {
    "cypress:open": "cypress open"
  }
}
npm run cypress:open 


Package.json -snapshot

{
  "name": "jumpcut",
  "version": "1.0.0",
  "dependencies": {},
  "devDependencies": {
    "cypress": "^3.3.0"
  },

  "scripts": {
    "cypress:open": "cypress open"
  }
}


Done - Good to go 
