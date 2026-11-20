# Feedback implementation status (honest)
| Item | Source | Status | Notes |
|---|---|---|---|
| HE-01 occupation→training context | HE | Implemented (executed smoke test + needs manual browser check) | Programs search only; no organization-side occupation chip. |
| HE-02 edit search on results screen | HE | NOT implemented | Results still link to the separate "Edit search" form. |
| HE-03 remove task guidance | HE | Mostly implemented | Placeholders, bold links, evaluation link done. Fresh-session state has no prefill (checked in smoke test for programs only). Peripheral entries not audited further. |
| HE-04 navigation/comparison context | HE | Partial | Selection retention on unchanged re-search + explicit removal notice. Not done: list position, consistent page names, Back-to-results naming. Browser Back/Forward untested. |
| HE-05 job-card behavior | HE | Partial | Title opens details. Whole-card click not added. |
| HE-06 application clarity | HE | Implemented (static + smoke render; manual check pending) | Destination is simulated, labelled as such. Instructions are generic per method, not individually authored per job. |
| HE-07 geographic scope | HE | NOT implemented | |
| HE-08 consistency/hierarchy | HE | Partial | Text-size control only. |
| HE-09 evidence-aware comparison | HE | NOT implemented | Baseline already shows "Not provided" and the 2,080-hour assumption. |
| Original-site option mapping | INSTRUCTOR | NOT implemented | Baseline peripheral entries unchanged. |
| Data expansion | INSTRUCTOR | NOT implemented | Still 6 occupations, 4 providers (1 in Richmond), 6 programs, 10 jobs. Task difficulty is therefore unchanged. |
