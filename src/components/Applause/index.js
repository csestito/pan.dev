import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import HandsOutline from "./assets/hands-outline.svg";
import Hands from "./assets/hands.svg";
import Spark from "./assets/spark.svg";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  increment,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { useLocation } from "@docusaurus/router";
import "./styles.css";

const BUBBLE_THRESHOLD = 1000;
const CLICK_THRESHOLD = 250;
const APPLAUSE_MAX = 100000;
const INITIAL_COUNT = 0;
const COLLECTION_ID = "_feedback_";

const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_APIKEY,
  projectId: "pan-dev-f1b58",
};

function ApplauseButton() {
  const currentRoute = useLocation();
  const docId = Buffer.from(currentRoute.pathname).toString("base64");
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const docRef = doc(db, COLLECTION_ID, docId);

  let bubbleTimer = useRef(null);
  let clickTimer = useRef(null);
  const sparkTilt = Math.random() < 0.5 ? "left" : "right";

  const [applause, setTotalApplause] = useState(0);
  const [active, setIsActive] = useState(false);
  const [clicked, setIsClicked] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const incrementClaps = () => {
    return setDoc(
      docRef,
      {
        claps: increment(1),
        path: currentRoute.pathname,
      },
      { merge: true }
    );
  };

  const handleClick = () => {
    setIsActive(true);
    setIsClicked(true);
    setHasInteracted(true);
    setTotalApplause((prevState) => prevState + 1);
    incrementClaps();
  };

  useEffect(() => {
    signInAnonymously(auth)
      .then(() => {
        console.log(auth);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
    try {
      getDoc(docRef).then((doc) => {
        if (doc.exists()) {
          return setTotalApplause(doc.get("claps"));
        } else {
          return setTotalApplause(0);
        }
      });
    } catch (err) {
      console.error(
        `Error while fetching feedback for doc at '${currentRoute.pathname}':`,
        err
      );
      return setTotalApplause(0);
    }
  }, []);

  useEffect(() => {
    if (active) {
      bubbleTimer.current = setTimeout(
        () => setIsActive(false),
        BUBBLE_THRESHOLD
      );
      clickTimer.current = setTimeout(
        () => setIsClicked(false),
        CLICK_THRESHOLD
      );
    }

    return () => {
      clearTimeout(bubbleTimer.current);
      clearTimeout(clickTimer.current);
    };
  }, [applause, active]);

  if (applause >= 0) {
    return (
      <div className="applause-container">
        <button
          type="button"
          className={clsx("applause-button", {
            active,
            inactive: !active,
            clicked,
            interacted: hasInteracted,
          })}
          onClick={handleClick}
          disabled={applause >= APPLAUSE_MAX}
        >
          {hasInteracted ? (
            <Hands className="hands" />
          ) : (
            <HandsOutline className="hands" />
          )}
          <div className={clsx("spark-container", sparkTilt)}>
            <Spark className="spark" />
          </div>
          <span className="bubble">{`+${applause}`}</span>
          <span className="counter">{applause + INITIAL_COUNT}</span>
        </button>
        <p>Helpful? Show some ❤️</p>
        <hr></hr>
      </div>
    );
  }
  return (
    <div className="applause-container">
      <p>Helpful? Show some ❤️</p>
      <hr></hr>
    </div>
  );
}

export default ApplauseButton;
