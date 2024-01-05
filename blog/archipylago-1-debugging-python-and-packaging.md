---
layout: layouts/blog.njk
title: "archipylago #1: Debugging Python & Packaging"
date: 2024-01-15
author: Juhis
tags: post
image: /assets/img/posts/archipylago-blog-meetup-1-recap.png
---

Last week we hosted our first meetup at [Valohai](https://valohai.com)'s office. Big thanks to them for hosting the event and helping us get our events up and running. The event was a lovely success.

For this first event, we had two talks and a good community discussion.

## Python Packaging (PEP 517/518) by Aarni Koskela

Our first speaker was [Aarni Koskela](https://akx.github.io/), known to many in the community as akx. Aarni is a very active in the developer ecosystem and has built many great tools as you can see from his website. He joined the event to talk about modern Python packaging.


## Debugging Python by Juha-Matti Santala

The second talk was done by [Juhis](https://hamatti.org) (that's me!). I brought my recent PyCon Sweden talk **Debugging Python** to the meetup. I have [written it open in my personal blog](https://hamatti.org/posts/debugging-python/) if you want to go deeper.

Debugging to me is a two-part thing. And to become effective in debugging, one must master both parts. There's the mindset and process part that has less to do with computers and more about leaving your assumptions at door and being diligent in following steps of debugging because our brain is very good at tricking us to think we know something or definitely tried that one thing we actually didn't. Eventually, if all else fails, we talk to ducks.

The second part is the mastery of Python tools and techniques from printing to debuggers and knowing what approaches to take given the type and complexity of the problem. Being lean is effective in debugging too. Using the most complex tool can slow you down if a simpler and faster tool could have solved it better.

## Next event: a testing sprint

Our next event in February will be our first **sprint**. When we say "sprint", you can mentally change it to "let's get together and write code". We don't have a specified format for these yet and I hope we'll discover together as a community what we like to do with them.

For the first one, let's strengthen our test writing skills. Pandy Knight has a great starter project called [bulldoggy-reminders-app](https://github.com/AutomationPanda/bulldoggy-reminders-app) that provides a relatively small full-stack application with multiple users, logins and a way to create reminders for oneself. It's a nice one to practice writing tests with as it's not very complex and it offers distinct, well defined actions users can take.

You can focus on the tools, techniques and style of testing you want. Ideally, we could form groups at the event to work on these together and learn from each other.

Or if you want to take the moment of gathering together to get tests written for your own project, that's perfectly fine too.