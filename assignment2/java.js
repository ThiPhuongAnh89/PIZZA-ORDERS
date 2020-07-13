/*https://stackoverflow.com/questions/23728626/localstorage-and-json-stringify-json-parse*/
var customers = JSON.parse(localStorage.getItem("customers")) || [];
/* references: https://www.w3schools.com/jsref/jsref_reverse.asp, https://www.w3schools.com/js/js_array_sort.asp*/
customers.reverse();
var counter1 = "0";
var counter2 = "0";
var counter3 = "0";


// Source: on the form examle
function initFunction() {


    //document.getElementById("introfield").innerHTML = introfield;

    // get today's date
    var todaysDate = 0;
    todaysDate = new Date();
    document.getElementById("dtfield").innerHTML = todaysDate;


}

function setInformationCookie() {

    var fname = document.getElementById("fname").value;
    setCookie("fname", fname, 1);
    document.getElementById("fname").value = getCookie("fname");

    var lname = document.getElementById("lname").value;
    setCookie("lname", lname, 1);
    document.getElementById("lname").value = getCookie("lname");

    var address = document.getElementById("address").value;
    setCookie("address", address, 1);
    document.getElementById("address").value = getCookie("address");

    var email = document.getElementById("email").value;
    setCookie("email", email, 1);
    document.getElementById("email").value = getCookie("email");

    var pnumber = document.getElementById("number").value;
    setCookie("number", pnumber, 1);
    document.getElementById("number").value = getCookie("number");
}
/*
function GetPizzaSizeValue() {
  var PizzaSizeRadio = document.getElementsByName('type');
  var PizzaSizeValue;
  for(var i = 0; i < PizzaSizeRadio.length; i++){
      if(PizzaSizeRadio[i].checked){
         PizzaSizeValue = PizzaSizeRadio[i].value;
      }
  }
  return PizzaSizeValue;
 }
 */
var pizzaSize;
var pizzaSpecial;
var pizzaExtras;
var SandwichType;
var drinkType;
var drinkSize;
var allPz_Order = " ";
var allDrink_Order = " ";
var allSw_Order = " ";
var customers;
var getOldStoreValue;
var totalPz = 0;
var totalSw = 0;
var totalDrink = 0;
var total;
var pizza, sandwich, drinks;


function getValueOfRadioButton(name) {
    var radioButtons = document.getElementsByName(name);
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked == true) {
            if (name == "pizzaSize") {
                pizzaSize = radioButtons[i].id;
            }
            if (name == "pizzaSpecial") {
                pizzaSpecial = radioButtons[i].id;
            }
            if (name == "SandwichType") {
                SanndwichType = radioButtons[i].id;
            }
            if (name == "drinkType") {
                drinkType = radioButtons[i].id;
            }
            if (name == "drinkSize") {
                drinkSize = radioButtons[i].id;
            }


            return parseFloat(radioButtons[i].value);
        }
    }
    return "";
}

function getValueOfCheckbox(name) {
    pizzaExtras = "";
    var checkbox = document.getElementsByName(name);
    var total = 0;

    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            if (pizzaExtras.length > 0) {
                pizzaExtras += ",";
            }

            pizzaExtras = pizzaExtras + checkbox[i].id;
            total = total + parseFloat(checkbox[i].value);
        }
    }
    return total;

}

function setVariableOfChoices(name, id) {
    switch (name) {
        case "pizzaSize":
            pizzaSize = id;
            break;
        case "pizzaSpecial":
            pizzaSpecial = id;
            break;
        case "pizzaExtras":
            pizzaExtras = id;
            break;
        case "SandwichType":
            SandwichType = id;
            break;
        case "drinkType":
            pizzaExtras = id;
            break;
        case "drinkSize":
            pizzaExtras = id;
            break;
    }
}

function setVariableWithNameOfRadioButton(name) {
    var radioButtons = document.getElementsByName(name);
    var id = 0;

    // get id to selected
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked == true) {
            id = radioButtons[i].id;
            // call method to set variable
            setVariableOfChoices(name, id);
        }
    }

    return id;
}

function setVariableWithNameOfCheckboxButton(name) {
    pizzaExtras = "";
    var checkbox = document.getElementsByName(name);


    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == true) {
            if (pizzaExtras.length > 0) {
                pizzaExtras += ",";
            }

            pizzaExtras = pizzaExtras + checkbox[i].id;
            //setVariableOfChoices(name, id);
        }
    }
    return pizzaExtras;

}

function addPizzatocart() {

    var pzSizeName = setVariableWithNameOfRadioButton('pizzaSize');
    var pzQuantity = document.getElementById("quantityPZ").value;
    var pzSpecial = setVariableWithNameOfRadioButton('pizzaSpecial');
    var pzExtras = setVariableWithNameOfCheckboxButton('pizzaExtras');
    var pzCost = (pzQuantity * getValueOfRadioButton('pizzaSize')) + getValueOfCheckbox('pizzaExtras');

    if (confirm("Do you want to add these items to the cart?")) {
        if (document.getElementById('quantityPZ').value > 0) {
            pizza = pzQuantity + ' x ' + pzSizeName + ', ' + pzSpecial + '(ingredients: ' + pzExtras + '): $' + parseFloat(pzCost).toFixed(2) + "</br>";
            allPz_Order = allPz_Order + pizza;
            totalPz = totalPz + pzCost;
            localStorage.setItem("allpizza_order", allPz_Order);
            counter1++;
            alert("Your items are added!");
            document.getElementById('form1').reset();
        } else {
            alert("Invalid Quantity");
        }
    } else {
        alert("No item added!");
        document.getElementById('form1').reset();
    }

}

/* if (confirm("Do you want to add these Items to the cart?") && document.getElementById("quantityPZ").value > 0) {
        var pzCost = (pzQuantity * getValueOfRadioButton('pizzaSize')) + getValueOfCheckbox('pizzaExtras');
        pizza = pzQuantity + ' x ' + pzSizeName + pzSpecial + pzExtras + ': $' + parseFloat(pzCost).toFixed(2) + "</br>";
        allPz_Order = allPz_Order + pizza;
        totalPz = totalPz + pzCost;
        localStorage.setItem("pizza_order", allPz_Order);
        alert(" your Items adding sucessfuly!");
    } else {
        alert("No Items added, Invalid quantity!");
    }
    console.log("==> " + localStorage.getItem("pizza_order"));
    console.log(totalPz);
}
*/


function addSandwichtocart() {
    var swSizeName = setVariableWithNameOfRadioButton('SandwichType');
    var swQuantity = document.getElementById("swQuantity").value;
    var swCost = (swQuantity * getValueOfRadioButton('SandwichType'));

    
    if (confirm("Do you want to add these items to the cart?")) {
        if (document.getElementById('swQuantity').value > 0) {
            sandWich = swQuantity + ' x ' + swSizeName + ': $' + parseFloat(swCost).toFixed(2) + "</br>";
        allSw_Order = allSw_Order + sandWich;
        totalSw = totalSw + swCost;
            localStorage.setItem("allSw_Order", allSw_Order);
            alert("Your items are added!");
            counter2++;
            document.getElementById('form2').reset();
        } else {
            alert("Invalid Quantity");
        }
    } else {
        alert("No item added!");
        document.getElementById('form2').reset();
    }

}


function addDrinkstocart() {
    var drinkTypeName = setVariableWithNameOfRadioButton('drinkType');
    var drinkSizeName = setVariableWithNameOfRadioButton('drinkSize');
    var drinkQuantity = document.getElementById("quantityDrink").value;
    var drinkCost = (drinkQuantity * getValueOfRadioButton('drinkSize'));
    console.log(document.getElementById('quantityDrink').value);
  
    if (confirm("Do you want to add these items to the cart?")) {
        if (document.getElementById('quantityDrink').value > 0) {
            drinks = drinkQuantity + ' x ' + drinkTypeName + " " + drinkSizeName + ': $' + parseFloat(drinkCost).toFixed(2) + "</br>";
        allDrink_Order = allDrink_Order + drinks;
        totalDrink = totalDrink + drinkCost;
            localStorage.setItem("Drink_Order", allDrink_Order);
            alert("Your items are added!");
            counter3++;
            document.getElementById('form3').reset();
        } else {
            alert("Invalid Quantity");
        }
    } else {
        alert("No item added!");
        document.getElementById('form3').reset();
    }

}




function saveCustomerInfor() {
    /* var drinkTypeName = setVariableWithNameOfRadioButton('drinkType');
     var drinkSizeName = setVariableWithNameOfRadioButton('drinkSize');
     var drinkQuantity = document.getElementById("quantityDrink").value;

     var drinkCost = (drinkQuantity * getValueOfRadioButton('drinkSize'));
     var drinks = +drinkQuantity + ' x ' + drinkTypeName + " " + drinkSizeName + ': $' + drinkCost + "\n\r";
     allDrink_Order = allDrink_Order + drinks;
     */
    var customer = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        phonenumber: document.getElementById("number").value,
        orders: [{
                pizza: allPz_Order,
                sandwich: allSw_Order,
                drink: allDrink_Order

            }
             ],

        /*   orders:{  pizza: [pizza],sandwich :[ sandWich], drink:[drinks]
                  }
                    
        */

    };

    getOldStoreValue = JSON.parse(localStorage.getItem('customers')) || [];
    getOldStoreValue.push(customer);

    localStorage.setItem("customers", JSON.stringify(getOldStoreValue));

}


function displayCustomer() {




    var confirmation = "<table>";
    var count = 0;
    /* https://stackoverflow.com/questions/33198429/how-to-print-elements-from-array-with-javascript*/
    customers.forEach(function (customer) {

        confirmation += "<tr><td><h3>Customer " + (count + 1) + " " + customer.firstName + " " + customer.lastName + "</h3>";

        confirmation += customer.email + "<br/>";
        confirmation += customer.address + "<br/>";
        confirmation += customer.phonenumber + "<br/>";


        confirmation += "<br><b>Order</b><br>";

        if (customer.orders[0].pizza.trim().length > 0) {
            confirmation += customer.orders[0].pizza + "<br>";
        }

        if (customer.orders[0].sandwich.trim().length > 0) {

            confirmation += customer.orders[0].sandwich + "<br>";
        }

        if (customer.orders[0].drink.trim().length > 0) {

            confirmation += customer.orders[0].drink + "<br>";
        }

        confirmation += "</td><td align=right><input type='checkbox' value='" + count + "' name='customer_" + (count + 1) + "' onclick='removeAndLoadValues(" + count + ", this)' style='padding:5px;' />  Completed <br></td></tr>";

        confirmation += "<tr><td colspan=2><hr></td></tr>";

        count++;

    });

    confirmation += "</table>";


    document.getElementById("display").innerHTML = confirmation;
}

//references: https:stackoverflow.com/questions/51162916/javascript-get-index-of-element-in-arrow-function-->
function removeAndLoadValues(index, element) {
    // alert('Do you want to remove? => ' + index);

    if (confirm("Do you want to remove this customer?")) {

        // confirm if the user would like to remove
        // if yes do below
        // remove element from array
        newCustomersList = removeItemIntoArray(index);

        // display content again
        displayCustomer();


        // Save customer to store again but with this newCustomersList
        //sessionStorage.setItem(newCustomersList);
        //sessionStorage.getItem(newCustomersList)
    } else {
        element.checked = false;
    }

}


function removeItemIntoArray(index) {
    // https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript
    customers.splice(index, 1);

    localStorage.setItem("customers", JSON.stringify(customers));
    return customers;
}


/*function SaveForm() {
    
    setCookie("pizzaSize", getValueOfRadioButton('pizzaSize'));
    setVariableWithNameOfRadioButton('pizzaSize');
    setCookie("pizzaSpecial", getValueOfRadioButton('pizzaSpecial'));
    setVariableWithNameOfRadioButton('pizzaSpecial');
    setCookie("'pizzaExtras'", getValueOfCheckbox('pizzaExtras'));
    setVariableWithNameOfCheckboxButton('pizzaExtras');
    setCookie("SandwichType", getValueOfRadioButton('SandwichType'));
    setVariableWithNameOfRadioButton('SandwichType');
    setCookie("drinkType", getValueOfRadioButton('drinkType'));
    setVariableWithNameOfRadioButton('drinkType');
    setCookie("drinkSize", getValueOfRadioButton('drinkSize'));
    setVariableWithNameOfRadioButton('drinkSize');

}
*/


function setCookie(cookieName, cookieValue, length) {
    var date = new Date();
    date.setTime(date.getTime() + (length * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/*
 * http://www.w3schools.com/js/js_cookies.asp
 */
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}





// Source: on the form examle

/*
function getValueOfRadioButton(name){
		var radioButtons = document.getElementsByName(name);
		for(var i = 0; i < radioButtons.length; i++) {	
			if(radioButtons[i].checked == true) {
                if(name=="type")
                    {
                         size=radioButtons[i].id;
                    }
                else
                    {
                         special=radioButtons[i].id;
                    }
             
                console.log(size);
				return parseFloat(radioButtons[i].value);
			}
		}
		return 0;
	}



*/


function calculate() {
    if (counter1 == 0 && counter2 == 0 && counter3 == 0) {
        alert('No Items in your cart. You cannot check out!');
        return;
    }
    var total = 0;
    var contactFName = "";
    var contactAddress = "";
    var contactLName = "";
    var phoneNumber = "";


    contactAddress = document.getElementById("address");
    contactLName = document.getElementById("lname");
    contactFName = document.getElementById("fname");
    contactEmail = document.getElementById("email");
    phoneNumber = document.getElementById("number");


    //
    // variable to contain error message (if any exists)
    //
    var message = "";

    //
    // firstname check
    //
    var boolNameCheck = checkField(contactFName.value);

    if (!boolNameCheck) {
        message += "'Firstname' must be supplied before an order can be completed\n";
        changeClass(contactFName, "error");

    } else {
        changeClass(contactFName, "");
    }

    // lastname check
    //
    var boolLNameCheck = checkField(contactLName.value);
    if (!boolLNameCheck) {
        message += "'Lastname' must be supplied before an order can be completed\n";
        changeClass(contactLName, "error");

    } else {
        changeClass(contactLName, "");
    }

    var boolEmailCheck = checkField(contactEmail.value);
    if (!boolEmailCheck) {
        message += "'Email' must be supplied before an order can be completed\n";
        changeClass(contactEmail, "error");

    } else {
        changeClass(contactEmail, "");
    }

    //
    // address check
    //
    var boolAddressCheck = checkField(contactAddress.value);
    if (!boolAddressCheck) {
        message += "'Address' must be supplied before an order can be completed\n";
        changeClass(contactAddress, "error");

    } else {
        changeClass(contactAddress, "");
    }

    // phone number check
    //
    var verifyPhoneNumber = checkField(phoneNumber.value);
    if (!verifyPhoneNumber) {
        message += "Phone number' must be supplied before an order can be completed\n";
        changeClass(phoneNumber, "error");

    } else {
        changeClass(phoneNumber, "");
    }
    // get the information from radio buttom




    if (boolAddressCheck && boolLNameCheck && boolEmailCheck && boolNameCheck && verifyPhoneNumber) {

        total = total + totalPz + totalSw + totalDrink;



        var confirmation = "<h2>Order Details</h2>";
        confirmation = "<h3>Customer Infor: </h3>";

        confirmation += "<p>Firstname: " + contactFName.value + "<br/>";
        confirmation += "Lastname: " + contactLName.value + "<br/>";
        confirmation += "Email: " + contactEmail.value + "<br/>";
        confirmation += "Address: " + contactAddress.value + "<br/>";
        confirmation += "Phonenumber: " + phoneNumber.value + "<br/>";

        confirmation += "<h3>Orders: </h3>";

        if (counter1 > 0) {
            confirmation += "Pizza: " + allPz_Order + "<br/>";

        }
        if (counter2 > 0) {

            confirmation += "Sandwiches: " + allSw_Order + "<br/>";
        }
        if (counter3 > 0) {
            confirmation += "Drinks: " + allDrink_Order + "<br/>";
        }
        confirmation += "<p class=\"cost\">Order Total: $" + parseFloat(total).toFixed(2) + "</p>";
        alert('Thank you for your orders!');

        document.getElementById("orderdetails").innerHTML = confirmation;

    } else {
        alert(message);
        document.getElementById("orderdetails").innerHTML = "<p></p>";
    }

    return false;

}

// https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-selected-radio-button-using-jquery.php

//sources: on the form example
function changeClass(field, newValue) {
    field.setAttribute("class", newValue);
}

// sources: on the form example
// function to validate content entered by the user
//
function checkField(fieldValue) {
    var check = true;

    fieldValue = fieldValue.trim();
    if (fieldValue.length == 0) {
        check = false;
        return check;
    }

    return check;
}
