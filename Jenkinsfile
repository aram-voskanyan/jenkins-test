node {
    stage('Checkout') {
        checkout scm
    }
    stage('build') {
        docker.image('FROM mhart/alpine-node:8.16').inside{
            sh 'ls -alh'
        }
    }
}
