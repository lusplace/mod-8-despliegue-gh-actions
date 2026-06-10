# COMANDOS SUADOS PARA PRUEBAS:


`docker build -t luluspanics/helloworld --build-arg NODE_ENV=production --build-arg PORT=4201 .`

`docker run -d -p 4201:4201 luluspanics/helloworld:latest`

## Metodo 1: navegador:
entrar a localhost:4201 (u otro puerto definido por el usuario)

![alt text](image.png)

## Metodo 2: docker exec:

`docker ps` para tener el id del contenedor (ejemplo: docker run -d -p 4201:4201 luluspanics/helloworld:latest o \<id>)

y 

`docker exec -it <id> bash`

`curl localhost:<numerodepuerto>`

![alt text](image-1.png)