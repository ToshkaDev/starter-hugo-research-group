---
title: "CDvist: a webserver for identification and visualization of conserved
  domains in protein sequences"
subtitle: http://cdvist.joulinelab.org
publication_types:
  - "2"
authors:
  - Ogun Adebali
  - Davi R. Ortega
  - Igor B. Zhulin
doi: https://doi.org/10.1093/bioinformatics/btu836
publication_short: "Bioinformatics 31: 1475-1477"
abstract: >-
  Summary: Identification of domains in protein sequences allows their assigning
  to biological functions. Several webservers exist for identification of
  protein domains using similarity searches against various databases of protein
  domain models. However, none of them provides comprehensive domain coverage
  while allowing bulk querying and their visualization schemes can be improved.
  To address these issues, we developed CDvist (a comprehensive domain
  visualization tool), which combines the best available search algorithms and
  databases into a user-friendly framework. First, a given protein sequence is
  matched to domain models using high-specificity tools and only then unmatched
  segments are subjected to more sensitive algorithms resulting in a best
  possible comprehensive coverage. Bulk querying and rich visualization and
  download options provide improved functionality to domain architecture
  analysis.


  Availability and implementation: Freely available on the web at http://cdvist.joulinelab.org
draft: false
featured: false
image:
  filename: featured.jpg
  focal_point: Smart
  preview_only: false
  caption: "Workflow and visualization example. (a) Primary sequence is used as
    input and transmembrane (gray), low complexity (magenta), and coiled-coil
    (green) regions are predicted. (b) HMMER3 scan against Pfam database is
    executed and first domain architecture is built. (c–e) HHblits followed by
    HHsearch is executed against (c) Pfam, (d) PDB and (e) CDD databases. (f)
    Domain coverage option: gray background represents the whole length of model
    whereas red bar displays the portion of the model that aligns with the
    query. Square points represent the domain positions that do not align with
    the query. (g) Alignment option. Sequence is displayed to scale, and each
    bar stands for alignment quality at that position. The absence of the bar at
    a given position indicates gap in the alignment on query side"
date: 2014-12-19T03:47:37.656Z
---
