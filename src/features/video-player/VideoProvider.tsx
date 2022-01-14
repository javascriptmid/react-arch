import { RefObject } from "react";
import createContextValue from "../createContextValue";

export type VideoRefValue = RefObject<HTMLVideoElement>;

export const [VideoProvider, useVideoValue] =
  createContextValue<VideoRefValue>("VideoProvider");
