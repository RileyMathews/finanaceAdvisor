const advisor = Object.create(null, {
    company: {
        value: "Finance",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "technology",
        enumerable: true,
        writable: true
    },
    name: {
        value: "Charles",
        enumerable: true,
        writable: false
    },
    worth: {
        value: function () {
            let worth = 0
            for (let key in this.portfolio) {
                console.log(key)
                worth += this.portfolio[key].valuation
            }
            return worth
        }
    },
    purchase: {
        value: function (stockToChange, purchaseQuantity, pricePerStock) {
            let stockFound = false
            for (let stock in this.portfolio) {
                if (stock === stockToChange) {
                    this.portfolio[stock].shares += purchaseQuantity
                    this.portfolio[stock].valuation += purchaseQuantity * pricePerStock
                    stockFound = true
                    return stock
                }
            };
            if (stockFound === false) {
                this.portfolio[stockToChange] = {
                    "shares": purchaseQuantity,
                    "valuation": pricePerStock * purchaseQuantity
                }
            }
        },
        enumerable: false
    }, //ends purchase property
    sell: {
        value: function (stockSold, quantitySold, pricePerStock) {
            console.log('started function')
            for (let stock in this.portfolio) {
                console.log(this.portfolio[stock])
                if (stock === stockSold) {
                    this.portfolio[stock].shares -= quantitySold
                    this.portfolio[stock].valuation -= quantitySold * pricePerStock
                    if (this.portfolio[stock].shares === 0) {
                        delete this.portfolio[stock]
                    }
                }
            }
        }
    }
}) //ends object creation

advisor.portfolio = {
    MSFT: {
        shares: 10,
        valuation: 100000
    }
}

advisor.purchase("MSFT", 100, 100)
advisor.sell("MSFT", 5, 50)
advisor.purchase("APPL", 50, 100)
advisor.sell("APPL", 30, 100)
advisor.purchase("SNY", 20, 50)
advisor.purchase("ACT", 24, 50)
advisor.purchase("BLZ", 20, 60)
advisor.purchase("NTD", 20, 57)
advisor.purchase("VLV", 20, 40)

console.log(advisor.portfolio)
console.log(advisor.worth())