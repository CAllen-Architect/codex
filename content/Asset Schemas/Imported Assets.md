---
tags:
  - Atlassian/Schema
  - Cloud-Infrastructure
  - AWS
  - Azure
schema: Imported Assets
source: Cloud Discovery / Connector Sync
publish: true
---

# ☁️ Imported Assets (Cloud Infrastructure)
> [!WARNING] Dynamic Data
> This schema is populated via automated connectors (AWS/Azure). Manual edits should be avoided to prevent sync overwrites. All objects here should link back to a logical "Application" in the **IT Assets** schema.

---

## 🏗️ Object Type Hierarchy

### 1. Compute & Storage
- **Virtual Machines / Instances**: EC2, Azure VMs.
- **Serverless**: Lambda functions, Azure Functions.
- **Storage**: S3 Buckets, Blob Storage, Managed Disks.

### 2. Networking & Security
- **Firewalls**: Security Groups, Azure Network Security Groups (NSGs).
- **VPCs/VNETs**: Virtual networks and subnets.
- **Load Balancers**: ELB/ALB and Azure Load Balancers.

### 3. Databases
- **Managed DBs**: RDS instances, Azure SQL, CosmosDB.

---
---
## 🛠️ Configuration & AQL Strategy
> [!INFO] Technical Linking Logic
> Cloud resources are highly dynamic. Use the **Resource ID** (ARN or Azure Resource ID) as the Unique Identifier to ensure the sync doesn't create duplicates after a reboot or IP change.
> **AQL Goal:** `objectType = "Virtual Machines" AND "Application" IS EMPTY` (Use this to find unmanaged shadow IT).
### ☁️ Cloud Attribute Mapping

| Technical Attribute | AWS Context | Azure Context |
| :--- | :--- | :--- |
| **Instance ID** | `InstanceId` | `vmId` |
| **Storage Class** | `S3.StorageClass` | `accountTier` |
| **Security Rule** | `SecurityGroup.Ingress` | `NSG.SecurityRules` |
| **Region** | `Placement.Zone` | `location` |

---
## 📋 Ongoing Tasks
- [ ] **Connector Validation**: Ensure the  VPCs are reporting correctly through the Atlassian Assets discovery tool.
- [ ] **Auto-Linking**: Configure the Assets "Automation" engine to link `Virtual Machines` to `IT Assets.Applications` based on the `AppID` cloud tag.
- [ ] **Firewall Mapping**: Document the relationship between specific **Security Groups** and the **Modules** they protect (e.g., specific API extensions).
- [ ] **Cost Audit**: Cross-reference `S3 Bucket` growth with the **Vendor & Licenses** schema to ensure budget alignment.
- [ ] **Cleanup**: Establish a "Stale Resource" automation that flags any VM that hasn't reported a status in 1

## 🕸️ Relationship Topology
```mermaid
graph TD
    subgraph "IT Assets (Logical)"
    App[Applications]
    end

    subgraph "Imported Assets (Technical)"
    VM[Virtual Machines]
    S3[S3/Storage]
    DB[Databases]
    FW[Firewalls/NSGs]
    end

    VM -->|Supports| App
    S3 -->|Used By| App
    DB -->|Backs| App
    FW -->|Protects| VM
    
    style App fill:#1e1e2e,stroke:#0052CC,stroke-width:2px
    style VM fill:#2d333b,stroke:#FF8B00,stroke-width:2px
    style FW fill:#2d333b,stroke:#BF2600,stroke-width:2px
    