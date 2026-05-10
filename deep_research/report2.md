Human-AI Coevolution Research Map
Executive summary
The supplied brief asks for a concise but rigorous curation of 40–60 papers on human–AI coevolution, using a strict inclusion rule: each paper should show both humans shaping AI behavior and AI reshaping human behavior, language, workflow, skill, or future data. It also asks for explicit handling of exclusions, mixed-strength evidence, and a final BibTeX reference list; the brief does not specify a target audience or maximum length. 

Using that standard, the highest-confidence corpus I could assemble from authoritative or near-authoritative sources contains 42 papers. The strongest clusters are: software engineering and coding assistants, education/writing/literacy, human-feedback and alignment loops, human–robot mutual adaptation, and recommender-system feedback loops. Across these literatures, the most persuasive coevolutionary evidence appears when the AI system is not merely “used,” but is embedded in an iterative loop that changes what humans do next: how they prompt, revise, monitor, collaborate, learn, or produce future data. 

Three conclusions stand out. First, recommenders and shared-autonomy systems provide the cleanest “textbook” cases of coevolution because the feedback loop is explicit in the system design: user responses retrain the model, and the model’s outputs alter later user behavior. 
 Second, coding and writing assistants now offer a large and rapidly growing empirical literature showing that AI changes workflow structure, review behavior, ideation, and linguistic style, while repeated prompting, re-prompting, acceptance, rejection, and organizational adoption patterns shape the assistant’s effective behavior. 
 Third, many of the freshest papers in coding and writing are still preprints or conference papers, so the empirical frontier is moving faster than journal consolidation. 

One seed explicitly named in the brief—“Humans Are Missing from AI Coding Agent Research”—could not be fully verified from an authoritative page within the retrieved source set, so I do not include it in the main corpus. I flag it below as an open verification item rather than treating it as a confirmed inclusion. 

Calibration check
I used the brief’s inclusion rule literally: a paper entered the main list only if it offered a plausible bidirectional loop in which humans adapt, supervise, prompt, teach, or provide feedback, and the AI system changes later human behavior, cognition, collaboration, or data generation. This means I intentionally favored: longitudinal field studies, multi-turn interaction studies, shared-autonomy work, naturalistic logs, training-from-feedback pipelines, and recommender feedback-loop papers. I intentionally down-weighted: pure benchmark papers, static model papers with no human side, and one-shot productivity studies without an iterative component. 

A useful way to think about the included literature is the following common loop: humans generate prompts, demonstrations, ratings, corrections, or behavioral traces; the AI system updates or conditions on them; AI outputs then shift human action, language, trust, skill, or exposure; those altered human behaviors become the next round of data. That framing is explicit in the coevolution paper and recurs in alignment, HRI, coding, and recommender work. 

Human goals, prompts, feedback, demonstrations

AI model or policy

AI outputs, recommendations, actions

Human behavior, trust, skill, language, workflow

New traces, labels, ratings, edits, interactions



Show code
Coverage overview
Category	Included papers	What makes the loop bidirectional	Representative examples
Position and synthesis	6	Formalizes coevolution, symbiosis, trust, or agentic SDLC shifts as reciprocal systems	Human-AI coevolution; Human-AI experience in IDEs
Human feedback and alignment loops	8	Human labels/preferences shape the model; model behavior changes later human supervision and elicitation	Deep RL from Human Preferences; InstructGPT
Coding and software engineering	8	Developers adapt prompts/review habits/organizational workflows; assistants restructure coding, editing, and collaboration	Evolving with AI; Developer Productivity With and Without GitHub Copilot
Writing, learning, and literacy	11	Students/writers adapt prompting and reliance strategies; AI changes ideation, style, learning routines, and revision behavior	Reactive Writers; Learning to Live with AI
Mutual adaptation and shared autonomy	5	Human behavior and trust are modeled; robot policy changes human trust, supervision, and strategy	Human-Robot Mutual Adaptation in Shared Autonomy
Recommender feedback loops	4	Recommendations change user behavior; user behavior retrains recommendations	How Algorithmic Confounding...; Breaking Feedback Loops...

The table also reveals where the evidence is strongest: not in abstract claims about “collaboration,” but in domains where behavioral traces are repeatedly collected and fed back into system behavior. 

Annotated corpus
Position and synthesis
Human-AI coevolution — Artificial Intelligence, 2025; high confidence. The clearest framing paper in the set: it explicitly defines coevolution as a continuous human–AI feedback loop and uses recommenders and assistants as canonical ecosystems. 
Human-AI experience in integrated development environments: a systematic literature review — Empirical Software Engineering, 2026; high confidence. Valuable as a map of how AI in IDEs changes developer productivity, verification overhead, control, and trust, while developers’ use patterns and design demands shape tool behavior. 
Human-AI Symbiosis: A Survey of Current Approaches — CoRR/arXiv, 2021; medium confidence. A broad survey of collaboration approaches that is useful for taxonomy-building and for locating coevolutionary mechanisms even when the word “coevolution” is not used. 
A Mental-Model Centric Landscape of Human-AI Symbiosis — CoRR/arXiv, 2022; medium confidence. Strong conceptual bridge from simple interaction to reciprocal model-updating and mutual awareness in human-aware AI systems. 
A Mental Model Based Theory of Trust — CoRR/arXiv, 2023; medium confidence. Useful for coevolution because it treats trust, reliance, and behavior as dynamic phenomena rather than static user attitudes. 
Agentic AI in the Software Development Lifecycle: Architecture, Empirical Evidence, and the Reshaping of Software Engineering — CoRR/arXiv, 2026; medium confidence. A recent synthesis that explicitly argues that software engineering is shifting from direct production to supervision, orchestration, and delegated execution under human oversight. 
Human feedback and alignment loops
Deep Reinforcement Learning from Human Preferences — NeurIPS, 2017; high confidence. Foundational preference-learning loop: humans compare trajectory segments; the learned reward model changes future policy behavior and therefore the future clips humans judge. 
Interactive Learning from Policy-Dependent Human Feedback — ICML, 2017; high confidence. Particularly valuable because it shows that human feedback is itself policy-dependent—the learner’s current behavior changes the human teacher’s reward signals. 
Policy Shaping: Integrating Human Feedback with Reinforcement Learning — NeurIPS, 2013; high confidence. Early but still important articulation of human feedback as a direct policy-shaping signal rather than a passive label source. 
Deep TAMER: Interactive Agent Shaping in High-Dimensional State Spaces — AAAI, 2018; medium-high confidence. Human scalar feedback rapidly shapes agent behavior; the agent’s evolving competence changes the human’s later feedback and teaching burden. 
Reward Learning from Human Preferences and Demonstrations in Atari — NeurIPS, 2018; high confidence. Combines demonstrations and preferences, making the human signal multi-channel and explicitly iterative. 
Learning to Summarize from Human Feedback — NeurIPS, 2020; high confidence. Canonical language-model RLHF paper where comparison data, reward modeling, and policy optimization form a human–model loop rather than a static training set. 
Training Language Models to Follow Instructions with Human Feedback — NeurIPS, 2022; high confidence. InstructGPT is central because it operationalizes large-scale user intent alignment through demonstrations and rankings, then deploys a model whose behavior is meant to reshape future user interaction. 
Constitutional AI: Harmlessness from AI Feedback — Anthropic research paper, 2022; medium-high confidence. Borderline but still in-scope: human-authored principles shape the model; the model’s outputs and self-critiques become part of the next-layer supervision loop. 
Coding and software engineering
Human-AI Collaboration in Software Development: A Mixed-Methods Study of Developers’ Use of GitHub Copilot and ChatGPT — FSE Companion, 2025; high confidence. A strong field study of organizational workflow compatibility, adaptation, and human–AI collaboration in a real public-sector software environment. 
Developer Productivity With and Without GitHub Copilot: A Longitudinal Mixed-Methods Case Study — CoRR/arXiv, 2025; high confidence. Important because it traces behavior before and after adoption and shows both self-selection and changes in perceived productivity, review burden, and work rhythm. 
Evolving with AI: A Longitudinal Analysis of Developer Logs — ICSE, 2026; high confidence. One of the strongest telemetry papers in the set: two years of IDE logs show sustained restructuring of editing, reuse, context switching, and perceived productivity. 
How Scientists Use Large Language Models to Program — CHI, 2025; high confidence. Shows scientists adapting interaction strategies, verification practices, and reliance patterns while LLM-generated code changes research programming workflows and epistemic risk. 
Prompting LLMs for Code Editing: Struggles and Remedies — CoRR/arXiv, 2025; medium-high confidence. Coevolution is visible in repeated re-prompting, missing-context repairs, and interface redesign based on observed developer struggle. 
An empirical study on developers’ shared conversations with ChatGPT in GitHub pull requests and issues — Empirical Software Engineering, 2024; high confidence. Especially useful because it captures multi-turn prompt refinement in collaborative OSS workflows and shows AI output being folded back into human-to-human engineering coordination. 
Human-Human-AI Triadic Programming: Uncovering the Role of AI Agent and the Value of Human Partner in Collaborative Learning — CoRR/arXiv, 2026; medium confidence. Valuable because it studies triadic rather than dyadic interaction and shows that human peers can change how people use, scrutinize, and rely on AI-generated code. 
Impacts of Generative AI on Agile Teams’ Productivity: A Multi-Case Longitudinal Study — FORGE/ICSE, 2026; medium-high confidence. Team-level evidence that organizational routines, not just individual prompting, drive the human side of the coevolution loop. 
Writing, learning, and literacy
How Students (Really) Use ChatGPT: Uncovering Experiences Among Undergraduate Students — CoRR/arXiv, 2025; medium-high confidence. Strong naturalistic-log paper showing that students do not just “use” ChatGPT; they adapt through follow-ups, repair, emotional regulation, and domain-specific interaction genres. 
Learning to Live with AI: How Students Develop AI Literacy Through Naturalistic ChatGPT Interaction — CoRR/arXiv, 2026; medium-high confidence. One of the best papers for AI-literacy coevolution: literacy emerges through use, breakdown, repair, and genre-building rather than formal instruction alone. 
“ChatGPT is like a study buddy, a teacher and sometimes just a friend”: a longitudinal exploration of students’ interactions, perception and acceptance — Interactive Learning Environments, 2025; high confidence. A genuine longitudinal study showing both productive scaffolding and growing concerns about over-reliance and shallow problem solving. 
AI in the classroom: Exploring students’ interaction with ChatGPT in programming learning — Education and Information Technologies, 2025; high confidence. In-scope because it studies dynamic interaction patterns, instructional interventions, and shifts in programming learning behavior. 
Personalization capabilities of current technology chatbots in a learning environment: An analysis of student-tutor bot interactions — Education and Information Technologies, 2025; high confidence. Useful for the coevolution lens because personalization depends on student traces while the chatbot alters later learner engagement and support patterns. 
Interactions with generative AI chatbots: unveiling dialogic dynamics, students’ perceptions, and practical competencies in creative problem-solving — International Journal of Educational Technology in Higher Education, 2025; high confidence. Explicitly interaction-centered rather than outcome-only. 
RECIPE4U: Student-ChatGPT Interaction Dataset in EFL Writing Education — CoRR/arXiv, 2024; medium-high confidence. A semester-long dataset of dialogues plus essay edits; especially useful because it records both the conversational interaction and the downstream writing changes. 
Examining University Students’ Engagement with ChatGPT in English Essay Writing: Interaction Patterns and Perceptions — The Asia-Pacific Education Researcher, 2026; high confidence. Directly relevant to language, revision, and behavior change in writing contexts. 
Reactive Writers: How Co-Writing with AI Changes How We Engage with Ideas — CHI preprint, 2026; medium-high confidence. One of the strongest recent writing papers: AI suggestions shift writing from ideation-first to evaluation-first, producing what the authors call “reactive writing.” 
AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances — CHI, 2025; medium-high confidence. Important because it shows a downstream cultural effect: AI suggestions alter not only efficiency but the style and cultural framing humans subsequently produce. 
Collaborative Document Editing with Multiple Users and AI Agents — CoRR/arXiv, 2025; medium confidence. Useful for moving beyond solo use: teams adapt authorship, control, coordination, and territory norms around shared AI assistance. 
Mutual adaptation and shared autonomy
Human-Robot Mutual Adaptation in Shared Autonomy — HRI, 2017; high confidence. A canonical coevolution paper: the human adapts to robot assistance while the robot explicitly reasons over human adaptability and trust. 
Human-robot mutual adaptation in collaborative tasks: Models and experiments — International Journal of Robotics Research, 2017; high confidence. Extends mutual adaptation beyond shared-autonomy control into repeated collaborative tasks with measured trust and effectiveness. 
Trust-Aware Planning: Modeling Trust Evolution in Longitudinal Human-Robot Interaction — CoRR/arXiv, 2021; medium confidence. Directly relevant because the core modeled variable is trust evolution over time, not static trust. 
Modeling the Interplay between Human Trust and Monitoring — HRI, 2022; high confidence. Strong fit for coevolution: human trust changes monitoring behavior, while system behavior must account for that changing monitoring pattern. 
Adaptive Human-Robot Collaboration using Type-Based IRL — UAI, 2025; medium confidence. Newer and more technical, but squarely in-scope because it models latent human factors and robot adaptation under changing human states. 
Sociotechnical recommender feedback loops
How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility — RecSys, 2018; high confidence. One of the clearest sociotechnical coevolution papers: recommendations change user behavior, and that altered behavior corrupts the data used to train and evaluate the recommender. 
Feedback Loop and Bias Amplification in Recommender Systems — CIKM, 2020; high confidence. Shows how popularity bias, homogenization, and minority-group disadvantages are amplified by repeated user–recommender interaction. 
Breaking Feedback Loops in Recommender Systems with Causal Inference — ACM TORS, 2025; high confidence. Particularly useful because it treats the feedback loop as a causal mechanism and proposes a corrective algorithm rather than merely observing the problem. 
Oh, Behave! Country Representation Dynamics Created by Feedback Loops in Music Recommender Systems — RecSys, 2024; medium-high confidence. A valuable recent extension showing that feedback loops do not just homogenize taste abstractly; they can reshape geographic/cultural representation over time. 
Borderline exclusions and gaps
Several influential papers were not included because they fail the bidirectionality threshold set by the brief. The clearest category is short-horizon task experiments on Copilot or ChatGPT that measure immediate speed or output quality but do not study how interaction changes over time. Those papers are important context, but they are better treated as background than as core coevolution evidence. 

The second exclusion class is pure coding-agent benchmark work. Benchmarks such as SWE-bench matter enormously for capability history, but unless a paper also studies supervision, delegation, human review, or downstream workflow changes, it is not by itself a coevolution paper. 

The third uncertainty concerns very recent preprints. In software engineering and writing, a number of promising 2025–2026 papers appear to fit the brief, but the current source set made authoritative verification uneven. The most important unresolved item is the requested seed “Humans Are Missing from AI Coding Agent Research.” I recommend treating it as a follow-up verification target, not as a confirmed main-list item, until an authoritative page is checked directly. 

The largest substantive gap in the current corpus is organizational coevolution: there is now some evidence on agile teams, collaborative writing, and newsroom routines, but compared with individual prompting and user-level adaptation, we still have much less on how institutions and teams co-adapt their norms around AI over months or years. 

Open questions and limitations
The main limitation of this report is that the 2025–2026 frontier is partly preprint-native. I included such papers when their methodology and relevance were strong and when metadata could be checked from authoritative or near-authoritative sources, but some entries remain more provisional than classic journal or proceedings papers. 

A second limitation is that the brief asked for a very rich YAML-style schema per paper. To keep the report concise and readable, I used a compact annotation format rather than a full machine-ready YAML export. The trade-off is readability over field-by-field exhaustiveness. 

BibTeX reference list
bibtex
Copy
@article{pedreschi2025coevolution,
  title={Human-AI coevolution},
  author={Pedreschi, Dino and Pappalardo, Luca and Ferragina, Emanuele and Baeza-Yates, Ricardo and Barab{\'a}si, Albert-L{\'a}szl{\'o} and Dignum, Frank and Dignum, Virginia and Eliassi-Rad, Tina and Giannotti, Fosca and Kert{\'e}sz, J{\'a}nos and Knott, Alistair and Ioannidis, Yannis and Lukowicz, Paul and Passarella, Andrea and Pentland, Alex Sandy and Shawe-Taylor, John and Vespignani, Alessandro},
  journal={Artificial Intelligence},
  volume={339},
  pages={104244},
  year={2025},
  doi={10.1016/j.artint.2024.104244}
}

@article{sergeyuk2026hax,
  title={Human-AI experience in integrated development environments: a systematic literature review},
  author={Sergeyuk, Agnia and Zakharov, Ilya and Koshchenko, Ekaterina and Izadi, Maliheh},
  journal={Empirical Software Engineering},
  volume={31},
  number={3},
  pages={55},
  year={2026},
  doi={10.1007/s10664-025-10793-0}
}

@misc{zahedi2021symbiosis,
  title={Human-AI Symbiosis: A Survey of Current Approaches},
  author={Zahedi, Zahra and Kambhampati, Subbarao},
  year={2021},
  eprint={2103.09990},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2103.09990}
}

@misc{zahedi2022landscape,
  title={A Mental-Model Centric Landscape of Human-AI Symbiosis},
  author={Zahedi, Zahra and Sreedharan, Sarath and Kambhampati, Subbarao},
  year={2022},
  eprint={2202.09447},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2202.09447}
}

@misc{zahedi2023trusttheory,
  title={A Mental Model Based Theory of Trust},
  author={Zahedi, Zahra and Sreedharan, Sarath and Kambhampati, Subbarao},
  year={2023},
  eprint={2301.12569},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  doi={10.48550/arXiv.2301.12569}
}

@misc{bhati2026agenticsdlc,
  title={Agentic AI in the Software Development Lifecycle: Architecture, Empirical Evidence, and the Reshaping of Software Engineering},
  author={Bhati, Happy},
  year={2026},
  eprint={2604.26275},
  archivePrefix={arXiv},
  primaryClass={cs.SE},
  url={https://arxiv.org/abs/2604.26275}
}

@inproceedings{christiano2017preferences,
  title={Deep Reinforcement Learning from Human Preferences},
  author={Christiano, Paul F. and Leike, Jan and Brown, Tom B. and Martic, Miljan and Legg, Shane and Amodei, Dario},
  booktitle={Advances in Neural Information Processing Systems 30},
  year={2017},
  url={https://papers.nips.cc/paper/7017-deep-reinforcement-learning-from-human-preferences}
}

@inproceedings{macglashan2017policydependent,
  title={Interactive Learning from Policy-Dependent Human Feedback},
  author={MacGlashan, James and Ho, Mark K. and Loftin, Robert and Peng, Bei and Wang, Guan and Roberts, David L. and Taylor, Matthew E. and Littman, Michael L.},
  booktitle={Proceedings of the 34th International Conference on Machine Learning},
  pages={2285--2294},
  year={2017}
}

@inproceedings{griffith2013policyshaping,
  title={Policy Shaping: Integrating Human Feedback with Reinforcement Learning},
  author={Griffith, Shane and Subramanian, Kaushik and Scholz, Jonathan and Isbell, Charles L. and Thomaz, Andrea},
  booktitle={Advances in Neural Information Processing Systems 26},
  year={2013}
}

@inproceedings{warnell2018deeptamer,
  title={Deep TAMER: Interactive Agent Shaping in High-Dimensional State Spaces},
  author={Warnell, Garrett and Waytowich, Nicholas and Lawhern, Vernon and Stone, Peter},
  booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
  volume={32},
  number={1},
  year={2018},
  doi={10.1609/aaai.v32i1.11485}
}

@inproceedings{ibarz2018atari,
  title={Reward Learning from Human Preferences and Demonstrations in Atari},
  author={Ibarz, Borja and Leike, Jan and Pohlen, Tobias and Irving, Geoffrey and Legg, Shane and Amodei, Dario},
  booktitle={Advances in Neural Information Processing Systems 31},
  year={2018},
  eprint={1811.06521},
  archivePrefix={arXiv}
}

@inproceedings{stiennon2020summarize,
  title={Learning to Summarize from Human Feedback},
  author={Stiennon, Nisan and Ouyang, Long and Wu, Jeff and Ziegler, Daniel M. and Lowe, Ryan and Voss, Chelsea and Radford, Alec and Amodei, Dario and Christiano, Paul},
  booktitle={Advances in Neural Information Processing Systems 33},
  year={2020},
  eprint={2009.01325},
  archivePrefix={arXiv}
}

@inproceedings{ouyang2022instructgpt,
  title={Training Language Models to Follow Instructions with Human Feedback},
  author={Ouyang, Long and Wu, Jeffrey and Jiang, Xu and Almeida, Diogo and Wainwright, Carroll and Mishkin, Pamela and Zhang, Chong and Agarwal, Sandhini and Slama, Katarina and Ray, Alex and Schulman, John and Hilton, Jacob and Kelton, Fraser and Miller, Luke and Simens, Maddie and Askell, Amanda and Welinder, Peter and Christiano, Paul and Leike, Jan and Lowe, Ryan},
  booktitle={Advances in Neural Information Processing Systems 35},
  year={2022}
}

@misc{bai2022constitutional,
  title={Constitutional AI: Harmlessness from AI Feedback},
  author={Bai, Yuntao and Kadavath, Saurav and Kundu, Sandipan and Askell, Amanda and Kernion, Jackson and others},
  year={2022},
  eprint={2212.08073},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://www.anthropic.com/index/constitutional-ai-harmlessness-from-ai-feedback}
}

@inproceedings{stray2025mixedmethods,
  title={Human-AI Collaboration in Software Development: A Mixed-Methods Study of Developers' Use of GitHub Copilot and ChatGPT},
  author={Stray, Viktoria and Barbala, Astri and Wivestad, Viggo Tellefsen},
  booktitle={FSE Companion '25: Proceedings of the 33rd ACM International Conference on the Foundations of Software Engineering},
  year={2025},
  doi={10.1145/3696630.3730566}
}

@misc{stray2025copilotcase,
  title={Developer Productivity With and Without GitHub Copilot: A Longitudinal Mixed-Methods Case Study},
  author={Stray, Viktoria and Brandtz{\ae}g, Elias Goldmann and Wivestad, Viggo Tellefsen and Barbala, Astri and Moe, Nils Brede},
  year={2025},
  eprint={2509.20353},
  archivePrefix={arXiv},
  primaryClass={cs.SE}
}

@inproceedings{sergeyuk2026evolving,
  title={Evolving with AI: A Longitudinal Analysis of Developer Logs},
  author={Sergeyuk, Agnia and Huang, Eric and Karaeva, Dariia and Serova, Anastasiia and Golubev, Yaroslav and Ahmed, Iftekhar},
  booktitle={Proceedings of the 48th IEEE/ACM International Conference on Software Engineering},
  year={2026},
  doi={10.1145/3744916.3787811}
}

@inproceedings{obrien2025scientists,
  title={How Scientists Use Large Language Models to Program},
  author={O'Brien, Gabrielle},
  booktitle={Proceedings of the CHI Conference on Human Factors in Computing Systems},
  year={2025},
  doi={10.1145/3706598.3713668}
}

@misc{nam2025codeediting,
  title={Prompting LLMs for Code Editing: Struggles and Remedies},
  author={Nam, Daye and Omran, Ahmed and Murillo, Ambar and Thakur, Saksham and Araujo, Abner and Blistein, Marcel and Fr{\"o}mmgen, Alexander and Hellendoorn, Vincent J. and Chandra, Satish},
  year={2025},
  eprint={2504.20196},
  archivePrefix={arXiv},
  primaryClass={cs.SE}
}

@article{hao2024sharedconversations,
  title={An empirical study on developers' shared conversations with ChatGPT in GitHub pull requests and issues},
  author={Hao, Huizi and Hasan, Kazi Amit and Qin, Hong and Macedo, Marcos and Tian, Yuan and Ding, Steven H. H. and Hassan, Ahmed E.},
  journal={Empirical Software Engineering},
  volume={29},
  pages={150},
  year={2024},
  doi={10.1007/s10664-024-10540-x}
}

@misc{daryanto2026triadic,
  title={Human-Human-AI Triadic Programming: Uncovering the Role of AI Agent and the Value of Human Partner in Collaborative Learning},
  author={Daryanto, Taufiq and Ding, Xiaohan and Ping, Kaike and Wilhelm, Lance T. and Chen, Yan and Brown, Chris and Rho, Eugenia H.},
  year={2026},
  eprint={2601.12134},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}

@inproceedings{tomaz2026agile,
  title={Impacts of Generative AI on Agile Teams' Productivity: A Multi-Case Longitudinal Study},
  author={Tomaz, Rafael and Guenes, Paloma and Ara{\'u}jo, Allysson Allex and Baldassarre, Maria Teresa and Kalinowski, Marcos},
  booktitle={FORGE 2026},
  year={2026},
  eprint={2602.13766},
  archivePrefix={arXiv}
}

@misc{ammari2025students,
  title={How Students (Really) Use ChatGPT: Uncovering Experiences Among Undergraduate Students},
  author={Ammari, Tawfiq and Chen, Meilun and Zaman, S. M. Mehedi and Garimella, Kiran},
  year={2025},
  eprint={2505.24126},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}

@misc{ammari2026literacy,
  title={Learning to Live with AI: How Students Develop AI Literacy Through Naturalistic ChatGPT Interaction},
  author={Ammari, Tawfiq and Chen, Meilun and Zaman, S. M. Mehedi and Garimella, Kiran},
  year={2026},
  eprint={2601.20749},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}

@article{durgungoz2025studybuddy,
  title={{``ChatGPT is like a study buddy, a teacher and sometimes just a friend'': a longitudinal exploration of students' interactions, perception and acceptance}},
  author={Durgungoz, Ahmet and Kharrufa, Ahmed Sulaiman},
  journal={Interactive Learning Environments},
  pages={758--777},
  year={2025},
  doi={10.1080/10494820.2025.2509276}
}

@article{guner2025classroom,
  title={AI in the classroom: Exploring students' interaction with ChatGPT in programming learning},
  author={G{\"u}ner, Hacer and Er, Erkan},
  journal={Education and Information Technologies},
  volume={30},
  pages={12681--12707},
  year={2025},
  doi={10.1007/s10639-025-13337-7}
}

@article{looi2025personalization,
  title={Personalization capabilities of current technology chatbots in a learning environment: An analysis of student-tutor bot interactions},
  author={Looi, Chee-Kit and Jia, Fenglin},
  journal={Education and Information Technologies},
  volume={30},
  pages={14165--14195},
  year={2025},
  doi={10.1007/s10639-025-13369-z}
}

@article{song2025dialogic,
  title={Interactions with generative AI chatbots: unveiling dialogic dynamics, students' perceptions, and practical competencies in creative problem-solving},
  author={Song, Yu and Huang, Longchao and Zheng, Lanqin and others},
  journal={International Journal of Educational Technology in Higher Education},
  volume={22},
  pages={12},
  year={2025},
  doi={10.1186/s41239-025-00508-2}
}

@misc{han2024recipe4u,
  title={RECIPE4U: Student-ChatGPT Interaction Dataset in EFL Writing Education},
  author={Han, Jieun and Yoo, Haneul and Myung, Junho and Kim, Minsun and Lee, Tak Yeon and Ahn, So-Yeon and Oh, Alice},
  year={2024},
  eprint={2403.08272},
  archivePrefix={arXiv},
  primaryClass={cs.CL}
}

@article{jang2026essay,
  title={Examining University Students' Engagement with ChatGPT in English Essay Writing: Interaction Patterns and Perceptions},
  author={Jang, Hyeji and Jin, Lingxi and So, Hyo-Jeong},
  journal={The Asia-Pacific Education Researcher},
  year={2026},
  doi={10.1007/s40299-025-01076-9}
}

@misc{bhat2026reactive,
  title={Reactive Writers: How Co-Writing with AI Changes How We Engage with Ideas},
  author={Bhat, Advait and Aubin Le Qu{\'e}r{\'e}, Marianne and Naaman, Mor and Jakesch, Maurice},
  year={2026},
  eprint={2603.10374},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}

@inproceedings{agarwal2025westernstyles,
  title={AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances},
  author={Agarwal, Dhruv and Naaman, Mor and Vashistha, Aditya},
  booktitle={Proceedings of the CHI Conference on Human Factors in Computing Systems},
  year={2025},
  doi={10.1145/3706598.3713564}
}

@misc{lehmann2025collabedit,
  title={Collaborative Document Editing with Multiple Users and AI Agents},
  author={Lehmann, Florian and Shauchenka, Krystsina and Buschek, Daniel},
  year={2025},
  eprint={2509.11826},
  archivePrefix={arXiv},
  primaryClass={cs.HC}
}

@inproceedings{nikolaidis2017sharedautonomy,
  title={Human-Robot Mutual Adaptation in Shared Autonomy},
  author={Nikolaidis, Stefanos and Zhu, Yu Xiang and Hsu, David and Srinivasa, Siddhartha},
  booktitle={Proceedings of the ACM/IEEE International Conference on Human-Robot Interaction},
  pages={294--302},
  year={2017},
  doi={10.1145/2909824.3020252}
}

@article{nikolaidis2017collaborativetasks,
  title={Human-robot mutual adaptation in collaborative tasks: Models and experiments},
  author={Nikolaidis, Stefanos and Hsu, David and Srinivasa, Siddhartha},
  journal={The International Journal of Robotics Research},
  volume={36},
  number={5-7},
  pages={618--634},
  year={2017},
  doi={10.1177/0278364917690593}
}

@misc{zahedi2021trustaware,
  title={Trust-Aware Planning: Modeling Trust Evolution in Longitudinal Human-Robot Interaction},
  author={Zahedi, Zahra and Verma, Mudit and Sreedharan, Sarath and Kambhampati, Subbarao},
  year={2021},
  eprint={2105.01220},
  archivePrefix={arXiv},
  primaryClass={cs.RO}
}

@inproceedings{zahedi2022monitoring,
  title={Modeling the Interplay between Human Trust and Monitoring},
  author={Zahedi, Zahra and Sreedharan, Sarath and Verma, Mudit and Kambhampati, Subbarao},
  booktitle={Proceedings of the ACM/IEEE International Conference on Human-Robot Interaction},
  pages={1119--1123},
  year={2022},
  doi={10.1109/HRI53351.2022.9889475}
}

@inproceedings{suresh2025tbdecairl,
  title={Adaptive Human-Robot Collaboration using Type-Based IRL},
  author={Sengadu Suresh, Prasanth and Doshi, Prashant and Banerjee, Bikramjit},
  booktitle={Proceedings of the 41st Conference on Uncertainty in Artificial Intelligence},
  year={2025},
  url={https://openreview.net/forum?id=6PXtHF77Ll}
}

@inproceedings{chaney2018confounding,
  title={How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility},
  author={Chaney, Allison J. B. and Stewart, Brandon M. and Engelhardt, Barbara E.},
  booktitle={Proceedings of the 12th ACM Conference on Recommender Systems},
  year={2018},
  doi={10.1145/3240323.3240370}
}

@inproceedings{mansoury2020biasamplification,
  title={Feedback Loop and Bias Amplification in Recommender Systems},
  author={Mansoury, Masoud and Abdollahpouri, Himan and Pechenizkiy, Mykola and Mobasher, Bamshad and Burke, Robin},
  booktitle={Proceedings of the 29th ACM International Conference on Information and Knowledge Management},
  pages={2145--2148},
  year={2020},
  doi={10.1145/3340531.3412152}
}

@article{krauth2025causal,
  title={Breaking Feedback Loops in Recommender Systems with Causal Inference},
  author={Krauth, Karl and Wang, Yixin and Jordan, Michael I.},
  journal={ACM Transactions on Recommender Systems},
  volume={4},
  number={1},
  year={2025},
  doi={10.1145/3728372}
}

@inproceedings{lesota2024ohbehave,
  title={Oh, Behave! Country Representation Dynamics Created by Feedback Loops in Music Recommender Systems},
  author={Lesota, Oleg and Geiger, Jonas and Walder, Max and Kowald, Dominik and Schedl, Markus},
  booktitle={Proceedings of the 18th ACM Conference on Recommender Systems},
  year={2024},
  doi={10.1145/3640457.3688187}
}