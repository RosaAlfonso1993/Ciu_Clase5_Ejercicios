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
        const response = await downloadData(url)
        .then(v => {
            return processDataInWorker(v);
        });

        return response;
    }catch(e){
        return downloadFallbackData(url);
    }
}