echo "### Deploy Script ###"

echo "## Docker ##"

echo "Docker Build"
docker build -t janakasteph/bitcoin-studio-client:latest -t janakasteph/bitcoin-studio-client:$SHA -f ./client/Dockerfile ./client
docker build -t janakasteph/bitcoin-studio-server:latest -t janakasteph/bitcoin-studio-server:$SHA -f ./api/Dockerfile ./api

echo "Docker Push"
docker push janakasteph/bitcoin-studio-client:latest
docker push janakasteph/bitcoin-studio-server:latest

docker push janakasteph/bitcoin-studio-client:$SHA
docker push janakasteph/bitcoin-studio-server:$SHA


echo "## K8S ##"

echo -n "K8S Context: "
kubectl config current-context --kubeconfig=${HOME}/.kube/config

###
# One Time Configuration
###

# Install nginx-ingress / create load balancer with external IP
# helm install my-nginx stable/nginx-ingress

# TLS Certificate
# kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.14.0/cert-manager.crds.yaml
# kubectl create namespace cert-manager
# helm repo add jetstack https://charts.jetstack.io
# helm repo update
# helm install cert-manager jetstack/cert-manager --namespace cert-manager --version v0.14.0
# kubectl get pods --namespace cert-manager

# echo "K8S Secrets"
#kubectl create secret generic smtp-gmail-pass --from-literal=SMTP_GMAIL_PASS=$SMTP_GMAIL_PASS \
#--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

#####

echo "K8S Apply"
kubectl apply -f ./k8s/bitcoin-studio-prod-namespace.yaml \
--kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-server-cluster-ip-service.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-client-cluster-ip-service.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-server-deployment.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-client-deployment.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/certificate.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/issuer.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-ingress-service.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config


echo "K8S Update"
# https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment
kubectl set image deployments/bitcoin-studio-client-deployment \
bitcoin-studio-client=janakasteph/bitcoin-studio-client:$SHA \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl set image deployments/bitcoin-studio-server-deployment \
bitcoin-studio-server=janakasteph/bitcoin-studio-server:$SHA \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config