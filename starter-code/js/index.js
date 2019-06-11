// to select DOM Elements

let $productName = document.getElementsByClassName("product-name")
let $productQuantity = document.querySelector("input")
let $productPrice = document.getElementsByClassName("product-price")
let $totalPriceItem = document.getElementsByClassName("total-price-item")
let $button = document.querySelector("button")

// to get Quantity of Product through event

$button.onclick = function() {calculateItems()}

function calculateItems() 
{ 
  let value = $productQuantity.value
  console.log ("The button was clicked and the value is", value)
}

  
function deleteItem(e){

}

function getPriceByProduct(itemNode){

}

function updatePriceByProduct(productPrice, index){

}

function getTotalPrice() {

}

function createQuantityInput(){


}

function createDeleteButton(){

}

function createQuantityNode(){

}

function createItemNode(dataType, itemData){

}

function createNewItemRow(itemName, itemUnitPrice){

}

function createNewItem(){

}

window.onload = function(){
  var calculatePriceButton = document.getElementById('calc-prices-button');
  var createItemButton = document.getElementById('new-item-create');
  var deleteButtons = document.getElementsByClassName('btn-delete');

  calculatePriceButton.onclick = getTotalPrice;

  createItemButton.onclick = createNewItem;

  for(var i = 0; i<deleteButtons.length ; i++){
    deleteButtons[i].onclick = deleteItem;
  }
};
