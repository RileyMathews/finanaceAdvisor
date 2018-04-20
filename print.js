//
const article = document.querySelector("#main")
const headerSection = document.querySelector("#header")

//create advisor info section
const createAdvisor = () => {
    const section = document.createElement('header')
    const wrapper = document.createElement('div')
    const heading = document.createElement('h1')
    heading.textContent = advisor.name
    wrapper.appendChild(heading)
    
    const company = document.createElement('h3')
    company.textContent = advisor.company
    wrapper.appendChild(company)

    const specialty = document.createElement('p')
    specialty.textContent = `My specialty is: ${advisor.specialty}`
    wrapper.appendChild(specialty)
    section.appendChild(wrapper)

    headerSection.appendChild(section)
}

createAdvisor()

//create components for each stock owned
const createStocks = () => {
    const section = document.createElement('section')
    const frag = document.createDocumentFragment()

    for (let stock in advisor.portfolio) {
        let card = document.createElement('card')
        
        //stock heading
        let heading = document.createElement('h2')
        heading.textContent = `Stock: ${stock}`
        card.appendChild(heading)

        //shares
        let shares = document.createElement('p')
        shares.textContent = `Shares: ${advisor.portfolio[stock].shares}`
        card.appendChild(shares)

        //value
        let value = document.createElement('p')
        value.textContent = `Value: ${advisor.portfolio[stock].valuation}`
        card.appendChild(value)

        //append to frag
        frag.appendChild(card)
    }
    section.appendChild(frag)
    article.appendChild(section)
}

createStocks()