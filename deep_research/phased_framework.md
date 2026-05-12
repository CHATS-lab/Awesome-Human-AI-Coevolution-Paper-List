\section{Core Framework: Phased Human-evolution in the process of Co-evolution}
\label{sec:framework}

\begin{wrapfigure}{r}{0.6\linewidth}
  \centering
  \vspace{-10px}
\includegraphics[width=\linewidth]{figs/pyramid.pdf}
  \vspace{-20px}
  \caption{Pyramid of tasks humans are able to delegate to AI and corresponding human tasks as AI advances.
}
  \label{fig:pyramid}
  \vspace{-10px}
\end{wrapfigure}

% ---------------------------------------------------------------
% Refined P1 (Framework intro)
% ---------------------------------------------------------------
Prior work has established taxonomies for automation. \citet{sheridan1978human}'s levels of automation define a spectrum from fully manual to fully autonomous control, while \citet{bainbridge1983ironies}'s Ironies of Automation shows that as automation takes over more work, humans lose practice in the very capabilities needed to oversee it. Building on these taxonomies, we identify four phases based on how humans use AI in their work. Table~\ref{tab:mapping} maps these phases to prior taxonomies. As shown in Figure~\ref{fig:pyramid}, as humans use AI to take on increasingly complex tasks, their own work also shifts from full execution to higher-level oversight and governance. Yet humans cannot be assumed to automatically use AI effectively at each phase: AI advancement can also impact the human capabilities they need to use AI well. Effective AI utilization therefore requires humans to evolve and sustain the different skills at each phase. \textit{\color{brown}We classify a phase by the highest level of execution authority humans can delegate to AI and AI is capable of, while acknowledging that real workflows are dynamic and may combine multiple phases.}


\begin{figure}[t]
  \centering
\includegraphics[width=0.85\linewidth]{figs/fig2_v3.pdf}
  \vspace{-5px}
  \caption{
Overview of the four-phase framework. As AI advances, the way humans use it evolves from Tool to Assistant to Executor, and eventually to Organization. Each phase brings distinct impacts on human ability, including weakened reasoning, missed flaws, undetected drift, and lost goal traceability, which hinder effective AI use (top row). To counter these, we propose skills humans need to sustain at each phase (middle row), paired with AI-side supports (bottom row).
}
  \label{fig:framework}
  \vspace{-5px}
\end{figure}

\begin{table}[h]
\centering
\begin{tabular}{@{}lcl@{}}
\toprule
\textbf{Our Phase} & \textbf{Sheridan LOA \citep{sheridan1978human}} & \textbf{Failure mode under Bainbridge's irony
\citep{bainbridge1983ironies}} \\
\midrule
1: Tool & 1--3 & Convenience weakens reasoning \\
2: Assistant & 4--6 & Speed weakens fluency \\
3: Executor & 7--8 & Autonomy weakens vigilance \\
4: Organization & 9--10 & Delegation weakens interpretation \\
\bottomrule
\end{tabular}
\caption{Approximate alignment between our four phases, prior levels of automation, and the corresponding forms of capability erosion.\vspace{-2em}}
\label{tab:mapping}
\end{table}

$\bullet$ \textbf{Q: Why Human Evolution Matters}

\textbf{Without human evolution, humans' reasoning ability gets weakened. %weakens reasoning abilities?
} 
%\textbf{For humans to better utilize AI: humans' passive acceptance weakens reasoning.} %\wyshi{For humans to better adapt to the changing AI era,}
Because humans can now delegate the retrieval and synthesis work to AI, we need to judge how to incorporate AI-provided knowledge into their own understanding. However, once people can obtain AI responses without recalling prior knowledge or reasoning through problems themselves, we exercise these processes less often and are likely to drift toward passive acceptance \citep{sparrow2011google, stadler2024cognitive, abdulhai2026llmsdistortwrittenlanguage}. In one study, doctors who highly trusted AI and used it frequently accepted up to 18\% more AI misdiagnoses than doctors who trusted it less \citep{srinivasan2025adjust}. Without active reasoning, the knowledge AI offers is absorbed uncritically and may distort one's own understanding rather than deepen it. 
\textbf{Uncritical human feedback breeds sycophancy and reinforces existing bias.}
%\textbf{For human--AI co-evolution: uncritical feedback breeds sycophancy.}
Users who silently accept AI answers \citep{lee2025impact, gerlich2025ai} can reinforce existing biases in preference data, rewarding agreement \citep{sharma2023towards}, typicality \citep{zhang2025verbalized}, and surface formatting \citep{singhal2023longway, zhang2024lists} over truthfulness. As these signals flow into training, models are pushed toward sycophancy \citep{Betley_2026}, mode collapse \citep{zhang2025verbalized}, and format-optimized responses \citep{perez2022discovering}.





$\bullet$ \textbf{Q: How Humans Can Co-Evolve with AI}

\textbf{Human-side effort: sustain critical thinking.}
To use AI as a tool well, humans need to keep critical thinking active during AI use. Instead of treating AI as an answer authority, humans should use it to examine, test, and refine their own reasoning. One effective pattern is pre-reasoning: before sending a prompt, users briefly state what they already believe the answer to be or what they find unclear \citep{akgun2025struggle}, so AI outputs become feedback on users' reasoning rather than replacements for it. A complementary pattern is periodically attempting similar tasks without AI, to check whether the underlying capability is being strengthened or hollowed out \citep{vicente2023humansoffload, bastani2025generative}. \textbf{How AI can support the evolution: provide reasoning scaffolds.}
AI can reduce cognitive load for humans by making verification part of the interaction\citep{vasconcelos2023explanations}. Systems should surface uncertainty and supporting evidence inline so users can compare outputs against their own initial beliefs \citep{amershi2019guidelines}, and prompt users to state what they already think or find uncertain before generating a final answer \citep{bucinca2021cognitive}.
\textbf{The result:  better human-AI co-evolution with critical integration of AI answers.}


% \textbf{The payoff: humans use AI better, and help build better AI.}
% Two outcomes emerge when humans cultivate critical thinking and AI provides reasoning scaffolds. Users themselves benefit, integrating AI knowledge more accurately to deepen their understanding and preserving the reasoning capacity they need when AI is wrong or unavailable. The feedback they generate also becomes more diverse and corrective, pushing models toward truthfulness.

\textit{\textcolor{blue}{\textbf{Key Takeaway.}
In Phase~1, humans use AI as a tool, and we must sustain critical thinking. Before relying on an AI answer, state an initial belief, then compare it against the AI output; AI should scaffold this process by surfacing uncertainty and supporting evidence inline. Together, these practices ensure AI-provided information is critically integrated rather than silently accepted, and yield feedback that pushes models toward truthfulness.}}

%% ============================================================
\vspace{-1em}
\subsection[Phase 2: AI as Assistant]{Phase 2: Human Use AI as Assistant
(Human: High, AI: Moderate)}
\label{sec:phase2}
%% ============================================================
At this phase, humans' ability to produce bounded artifacts such as drafts and partial implementations is empowered by AI, while humans remain the main executors of the broader workflow. A consultant can use AI to draft a client report before editing it \citep{dellacqua2023navigating}, and a developer can use a copilot to autocomplete code from brief descriptions \citep{chen2021evaluating, ziegler2022productivity}. AI moves beyond answering questions to producing work, improving productivity and quality \citep{cui2026effects, peng2023impact, noy2023experimental}.

$\bullet$ \textbf{Q: Why Human Evolution Matters}

\textbf{Without human evolution, human's verification becomes superficial.} As humans can ask AI to generate artifacts and bring them into workflow, we need to verify them in a grounded way. But as humans delegate more work to AI, we practice the underlying work less, and their familiarity with its details and failure modes weakens through disuse. Without this grounding, users miss the cues that signal when AI output is wrong, falling back on surface signals like explanation length or polish \citep{steyvers2025llmknow}. In one study, AI-assisted developers produced 29\% more SQL-injection-vulnerable code than unassisted developers, despite reporting higher confidence \citep{perry2023insecure}. Without verification capability, the productivity AI offers is offset by the cost of flaws that pass into deployment. \textbf{Surface-level approval rewards polish over correctness.}
Users who approve polished AI-generated artifacts without grounded verification produce a weak correctness signal \citep{bansal2021whole}, because flawed outputs get treated as acceptable whenever they look complete \citep{perry2023insecure, fok2024verifiability}. As these labels flow into training data, evaluation benchmarks, and deployment metrics, models end up producing poor work while both reporting and receiving high confidence \citep{becker2025measuring}.

$\bullet$ \textbf{Q: How Humans Can Co-Evolve with AI}

\textbf{Human-side effort: sustain evaluative expertise.}
Humans at this phase need evaluative expertise to use AI effectively. This means knowing what good work should satisfy, including the relevant constraints, quality standards, and likely failure modes.
One practice is to define constraints and test cases the output must pass before generation, so artifacts are judged against predefined criteria rather than surface confidence \citep{gunnu2025cife}. A complementary practice is to generate multiple candidates for important components and treat divergence as a signal of unreliability \citep{wang2023selfconsistency}. \textbf{How AI can support the evolution: make artifacts more verifiable.}
AI can support evaluative expertise by making artifacts easier to verify \citep{fok2024verifiability, vasconcelos2023explanations}. Instead of presenting only a polished output, they should expose inferred specifications, assumptions, and likely failure modes \citep{amershi2019guidelines}, and surface disagreement across candidates to flag components that need closer review \citep{wang2023selfconsistency}.

The benefits established in Phase~1 compound. Truthful feedback makes reliable artifact production more feasible, since artifacts are composed of many small judgments about what the AI knows. Likewise, because verification requires actively questioning AI-generated work, users who develop strong critical thinking skills in Phase~1 are less likely to struggle when verifying AI artifacts later. 
\textbf{The result: better human-AI co-evolution with grounded verification of AI artifacts.}

\textit{\textcolor{blue}{\textbf{Key Takeaway.}
In Phase~2, humans use AI as an assistant, we must sustain evaluative expertise. Define the test cases an artifact must pass before adoption, and reject outputs that fail them. AI should scaffold this process by exposing inferred specifications and assumptions across candidates. Together, these practices ensure AI-generated artifacts are verified against grounded criteria rather than surface confidence, and yield feedback that calibrates models on quality rather than polish.}}

%% ============================================================
\subsection[Phase 3: AI as Executor]{Phase 3: Human Use AI as Executor 
(Human: Moderate, AI: High)}
\label{sec:phase3}
%% ============================================================
At this phase, humans can use AI to complete end-to-end workflows at scale. The human sets the high-level objective, while the AI executes and iterates toward completion. A data analyst can describe an analytic question and let an AI agent query databases, transform data, and return structured results \citep{rahman2025dsagents}, and software developers can specify intent in natural language while agents generate, test, and revise code across entire codebases \citep{yang2024sweagent, xia2025agentless}.  Across domains, autonomous agents improve efficiency by shifting more execution from humans to AI \citep{jimenez2024swebench, cognition2025devin, igl2025alphafold, anthropic2026autonomy}.

$\bullet$ \textbf{Q: Why Human Evolution Matters}

\textbf{Without human evolution, human's oversight breaks down.}
At this phase, to improve the utilization efficiency, humans need to keep autonomous workflows on-task, intervening when execution drifts from the intended goal. However, many humans enter this phase without prior experience supervising autonomous systems \citep{sauer2016experience}, and watching from outside the execution loop provides fewer intermediate cues than direct operation, with sustained attention degrading 2.2 times faster \citep{lin2025vigilance}. Users then form less accurate beliefs about the state of the workflow and about when intervention is needed. When GUI agents handled webpage tasks involving malicious privacy policies, 97.4\% of users failed to interrupt the agent and allowed it to accept the policies, causing privacy leakage \citep{chen2025obviousinvisible}. Without active awareness, the scaled AI workflows come paired with errors that humans cannot intervene on in time. \textbf{Passive monitoring starves AI of trajectory feedback.}
Users who monitor autonomous workflows passively \citep{parasuraman2010complacency} are excluded from the intermediate trajectory \citep{endsley1995intermediate}. When the final result is wrong, the system receives little evidence about where the trajectory first drifted, which tool action was risky, or when human intervention is helpful \citep{drosos2025auditing}. Long-horizon AI development thus becomes less reliable, since the trajectory-level signals it depends on are not being captured \citep{lightman2023verify}.

$\bullet$ \textbf{Q:  How Humans Can Co-Evolve with AI}

\textbf{Human-side effort: practice metacognitive monitoring.}
Exhaustive inspection would turn humans into a bottleneck and undermine the scalability autonomous workflows are meant to provide \citep{methnani2021variable}. Humans must therefore sustain metacognitive monitoring through selective attention, focusing on where it matters most rather than spreading attention thinly. One practice is to define review checkpoints before execution and write rubrics for known failure modes \citep{anthropic2026autonomy, metr2026swebench}, which itself requires anticipating where the workflow is most likely to fail. A complementary practice is to locate where the core logic of the workflow resides and concentrate inspection there, rather than skimming the full execution trace. \textbf{How AI can support the evolution: support more interruptible workflows.}
AI systems can support better practices by making autonomous workflows easier to monitor and interrupt. Rather than running silently to completion, agents should surface progress, uncertainty, and pause for review when confidence is low or actions cross predefined risk thresholds.

The evolution from Phase~2 supports the evolution here on both sides: developed evaluative expertise can help humans to better interpret workflow states and decide when intervention is necessary \citep{endsley2017autonomy}. Reliable artifact production is what makes long-horizon execution possible, since trajectories are sequences of artifacts. 
\textbf{The result: better human-AI co-evolution with active intervention.}

\textit{\textcolor{blue}{\textbf{Key Takeaway.}
In Phase~3, humans use AI as an executor and we must practice metacognitive monitoring. Define review checkpoints and failure-mode rubrics before execution, and inspect only the workflow's core logic. AI should scaffold this process by surfacing progress and pausing when confidence is low. Together, these practices ensure autonomous workflows remain supervisable rather than silently failing, and yield trajectory-level feedback that long-horizon AI development depends on.}}

% \textit{\textcolor{blue}{\textbf{Key Takeaway.}
% In Phase~3, humans must develop and sustain metacognitive awareness. Before delegating autonomous workflows, they should define review checkpoints and failure-mode rubrics, then intervene when the AI drifts from the intended goal; AI systems should scaffold this process by surfacing chunk-level uncertainty and pausing dynamically when confidence is low. Together, these practices ensure that autonomous workflows remain supervisible rather than silently running to completion.}}


%% ============================================================
\subsection[Phase 4: AI as Organization]{Projection Phase 4: Human Use AI as Organization
(Human: Low, AI: Extremely High)}
\label{sec:phase4}
%% ============================================================
No domain has fully entered this phase yet, so we treat Phase~4 as a forward-looking projection. After humans delegate individual workflows to AI, we may begin to ask AI to organize systems of work: coordinating subagents by decomposing tasks, assigning subtasks, managing dependencies, and evaluating returned results. The scale of delegation expands from completing one workflow to coordinating many across agents and execution environments. Early signs are visible: in automated research, a researcher can define a research strategy and let an autonomous system execute the research loop \citep{karpathy2026autoresearch}; in software engineering, managed agent architectures allow a lead agent to spawn and coordinate subordinate agents, each operating in its own execution environment \citep{martin2026managedagents}.

$\bullet$ \textbf{Q:  Why Human Evolution Matters}

\textbf{Without human evolution, humans' governance collapses.}
The demand for better utilization in this phase is to ensure that AI-organized work remains aligned with the original intent. Governance is a high-level responsibility most users have rarely practiced, so the capability is likely to be underdeveloped from the start. Governing well requires understanding whether a system-level output follows from the original goal and how the coordinated process produced it. As planning and coordination move to AI, humans see less of the process evidence that normally supports this judgment: how objectives were decomposed, how work was routed, why revisions were made. Without proper governance, the coordination AI offers becomes opaque rather than dependable. \textbf{Outcome-only feedback misattributes coordination failures.}
We project that users who inspect only the final output of a multi-agent system provide a binary signal about whether to accept it. Such feedback cannot distinguish whether success or failure came from individual model capability or from system coordination. Development loops therefore risk over-attributing outcomes to the component that is easiest to measure, typically the strongest individual model, while leaving the coordination layer under-specified and under-improved, despite it being central to this phase.

$\bullet$ \textbf{Q: How Humans Can Co-Evolve with AI}

\textbf{Human-side effort: practice systems thinking.}
At this stage, monitoring each agent workflow directly is no longer feasible. To make AI organizations actually do what users want, humans need to develop and sustain systems thinking, shifting oversight from inspecting actions to shaping the system that produces them. One practice is defining system-level policies before deployment, including constitutional constraints, risk thresholds, and forbidden actions, so subagents share a common boundary on acceptable behavior even when no human is watching each step \citep{bai2022constitutional}. A complementary practice is statistical oversight: auditing samples of agent trajectories, intermediate artifacts, or disagreements among evaluator agents to detect systemic drift and rare failures without inspecting every action. \textbf{How AI can support the evolution: make systems more auditable.}
AI systems can lower the cost of these practices by making coordinated agent systems auditable without exposing every individual action. Rather than producing a full action log, they should summarize key coordination decisions, including how work was decomposed, routed, evaluated, and escalated. Alongside these summaries, they should provide intent-preserving audit trails, collective-level controls, and signals that flag high-risk branches.

The human evolution from Phase~3 feeds into the practice here: users' metacognitive monitoring grounds the trajectory tracing required to recognize when a managed agent system has drifted \citep{barrak2025traceability}, and AI's reliable long-horizon execution makes multi-agent systems possible, since systems are many trajectories in parallel. \textbf{The result: better human-AI co-evolution with systemic governance.}

\textit{\textcolor{blue}{\textbf{Key Takeaway.}
In Phase~4, humans use AI as an organization and we must develop systems thinking. Define system-level constraints and forbidden actions before deployment, and use statistical oversight of agent trajectories to detect drift. AI should scaffold this process by summarizing key coordination decisions and providing intent-preserving audit trails. Together, these practices ensure AI-organized systems remain aligned with original intent rather than drifting under opaque coordination, and yield process-level feedback that improves how the coordination layer is built.}}