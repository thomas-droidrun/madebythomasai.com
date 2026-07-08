export type EvalStatus = "ready" | "needs_review" | "blocked";
export type ReviewLabel = "approve" | "revise" | "blocked";
export type ToolCallStatus = "ok" | "warning" | "blocked";

export type EvaluationRun = {
  id: string;
  title: string;
  dataset: string;
  status: EvalStatus;
  score: number;
  passRate: number;
  reviewer: string;
  updated: string;
  summary: string;
};

export type ToolCall = {
  id: string;
  name: string;
  inputSummary: string;
  outputSummary: string;
  status: ToolCallStatus;
  riskNote: string;
};

export type TraceStep = {
  id: string;
  role: "planner" | "tool" | "reviewer" | "writer";
  label: string;
  detail: string;
};

export type TraceDetail = {
  runId: string;
  prompt: string;
  expectedBehavior: string;
  observedBehavior: string;
  toolCalls: ToolCall[];
  steps: TraceStep[];
};

export type ReviewItem = {
  id: string;
  runId: string;
  label: ReviewLabel;
  reviewerNote: string;
  claimControl: string;
  nextAction: string;
};

export const runs: EvaluationRun[] = [
  {
    id: "eval-synth-001",
    title: "Launch note claim-control check",
    dataset: "Synthetic developer-content prompts v1",
    status: "needs_review",
    score: 0.82,
    passRate: 86,
    reviewer: "Demo reviewer A",
    updated: "synthetic timestamp",
    summary: "Draft is useful, but two reliability claims need source support or softer wording."
  },
  {
    id: "eval-synth-002",
    title: "Trace review for tool-call boundaries",
    dataset: "Synthetic agent QA traces v1",
    status: "ready",
    score: 0.91,
    passRate: 94,
    reviewer: "Demo reviewer B",
    updated: "synthetic timestamp",
    summary: "Tool calls are labeled, inputs are summarized, and no private data appears."
  },
  {
    id: "eval-synth-003",
    title: "Unsupported production-claim removal",
    dataset: "Synthetic launch-copy snippets v1",
    status: "blocked",
    score: 0.48,
    passRate: 52,
    reviewer: "Demo reviewer C",
    updated: "synthetic timestamp",
    summary: "Blocked until production, customer, and security claims are removed or sourced."
  }
];

export const traceDetail: TraceDetail = {
  runId: "eval-synth-001",
  prompt: "Create a developer launch note from a small product-change summary, then flag unsupported claims.",
  expectedBehavior: "Summarize what changed, show how to try it, label limitations, and remove or soften strong claims without direct evidence.",
  observedBehavior: "The draft explains the workflow and adds a review checklist. It also includes two strong reliability phrases that need reviewer action.",
  toolCalls: [
    {
      id: "tool-001",
      name: "sourceIntake.mock",
      inputSummary: "Synthetic changelog title, mock docs excerpt, and mock limitation list.",
      outputSummary: "Structured fields for reader action, limits, owner, and review status.",
      status: "ok",
      riskNote: "No external source was called. Data is invented."
    },
    {
      id: "tool-002",
      name: "claimClassifier.mock",
      inputSummary: "Draft copy with capability, reliability, and workflow claims.",
      outputSummary: "Flags: 6 safe workflow claims, 2 unsupported reliability claims.",
      status: "warning",
      riskNote: "Reliability language must be removed or sourced before any publication."
    },
    {
      id: "tool-003",
      name: "publishCheck.mock",
      inputSummary: "Review labels and unresolved claims.",
      outputSummary: "Publish is blocked in this demo until unsupported claims are fixed.",
      status: "blocked",
      riskNote: "Demo intentionally stops before account use or stronger claims."
    }
  ],
  steps: [
    {
      id: "step-001",
      role: "planner",
      label: "Reader promise",
      detail: "A developer should know what changed, how to try the example, and what limitation could change the result."
    },
    {
      id: "step-002",
      role: "tool",
      label: "Source intake",
      detail: "Synthetic source fields are converted into product fact, user need, known limits, and reviewer owner."
    },
    {
      id: "step-003",
      role: "writer",
      label: "Draft generation",
      detail: "The note uses workflow language and avoids customer, scale, security, and production-readiness claims."
    },
    {
      id: "step-004",
      role: "reviewer",
      label: "Human review boundary",
      detail: "Strong claims are labeled approve, revise, or blocked. Publication only uses low-claim proof language."
    }
  ]
};

export const reviewQueue: ReviewItem[] = [
  {
    id: "review-001",
    runId: "eval-synth-001",
    label: "revise",
    reviewerNote: "Replace 'reliable in production' with 'designed for a reviewable workflow' unless a source proves reliability.",
    claimControl: "Reliability or uptime needs status, engineering, or product source support.",
    nextAction: "Revise copy and rerun claim review."
  },
  {
    id: "review-002",
    runId: "eval-synth-002",
    label: "approve",
    reviewerNote: "Trace labels are readable and tool-call boundaries are clear.",
    claimControl: "Safe because it claims UI structure and review discipline only.",
    nextAction: "Keep as proof of mock workflow design, not production observability."
  },
  {
    id: "review-003",
    runId: "eval-synth-003",
    label: "blocked",
    reviewerNote: "Remove customer adoption, platform usage, and security posture claims.",
    claimControl: "Unsupported claims must be removed, softened, or routed to an authorized reviewer.",
    nextAction: "Block stronger claims and document the unsupported-claim gap."
  }
];
