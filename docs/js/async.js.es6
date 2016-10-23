import modalTpl from '../template/portfolioModal-tpl.hbs';

class  MyAsync{
  constructor() {
   this.name = "dummy..";
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
      if (data['additional-info']) {
        let dataAddition = await this.simpleFetch("../../data/addInfo.json");
        data["additional-desc"] = dataAddition.description;
      }

      let sHTML = modalTpl( data );
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



