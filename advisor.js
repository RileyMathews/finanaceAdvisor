const advisor = Object.create(null, {
    company: {
        value: "Moneyz",
        enumerable: true,
        writable: true
    },
    specialty: {
        value: "Technology",
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
    history: {
        value: []
    },
    purchase: {
        value: function (ticker, quantity, price) {
            let stockFound = false
            for (let stock in this.portfolio) {
                if (stock === ticker) {
                    this.portfolio[stock].shares += quantity
                    this.portfolio[stock].valuation += quantity * price
                    stockFound = true
                }
            };
            if (stockFound === false) {
                this.portfolio[ticker] = {
                    "shares": quantity,
                    "valuation": price * quantity
                }
            }
            this.history.push(
                {
                    ticker,
                    quantity,
                    price,
                    purchase: true
                }
            )
        },
        enumerable: false
    }, //ends purchase property
    sell: {
        value: function (ticker, quantity, price) {
            for (let stock in this.portfolio) {
                if (stock === ticker) {
                    this.portfolio[stock].shares -= quantity
                    this.portfolio[stock].valuation -= quantity * price
                    if (this.portfolio[stock].shares === 0) {
                        delete this.portfolio[stock]
                    }
                }
            }
            this.history.push(
                {
                    ticker,
                    quantity,
                    price,
                    purchase: false
                }
            )
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
