---
layout: layouts/blog.njk
title: "April sprint 13.4.: Web Development"
date: 2024-03-19
author: Juhis
tags: post
image: /assets/img/posts/archipylago-blog-april-sprint-2024.png
---

Last week we had [a wonderful meetup](/blog/archipylago-3-sre-rule-based-systems) at [Taiste](https://taiste.fi), thanks Magdalena and Mikko for the talks, Taiste for hosting and everyone who joined for great discussions and good vibes.

Our next event is a sprint on Saturday 13.4. 12-16 at [SparkUp](https://sparkup.businessturku.fi/en/). You can sign up for the event at [Meetabit](https://meetabit.com/events/archipylago-4-april-2024-at-sparkup).

## What are sprints?

> For sprints, we are organizing hands-on "bring your own laptop" style events, possibly on Saturdays where we either go through some workshops, work on open source projects or take a look at new tech or library and hack away together. ([from our intro post](/blog/from-turku-import-archipylago))

My vision for sprints is to cultivate a culture where developers take some time every now and then to learn together by writing code. The goal for these events is to have a group of developers in the same space, divided into smaller groups working with each other so everyone could find someone to learn new things with.

I have this dream where a developer can join our sprint, pick something from the suggested menu to work on and find other people who have selected the same and they can collaborate to learn together and make new friends.

Each sprint, we have a theme. [Last time in February](/blog/our-first-sprint-in-february/) we worked on improving our testing skills. In the event, we had people work through CEO Bowling kata with TDD, learn how to write end-to-end tests with Playwright and contribute to Python itself.

You're **encouraged to ask questions and seek for help** during sprints from other participants. _"Hey, can anyone help me understand this thing"_ is a question we love to hear and we also encourage everyone to help out. You don't need to have all the answers to be able to help: working, googling, reading docs and experimenting together is a great way to learn.

## Web Development

Python is a wonderful language for web development and the community has built many different tools to build backends. During the sprint, you can pick one of these (or any others you feel like learning!):

Pamela Fox has created and collected good resources and example apps to learn any of the three at [Python Web Apps: Teaching Materials](https://github.com/pamelafox/python-web-apps).

### Django

[Django](https://www.djangoproject.com/) is a great place to start if you want to learn web development with Python and don't know where to start.

There are two good ways to get started with Django that you can follow during this sprint depending on your familiarity with Python and programming in general:

#### [Writing your first Django app](https://docs.djangoproject.com/en/5.0/intro/tutorial01/)

The official Django tutorial "Writing your first Django app" is a good intro to Django for those who are already somewhat familiar with Python and web. It walks you through all the basics you need to learn to get a Django site up and running: apps, models, views, forms, testing, and look and feel.

#### [Django Girls tutorial](https://tutorial.djangogirls.org/en/)

If you're new to all this, Django Girls have a wonderful tutorial that in addition to teaching how Django works also introduces you to how the web works, how to navigate command line and project structures and so on. It also includes short intros to HTML and CSS.

### Flask

[Flask](https://flask.palletsprojects.com/) is another option. It's more barebones compared to Django and for smaller backends that might be exactly what you want. They have [a tutorial that builds a blog](https://flask.palletsprojects.com/en/3.0.x/tutorial/) that one can follow to get a feel for how Flask works and how to build web backends with it.

While Flask's interface is simpler than Django, I personally agree on the opinions from BiteCode on why [beginners should choose Django, not Flask](https://www.bitecode.dev/p/beginners-should-use-django-not-flask)

> Django on the other hand, is fit with decent defaults. You can't say they are the "best practices", as we all know there is no silver bullet, but it's mostly quite nice. It will tell you to setup CSRF protection, it will forbid click jacking, it will force you to serve static file with a proxy in prod, it will generate a new secret key automatically, it will store session data server side...
>
> Not just that, but Django has an opinion. Like all opinions, it is debatable, but when you start web dev, your opinion likely sucks, and you should adopt Django's. Then once you know what it entails, you can divert from it or change course completely. But at least you start from some practical structure that has been shown to work at scale, instead of a blank page.

### FastAPI

The third tool we recommend taking a look at is [FastAPI](https://fastapi.tiangolo.com/). Their [step-by-step tutorial](https://fastapi.tiangolo.com/tutorial/) helps guide you through its features.

FastAPI requires the most knowledge and understanding of the web of these three. If you have built APIs with Django or Flask before, maybe spend the Saturday learning how building them differs with FastAPI.

## Practicalities

The event takes place Saturday 13.4. 12-16 at [SparkUp](https://sparkup.businessturku.fi/en/) (at Tykistökatu 4B). You can sign up for the event in [Meetabit](https://meetabit.com/events/archipylago-4-april-2024-at-sparkup).

Show up, come say hi, find a seat and desk and start working. If you don't know where to start, don't worry, we're there to help!

This event does not have food/drinks sponsor so take care of your own nutrition needs. There's a well-stocked [K-Market Station](https://www.k-ruoka.fi/kauppa/k-market-station) across the street and we have forks and knives and spoons in the venue.
