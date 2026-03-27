pipeline {
    agent any

    environment {
        // Credenciales de Docker Hub (deben crearse en Jenkins -> Manage Jenkins -> Credentials)
        DOCKER_HUB_USER = 'salomeyr'
        DOCKER_HUB_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                // Jenkins automáticamente hace checkout si usamos un repositorio de Git
                echo 'Checking out source code...'
                checkout scm
            }
        }

        stage('Building Images') {
            steps {
                echo 'Construyendo imágenes con Docker Compose...'
                sh 'docker-compose build'
            }
        }

        stage('Login and Push to Docker Hub') {
            steps {
                script {
                    echo 'Iniciando sesión en Docker Hub...'
                    withCredentials([usernamePassword(credentialsId: "${DOCKER_HUB_CREDENTIALS_ID}", passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh "echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin"
                    }
                    echo 'Empujando imágenes a Docker Hub...'
                    sh 'docker-compose push'
                }
            }
        }

        stage('Deploy (CD)') {
            steps {
                echo 'Desplegando la aplicación...'
                // Reiniciamos los contenedores con las nuevas imágenes
                sh 'docker-compose up -d --remove-orphans'
                echo 'Aplicación desplegada exitosamente.'
            }
        }
    }

    post {
        always {
            echo 'Limpiando sesión de Docker...'
            sh 'docker logout'
        }
        success {
            echo '¡Pipeline finalizado con éxito!'
        }
        failure {
            echo 'El pipeline ha fallado. Revisa los logs.'
        }
    }
}
