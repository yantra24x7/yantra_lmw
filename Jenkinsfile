pipeline {
    agent {
        docker {
            image 'node:13.10.1-stretch'
            args '-u root:sudo -v /var/run/docker.sock:/var/run/docker.sock -v /usr/bin/docker:/usr/bin/docker'
        }
    }
    options {
      buildDiscarder(logRotator(numToKeepStr: '5'))
    } 
}
    
