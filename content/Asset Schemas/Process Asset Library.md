---
tags:
  - Atlassian
  - Jira-Service-Management
  - Asset-Management
publish: true
title: Dynamic Policy Management via PAL
---

## High Level Concept

This page describes using an Asset Schema paired with a Jira Service Management (JSM) Service Desk to document and actively control your organization's processes. This provides a single source of truth that you can use to iterate your organization's controls and, better yet, build deep semantic context for Atlassian Rovo and the Teamwork Graph to use.

## Asset Schema

Instead of locking routing logic in static text tables, we model our compliance and approval rules as active objects within the **Process Library (Schema 1)**. By treating the Process Asset Library (PAL) as a dynamic context registry, we can decouple business logic from the workflow engine entirely.

Core entry objects inside this schema might include:

- Employee Onboarding / Offboarding Lifecycle
    
- Incident Escalation & Severity Matrix
    
- Business Continuity & Disaster Recovery (BC/DR) Protocols
    
- Vendor Intake & Annual Security Review
    
- Access Request & Least-Privilege Provisioning
    
- Software Development Life Cycle (SDLC) Guardrails
    
- Change Management
    

For each one of these objects, you store critical operational information as attributes, such as **Actor-groups** (the specific groups involved in the process). You pull these attributes directly into an Approval Groups field inside a Jira workflow to capture their sign-off (requiring exactly 1 member of each group to approve).

Additionally, an attribute named **outbound process** can be used by the automation engine to dynamically chain together several procedures or create a live business process map using Assets' native functionality. This transforms your passive asset library into an active engine for moving processes along.

## Confluence Page (or Space)

One mandatory attribute of each Process object should be a direct link to that process's formal definition or homepage. Maintaining a dedicated **Process Library Space** in Confluence keeps them together cleanly, though proper metadata grooming allows you to link to a page located anywhere.

This tight linkage performs two critical enterprise functions:

1. **Allows Rovo Search and Chat** to return natural language answers to employees asking "What is the process for X?" with a remarkably high degree of clarity.
    
2. **Provides Teamwork Graph Context** about exactly how your business works, offering an immediate reference page that can be grabbed instantly for any future automations.
    

## Service Management Spaces

This architecture relies heavily on Forms, Assets, and Advanced Automation to get it to work in a way that feels seamless. For right now, all of those features are deeply tied to Jira Service Management (you cannot natively create forms outside of a Service Desk, nor can you attach strict approval gates to regular Jira Software workflows).

An automated, unmanned service desk can be utilized behind the scenes to handle these process approvals, schema changes, and system transitions automatically.

## The Concept: Processes as Live Objects

![[policy-process-procedure.svg]]

The PAL schema contains distinct objects for Policies, Processes, and Procedures. Each of these nodes features attached Confluence documentation links and execution scripts within their attributes, cross-linking to each other cleanly inside the Asset Schema.

## The Execution: Employee On-boarding

To demonstrate how this mechanics model works under the hood, we can analyze a universal operational workflow: Employee Onboarding. These same structural ideas can be expanded to govern almost any corporate process.

### Automated Execution Mechanics

Rather than dumping all operational procedures into a flat, parallel checklist, the Process Asset Library treats the execution layer as an event-driven chain of downstream automations:

- **Parallel Initialization:** The master Onboarding Process simultaneously triggers the physical hardware provisioning lifecycle and the orientation scheduling track.
    
- **Sequential Dependency:** The core Identity Provisioning workflow executes the Account Creation procedure first.
    
- **The Success Hook:** Only after Account Creation reports a successful state transition does the automation engine query the schema attributes to dynamically kick off the dependent Security Access procedure.
    

When a corporate policy changes, the underlying engineering workflow remains entirely untouched. Operations teams simply update the attributes on the corresponding PAL object, and the live system instantly adapts.

## How Does This Work Under the Hood?

Most of this framework utilizes the native interplay between Assets and Jira Service Management.

1. A work item is created with an Asset custom field (`customfield_1234`) pointing to a specific PAL Object.
    
2. An automation rule triggers, looks at that custom field, and fetches specific metadata attributes from it.
    
3. The next step in the automation fetches the exact groups supposed to approve the procedure.
    

### Pseudo-code: Dynamic Approval Injection

Plaintext

```
Trigger: When a work item is created
Condition: Work item type is "Onboarding" AND Asset custom field (customfield_1234) is not Empty

Action: Update a Workflow field: 
        Approver Groups = {{issue.customfield_1234.Approver Groups}}
```

_Note: These group members are pushed into a custom field in Jira hooked directly to an approval status in the workflow. Approvals are configured to look for one approver from each group._

### Pseudo-code: The Webhook & Execution Chain Loop

Once approved, a second automation kicks off a secure webhook request to an external provisioning system:

Plaintext

```
Trigger: When a work item enters status "Approved"
Condition: Work item type is "Onboarding" AND Asset custom field (customfield_1234) is not Empty

Action: Webhook
    URL = {{issue.customfield_1234.URL}}  
    Headers: [Authorization tokens included]
    Body = {{issue.customfield_1234.body}}
    [*] Check: Wait for Execution response so we can write a receipt to the work item

Action: Add comment: {{response.status}}  
Action: Transition Work item to "Next Status"
Action: Update customfield_1234 = {{issue.customfield_1234.outBoundProcedure}}
```

### The Procedural Chain

Pay special attention to that last action line. You can recursively chain separate Procedures together simply by overwriting the Asset custom field with the **NEW** downstream procedure (`outBoundProcedure`).

Because the automation engine re-evaluates the field on the next step, you can run an infinite loop of sequential corporate procedures using a single, generic workflow template. The webhook executes using data from the active item, writes its status receipt back to the ticket comment, updates the field to the next procedural step, and feeds the process forward.

While this pattern heavily consumes standard global automation runs—and potentially AI tokens if you choose to kick them off via Rovo Agents—the total overhead cost is drastically less than utilizing manual human administrative hours.

## The Paradigm Shift

This architectural pattern transforms employee onboarding from a manual guessing game into an intent-driven, context-aware engine.

Infrastructure context dictates the business process, and the process dictates the automation. The data layer, not a brittle workflow configuration, becomes the absolute source of truth for how business processes function.