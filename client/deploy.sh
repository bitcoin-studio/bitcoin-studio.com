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

#kubectl apply -f ./k8s/bitcoin-studio-prod-namespace.yaml \
#--kubeconfig=${HOME}/.kube/config

# echo "K8S Secrets"
#kubectl create secret generic smtp-gmail-pass --from-literal=SMTP_GMAIL_PASS=$SMTP_GMAIL_PASS \
#--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

#kubectl apply -f ./k8s/certificate-prod.yaml \
#--kubeconfig=${HOME}/.kube/config

#kubectl apply -f ./k8s/cluster-issuer-prod.yaml \
#--kubeconfig=${HOME}/.kube/config

#kubectl apply -f ./k8s/bitcoin-studio-ingress-service.yaml \
#--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config
#####

echo "K8S Apply"
kubectl apply -f ./k8s/bitcoin-studio-server-cluster-ip-service.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-client-cluster-ip-service.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-server-deployment.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl apply -f ./k8s/bitcoin-studio-client-deployment.yaml \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

echo "K8S Update"
# https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment
kubectl set image deployments/bitcoin-studio-client-deployment \
bitcoin-studio-client=janakasteph/bitcoin-studio-client:$SHA \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config

kubectl set image deployments/bitcoin-studio-server-deployment \
bitcoin-studio-server=janakasteph/bitcoin-studio-server:$SHA \
--namespace=bitcoin-studio-prod --kubeconfig=${HOME}/.kube/config