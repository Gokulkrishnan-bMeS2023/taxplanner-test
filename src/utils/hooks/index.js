"use client"

import { useContext } from "react";
import { UserContext } from "../context/index";

export const useUserContext = () => useContext(UserContext);