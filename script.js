// Code goes here
// I need to get the name via a button/form
// display the name as a list,
// check the name,
// clear the field
// if name is valid I display "[name] is a valid Homestuck name"
// if name is not valid I display "[name] is not a valid Homestuck name"

var homestuckName = {
  nameWords: [],
  validStatus: "",
  checkNameLength: function(name) {
    this.nameWords = name.split(" ");
    if(this.nameWords.length !== 2) {
      this.validStatus = false;
    } else {
      if((this.nameWords[0].length === 4 && this.nameWords[1].length === 6) || (this.nameWords[0].length === 6 && this.nameWords[1].length === 6) || (this.nameWords[0].length === 4 && this.nameWords[1].length === 7)) {
        this.validStatus = true;
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
    if(homestuckName.validStatus === true) {
      message = "This is a valid Homestuck Kid or Troll name!";
    } else {
      message = "This is not a valid Homestuck Kid or Troll name!";
    };
    var messageP = document.createElement("p");
    messageP.textContent = message;
    nameDiv.appendChild(messageP);
    homestuckNameInput.value = "";
  },
  joke: function() {
    var jokeP = document.querySelector("p");
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
  }
};

//  var nameDiv = document.querySelector("div");
