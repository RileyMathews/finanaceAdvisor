//app to remove dom
const nukeDOM = (sectionToNuke) => {
    const parent = document.querySelector(sectionToNuke)
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}