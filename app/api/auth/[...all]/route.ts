"use strict";
import { auth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);



// time 1:31

//  "terminal.external.windowsExec": "\"C:\\Users\\Donald Stewart\\AppData\\Local\\Programs\\Hyper\\Hyper.exe\"",