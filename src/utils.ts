export const getNumberInfo = async (num: string) => {
  const url = `https://api.razorpay.com/v1/standard_checkout/payments/validate/account?session_token=${process.env.SESSION_TOKEN}&key_id=${process.env.KEY_ID}`;
  const body = new URLSearchParams({
    entity: 'vpa',
    value: num.toString(),
  });
  console.log(body);
  console.log(url);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  return await response.json();
};
