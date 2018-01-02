// /apollo/core/templates/default/masterPage.html#/CARD_DEBIT_TRANSACTION
var result_rows = [];
var rows = document.getElementsByClassName("aa");
for (var i=0; i<rows.length; i++) {
	var merchant = rows[i].querySelector('[data-title="text.TRAN_LIST.TABLE.MERCHANT"]').innerHTML;
	var price = rows[i].querySelector('[data-title="text.TRAN_LIST.TABLE.TO_DEBIT_AMOUNT"]>span>.number-wrapper>.integer').innerHTML;
	var date = rows[i].querySelector('[data-title="text.TRAN_LIST.TABLE.MERCHANT"]').innerHTML;
	var cardNumber = rows[i].querySelector('[data-title="text.TRAN_LIST.TABLE.CARD"]>span>span>span').innerHTML;

	result_rows.push({ 
		"merchant": merchant,
		"date": date,
		"cardNumber": cardNumber,
		"price": price
	});
}
console.log(result_rows);