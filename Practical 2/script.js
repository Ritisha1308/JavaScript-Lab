var cart = [];

function addItem(name, price, qty)
{
    qty = parseInt(qty);

    if (isNaN(qty) || qty <= 0)
    {
        alert("Please enter a valid quantity for " + name + ".");
        return;
    }

    var found = false;

    for (var i = 0; i < cart.length; i++)
    {
        if (cart[i].name == name)
        {
            cart[i].qty += qty;
            found = true;
            break;
        }
    }

    if (!found)
    {
        cart.push({
            name: name,
            price: price,
            qty: qty
        });
    }

    alert(name + " added to cart!");
}

function generateBill()
{
    if (cart.length == 0)
    {
        document.getElementById("receipt").innerHTML =
        "<b>Your cart is empty.</b>";
        return;
    }

    var bill = "";
    var subtotal = 0;

    for (var i = 0; i < cart.length; i++)
    {
        var amount = cart[i].price * cart[i].qty;
        subtotal += amount;

        bill +=
        "<b>" + cart[i].name + "</b><br>" +
        "Price : ₹" + cart[i].price + "<br>" +
        "Quantity : " + cart[i].qty + "<br>" +
        "Amount : ₹" + amount + "<hr>";
    }

    var discount = 0;

    if (subtotal > 5000)
    {
        discount = subtotal * 0.10;
    }

    var total = subtotal - discount;

    bill +=
    "<h3>Subtotal : ₹" + subtotal + "</h3>" +
    "<h3>Discount : ₹" + discount + "</h3>" +
    "<h2>Total Bill : ₹" + total + "</h2>";

    document.getElementById("receipt").innerHTML = bill;
}