!define AzurePuml https://raw.githubusercontent.com/plantuml-stdlib/Azure-PlantUML/master/dist
!includeurl AzurePuml/General/Azure.puml
rectangle [Maagan\nMichael\nCloud\n<$Azure>] as cloud {

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
    component "IdP" as idp
}