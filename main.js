$(document).ready(function () {
  $(`.price input`).keyup(function () {
    $(`.product-info`).each(function () {
      let total = 0;
      let common = $(this).find(`.total-price input`);
      const quantity = $(this).find(`.price input`).val();
      const singlePrice = $(this).find(`.quantity input`).val();
      if (quantity != 0 && singlePrice != 0) {
        total = quantity * singlePrice;
            common.val(total.toFixed(0));
      }
      calculateTotal();
      function discount() {
        let sum = 0;
        let discount = parseFloat($(`.discount input`).val()) / 100;
        if (discount != 0 && isNaN(discount) == false) {
            let [total, _] = $(`.subtotal input`).val().split(` `);
            sum = Number(total) * discount;
            $(`.total-discount input`).val(`-${sum.toFixed(2)} ЛВ`);
            $(`.total input`).val(`${total - sum.toFixed(2)} ЛВ`);
        }
      }
      discount();
    });
  });
});
$(`.quantity input`).keyup(function () {
  $(`.product-info`).each(function () {
    let total = 0;
    let common = $(this).find(`.total-price input`);
    const quantity = $(this).find(`.price input`).val();
    const singlePrice = $(this).find(`.quantity input`).val();
    if (quantity != 0 && singlePrice != 0) {
      total = quantity * singlePrice;
        common.val(total.toFixed(0));
    }
    calculateTotal();
    function discount() {
      let sum = 0;
      let discount = parseFloat($(`.discount input`).val()) / 100;
      if (discount != 0 && isNaN(discount) == false) {
        let [total, _] = $(`.subtotal input`).val().split(` `);
        sum = Number(total) * discount;
        $(`.total-discount input`).val(`-${sum.toFixed(2)} ЛВ`);
        $(`.total input`).val(`${total - sum.toFixed(2)} ЛВ`);
      }
    }
    discount();
  });
});

$(`#show-input`).click(() => {
  let products = $(`#main`);
  let product = $(`.product-info:first`);
  let cloned = product.clone(true).appendTo(products);
  cloned.find(`input`).val(``);
});

function calculateTotal() {
  let sum = 0;
  $(`.total-price input`).each(function () {
    let num = $(this).val();
    if (num != 0) {
      sum += parseFloat(num);
    }
  });
  $(`.subtotal input`).val(`${sum.toFixed(0)} ЛВ`);
}

$(`.discount input`).keyup(function () {
    let discountValue=$(`.discount input`).val()
    console.log(discountValue)
    if(discountValue!==0 && discountValue!="" && isNaN(discountValue)!=true){
        let sum = 0;
        let discount = parseFloat($(`.discount input`).val()) / 100;
        let [total, _] = $(`.subtotal input`).val().split(` `);
        sum = Number(total) * discount;
        $(`.total-discount input`).val(`-${sum.toFixed(2)} ЛВ`);
        $(`.total input`).val(`${total - sum.toFixed(2)} ЛВ`);
    }else{
        $(`.total-discount input`).val(``);
        $(`.total input`).val(``);
    }
});
