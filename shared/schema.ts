import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  githubUrl: text("github_url").notNull(),
  imageUrl: text("image_url").notNull(),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  company: text("company").notNull(),
  role: text("role").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  githubUrl: text("github_url"),
  dateRange: text("date_range"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });
export const insertExperienceSchema = createInsertSchema(experiences).omit({ id: true });

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
