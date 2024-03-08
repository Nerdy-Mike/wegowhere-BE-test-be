terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "3.0.2"
    }
  }
}

provider "docker" {
  # Configuration options
  host = "unix:///var/run/docker.sock"
}

resource "docker_image" "app" {
  name = "app:latest"
}


resource "docker_container" "app" {
  name  = "app"
  image = docker_image.app.id
  ports {
    internal = 3001
    external = 3001
  }
}

resource "docker_image" "rabbitmq" {
  name = "rabbitmq:3-management"
}

resource "docker_container" "rabbitmq" {
  name  = "rabbitmq"
  image = docker_image.rabbitmq.id
  ports {
    internal = 5672
    external = 5672
  }
  env = [
    "RABBITMQ_DEFAULT_USER=user",
    "RABBITMQ_DEFAULT_PASS=password"
  ]
}