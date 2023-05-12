var i = 0,
  text;
text = "Hallo saya ssssss";

function mengetik() {
  if (i < text.lenght) {
    document.getElementById("autoTypeAbout").innerHTML += text.charAt(i);
    i++;
    setTimeout(mengetik, 100);
  }
}

mengetik();
