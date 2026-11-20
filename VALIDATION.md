# Validation record
## Executed (Node 22, no browser): `node tests/smoke-test.js`
Runs app.js against a stubbed DOM. Checks: 14 routes render expected content; localStorage key is separate; occupation→programs navigation shows the chip and returns exactly the linked programs (O04 → P02, P04); removing the condition changes the draft only; applied summary shows All Virginia (no location substituted); a fresh programs page has no inherited condition; placeholders contain no task examples; data relationships are valid. Also `node --check` on app.js and data.js. This is not a browser test.
## Static inspection only (not executed)
HE-03 footer link removal; HE-04 selection-retention code (C-03) — the stubbed DOM cannot submit forms; HE-05 title button; HE-06 apply-page text; HE-08 text-size control.
## Pending manual verification (browser)
1. Fresh profile: home shows no prefilled values; no evaluation link in the footer.
2. Explore occupations → pick an occupation → Explore training: chip visible, Remove changes draft only, Search programs applies, "Back to occupation profile" works.
3. Find jobs → search → tick two jobs → search again with identical criteria: selections remain. Change criteria so one no longer matches: notice appears.
4. Click a job title: details panel opens; Compare checkbox still works independently; focus ring visible.
5. Open a job → How to apply: method, simulated-destination label, boundary and "No application has been submitted" text; Back to job works.
6. Accessibility dialog: Use larger text / Restore default text size; state text updates.
7. Browser Back/Forward, refresh on a #route, narrow-width layout, GitHub Pages deployment.
## Known limitations
See FEEDBACK-IMPLEMENTATION.md: most of HE-02, HE-07, HE-09, the original-site mapping and the data expansion are not done; the uploaded comparison document was not read.
