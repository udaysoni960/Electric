var setProductName;
var setProductPrice;

function SaveItem() {
    var productName = document.getElementById('productName').innerText;
    var productPrice = document.getElementById('productPrice').innerText;
    var productImage = document. getElementById("productImage").src;
    localStorage.setItem("productName", productName);
    localStorage.setItem("productPrice", productPrice);
    localStorage.setItem("productImage", productImage);
}

function doShowAll() {
    userLoggedIn();
    var list = "";
    if ((localStorage.getItem("productName") !== null) || (localStorage.getItem("productName" !== undefined))) {
        list+='<td class="column-1"><div class="how-itemcart1"><img src="'+ localStorage.getItem("productImage") +'" alt="IMG"></div></td>';
        list+='<td class="column-2">' + localStorage.getItem("productName") + '</td>';
        list+='<td class="column-3">' + localStorage.getItem("productPrice") + '</td>';
        checkLogin();
        document.getElementById("checkoutBox").style.visibility = "visible";
    }
    else {
        list+='<br><td class="column-2">No product added to cart.</td>';
    }
    document.getElementById('tableList').innerHTML = list;
}

function loginPage() {
        // location.hostname = "";
        location.pathname = "/login.html";
}

function doLogin() {
    localStorage.setItem("isLoggedIn", true);
}

function doLogout() {
    localStorage.removeItem("isLoggedIn");
    refreshPage();
}

function refreshPage(){
    window.location.reload();
}

function checkLogin() {
    var list = "";
    if ((localStorage.getItem("isLoggedIn") !== null) || (localStorage.getItem("isLoggedIn" !== undefined))) {
        list+='<button formaction="/success.html" class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">Proceed to Checkout</button>';
    }
    else {
        list+='<p>To proceed further, Please login first...</p>';
    }
    document.getElementById('proceedToCheckout').innerHTML = list;
}

function userLoggedIn() {
    var list = "";
    if ((localStorage.getItem("isLoggedIn") !== null) || (localStorage.getItem("isLoggedIn" !== undefined))) {
        list+='<button onclick="doLogout()" class="flex-c-m stext-101 cl0 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">Logout</button>';
    }
    else {
        list+='<button onclick="loginPage()" class="flex-c-m stext-101 cl0 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">Login</button>';
    }
    document.getElementById('userLogin').innerHTML = list;
}

function ClearAll() {
    localStorage.removeItem("productName");
    localStorage.removeItem("productImage");
    localStorage.removeItem("productPrice");
}
