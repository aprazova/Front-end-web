(function changeBackgroundColor(sColor1, sColor2) {
    let pTags = document.getElementsByTagName("p");
    let counterPTags = pTags.length;
    for (let element of pTags) {
        element.style.backgroundColor = sColor1;
    }

    let classHeadertitle = document.getElementsByClassName("headertitle");
    let counterHeaderTitleClass = classHeadertitle.length;
    for (let element of classHeadertitle) {
        element.style.backgroundColor = sColor2;
    }

    document.title = `${counterPTags} параграфа, ${counterHeaderTitleClass} елемента с клас <headertitle>`;
})("red", "yellow");