# Mock Data Structure Design

> Source of truth for content: `mock/output/`
> Constraint source: `docs/`, `AGENTS.md`

## Goal

Convert the crawled Markdown corpus under `mock/output/` into UTF-8 TypeScript mock data organized by business hierarchy instead of raw URL mirroring.

## Scope

- Read `_crawl_index.json` as the crawl manifest.
- Read the corresponding Markdown files under `mock/output/`.
- Derive top-level information architecture from the crawl tree and page text.
- Generate structured TypeScript data under `mock/`.
- Preserve source traceability for every generated record.
- Generate a version note under `version/`.

## Out of Scope

- Rendering UI pages.
- Changing application routing.
- Introducing new npm dependencies.
- Normalizing every article into a bespoke domain model.

## Constraints

- All generated files must be UTF-8 and human-readable.
- No Chinese mojibake is allowed.
- Content source is `mock/output/`; `docs/` only provides engineering and product constraints.
- The generated layout must reflect business sections such as homepage, majors, teachers, research, training, partners, enrollment, and alumni.
- Generated data must remain traceable back to `sourcePath`, `sourceUrl`, and source title.

## Recommended Structure

```text
mock/
  types.ts
  generate-mock-data.mjs
  generate-mock-data.test.mjs
  meta/
    crawlIndex.ts
    navigation.ts
  index/
    overview.ts
    news.ts
    party.ts
    career.ts
    quickLinks.ts
  about/
    overview.ts
  majors/
    landing.ts
    programs.ts
    lab.ts
  teachers/
    landing.ts
    organization.ts
    faculty.ts
    professors.ts
    doctors.ts
  research/
    landing.ts
    teachingProjects.ts
    researchProjects.ts
    papers.ts
    textbooks.ts
    awards.ts
  training/
    landing.ts
    internalBases.ts
    externalBases.ts
  military/
    landing.ts
    onboarding.ts
    study.ts
    training.ts
    life.ts
    camp.ts
    policies.ts
  partners/
    landing.ts
    companies.ts
    updates.ts
  enrollment/
    landing.ts
    employmentServices.ts
    enterpriseVisits.ts
    admissionsLinks.ts
    employmentLinks.ts
  alumni/
    landing.ts
    alumniProfiles.ts
    returnServices.ts
    alumniInfo.ts
  articles/
    homepage.ts
    research.ts
    military.ts
    partners.ts
    enrollment.ts
    alumni.ts
```

## Data Model

- `MockPage`: parsed page-level content with title, slug, body, headings, links, paragraphs, images, and source metadata.
- `MockNavItem`: normalized navigation node from crawl manifest.
- `MockCollection<T>`: named collection with section metadata and records.

## Parsing Strategy

- Extract title from first Markdown heading.
- Extract source URL from the `原始链接` line.
- Treat remaining text as body.
- Derive `headings` from Markdown headings and bold standalone section markers.
- Derive `links` from Markdown link syntax.
- Derive `images` from Markdown image syntax.
- Derive `paragraphs` by splitting non-empty prose blocks and filtering navigation-only noise.

## Grouping Strategy

- Use exact top-level path mapping for landing pages:
  - `index.htm` -> `index/overview.ts`
  - `bxgk.htm` -> `about/overview.ts`
  - `zysz.htm` -> `majors/landing.ts`
  - `szdw.htm` -> `teachers/landing.ts`
  - `jyky.htm` -> `research/landing.ts`
  - `sxjd.htm` -> `training/landing.ts`
  - `jszz.htm` -> `military/landing.ts`
  - `xqhz.htm` -> `partners/landing.ts`
  - `zsjy.htm` -> `enrollment/landing.ts`
  - `xyh.htm` -> `alumni/landing.ts`
- Use subpaths under `zysz/`, `szdw/`, `jyky/`, `sxjd/`, `jszz/`, `xqhz/`, `zsjy/`, `xyh/` for section collections.
- Use `info/<code>/...` mapping to route article pages into grouped article collections.

## Verification

- Red-green test for generator contract.
- Regenerate files from source.
- Run `node --test mock/generate-mock-data.test.mjs`.
- Run `npx tsc --noEmit`.

