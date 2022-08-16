document.getElementById("btn-Widthdrow").addEventListener("click", function () {
    const withdeowFild = document.getElementById("withdeow-fild");
    const withdeowAmountString = withdeowFild.value;
    const withdeowAmount = parseFloat(withdeowAmountString);
    withdeowFild.value = "";
    if (isNaN(withdeowAmount)) {
        alert("plise enter a valid number ")
        return;
    }

    const preveusWidthdrow = document.getElementById("preveus-widthdrow");
    const preveusWidthdrowString = preveusWidthdrow.innerText;
    const preveusWidthdrowAmount = parseFloat(preveusWidthdrowString);




    const balanceFild = document.getElementById("balance-fild");
    const preveusBalanceString = balanceFild.innerText;
    const preveusBalanceAmount = parseFloat(preveusBalanceString);



    if (withdeowAmount > preveusBalanceAmount) {
        alert("your blalance not available ");
        return;
    }
    const totalAmount = preveusWidthdrowAmount + withdeowAmount;
    preveusWidthdrow.innerText = totalAmount;
    const totalBalance = preveusBalanceAmount - withdeowAmount;
    balanceFild.innerText = totalBalance;







})