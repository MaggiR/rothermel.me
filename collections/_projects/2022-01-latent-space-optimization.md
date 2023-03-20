---
title: "Latent Space Optimization"
date: 2022-10-16
years: 2022
tags: ml thesis
image-lg:
  path: assets/images/projects/lso_weighted_retraining.png
  alt: "LSO with weighted retraining"
links:
- target: assets/documents/thesis_maths_bachelor.pdf
  text: Thesis
  icon: fas fa-download
---

My **Maths Bachelor's Thesis** presents Latent Space Optimization (LSO), an emerging ML-based optimization method. It targets especially hard optimization problems, namely those which are discrete, high-dimensional and expensive to evaluate like protein design or neural architecture search.

"The core idea of LSO is (1) to fit a Deep Generative Model (DGM) to the distribution of the solutions, yielding a low-dimensional, continuous representation space—the latent space—and (2) to perform Bayesian optimization in that latent space using a cheap-to-evaluate surrogate function
replacing the original objective."
