---
title: "The Board Wipe: Re-Architecting an Enterprise Atlassian Ecosystem from Zero"
publish: true
---

> [!NOTE] WORK IN PROGRESS
> This article is not done, I've published early to allow someone to read it early.


In competitive trading card games, a "reset button"—or board wipe—is a strategic spell that completely destroys every permanent currently cluttering the physical playing field. It forces a hard reset on the board state. Crucially, it doesn’t reset the entire game: your resource pool, your hand, and your fundamental understanding of the match remain intact. You clear the board because the current state of play is too chaotic to optimize, and restarting from zero offers a cleaner, faster path to victory.

Most enterprise organizations arriving on Atlassian Cloud after a legacy Data Center migration desperately need a board wipe.

Migrations frequently inherit a decade of "scrappiness"—a bloated battlefield of redundant custom fields, zombie workflows, and unmanaged permissions. Triage teams can expertly patch the initial user pain points to get operations running, but months later, the underlying ecosystem remains bogged down by 40% to 50% core configuration bloat.

When optimization yields diminishing returns, you stop tweaking. You hit the reset button, go back to absolute zero, and execute a clean-sheet re-architecture.

### 🗺️ The Blueprint: Structural Design Goals

If we were to completely rebuild our entire multi-tenant enterprise engine from scratch tomorrow, the rules of engagement are absolute:

1. **Integrated Context Ledger from Day One:** JSM Assets is turned on and fully federated before a single project queue is built. The database topology dictates the system, not the other way around.
    
2. **Zero Third-Party Jira App Add-Ons:** The native workflow engine, advanced automation rules, and Assets primitives are the only building blocks allowed. No brittle middleware plugins.
    
3. **User-Centric Confluence Enhancements:** Confluence add-ons are strictly restricted to frontend user-experience enhancements—tools that actively help humans consume, filter, and interact with documentation layouts.
    
4. **AI-Native Groundwork:** Every space structure, naming convention, and data schema is built from the ground up to be indexed cleanly by natural language layers like Atlassian Rovo.
    


### 🎯 The Target State Matrix: Consolidating the Business

A clean-sheet build collapses disparate business operations into specific, disciplined platform primitives.

#### 1. IT Service Management (ITSM) & Cybersecurity

- **The Architecture:** A unified JSM operations hub driven by automated queues, strict per-issue visibility, and real-time SLA targets.
    
- **The Execution:** Cybersecurity is treated as a highly specialized, hyper-isolated extension of core ITSM. It utilizes the exact same foundational workflow engine but acts as an isolated, multi-tenant enclave with strict data encryption and permission gates.
    

#### 2. Software Development Lifecycle (SDLC)

- **The Architecture:** Native Jira Software project hierarchies decoupled entirely from custom business fields.
    
- **The Execution:** Engineering squads retain local board agility, but their outputs, release pipelines, and microservices are mapped upward as dynamic objects inside the Technical Asset Registry (via Compass or Assets), establishing an immutable baseline for change tracking.
    

#### 3. Change Management

- **The Architecture:** An automated state-machine driven entirely by our Process Asset Library (PAL).
    
- **The Execution:** Brittle, hardcoded workflow transitions are discarded. Change risk, approval matrices, and localized signing authority gates are evaluated dynamically by matching the affected infrastructure node against live policy objects in the asset ledger.
    

#### 4. External Customer Support & Business Operations

- **The Architecture:** External-facing JSM portals acting as an absolute abstraction layer.
    
- **The Execution:** Internal corporate request queues (Facilities, Procurement, general Business Process Management) use identical portal primitives. This grants unlicensed stakeholders clean, secure tracking channels while preserving backend data segregation.
    

#### 5. Human Resources (The Blueprint Spec)

- **The Architecture:** A dark-space JSM operational desk.
    
- **The Execution:** Even if the HR business unit currently operates outside the ecosystem, the clean-sheet blueprint designs for them preemptively. HR onboarding and offboarding are modeled as foundational automated triggers. A single intake request orchestrates secondary execution blocks across IT provisioning, security access, and identity management automatically.
    

### 📖 Scoping and Structuring the Confluence Knowledge Base

A board wipe for Jira is useless without a parallel containment strategy for Confluence. The legacy approach of letting every team spin up unmonitored spaces creates a text-heavy cemetery of expired information.

In a zero-baseline architecture, Confluence is redesigned as a highly structured **Knowledge Graph** rather than a loose collection of documents:

- **Separation of State:** Spaces are strictly split into _Static Directories_ (Authoritative standard operating procedures, policies, system blueprints) and _Dynamic Workspaces_ (Active project scratchpads, meeting logs, collaborative drafts).
    
- **Mandatory Semantic Metadata:** No page is published without explicit structural tagging (Owner, Validity Expiration, Related System Object).
    
- **Rovo-Ready Hygiene:** Page hierarchies are explicitly mapped to facilitate semantic searching. If a page cannot be cleanly parsed by an LLM assistant to answer a cross-functional question, its layout is rejected and refactored.
    

### 🛡️ The Ultimate Objective: An Intent-Driven Organism

Hitting the reset button isn't about running away from your past configurations; it is an exercise in ultimate operational maturity. It is realizing that the knowledge gained during ten years of scrappy growth is your actual "hand of cards"—and it's far too valuable to waste on a broken, bloated board state.

By clearing away the debris and deploying a unified, data-first blueprint, you transform the platform from a slow, legacy filing cabinet into a live, responsive corporate weapon.



> [!NOTE] Wait...
> You can't just wipe customer tickets, historical references, thats a compliance nightmare... 

### 🔄 The Continuity Protocol: Managing the Ticket Reality

A true board wipe requires a strategy for historical data. While you can clear configurations, you cannot clear legal compliance trails, active SLA liabilities, or customer history. The goal isn't to delete old tickets; it is to shift them onto the new structural track while preserving their original issue key numbers.

We achieve this by treating old tickets as **Static Read-Only Archives** during the cutover:

- **Schema Decoupling:** Legacy projects are moved to the new architecture but are stripped of their bloated custom fields. Their historical context is compressed into standardized text blocks.
    
- **Dynamic Asset Translation:** Rather than carrying over messy, legacy dropdown selections, an API script parses the historical text and programmatically links the old ticket keys straight to their new relational nodes in the updated Assets schema.
    

By abstracting the historical data layer, the business retains its complete operational history, but the new, active queues remain 100% clean and optimized.

#### 🛠️ Execution Playbook: Programmatic Asset Re-Linking

To migrate historical tickets to a new asset ledger without dropping data or breaking references, we execute a strict 12-step translation loop inside a sandbox environment before promoting to production:

1. **Create test project** mapped to the shared global JCT blueprint.
    
2. **Clone a representative sample** of historical issues containing legacy asset links, system comments, and participant fields.
    
3. **Export/Import Assets data via CSV** from the old schema to the new schema, ensuring identical attributes are cleanly mapped.
    
4. **Create temporary mirror fields** in Jira named `Temp[CustomFieldName]`, pointed directly to the new target Asset schema.
    
5. **Execute a bulk automation loop** (capped at 1,000 issues per batch) that reads the old schema reference and populates the temporary field by matching the object keys via AQL.
    
6. **Inspect the structural data matrix** to verify every test issue has successfully mirrored its references.
    
7. **Alter the production custom field** definition, shifting its target pointer away from the legacy schema and onto the new schema.
    
8. **Run a reverse automation loop** to copy the clean, re-mapped data from the temporary field back into the permanent field.
    
9. **Execute a secondary verification gate** to confirm the permanent fields are resolving active objects.
    
10. **Delete the temporary staging fields** to eliminate metadata bloat.
    
11. **Trigger a background Jira re-index** to solidify the new search graph.
    
12. **Promote the validated script to the live production database.**