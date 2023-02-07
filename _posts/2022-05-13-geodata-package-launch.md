---
layout: post
title: "Geodata v0.1 package launched"
subtitle: "Open-source python package that helps to wrangle high-dimensional weather model data and diverse geospatial datasets to address questions of renewable energy planning and siting (and more)"
tags: [home]
image: https://github.com/east-winds/geodata/raw/master/images/geodata_workflow_chart.png
---

**Geodata** is a Python library of geospatial data collection and "pre-analysis" tools. Geospatial and gridded datasets of physical variables are ubiquitous and increasingly high resolution. Long time-series gridded datasets can be generated as part of earth system models, and due to their geographic coverage they can have wider applications, including in engineering and social sciences. Geospatial (GIS) files can encode various physical, social, economic, and political data. However, working with these datasets often has significant startup costs due to their diverse sources, data formats, resolutions, and large file sizes.

Geodata streamlines the collection and use of geospatial datasets through the creation of shared scripts for “analysis-ready” physical variables. Its purpose is to make it easier for researchers to identify, download, and work with new sources of geospatial data. Additionally, with a minimal amount of data consistency checks and metadata information, when one researcher goes through this exercise, everyone benefits.

Geodata builds off the **[atlite](https://github.com/PyPSA/atlite)** library, which converts weather data (such as wind speeds, solar radiation, temperature and runoff) into power systems data (such as wind power, solar power, hydro power and heating demand time series). Geodata retains the power systems data functionality of atlite.

[![](https://github.com/east-winds/geodata/raw/master/images/geodata_workflow_chart.png)](https://github.com/GeodataTools/geodata)



**[Github repo](https://github.com/GeodataTools/geodata)**

**[Read the introduction](https://github.com/GeodataTools/geodata/blob/master/doc/general/Introduction.md)**

**Zenodo archive:**
Michael Davidson, William Honaker, & Jeffrey Feng. (2022). GeodataTools/geodata: v0.1.0. Zenodo. [https://doi.org/10.5281/zenodo.6432926](https://doi.org/10.5281/zenodo.6432926)
