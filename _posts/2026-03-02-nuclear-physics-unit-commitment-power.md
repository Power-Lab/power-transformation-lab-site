---
layout: paper
title: "Physics-Informed Unit Commitment Framework for Nuclear Reactors"
subtitle: "Choudhury, S., Davidson, M., & Tynan, G. <i>IEEE Access</i>."
tags: [papers,  journal_article, featured, home, renewable_energy_planning]
image: /img/nuclear-plant-unsplash.jpg

---

Nuclear reactors are often modeled as inflexible baseload generators with fixed downtimes and restrictive ramping limits. In practice, however, operational flexibility for a reactor is coupled with its fuel-cycle. A critical physics constraint arises from xenon poisoning, in which the buildup of the neutron absorbing xenon following a power ramp-down suppresses core reactivity, thereby limiting power maneuvers and reactor restarts. Existing power system models represent these effects using static constraints, neglecting the crucial dependence of xenon-induced inflexibility on the instantaneous state of a reactor core. This study offers a physics-informed unit commitment framework that embeds fuel-cycle dynamics into dispatch modeling. Our approach tracks the reactivity margin and enforces core-state-dependent constraints on allowable minimum generation and restart downtimes, while endogenously scheduling refueling outages. To demonstrate the formalism, we apply the framework to a representative nuclear fleet operating alongside high shares of renewable energy and storage. The results show that operational mode significantly affects system outcomes; flexible nuclear operation slows reactivity degradation, extends fuel-cycles by up to 10%, reduces renewable curtailment, lowers production costs, and delays the onset of refueling outages. These findings highlight the importance of fuel-cycle-aware flexibility modeling and provide a computationally tractable approach for assessing the role of flexible nuclear power in decarbonized grids.

[Open Access](https://ieeexplore.ieee.org/document/11417801)

[Code and Dataset Repository](https://github.com/shinychoudhury/physics-informed-nuclear-reactor-unit-commitment-algorithm)

Recommended citation:

**Choudhury, S.**, **Davidson, M. R.**, & Tynan, G. R. (2026). Physics-Informed Unit Commitment Framework for Nuclear Reactors. _IEEE Access_, 14, 33744–33755. https://doi.org/10.1109/ACCESS.2026.3669505
