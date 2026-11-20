# Virginia Works — revised P4 prototype (partial revision)

Static site derived from the preserved ICA8 baseline (repo `kusami932/vawc-prototype`, commit `4c66e53c437a87f4bd3e850cc4f3005cd7bbfecb`). No build step, no backend. All organizations, programs and vacancies are fictional demonstration data.

**Scope:** this export implements a subset of the P4 brief. See FEEDBACK-IMPLEMENTATION.md for what is done, partial, and not done. It is not a complete implementation of the brief.

## Preview locally
`python3 -m http.server 8000` in this folder, then open http://localhost:8000/ (opening index.html directly also works).

## Deploy to GitHub Pages (separate repo or branch; do not overwrite the baseline)
1. Create a new repository (or a new branch) and add every file in this folder (index.html at the root; `.nojekyll` included).
2. Settings → Pages → deploy from the branch root.
3. Open the Pages URL and work through VALIDATION.md's manual steps.

Saved state uses localStorage key `vawc-p4-revised-v1`, separate from the baseline's `vawc-p4-v1`.
Evaluation materials (review.html, observation CSV) were left out of this bundle; they remain in the baseline repo.

## AI-assistance record (for the P4 report)
Claude (Anthropic) inspected the supplied baseline ZIP (hashes matched baseline-manifest.json), applied the targeted patches listed in CHANGELOG.md, and ran the smoke test in tests/smoke-test.js. Assumptions: HE/INSTRUCTOR/AUDIT labels are tracking labels only; occupation→program links in data.js are demonstration relationships authored for this prototype; the uploaded comparison document (P4_Original_ICA8_Comparison.docx) was NOT read in this pass, so no original-site claims are made.
