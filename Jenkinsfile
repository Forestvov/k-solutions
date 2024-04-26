pipeline {

    environment {
        registry = "f-ksolutions"
        acPort = 1337
        dockerImage = ''
        }

    agent {
    node {
     label 'k-solutions-com'
     }
    }

    stages {
            stage('Delete old container') {
                        steps {
                            script {
                             try {
                           sh("java --version")
                           sh("docker stop f-ksolutions")
                           sh("docker rm f-ksolutions")
                           sh("docker rmi f-ksolutions")
                                        } catch (err) {
                                            echo err.getMessage()
                                        }
                            }
                         }
                    }
            stage('Build docker image') {
                 steps {
                     script {
                        sh("docker build -t  f-ksolutions .")
                     }
                  }
             }
            stage('Run docker container') {
                 steps {
                     script {
                        sh("docker run -td --restart unless-stopped -v /opt/certs/:/opt/certs  --name f-ksolutions -p 80:80 -p 443:443 f-ksolutions ")
                     }
                  }
             }
        }
}
