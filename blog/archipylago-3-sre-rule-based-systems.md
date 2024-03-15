---
layout: layouts/blog.njk
title: "archipylago #3: Good-enough SRE practices & Rule-based systems in Python"
date: 2024-03-15
author: Juhis
tags: post
image: /assets/img/posts/archipylago-blog-meetup-3-recap.png
---

Our third event of the year was a meetup hosted at [Taiste](https://taiste.fi)'s wonderful and cozy office. It's always a good day when it's meetup day. We had a lovely group of developers gather together at the meetup and a nice split of familiar faces from the Turku meetup scene and first-time participants.

## Talks

### Magdalena Stenius - Good-enough SRE for production software projects

![Magdalena standing next to a laptop, speaking to an off-screen audience.](/assets/img/posts/archipylago-3-sre-rule-based-systems/fdfh43456ksdm2.jpg)

It was wonderful to get Magdalena as a speaker to our meetup. She's currently working at Wolt as a software developer and joined us to talk about site reliability engineering (SRE) and how they approach it in her team.

SRE is a practice and set of processes that can be quite involved. When building the practices in your team, you may think about observability, key metrics, runbooks, self-healing systems, postmortems and the impact on both user experience and the revenue. When asked about what a team that has nothing of these set up yet should do first, she recommends observability: it's hard to fix things you don't know about or notice.

Different services and business have different metrics and how for example service outages affect things. For one business, a 30 minute delay can be a huge problem where-as for a different type of business 3 day delay might be a smaller issue. So it's important to find the right things to focus on based on your team's responsibilities.

How do you make your service reliable? Automate as much as possible so it becomes less of a burden for individuals. Service level agreements (SLAs) are measured in two metrics: availability and latency. Keep track of error budget (how much is allowed to go wrong in the 30-day window) and burn rate (with current rate of errors, when does the error budget run out.)

For further reading on performance and observability, Magda recommended [Brendan Gregg's Systems Performance](https://www.brendangregg.com/systems-performance-2nd-edition-book.html) book.

Combating the issues while keeping your team in good operation starts with making the problems visible, documenting usual cases and how to solve them in [runbooks](https://en.wikipedia.org/wiki/Runbook) and running postmortems when incidents happen. If you're interested in learning more about how they do these in more detail at Wolt, they have written [a blog post](https://careers.wolt.com/en/blog/tech/how-we-manage-incidents-at-wolt) on the topic.

### Mikko Harju - Implementing and using Rule-based systems in Python

![Mikko is speaking to an audience, looking towards a screen. In both the front and background people are listening and looking at the screen.](/assets/img/posts/archipylago-3-sre-rule-based-systems/h422hf9fmma3.jpg)

Our second talk was presented by Taiste's own technical director Mikko Harju who introduced us into the world of [rule-based systems](https://en.wikipedia.org/wiki/Rule-based_system). Rule-based systems are fancier versions of complex if/else decision trees but built in a way that is more modular and scalable when the systems grow.

One of the algorithms use for these systems is called [Rete](https://en.wikipedia.org/wiki/Rete_algorithm) and it is created to make updating and applying the rules efficient because otherwise evaluating every change for every fact would be too slow.

Mikko suggested reading [Robert B. Doorenbos' thesis paper Production Matching for Large Learning Systems](https://apps.dtic.mil/sti/citations/ADA293105) which he says is an approachable academic paper that explains the systems.

For Python developers, Mikko showcased [py-rete](https://github.com/cmaclell/py_rete) library and gave a wonderful live demonstrations on how these systems are built.

The basic unit of a rule-based system is a `Fact` that represents facts and `Production`s that are functions that apply `Fact`s to the network to determine if the function should be run or not.

A simple example looks like this (from py-rete's documentation). The `Production`s are used as decorators to functions and contain `Fact`s and `Filter`s to match against rules.

```python
from py_rete.fact import Fact
from py_rete.production import Production
from py_rete.network import ReteNetwork

# Create a Production rule that matches any network where color equals red
@Production(Fact(color='red'))
def alert_something_red():
    print("I found something red")

# Initialize a network
net = ReteNetwork()

# Add Production rule to the network
net.add_production(alert_something_red)

# Create a fact and add it to the network
f1 = Fact(color="red")
net.add_fact(f1)

# Run updates: this will match the production we created
# and print out "I found something red"
net.run(1)
```

When the rete network is run, this function `alert_something_red` will be executed if that network contains a `Fact` of `color='red'`.

In his demo, Mikko walked us through a system that calculates discounts for customers based on a set of rules: 20% if logged in and 30% if buying more than 2 products - except on Fridays when all discounts are off.

Mikko talked about some of the caveats of the system as well. One of the big ones being that building these rule systems in a larger team requires extra coordination to make sure everything runs correctly.

## Thanks to Taiste and speakers

A big warm thanks to Magda, Mikko and Taiste's folk for making the meetup possible as well as to everyone who participated.

A bunch of us continued into the night with follow-up discussions where we ended up fascinating topics like homework assignments in recruitment, type safety, favorite movies and tv series, differences in US and Finnish cultures and a variety of other things.

Our next event is a sprint on Saturday 13.4. 12-16 at SparkUp. We'll gather together to learn about building web backends with Python using Django, Flask and/or FastAPI. Our sprints are self-directed hands-on programming sessions where the idea is to study and work on a theme of the month together in small groups. More information about the event and registration will come next week in this blog and [our Meetabit page](https://meetabit.com/communities/archipylago) but save the date!

📸 Photos by [Ikaros Ainasoja](https://ainasoja.fi/).
