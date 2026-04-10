# Mock Data Structure Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate UTF-8 TypeScript mock data under `mock/` from the crawled Markdown corpus in `mock/output/`.

**Architecture:** A local Node generator reads the crawl manifest and Markdown sources, parses reusable page metadata, maps files to business collections, and writes typed TypeScript modules. Verification uses a Node test for the generator contract and TypeScript compilation for syntax safety.

**Tech Stack:** Node.js built-ins, TypeScript data files, Next.js repo conventions

---

### Task 1: Write the generator contract test

**Files:**
- Create: `mock/generate-mock-data.test.mjs`

- [ ] **Step 1: Write the failing test**

```js
import test from 'node:test'
import assert from 'node:assert/strict'

const { generateMockData } = await import('./generate-mock-data.mjs')

test('generateMockData returns planned collections and file outputs', async () => {
  const result = await generateMockData({ writeFiles: false })

  assert.ok(result.files.length > 10)
  assert.ok(result.collections.navigation)
  assert.ok(result.collections.indexOverview)
  assert.ok(result.collections.majorPrograms)
})
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node --test mock/generate-mock-data.test.mjs`
Expected: FAIL because `./generate-mock-data.mjs` does not exist yet.

### Task 2: Implement the generator and shared types

**Files:**
- Create: `mock/generate-mock-data.mjs`
- Create: `mock/types.ts`

- [ ] **Step 1: Write minimal implementation**

Implement:
- manifest reader for `mock/output/_crawl_index.json`
- Markdown parser helpers
- section mapping helpers
- writer that returns generated file descriptors and optionally writes files
- shared TS type definitions for generated modules

- [ ] **Step 2: Run test to verify it passes**

Run: `node --test mock/generate-mock-data.test.mjs`
Expected: PASS

### Task 3: Generate the TypeScript mock files

**Files:**
- Create: `mock/meta/*.ts`
- Create: `mock/index/*.ts`
- Create: `mock/about/*.ts`
- Create: `mock/majors/*.ts`
- Create: `mock/teachers/*.ts`
- Create: `mock/research/*.ts`
- Create: `mock/training/*.ts`
- Create: `mock/military/*.ts`
- Create: `mock/partners/*.ts`
- Create: `mock/enrollment/*.ts`
- Create: `mock/alumni/*.ts`
- Create: `mock/articles/*.ts`

- [ ] **Step 1: Run the generator**

Run: `node mock/generate-mock-data.mjs`
Expected: Generated TS files are written under `mock/`.

- [ ] **Step 2: Spot-check output**

Check:
- `mock/meta/navigation.ts`
- `mock/index/overview.ts`
- `mock/majors/programs.ts`
- `mock/research/teachingProjects.ts`

### Task 4: Verify compilation and add version note

**Files:**
- Create: `version/0.1.0.md`

- [ ] **Step 1: Run compilation verification**

Run: `npx tsc --noEmit`
Expected: PASS

- [ ] **Step 2: Write version note**

Document:
- generated mock hierarchy
- parsing and mapping strategy
- verification commands and status

