# Portafolio 2026

Sitio web personal de Carolina Villegas. HTML/CSS/JS estático servido con Nginx.

## Stack

- HTML + CSS + JavaScript
- Nginx
- Docker

## Correr en local

```bash
docker compose up --build
```

Abre http://localhost

## Deploy

El contenedor se conecta automáticamente a la red `prittor-proxy` para ser enrutado por Caddy.

```bash
# En el servidor
git pull
docker compose up --build -d
```

## Dominio

`prittor.com` / `www.prittor.com`
