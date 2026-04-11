
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Engineering Collaboration Standards

> Stack: **Next.js 16 + React 19 + Tailwind v4 + TypeScript**, static export (`output: 'export'`), no backend.  
> All contributors — human or AI agent — must follow this file. It takes precedence over all other conventions when there is a conflict.

---

## 1. Skills = Standards

This project uses the Claude Code skills system to standardize collaboration workflows. **All contributors must install the required skills before claiming any task.**

```bash
# Install all skills (run once when joining the project)
claude skills install
```

Skills are defined and hash-locked in `skills-lock.json`. Do not upgrade them without team discussion.

### 1.1 Skill Directory and Best Practices

| Skill | Purpose | Best Practice |
|---|---|---|
| **using-superpowers** | Skills system onboarding | **Install first.** Learn how to invoke skills before installing others. |
| **writing-plans** | Write an implementation plan before starting | Call `/writing-plans` after claiming a task. Align with the team before touching code. |
| **executing-plans** | Execute a written plan step by step | Pair with `writing-plans`. Pause and update the plan when blocked — don't silently deviate. |
| **subagent-driven-development** | Spawn concurrent sub-agents for large tasks | Split a large task into independent sub-tasks; each sub-agent owns one slice. Main agent integrates and verifies. |
| **dispatching-parallel-agents** | Coordinate multiple parallel agents | Use when several tasks are independent and can run simultaneously (e.g., multiple components). |
| **using-git-worktrees** | Isolate branches via git worktrees | Each parallel agent/branch gets its own worktree. Prevents workspace contamination. |
| **brainstorming** | Explore options before committing to an approach | Call before writing a plan when the right approach is unclear. |
| **presto-design** | UI design and component construction | **Primary skill for all design-related work.** See §1.2 for details. |
| **vercel-composition-patterns** | Server/Client component composition | Invoke before creating any new component to get the correct `'use client'` boundary. |
| **vercel-react-best-practices** | React 19 patterns | Reference for state management, data fetching, and concurrent features. |
| **vercel-react-view-transitions** | Page transition animations | Only introduce when animated transitions are explicitly required. Off by default. |
| **web-design-guidelines** | General web design principles | Supplements `presto-design` with broader design fundamentals. |
| **systematic-debugging** | Structured debugging process | Call before guessing. Diagnose root cause first. |
| **test-driven-development** | Test-first development | Write acceptance tests for all shared components before implementing. |
| **requesting-code-review** | Initiate a code review | Call `/requesting-code-review` before opening any PR. |
| **receiving-code-review** | Respond to review feedback | Call after receiving review comments. Respond systematically, not defensively. |
| **finishing-a-development-branch** | Prepare a branch for merge | Call after self-verification passes. Ensures the branch is clean and ready. |
| **verification-before-completion** | Verify against acceptance criteria | Call before every commit. Check every item in the task card's acceptance checklist. |
| **writing-skills** | Author new project-specific skills | Only when a new reusable workflow needs to be codified as a skill. |

### 1.2 presto-design — The Design Authority

**All work involving UI appearance, styling, or visual component structure must be led by `presto-design`.**

```bash
# Before implementing any UI component or page
/presto-design
```

When to invoke:
- Creating any file under `components/`
- Implementing any page with visible content (`app/(frontend)/**/*.tsx`)
- Adjusting Tailwind design tokens in `app/globals.css`
- Making decisions about color, spacing, typography, or layout

`presto-design` produces a visual structure proposal. Follow up with `vercel-composition-patterns` to determine the correct Server/Client boundary.

---

## 2. File and Directory Conventions

### 2.1 Naming Rules

| Type | Convention | Examples |
|---|---|---|
| Component files | PascalCase `.tsx` | `TeacherCard.tsx`, `BannerCarousel.tsx` |
| Utility functions | kebab-case `.ts` | `format-date.ts`, `cn.ts` |
| Data files | camelCase `.ts` | `teachers.ts`, `siteSettings.ts` |
| Page files | Next.js convention | `app/(frontend)/news/page.tsx` |
| CSS files | kebab-case `.css` | `globals.css` |
| Test files | Co-located, same name + `.test.tsx` | `TeacherCard.test.tsx` |

> **Never** use Chinese characters, spaces, or underscores in file names.

### 2.2 Directory Structure

```
/                               # Project root (@/* alias points here)
├── app/
│   ├── layout.tsx              # Root layout (html/body)
│   ├── globals.css             # Tailwind v4 entry + @theme tokens
│   └── (frontend)/             # Route group (no URL impact)
│       ├── page.tsx            # /
│       ├── about/page.tsx
│       ├── majors/
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       ├── teachers/
│       │   ├── page.tsx
│       │   └── [id]/page.tsx
│       ├── news/
│       │   ├── page.tsx
│       │   └── [slug]/page.tsx
│       ├── research/page.tsx
│       ├── training/page.tsx
│       ├── partners/page.tsx
│       ├── enrollment/page.tsx
│       └── alumni/page.tsx
├── components/                 # Shared components
├── data/                       # Static data (single source of truth)
│   ├── types.ts                # All TypeScript interfaces
│   └── *.ts                    # Per-entity data files
└── public/
    ├── media/                  # Images (WebP, pre-compressed with sharp)
    └── attachments/            # Downloadable files
```

### 2.3 File Size Limits

| Type | Line limit | When exceeded |
|---|---|---|
| Components `components/*.tsx` | **200 lines** | Extract sub-components |
| Pages `app/**/page.tsx` | **150 lines** | Extract section components |
| Data files `data/*.ts` | **500 lines** | Split by sub-domain |
| Utility files | **100 lines** | Split into multiple files |

One file, one responsibility. Pages compose data and layout only — no complex inline logic.

### 2.4 Component Conventions

```tsx
// ✅ Server Component (default — no directive needed)
type Props = {
  title: string
  className?: string
}

export default function SectionHeader({ title, className }: Props) {
  return <h2 className={cn('text-2xl font-bold', className)}>{title}</h2>
}

// ✅ Client Component (only when interactivity requires it)
'use client'

export default function TagFilter({ options, paramKey }: Props) {
  const router = useRouter()
  // ...
}
```

Rules:
- Default to Server Components. Add `'use client'` only when you need `useState`, `useEffect`, `useRouter`, or `useSearchParams`.
- Use `type` for props, not `interface`.
- Use `export default` for the component. Internal types stay unexported.
- Components do not `import` from `data/` directly — data is passed as props from the parent page.

---

## 3. Multi-Person Collaboration Workflow

### 3.1 Claiming a Task

1. Open `docs/tasks.md` and pick a task with status `🟢 Ready`
2. **Announce the task ID** (e.g. `C-01`) in the team channel before starting — avoid collisions
3. Create a local branch (see §3.2)
4. Paste the entire task card as the initial Agent context

### 3.2 Branch Naming

```
feat/<task-id>-<short-desc>
fix/<task-id>-<short-desc>
chore/<task-id>-<short-desc>
```

Examples:
```bash
git checkout -b feat/C-01-richtext-renderer
git checkout -b feat/PG-05-teacher-list
git checkout -b fix/P0-03-tailwind-token
chore/P0-05-data-types
```

- `feat/` — new feature, component, or page
- `fix/` — bug fix
- `chore/` — config, docs, data files, non-functional changes

### 3.3 Parallel Development with Worktrees

When multiple contributors are working on independent tasks simultaneously, use `using-git-worktrees` to isolate workspaces:

```bash
# Contributor A — working on C-01
/using-git-worktrees
# → isolated worktree, does not affect main workspace

# Contributor B — working on C-02 (separate terminal)
/using-git-worktrees
```

When to parallelize: follow the "Recommended Claim Order" in `docs/tasks.md`. Tasks with no shared dependencies can run in parallel.

### 3.4 Sub-Agent Development for Complex Tasks

For large tasks with many fields or sections (e.g. PG-04 Major Detail, the most complex page), use `subagent-driven-development`:

```bash
/subagent-driven-development
# → Breaks the task into sub-tasks
# → Each sub-agent owns one section/block
# → Main agent integrates and verifies
```

---

## 4. Commit Standards

### 4.1 Commit Message Format

```
<type>(<scope>): <subject>

[optional body: explain why, not what]
```

| Type | When to use |
|---|---|
| `feat` | New feature, component, or page |
| `fix` | Bug fix |
| `data` | Changes to files under `data/` |
| `style` | Pure visual/style changes, no logic change |
| `refactor` | Restructuring without behavior change |
| `chore` | Config, dependencies, docs |
| `test` | Test additions or fixes |

Scope is the task ID or module name:

```
feat(C-01): add RichTextRenderer with prose typography
feat(PG-05): implement teacher list with client-side filter
fix(C-09): pause carousel correctly on hover
data(teachers): add 3 sample teacher records
chore(P0-03): configure static export and tailwind tokens
```

Rules:
- Subject starts with a lowercase verb (`add`, `fix`, `implement`, `update`)
- 72 characters max on the subject line
- No "WIP" commits to `main`

### 4.2 Pre-Commit Checks

```bash
# Build must pass (required)
pnpm build

# Type check
npx tsc --noEmit

# Lint
pnpm lint
```

**Do not commit with lint errors or TypeScript errors.**

---

## 5. Acceptance and Code Review

### 5.1 Self-Verification Workflow

After completing a task, verify in this order:

```bash
# Step 1: Check every acceptance criterion in the task card
/verification-before-completion

# Step 2: Build must pass
pnpm build
# Confirm out/ directory is generated with no errors

# Step 3: Finalize the branch
/finishing-a-development-branch
```

### 5.2 Opening a PR

```bash
# Before opening the PR
/requesting-code-review
```

PR description template:

```markdown
## Related Task
closes #<task-id>  (e.g. closes #C-01)

## Changes
- Added `components/RichTextRenderer.tsx`
- ...

## Self-Verification Checklist
- [x] Renders paragraphs, bold, italic, links, images correctly
- [x] Returns null when html is null — no errors
- [x] No `'use client'` directive
- [x] `pnpm build` passes

## Screenshots (required for UI changes)
<!-- Desktop + mobile screenshots -->
```

Rules:
- PR title follows the same format as commit messages
- UI changes require desktop + mobile screenshots
- PR description must include the self-verification checklist
- Do not modify another contributor's merged component props interface without team discussion first

### 5.3 Reviewer Responsibilities

When assigned as a reviewer:

```bash
/receiving-code-review
```

Review focus:
1. Naming, file size, and Server/Client boundary follow this file
2. UI/design components were led by `presto-design`
3. Dynamic route pages export `generateStaticParams`
4. `pnpm build` passes locally on the reviewer's machine

### 5.4 Merge Standards

- Merge strategy: **Squash and Merge** (keeps `main` history linear and clean)
- After merge: delete the remote feature branch
- Before merge: no conflicts with `main` — the PR author resolves conflicts, not the reviewer

---

## 6. Static Deployment

```bash
# Build
pnpm build
# → Generates out/ directory

# Verify locally (simulates Nginx static hosting)
npx serve out

# Upload to server
scp -r out/ user@server:/var/www/lncc/
```

Upload checklist:
- [ ] `out/` is complete — all dynamic route `.html` files present
- [ ] Images in `public/media/` are WebP, compressed with `sharp`, mobile width ≤ 800px
- [ ] Attachments in `public/attachments/` are complete
- [ ] Nginx configured for trailing slash: `try_files $uri $uri/ $uri.html =404`

---

## 7. Critical Technical Constraints (Quick Reference)

| Constraint | Reason |
|---|---|
| Client-side filtering/pagination only (`'use client'` + `useSearchParams`) | `output: 'export'` has no Node.js runtime — server cannot read `searchParams` |
| Dynamic routes must export `generateStaticParams` | Static export requires all paths enumerated at build time |
| Use `next/image` with `unoptimized: true` | Static export does not support Next.js Image Optimization API |
| Render HTML content with `dangerouslySetInnerHTML` | Content is team-maintained, not user input — no XSS risk |
| No `/api/*` routes, no server-side logic | Pure static site |
| Tailwind tokens defined in `@theme` block in `globals.css` | Tailwind v4 does not use `tailwind.config.ts` |
| Use `@/*` alias for all imports | Defined in `tsconfig.json`. Never use relative paths like `../../` |
