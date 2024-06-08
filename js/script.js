document.getElementById('totalBillBtn').addEventListener('click', generateBill);
document.getElementById('clearBtn').addEventListener('click', clearFields);
document.getElementById('exitBtn').addEventListener('click', () => {
    alert('Thank you for using the billing system!');
    window.close();
});

function generateBill() {
    const snackamount = [150, 20, 10, 20, 50, 60, 5];
    const groceryamount = [60, 40, 70, 120, 50, 80, 100];
    const beautyamount = [30, 100, 150, 200, 60, 25, 40];
    
    const snackId = ['snack1', 'snack2', 'snack3', 'snack4', 'snack5', 'snack6', 'snack7'];
    const groceryId = ['grocery1', 'grocery2', 'grocery3', 'grocery4', 'grocery5', 'grocery6', 'grocery7'];
    const beautyId = ['beauty1', 'beauty2', 'beauty3', 'beauty4', 'beauty5', 'beauty6', 'beauty7'];

    let totalSnacks = 0;
    let totalGrocery = 0;
    let totalBeauty = 0;

    let snacksCount = 0;
    let groceryCount = 0;
    let beautyCount = 0;

    snackId.forEach((id, index) => {
        let qty = parseInt(document.getElementById(id).value) || 0;
        if (qty > 0) {
            totalSnacks += qty * snackamount[index];
            snacksCount++;
        }
    });

    groceryId.forEach((id, index) => {
        let qty = parseInt(document.getElementById(id).value) || 0;
        if (qty > 0) {
            totalGrocery += qty * groceryamount[index];
            groceryCount++;
        }
    });

    beautyId.forEach((id, index) => {
        let qty = parseInt(document.getElementById(id).value) || 0;
        if (qty > 0) {
            totalBeauty += qty * beautyamount[index];
            beautyCount++;
        }
    });

    if (snacksCount > 3 || groceryCount > 3 || beautyCount > 3) {
        alert('You can only order up to 3 items in each section.');
        return;
    }

    const snacksTax = totalSnacks * 0.05;
    const groceryTax = totalGrocery * 0.1;
    const beautyTax = totalBeauty * 0.08;

    document.getElementById('totalSnacksPrice').value = totalSnacks.toFixed(2);
    document.getElementById('snacksTax').value = snacksTax.toFixed(2);
    document.getElementById('totalGroceryPrice').value = totalGrocery.toFixed(2);
    document.getElementById('groceryTax').value = groceryTax.toFixed(2);
    document.getElementById('totalBeautyPrice').value = totalBeauty.toFixed(2);
    document.getElementById('beautyTax').value = beautyTax.toFixed(2);

    const totalBill = totalSnacks + snacksTax + totalGrocery + groceryTax + totalBeauty + beautyTax;
    const billDetails = `
        <p>Customer Name: ${document.getElementById('customerName').value}</p>
        <p>Contact No.: ${document.getElementById('contactNo').value}</p>
        <p>Bill No.: ${document.getElementById('billNo').value}</p>
        <p>----------------------------------------</p>
        <p>Product        Qty        Price</p>
        <p>Snacks Total: ${totalSnacks.toFixed(2)}</p>
        <p>Grocery Total: ${totalGrocery.toFixed(2)}</p>
        <p>Beauty & Hygiene Total: ${totalBeauty.toFixed(2)}</p>
        <p>----------------------------------------</p>
        <p>Total Bill: ${totalBill.toFixed(2)}</p>
    `;
    document.getElementById('billDetails').innerHTML = billDetails;
    document.getElementById('billDetails').innerHTML=totalBill;
}

function clearFields() {
    document.getElementById('customerName').value = '';
    document.getElementById('contactNo').value = '';
    document.getElementById('billNo').value = '';

    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.value = '';
    });

    document.getElementById('totalSnacksPrice').value = '';
    document.getElementById('snacksTax').value = '';
    document.getElementById('totalGroceryPrice').value = '';
    document.getElementById('groceryTax').value = '';
    document.getElementById('totalBeautyPrice').value = '';
    document.getElementById('beautyTax').value = '';
    document.getElementById('billDetails').innerHTML = '';
}
