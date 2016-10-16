import DataSync from './dataSync.js.es6';
import ScrollEffect from './scrollEffect.js.es6';
import MyModal from './modal.js.es6';


(function(arr) {

    "use strict"; 

    //initiate
    let dataSync = new DataSync();
    let scrollEffect = new ScrollEffect();
    let myModal = new MyModal();

    //scroll pure javascript
    scrollEffect.runEffect();

    //two way binding
    window.msgData = {}
    let elMessage = document.getElementById("message");
    dataSync.bindModelInput(msgData, 'content', elMessage, function(value){
      document.getElementById("text-count").textContent = value.length;
    });


    //ready_3. modal open.
    myModal.execModal();

    //registe main events
    elMessage.addEventListener("input", (evt)=>{
      msgData.content = evt.target.value;
    });




})();
















