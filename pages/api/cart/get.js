import { firestore } from "../../../util/firebase";

export default async (req, res) => {
  const { session_id } = req.query;
  if (!session_id) return res.status(400).send("Param 'cart_id' required");

  const DOC = firestore().doc("auth/tokens");
  const snapshot = await DOC.get();
  const TOKENS = snapshot.data();

  const cart_res = await fetch(
    `${process.env.api_url}carts/${session_id}/complete?access_token=${TOKENS.access_token}`
  );
  const cart_json = await cart_res.json();

  res.status(200).json(cart_json.Cart);
};
