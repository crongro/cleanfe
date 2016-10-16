/*
jquery Free 에 어울리게 몇 가지 delegation을 좀더 쉽게 해주는 메서드들 (Element.closest(), Matches)
polyfll 이 있다.
https://plainjs.com/javascript/traversing/get-closest-element-by-selector-39/

*/

import MyAsync from './async.js.es6';

class  MyModal {
  constructor(options) {
    this.myAsync = new MyAsync();
  }
  execModal() {
    var el = document.querySelector("#portfolio .row:nth-of-type(2)");

    el.addEventListener("click", (evt) => {
      evt.preventDefault();

      if(evt.target.nodeName !== "I" && evt.target.querySelector(".fa-plus") === null ) return;

      var ID = evt.target.closest(".portfolio-link").getAttribute("href");

      this.myAsync.execAsyncAwait();

      var elModal = document.querySelector(ID);
      elModal.classList.add("in");
      elModal.style.display = "block";

      var str = "<div class='modal-backdrop fade in'></div>";
      document.body.insertAdjacentHTML("beforeend", str);
      document.body.classList.add("modal-open");

      elModal.querySelector(".close-modal").addEventListener("click", this.disappearModal.bind(this, elModal));
    });

  }

    disappearModal(elModal, evt) {
      document.body.removeChild(document.body.lastElementChild);
      document.body.classList.remove("modal-open");
      elModal.style.display = "";
      elModal.classList.remove("in");
      elModal.querySelector(".close-modal").removeEventListener("click", this.disappearModal.bind(this,elModal));
    }
  }

export default MyModal;