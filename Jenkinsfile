pipeline {
    agent any
    stages {
        stage('build') {
            docker.image('FROM mhart/alpine-node:8.16').inside{
                withEnv(["Home=/tmp"]){
                    sh 'npm i'
                    sh 'npm test'
                }
            }
        }
    }
}
