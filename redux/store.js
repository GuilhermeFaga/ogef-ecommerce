import { configureStore } from "@reduxjs/toolkit";
import userReducer, { setVisitorId } from "./userReducer";
import FingerprintJS from "@fingerprintjs/fingerprintjs";
import uiReducer from "./uiReducer";
import { firestore } from "../util/firebase";

const reducer = {
  user: userReducer,
  ui: uiReducer,
};

export const store = configureStore({ reducer: reducer });

async function getVisitorId() {
  if (!process.browser) return;

  const fpPromise = FingerprintJS.load();

  // Get the visitor identifier when you need it.
  const fp = await fpPromise;
  const result = await fp.get();

  // This is the visitor identifier:
  const visitorId = result.visitorId;
  store.dispatch(setVisitorId(visitorId));
}

getVisitorId();
