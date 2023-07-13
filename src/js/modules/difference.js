export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }

    hideItems() {
        this.newOfficer.querySelectorAll(this.items).forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.displa = 'none';
            }
        });
        this.oldOfficer.querySelectorAll(this.items).forEach((item, i, arr) => {
            if (i !== arr.length - 1) {
                item.style.displa = 'none';
            }
        });
    }


}