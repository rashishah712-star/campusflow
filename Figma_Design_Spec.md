# CampusFlow — Figma Design Specification

This is the source-of-truth layout specification for the Figma file. Import the accompanying `figma-cover.svg` into Figma, then recreate the frames/components below.

## Frames
1. **Login — 1440×900**: centered 440px card, logo, eyebrow, heading, email/password fields, primary CTA.
2. **Dashboard — 1440×1000**: 72px navigation, hero, three stat cards, two-column task/course panels.
3. **New Task Modal — 1440×1000**: dim overlay + 430px modal with title, datetime, priority, course, CTA.
4. **Mobile Dashboard — 390×844**: stacked stats and single-column content.

## Design tokens
- Font: Inter / system sans
- Background: #F5F6F8
- Surface: #FFFFFF
- Primary: #6758E8
- Text: #17202A
- Muted: #68717E
- Border: #E7E9ED
- Radius: 16px cards, 11px buttons, 9px inputs
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48

## Components
Button / Input / Select / StatCard / TaskRow / CourseRow / Modal / Navigation / Badge.

## UX principle
The interface should answer three questions in under five seconds: **What is due? How urgent is it? What should I do next?**
