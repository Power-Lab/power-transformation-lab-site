---
layout: post
title: "New Course FA20: MAE207 Electric Power Systems Modeling"
subtitle: "Applying optimization to solve energy systems engineering problems"
tags: [post]
image: https://julialang.org/assets/infra/logo.svg
---



This course will teach students constrained optimization problems and associated solution methods, how to implement and apply linear and mixed integer linear programs to solve such problems using [Julia](https://julialang.org/)/[JuMP](https://jump.dev/JuMP.jl/dev/), and the practical application of such techniques in energy systems engineering.

The course will first introduce students to the theory and mathematics of constrained optimization problems and provide a brief introduction to linear programming, including problem formation and solution algorithms.

Next, to build hands-on experience with optimization methods for energy systems engineering, the course will introduce students to several canonical problems in electric power systems planning and operations, including: economic dispatch, unit commitment, optimal network power flow, and capacity planning.

Finally, several datasets of realistic power systems are provided which students will use in conjunction with building a model for a course project that answers a specific power systems question.

**Course structure**

The course will consist of lectures, labs, and seminars where students will engage with foundational concepts, hands-on applications in an algebraic modeling language, and methods and limitations of the state-of-the-art.


**Course materials**

Course materials and sample code will be available publicly at the [course repo](https://github.com/east-winds/power-systems-optimization) throughout the term. These are being jointly developed with **[Prof. Jesse Jenkins](https://mae.princeton.edu/people/faculty/jenkins)** for use also in a course at a Princeton ([MAE / ENE 539](https://registrar.princeton.edu/course-offerings/course-details?term=1212&courseid=008273)).

**Course schedule**

This course will be taught remote in Fall 2021.

<a onclick="post_link()" href="#">View on Schedule of Classes</a>

<script>
function post_link() {
	const url = "https://act.ucsd.edu/scheduleOfClasses/scheduleOfClassesStudentResult.htm";
	const data = {
							selectedTerm: "FA21",
							xsoc_term: "",
							loggedIn: false,
							tabNum: "tabs-ins",
							sections: "",
							instructorType: "begin",
							instructor: "davidson",
							titleType: "contain",
							title: "electric"
						}
	var form = document.createElement("form");
	form.method = "POST";
	form.action = url;
	for (var key in data) {
			var input = document.createElement("input");
			input.type = "hidden";
			input.name = key;
			input.value = data[key];
			form.appendChild(input);
	}
	document.body.appendChild(form);
	form.submit();
	document.body.removeChild(form);
}
</script>

