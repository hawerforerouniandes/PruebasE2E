const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, steps, options } = config;

async function executeTest(){
    if(steps.length === 0){
      return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");
    var nroStep = 9;
    for(var i = 1; i<= nroStep; i++){
        
        if (!fs.existsSync(`./results/${datetime}`)){
            fs.mkdirSync(`./results/${datetime}`, { recursive: true });
        }
        //Launch the current browser context
        /*const browser = await playwright[b].launch({headless: true, viewport: {width:viewportWidth, height:viewportHeight}});
        const context = await browser.newContext();
        const page = await context.newPage(); 
        await page.goto(config.url);
        await page.screenshot({ path: `./results/${datetime}/before-${b}.png` });
        await page.click('#generate');
        await page.screenshot({ path: `./results/${datetime}/after-${b}.png` });
        await browser.close();*/
        
        const data = await compareImages(
            fs.readFileSync(`../Ghost34/PruebasKraken/kraken/regression/post-1/${i}.png`),
            fs.readFileSync(`../Ghost44/PruebasKraken/kraken/regression/post-1/${i}.png`),
            options
        );
        resultInfo[i] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare-${i}.png`, data.getBuffer());

    }
    
    fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
    fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

    console.log('------------------------------------------------------------------------------------')
    console.log("Execution finished. Check the report under the results folder")
    return resultInfo;  
  }
(async ()=>console.log(await executeTest()))();


function step(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Step: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for Ghost
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.steps.map(b=>step(b, resInfo[b]))}
            </div>
        </body>
    </html>`
}