---
title: "Eyeing the Big Play, Not Just the Moves"
date: 2023-06-01
years: 2023
tags: ml thesis xai
image-lg:
  path: assets/images/projects/hierarchy_of_time.jpg
  alt: "The Hierarchy of Time"
links:
- target: assets/documents/thesis_cs_master.pdf
  text: Thesis
  icon: fas fa-download
- target: https://github.com/MaggiR/logic-options
  text: Source Code
  icon: fas fa-code
---

With this work I seek to advance the interpretability of Reinforcement Learning (RL) agents through temporal abstraction. On complex problems, even purely logic agents can be hardly explainable because of the large rule set they learned. Here, I apply the options framework to split up a single, logic policy into a hierarchy of policies: the one, topmost policy (the meta policy) consists of logic formulae and decides upon lower-level, neural policies that are specialized on executing subtasks.

The idea is that the meta policy is reduced to determining which subtask is due to be solved. Instead choosing an action at each time step, the meta policy selects the subpolicy that solves the current subtask at hand. This way, the meta policy (which typically includes the information or strategy we are interested in), is much smaller in terms of rules and, hence, better interpretable.
