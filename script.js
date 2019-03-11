var homestuckName = {
  nameWords: [],
  validStatus: "",
  checkNameLength: function(name) {
    this.nameWords = name.split(" ");
    if(this.nameWords.length !== 2) {
      this.validStatus = "wronglength";
    } else {
      if(this.nameWords[0].length === 6 && this.nameWords[1].length === 6) {
        this.validStatus = "troll";
      } else if((this.nameWords[0].length === 4 && this.nameWords[1].length === 6) || (this.nameWords[0].length === 4 && this.nameWords[1].length === 7)) {
        this.validStatus = "kids";
      } else {
        this.validStatus = false;
      }
    }
  }
};

var handlers = {
  displayMessage: function() {
    var message = "";
    var nameDiv = document.querySelector("#useThisDiv");
    nameDiv.innerHTML = "";
    var homestuckNameInput = document.getElementById("homestuckNameInput");
    homestuckName.checkNameLength(homestuckNameInput.value);
    if(homestuckName.validStatus === false) {
      message = homestuckNameInput + " is not a valid Homestuck Kid or Troll name!";
    } else if(homestuckName.validStatus === "troll") {
      message = homestuckNameInput + " is a valid Homestuck Troll name!";
    } else if(homestuckName.validStatus === "kids") {
      message = homestuckNameInput + " is a valid Homestuck Kid name!";
    } else if(homestuckName.validStatus === "wronglength") {
      message = "That's not the right number of words."
    }
    var messageP = document.createElement("p");
    messageP.textContent = message;
    nameDiv.appendChild(messageP);
    homestuckNameInput.value = "";
  },
  joke: function() {
    var jokeP = document.querySelector("p");
    jokeP.innerHTML = "";
    var imageTag = document.createElement("img");
    jokeP.appendChild(imageTag);
    var imageSource = document.createAttribute("src");
    imageSource.value = "https://www.homestuck.com/images/storyfiles/hs2/00463.gif";
    var imageOnClick = document.createAttribute("onclick");
    imageOnClick.value = "handlers.clearImage()";
    imageTag.setAttributeNode(imageSource);
    imageTag.setAttributeNode(imageOnClick);
  },
  clearImage: function() {
    var jokeP = document.querySelector("p");
    jokeP.innerHTML = "";
  },
  clear: function() {
    var nameDiv = document.querySelector("#useThisDiv");
    nameDiv.innerHTML="";
  },
};
