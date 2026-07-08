# Claim-control checklist

This checklist is scoped to the public synthetic UI proof.

## Source intake

For every developer-facing draft or UI proof, collect:

- Product source: release note, changelog, docs diff, API reference page, or engineer summary.
- User source: target reader and likely job to be done.
- Limits: known caveats, unsupported providers, region limits, pricing caveats, rate limits, data policy limits, latency variance, rollout status, or unsupported proof gaps.
- Reviewer: product, engineering, or content owner for final technical verification.
- Demo data label: mark synthetic data clearly when no real product or customer source is used.

## Launch-note structure

1. What changed.
   - One sentence for the reader outcome.
   - Avoid vague hype.

2. Why it matters.
   - Tie to developer workflow, not unsupported performance claims.
   - Safe examples: fewer manual review steps, clearer claim labels, easier trace inspection.
   - Avoid: guaranteed accuracy, guaranteed lower cost, enterprise reliability, or production-ready unless source proves it.

3. How to try it.
   - Minimal setup steps.
   - One small code, config, or UI example.
   - Expected output and one common failure case.

4. What to watch.
   - Limitations, data-handling note, pricing caveat, latency or uptime caveat, and fallback behavior only if source-backed.

5. Review checklist.
   - Source links attached.
   - Strong claims labeled verified, inferred, revise, or remove.
   - Engineering or product owner approves technical details before publication.
   - Marketing or content owner approves positioning before publication.
   - Unresolved facts are either removed or marked as follow-up.

## Reviewer checklist for this proof

- The UI banner says the data is synthetic.
- The run list does not present scores as benchmarks.
- Tool calls are mock calls only and do not imply API use.
- Trace detail distinguishes expected behavior from observed behavior.
- Human review queue includes approve, revise, and blocked labels.
- Unsupported production, reliability, security, scale, platform-usage, and customer claims are absent.
- Any future stronger claim would require direct source support.

## Unsupported-claim removal table

| Claim type | Safe handling |
| --- | --- |
| Product capability | Cite product page, docs, API reference, changelog, or engineer source. |
| Model support | Recheck current model or provider page before publication. |
| Pricing or cost | Cite current pricing page and avoid absolute savings claims without calculation. |
| Reliability or uptime | Use status page or engineering source only. Avoid guarantee language. |
| Data policy or privacy | Cite data policy docs and route legal or security questions to the authorized owner. |
| Developer adoption or community | Use current public metrics only if a source supports them. Do not invent social metrics. |
| Competitive positioning | Mark as positioning unless backed by benchmark or source. |
| Production platform experience | Do not claim unless a direct evidence artifact proves it. This proof does not. |
| Customer results or case studies | Do not claim named customers, revenue outcomes, or testimonials from this proof. |
| Employment or legal facts | Do not use this proof for work authorization, KYC, signatures, tax, or binding approvals. |
