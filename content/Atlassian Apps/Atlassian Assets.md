---
tags:
  - Atlassian
  - Assets
project: ITSM Configuration
status: In-Progress
last_synced: 2026-05-15
publish: true
---
### Why Assets?

Assets are awesome, they're a Object-Orientated Relational Database, and they're accessible Natively in [[Jira Service Management]] (and even more importantly in [[Automation for Jira]] not only that, they can be rendered on a [[Confluence]] page, and be accessed by their own API... But that just scratches the surface of how they can base used.

### My history with Assets

Assets used to be a Jira Addon called Insight, made by a corporation called Riadia, later broken off into its own version called "Mindville".

A decade ago when we were evaluating replacing our aging ITSM solution, we looked a Jira Service Management but it was not strong enough to support customers outside the organization. 

Insight Changed the game by adding a simple Object-Orientated Database, and a few custom fields that allowed you to access those objects, restricting the fields by a "Insight Query Language".

Fast forward 7 or so years and Atlassian Purchased the APP from Mindville, and made it free in Datacenter (YAY) - with JSM purchase. They started folding it into cloud -- but required Premium Tier (BOO).

### Differences between Cloud and Datacenter

* Cloud
	* Automations (for Jira), Forms (formerly Proforma) can use Assets inside them
	* Confluence Macros for Assets are FAR weaker
		* Currently a bug that cannot render Asset fields inside a Jira Work issue Macro
		* Currently no way to render Verticle Assets
		* Currently no way to render a single attribute on a Confluence page.
	* Asset COUNT restrictions exist.
		* 250k for Premium
		* 500k for Enterprise
	