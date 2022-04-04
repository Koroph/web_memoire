/*
 *  @company DarcFlow design [https://darcflow.com]
 *  @author    Koroph <yjk@outlook.fr> {(+225)0778329592}
 *  @website http://koroph.site
 *  @link      https://github.com/Koroph
 *  @license   Apache 2.0
 *  @Copyright (c) 2021.
 *
 */
export default class AlertDialog {

    constructor(transId = "alert-dialog-trans") {
        const TRANS = document.getElementById(transId);
        // if (TRANS === null) console.warn("require include alertDialog trans div in current view.")
        //else {
        /*   this.yes = TRANS.dataset.yes;
           this.no = TRANS.dataset.no;
           this.massage = TRANS.dataset.message;
           this.header = TRANS.dataset.header;*/
        //}
        this.yesOnly = false;
        this.type = "p";
    }

    set setMessage(value) {
        this.massage = value
    }

    set setHeader(value) {
        this.header = value
    }
    set setType(value) {

        if (["p", "d", "w"].includes(value)) this.type = value;
        else {
            console.error("Type value is p or d, value default p");
            this.type = "p";
        }
    }

    set setYesOnly(value) {
        this.yesOnly = value
    }

    set setYes(value) {
        this.yes = value;
    }

    set setNo(value) {
        this.no = value;
    }

    show() {
        const divElement = document.createElement('div');
        document.body.style.position = "relative";
        return new Promise((resolve, reject) => {
            divElement.className = "koroph-alertDialog-container"
            try {
                divElement.innerHTML = this.alertDialogDOM();
                document.body.append(divElement);
                const alertDialogButton = document.getElementsByClassName("ripper-alert"),
                    BUTTON_COUNT = alertDialogButton.length;

                for (let i = 0; i < BUTTON_COUNT; i++) {
                    alertDialogButton.item(i).addEventListener("click", function () {
                        if (BUTTON_COUNT <= 1) resolve(true);
                        else {
                            if (i === 0) resolve(false)
                            else resolve(true)
                        }
                        divElement.remove();
                    });
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    getHeaderClassName() {
        return this.type === "p" ? "primary" : this.type === "d" ? "danger" : "warning";
    }

    getHeaderIconClassName() {
        return this.type === "p" ? "icon-info" : this.type === "d" ? "icon-bin" : "icon-warning";
    }

    alertDialogDOM() {
        return `
            <div class="koroph-alertDialog">
             <header class="${this.getHeaderClassName()}">
              <div class="alert-dialog-icon">
                <span class="${this.getHeaderIconClassName()}"></span>
                </div>
                <div class="alert-dialog-text">
                 ${this.header}
                 </div>
              </header>
                <div class="koroph-alertDialog-content">${this.massage}</div>
                <div class="koroph-alertDialog-action">
                <div class="kh-button-custom">
                <button class="custom-default ripper-alert ripper" style="display: ${this.yesOnly ? "none" : "block"}" type="button">${this.no}</button>
                 </div>
                <div class="kh-button-custom primary">
                  <button class="custom-active ripper-alert ripper ${this.getHeaderClassName()}" type="button" >${this.yes}</button>
                </div>
                </div>
            </div>`;
    }
}
