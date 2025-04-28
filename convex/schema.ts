import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  quotes: defineTable({
    text: v.string(),
    author: v.string(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
