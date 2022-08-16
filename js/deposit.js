document.getElementById("Deposit-btn").addEventListener("click", function () {
    const depositFuld = document.getElementById("deposit-fuld");
    const depositAmountString = depositFuld.value;
    const depositAmount = parseFloat(depositAmountString);
    depositFuld.value = "";

    const preveusDeposit = document.getElementById("preveus-deposit");
    const preveusDepositString = preveusDeposit.innerText;
    const preveusDepositAmount = parseFloat(preveusDepositString);

    const balanceFild = document.getElementById("balance-fild");
    const preveusBalanceString = balanceFild.innerText;
    const preveusBalanceAmount = parseFloat(preveusBalanceString);

    const totalBalanceAmount = preveusBalanceAmount + depositAmount;
    balanceFild.innerText = totalBalanceAmount;
    const totalDepositAmount = preveusDepositAmount + depositAmount;
    preveusDeposit.innerText = totalDepositAmount;
})