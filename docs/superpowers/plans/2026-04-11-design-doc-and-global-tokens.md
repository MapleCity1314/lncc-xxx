# Design Doc And Global Tokens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the root `DESIGN.md` to English and align global Tailwind v4 tokens in `app/globals.css` with the documented visual system.

**Architecture:** Keep the existing UI language intact and restrict implementation to documentation plus root-level design tokens. Do not redesign components in this pass; provide semantic color and surface tokens that existing and future components can consume.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript

---

### Task 1: Rewrite The Design Authority In English

**Files:**
- Modify: `DESIGN.md`

- [ ] Replace the Chinese prose with English while preserving the approved strategy: stronger homepage hero, quieter interior pages, blue-gray academic technology palette.
- [ ] Keep the same section order required by the presto-design design-spec workflow.
- [ ] Make sure component guidance still covers header, hero, footer, buttons, inputs, tags, lists, and data highlights.

### Task 2: Align Tailwind v4 Global Tokens

**Files:**
- Modify: `app/globals.css`

- [ ] Keep the existing base palette tokens that current components may already depend on.
- [ ] Add semantic tokens for background, surface, text, border, muted text, accent, and dark section usage so the design doc has direct token counterparts.
- [ ] Preserve existing layout variables such as `--header-height`, `--page-gutter`, `--content-max-width`, `--section-space`, and `--hero-min-height`.
- [ ] Update `body` to use the semantic background and foreground tokens instead of raw palette tokens.

### Task 3: Verify The Change

**Files:**
- Verify: `DESIGN.md`
- Verify: `app/globals.css`

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Confirm there are no regressions introduced by the global token rename strategy
