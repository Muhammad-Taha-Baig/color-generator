const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexCode = "#" + randomNumber.toString(16);
    document.querySelector("input").value = hexCode;
    document.querySelector(".color-box").style.backgroundColor = hexCode
}

const copyCode = () => {
    const inputText = document.querySelector("input");
    inputText.select();
    document.execCommand('copy');
}