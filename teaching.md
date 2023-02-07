---
layout: page
title: Teaching
image: /img/ucsd_campus_small.png
---


### Current course schedule

Visit the [UCSD course schedule][ucsd-courseschedule] to see current offerings.

But since the UCSD Schedule of Classes is somewhat difficult to navigate, here is a set of "quickview" scripts to find out when classes are typically taught and what your favorite profs teach: [ucsd-class-schedule-quickview][git-quickview]

### MAE 107: Computational Methods in Engineering

#### Catalog Description

Introduction to scientific computing and algorithms; iterative methods, systems of linear equations with applications; nonlinear algebraic equations; function interpolation and differentiation and optimal procedures; data fitting and least-squares; numerical solution of ordinary differential equations. Prerequisites: MAE 8 or 9, and MATH 18 or 20F or 31AH.

#### My approach

This course is designed to teach students how to practically solve a wide variety of numerical problems that arise in engineering for which no analytical solution is possible (i.e., the real world). Unsurprisingly, there is an extraordinary range of techniques to do so. The primary mathematical learning goals:
- Derive commonly-used numerical techniques from fundamental concepts in linear algebra, calculus, and differential equations
- Describe mathematically rigorous approximation errors and related convergence criteria
- Understand conceptually how and why certain assumptions (e.g., linearity) are used to solve difficult problems

This course is primarily about finding what works, not mathematical derivations. Therefore, the problem-solving learning goals:
- Identify the class(es) of numerical methods—root-solving, linear equations, curve-fitting, numerical integration/differentiation, differential equations, optimization—required for a given engineering problem
- Choose and implement (from a large toolbox) an appropriate solution method based on the structure of the problem, desired accuracy, and computational considerations

Finally, good computational techniques flow from good coding. Therefore, the scientific computing learning goals:
- Translate among plain English, algorithms (i.e., pseudo-code), and programming (i.e., software)
- Write good code (proper data and file management, documentation, naming conventions, functional programming) in order to ensure replicability and readability
- Master key MATLAB packages for numerical solutions and graphics, understanding their features and limitations
Apply basic techniques to speed up computational times based on what is happening “under the hood”



### MAE 207: Electric Power Systems Modeling

#### Catalog Description

Constrained optimization for energy systems engineering. Introduction to theory and solution methods of linear and mixed-integer linear programming; implementations in modern algebraic modeling language. Fundamentals of techno-economic assessment and managing trade-offs in engineering realism and computational tractability. Students will formulate and solve canonical problems in electric power systems planning and operation; applications to current grid and future conditions of low-carbon generation; course project on realistic power system. Recommended preparation: proficiency in scientific programming, multi-variable calculus, and linear algebra. Prerequisites: graduate standing; nongraduate students must request permission of instructor.

#### Outline

This course will teach students constrained optimization problems and associated solution methods, how to implement and apply linear and mixed integer linear programs to solve such problems using Julia/JuMP, and the practical application of such techniques in energy systems engineering. The course will first introduce students to the theory and mathematics of constrained optimization problems and provide a brief introduction to linear programming, including problem formation and solution algorithms. Next, to build hands-on experience with optimization methods for energy systems engineering, the course will introduce students to several canonical problems in electric power systems planning and operations. In seminar sessions, students will read and discuss topical and state-of-the-art academic journal articles in power systems modeling in order to get a wider view of the field and active frontiers in research. Finally, several datasets of realistic power systems are provided which students will use in conjunction with building a model for a course project that answers a specific power systems question.

The course will cover the following canonical electric power systems models:

1.	Simple Capacity Expansion Planning
2.	Economic Dispatch
3.	Unit Commitment
4.	DC Optimal Power Flow
5.	Advanced Capacity Expansion Planning

Course materials and sample code are available publicly at the [course repo](https://github.com/east-winds/power-systems-optimization). These are being jointly developed with **[Prof. Jesse Jenkins](https://mae.princeton.edu/people/faculty/jenkins)** for use also in a course at Princeton University.


### GPPS 428: The Politics of Energy and Environmental Policy

#### Course Description

The course will introduce students to the theories and concepts that help explain how societies design and implement public policies related to energy and the environment.  In economics and engineering you will learn about “ideal” policies and technology choices.  Here you will learn about political, cognitive and organizational realities that explain why most policies are far from ideal, and what to do about it. Topics covered will include the regulation of monopolies, roles of state-owned enterprises, influence of interest groups, behavior of organizations, institutional development, and frontier policy debates.

#### Learning Objectives

By the end of this class students will be familiar with a wide range of theories that help explain how “politics” shapes policy outcomes in many different types of political systems.  They will also have deeper knowledge of a wide range of energy and environmental policy domains.  They will be conversant in major policy debates, aware of the frontier arguments about the role of the state and the market in addressing policy failures, and able to articulate contrasting perspectives.  This course will also give students experience with debating key topics, making effective presentations and interventions, writing policy memos, and writing a fuller length research and policy paper.  



### GPPA 470: Energy and Environmental Policy in Asia

#### Course Description

In this course, we will focus on the drivers and potential policy solutions to environmental challenges facing Asia, including detailed treatment of climate change and air pollution as well as their nexus with other types of environmental degradation. Key features—engineering, economic, and political—of energy systems necessary to understand these issues will be covered, as well as how markets and institutions have co-evolved with these infrastructures in the region. The course will engage primarily with China and India, with additional cases drawn from Southeast Asia and/or Japan as time and interest permits. Previous knowledge of introductory economics, such as is covered in GPCO 401, is encouraged.

#### Learning Objectives

The broad aim of the course is for students to be able, in key Asian contexts, to articulate the drivers of specific environmental challenges, explain energy system governance constraints and opportunities, and develop a menu of technological and policy solutions fit for context. Asia is distinct from other parts of the world in terms of growth rates, role of the state, and demography, as well as home to a diversity of national circumstances. These present unique challenges for identifying and addressing environmental problems, a theme which we will revisit throughout the course.

1. Drivers of environmental challenges
	- Identify the production processes (energy use, in particular) that give rise to environmental and human health impacts
	- Describe the drivers (societal, economic, technological, political) of key environmental problems in Asian countries

2. Constraints and opportunities for energy system governance
	- Explain how the nature of energy systems creates constraints governing the use of energy
	- Describe the range of governance paradigms adopted in Asian countries, including degrees of government ownership and regulation
	- Place a given governance structure in broader debates on energy sector reforms and development models

3. Menus of technological and policy solutions to environmental problems
	- Identify technologies and policies that fit a given context and environmental problem
	- Evaluate competing policy proposals for impacts on environmental degradation drivers



[ucsd-courseschedule]: https://act.ucsd.edu/scheduleOfClasses/scheduleOfClassesStudentResult.htm
[git-quickview]: https://github.com/east-winds/ucsd-class-schedule-quickview