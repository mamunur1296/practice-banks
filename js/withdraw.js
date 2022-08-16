document.getElementById("btn-Widthdrow").addEventListener("click", function () {
    const withdeowFild = document.getElementById("withdeow-fild");
    const withdeowAmountString = withdeowFild.value;
    const withdeowAmount = parseFloat(withdeowAmountString);
    withdeowFild.value = "";


    const preveusWidthdrow = document.getElementById("preveus-widthdrow");
    const preveusWidthdrowString = preveusWidthdrow.innerText;
    const preveusWidthdrowAmount = parseFloat(preveusWidthdrowString);

    const balanceFild = document.getElementById("balance-fild");
    const preveusBalanceString = balanceFild.innerText;
    const preveusBalanceAmount = parseFloat(preveusBalanceString);

    const totalBalance = preveusBalanceAmount - withdeowAmount;
    balanceFild.innerText = totalBalance;

    const totalAmount = preveusWidthdrowAmount + withdeowAmount;
    preveusWidthdrow.innerText = totalAmount;
})