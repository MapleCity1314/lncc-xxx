# Section Tree Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every non-home section use the same directory tree behavior as `/majors/`.

**Architecture:** Extend the existing `data/content` tree and `app/(frontend)/_lib/content.ts` route helpers, then route all non-home sections through a shared catch-all section page renderer. Keep `majors` behavior intact while migrating the other sections away from hash-only placeholder pages.

**Tech Stack:** Next.js 16 App Router, React 19 Server Components, TypeScript, Tailwind v4, Vitest, static export.

---

### Task 1: Prove Shared Tree Routing Behavior

**Files:**
- Modify: `app/(frontend)/_lib/content.test.ts`
- Modify: `app/(frontend)/_lib/content.ts`

- [ ] Add tests showing top-level menu state, sibling menu generation, and static params work for a non-`majors` section.
- [ ] Run `pnpm.cmd test app/(frontend)/_lib/content.test.ts` and confirm the new tests fail before implementation.
- [ ] Implement the minimal helper changes in `app/(frontend)/_lib/content.ts`.
- [ ] Re-run the focused test and confirm it passes.

### Task 2: Add Section Trees For Non-Home Sections

**Files:**
- Create: `data/content/sections.ts`
- Modify: `data/content/index.ts`
- Modify: `data/content/types.ts` if optional non-article entries are needed

- [ ] Convert the current non-home section menu items into `SectionContent.categories`.
- [ ] Preserve existing section hero/sidebar/breadcrumb labels.
- [ ] Keep mock-backed items as directory/list data, not fabricated MDX article details.
- [ ] Add tests covering at least one converted section.

### Task 3: Extract Shared Section Page Renderer

**Files:**
- Create: `app/(frontend)/_components/SectionTreePage.tsx`
- Modify: `app/(frontend)/majors/page.tsx`
- Modify: `app/(frontend)/majors/[...slug]/page.tsx`
- Modify: `app/(frontend)/news/page.tsx`
- Modify: `app/(frontend)/news/[slug]/page.tsx`

- [ ] Move the duplicated directory/list/detail rendering from `majors` into `SectionTreePage`.
- [ ] Preserve the special `majors/specializations` sidebar behavior only if still needed after the generic same-level menu logic.
- [ ] Ensure news uses category routes like `/news/announcements` for lists and only article routes for real article details.

### Task 4: Route Remaining Sections Through Catch-All Pages

**Files:**
- Modify/Create route files under `app/(frontend)/about`, `teachers`, `research`, `training`, `partners`, `enrollment`, `alumni`, `police`
- Modify: `app/(frontend)/_lib/metadata.ts`

- [ ] Add catch-all route pages with `generateStaticParams` for each non-home section.
- [ ] Update root section pages to render directory contents through the shared component.
- [ ] Remove hash-only left-menu behavior from these routes.

### Task 5: Verify Static Export

**Files:**
- No production file edits expected

- [ ] Run focused tests.
- [ ] Run lint.
- [ ] Run type check.
- [ ] Run `pnpm.cmd build` and confirm `out/` is generated.
