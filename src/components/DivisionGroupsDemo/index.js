"use client";

import Spinner from "../Spinner";
import dynamic from "next/dynamic";

const DivisionGroupsDemo = dynamic(() => import("./DivisionGroupsDemo"), {
  loading: Spinner,
});

export default DivisionGroupsDemo;
