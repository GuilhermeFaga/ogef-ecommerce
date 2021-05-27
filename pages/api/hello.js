import { firestore } from "../../util/firebase";

export default async (req, res) => {
  const DOC = firestore().doc("auth/tokens");
  const snapshot = await DOC.get();
  const TOKENS = snapshot.data();

  const post_res = await fetch(
    `${process.env.api_url}carts?access_token=${TOKENS.access_token}`,
    {
      method: "POST",
      mode: "cors",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const res_json = await post_res.json();

  res.status(200).json(res_json);
};
