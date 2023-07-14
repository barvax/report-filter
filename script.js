var options = ["","[436]", "[521]", "[222]", "[332]","[132]","[my acid]","[my base]"];
var currentOption;
var myList = [];
  
    var dropdown = document.getElementById("dropdown");

   
    for (var i = 0; i < options.length; i++) {
      var option = document.createElement("option");
      option.value = i;
      option.text = options[i];
      dropdown.add(option);
    }

  
    dropdown.addEventListener("change", function() {
      var selectedOption = dropdown.options[dropdown.selectedIndex];
      console.log("Selected option: ", selectedOption.value, selectedOption.text);
      currentOption = selectedOption.text;
      if(selectedOption.text!=""){
        togglePopup();
      }
      
    });

    function togglePopup() {
        var popup = document.getElementById("popup");
        var displayValue = window.getComputedStyle(popup).getPropertyValue("display");
        popup.style.display = (displayValue === "none") ? "block" : "none";
        popup.innerHTML=` <h2>Add Material to Report</h2>
        <p>add ${currentOption} to the report?</p>
        <label for="checkbox1">
        <input type="checkbox" id="checkbox1"> As IMP %
      </label>
      <br>
      <br>
      <label for="checkbox2">
        <input type="checkbox" id="checkbox2">As Yield %
      </label>
      <br>
      <br>
      <br>
      <button onclick="processForm()">Add</button>
      
        <button onclick="togglePopup()">Close</button>`   
      }

      function processForm() {
     
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
  
        if (checkbox1.checked) {
        myList.push(currentOption+"IMP %")
         
        }
  
        if (checkbox2.checked) {
            myList.push(currentOption+"Yield %")
         
        }
        togglePopup();
        addMaterialToList();
      }
  
      function addMaterialToList() {
        var list = document.getElementById('materialOrder');
        list.innerHTML = myList.map((flag) => `<h5 class="item-in-row">${flag}</h5>`).join("");
      
        var items = list.getElementsByTagName('h5');
        for (var i = 0; i < items.length; i++) {
          items[i].addEventListener('click', function() {
            var clickedText = this.textContent;
            console.log(clickedText);
            
            var newArr = myList.filter(function(element) {
              return element !== clickedText;
            });
      
            console.log(newArr);
            myList = newArr;
            addMaterialToList();
          });
        }
      }

       function openPanel(){
        var popup = document.getElementById("popup");
        var displayValue = window.getComputedStyle(popup).getPropertyValue("display");
        popup.style.display = (displayValue === "none") ? "block" : "none";
        popup.innerHTML=` <h2>Add Material to Report</h2>
 <p>Sreach all materials in Inventory</p>
      
        <button onclick="togglePopup()">Close</button>`  
       }
      
      
 