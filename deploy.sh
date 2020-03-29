docker build -t janakasteph/bitcoin-studio-client:latest -t janakasteph/bitcoin-studio-client:$SHA -f ./client/Dockerfile ./client
docker build -t janakasteph/bitcoin-studio-server:latest -t janakasteph/bitcoin-studio-server:$SHA -f ./api/Dockerfile ./api

docker push janakasteph/bitcoin-studio-client:latest
docker push janakasteph/bitcoin-studio-server:latest

docker push janakasteph/bitcoin-studio-client:$SHA
docker push janakasteph/bitcoin-studio-server:$SHA

kubectl apply -f k8s
# https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#updating-a-deployment
kubectl set image deployments/bitcoin-studio-client-deployment bitcoin-studio-client=janakasteph/bitcoin-studio-client:$SHA
kubectl set image deployments/bitcoin-studio-server-deployment bitcoin-studio-server=janakasteph/bitcoin-studio-server:$SHA
