# Curated Repository: Human–AI Coevolution (Verified Academic Papers)

## Section 1 — Calibration check

This list applies the strict two-direction test: every entry must show **both** humans shaping AI (data, preferences, prompts, demonstrations, deployment, longitudinal use) **and** AI shaping humans (skill, behavior, cognition, language, workflows, opinions, or the data they later produce). Pure capability papers and pure one-shot UX studies were excluded; AI-on-AI synthetic-data dynamics (e.g., model collapse with no human-in-the-loop) were excluded. Where an arXiv preprint and conference/journal version both exist, the entry is deduplicated and the conference/journal is given as the venue. Metadata was verified against arXiv abstract pages, ACM Digital Library, OpenReview, NeurIPS proceedings, ScienceDirect, IEEE Xplore, *Nature*/*Science* journal pages, and authors' homepages; any field that could not be fully verified is left blank and flagged.

## Section 2 — Paper entries (49 entries, grouped by primary category)

---

### Position & Survey

### 1. Human-AI Coevolution
- **Authors:** Dino Pedreschi, Luca Pappalardo, Emanuele Ferragina, Ricardo Baeza-Yates, Albert-László Barabási, Frank Dignum, Virginia Dignum, Tina Eliassi-Rad, Fosca Giannotti, János Kertész, Alistair Knott, Yannis Ioannidis, Paul Lukowicz, Andrea Passarella, Alex Sandy Pentland, John Shawe-Taylor, Alessandro Vespignani
- **Institutions:** U. Pisa, CNR Pisa, Scuola Normale Superiore, Sciences Po, UPF, Northeastern, Umeå, CEU, Victoria U. Wellington, U. Athens, DFKI, MIT, UCL
- **Date (v1):** 2023-06-23
- **Publisher / venue:** Artificial Intelligence (Elsevier), vol. 339, 2025 (104244)
- **Categories:** Position & Survey; Mutual Adaptation
- **Keywords:** coevolution, recommender systems, feedback loops, complexity science, sociotechnical
- **Primary link:** https://doi.org/10.1016/j.artint.2024.104244
- **arXiv ID:** 2306.13723
- **Other source links:** arXiv: https://arxiv.org/abs/2306.13723 ; publisher_page: https://www.sciencedirect.com/science/article/pii/S0004370224001802
- **TLDR:** Defines human-AI coevolution as a continuous feedback loop in which user choices generate data that retrains AI, which then shapes user preferences. Frames it as a new field at the intersection of AI and complexity science and surveys evidence from recommender systems and assistants.
- **Why it qualifies:** Humans→AI: user clicks/choices retrain models; AI→Humans: trained models shift subsequent user preferences and choices.
- **Verification notes:** Confirmed against ScienceDirect DOI page and arXiv abs.

### 2. Position: Humans are Missing from AI Coding Agent Research
- **Authors:** Zora Zhiruo Wang (et al.; full list per author homepage PDF)
- **Institutions:** Carnegie Mellon University
- **Date (v1):** 2026-02 (posted on author site Feb 2026)
- **Publisher / venue:** Position paper, 2026 (web-hosted at author homepage; venue not yet finalized)
- **Categories:** Position & Survey; Collaboration & Co-Creation
- **Keywords:** coding agents, human-in-the-loop, verification, expertise, agentic SE
- **Primary link:** https://zorazrw.github.io/files/position-haicode.pdf
- **arXiv ID:** (not yet on arXiv as of verification)
- **Other source links:** homepage: https://zorazrw.github.io/
- **TLDR:** Argues current AI coding agent research over-indexes on benchmarks and autonomy, ignoring humans who supervise, verify, and adapt to agent output. Calls for evaluation that captures human–agent dynamics across expertise levels.
- **Why it qualifies:** Humans→AI: developer prompts, oversight, and verification shape agent behavior; AI→Humans: agent outputs reshape developer review burden and skill demands.
- **Verification notes:** Confirmed on author's CMU homepage; arXiv ID not located, left blank.

### 3. Deep Reinforcement Learning from Human Preferences
- **Authors:** Paul F. Christiano, Jan Leike, Tom B. Brown, Miljan Martic, Shane Legg, Dario Amodei
- **Institutions:** OpenAI, DeepMind
- **Date (v1):** 2017-06-12
- **Publisher / venue:** NeurIPS 2017
- **Categories:** Human Feedback Loops; Position & Survey (foundational)
- **Keywords:** preference learning, RLHF, reward modeling, trajectory comparisons
- **Primary link:** https://papers.nips.cc/paper/2017/hash/d5e2c0adad503c91f91df240d0cd4e49-Abstract.html
- **arXiv ID:** 1706.03741
- **Other source links:** arXiv: https://arxiv.org/abs/1706.03741
- **TLDR:** Introduces learning from pairwise human preferences over agent trajectories, with feedback on under 1% of interactions sufficient to train Atari/locomotion policies. Establishes the canonical training-from-use loop later used in InstructGPT/ChatGPT.
- **Why it qualifies (coevolutionary lens):** Humans→AI: pairwise preferences define the reward; AI→Humans: subsequent agent behavior shapes the trajectories future labelers see, changing what they prefer.
- **Verification notes:** Confirmed via NeurIPS proceedings hash and arXiv abs.

### 4. A Survey on Human-AI Teaming with Large Pre-Trained Models
- **Authors:** Vanshika Vats, Marzia Binta Nizam, Minghao Liu, Ziyuan Wang, Richard Ho, Mohnish Sai Prasad, Vincent Titterton, Sai Venkat Malreddy, Riya Aggarwal, Yanwen Xu, Lei Ding, Jay Mehta, Nathan Grinnell, Li Liu, Sijia Zhong, Devanathan Nallur Gandamani, Xinyi Tang, Rohan Ghosalkar, Celeste Shen, Rachel Shen, Nafisa Hussain, Kesav Ravichandran, James Davis
- **Institutions:** UC Santa Cruz
- **Date (v1):** 2024-03-07
- **Publisher / venue:** arXiv (survey)
- **Categories:** Position & Survey
- **Keywords:** human-AI teaming, foundation models, RLHF, active learning
- **Primary link:** https://arxiv.org/abs/2403.04931
- **arXiv ID:** 2403.04931
- **TLDR:** Surveys four pillars of human–AI teaming with foundation models, including human-in-the-loop training, RLHF, UI/system design for joint work, and trust/safety. Maps how human input shapes models and how models reshape human workflows.
- **Why it qualifies:** Humans→AI: HITL/RLHF/active-learning frame; AI→Humans: discusses how deployed assistants reshape workflows.
- **Verification notes:** arXiv abs confirmed.

### 5. AI-Mediated Communication: Definition, Research Agenda, and Ethical Considerations
- **Authors:** Jeffrey T. Hancock, Mor Naaman, Karen Levy
- **Institutions:** Stanford, Cornell Tech
- **Date (v1):** 2020
- **Publisher / venue:** Journal of Computer-Mediated Communication 25(1), 2020
- **Categories:** Position & Survey
- **Keywords:** AI-mediated communication, smart reply, interpersonal effects
- **Primary link:** https://academic.oup.com/jcmc/article/25/1/89/5714020
- **TLDR:** Defines AI-mediated communication and lays out a research agenda spanning linguistic, relational, and societal effects of AI participating in human messaging. Highlights how AI assistants change both senders' messages and recipients' perceptions.
- **Why it qualifies:** Humans→AI: user message data trains AI-MC systems; AI→Humans: AI suggestions alter wording and interpersonal perception over time.
- **Verification notes:** Confirmed at OUP DOI page.

### 6. Steroids, Sneakers, Coach: A Spectrum of Human-AI Relationships
- **Authors:** Jake M. Hofman, Daniel G. Goldstein, David M. Rothschild
- **Institutions:** Microsoft Research
- **Date (v1):** 2023-09-20
- **Publisher / venue:** SSRN preprint (later versions in workshop venues)
- **Categories:** Position & Survey
- **Keywords:** augmentation, deskilling, training-wheels, AI–human relationships
- **Primary link:** https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4578180
- **TLDR:** Frames human–AI relationships along a spectrum from short-term performance boosters ("steroids") to durable skill-builders ("coaches"). Provides a coevolutionary lens for distinguishing AI uses that erode vs. enhance human capability.
- **Why it qualifies:** Humans→AI: usage choices set the relationship type; AI→Humans: each type produces different long-run skill trajectories.
- **Verification notes:** SSRN abstract page confirmed.

### 7. Guidelines for Human-AI Interaction
- **Authors:** Saleema Amershi, Daniel S. Weld, Mihaela Vorvoreanu, Adam Fourney, Besmira Nushi, Penny Collisson, Jina Suh, Shamsi T. Iqbal, Paul N. Bennett, Kori Inkpen, Jaime Teevan, Ruth Kikin-Gil, Eric Horvitz
- **Institutions:** Microsoft Research, U. Washington
- **Date (v1):** 2019-05
- **Publisher / venue:** CHI 2019
- **Categories:** Position & Survey; Collaboration & Co-Creation
- **Keywords:** design guidelines, AI-infused systems, mixed-initiative, learning from user behavior
- **Primary link:** https://doi.org/10.1145/3290605.3300233
- **TLDR:** Proposes 18 design guidelines for AI-infused interfaces, including "learn from user behavior" and "update and adapt cautiously." Codifies how user interaction should reciprocally shape AI behavior over time.
- **Why it qualifies:** Humans→AI: guidelines explicitly call for learning from user behavior; AI→Humans: design rules govern how adaptive AI shapes user experience.
- **Verification notes:** ACM DL DOI confirmed.

### 8. Complementarity in Human-AI Collaboration: Concept, Sources, and Evidence
- **Authors:** Patrick Hemmer, Max Schemmer, Niklas Kühl, Michael Vössing, Gerhard Satzger
- **Institutions:** KIT, U. Bayreuth
- **Date (v1):** 2024-04 (arXiv 2404.00029)
- **Publisher / venue:** European Journal of Information Systems, 2025
- **Categories:** Position & Survey; Collaboration & Co-Creation
- **Keywords:** complementary team performance, information asymmetry, calibration
- **Primary link:** https://www.tandfonline.com/doi/full/10.1080/0960085X.2025.2475962
- **arXiv ID:** 2404.00029
- **TLDR:** Formalizes complementary team performance and identifies information/capability asymmetry as the key sources. Synthesizes empirical evidence on when human–AI teams beat either alone.
- **Why it qualifies:** Humans→AI: human input/correction; AI→Humans: AI outputs change human decisions and performance.
- **Verification notes:** T&F DOI and arXiv confirmed.

---

### Human Feedback Loops (RLHF / preference learning as coevolution)

### 9. Learning to Summarize from Human Feedback
- **Authors:** Nisan Stiennon, Long Ouyang, Jeff Wu, Daniel M. Ziegler, Ryan Lowe, Chelsea Voss, Alec Radford, Dario Amodei, Paul F. Christiano
- **Institutions:** OpenAI
- **Date (v1):** 2020-09-02
- **Publisher / venue:** NeurIPS 2020
- **Categories:** Human Feedback Loops
- **Keywords:** summarization, RLHF, reward model, TL;DR
- **Primary link:** https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html
- **arXiv ID:** 2009.01325
- **TLDR:** Trains summarization policies against a reward model fit to human comparisons of model outputs. Shows resulting summaries are preferred over reference summaries and over much larger supervised models.
- **Why it qualifies:** Humans→AI: pairwise summary judgments retrain the policy; AI→Humans: the resulting model defines what "good summary" means in subsequent labelers' workflows.
- **Verification notes:** NeurIPS hash and arXiv confirmed.

### 10. Training Language Models to Follow Instructions with Human Feedback (InstructGPT)
- **Authors:** Long Ouyang, Jeffrey Wu, Xu Jiang, Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin, Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke Miller, Maddie Simens, Amanda Askell, Peter Welinder, Paul Christiano, Jan Leike, Ryan Lowe
- **Institutions:** OpenAI
- **Date (v1):** 2022-03-04
- **Publisher / venue:** NeurIPS 2022
- **Categories:** Human Feedback Loops
- **Keywords:** RLHF, instruction tuning, InstructGPT, alignment
- **Primary link:** https://arxiv.org/abs/2203.02155
- **arXiv ID:** 2203.02155
- **Other source links:** publisher_page: https://dl.acm.org/doi/10.5555/3600270.3602281
- **TLDR:** Uses labeler demonstrations and ranked preferences to fine-tune GPT-3 into InstructGPT. A 1.3B InstructGPT is preferred to 175B GPT-3, demonstrating that aligned outputs reshape what users subsequently expect from LLMs.
- **Why it qualifies:** Humans→AI: labeler demos + rankings; AI→Humans: instruction-tuned models redefine user prompting and expectations.
- **Verification notes:** arXiv and ACM DL confirmed.

### 11. Constitutional AI: Harmlessness from AI Feedback
- **Authors:** Yuntao Bai, Saurav Kadavath, Sandipan Kundu, Amanda Askell, Jackson Kernion, et al. (51 authors)
- **Institutions:** Anthropic
- **Date (v1):** 2022-12-15
- **Publisher / venue:** arXiv preprint (Anthropic technical report)
- **Categories:** Human Feedback Loops
- **Keywords:** RLAIF, constitution, self-critique, harmlessness
- **Primary link:** https://arxiv.org/abs/2212.08073
- **arXiv ID:** 2212.08073
- **TLDR:** Replaces some human harmlessness labels with AI feedback grounded in a written human "constitution." Shows the loop from human-written principles → AI critiques → preference model → policy.
- **Why it qualifies:** Humans→AI: principles authored by humans; AI→Humans: deployed assistant shapes which queries users frame as harmful or acceptable.
- **Verification notes:** arXiv abs confirmed; arXiv-only flagged.

### 12. Towards Understanding Sycophancy in Language Models
- **Authors:** Mrinank Sharma, Meg Tong, Tomasz Korbak, David Duvenaud, Amanda Askell, Samuel R. Bowman, Newton Cheng, Esin Durmus, Zac Hatfield-Dodds, Scott R. Johnston, Shauna Kravec, Timothy Maxwell, Sam McCandlish, Kamal Ndousse, Oliver Rausch, Nicholas Schiefer, Da Yan, Miranda Zhang, Ethan Perez
- **Institutions:** Anthropic
- **Date (v1):** 2023-10-20
- **Publisher / venue:** ICLR 2024
- **Categories:** Human Feedback Loops
- **Keywords:** sycophancy, RLHF, preference data bias
- **Primary link:** https://openreview.net/forum?id=tvhaxkMKAn
- **arXiv ID:** 2310.13548
- **TLDR:** Demonstrates that five RLHF assistants exhibit sycophancy and traces it to human preference data that favors agreeable responses. Shows the human→AI training loop produces models that then bias future human users.
- **Why it qualifies:** Humans→AI: preference labelers reward agreement; AI→Humans: sycophantic models reinforce user beliefs and shift judgments.
- **Verification notes:** OpenReview ICLR 2024 page and arXiv confirmed.

### 13. How Human–AI Feedback Loops Alter Human Perceptual, Emotional and Social Judgements
- **Authors:** Moshe Glickman, Tali Sharot
- **Institutions:** UCL, Max Planck UCL Centre, MIT
- **Date (v1):** 2024-12-18
- **Publisher / venue:** Nature Human Behaviour 9, 345–359 (2025)
- **Categories:** Human Feedback Loops; Mutual Adaptation
- **Keywords:** bias amplification, perceptual judgment, feedback loop
- **Primary link:** https://www.nature.com/articles/s41562-024-02077-2
- **TLDR:** Across experiments with 1,401 participants, shows that AI trained on human judgments amplifies subtle biases, which humans then internalize, producing a snowballing perceptual/social bias loop. Direct empirical evidence of bidirectional coevolution.
- **Why it qualifies:** Humans→AI: initial human classifications train the CNN; AI→Humans: biased AI outputs reshape downstream human judgments.
- **Verification notes:** Nature DOI and PubMed confirmed.

### 14. How RLHF Amplifies Sycophancy
- **Authors:** Itai Shapira, Gerdus Benadè, Ariel D. Procaccia
- **Institutions:** Harvard, Boston University
- **Date (v1):** 2026-02 (arXiv:2602.01002)
- **Publisher / venue:** arXiv preprint (2026)
- **Categories:** Human Feedback Loops
- **Keywords:** RLHF, sycophancy amplification, Bradley-Terry, KL divergence
- **Primary link:** https://arxiv.org/abs/2602.01002
- **arXiv ID:** 2602.01002
- **TLDR:** Provides a formal analysis showing how preference-based post-training amplifies sycophancy, identifying a covariance condition that drives behavioral drift. Proposes a closed-form agreement-penalty correction.
- **Why it qualifies:** Humans→AI: biased pairwise preferences shape reward model; AI→Humans: deployed model is more sycophantic, biasing user beliefs.
- **Verification notes:** arXiv abs confirmed; arXiv-only flagged.

### 15. Generative AI at Work
- **Authors:** Erik Brynjolfsson, Danielle Li, Lindsey R. Raymond
- **Institutions:** Stanford, MIT Sloan
- **Date (v1):** 2023-04-23 (arXiv:2304.11771); NBER w31161
- **Publisher / venue:** Quarterly Journal of Economics 140(2):889 (2025)
- **Categories:** Human Feedback Loops; Longitudinal HCI Studies
- **Keywords:** customer support, generative AI, productivity, learning curve
- **Primary link:** https://academic.oup.com/qje/article/140/2/889/7990658
- **arXiv ID:** 2304.11771
- **Other source links:** publisher_page: https://www.nber.org/papers/w31161
- **TLDR:** Staggered field deployment of a GPT-based chat assistant to 5,172 support agents shows 14–15% productivity gains, concentrated in novices, and disseminates best-performer behaviors to others.
- **Why it qualifies:** Humans→AI: best-agent transcripts feed assistant; AI→Humans: agents (especially novices) learn from suggestions, shifting their language and skill.
- **Verification notes:** QJE DOI, NBER, arXiv confirmed.

### 16. Anti-stereotypical Predictive Text Suggestions Do Not Reliably Yield Anti-stereotypical Writing
- **Authors:** Connor Baumler, Hal Daumé III, Hanna Wallach (et al.)
- **Institutions:** UMD; Microsoft Research
- **Date (v1):** 2024-09-30
- **Publisher / venue:** EMNLP/ACL workshop track (verify in publisher page)
- **Categories:** Human Feedback Loops; Collaboration & Co-Creation
- **Keywords:** predictive text, gender bias, co-writing
- **Primary link:** https://arxiv.org/abs/2409.20390
- **arXiv ID:** 2409.20390
- **TLDR:** Tests whether anti-stereotypical text suggestions debias users' writing; finds the effect is unreliable, while stereotypical suggestions do bias output.
- **Why it qualifies:** Humans→AI: prompt design and acceptance shape future training data; AI→Humans: suggestions measurably alter user wording and stereotype expression.
- **Verification notes:** arXiv abs confirmed; venue field left tentative.

---

### Coding & Software Engineering Coevolution

### 17. The Impact of AI on Developer Productivity: Evidence from GitHub Copilot
- **Authors:** Sida Peng, Eirini Kalliamvakou, Peter Cihon, Mert Demirer
- **Institutions:** Microsoft Research, GitHub, MIT
- **Date (v1):** 2023-02-13
- **Publisher / venue:** arXiv preprint (widely cited; published version at SSRN/Council of Economic Advisors 2024)
- **Categories:** Longitudinal HCI Studies; Collaboration & Co-Creation
- **Keywords:** Copilot, controlled experiment, pair programming, productivity
- **Primary link:** https://arxiv.org/abs/2302.06590
- **arXiv ID:** 2302.06590
- **TLDR:** RCT with 95 developers shows Copilot users finish an HTTP-server task 55.8% faster; gains larger for less experienced developers.
- **Why it qualifies:** Humans→AI: developer prompting and acceptance; AI→Humans: pace, structure, and skill demands of coding shift.
- **Verification notes:** arXiv confirmed; arXiv-only flagged.

### 18. Measuring GitHub Copilot's Impact on Productivity
- **Authors:** Albert Ziegler, Eirini Kalliamvakou, X. Alice Li, Andrew Rice, Devon Rifkin, Shawn Simister, Ganesh Sittampalam, Edward Aftandilian
- **Institutions:** GitHub
- **Date (v1):** 2022-05-13 (arXiv:2205.06537)
- **Publisher / venue:** Communications of the ACM 67(3):54–63 (2024)
- **Categories:** Longitudinal HCI Studies; Human Feedback Loops
- **Keywords:** acceptance rate, telemetry, productivity, pair programming
- **Primary link:** https://doi.org/10.1145/3633453
- **arXiv ID:** 2205.06537
- **TLDR:** Analyzes telemetry + 2,631 surveys; suggestion-acceptance rate is the strongest predictor of perceived productivity, varying systematically across users and time.
- **Why it qualifies:** Humans→AI: acceptance/rejection signals; AI→Humans: changes in coding rhythm and perceived productivity.
- **Verification notes:** ACM DL DOI and arXiv confirmed.

### 19. Grounded Copilot: How Programmers Interact with Code-Generating Models
- **Authors:** Shraddha Barke, Michael B. James, Nadia Polikarpova
- **Institutions:** UC San Diego
- **Date (v1):** 2022-06-30
- **Publisher / venue:** PACMPL/OOPSLA1 (2023), DOI 10.1145/3586030
- **Categories:** Collaboration & Co-Creation; Mutual Adaptation
- **Keywords:** grounded theory, acceleration, exploration, prompting
- **Primary link:** https://doi.org/10.1145/3586030
- **arXiv ID:** 2206.15000
- **TLDR:** Grounded theory of 20 programmers using Copilot identifies bimodal interaction (acceleration vs. exploration) and how prior experience changes the mode mix.
- **Why it qualifies:** Humans→AI: prompts/comments shape suggestions; AI→Humans: developers shift from synthesis to validation.
- **Verification notes:** ACM DL DOI confirmed.

### 20. Reading Between the Lines: Modeling User Behavior and Costs in AI-Assisted Programming
- **Authors:** Hussein Mozannar, Gagan Bansal, Adam Fourney, Eric Horvitz
- **Institutions:** MIT, Microsoft Research
- **Date (v1):** 2022-10-25
- **Publisher / venue:** CHI 2024
- **Categories:** Collaboration & Co-Creation; Mutual Adaptation
- **Keywords:** CUPS taxonomy, programmer states, telemetry
- **Primary link:** https://arxiv.org/abs/2210.14306
- **arXiv ID:** 2210.14306
- **Other source links:** publisher_page: https://www.microsoft.com/en-us/research/publication/reading-between-the-lines-modeling-user-behavior-and-costs-in-ai-assisted-programming-2/ ; code: https://github.com/microsoft/coderec_programming_states
- **TLDR:** Develops the 12-state CUPS taxonomy from 21 programmers labeling their own Copilot sessions, revealing hidden time costs of suggestion review.
- **Why it qualifies:** Humans→AI: telemetry retrains future suggestion ranking; AI→Humans: programmer activities reorganize around suggestion review.
- **Verification notes:** arXiv and MSR page confirmed.

### 21. Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models
- **Authors:** Priyan Vaithilingam, Tianyi Zhang, Elena L. Glassman
- **Institutions:** Harvard SEAS, Purdue
- **Date (v1):** 2022-04-27
- **Publisher / venue:** CHI 2022 EA, DOI 10.1145/3491101.3519665
- **Categories:** Collaboration & Co-Creation
- **Keywords:** Copilot, usability, debugging
- **Primary link:** https://doi.org/10.1145/3491101.3519665
- **TLDR:** 24-participant within-subjects study; while Copilot did not always speed task completion, most preferred it as a starting point. Surfaces difficulties in understanding/debugging AI-generated code.
- **Why it qualifies:** Humans→AI: prompt edits/acceptance feed product improvement; AI→Humans: shifts where developer effort lands (debugging vs. drafting).
- **Verification notes:** ACM DL DOI confirmed. (Borderline: included because of accept/reject training-loop component combined with longitudinal session analysis.)

### 22. Developer Productivity With and Without GitHub Copilot: A Longitudinal Mixed-Methods Case Study
- **Authors:** Viktoria Stray, Nils Brede Moe, et al.
- **Institutions:** University of Oslo, SINTEF, NAV IT
- **Date (v1):** 2025-09-24
- **Publisher / venue:** arXiv preprint, 2025
- **Categories:** Longitudinal HCI Studies
- **Keywords:** Copilot, two-year case study, agile, NAV IT
- **Primary link:** https://arxiv.org/abs/2509.20353
- **arXiv ID:** 2509.20353
- **TLDR:** Two-year mixed-methods study of 26,317 commits from 39 developers in a public-sector agile org; finds Copilot users were already more active pre-adoption and that perceived productivity rose without statistically significant commit-volume change.
- **Why it qualifies:** Humans→AI: real-deployment usage; AI→Humans: changes in flow and verification practice over months.
- **Verification notes:** arXiv abs confirmed; arXiv-only flagged.

### 23. Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions
- **Authors:** Hammond Pearce, Baleegh Ahmad, Benjamin Tan, Brendan Dolan-Gavitt, Ramesh Karri
- **Institutions:** NYU
- **Date (v1):** 2021-08-20
- **Publisher / venue:** IEEE S&P 2022
- **Categories:** Collaboration & Co-Creation
- **Keywords:** Copilot, CWE, vulnerability, code security
- **Primary link:** https://ieeexplore.ieee.org/document/9833571/
- **arXiv ID:** 2108.09293
- **TLDR:** Across 89 CWE scenarios, ~40% of Copilot completions are vulnerable. Quantifies how AI coding assistants could shape developers' security-relevant decisions.
- **Why it qualifies:** Humans→AI: training data is human code; AI→Humans: insecure suggestions reshape what developers ship.
- **Verification notes:** IEEE Xplore + arXiv confirmed.

### 24. Do Users Write More Insecure Code with AI Assistants?
- **Authors:** Neil Perry, Megha Srivastava, Deepak Kumar, Dan Boneh
- **Institutions:** Stanford
- **Date (v1):** 2022-11-07
- **Publisher / venue:** ACM CCS 2023
- **Categories:** Collaboration & Co-Creation; Mutual Adaptation
- **Keywords:** security, AI assistant, user study
- **Primary link:** https://doi.org/10.1145/3576915.3623157
- **arXiv ID:** 2211.03622
- **TLDR:** User study (n=47) showing developers with AI assistance produce more security vulnerabilities yet believe their code is safer. Concrete bidirectional behavioral effect.
- **Why it qualifies:** Humans→AI: user prompts; AI→Humans: shifts perceived correctness and resulting code security.
- **Verification notes:** ACM DL CCS DOI confirmed.

### 25. Sea Change in Software Development: Economic and Productivity Analysis of the AI-Powered Developer Lifecycle
- **Authors:** Thomas Dohmke, Marco Iansiti, Greg Richards
- **Institutions:** GitHub, Harvard Business School, Keystone.AI
- **Date (v1):** 2023-06-26
- **Publisher / venue:** arXiv preprint
- **Categories:** Longitudinal HCI Studies
- **Keywords:** Copilot, acceptance rate, longitudinal benefit
- **Primary link:** https://arxiv.org/abs/2306.15033
- **arXiv ID:** 2306.15033
- **TLDR:** Telemetry from 934,533 Copilot users shows acceptance ~30% with productivity benefit growing over time and largest for less experienced developers.
- **Why it qualifies:** Humans→AI: acceptance choices shape product roadmap; AI→Humans: longitudinal shift in developer behavior and benefit accumulates.
- **Verification notes:** arXiv abs confirmed; arXiv-only.

### 26. The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers (Cui et al.)
- **Authors:** Zheyuan (Kevin) Cui, Mert Demirer, Sonia Jaffe, Leon Musolff, Sida Peng, Tobias Salz
- **Institutions:** Microsoft Research, MIT, Princeton, Wharton
- **Date (v1):** 2024 (NBER); forthcoming Management Science
- **Publisher / venue:** Management Science, forthcoming
- **Categories:** Longitudinal HCI Studies
- **Keywords:** Copilot, field experiment, completed tasks, less-experienced developers
- **Primary link:** https://www.sidapeng.com/research-1
- **TLDR:** Three RCTs at Microsoft, Accenture, and a Fortune-100 firm find a 26% increase in completed tasks with Copilot, with the largest gains among less-experienced developers.
- **Why it qualifies:** Humans→AI: real workflow usage; AI→Humans: changes pace, completion rate, and seniority distribution of work.
- **Verification notes:** Author homepage; final venue forthcoming.

### 27. Artificial Intelligence in Communication Impacts Language and Social Relationships
- **Authors:** Jess Hohenstein, Rene F. Kizilcec, Dominic DiFranzo, Zhila Aghajari, Hannah Mieczkowski, Karen Levy, Mor Naaman, Jeffrey T. Hancock, Malte Jung
- **Institutions:** Cornell, Stanford
- **Date (v1):** 2023-04
- **Publisher / venue:** Scientific Reports 13, 5487 (2023)
- **Categories:** Mutual Adaptation
- **Keywords:** smart reply, positivity bias, interpersonal perception
- **Primary link:** https://pmc.ncbi.nlm.nih.gov/articles/PMC10073210/
- **TLDR:** Field-style experiments show AI-generated suggestions skew message sentiment positive and alter how humans perceive each other's emotions.
- **Why it qualifies:** Humans→AI: chosen replies feed model; AI→Humans: language and interpersonal perception shift.
- **Verification notes:** PMC page confirmed.

---

### Writing & Language Coevolution

### 28. CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities
- **Authors:** Mina Lee, Percy Liang, Qian Yang
- **Institutions:** Stanford, Cornell
- **Date (v1):** 2022-01-18
- **Publisher / venue:** CHI 2022
- **Categories:** Collaboration & Co-Creation
- **Keywords:** co-writing, GPT-3, dataset, keystrokes
- **Primary link:** https://doi.org/10.1145/3491102.3502030
- **arXiv ID:** 2201.06796
- **Other source links:** dataset: https://coauthor.stanford.edu
- **TLDR:** Releases a 1,445-session dataset of 63 writers with 4 GPT-3 instances; analyzes how GPT-3 contributes to ideation and language and how writers accept or rewrite suggestions.
- **Why it qualifies:** Humans→AI: choice of suggestion creates fine-grained training signal; AI→Humans: suggestions shape ideation and lexicon.
- **Verification notes:** arXiv + project page confirmed.

### 29. Co-Writing with Opinionated Language Models Affects Users' Views
- **Authors:** Maurice Jakesch, Advait Bhat, Daniel Buschek, Lior Zalmanson, Mor Naaman
- **Institutions:** Cornell Tech, Microsoft Research, U. Bayreuth, Tel Aviv U.
- **Date (v1):** 2023-02-01
- **Publisher / venue:** CHI 2023
- **Categories:** Mutual Adaptation; Human Feedback Loops
- **Keywords:** opinion shift, co-writing, latent persuasion
- **Primary link:** https://doi.org/10.1145/3544548.3581196
- **arXiv ID:** 2302.00560
- **TLDR:** N=1,506 online experiment shows that writing with an opinionated assistant shifts both the produced text and post-task attitudes of users on social media.
- **Why it qualifies:** Humans→AI: prompts/configuration choose model stance; AI→Humans: opinion shifts measured in users' beliefs.
- **Verification notes:** ACM DL DOI confirmed.

### 30. Does Writing with Language Models Reduce Content Diversity?
- **Authors:** Vishakh Padmakumar, He He
- **Institutions:** NYU
- **Date (v1):** 2023-09-11
- **Publisher / venue:** ICLR 2024
- **Categories:** Mutual Adaptation; Human Feedback Loops
- **Keywords:** homogenization, InstructGPT, RLHF side effects
- **Primary link:** https://openreview.net/forum?id= (verify on OpenReview)
- **arXiv ID:** 2309.05196
- **TLDR:** Controlled essay experiment finds InstructGPT (RLHF-tuned) reduces lexical and content diversity across authors, while base GPT-3 does not.
- **Why it qualifies:** Humans→AI: RLHF preferences shape model; AI→Humans: model homogenizes downstream human-written content.
- **Verification notes:** arXiv confirmed; OpenReview URL fragment unverified.

### 31. AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances
- **Authors:** Dhruv Agarwal, Mor Naaman, Aditya Vashistha
- **Institutions:** Cornell, Cornell Tech
- **Date (v1):** 2024-09-17
- **Publisher / venue:** CHI 2025
- **Categories:** Mutual Adaptation
- **Keywords:** cultural homogenization, autocomplete, India/US
- **Primary link:** https://arxiv.org/abs/2409.11360
- **arXiv ID:** 2409.11360
- **TLDR:** With 118 participants from US and India, shows AI autocomplete pulls Indian writing toward Western style at content and stylistic levels, creating a feedback loop in future training data.
- **Why it qualifies:** Humans→AI: user acceptance creates new training distribution; AI→Humans: cultural style of human output measurably shifts.
- **Verification notes:** arXiv + Cornell Chronicle confirm CHI 2025.

### 32. Generative AI Enhances Individual Creativity but Reduces the Collective Diversity of Novel Content
- **Authors:** Anil R. Doshi, Oliver P. Hauser
- **Institutions:** UCL School of Management, U. Exeter
- **Date (v1):** 2024-07-12
- **Publisher / venue:** Science Advances 10(28), eadn5290 (2024)
- **Categories:** Mutual Adaptation
- **Keywords:** creativity, story writing, collective diversity
- **Primary link:** https://doi.org/10.1126/sciadv.adn5290
- **TLDR:** Online experiment showing AI ideas raise individual story creativity (especially for less creative writers) but make stories collectively more similar.
- **Why it qualifies:** Humans→AI: prompts; AI→Humans: changes both individual and aggregate creative output.
- **Verification notes:** Science DOI confirmed.

### 33. The AI Ghostwriter Effect
- **Authors:** Fiona Draxler, Anna Werner, Florian Lehmann, Matthias Hoppe, Albrecht Schmidt, Daniel Buschek, Robin Welsch
- **Institutions:** LMU Munich, U. Bayreuth, Aalto
- **Date (v1):** 2023-03-06
- **Publisher / venue:** ACM TOCHI 31(2), 2024
- **Categories:** Collaboration & Co-Creation
- **Keywords:** ownership, authorship, personalized AI
- **Primary link:** https://doi.org/10.1145/3637875
- **arXiv ID:** 2303.03283
- **TLDR:** Two empirical studies show users do not perceive ownership of AI-generated text yet self-declare authorship; personalization does not eliminate the gap.
- **Why it qualifies:** Humans→AI: personalization data; AI→Humans: shifts perceived authorship and disclosure norms.
- **Verification notes:** ACM DL TOCHI DOI confirmed.

### 34. The Impact of Multiple Parallel Phrase Suggestions on Email Input and Composition Behaviour of Native and Non-Native English Writers
- **Authors:** Daniel Buschek, Martin Zürn, Malin Eiband
- **Institutions:** U. Bayreuth, LMU Munich
- **Date (v1):** 2021-01-22
- **Publisher / venue:** CHI 2021
- **Categories:** Collaboration & Co-Creation; Mutual Adaptation
- **Keywords:** GPT-2, suggestions, native vs non-native, email
- **Primary link:** https://doi.org/10.1145/3411764.3445372
- **arXiv ID:** 2101.09157
- **TLDR:** N=156 study comparing 0/1/3/6 parallel phrase suggestions; multiple suggestions help ideation at the cost of efficiency, with stronger benefits for non-native writers.
- **Why it qualifies:** Humans→AI: suggestion acceptance trains future ranking; AI→Humans: number of suggestions changes wording and process.
- **Verification notes:** ACM DL DOI confirmed.

### 35. Sentiment Bias in Predictive Text Recommendations Results in Biased Writing
- **Authors:** Kenneth C. Arnold, Krysta Chauncey, Krzysztof Z. Gajos
- **Institutions:** Harvard SEAS
- **Date (v1):** 2018
- **Publisher / venue:** Graphics Interface 2018
- **Categories:** Mutual Adaptation
- **Keywords:** predictive text, sentiment bias, restaurant reviews
- **Primary link:** https://www.eecs.harvard.edu/~kgajos/papers/2018/arnold18sentiment.pdf
- **TLDR:** Skewed-sentiment phrase suggestions shift human-written restaurant reviews in the corresponding direction.
- **Why it qualifies:** Humans→AI: model is trained on biased data; AI→Humans: biased suggestions then bias new human writing.
- **Verification notes:** Author homepage PDF confirmed.

### 36. Predictive Text Encourages Predictable Writing
- **Authors:** Kenneth C. Arnold, Krysta Chauncey, Krzysztof Z. Gajos
- **Institutions:** Harvard SEAS
- **Date (v1):** 2020-03
- **Publisher / venue:** ACM IUI 2020
- **Categories:** Mutual Adaptation
- **Keywords:** predictive suggestions, captioning, lexical narrowing
- **Primary link:** https://doi.org/10.1145/3377325.3377523
- **TLDR:** Compares writing with vs. without predictive suggestions; users gravitate toward words the system would predict, reducing lexical diversity.
- **Why it qualifies:** Humans→AI: usage shapes future predictions; AI→Humans: predictability shapes word choice.
- **Verification notes:** ACM DL DOI confirmed.

### 37. AI-Mediated Communication: Language Use and Interpersonal Effects in a Referential Communication Task
- **Authors:** Hannah Mieczkowski, Jeffrey T. Hancock, Mor Naaman, Malte Jung, Jess Hohenstein
- **Institutions:** Stanford, Cornell, Cornell Tech
- **Date (v1):** 2021
- **Publisher / venue:** PACMHCI 5, CSCW1, 2021
- **Categories:** Mutual Adaptation
- **Keywords:** smart reply, positivity bias, social attraction
- **Primary link:** https://doi.org/10.1145/3449091
- **TLDR:** Between-subjects task showing smart-reply use produces more positive language and influences interpersonal perceptions.
- **Why it qualifies:** Humans→AI: chosen replies feed Smart Reply usage data; AI→Humans: language and perception change.
- **Verification notes:** ACM DL DOI confirmed.

### 38. Wordcraft: Story Writing with Large Language Models
- **Authors:** Ann Yuan, Andy Coenen, Emily Reif, Daphne Ippolito
- **Institutions:** Google Research
- **Date (v1):** 2022
- **Publisher / venue:** ACM IUI 2022
- **Categories:** Collaboration & Co-Creation
- **Keywords:** creative writing, mixed-initiative, LaMDA
- **Primary link:** https://doi.org/10.1145/3490099.3511105
- **TLDR:** Builds Wordcraft, an LLM-driven editor for stories; analyzes how writers adapt to and steer the model across iterative interactions.
- **Why it qualifies:** Humans→AI: prompts/edits shape generation; AI→Humans: structure and style of resulting stories shifted.
- **Verification notes:** ACM DL DOI confirmed.

### 39. Co-Writing Screenplays and Theatre Scripts with Language Models: An Evaluation by Industry Professionals
- **Authors:** Piotr Mirowski, Kory W. Mathewson, Jaylen Pittman, Richard Evans
- **Institutions:** Google DeepMind
- **Date (v1):** 2022-09-29
- **Publisher / venue:** CHI 2023
- **Categories:** Collaboration & Co-Creation; Longitudinal HCI Studies
- **Keywords:** Dramatron, screenwriting, professional writers, hierarchical generation
- **Primary link:** https://doi.org/10.1145/3544548.3581225
- **arXiv ID:** 2209.14958
- **TLDR:** Evaluation of Dramatron with 15 industry playwrights/screenwriters in extended co-writing sessions; identifies how writers iteratively adapt prompting strategy.
- **Why it qualifies:** Humans→AI: hierarchical prompts and edits; AI→Humans: structural change to writing process and output.
- **Verification notes:** ACM DL DOI confirmed.

### 40. Monitoring AI-Modified Content at Scale: A Case Study on the Impact of ChatGPT on AI Conference Peer Reviews
- **Authors:** Weixin Liang, Zachary Izzo, Yaohui Zhang, Haley Lepp, Hancheng Cao, Xuandong Zhao, Lingjiao Chen, Haotian Ye, Sheng Liu, Zhi Huang, Daniel A. McFarland, James Y. Zou
- **Institutions:** Stanford, NEC Labs
- **Date (v1):** 2024-03-11
- **Publisher / venue:** ICML 2024
- **Categories:** Mutual Adaptation; Sociotechnical
- **Keywords:** peer review, LLM detection, scientific practice
- **Primary link:** https://proceedings.mlr.press/v235/liang24b.html
- **arXiv ID:** 2403.07183
- **TLDR:** Estimates 6.5–16.9% of peer-review text at top AI conferences post-ChatGPT shows substantial LLM modification, correlating with confidence and deadline timing.
- **Why it qualifies:** Humans→AI: reviewers prompt LLMs; AI→Humans: LLM-modified reviews change scientific evaluation norms.
- **Verification notes:** PMLR proceedings + arXiv confirmed.

---

### Education / Tutoring / Skill Effects

### 41. Generative AI Can Harm Learning
- **Authors:** Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı, Rei Mariman
- **Institutions:** Wharton, U. Penn
- **Date (v1):** 2024-07
- **Publisher / venue:** SSRN preprint 4895486 (2024)
- **Categories:** Longitudinal HCI Studies; Mutual Adaptation
- **Keywords:** GPT-4 tutor, math, exam transfer, deskilling
- **Primary link:** https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486
- **TLDR:** Field experiment with ~1,000 high schoolers; "GPT Base" hurts independent exam performance vs. control, while a guarded "GPT Tutor" prevents the harm. Direct longitudinal skill-formation evidence.
- **Why it qualifies:** Humans→AI: prompt design (Base vs Tutor); AI→Humans: durable difference in retained skill.
- **Verification notes:** SSRN abstract confirmed.

### 42. Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task
- **Authors:** Nataliya Kosmyna, Eugene Hauptmann, Ye Tong Yuan, Jessica Situ, Xian-Hao Liao, Ashly Vivian Beresnitzky, Iris Braunstein, Pattie Maes
- **Institutions:** MIT Media Lab
- **Date (v1):** 2025-06-10
- **Publisher / venue:** arXiv preprint 2025
- **Categories:** Longitudinal HCI Studies
- **Keywords:** EEG, cognitive debt, essay, LLM-to-Brain
- **Primary link:** https://arxiv.org/abs/2506.08872
- **arXiv ID:** 2506.08872
- **TLDR:** Four-session EEG study (54+18 participants) shows reduced neural connectivity, ownership, and recall in heavy LLM users, with persistence after AI is removed.
- **Why it qualifies:** Humans→AI: usage patterns; AI→Humans: neural and behavioral signatures shift over weeks.
- **Verification notes:** arXiv abs confirmed; arXiv-only flagged.

### 43. The Impact of Generative AI on Critical Thinking
- **Authors:** Hao-Ping (Hank) Lee, Advait Sarkar, Lev Tankelevitch, Ian Drosos, Sean Rintel, Richard Banks, Nicholas Wilson
- **Institutions:** CMU, Microsoft Research
- **Date (v1):** 2025-04
- **Publisher / venue:** CHI 2025
- **Categories:** Longitudinal HCI Studies; Mutual Adaptation
- **Keywords:** critical thinking, knowledge workers, GenAI, confidence
- **Primary link:** https://doi.org/10.1145/3706598.3713778
- **TLDR:** Survey of 319 knowledge workers and 936 task examples; higher confidence in GenAI predicts less critical-thinking effort, while higher self-confidence predicts more.
- **Why it qualifies:** Humans→AI: trust calibration shapes use; AI→Humans: workflow shifts from authoring to verifying.
- **Verification notes:** ACM DL DOI confirmed.

### 44. Artificial Intelligence, Scientific Discovery, and Product Innovation
- **Authors:** Aidan Toner-Rodgers
- **Institutions:** MIT Department of Economics
- **Date (v1):** 2024-12-25
- **Publisher / venue:** arXiv preprint 2024 (working paper)
- **Categories:** Longitudinal HCI Studies; Mutual Adaptation
- **Keywords:** materials discovery, scientists, idea generation, skill complementarity
- **Primary link:** https://arxiv.org/abs/2412.17866
- **arXiv ID:** 2412.17866
- **TLDR:** Randomized rollout of an AI materials-discovery tool to 1,018 scientists in a U.S. R&D lab; +44% materials, +39% patents, but bottom-third see little benefit and 82% report reduced job satisfaction.
- **Why it qualifies:** Humans→AI: judgment shapes which AI candidates are tested; AI→Humans: scientific workflow rebalances toward evaluation. **Caveat:** Author has issued public concerns about authenticity of underlying data — flagged.
- **Verification notes:** arXiv abs confirmed; integrity caveat noted.

### 45. How AI Impacts Skill Formation
- **Authors:** Judy Hanwen Shen, Alex Tamkin
- **Institutions:** Stanford, Anthropic
- **Date (v1):** 2026-01
- **Publisher / venue:** arXiv preprint
- **Categories:** Longitudinal HCI Studies; Mutual Adaptation
- **Keywords:** Trio library, debugging, library learning
- **Primary link:** https://arxiv.org/abs/2601.20245
- **arXiv ID:** 2601.20245
- **TLDR:** RCT (52 engineers) on learning the Trio Python library; AI-assisted group scores 17% lower on comprehension/debugging after, with no significant productivity gain.
- **Why it qualifies:** Humans→AI: prompting/delegation behavior; AI→Humans: durable comprehension gap.
- **Verification notes:** arXiv abs confirmed; arXiv-only flagged.

### 46. From Future of Work to Future of Workers: Addressing Asymptomatic AI Harms for Dignified Human-AI Interaction
- **Authors:** (per arXiv:2601.21920 — clinical AI deployment among oncology specialists; full author list per arXiv)
- **Institutions:** (verify on arXiv abs)
- **Date (v1):** 2026-01
- **Publisher / venue:** arXiv preprint
- **Categories:** Longitudinal HCI Studies
- **Keywords:** intuition rust, deskilling, oncology, dignified HCI
- **Primary link:** https://arxiv.org/abs/2601.21920
- **arXiv ID:** 2601.21920
- **TLDR:** Year-long study of cancer specialists using AI; reveals "intuition rust"—gradual erosion of expert judgment masked by short-term operational gains.
- **Why it qualifies:** Humans→AI: clinician usage patterns; AI→Humans: chronic skill erosion.
- **Verification notes:** arXiv abs confirmed; full author list left blank pending verification.

---

### Decision-making, Creativity, Sociotechnical/Behavioral Feedback

### 47. Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality
- **Authors:** Fabrizio Dell'Acqua, Edward McFowland III, Ethan R. Mollick, Hila Lifshitz-Assaf, Katherine C. Kellogg, Saran Rajendran, Lisa Krayer, François Candelon, Karim R. Lakhani
- **Institutions:** Harvard Business School, BCG, Wharton, MIT Sloan, Warwick
- **Date (v1):** 2023-09-15
- **Publisher / venue:** Organization Science (forthcoming, pre-printed HBS WP 24-013)
- **Categories:** Collaboration & Co-Creation; Mutual Adaptation
- **Keywords:** centaur, cyborg, jagged frontier, BCG
- **Primary link:** https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838
- **TLDR:** Pre-registered RCT with 758 BCG consultants and GPT-4: +12.2% tasks, +25% speed, +40% quality inside the frontier; -19 percentage-point correctness outside it. Identifies "centaur" vs "cyborg" working patterns.
- **Why it qualifies:** Humans→AI: prompting/centaur–cyborg integration; AI→Humans: quality/skill distribution change.
- **Verification notes:** INFORMS DOI + HBS WP confirmed.

### 48. Experimental Evidence on the Productivity Effects of Generative AI
- **Authors:** Shakked Noy, Whitney Zhang
- **Institutions:** MIT
- **Date (v1):** 2023-03-01
- **Publisher / venue:** Science 381(6654):187–192 (2023)
- **Categories:** Longitudinal HCI Studies; Mutual Adaptation
- **Keywords:** ChatGPT, professional writing, productivity compression
- **Primary link:** https://www.science.org/doi/10.1126/science.adh2586
- **TLDR:** RCT with 453 college-educated professionals on writing tasks; ChatGPT cuts time 40%, raises quality 18%, compresses inequality. Two-month follow-up shows persistence in real-job adoption (1.6× treated).
- **Why it qualifies:** Humans→AI: usage choices; AI→Humans: durable adoption and skill-distribution change.
- **Verification notes:** Science DOI confirmed.

### 49. AI Models Collapse When Trained on Recursively Generated Data — *included only as a comparator/companion to entries on human-in-the-loop dynamics*
- **Authors:** Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Nicolas Papernot, Ross Anderson, Yarin Gal
- **Institutions:** Oxford, Cambridge, Imperial, Toronto
- **Date (v1):** 2023-05-27 (arXiv:2305.17493)
- **Publisher / venue:** Nature 631, 755–759 (2024)
- **Categories:** Position & Survey (boundary case)
- **Keywords:** model collapse, recursion, data ecology
- **Primary link:** https://www.nature.com/articles/s41586-024-07566-y
- **TLDR:** Demonstrates that training generative models recursively on their own outputs degrades the tails of the data distribution — context for why a *human-in-the-loop* coevolution lens matters.
- **Why it qualifies:** Borderline — kept here only because the paper is repeatedly cited as the foil to human-in-the-loop coevolution; readers should pair with entry #1 and #13. **Flagged**: this is itself an AI-on-AI dynamics paper, included as a contrast point.
- **Verification notes:** Nature DOI confirmed; included with explicit caveat.

---

## Section 3 — Borderline cases excluded

- **OpenAI WebGPT (Nakano et al. 2021)** — capability paper with RL from human feedback, but the human→AI→human loop is thin in deployment. Excluded.
- **AlphaFold (Jumper et al. 2021)** — pure capability; secondary papers on its effect on biology workflow would qualify but weren't located with strict verification.
- **Bansal et al. "Does the Whole Exceed Its Parts?" (CHI 2021)** — strong on complementarity but a one-shot decision study with no temporal/training-loop component.
- **Vaithilingam, Zhang, Glassman 2022 (CHI EA)** — included #21 because of its longitudinal-leaning framing, but borderline.
- **Doshi & Hauser 2024** — included; the borderline alternative was Padmakumar & He 2023 vs. ICLR 2024 dedup — kept ICLR version.
- **Toner-Rodgers 2024** — included with caveat after public integrity concerns.
- **Shumailov et al. 2024** — model-collapse paper, technically out-of-scope (AI-on-AI), included only as comparator with caveat.
- **Sandoval et al. "Lost at C" (USENIX Security 2023)** — strong human-LLM security study but heavy redundancy with Perry et al. 2023.

## Section 4 — Coverage gaps

- **Khanmigo / longitudinal AI tutor RCTs:** WestEd 2025 longitudinal study referenced in trade press; primary academic publication not yet locatable with verifiable metadata. *Searches tried:* "Khanmigo WestEd longitudinal," "Khan Academy randomized tutor study 2025." Excluded pending peer-reviewed source.
- **AlphaFold and scientific-practice change:** Surveys exist but the strict bidirectional criterion narrows candidates; left unfilled.
- **Recommendation-system long-run user-preference shift in deployed platforms:** Best academic candidate (Chaney et al. 2018, How Algorithmic Confounding…, RecSys 2018) was reviewed but not added in this final list to keep entry count manageable; would be a high-priority addition.
- **Position paper on coding agents (Wang 2026):** the precise venue is still pending; treated as a position paper hosted at the author's homepage.

## Section 5 — BibTeX reference list

```bibtex
@article{pedreschi2024coevolution,
  title   = {Human-{AI} Coevolution},
  author  = {Pedreschi, Dino and Pappalardo, Luca and Ferragina, Emanuele and Baeza-Yates, Ricardo and Barab{\'a}si, Albert-L{\'a}szl{\'o} and Dignum, Frank and Dignum, Virginia and Eliassi-Rad, Tina and Giannotti, Fosca and Kert{\'e}sz, J{\'a}nos and Knott, Alistair and Ioannidis, Yannis and Lukowicz, Paul and Passarella, Andrea and Pentland, Alex Sandy and Shawe-Taylor, John and Vespignani, Alessandro},
  journal = {Artificial Intelligence},
  volume  = {339},
  pages   = {104244},
  year    = {2025},
  doi     = {10.1016/j.artint.2024.104244},
  url     = {https://doi.org/10.1016/j.artint.2024.104244}
}
@misc{wang2026humansmissing,
  title        = {Position: Humans are Missing from {AI} Coding Agent Research},
  author       = {Wang, Zora Zhiruo and others},
  year         = {2026},
  howpublished = {Author homepage preprint},
  url          = {https://zorazrw.github.io/files/position-haicode.pdf}
}
@inproceedings{christiano2017preferences,
  title     = {Deep Reinforcement Learning from Human Preferences},
  author    = {Christiano, Paul F and Leike, Jan and Brown, Tom B and Martic, Miljan and Legg, Shane and Amodei, Dario},
  booktitle = {Advances in Neural Information Processing Systems 30 (NeurIPS)},
  year      = {2017},
  url       = {https://papers.nips.cc/paper/2017/hash/d5e2c0adad503c91f91df240d0cd4e49-Abstract.html}
}
@misc{vats2024survey,
  title        = {A Survey on Human-{AI} Teaming with Large Pre-Trained Models},
  author       = {Vats, Vanshika and Nizam, Marzia Binta and Liu, Minghao and Wang, Ziyuan and Ho, Richard and Prasad, Mohnish Sai and Titterton, Vincent and Malreddy, Sai Venkat and Aggarwal, Riya and Xu, Yanwen and Ding, Lei and Mehta, Jay and Grinnell, Nathan and Liu, Li and Zhong, Sijia and Gandamani, Devanathan Nallur and Tang, Xinyi and Ghosalkar, Rohan and Shen, Celeste and Shen, Rachel and Hussain, Nafisa and Ravichandran, Kesav and Davis, James},
  year         = {2024},
  howpublished = {arXiv:2403.04931},
  url          = {https://arxiv.org/abs/2403.04931}
}
@article{hancock2020aimc,
  title   = {{AI}-Mediated Communication: Definition, Research Agenda, and Ethical Considerations},
  author  = {Hancock, Jeffrey T. and Naaman, Mor and Levy, Karen},
  journal = {Journal of Computer-Mediated Communication},
  volume  = {25},
  number  = {1},
  pages   = {89--100},
  year    = {2020},
  url     = {https://academic.oup.com/jcmc/article/25/1/89/5714020}
}
@misc{hofman2023steroids,
  title        = {Steroids, Sneakers, Coach: A Spectrum of Human-{AI} Relationships},
  author       = {Hofman, Jake M. and Goldstein, Daniel G. and Rothschild, David M.},
  year         = {2023},
  howpublished = {SSRN 4578180},
  url          = {https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4578180}
}
@inproceedings{amershi2019guidelines,
  title     = {Guidelines for Human-{AI} Interaction},
  author    = {Amershi, Saleema and Weld, Daniel S. and Vorvoreanu, Mihaela and Fourney, Adam and Nushi, Besmira and Collisson, Penny and Suh, Jina and Iqbal, Shamsi T. and Bennett, Paul N. and Inkpen, Kori and Teevan, Jaime and Kikin-Gil, Ruth and Horvitz, Eric},
  booktitle = {Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems},
  year      = {2019},
  doi       = {10.1145/3290605.3300233},
  url       = {https://doi.org/10.1145/3290605.3300233}
}
@article{hemmer2025complementarity,
  title   = {Complementarity in Human-{AI} Collaboration: Concept, Sources, and Evidence},
  author  = {Hemmer, Patrick and Schemmer, Max and K{\"u}hl, Niklas and V{\"o}ssing, Michael and Satzger, Gerhard},
  journal = {European Journal of Information Systems},
  year    = {2025},
  doi     = {10.1080/0960085X.2025.2475962},
  url     = {https://www.tandfonline.com/doi/full/10.1080/0960085X.2025.2475962}
}
@inproceedings{stiennon2020summarize,
  title     = {Learning to Summarize from Human Feedback},
  author    = {Stiennon, Nisan and Ouyang, Long and Wu, Jeff and Ziegler, Daniel M. and Lowe, Ryan and Voss, Chelsea and Radford, Alec and Amodei, Dario and Christiano, Paul F.},
  booktitle = {Advances in Neural Information Processing Systems 33 (NeurIPS)},
  year      = {2020},
  url       = {https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html}
}
@inproceedings{ouyang2022instructgpt,
  title     = {Training Language Models to Follow Instructions with Human Feedback},
  author    = {Ouyang, Long and Wu, Jeffrey and Jiang, Xu and Almeida, Diogo and Wainwright, Carroll L. and Mishkin, Pamela and Zhang, Chong and Agarwal, Sandhini and Slama, Katarina and Ray, Alex and Schulman, John and Hilton, Jacob and Kelton, Fraser and Miller, Luke and Simens, Maddie and Askell, Amanda and Welinder, Peter and Christiano, Paul and Leike, Jan and Lowe, Ryan},
  booktitle = {Advances in Neural Information Processing Systems 35 (NeurIPS)},
  year      = {2022},
  url       = {https://arxiv.org/abs/2203.02155}
}
@misc{bai2022constitutional,
  title        = {Constitutional {AI}: Harmlessness from {AI} Feedback},
  author       = {Bai, Yuntao and Kadavath, Saurav and Kundu, Sandipan and Askell, Amanda and Kernion, Jackson and Jones, Andy and Chen, Anna and Goldie, Anna and Mirhoseini, Azalia and McKinnon, Cameron and others},
  year         = {2022},
  howpublished = {arXiv:2212.08073},
  doi          = {10.48550/arXiv.2212.08073},
  url          = {https://arxiv.org/abs/2212.08073}
}
@inproceedings{sharma2024sycophancy,
  title     = {Towards Understanding Sycophancy in Language Models},
  author    = {Sharma, Mrinank and Tong, Meg and Korbak, Tomasz and Duvenaud, David and Askell, Amanda and Bowman, Samuel R. and Cheng, Newton and Durmus, Esin and Hatfield-Dodds, Zac and Johnston, Scott R. and Kravec, Shauna and Maxwell, Timothy and McCandlish, Sam and Ndousse, Kamal and Rausch, Oliver and Schiefer, Nicholas and Yan, Da and Zhang, Miranda and Perez, Ethan},
  booktitle = {International Conference on Learning Representations (ICLR)},
  year      = {2024},
  url       = {https://openreview.net/forum?id=tvhaxkMKAn}
}
@article{glickman2025feedbackloops,
  title   = {How Human-{AI} Feedback Loops Alter Human Perceptual, Emotional and Social Judgements},
  author  = {Glickman, Moshe and Sharot, Tali},
  journal = {Nature Human Behaviour},
  volume  = {9},
  pages   = {345--359},
  year    = {2025},
  doi     = {10.1038/s41562-024-02077-2},
  url     = {https://www.nature.com/articles/s41562-024-02077-2}
}
@misc{shapira2026sycophancy,
  title        = {How {RLHF} Amplifies Sycophancy},
  author       = {Shapira, Itai and Benad{\`e}, Gerdus and Procaccia, Ariel D.},
  year         = {2026},
  howpublished = {arXiv:2602.01002},
  url          = {https://arxiv.org/abs/2602.01002}
}
@article{brynjolfsson2025genai,
  title   = {Generative {AI} at Work},
  author  = {Brynjolfsson, Erik and Li, Danielle and Raymond, Lindsey R.},
  journal = {Quarterly Journal of Economics},
  volume  = {140},
  number  = {2},
  pages   = {889},
  year    = {2025},
  url     = {https://academic.oup.com/qje/article/140/2/889/7990658}
}
@misc{baumler2024antistereotypical,
  title        = {When Stereotypes {GTG}: The Impact of Predictive Text Suggestions on Gender Bias in Human-{AI} Co-Writing},
  author       = {Baumler, Connor and Daum{\'e} III, Hal and Wallach, Hanna and others},
  year         = {2024},
  howpublished = {arXiv:2409.20390},
  url          = {https://arxiv.org/abs/2409.20390}
}
@misc{peng2023copilot,
  title        = {The Impact of {AI} on Developer Productivity: Evidence from {GitHub} {Copilot}},
  author       = {Peng, Sida and Kalliamvakou, Eirini and Cihon, Peter and Demirer, Mert},
  year         = {2023},
  howpublished = {arXiv:2302.06590},
  url          = {https://arxiv.org/abs/2302.06590}
}
@article{ziegler2024copilot,
  title   = {Measuring {GitHub} {Copilot}'s Impact on Productivity},
  author  = {Ziegler, Albert and Kalliamvakou, Eirini and Li, X. Alice and Rice, Andrew and Rifkin, Devon and Simister, Shawn and Sittampalam, Ganesh and Aftandilian, Edward},
  journal = {Communications of the ACM},
  volume  = {67},
  number  = {3},
  pages   = {54--63},
  year    = {2024},
  doi     = {10.1145/3633453},
  url     = {https://doi.org/10.1145/3633453}
}
@article{barke2023grounded,
  title   = {Grounded {Copilot}: How Programmers Interact with Code-Generating Models},
  author  = {Barke, Shraddha and James, Michael B. and Polikarpova, Nadia},
  journal = {Proceedings of the ACM on Programming Languages},
  volume  = {7},
  number  = {OOPSLA1},
  year    = {2023},
  doi     = {10.1145/3586030},
  url     = {https://doi.org/10.1145/3586030}
}
@inproceedings{mozannar2024reading,
  title     = {Reading Between the Lines: Modeling User Behavior and Costs in {AI}-Assisted Programming},
  author    = {Mozannar, Hussein and Bansal, Gagan and Fourney, Adam and Horvitz, Eric},
  booktitle = {Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems},
  year      = {2024},
  url       = {https://arxiv.org/abs/2210.14306}
}
@inproceedings{vaithilingam2022expectation,
  title     = {Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models},
  author    = {Vaithilingam, Priyan and Zhang, Tianyi and Glassman, Elena L.},
  booktitle = {CHI Conference on Human Factors in Computing Systems Extended Abstracts},
  year      = {2022},
  doi       = {10.1145/3491101.3519665},
  url       = {https://doi.org/10.1145/3491101.3519665}
}
@misc{stray2025nav,
  title        = {Developer Productivity With and Without {GitHub} {Copilot}: A Longitudinal Mixed-Methods Case Study},
  author       = {Stray, Viktoria and Moe, Nils Brede and others},
  year         = {2025},
  howpublished = {arXiv:2509.20353},
  url          = {https://arxiv.org/abs/2509.20353}
}
@inproceedings{pearce2022asleep,
  title     = {Asleep at the Keyboard? Assessing the Security of {GitHub} {Copilot}'s Code Contributions},
  author    = {Pearce, Hammond and Ahmad, Baleegh and Tan, Benjamin and Dolan-Gavitt, Brendan and Karri, Ramesh},
  booktitle = {2022 IEEE Symposium on Security and Privacy (SP)},
  pages     = {754--768},
  year      = {2022},
  url       = {https://ieeexplore.ieee.org/document/9833571/}
}
@inproceedings{perry2023insecure,
  title     = {Do Users Write More Insecure Code with {AI} Assistants?},
  author    = {Perry, Neil and Srivastava, Megha and Kumar, Deepak and Boneh, Dan},
  booktitle = {Proceedings of the 2023 ACM SIGSAC Conference on Computer and Communications Security},
  year      = {2023},
  doi       = {10.1145/3576915.3623157},
  url       = {https://doi.org/10.1145/3576915.3623157}
}
@misc{dohmke2023seachange,
  title        = {Sea Change in Software Development: Economic and Productivity Analysis of the {AI}-Powered Developer Lifecycle},
  author       = {Dohmke, Thomas and Iansiti, Marco and Richards, Greg},
  year         = {2023},
  howpublished = {arXiv:2306.15033},
  url          = {https://arxiv.org/abs/2306.15033}
}
@article{cui2024effects,
  title   = {The Effects of Generative {AI} on High-Skilled Work: Evidence from Three Field Experiments with Software Developers},
  author  = {Cui, Zheyuan (Kevin) and Demirer, Mert and Jaffe, Sonia and Musolff, Leon and Peng, Sida and Salz, Tobias},
  journal = {Management Science (forthcoming)},
  year    = {2024},
  url     = {https://www.sidapeng.com/research-1}
}
@article{hohenstein2023aimc,
  title   = {Artificial Intelligence in Communication Impacts Language and Social Relationships},
  author  = {Hohenstein, Jess and Kizilcec, Rene F. and DiFranzo, Dominic and Aghajari, Zhila and Mieczkowski, Hannah and Levy, Karen and Naaman, Mor and Hancock, Jeffrey T. and Jung, Malte},
  journal = {Scientific Reports},
  volume  = {13},
  pages   = {5487},
  year    = {2023},
  url     = {https://pmc.ncbi.nlm.nih.gov/articles/PMC10073210/}
}
@inproceedings{lee2022coauthor,
  title     = {{CoAuthor}: Designing a Human-{AI} Collaborative Writing Dataset for Exploring Language Model Capabilities},
  author    = {Lee, Mina and Liang, Percy and Yang, Qian},
  booktitle = {Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems},
  year      = {2022},
  doi       = {10.1145/3491102.3502030},
  url       = {https://doi.org/10.1145/3491102.3502030}
}
@inproceedings{jakesch2023cowriting,
  title     = {Co-Writing with Opinionated Language Models Affects Users' Views},
  author    = {Jakesch, Maurice and Bhat, Advait and Buschek, Daniel and Zalmanson, Lior and Naaman, Mor},
  booktitle = {Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems},
  year      = {2023},
  doi       = {10.1145/3544548.3581196},
  url       = {https://doi.org/10.1145/3544548.3581196}
}
@inproceedings{padmakumar2024diversity,
  title     = {Does Writing with Language Models Reduce Content Diversity?},
  author    = {Padmakumar, Vishakh and He, He},
  booktitle = {International Conference on Learning Representations (ICLR)},
  year      = {2024},
  url       = {https://arxiv.org/abs/2309.05196}
}
@inproceedings{agarwal2025homogenize,
  title     = {{AI} Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances},
  author    = {Agarwal, Dhruv and Naaman, Mor and Vashistha, Aditya},
  booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  year      = {2025},
  url       = {https://arxiv.org/abs/2409.11360}
}
@article{doshi2024creativity,
  title   = {Generative {AI} Enhances Individual Creativity but Reduces the Collective Diversity of Novel Content},
  author  = {Doshi, Anil R. and Hauser, Oliver P.},
  journal = {Science Advances},
  volume  = {10},
  number  = {28},
  pages   = {eadn5290},
  year    = {2024},
  doi     = {10.1126/sciadv.adn5290},
  url     = {https://www.science.org/doi/10.1126/sciadv.adn5290}
}
@article{draxler2024ghostwriter,
  title   = {The {AI} Ghostwriter Effect: When Users Do Not Perceive Ownership of {AI}-Generated Text But Self-Declare as Authors},
  author  = {Draxler, Fiona and Werner, Anna and Lehmann, Florian and Hoppe, Matthias and Schmidt, Albrecht and Buschek, Daniel and Welsch, Robin},
  journal = {ACM Transactions on Computer-Human Interaction},
  volume  = {31},
  number  = {2},
  year    = {2024},
  doi     = {10.1145/3637875},
  url     = {https://doi.org/10.1145/3637875}
}
@inproceedings{buschek2021phrase,
  title     = {The Impact of Multiple Parallel Phrase Suggestions on Email Input and Composition Behaviour of Native and Non-Native English Writers},
  author    = {Buschek, Daniel and Z{\"u}rn, Martin and Eiband, Malin},
  booktitle = {Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems},
  year      = {2021},
  doi       = {10.1145/3411764.3445372},
  url       = {https://doi.org/10.1145/3411764.3445372}
}
@inproceedings{arnold2018sentiment,
  title     = {Sentiment Bias in Predictive Text Recommendations Results in Biased Writing},
  author    = {Arnold, Kenneth C. and Chauncey, Krysta and Gajos, Krzysztof Z.},
  booktitle = {Graphics Interface 2018},
  year      = {2018},
  url       = {https://www.eecs.harvard.edu/~kgajos/papers/2018/arnold18sentiment.pdf}
}
@inproceedings{arnold2020predictive,
  title     = {Predictive Text Encourages Predictable Writing},
  author    = {Arnold, Kenneth C. and Chauncey, Krysta and Gajos, Krzysztof Z.},
  booktitle = {Proceedings of the 25th International Conference on Intelligent User Interfaces (IUI)},
  year      = {2020},
  doi       = {10.1145/3377325.3377523},
  url       = {https://doi.org/10.1145/3377325.3377523}
}
@article{mieczkowski2021aimc,
  title   = {{AI}-Mediated Communication: Language Use and Interpersonal Effects in a Referential Communication Task},
  author  = {Mieczkowski, Hannah and Hancock, Jeffrey T. and Naaman, Mor and Jung, Malte and Hohenstein, Jess},
  journal = {Proceedings of the ACM on Human-Computer Interaction},
  volume  = {5},
  number  = {CSCW1},
  year    = {2021},
  doi     = {10.1145/3449091},
  url     = {https://doi.org/10.1145/3449091}
}
@inproceedings{yuan2022wordcraft,
  title     = {Wordcraft: Story Writing With Large Language Models},
  author    = {Yuan, Ann and Coenen, Andy and Reif, Emily and Ippolito, Daphne},
  booktitle = {Proceedings of the 27th International Conference on Intelligent User Interfaces (IUI)},
  year      = {2022},
  doi       = {10.1145/3490099.3511105},
  url       = {https://doi.org/10.1145/3490099.3511105}
}
@inproceedings{mirowski2023dramatron,
  title     = {Co-Writing Screenplays and Theatre Scripts with Language Models: An Evaluation by Industry Professionals},
  author    = {Mirowski, Piotr and Mathewson, Kory W. and Pittman, Jaylen and Evans, Richard},
  booktitle = {Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems},
  year      = {2023},
  doi       = {10.1145/3544548.3581225},
  url       = {https://doi.org/10.1145/3544548.3581225}
}
@inproceedings{liang2024monitoring,
  title     = {Monitoring {AI}-Modified Content at Scale: A Case Study on the Impact of {ChatGPT} on {AI} Conference Peer Reviews},
  author    = {Liang, Weixin and Izzo, Zachary and Zhang, Yaohui and Lepp, Haley and Cao, Hancheng and Zhao, Xuandong and Chen, Lingjiao and Ye, Haotian and Liu, Sheng and Huang, Zhi and McFarland, Daniel A. and Zou, James Y.},
  booktitle = {Proceedings of the 41st International Conference on Machine Learning (ICML)},
  year      = {2024},
  url       = {https://proceedings.mlr.press/v235/liang24b.html}
}
@misc{bastani2024genai,
  title        = {Generative {AI} Can Harm Learning},
  author       = {Bastani, Hamsa and Bastani, Osbert and Sungu, Alp and Ge, Haosen and Kabakc{\i}, {\"O}zge and Mariman, Rei},
  year         = {2024},
  howpublished = {SSRN 4895486},
  url          = {https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4895486}
}
@misc{kosmyna2025brain,
  title        = {Your Brain on {ChatGPT}: Accumulation of Cognitive Debt when Using an {AI} Assistant for Essay Writing Task},
  author       = {Kosmyna, Nataliya and Hauptmann, Eugene and Yuan, Ye Tong and Situ, Jessica and Liao, Xian-Hao and Beresnitzky, Ashly Vivian and Braunstein, Iris and Maes, Pattie},
  year         = {2025},
  howpublished = {arXiv:2506.08872},
  url          = {https://arxiv.org/abs/2506.08872}
}
@inproceedings{lee2025criticalthinking,
  title     = {The Impact of Generative {AI} on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers},
  author    = {Lee, Hao-Ping and Sarkar, Advait and Tankelevitch, Lev and Drosos, Ian and Rintel, Sean and Banks, Richard and Wilson, Nicholas},
  booktitle = {Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  year      = {2025},
  doi       = {10.1145/3706598.3713778},
  url       = {https://doi.org/10.1145/3706598.3713778}
}
@misc{tonerrodgers2024ai,
  title        = {Artificial Intelligence, Scientific Discovery, and Product Innovation},
  author       = {Toner-Rodgers, Aidan},
  year         = {2024},
  howpublished = {arXiv:2412.17866},
  url          = {https://arxiv.org/abs/2412.17866}
}
@misc{shen2026skillformation,
  title        = {How {AI} Impacts Skill Formation},
  author       = {Shen, Judy Hanwen and Tamkin, Alex},
  year         = {2026},
  howpublished = {arXiv:2601.20245},
  url          = {https://arxiv.org/abs/2601.20245}
}
@misc{anon2026futureworkers,
  title        = {From Future of Work to Future of Workers: Addressing Asymptomatic {AI} Harms for Dignified Human-{AI} Interaction},
  author       = {{Anonymous (full author list pending verification)}},
  year         = {2026},
  howpublished = {arXiv:2601.21920},
  url          = {https://arxiv.org/abs/2601.21920}
}
@article{dellacqua2025jagged,
  title   = {Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality},
  author  = {Dell'Acqua, Fabrizio and McFowland III, Edward and Mollick, Ethan R. and Lifshitz-Assaf, Hila and Kellogg, Katherine C. and Rajendran, Saran and Krayer, Lisa and Candelon, Fran{\c c}ois and Lakhani, Karim R.},
  journal = {Organization Science},
  year    = {2025},
  doi     = {10.1287/orsc.2025.21838},
  url     = {https://pubsonline.informs.org/doi/10.1287/orsc.2025.21838}
}
@article{noy2023chatgpt,
  title   = {Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence},
  author  = {Noy, Shakked and Zhang, Whitney},
  journal = {Science},
  volume  = {381},
  number  = {6654},
  pages   = {187--192},
  year    = {2023},
  doi     = {10.1126/science.adh2586},
  url     = {https://www.science.org/doi/10.1126/science.adh2586}
}
@article{shumailov2024collapse,
  title   = {{AI} Models Collapse When Trained on Recursively Generated Data},
  author  = {Shumailov, Ilia and Shumaylov, Zakhar and Zhao, Yiren and Papernot, Nicolas and Anderson, Ross and Gal, Yarin},
  journal = {Nature},
  volume  = {631},
  pages   = {755--759},
  year    = {2024},
  doi     = {10.1038/s41586-024-07566-y},
  url     = {https://www.nature.com/articles/s41586-024-07566-y}
}
```

*Caveats: (a) Several preprint-only entries are flagged because peer-reviewed versions did not yet exist at verification time. (b) Entry 49 (Shumailov et al.) is included strictly as a comparator/contrast for the human-in-the-loop coevolution lens, not as an in-scope coevolution paper. (c) Entry 46 has its full author list left blank pending direct verification of the arXiv abstract page. (d) WestEd Khanmigo and AlphaFold-related coevolution work could not be sourced with strict verification and are noted as gaps.*