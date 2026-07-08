# Ship a safer workflow note with a claim-control checklist

## Purpose

This workflow turns a raw platform change into a developer-facing note that is easier to review before publication. It focuses on clarity, limitations, and recovery steps.

This is a written workflow demo for a Technical Content Engineer application. It is not a claim that Thomas has used SuperPlane or operated production platform infrastructure.

## User story

A small platform team needs a repeatable way to decide whether a change is ready to announce to developers. The content owner has to turn scattered inputs into a useful developer-facing note without overstating what shipped.

## Inputs

- A short change summary from an engineer.
- A list of affected commands, APIs, or configuration fields.
- Known limitations and rollback notes.
- A target reader: developer, platform engineer, or internal app team.
- Links to source material that should be cited or checked before publishing.

## Workflow

1. Define the reader promise in one sentence.
   - Example: "After reading this note, a developer can decide whether to try the new workflow and knows how to recover if it fails."
2. Convert raw notes into a small content outline.
   - Problem.
   - What changed.
   - Minimal example.
   - Expected output.
   - Failure modes.
   - Review checklist.
3. Build the example as a text-first sample.
   - Keep the example narrow.
   - Mark placeholders clearly.
   - Separate verified behavior from assumptions.
   - Avoid production claims unless there is direct evidence.
4. Add a claim-control pass.
   - Every strong claim gets one label: verified, inferred, or remove.
   - Any mention of security, reliability, scale, compatibility, or production readiness needs direct evidence or softer wording.
5. Add a reader-success check.
   - Can a new reader tell what to do first?
   - Can they see what good output looks like?
   - Can they recover from the most likely mistake?
   - Can a reviewer spot unsupported claims quickly?
6. Package the result for publication.
   - One short tutorial.
   - One QA checklist.
   - One optional walkthrough script outline if the team wants to turn the written demo into a video later.

## Mini example

```text
Change: A new workflow flag lets teams preview generated release notes before publishing.
Reader action: Run the preview step, inspect the generated note, then publish only after the checklist passes.
Expected output: A draft note with title, change summary, usage steps, limitations, and rollback guidance.
Recovery: If preview output is missing limitations or rollback notes, stop and request the source detail before publishing.
```

## Review checklist

- The example is small enough to test mentally.
- Unsupported production, reliability, security, scale, and compatibility claims are removed or softened.
- Limitations are visible before the call to action.
- The reader can distinguish confirmed behavior from suggested next steps.
- The final draft has a clear owner for unresolved facts.

## Why this maps to SuperPlane content work

Public role context described a flow of exploring a product, developing a real workflow, writing it up, and turning it into a video. This sample shows the written workflow and review discipline behind that flow. It is strongest evidence for careful tutorial writing, workflow design, QA review, and technical content judgment.

## Honest limits

- This packet is a written workflow demo, not a finished product walkthrough.
- It does not claim SuperPlane product usage.
- It does not claim Kubernetes, Terraform, production platform engineering, conference speaking, community management, or polished video production experience.
