build:
	docker buildx build --platform linux/amd64 -t rossreicks/freshness:latest --push -f ./apps/hello-fresh-api/Dockerfile .
	kubectl scale deployment main-api --replicas=0
	kubectl scale deployment main-api --replicas=1
