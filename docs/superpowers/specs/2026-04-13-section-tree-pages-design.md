# Section Tree Pages Design

## Goal

Unify every non-home top-level section around the same directory tree behavior already used by `/majors/`.

## Confirmed Behavior

- The home page is out of scope.
- Each section page starts as a directory page, not an article page.
- The left sidebar represents the current directory level. When a user opens one top-level section item, the sidebar still shows its sibling items.
- The right content area shows child directories first. If the current directory has no child directories but has content entries, it shows an entry list.
- Article detail content renders only when the user reaches a real `ContentEntry` with article content.
- Sections without real article MDX should not fabricate article pages. They can show directories and lists backed by existing static/mock data until real article content is added.

## Design Direction

Use `majors` as the reference implementation and extract the shared route resolution/rendering into reusable section-tree helpers/components. This keeps the academic site structure information-first, preserves the existing dark sidebar language, and avoids repeated hand-written routing per section.

## Technical Notes

- The site uses Next.js static export, so all dynamic section routes must be enumerated with `generateStaticParams`.
- Use existing `SectionContent`, `ContentCategory`, `ContentEntry`, `SubPageLayout`, `SectionCategoryGrid`, and `SectionEntryList` patterns where possible.
- Keep pages as Server Components unless a specific interaction requires a client boundary.
