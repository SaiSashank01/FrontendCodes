const student = {
    name : "Sasi",
    age : 18,
    eng : 45,
    hin : 99,
    tel : 67,
    getAvg() {
        let avg = (this.eng + this.hin + this.tel);
        alert(`This is an average of ${avg}`)
    } 
}