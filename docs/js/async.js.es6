import listTpl from '../template/example-tpl.hbs';

class  MyAsync{
  constructor() {
   this.name = "dddd";
  }

   simpleFetch(url) {
    return new Promise(function(resolve, reject){
      var req = new XMLHttpRequest();
      req.addEventListener("load", function() {
        //let htData = JSON.parse(req.responseText);
        let sData = req.responseText;
        //if(typeof htData !== "object") reject("wrong data");
        if(typeof sData !== "string") reject("wrong data");
        else resolve(sData);
      });
      req.open("GET", url);
      req.send();
    });
    
  }

  async execAsyncAwait () {
    try {

      document.body.innerHTML = listTpl( { greeting: 'Hello World' } );  

      var data = await this.simpleFetch("/docs/template/portfolioModal.tpl");
      console.log('async result -> \n',   data);
      //var data2 = await simpleFetch(url2);
    } catch (err) {
      console.log("error during myGenerator : ", err);
    }
  }

  execXHR() {
    var req = new XMLHttpRequest();
    req.addEventListener("load", (evt) => {
      var result = evt.target.responseText;
    });

    req.open("GET", "/docs/template/portfolioModal.tpl");
    req.send();
  }

}

export default MyAsync;