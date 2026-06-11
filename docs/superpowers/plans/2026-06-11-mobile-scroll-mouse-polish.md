# Mobile, Scroll and Mouse Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the landing page fit cleanly on mobile, add scroll-based reveal animations for text and sections, and upgrade hover/mouse feedback with a more premium glow treatment.

**Architecture:** Keep the existing single-page React structure and apply the improvements in two places only: `src/App.jsx` for reusable reveal behavior and section wrappers, and `src/index.css` for responsive safety, animation states, and interactive styling. The reveal effect will use one `IntersectionObserver`-driven wrapper so each section can animate in and out consistently without duplicating logic.

**Tech Stack:** React 19, Vite, Tailwind CSS 4, standard browser `IntersectionObserver`, CSS transitions and transforms.

---

### Task 1: Add reusable reveal behavior in the app shell

**Files:**
- Modify: `src/App.jsx`

- [ ] **Step 1: Add the reusable reveal wrapper and observer hookup**

```jsx
import { useEffect, useRef, useState } from "react";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? "visible" : "hidden"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal-block ${className}`}
    >
      {children}
    </div>
  );
}
```

- [ ] **Step 2: Wrap each major section and major text block with `Reveal`**

```jsx
<Reveal>
  <section className="...">...</section>
</Reveal>

<Reveal delay={80}>
  <SectionTitle ... />
</Reveal>
```

- [ ] **Step 3: Run the app and verify the sections still render in the same order**

Run: `cmd /c npm run build`
Expected: build completes without JSX or hook errors.

- [ ] **Step 4: Commit**

```bash
git add src/App.jsx
git commit -m "feat: add reveal wrappers"
```

### Task 2: Tighten mobile layout and interactive styling

**Files:**
- Modify: `src/index.css`
- Modify: `src/App.jsx`

- [ ] **Step 1: Add mobile-safe global rules and reveal/hover styles**

```css
html,
body,
#root {
  width: 100%;
  overflow-x: clip;
}

.reveal-block {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 420ms ease,
    transform 420ms ease,
    filter 420ms ease;
  will-change: opacity, transform, filter;
}

.reveal-block[data-reveal="visible"] {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.reveal-block[data-reveal="hidden"] {
  opacity: 0;
  transform: translateY(18px);
  filter: blur(2px);
}

.interactive-glow {
  transition:
    transform 220ms ease,
    box-shadow 220ms ease,
    border-color 220ms ease,
    background-color 220ms ease;
}

.interactive-glow:hover,
.interactive-glow:focus-visible {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(255, 209, 42, 0.22),
    0 18px 50px rgba(0, 0, 0, 0.38),
    0 0 28px rgba(25, 133, 255, 0.18);
}

@media (max-width: 640px) {
  .title-display {
    letter-spacing: 0.01em;
  }
}
```

- [ ] **Step 2: Reduce horizontal pressure on small screens**

```jsx
<main id="inicio" className="mx-auto max-w-[1400px] overflow-x-clip px-4 py-8 sm:px-6 lg:px-8">
```

```jsx
<h1 className="title-display max-w-4xl text-4xl font-extrabold uppercase leading-[0.95] tracking-[0.03em] sm:text-5xl xl:text-[4.95rem]">
```

```jsx
<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
```

- [ ] **Step 3: Add premium hover treatment to buttons and cards**

```jsx
className="glass-card glow-border interactive-glow ..."
```

- [ ] **Step 4: Run a mobile build and inspect the page at narrow width**

Run: `cmd /c npm run build`
Expected: build completes cleanly and the page no longer overflows on small screens.

- [ ] **Step 5: Commit**

```bash
git add src/App.jsx src/index.css
git commit -m "fix: improve mobile motion and hover polish"
```

### Task 3: Verify and push

**Files:**
- Modify: none

- [ ] **Step 1: Open the local site in a mobile-sized viewport and confirm no horizontal scroll**
- [ ] **Step 2: Check that sections fade in and out as they enter and leave the viewport**
- [ ] **Step 3: Push the branch to GitHub so Vercel redeploys**

```bash
git push -u origin master
```

- [ ] **Step 4: Confirm the branch is clean and synced**

Run: `git status --short`
Expected: no output.
