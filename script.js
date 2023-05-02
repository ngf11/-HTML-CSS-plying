function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const billableDaysPerMonth = 22;
  const months = Math.floor(numDays / billableDaysPerMonth);
  const percentageAfter = 1 - discount;
  const remainingDays = numDays % billableDaysPerMonth;
  const monthCost = billableDaysPerMonth * ratePerHour * percentageAfter;
  const fullMonthsCost = months * monthCost;
  const remainingCost = remainingDays * ratePerHour;

  const discountedMonthCost = monthCost * percentageAfter;
  const discountedFullMonthsCost = months * discountedMonthCost;

  const total = discountedFullMonthsCost + remainingCost;
  return Math.ceil(total);
}

console.log(priceWithMonthlyDiscount(89, 230, 0.42));
