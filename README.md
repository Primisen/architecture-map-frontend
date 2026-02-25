# Architecture-map-belarus frontend

This app is frontend of architecture-map-belarus site

Site: https://architecture-map.by/

# Run locally

```shell
# using docker
docker build -t frontend .
docker run --rm --name frontend -p 4200:4200 frontend

# using nerdctl
nerdctl build -t frontend .
nerdctl run --rm --name frontend -p 4200:4200 frontend
```

# CI/CD

GitHub actions is used for CI/CD. Required variables:

- SSH_PRIVATE_KEY
- REMOTE_HOST
- REMOTE_USER
