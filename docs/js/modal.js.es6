class  MyModal {
  constructor(dataSyncDepdency, myAsyncDependency) {
    this.myAsync = myAsyncDependency;
  }
  async execModal() {
    var el = document.querySelector("#portfolio .row:nth-of-type(2)");
    el.addEventListener("click", this.clickListener.bind(this));
  }

  async clickListener(evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== "I" && evt.target.querySelector(".fa-plus") === null ) return;

    let elPortfolioLink = evt.target.closest(".portfolio-link");
    if(!elPortfolioLink) return;
    var ID = elPortfolioLink.getAttribute("href");

    let sHTML = await this.myAsync.execAsyncAwait(ID.substring(1));
    document.querySelector("footer").insertAdjacentHTML('afterend', sHTML);

    var elModal = document.querySelector(ID);
    elModal.classList.add("in");
    elModal.style.display = "block";

    var str = "<div class='modal-backdrop fade in'></div>";
    document.body.insertAdjacentHTML("beforeend", str);
    document.body.classList.add("modal-open");

    elModal.querySelector(".close-modal").addEventListener("click", this.disappearModal.bind(this, elModal));
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