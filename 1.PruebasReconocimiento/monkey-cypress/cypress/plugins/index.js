/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const LOG_FILENAME = "./results/monkey-execution.html"
var fs = require('fs');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  on('task', {
    logCommand({ funtype, info}){
      let html = `<li><span><h2> ${funtype} event</h2>`
      if(!!info) html+=`<p><strong>Details: </strong> ${info}</p>`
      html += "</span></li>"
      fs.appendFile(LOG_FILENAME, html, (err) => {
          if (err) throw err
          console.log(`Logged #${funtype}`)
      })
      return null
    },
    logStart({type, url, seed}){
      //Date might be inaccurate
      var currentdate = new Date(Date.now());
      var date = currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear();
      var time = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
      fs.appendFile(LOG_FILENAME, `<html><body><h1>Execution of ${type} in <a href = ${url}>${url}</a></h1><h2>Date of execution: ${date} at ${time}</h2><h2>Seed:${seed}</h2><ol type = '1'>`, (err) => {
        if (err) throw err
        console.log(`Log started`)
      })
      return null
    },
    logEnd(){
      fs.appendFile(LOG_FILENAME, "</ol></body></html>", (err) => {
        if (err) throw err
        console.log(`Finished logging`)
      })
      return null
    },
    logPctNo100(){
      fs.appendFile(LOG_FILENAME, `<h1>Error:</h1><p>El porcentaje de eventos configurados no suma 100, sino ${pcg}</p>`, (err) => {
        if (err) throw err
        console.log(`Logged error`)
      })
      return null
    },
    genericLog({message}){
      console.log(message)
      return null
    },
    genericReport({html}){
      fs.appendFile(LOG_FILENAME, html, (err) => {
        if (err) throw err
        console.log(`Logged error`)
      })
      return null
    }
  });

  require('cypress-log-to-output').install(on, (type, event) => {
    // return true or false from this plugin to control if the event is logged
    // `type` is either `console` or `browser`
    // if `type` is `browser`, `event` is an object of the type `LogEntry`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Log#type-LogEntry
    // if `type` is `console`, `event` is an object of the type passed to `Runtime.consoleAPICalled`:
    //  https://chromedevtools.github.io/devtools-protocol/tot/Runtime#event-consoleAPICalled
    if(type === 'browser'){
      fs.appendFile(LOG_FILENAME, `<p><strong>Browser event (source: ${event.source}): </strong>${event.text}</p>`, (err) => {
        if (err) throw err
        console.log(`Finished logging`)
      })
    }
    else if (type === 'console'){
      fs.appendFile(LOG_FILENAME, `<p><strong>Console ${event.type} event. Trace: </strong>${(!!event.stackTrace)?event.stackTrace.description:"none"}</p>`, (err) => {
        if (err) throw err
        console.log(`Finished logging`)
      })
    }
    return true;
  });
}

