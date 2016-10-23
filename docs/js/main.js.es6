import DIFactory from './DIFactory.js.es6';
import {DataSync} from './dataSync.js.es6';
import MyModal from './modal.js.es6';
import MyAsync from './async.js.es6';


(function(arr) {

    "use strict"; 

  /**************  scroll effect **********************/
    let mainNav = document.querySelector("#mainNav");
    let DOWNMODE = true;

    const MY_STATIC  = {
      SCROLL_TOP_CHANGE : 100
    }

    //Event binding
    window.addEventListener("scroll", (evt) => {
        const currentScrollY = window.pageYOffset;
        if(currentScrollY > MY_STATIC.SCROLL_TOP_CHANGE) {
            if(DOWNMODE) return;
            mainNav.classList.add("affix");
            DOWNMODE = true;
        } else {
            mainNav.classList.remove("affix");
            DOWNMODE = false;;
        }
    });


    /**************  Two-way Data Binding **********************/
    let elMessage = document.getElementById("message");
    let elWordCount = document.querySelector("#text-count > .word-count");
    window.msgData = {}

     //1. Proxy : Data binding
     window.msgProxy = new Proxy(msgData, {
       get: function(target, name, receiver) {
            console.log("\nProxy getter :", name);
            return target[name];
       }, 
       set: function(obj, prop, value) {
            console.log("\nProxy setter : ", value);
            obj[prop] = value;
            elMessage.value = value;
            elWordCount.textContent = value.length;
            return true;
       }
    });
    //Monitor View change
    elMessage.addEventListener("input", (evt)=>{
        msgProxy.content = evt.target.value;
    });

    // 2. defineProperty
    /*
    let dataSync = new DataSync();
    dataSync.bindModel(msgData, 'content', elMessage, function(newValue){
        elWordCount.textContent = newValue.length;
    });
    //Monitor View change
    elMessage.addEventListener("input", (evt)=>{
        msgData.content = msgData.content;
    });
    */
    


    /**************  Dependency Injection **********************/
    /* non-DI */
    let myModal = new MyModal(new DataSync(), new MyAsync());
    myModal.execModal();



    /**************  Dynamic DI **********************/
    /*
    let myDI = new DIFactory();
    myDI.register('myasync', MyAsync); 
    myDI.register('mydatasync', DataSync); 

    let myModal = myDI.getInstance(MyModal, ["mydatasync", "myasync"]);
    */

    /* static DI
    let dependencyContainer = {
        myModal : {
            dataSyncDepdency : dataSync, 
            myAsyncDependency : new MyAsync()
        }
    }
    let myModal = new MyModal(dependencyContainer.myModal);
    */
})();

//others service code
(function(){
    let mainNav = document.querySelector("#mainNav");
    document.addEventListener("DOMContentLoaded", (evt) => {
    let currentScrollY = window.pageYOffset;
    if(currentScrollY > 100) {
        mainNav.classList.add("affix");
    } else {
        mainNav.classList.remove("affix");
    }
});
})();







