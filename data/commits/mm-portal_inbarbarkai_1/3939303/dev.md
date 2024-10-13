# System Architecture

## Components

The system is composed of the following components:
1. [Kubernetes](https://kubernetes.io/) - An open source Google system for deploying and managing containers at scale.
1. [OpenFAAS](https://www.openfaas.com/) - An open source serverless framework.
1. Idp - TBD
1. Database - TBD
1. Mesh/Ingress service - TBD

The following diagram describes how the system will be composed:
```plantuml

@startuml

' Azure
!define AzurePuml https://raw.githubusercontent.com/RicardoNiepel/Azure-PlantUML/release/2-1/dist

!includeurl AzurePuml/AzureCommon.puml
!includeurl AzurePuml/AzureSimplified.puml
!includeurl AzurePuml/Databases/AzureSqlDatabase.puml

' Kubernetes
'https://github.com/dcasati/kubernetes-PlantUML
!define KubernetesPuml https://raw.githubusercontent.com/dcasati/kubernetes-PlantUML/master/dist
!includeurl KubernetesPuml/kubernetes_Common.puml
!includeurl KubernetesPuml/kubernetes_Context.puml
!includeurl KubernetesPuml/kubernetes_Simplified.puml
!includeurl KubernetesPuml/OSS/KubernetesApi.puml
!includeurl KubernetesPuml/OSS/KubernetesIng.puml
!includeurl KubernetesPuml/OSS/KubernetesPod.puml

actor "User" as user

Cluster_Boundary(cluster, "Kubernetes Cluster") {
    Namespace_Boundary(nsFrontEnd, "Front End") {
        KubernetesIng(ingress, "API Gateway", "")
        KubernetesPod(mesh, "NGINX/Traefik", "")
    }

    Namespace_Boundary(nsBackEnd, "Back End") {
        KubernetesPod(KubernetesBE1, "openfass\nfunction", "")
        KubernetesPod(KubernetesBE2, "openfass\nfunction", "")
        KubernetesPod(KubernetesBE3, "openfass\nfunction", "")
    }
}

component "IdP" as idp

AzureSqlDatabase(sql, "Portal\nDatabase", "")

Rel(user, ingress, "HTTPS")

Rel(ingress, mesh, "HTTPS")

Rel(mesh, idp, "Authenticate\nuser")

Rel(mesh, KubernetesBE1, "HTTPS")
Rel(mesh, KubernetesBE2, "HTTPS")
Rel(KubernetesBE2, KubernetesBE3, "HTTPS")
Rel(mesh, KubernetesBE3, "HTTPS")

Rel(KubernetesBE1, sql, "SSL")
Rel(KubernetesBE3, sql, "SSL")

@enduml

```

## Security

Users will be authenticated by an identity provider (IdP) service using OpenID Connect (oidc) protocol.
The IdP will be configured to support federation using social logins.

This service will also be used to managed the roles/permissions and claims of the system users.

In order to ensure sensitve data protection, OpenFAAS functions that has direct access to the system database will be called as core functions.
Those functions will be developed by a selected group of people that will managed the portal development.

All other portal functionality can be implemented by any free willing contributors.