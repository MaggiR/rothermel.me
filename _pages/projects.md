---
layout: default
title: Projects
---

# Projects

## Ongoing: Mathematics Bachelor's Thesis
My second Bachelor's Thesis deals with Latent Space Optimization
done via generative models. The work is in early stage (as of
February 2022).

-----

## Ongoing: Telegram crawler to analyze German conspiracy theory chats
During the COVID-19 Pandemic, a lot of conspiracy theorists
gathered on Telegram in various public groups and channels.
I'm working on a crawler, the task of which is to scan these
chats and analyze the public available information. At the
time of writing (Jan 2022), the crawler collected >20 GB worth of text
messages, 1.75 mio user accounts and >5300 German chats,
the vast majority of which is promoting conspiracy theories.

-----

## pyAnt: RTS Serious Game
<div class="project-thumbnail-sm">
  <img src="assets/images/projects/pyant_cover.jpg" alt="Game cover">
</div>
pyAnt is a Serious Game (SG) prototype, the concept of
which is to build an ant colony where the ants are
controlled only via Python code. I developed that game
together with my team as a project at the SG group. We
implemented the game with the Godot engine and released
it on itch.io [here](https://maggir.itch.io/pyant).

-----

## "Explainable AI: A systematic review to find a unified definition of explainability and interpretability"
A scientific literature analysis I've done with a colleague
for a seminar. Commonly used AI models, especially neural
networks, are hard to explain and to understand. In order
to support trust, explainability of these models is a desired
property. However, there is no unique definition of _explainability_
and _interpretability_. We examined the different definitions
stated in the literature and, based on that, proposed an own
one.

-----

## Learning Angry Birds with RL
I built a TensorFlow framework for learning Angry Birds
(and other
games) using basic state-of-the-art Reinforcement
Learning (RL) techniques. One can easily exchange the
AI model and the game environment. This is my largest
project so far and is a continuation of a bonus project
I finished together with three other team members. The
project is available on [GitHub](https://github.com/BluemlJ/AiBirds).

-----

## SinGAN: Train a GAN with only a single image
This is an implementation of the SinGAN presented in [this
paper](https://arxiv.org/abs/1905.01164). It is a bonus
project I coded with a colleague in PyTorch. It can be
used to train a GAN on just a single image. That GAN can
then perform a bunch of tasks, e.g., super resolution or
image inpainting. This project whips with a Django
frontend ready to be deployed as an interactive webpage.
You can find it on [GitHub](https://github.com/jonasgrebe/pt-singan-single-image-gan).

-----

## Fooling Image Classifier with Adversarial Images
<div class="project-thumbnail-sm">
  <img src="assets/images/projects/saliency_map.jpg" alt="Saliency map">
</div>
This little experiment showcases how easy neural
network image classifiers can be fooled with a slight
perturbation in the image. It also explains and shows
**Saliency Maps** (heatmaps indicating the classifier's
attention in the image when classifying it). You can try it
out with directly online by yourself directly on
[Google Colab](https://colab.research.google.com/drive/1McqdMbBfIh4QMiVdPO06v44O5OsYUAos).

-----

## Interpreting Sum-Product Networks via Influence Functions
<div class="project-thumbnail-lg">
  <img src="assets/images/projects/spn_influence_fns.png"
        alt="Example influence plots">
</div>
As my **Computer Science Bachelor's Thesis**, I investigated
[Sum-Product Networks (SPNs)](https://arxiv.org/abs/1202.3732) using so-called
[Influence Functions](http://proceedings.mlr.press/v70/koh17a/koh17a.pdf). My work contributes to the
understanding of SPNs by showing, e.g., how single
training instances affect the SPN's prediction on other
instances. You can download my thesis [here](assets/documents/thesis_cs_bachelor.pdf). The code is
available on [GitHub](https://github.com/ml-research/Interpreting-SPNs).
