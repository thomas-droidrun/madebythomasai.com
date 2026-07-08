import { useMemo, useState } from "react";
import { reviewQueue, runs, traceDetail, type EvaluationRun, type ReviewLabel, type ToolCallStatus } from "./mockData";

type ViewName = "runs" | "trace" | "review";

const statusText: Record<EvaluationRun["status"], string> = {
  ready: "Ready",
  needs_review: "Needs review",
  blocked: "Blocked"
};

const labelText: Record<ReviewLabel, string> = {
  approve: "Approve",
  revise: "Revise",
  blocked: "Blocked"
};

const toolStatusText: Record<ToolCallStatus, string> = {
  ok: "OK",
  warning: "Warning",
  blocked: "Blocked"
};

export default function App() {
  const [view, setView] = useState<ViewName>("runs");
  const [selectedRunId, setSelectedRunId] = useState(runs[0].id);

  const selectedRun = useMemo(
    () => runs.find((run) => run.id === selectedRunId) ?? runs[0],
    [selectedRunId]
  );

  return (
    <main className="proof-shell">
      <header className="hero">
        <p className="eyebrow">Synthetic proof artifact</p>
        <h1>AI evaluation and trace-review content system</h1>
        <p>
          Static React and TypeScript style demo for evaluation runs, trace details with tool calls,
          and human review labels. No network calls and no private data.
        </p>
      </header>

      <section className="safety-banner" aria-label="safety scope">
        <strong>Scope:</strong> invented data only. This proves UI and claim-control structure, not
        production observability, customer adoption, Arize usage, OpenRouter usage, or platform operation.
      </section>

      <nav className="tabs" aria-label="demo views">
        <button className={view === "runs" ? "active" : ""} onClick={() => setView("runs")}>Evaluation runs</button>
        <button className={view === "trace" ? "active" : ""} onClick={() => setView("trace")}>Trace detail</button>
        <button className={view === "review" ? "active" : ""} onClick={() => setView("review")}>Human review queue</button>
      </nav>

      {view === "runs" && (
        <section className="panel" aria-label="evaluation run list">
          <div className="panel-heading">
            <h2>Evaluation run list</h2>
            <p>Choose a synthetic run to inspect. Scores are illustrative and are not model benchmarks.</p>
          </div>
          <div className="run-grid">
            {runs.map((run) => (
              <button
                key={run.id}
                className={`run-card ${selectedRunId === run.id ? "selected" : ""}`}
                onClick={() => setSelectedRunId(run.id)}
              >
                <span className={`pill ${run.status}`}>{statusText[run.status]}</span>
                <h3>{run.title}</h3>
                <p>{run.summary}</p>
                <dl>
                  <div><dt>Dataset</dt><dd>{run.dataset}</dd></div>
                  <div><dt>Score</dt><dd>{Math.round(run.score * 100)}%</dd></div>
                  <div><dt>Pass rate</dt><dd>{run.passRate}%</dd></div>
                  <div><dt>Reviewer</dt><dd>{run.reviewer}</dd></div>
                </dl>
              </button>
            ))}
          </div>
        </section>
      )}

      {view === "trace" && (
        <section className="panel" aria-label="trace detail">
          <div className="panel-heading">
            <h2>Trace detail: {traceDetail.runId}</h2>
            <p>Trace view shows intent, observed behavior, tool-call summaries, and the human review boundary.</p>
          </div>

          <div className="trace-summary">
            <article>
              <h3>Prompt</h3>
              <p>{traceDetail.prompt}</p>
            </article>
            <article>
              <h3>Expected behavior</h3>
              <p>{traceDetail.expectedBehavior}</p>
            </article>
            <article>
              <h3>Observed behavior</h3>
              <p>{traceDetail.observedBehavior}</p>
            </article>
          </div>

          <h3>Tool calls</h3>
          <div className="tool-list">
            {traceDetail.toolCalls.map((tool) => (
              <article key={tool.id} className="tool-card">
                <div className="tool-card-top">
                  <h4>{tool.name}</h4>
                  <span className={`pill tool-${tool.status}`}>{toolStatusText[tool.status]}</span>
                </div>
                <p><strong>Input:</strong> {tool.inputSummary}</p>
                <p><strong>Output:</strong> {tool.outputSummary}</p>
                <p className="risk"><strong>Risk note:</strong> {tool.riskNote}</p>
              </article>
            ))}
          </div>

          <h3>Review path</h3>
          <ol className="step-list">
            {traceDetail.steps.map((step) => (
              <li key={step.id}>
                <span>{step.role}</span>
                <strong>{step.label}</strong>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {view === "review" && (
        <section className="panel" aria-label="human review queue">
          <div className="panel-heading">
            <h2>Human review queue</h2>
            <p>Each item has an approve, revise, or blocked label plus the claim-control reason.</p>
          </div>
          <div className="review-list">
            {reviewQueue.map((item) => (
              <article key={item.id} className="review-card">
                <span className={`pill review-${item.label}`}>{labelText[item.label]}</span>
                <h3>{item.runId}</h3>
                <p>{item.reviewerNote}</p>
                <p><strong>Claim control:</strong> {item.claimControl}</p>
                <p><strong>Next action:</strong> {item.nextAction}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <aside className="claim-box">
        <h2>Claim boundary</h2>
        <p>
          Supported: mock workflow design, trace-review structure, tool-call labeling, and reviewer labels.
          Not supported: production platform experience, production React architecture, customer outcomes, or live analytics.
        </p>
        <p><strong>Selected run:</strong> {selectedRun.title}</p>
      </aside>
    </main>
  );
}
