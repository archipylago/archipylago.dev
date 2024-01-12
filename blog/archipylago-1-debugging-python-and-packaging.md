---
layout: layouts/blog.njk
title: "archipylago #1: Modern Python Packaging & Debugging Python"
date: 2024-01-15
author: Juhis
tags: post
image: /assets/img/posts/archipylago-blog-meetup-1-recap.png
---

![A plate of toast skagen](/assets/img/posts/archipylago-1-packaging-debugging-python/i275ichgqj.jpg)

Last week we hosted our first meetup at [Valohai](https://valohai.com)'s office. Big thanks to them for hosting the event and helping us get our events up and running. The event was a lovely success.

For this first event, we had two talks and a good community discussion and a lovely archipelago themed offering of [saaristolaisleipä](https://en.wiktionary.org/wiki/saaristolaisleip%C3%A4) (lit. archipelago bread) and toast skagen.

## Python Packaging (PEP 517/518) by Aarni Koskela

![A group of developers sitting on a sofa and chairs in an office room with Aarni standing next to a screen, speaking to the audience.](/assets/img/posts/archipylago-1-packaging-debugging-python/fa771f4ff8f66fb1.jpg)

Our first speaker was [Aarni Koskela](https://akx.github.io/), known to many in the community as akx. Aarni is a very active in the developer ecosystem and has built many great tools as you can see from his website. He joined the event to talk about modern Python packaging.

In his talk, Aarni took us through the history and evolution of packing and installing packages in Python, from the days of `easy_install` and `setup.py` all the way to the more modern days. With the introduction of [PEP 517](https://peps.python.org/pep-0517/) and [PEP 518](https://peps.python.org/pep-0518/) specifying build-system format and minimum build system requirements, the last few years have been moving Python packaging to a better direction.

Using PEP 517 combatible tools makes your life as a developer easier: you'll get access to build backend systems maintained by fellow Pythonistas, people don't need to dig through weird setup.py setups and it will make your CI workflows easier.

A very cool thing I learned from Aarni's talk personally, was that you can install local libraries with `pip install -e /path/to/your/other/library` in a way that live updates as changes are made to that library, making it easier to develop a companion library together with your main application that uses it.

The tool that Aarni recommends for the build backend is [hatch](https://github.com/pypa/hatch) that is maintained by [pypa](https://github.com/pypa), the Python Packaging Authority. Some reasons he listed for his reasoning are user-friendliness, extensibility and easy migration
from setuptools.

A good guide for learning what goes into `pyproject.toml` configuration files used by these systems can be found at the [Python Packaging User Guide](https://packaging.python.org/en/latest/guides/writing-pyproject-toml/#writing-pyproject-toml)

An important point Aarni raised when declaring dependencies is to avoid unversioned dependency specifiers but constraining the allowed dependencies to some level (for example, a specific major version) to avoid issues.

## Debugging Python by Juha-Matti Santala

![Juhis presenting to a room of developers with a large yellow illustrated rubber duck on the screen.](/assets/img/posts/archipylago-1-packaging-debugging-python/2d04dc520596df18.jpg)

The second talk was done by [Juhis](https://hamatti.org) (that's me!). I brought my recent PyCon Sweden talk **Debugging Python** to the meetup. I have [written it open in my personal blog](https://hamatti.org/posts/debugging-python/) if you want to go deeper.

Debugging to me is a skill with two different main categories. And to become effective in debugging, one must master both parts. There's the mindset and process part that has less to do with computers and more about leaving your assumptions at door and being diligent in following steps of debugging because our brain is very good at tricking us to think we know something or definitely tried that one thing we actually didn't. Eventually, if all else fails, we talk to ducks.

The second part is the mastery of Python tools and techniques from printing to debuggers and knowing what approaches to take given the type and complexity of the problem. Being lean is effective in debugging too. Using the most complex tool can slow you down if a simpler and faster tool could have solved it better.

I'm a strong believer that print is the best debugging tool and one main reason for that is that it has the lowest level of friction of all the tools. It takes a couple of seconds to write a print statement. You don't need to install or configure anything so it can be done on any project. However, it's not the most powerful or advanced tool and has its downsides so I also introduced people to [snoop](https://github.com/alexmojaki/snoop) which is a collection of tools that help with debugging and to various debuggers like [The Python Debugger](https://docs.python.org/3/library/pdb.html), [iPython Debugger](https://github.com/gotcha/ipdb), [PuDB](https://documen.tician.de/pudb/), [web-pdb](https://github.com/romanvm/python-web-pdb) and [birdseye](https://github.com/alexmojaki/birdseye). Especially birdseye has recently become a favorite tool of mine.

## Next event: a testing sprint

Our next event in February will be our first **sprint**. When we say "sprint", you can mentally change it to "let's get together and write code". We don't have a strict format for these and I hope we'll discover together as a community what we like to do with them.

For the first one, let's strengthen our test writing skills. Pandy Knight has a great starter project called [bulldoggy-reminders-app](https://github.com/AutomationPanda/bulldoggy-reminders-app) that provides a relatively small full-stack application with multiple users, logins and a way to create reminders for oneself. It's a nice one to practice writing tests with as it's not very complex and it offers distinct, well defined actions users can take.

You can focus on the tools, techniques and style of testing you want. Ideally, we could form groups at the event to work on these together and learn from each other.

Or if you want to take the moment of gathering together to get tests written for your own project, that's perfectly fine too.
