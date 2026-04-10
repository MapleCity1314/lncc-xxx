# Header Design Spec

## Context

This spec defines the global header for the LNCC site during the `P0-03` design phase.

Constraints already confirmed:

- Visual direction: modern information-engineering feel
- Naming for new files: `aaa-bbb` kebab-case
- Brand layout: `logo.png` on the left
- Desktop nav items:
  - 首页
  - 本系概况
  - 专业设置
  - 师资队伍
  - 教研科研
  - 实训基地
  - 警士直招
  - 校企合作
  - 招生就业
  - 校友会
- Search is icon-only
- Mobile nav uses a hamburger button
- Hamburger opens a full-screen overlay menu
- Header background is transparent with a subtle black downward gradient

## Goals

- Make the site feel more contemporary than a conventional government-style school site.
- Preserve the credibility and order expected from an academic department website.
- Keep the Server/Client boundary minimal and aligned with Next.js 16 App Router guidance.
- Ensure the header works across image-heavy hero sections and normal content pages.

## Recommended Direction

Use a transparent, floating header with a soft black gradient wash behind the navigation.

This direction fits the project because:

- it supports a strong homepage hero without boxing the navigation into a heavy white bar
- it reads as modern and technical without looking like a startup landing page
- it allows the mobile full-screen menu to feel like a natural extension of the same system

## Information Architecture

### Brand block

Left side contains:

- `/image/logo/logo.png`
- Chinese title: `信息工程系`
- Secondary line: `Information Engineering Department`

The logo remains the primary visual anchor. The text block helps the brand still read clearly when the logo is small on narrower screens.

### Desktop navigation

Right side contains ten first-level text links plus one icon-only search trigger.

Text links are kept on one line at desktop widths. Search is visually separated as a small icon button at the far right so it does not compete with the primary IA.

### Mobile navigation

Mobile header shows:

- left: brand block
- right: search icon + hamburger button

Opening the hamburger reveals a full-screen overlay menu with vertically stacked navigation items.

## Visual Specification

### Base state

- Background: transparent
- Overlay treatment: subtle top-to-bottom black gradient
- No hard bottom border in the default hero state
- Text color: soft white, not pure white
- Emphasis color: project primary blue token

Suggested visual treatment:

- gradient start around `rgba(0, 0, 0, 0.28)`
- gradient end around `rgba(0, 0, 0, 0)`

The gradient should extend slightly beyond the header height so text remains readable on high-contrast banners.

### Layout rhythm

- Desktop height: approximately `76px` to `84px`
- Mobile height: approximately `68px` to `72px`
- Brand block is visually wider than any single nav item
- Navigation spacing stays compact and disciplined rather than airy

### Typography

- Brand title: stronger weight than the rest of the header
- Brand subtitle: smaller, lower-contrast
- Nav labels: stable, compact, easy to scan
- Avoid oversized menu text on desktop

### Link states

- Default: soft white
- Hover: brighter white or slightly blue-tinted white
- Active: brighter text plus a thin blue underline

The active state should feel precise, not button-like. Do not use filled pills or large background tabs.

### Search trigger

- Icon only
- Small hit target with restrained circular or rounded-square treatment
- Hover can slightly brighten the icon and background
- It must remain visually secondary to the nav links

## Scroll Behavior

The header should support two states.

### Hero state

Used at the top of pages with large visual backgrounds:

- transparent header
- subtle black gradient
- light text

### Settled state

Used after scrolling into standard page content:

- darker translucent backdrop or dark glass treatment
- slightly stronger separation from content
- preserve the same layout and hierarchy

Reason:

Pure transparency works well over banners but becomes weak over white or light content sections. The settled state keeps readability without changing the IA or the general personality.

## Interaction Specification

### Desktop

- Hover transitions should be light and quick
- No exaggerated motion
- Search trigger is clickable but does not need to open a full search experience in `P0-03`

### Mobile overlay

- Hamburger opens a full-screen overlay, not a side drawer
- Overlay background is dark blue-black or black with opacity
- Menu items are vertically stacked with large tap targets
- Include a close button in the overlay header
- Allow closing by close button and overlay dismissal action

If implemented later, `Escape` support is desirable, but this spec does not require search functionality itself in `P0-03`.

## Component Architecture

Use small files with `aaa-bbb` naming.

Recommended files:

- `components/header.tsx`
- `components/header-nav.tsx`
- `components/mobile-menu.tsx`
- `components/header-links.ts`

### Responsibilities

`header.tsx`

- Server Component
- owns overall structure
- renders brand block
- mounts desktop and mobile navigation subparts

`header-nav.tsx`

- Client Component
- owns desktop nav rendering
- uses `usePathname()` for active state

`mobile-menu.tsx`

- Client Component
- owns hamburger toggle
- owns full-screen overlay state and rendering

`header-links.ts`

- plain data module
- exports the shared nav configuration

This keeps the client boundary narrow and avoids turning the full header into a client bundle unnecessarily.

## Next.js 16 Alignment

- Keep the top-level header as a Server Component by default.
- Put `usePathname()` only in the smallest client entry that needs active-link logic.
- Put mobile open/close state only in the overlay controller component.
- Avoid adding client-only logic to the logo or static brand block.

This follows Next.js 16 guidance to minimize the `'use client'` boundary and reduce shipped JavaScript.

## Accessibility Requirements

- Brand logo must have meaningful `alt`
- Search icon button must have an accessible label
- Hamburger button must expose an accessible label and expanded state
- Overlay menu items must be keyboard reachable
- Contrast must remain readable over banners and over content after scroll state change

## Non-Goals For This Phase

- No full search results feature
- No mega-menu
- No second-level navigation
- No motion-heavy choreography
- No redesign of the whole page shell yet

## Implementation Notes

- The transparent gradient header should be planned together with `P0-03` tokens in `app/globals.css`
- The settled state can be implemented later with a scroll-aware client wrapper if needed
- If `P0-04` takes ownership of the full layout shell, this spec remains the source of truth for header behavior and styling

## Acceptance Snapshot

The design should be considered correctly implemented when:

- logo sits on the left and reads clearly over image backgrounds
- desktop right side shows the ten requested nav labels plus icon-only search
- mobile uses a hamburger button that opens a full-screen overlay
- default header remains transparent with a subtle black downward gradient
- active nav item is identifiable without becoming visually heavy
- Server/Client boundary stays minimal
