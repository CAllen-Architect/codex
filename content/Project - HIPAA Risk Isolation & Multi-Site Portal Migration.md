---
publish: true
---
> [!NOTE] The Challenge.
> We were met with a challenge, an Organization who recently migrated from DC to cloud, wanted to take advantage of Rovo, but there was a problem, there was some HIPAA data in their Externally facing Service Desks... (Atlassian AI is not HIPAA Compliant) Here's a version of the Executive Summary of our proposal.

# Executive Summary: 

## Strategic Overview

To permanently eliminate the risk of Protected Health Information (PHI) and HIPAA data infiltrating our primary corporate infrastructure, we have successfully executed a proof of concept of a total environment isolation strategy.

**The core of this initiative is the complete removal of our two public-facing customer portals from our primary Home site.**

By migrating these public service desks entirely out of our core corporate environment and into two dedicated, isolated enterprise cloud sites—**Satellite F** and **Satellite J**—we have established a hard compliance barrier. 

Public customers now interact exclusively with these distinct satellite environments. This ensures that any accidental intake of regulated health data is contained entirely within a secure containment zone, leaving our primary corporate Home site pristine and completely out of scope for HIPAA liability.

```
   [ HOME SITE (Corporate Core) ] ──► COMPLETELY PURGED OF PHI / PUBLIC PORTALS
                ▲                                      │
                │                                      ▼
     (Secure Dev Crossover)              [ UNLOCKS ATLASSIAN AI / ROVO ]
                │                           • Cross-Product Search & Chat
        (Compliance Wall)                   • High-Context Knowledge Graph
                │
   ┌────────────┴────────────┐
   ▼                         ▼
┌──────────────────────┐  ┌──────────────────────┐
│  SATELLITE SITE F    │  │  SATELLITE SITE J    │
│ Isolated Public JSM  │  │ Isolated Public JSM  │
└──────────────────────┘  └──────────────────────┘
```

## Operational Workflow & Cross-Site Escalation Fabric

While the customer portals are now physically separated from our day-to-day corporate directory, internal teams still require a secure method to act on system bugs, defects, or tier-3 technical escalations raised by public users.

To bridge this gap without compromising our security boundary or risking automation failures across instances, we engineered a reliable, agent-initiated escalation fabric:

### 1. Isolated Intake and Triage

- All public service desk users work exclusively out of the Satellite F and J portals.
    
- Service desk agents manage, communicate, and resolve standard support tiers entirely within these isolated satellite environments. They have zero visibility or access to internal corporate projects or knowledge bases on the Home site.
    

### 2. Controlled Site-to-Site Escalation Engine

Rather than relying on automated background syncs which can be fragile across distinct cloud sites, we utilize an intentional, agent-driven linking process:

- **The Target Link:** When an agent identifies a defect requiring engineering intervention, they initiate a native **Site-to-Site Jira Link** to connect the instances securely.
    
- **Data Sanitization & URL Mapping:** The escalation establishes clear visibility via two external URL reference fields on the ticket. This ensures data is passed cleanly without dragging raw, unregulated attachments or text blocks over the boundary.
    
- **The External Reference ID:** To ensure the system remains extensible, the unique source ticket ID is programmatically stamped into a dedicated **External Reference ID** field. This gives us a permanent, immutable data anchor to pass to future automation calls or reporting engines.
    

### 3. Secure Context Access (The Developer Crossover)

- To protect the integrity of the HIPAA boundary, raw customer data and potential PHI are never synced back to the Home site backlog.
    
- If a software developer on the Home site requires deeper context, steps to reproduce, or original screenshots to resolve a bug, **they have the explicit authority to cross over to the Satellite Sites to view the source ticket directly.**
    
- This ensures developers have total visibility to fix problems, while keeping all potential PHI legally contained inside the audited satellite environment.
    

## Future Phase: Unlocking Atlassian AI & Rovo Readiness

The most significant operational benefit of this migration is that it removes the legal roadblocks holding back our internal technology stack.

- **The Compliance Gate:** Previously, Atlassian AI and intelligence features could not be activated due to the inherent risks of processing unregulated public HIPAA data within our primary site.
    
- **The Next Steps:** With the successful exfiltration of these customer portals to their respective satellite containment zones, **we can now safely begin the rollout of Atlassian AI (Rovo) across the Home site.**
    
- **The Launch Plan:** The initial rollout phase will activate Rovo's smart search and conversational chat capabilities across our engineering directories. A comprehensive internal training plan has already been developed to ensure immediate team adoption.
    
- **Data Hygiene Initiative:** To maximize the accuracy and contextual value of the new AI layer, internal users will begin a structured cleanup of our Confluence spaces. A dedicated optimization guide has already been established to lead teams through structuring their documentation directories for optimal AI discovery.
    

## High-Level Benefits for Leadership

- **Immediate Risk Elimination:** The migration successfully purges public-facing intake mechanisms from our core corporate site, drastically lowering our compliance footprint.
    
- **Air-Gapped Data Security:** By using agent-initiated links and a developer crossover model rather than automated data syncing, we ensure no PHI can accidentally slip into our primary corporate backlog through automated background errors.
    
- **Strategic Modernization:** Completing this isolation project transforms our primary environment into a clean, compliant workspace, paving the way for advanced corporate AI integration.
    


> [!NOTE] Closing Remarks
>
"This project didn't just fix a compliance issue; it cleaned the slate so we can turn on Rovo. I have the training plan locked loaded, and I've already written the blueprints to clean up our documentation so the AI hits the ground running."_

