# Changelog
Baseline: ICA8 snapshot, commit 4c66e53c437a87f4bd3e850cc4f3005cd7bbfecb (files verified against baseline-manifest.json SHA-256).
Source labels: HE = ICA8 evaluator feedback (tracking labels, not P2/P3 Finding IDs); AUDIT = found by reading the baseline source.

| ID | Source | Screen/route | Change |
|---|---|---|---|
| C-01 | HE-01 | #occupations → #programs | "Explore training" now opens the training-programs search with the selected occupation as a visible, removable condition (explicit occupationIds on each program in data.js). Explains programs vs. organizations, links back to the occupation profile, offers a link to organization search. Location is not substituted. Reset also clears it. |
| C-02 | HE-03 | home, forms, footer, about dialog | Removed bold `primary-link` styling from equivalent links; replaced answer-like placeholders with neutral labels; removed the participant-facing "Evaluation materials" link and evaluation files from the bundle; removed the P3 reference from the About text. |
| C-03 | HE-04 (partial) | #jobs → #results | Re-running unchanged criteria keeps selected jobs; when criteria change, only selections that no longer match are removed and a visible notice says so. |
| C-04 | HE-05 (partial) | results list | Job title is now a button that opens details (same action as "View job details"). Compare checkbox unchanged. |
| C-05 | HE-06 (partial) | #job, #apply | "Apply for this job" → "How to apply"; apply page shows application method, separates the employer's general website from the application page, states the prototype boundary, and labels the destination as simulated; external button relabelled honestly. |
| C-06 | HE-08 (partial) | Accessibility dialog | Text-size control shows current state (Default/Larger) with an explicit "Restore default text size" button. |
| C-07 | AUDIT | results sort | The baseline's "Relevance" sort does no relevance ranking (it keeps data order). NOT fixed in this export. |
| C-08 | AUDIT | all | localStorage key changed to `vawc-p4-revised-v1`. |
