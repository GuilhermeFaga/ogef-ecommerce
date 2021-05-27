import { firestore } from "../../../util/firebase";

export default async (req, res) => {
  const { session_id, product_id, quantity, variant_id } = req.query;
  if (!cart_id) return res.status(400).send("Param 'cart_id' required");
  if (!product_id) return res.status(400).send("Param 'product_id' required");
  if (!quantity) return res.status(400).send("Param 'quantity' required");
  if (!variant_id) return res.status(400).send("Param 'variant_id' required");

  const DOC = firestore().doc("auth/tokens");
  const snapshot = await DOC.get();
  const TOKENS = snapshot.data();

  const cart_res = await fetch(
    `${process.env.api_url}carts/${cart_id}/complete?access_token=${TOKENS.access_token}`,
    {
      method: "POST",
      body: JSON.stringify({
        session_id: session_id,
        product_id: product_id,
        quantity: quantity,
        variant_id: variant_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const cart_json = await cart_res.json();

  if (cart_json.code === 200) return res.status(200).json(cart_json.message);
  res.status(400).json(cart_json.causes);
};
