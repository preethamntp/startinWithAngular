# startinWithAngular
#created a folder called 
ng2-start
    npm init
    index.html -> html:5 -> used bootstrap link to get Flaty bootstrap code in bootswatch
    (from here https://www.bootstrapcdn.com/bootswatch/) used the Flaty link in <link href ../> 
    npm installed lite-server, to execute. (npm install lite-server --save-dev),
    globally installed typings,
    created tsconfig.js and typing.js using touch tsconfig.js and typing.js
     (npm install --save-dev typescript typings)
        (touch tsconfig.json typings.json)
            defined compailerOptions in tsconfig.json
             typings install dt~core-js dt~jasmine dt~node --save --global
    installed concurrently by (npm install concurrently --save-dev) to compile .ts to .js
        defined -> "start": "concurrently \"npm run tsc:w\" \"npm run lite\" ",
         in scripts in pacage.json 
    created app folder
        in that ceated a file called magic.ts



