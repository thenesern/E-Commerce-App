import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";

const KEY =
  "pk_test_51KbmSLHPzzbdqZb2bBjb3qZOYDBZVrb6YQdb2uLv0K1v359Mv7i6g8m6FG4SgJ4LGGzK1rGvXD8hzdX39bWXvYbU00IUL7onVt";
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = axios.post("http://localhost:5000/api/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 1,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <div>
      <StripeCheckout
        name="My Commerce"
        image=""
        billingAddress=""
        shippingAddress=""
        description="Your total is $20"
        amount={1}
        token={onToken}
        stripeKey={KEY}
      >
        <button>a</button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
