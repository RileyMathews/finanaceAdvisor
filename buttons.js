const portfolioButton = document.querySelector("#portfolio")
const historyButton = document.querySelector("#history")

portfolioButton.addEventListener("click", () => {
    nukeDOM("#main")
    createStocks()
})

historyButton.addEventListener("click", () => {
    nukeDOM("#main")
    createHistory()
})

