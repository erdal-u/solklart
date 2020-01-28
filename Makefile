dev: buld run

build:
	docker build -t soltak:latest .

run:
	docker run -d -p 8080:8080 --name soltak soltak

pack: build
	docker save -o soltak.tar soltak