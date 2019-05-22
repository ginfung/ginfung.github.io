---
layout: project_single
title:  "Faster Creation of Smaller Test Suites (with SNAP)"
slug: "snap"
---
State-of-the-art theorem provers, combined with smart sampling heuristics, can generate millions of test cases in just a few hours. But given the heuristic nature of those methods, not all of those tests may be valid. Also, test engineers may find it too burdensome to run all those tests. 
Within a large space of tests, there can be redundancies (duplicate entries or similar entries that do not contribute much to overall diversity). 

Our approach, called SNAP uses specialized sub-sampling heuristics to avoid finding those repeated tests. By avoiding those repeated structures SNAP explores a smaller space of options. Hence, it is possible for SNAP to verify all its tests. 
This project was cooperated with LexisNexis Inc.

[paper](https://arxiv.org/pdf/1905.05358.pdf)