pipeline {
    agent {
        docker {
            image 'node:13.10.1-stretch'
            args '-u root:sudo -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
        }
    }

environment {
        HOME = '.'
        custom_workspace = 'temp'
    }
options {
      buildDiscarder(logRotator(numToKeepStr: '5'))
    }    

stages {
        stage('Checkout'){
            steps {
                cleanWs()
                checkout scm
            }
        }
 stage('NPM Install'){
            steps {
                sh "echo $WORKSPACE > tempfile.txt"
                script {
                    custom_workspace = readFile('tempfile.txt').trim()
                }
                sh "echo ${custom_workspace}"
                sh 'npm install'
                sh 'npm link @angular/cli@8.3.6'
            }
        }
}

