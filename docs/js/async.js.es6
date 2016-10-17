import modalTpl from '../template/portfolioModal-tpl.hbs';

class  MyAsync{
  constructor() {
   this.name = "dddd";
  }

   simpleFetch(url) {
    return new Promise(function(resolve, reject){
      var req = new XMLHttpRequest();
      req.addEventListener("load", function() {
        let sData = JSON.parse(req.responseText);
        if(typeof sData !== "object") reject("wrong data");
        else resolve(sData);
      });
      req.open("GET", url);
      req.send();
    });
    
  }

  async execAsyncAwait (ID) {
    try {
      let data = await this.simpleFetch("../../data/" +  ID + ".json");
      let sHTML = modalTpl( data );
      //var data2 = await simpleFetch(url2);
      return sHTML;
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