export function calcSimpleInterest(p, t, r) {
  return p * (1 + (t * r) / 100);
}

export function simpleInterestAmt(a, p) {
  return a - p;
}
