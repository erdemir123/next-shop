"use client";

import { useAppDispatch } from "@/toolkit/store/hooks";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "@/services/firebase";
import { setUser } from "@/toolkit/features/authSlice";
import { setItems } from "@/toolkit/features/WishListSlice";
import Loading from "./Loading";

function FirebaseProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const subscriptions= [];
  useEffect(() => {
    const authSub = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const userInfo = {
            email: user.email,
            uid: user.uid,
          };
          dispatch(setUser(userInfo));

          const wishlistSub = onSnapshot(
            doc(db, user.uid, "wishlist"),
            (document) => {
              try {
                const items = document?.data().items;
                dispatch(setItems(items));

                const cartSub = onSnapshot(
                  doc(db, user.uid, "cart"),
                  (document) => {
                    try {
                      const items = document?.data().items;
                      dispatch(setItems(items));
                      setIsLoading(false);
                    } catch (error) {
                      setIsLoading(false);
                    }
                  },
                  (error) => {
                    setIsLoading(false);
                  }
                );

                subscriptions.push(cartSub);
              } catch (error) {
                setIsLoading(false);
              }
            },
            (error) => {
              setIsLoading(false);
            }
          );

          subscriptions.push(wishlistSub);
        } else {
          dispatch(setUser(null));
          dispatch(setItems([]));
          dispatch(setItems([]));
          setIsLoading(false);
        }
      },
      (error) => {
        setIsLoading(false);
      }
    );

    subscriptions.push(authSub);

    const unSubscribeAll = () => {
      subscriptions.forEach((sub) => sub());
      subscriptions.length = 0;
    };

    return unSubscribeAll;
  }, []);

  return isLoading ? <Loading /> : <>{children}</>;
}

export default FirebaseProvider;
