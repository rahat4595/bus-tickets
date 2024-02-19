const seats = document.querySelectorAll(".kbd");
const array = [];
let totalSeat = 12;
let count = 0;  
let totalseitPrice = 0;
const price = 550;
let grandTotal;
const input = document.getElementById("phone-number");

for (let kbd of seats) {
  kbd.addEventListener("click", function (event) {
    const seatName = event.target.innerText;

    if (array.includes(seatName) === false) {
      array.push(seatName);
      totalSeat = totalSeat - 1;
      count = count + 1;
      totalseitPrice = price + totalseitPrice;

      const numberFied = document.getElementById("phone-number");
      const number = numberFied.value;
      if (array.length > 0 && number.length > 0) {
        const nextButton = document.getElementById("next");
        nextButton.removeAttribute("disabled",true);
      }
      input.addEventListener("keyup", function (event) {
        const keypress = event.target;

        if (keypress) {
          const nextButton = document.getElementById("next");
          nextButton.removeAttribute("disabled");
        }
      });

      if (array.length > 4) {
        alert("You Buy Maximum Ticket");

        return;
      } else if (array.length === 4) {
        const btn = document.getElementById("apply");
        btn.removeAttribute("disabled");
      }
    } else {
      return;
    }

    setElementInnerTextById("grand-price-total", totalseitPrice);
    setElementInnerTextById("total-tricket-price", totalseitPrice);
    setElementInnerTextById("seat-counts", count);
    setElementInnerTextById("seat-left-count", totalSeat);
    kbd.classList.add("bg-[#1DD100]");
    setElementById("seat-name", seatName);
    setElementById("class", "Economoy");
    setElementById("seat-tricket-price", price);
  });
}

const setDiscount = document.getElementById("discount-detlas");

document.getElementById("apply").addEventListener("click", function () {
  const inputField = document.getElementById("coupon-discount-inputs");
  const inputValue = inputField.value;

  setDiscount.classList.remove("hidden");
  if (inputValue === "NEW15") {
    const totalTricketPrice = getElementById("total-tricket-price");
    const discountsDitals = (totalTricketPrice * 15) / 100;
    const grandTotal = getElementById("grand-price-total");
    const discountedPrice = grandTotal - discountsDitals;
    const couponContainer = document.getElementById("coupon-discoun");
    couponContainer.classList.add("hidden");
    setElementInnerTextById("discount-detals-price", discounts);
    setElementInnerTextById("grand-price-total", discountedPrice);
  } else if (inputValue === "Couple 20") {
    const totalTricketPrice = getElementById("total-tricket-price");
    const discounts = (totalTricketPrice * 20) / 100;
    const grandTotal = getElementById("grand-price-total");
    const discountedPrice = grandTotal - discounts;
    const couponContainer = document.getElementById("coupon-discount");
    couponContainer.classList.add("hidden");
    setElementInnerTextById("discount-detals-price", discounts);
    setElementInnerTextById("grand-price-total", discountedPrice);
  } else {
    alert("Invalid Coupon Code");
  }
});