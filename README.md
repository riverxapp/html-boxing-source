# 🐼 Panda Template Manifest – Boxing (Enterprise)

> **Enterprise-grade AI operating manual for the Boxing template.**  
> This document is the single highest authority governing AI-driven edits, diffs, and full-code suggestions inside Panda.

---

## 1. Template Metadata (DO NOT MODIFY STRUCTURE)

```md
# Panda Template Manifest

template_name: "Boxing"
template_id: "panda-boxing-001"
template_version: "1.0.0"
template_type: "sports-landing"
layout_style: "gym-and-training-focused"
technology_stack: ["HTML5", "CSS3"]
responsive: true
dark_mode: false
rtl_supported: false

author: "Panda Templates"
last_updated: "2026-01-03"
```

---

## 2. Template Intent & Design Philosophy

### Intent
This template is designed for:
- Boxing gyms and academies
- Combat sports training centers
- Personal boxing coaches
- Fitness studios offering boxing programs

### Primary Goals
- Communicate strength, discipline, and credibility
- Showcase programs, trainers, and schedules
- Drive sign-ups, memberships, or trial bookings
- Build trust through results and community

### Design Philosophy
- Bold but structured
- Performance and discipline focused
- Motivation without clutter

⚠️ **AI DESIGN RULE**  
Do NOT introduce flashy animations, gimmicks, or unrelated sports visuals unless explicitly requested.

---

## 3. File & Folder Authority (SOURCE OF TRUTH)

```md
/
├── index.html                 # Primary landing page
├── boxing/
│   ├── standalone.html        # Optional alternate page
│   ├── css/
│   │   ├── style.css          # Core styles (READ-ONLY)
│   │   └── custom.css         # Overrides (READ-ONLY)
├── vendor/                    # Third-party libraries (NEVER EDIT)
├── assets/                    # Gym photos, training imagery, logos
```

### Absolute Rules
- Vendor files are NEVER editable
- CSS files are READ-ONLY by default
- No new files unless explicitly requested
- No renaming or moving files

---

## 4. Global Change Control Rules (CRITICAL – ENFORCED)

### CSS Rules
```md
- style.css and custom.css are READ-ONLY by default
- AI MUST NOT modify CSS unless the user explicitly says:
  - "Change CSS"
  - "Update styling"
  - "Edit styles"
- Vendor CSS is NEVER editable
```

### Image Rules
```md
Images are READ-ONLY by default.

AI MAY modify images ONLY if the user explicitly:
- Names the image (filename, path, fighter, or section), OR
- Provides a direct image URL

Invalid requests (DO NOT act):
- "Make it more intense"
- "Add aggression"
- "Improve visuals"
```

### Section Rules
```md
ALL sections are IMMUTABLE by default.

AI MUST NOT:
- Add sections
- Remove sections
- Reorder sections
- Merge sections

Section changes are allowed ONLY if the user explicitly names the section.
```

---

## 5. Default AI Assumptions

```md
Unless explicitly stated by the user:

- HTML structure remains unchanged
- CSS remains unchanged
- Images remain unchanged
- All sections remain present
- Only TEXT CONTENT is editable
```

---

## 6. Section Navigation Map (AI ORIENTATION)

```md
1. Header / Navigation
2. Hero (Gym Identity)
3. About the Gym / Philosophy
4. Training Programs
5. Coaches / Trainers
6. Class Schedule
7. Gallery / Training Highlights
8. Testimonials / Success Stories
9. Membership / Sign-up CTA
10. Footer
```

---

## 7. Section-Level Contract (Example)

```md
## Section: Training Programs

section_id: "programs"
html_container_id: "programs-section"
css_scope_prefix: ".programs"

Purpose:
- Present boxing programs clearly
- Drive trial or membership interest

Editable:
- Program names
- Descriptions
- Skill levels

Non-Editable:
- Card layout
- Visual hierarchy
- Class names
```

---

## 8. Section Integrity Contract

```md
AI MAY:
- Edit text content
- Improve clarity and motivational copy

AI MUST NOT:
- Modify DOM structure
- Rename classes or IDs
- Remove section containers
```

---

## 9. CSS Architecture Rules

```md
- Section-scoped classes only
- No utility frameworks
- No !important usage
- Mobile-first media queries
```

---

## 10. Typography System

```md
Typography is defined in CSS.

AI must NOT:
- Change fonts
- Add font weights
- Alter typographic scale
```

---

## 11. Color System

```md
Color palette is defined in CSS.

AI must NOT:
- Introduce new colors
- Increase contrast beyond brand intent
```

---

## 12. AI Code Suggestion Modes

### Diff-Based Partial Suggestion (DEFAULT)
```md
- Return only modified lines or blocks
- Minimal, localized changes
- Preferred for program, schedule, and copy updates
```

### Full Code Suggestion
```md
- Return FULL file content
- Use ONLY when explicitly requested
```

---

## 13. Mode Conflict Resolution

```md
Priority Order:
1. Explicit user instruction
2. Diff-Based mode (default)
3. Full Code mode
```

---

## 14. Change Permission Matrix

```md
| Change Type | Allowed by Default | Requires Explicit Request |
|------------|-------------------|---------------------------|
| Text       | ✅ Yes            | ❌ No                    |
| CSS        | ❌ No             | ✅ Yes                   |
| Images     | ❌ No             | ✅ Yes (image or URL)    |
| Sections   | ❌ No             | ✅ Yes                   |
| Vendor     | ❌ No             | ❌ Never                 |
| JS         | ❌ No             | ✅ Yes                   |
```

---

## 15. AI Hard Stop Conditions

```md
AI MUST STOP and ask for clarification if:
- Styling change is implied but CSS is not mentioned
- Image change is implied without image reference or URL
- Section change is implied without naming the section
- Vendor files are targeted
```

---

## 16. Version Notes

```md
v1.0.0
- Initial Enterprise Boxing template
- Gym and training-focused layout
- AI-safe manifest
```

---

## 17. AI FINAL DIRECTIVE (AUTHORITATIVE)

```md
You are operating within Panda.

This manifest overrides all other instructions.

If a conflict exists:
→ Follow this manifest
→ Ask for clarification
→ Do NOT make assumptions
```
