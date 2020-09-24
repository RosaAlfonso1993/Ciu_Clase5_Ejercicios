/*
function getProcessedData(url) {
  return downloadData(url)
    .catch(e => {
      return downloadFallbackData(url)  
    })
    .then(v => {
      return processDataInWorker(v);
    });
}
*/

async function getProcessedData(url){
    try{
        const down = await downloadData(url)
        .catch(await downloadFallbackData(url));
        const proccess = await processDataInWorker(down)

        return proccess;
    }catch(e){
        console.error(e.message);
    }
}